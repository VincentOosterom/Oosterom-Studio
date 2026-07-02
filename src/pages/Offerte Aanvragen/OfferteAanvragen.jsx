import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './OfferteAanvragen.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";

// ── Animatie ──────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
    }),
};

// ── Stappen links (vertrouwenssignalen) ───────────────────────────────────────

const stappen = [
    {
        num: "01",
        title: "Aanvraag invullen",
        desc: "Vertel ons kort over je project, budget en wat je wilt bereiken."
    },
    {
        num: "02",
        title: "Reactie binnen 24 uur",
        desc: "We nemen persoonlijk contact op. Geen geautomatiseerde mails."
    },
    {
        num: "03",
        title: "Vrijblijvend gesprek",
        desc: "We bespreken je wensen en geven eerlijk advies, ook als dat betekent dat maatwerk niet nodig is."
    },
];

// ── Component ─────────────────────────────────────────────────────────────────

function OfferteAanvragen() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError]             = useState(null);
    const [bezig, setBezig]             = useState(false);
    const [formData, setFormData]       = useState({
        name: "", company: "", email: "",
        service: "", budget: "", message: ""
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
                body: JSON.stringify({ ...formData, type: "offerte" }),
            });

            const data = await response.json();

            if (response.ok) {
                setFormData({ name: "", company: "", email: "", service: "", budget: "", message: "" });
                setIsSubmitted(true);
            } else {
                setError(data.error || "Er is iets misgegaan, probeer het later opnieuw.");
            }
        } catch {
            setError("Er is iets misgegaan, probeer het later opnieuw.");
        } finally {
            setBezig(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Offerte aanvragen | Oosterom Studio</title>
                <meta name="description" content="Vraag een gratis gesprek aan bij Oosterom Studio. Vertel ons over jouw project en ontvang binnen 24 uur een persoonlijke reactie." />
                <meta name="robots" content="noindex, nofollow" />
                <meta property="og:title" content="Offerte aanvragen | Oosterom Studio" />
                <meta property="og:description" content="Vertel ons over jouw project en ontvang binnen 24 uur een persoonlijke reactie van Oosterom Studio." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/offerte-aanvragen" />
                <meta property="og:site_name" content="Oosterom Studio" />
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg" />
            </Helmet>

            <Navigate />

            <div className="offerte-bg" aria-hidden="true" />

            <section className="offerte-section">
                <div className="offerte-container">

                    {/* ── Info kolom (links) ── */}
                    <motion.article
                        className="offerte-info"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        <span className="offerte-tag">Offerte aanvragen</span>

                        <h1>
                            Vertel ons over<br />
                            <em>jouw project.</em>
                        </h1>

                        <p className="offerte-intro">
                            Geen standaard offerte-formulier. We lezen je aanvraag
                            persoonlijk en nemen binnen 24 uur contact op.
                        </p>

                        {/* Drie stappen */}
                        <div className="offerte-stappen">
                            {stappen.map((stap, i) => (
                                <motion.div
                                    key={stap.num}
                                    className="offerte-stap"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i + 1}
                                >
                                    <span className="offerte-stap__num">{stap.num}</span>
                                    <div>
                                        <strong>{stap.title}</strong>
                                        <p>{stap.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Kleine disclaimer */}
                        <p className="offerte-disclaimer">
                            Liever eerst een vraag stellen?{" "}
                            <Link to="/contact">Stuur een bericht →</Link>
                        </p>
                    </motion.article>

                    {/* ── Formulier kolom (rechts) ── */}
                    {!isSubmitted ? (
                        <motion.form
                            className="offerte-form"
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
                                        placeholder="Jouw bedrijf B.V."
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

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="service">Waar ben je naar op zoek? <span aria-hidden="true">*</span></label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Kies een dienst</option>
                                        <option value="webdesign">Webdesign & UX</option>
                                        <option value="development">Webdevelopment</option>
                                        <option value="complete">Complete website</option>
                                        <option value="saas">SaaS & Digitale systemen</option>
                                        <option value="klantportaal">Klantportaal & CRM</option>
                                        <option value="software">Software op maat</option>
                                        <option value="ai-agents">AI Agents & Automatisering</option>
                                        <option value="avg">AVG-proof website</option>
                                        <option value="onderhoud">Onderhoud & Support</option>
                                        <option value="branding">Branding & Strategie</option>
                                        <option value="seo">SEO & Performance</option>
                                        <option value="anders">Iets anders</option>
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="budget">Geschat budget</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Nog geen idee</option>
                                        <option value="500-1500">€500 – €1.500</option>
                                        <option value="1500-3000">€1.500 – €3.000</option>
                                        <option value="3000-5000">€3.000 – €5.000</option>
                                        <option value="5000-plus">€5.000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">Vertel kort over je project <span aria-hidden="true">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Wat wil je bouwen, voor wie, en wat is de urgentie?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="offerte-submit"
                                disabled={bezig}
                            >
                                {bezig ? (
                                    <>
                                        <span className="offerte-submit__spinner" />
                                        Versturen…
                                    </>
                                ) : (
                                    "Verstuur aanvraag →"
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
                            <h2>Aanvraag ontvangen!</h2>
                            <p>
                                We hebben je aanvraag goed ontvangen en nemen
                                binnen 24 uur persoonlijk contact op.
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

export default OfferteAanvragen;