import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                setError(data.error || "Er is een fout opgetreden. Probeer het opnieuw.");
            }
        } catch {
            setError("Er is een fout opgetreden. Probeer het opnieuw.");
        } finally {
            setBezig(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact | Oosterom Studio</title>
                <meta name="description" content="Neem contact op met Oosterom Studio. Binnen 24 uur een persoonlijke reactie. Wij bouwen websites, webapplicaties en beveiligde digitale oplossingen voor MKB en startups." />
                <meta property="og:title" content="Contact | Oosterom Studio" />
                <meta property="og:description" content="Klaar om jouw project te starten? Stuur een bericht en ontvang binnen 24 uur een reactie." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/contact" />
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
                        <span className="contact-tag">Contact</span>

                        <h1>
                            Laten we<br />
                            <em>kennismaken.</em>
                        </h1>

                        <p className="contact-intro">
                            Heb je een vraag, idee of uitdaging? We denken graag mee,
                            ook als je nog niet precies weet wat je nodig hebt.
                        </p>

                        {/* Contactgegevens */}
                        <div className="contact-gegevens">
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={1} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">E-mail</span>
                                <a href="mailto:vincent@oosteromstudio.nl" className="contact-gegeven__value">
                                    vincent@oosteromstudio.nl
                                </a>
                            </motion.div>
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={2} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">Reactietijd</span>
                                <span className="contact-gegeven__value">Binnen 24 uur</span>
                            </motion.div>
                            <motion.div className="contact-gegeven" variants={fadeUp} custom={3} initial="hidden" animate="visible">
                                <span className="contact-gegeven__label">LinkedIn</span>
                                <a
                                    href="https://www.linkedin.com/in/vincent-oosterom-05017176/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-gegeven__value contact-gegeven__value--link"
                                >
                                    Vincent Oosterom →
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
                            <span className="contact-bedrijf__naam">Oosterom Studio</span>
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
                                Privacybeleid →
                            </a>
                        </motion.div>

                        <p className="contact-disclaimer">
                            Liever direct een offerte?{" "}
                            <Link to="/offerte-aanvragen">Vraag het hier aan →</Link>
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
                                    <label htmlFor="name">Naam <span aria-hidden="true">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Jan de Vries"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="company">Bedrijfsnaam</label>
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        placeholder="Optioneel"
                                        value={formData.company}
                                        onChange={handleChange}
                                        autoComplete="organization"
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">E-mailadres <span aria-hidden="true">*</span></label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="jouw@email.nl"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">Bericht <span aria-hidden="true">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Waar kunnen we je bij helpen?"
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
                                        Versturen…
                                    </>
                                ) : (
                                    "Verstuur bericht →"
                                )}
                            </button>

                            <p className="form-note">
                                Vrijblijvend · Geen spam · Reactie binnen 24 uur
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
                            <h2>Bericht ontvangen!</h2>
                            <p>
                                We hebben je bericht goed ontvangen en
                                nemen binnen 24 uur persoonlijk contact op.
                            </p>
                            <Link to="/" className="thank-you__link">
                                Terug naar home →
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