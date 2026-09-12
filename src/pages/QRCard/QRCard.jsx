

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import WowIntro from "../../components/wowIntro/WowIntro.jsx";
import "./QRCard.css";
import pf from "/pf.jpeg"; // <-- pas pad/bestandsnaam aan naar waar jouw foto staat


const contact = {
    naam: "Vincent Oosterom",
    functie: "Founder of Oosterom Studio",
    telefoon: "0640294823", // vul in als je een zakelijk nummer wil delen, bijv. "+31612345678"
    email: "vincent@oosteromstudio.nl",
    website: "https://www.oosteromstudio.nl",
    linkedin: "https://www.linkedin.com/in/vincent-oosterom-05017176/",
    bedrijf: "Oosterom Studio",
    tagline: "Wij bouwen digitale ervaringen die bedrijven laten groeien.",
};


function downloadVCard() {
    const vcardLines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${contact.naam}`,
        `ORG:${contact.bedrijf}`,
        `TITLE:${contact.functie}`,
        contact.telefoon ? `TEL;TYPE=CELL:${contact.telefoon}` : null,
        `EMAIL:${contact.email}`,
        `URL:${contact.website}`,
        "END:VCARD",
    ].filter(Boolean);

    const vcardContent = vcardLines.join("\n");
    const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${contact.naam.replace(/\s+/g, "-")}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ── Animatie: knoppen/links schuiven na de intro subtiel omhoog ──────────
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
};

function QRCard() {
    const [introDone, setIntroDone] = useState(false);

    return (
        <>
            <Helmet>
                <title>{contact.naam} | {contact.bedrijf}</title>
                {/* Belangrijk: deze pagina mag NOOIT in Google verschijnen */}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <AnimatePresence>
                {!introDone && (
                    <WowIntro
                        tagline={contact.tagline}
                        onComplete={() => setIntroDone(true)}
                    />
                )}
            </AnimatePresence>

            <div className="qrcard-bg" aria-hidden="true" />

            <section className="qrcard-page">
                {introDone && (
                    <motion.div
                        className="qrcard-card"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >

                        <motion.div className="qrcard-avatar" variants={fadeUp} custom={1}>
                            <img src={pf} alt={`Profielfoto van ${contact.naam}`}/>
                        </motion.div>

                        <motion.h1 className="qrcard-naam" variants={fadeUp} custom={2}>
                            {contact.naam}
                        </motion.h1>
                        <motion.p className="qrcard-functie" variants={fadeUp} custom={3}>
                            {contact.functie}
                        </motion.p>
                        <motion.p className="qrcard-tagline" variants={fadeUp} custom={4}>
                            {contact.tagline}
                        </motion.p>

                        <motion.button
                            className="qrcard-save-btn"
                            variants={fadeUp}
                            custom={5}
                            onClick={downloadVCard}
                        >
                            Opslaan als contact →
                        </motion.button>

                        <motion.div className="qrcard-links" variants={fadeUp} custom={6}>
                            <a href={`mailto:${contact.email}`} className="qrcard-link">
                                <span className="qrcard-link__label">E-mail</span>
                                <span className="qrcard-link__value">{contact.email}</span>
                            </a>

                            {contact.telefoon && (
                                <a href={`tel:${contact.telefoon}`} className="qrcard-link">
                                    <span className="qrcard-link__label">Telefoon</span>
                                    <span className="qrcard-link__value">{contact.telefoon}</span>
                                </a>
                            )}

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="qrcard-link"
                            >
                                <span className="qrcard-link__label">LinkedIn</span>
                                <span className="qrcard-link__value">Bekijk profiel →</span>
                            </a>

                            <a
                                href={contact.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="qrcard-link"
                            >
                                <span className="qrcard-link__label">Website</span>
                                <span className="qrcard-link__value">oosteromstudio.nl →</span>
                            </a>
                        </motion.div>

                    </motion.div>
                )}
            </section>
        </>
    );
}

export default QRCard;