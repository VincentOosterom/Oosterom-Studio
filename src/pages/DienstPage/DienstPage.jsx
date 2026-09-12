import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './DienstPage.css'
import Navigate from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";
import SEO from "../../components/seo/SEO.jsx";
// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

// ── FAQ Item ──────────────────────────────────────────────────────────────────

function FaqItem({ vraag, antwoord }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
            <button className="faq-item__trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
                <span>{vraag}</span>
                <svg
                    className={`faq-item__icon ${open ? "faq-item__icon--open" : ""}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="faq-item__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <p>{antwoord}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── DienstPage Template ───────────────────────────────────────────────────────

/**
 * @param {Object} props
 * @param {string} props.title           - Paginatitel voor <title>
 * @param {string} props.metaDescription - SEO description
 * @param {string} props.slug            - Route pad, bv. "/diensten/webdesign" (voor canonical/og:url/schema)
 * @param {string} props.heroTag         - Klein label boven hero headline
 * @param {string} props.heroTitle       - Grote headline (kan \n bevatten)
 * @param {string} props.heroSubtitle    - Subtitel onder headline
 * @param {Object} props.heroIcon        - SVG JSX element
 * @param {Array}  props.diensten        - [{ icon, title, desc, features: [] }]
 * @param {Array}  props.stappen         - [{ num, title, desc }]
 * @param {Array}  props.faq             - [{ vraag, antwoord }]
 * @param {string} props.ctaTitle        - CTA sectie titel
 * @param {string} props.ctaSubtitle     - CTA sectie subtitel
 */
function DienstPage({
                        title,
                        metaDescription,
                        slug,
                        heroTag,
                        heroTitle,
                        heroSubtitle,
                        heroIcon,
                        diensten = [],
                        stappen = [],
                        faq = [],
                        ctaTitle = "Klaar om te starten?",
                        ctaSubtitle = "Plan een vrijblijvend gesprek en ontvang binnen 24 uur een reactie.",
                    }) {
    const canonicalUrl = `https://www.oosteromstudio.nl${slug ?? ""}`;

    return (
        <>
            <SEO
                title={title}
                description={metaDescription}
                path={slug ?? ""}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": title,
                        "description": metaDescription,
                        "url": canonicalUrl,
                        "provider": {
                            "@type": "Organization",
                            "name": "Oosterom Studio",
                            "url": "https://www.oosteromstudio.nl"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Netherlands"
                        }
                    },
                    ...(faq.length > 0
                        ? [{
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faq.map((item) => ({
                                "@type": "Question",
                                "name": item.vraag,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.antwoord
                                }
                            }))
                        }]
                        : [])
                ]}
            />
            <Navigate/>

            {/* ── HERO ── */}
            <section className="dienst-hero">
                <div className="dienst-hero__bg-grid" />
                <div className="dienst-hero__glow" />

                <motion.div
                    className="dienst-hero__content"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="dienst-hero__tag" variants={fadeUp}>
                        {heroIcon && <span className="dienst-hero__tag-icon">{heroIcon}</span>}
                        {heroTag}
                    </motion.div>

                    <motion.h1 className="dienst-hero__title" variants={fadeUp}>
                        {heroTitle.split("\n").map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </motion.h1>

                    <motion.p className="dienst-hero__subtitle" variants={fadeUp}>
                        {heroSubtitle}
                    </motion.p>

                    <motion.div className="dienst-hero__actions" variants={fadeUp}>
                        <Link to="/offerte-aanvragen" className="btn-primary">
                            Gratis strategiegesprek
                        </Link>
                        <Link to="/portfolio" className="btn-ghost">
                            Bekijk cases →
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── WAT WE DOEN ── */}
            {diensten.length > 0 && (
                <section className="dienst-section">
                    <motion.div
                        className="dienst-section__inner"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span className="section-tag" variants={fadeUp}>Wat we doen</motion.span>
                        <motion.h2 className="section-title" variants={fadeUp}>
                            Onze aanpak binnen <em>{heroTag}</em>
                        </motion.h2>

                        <motion.div className="dienst-cards" variants={stagger}>
                            {diensten.map((d, i) => (
                                <motion.div className="dienst-card" key={i} variants={fadeUp}>
                                    <div className="dienst-card__icon">{d.icon}</div>
                                    <h3 className="dienst-card__title">{d.title}</h3>
                                    <p className="dienst-card__desc">{d.desc}</p>
                                    {d.features?.length > 0 && (
                                        <ul className="dienst-card__features">
                                            {d.features.map((f, j) => (
                                                <li key={j}>{f}</li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>
            )}

            {/* ── WERKWIJZE ── */}
            {stappen.length > 0 && (
                <section className="dienst-section dienst-section--dark">
                    <motion.div
                        className="dienst-section__inner"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span className="section-tag" variants={fadeUp}>Werkwijze</motion.span>
                        <motion.h2 className="section-title" variants={fadeUp}>
                            Zo werken we <em>samen</em>
                        </motion.h2>

                        <motion.div className="stappen-grid" variants={stagger}>
                            {stappen.map((s, i) => (
                                <motion.div className="stap" key={i} variants={fadeUp}>
                                    <span className="stap__num">{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="stap__title">{s.title}</h3>
                                    <p className="stap__desc">{s.desc}</p>
                                    {i < stappen.length - 1 && (
                                        <div className="stap__connector" />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>
            )}

            {/* ── FAQ ── */}
            {faq.length > 0 && (
                <section className="dienst-section">
                    <motion.div
                        className="dienst-section__inner dienst-section__inner--narrow"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span className="section-tag" variants={fadeUp}>FAQ</motion.span>
                        <motion.h2 className="section-title" variants={fadeUp}>
                            Veelgestelde <em>vragen</em>
                        </motion.h2>

                        <motion.div className="faq-list" variants={stagger}>
                            {faq.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <FaqItem vraag={item.vraag} antwoord={item.antwoord} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="dienst-cta">
                <div className="dienst-cta__glow" />
                <motion.div
                    className="dienst-cta__inner"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeUp}>{ctaTitle}</motion.h2>
                    <motion.p variants={fadeUp}>{ctaSubtitle}</motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/offerte-aanvragen" className="btn-primary btn-primary--large">
                            Start jouw project →
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}

export default DienstPage;