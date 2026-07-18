import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";
import privacy from "../../assets/Privacybeleid Oosterom Studio.pdf";

// ── Animatie ──────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
    }),
};

// ── Component ─────────────────────────────────────────────────────────────────

function Contact() {
    const { t, i18n } = useTranslation();
    const isSpanish = i18n.language === 'es';

    // Taalbewuste links — zolang er nog geen algemene helper voor is
    const homePath = isSpanish ? '/es' : '/';
    const offertePath = isSpanish ? '/es/solicitar-presupuesto' : '/offerte-aanvragen';
    const canonicalUrl = isSpanish
        ? 'https://www.oosteromstudio.nl/es/contacto'
        : 'https://www.oosteromstudio.nl/contact';

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError]             = useState(null);
    const [bezig, setBezig]             = useState(false);
    const [formData, setFormData]       = useState({
        name: "", company: "", email: "", message: ""
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setBezig(true);

        try {
            const response = await fetch("/api/contact-formulier", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, type: "contact" }),
            });

            const data = await response.json();

            if (response.ok) {
                setFormData({ name: "", company: "", email: "", message: "" });
                setIsSubmitted(true);
            } else {
                setError(data.error || t('contact.form.generieke_foutmelding'));
            }
        } catch {
            setError(t('contact.form.generieke_foutmelding'));
        } finally {
            setBezig(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>{t('contact.meta_title')}</title>
                <meta name="description" content={t('contact.meta_description')} />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hreflang="nl" href="https://www.oosteromstudio.nl/contact" />
                <link rel="alternate" hreflang="es" href="https://www.oosteromstudio.nl/es/contacto" />
                <link rel="alternate" hreflang="x-default" href="https://www.oosteromstudio.nl/contact" />
                <meta property="og:title" content={t('contact.meta_title')} />
                <meta property="og:description" content={t('contact.og_description')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="Oosterom Studio" />
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg" />
            </Helmet>

            <Navigate />

            <div className="contact-bg" aria-hidden="true" />

            <section className="contact-section">
                <div className="contact-container">

                    {/* ── Info kolom (links) ── */}
                    <motion.article
                        className="contact-info"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        <span className="contact-tag">{t('contact.tag')}</span>

                        <h1>
                            {t('contact.titel_regel1')}<br />
                            <em>{t('contact.titel_regel2')}</em>
                        </h1>

                        <p className="contact-intro">
                            {t('contact.intro')}
                        </p>

                        {/* Contactgegevens */}
                        <div className="contact-gegevens">
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={1} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">{t('contact.gegevens.email_label')}</span>
                                <a href="mailto:vincent@oosteromstudio.nl" className="contact-gegeven__value">
                                    vincent@oosteromstudio.nl
                                </a>
                            </motion.div>
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={2} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">{t('contact.gegevens.reactietijd_label')}</span>
                                <span className="contact-gegeven__value">{t('contact.gegevens.reactietijd_waarde')}</span>
                            </motion.div>
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={3} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">{t('contact.gegevens.linkedin_label')}</span>
                                <a
                                    href="https://www.linkedin.com/in/vincent-oosterom-05017176/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-gegeven__value contact-gegeven__value--link"
                                >
                                    {t('contact.gegevens.linkedin_naam')}
                                </a>
                            </motion.div>
                        </div>

                        {/* Bedrijfsgegevens */}
                        <motion.div
                            className="contact-bedrijf"
                            variants={fadeUp}
                            custom={4}
                            initial="hidden"
                            animate="visible"
                        >
                            <span className="contact-bedrijf__naam">{t('contact.bedrijf.naam')}</span>
                            <div className="contact-bedrijf__details">
                                <span>KVK: 85118028</span>
                                <span>BTW: NL004057297B50</span>
                            </div>
                            <a
                                href={privacy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-bedrijf__privacy"
                            >
                                {t('contact.bedrijf.privacybeleid')}
                            </a>
                        </motion.div>

                        <p className="contact-disclaimer">
                            {t('contact.disclaimer_tekst')}{" "}
                            <Link to={offertePath}>{t('contact.disclaimer_link')}</Link>
                        </p>
                    </motion.article>

                    {/* ── Formulier (rechts) ── */}
                    {!isSubmitted ? (
                        <motion.form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        >
                            {error && (
                                <p className="form-error" role="alert">{error}</p>
                            )}

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="name">{t('contact.form.naam_label')} <span aria-hidden="true">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder={t('contact.form.naam_placeholder')}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="company">{t('contact.form.bedrijfsnaam_label')}</label>
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        placeholder={t('contact.form.bedrijfsnaam_placeholder')}
                                        value={formData.company}
                                        onChange={handleChange}
                                        autoComplete="organization"
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">{t('contact.form.email_label')} <span aria-hidden="true">*</span></label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder={t('contact.form.email_placeholder')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">{t('contact.form.bericht_label')} <span aria-hidden="true">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={t('contact.form.bericht_placeholder')}
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={bezig}
                            >
                                {bezig ? (
                                    <>
                                        <span className="contact-submit__spinner" />
                                        {t('contact.form.versturen_bezig')}
                                    </>
                                ) : (
                                    t('contact.form.versturen')
                                )}
                            </button>

                            <p className="form-note">
                                {t('contact.form.form_note')}
                            </p>
                        </motion.form>
                    ) : (
                        <motion.div
                            className="thank-you"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="thank-you__icon">✓</span>
                            <h2>{t('contact.dankjewel.titel')}</h2>
                            <p>
                                {t('contact.dankjewel.tekst')}
                            </p>
                            <Link to={homePath} className="thank-you__link">
                                {t('contact.dankjewel.terug_link')}
                            </Link>
                        </motion.div>
                    )}

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;