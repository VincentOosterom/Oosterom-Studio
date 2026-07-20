import './Homepage.css';
import Header from "../../components/header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import MovingBar from "../../components/movingbar/movingBar.jsx";
import IntentSection from "../../components/intent-section/IntentSection.jsx";
import WatWeBouwen from "../../components/wat_we_bouwen/WatWeBouwen.jsx";

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.7}},
};

const staggerChildren = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.15}},
};

// ── Component ──────────────────────────────────────────────────────────────

function Homepage() {
    const {t, i18n} = useTranslation();
    const isSpanish = i18n.language === 'es';

    const canonicalUrl = isSpanish
        ? 'https://www.oosteromstudio.nl/es'
        : 'https://www.oosteromstudio.nl/';
    const offertePath = isSpanish ? '/es/solicitar-presupuesto' : '/offerte-aanvragen';
    const overOnsPath = isSpanish ? '/es/sobre-nosotros' : '/over-ons';

    return (
        <>
            <Helmet>
                <title>{t('home.meta_title')}</title>

                <meta
                    name="description"
                    content={t('home.meta_description')}
                />

                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hreflang="nl" href="https://www.oosteromstudio.nl/" />
                <link rel="alternate" hreflang="es" href="https://www.oosteromstudio.nl/es" />
                <link rel="alternate" hreflang="x-default" href="https://www.oosteromstudio.nl/" />

                <meta property="og:title" content={t('home.og_title')}/>
                <meta
                    property="og:description"
                    content={t('home.og_description')}
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={canonicalUrl}/>
                <meta property="og:site_name" content="Oosterom Studio"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Oosterom Studio",
                        "url": "https://www.oosteromstudio.nl",
                        "logo": "https://www.oosteromstudio.nl/og-image.jpg",
                        "founder": {
                            "@type": "Person",
                            "name": "Vincent Oosterom"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "vincent@oosteromstudio.nl",
                            "contactType": "customer service",
                            "availableLanguage": t('home.jsonld_language')
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Netherlands"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/vincent-oosterom-05017176/",
                            "https://www.instagram.com/oosteromstudio"
                        ],
                        "description": t('home.jsonld_description')
                    })}
                </script>
            </Helmet>


            <Header
                title={t('home.hero.title')}
                subtitle={t('home.hero.subtitle')}
                buttonText={t('home.hero.button')}
                tag="Welkom bij Oosterom Studio"
            />
            <MovingBar/>

            <main>
                <section className="values-section">
                    <motion.div
                        className="values-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <motion.span className="values-tag" variants={fadeUp}>
                            {t('home.values.tag')}
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            {t('home.values.titel_deel1')} <em>{t('home.values.titel_em')}</em>{t('home.values.titel_deel2')}<br/>{t('home.values.titel_deel3')}
                        </motion.h2>

                        <motion.p className="values-subtitle" variants={fadeUp}>
                            {t('home.values.subtitle')}
                        </motion.p>

                        <section className="values-grid">
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                    </svg>
                                </div>
                                <h3>{t('home.values.card1_titel')}</h3>
                                <p>{t('home.values.card1_tekst')}</p>
                            </motion.article>

                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                </div>
                                <h3>{t('home.values.card2_titel')}</h3>
                                <p>{t('home.values.card2_tekst')}</p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M18 20V10M12 20V4M6 20v-6"/>
                                    </svg>
                                </div>
                                <h3>{t('home.values.card3_titel')}</h3>
                                <p>{t('home.values.card3_tekst')}</p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                    </svg>
                                </div>
                                <h3>{t('home.values.card4_titel')}</h3>
                                <p>{t('home.values.card4_tekst')}</p>
                            </motion.article>
                        </section>
                    </motion.div>
                </section>

                <section className="waarom-section">
                    <motion.div
                        className="waarom-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="waarom-header">
                            <motion.span className="waarom-tag" variants={fadeUp}>
                                {t('home.waarom.tag')}
                            </motion.span>
                            <motion.h2 variants={fadeUp}>
                                {t('home.waarom.titel_deel1')}<br/>
                                <em>{t('home.waarom.titel_em')}</em>
                            </motion.h2>
                            <motion.p className="waarom-subtitle" variants={fadeUp}>
                                {t('home.waarom.subtitle')}
                            </motion.p>
                        </div>

                        <motion.div className="waarom-grid" variants={staggerChildren}>

                            <motion.div className="waarom-card waarom-card--wide" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
                                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                                    </svg>
                                </div>
                                <h3>{t('home.waarom.card1_titel')}</h3>
                                <p>{t('home.waarom.card1_tekst')}</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                        <path d="M9 12l2 2 4-4"/>
                                    </svg>
                                </div>
                                <h3>{t('home.waarom.card2_titel')}</h3>
                                <p>{t('home.waarom.card2_tekst')}</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 8v4l3 3"/>
                                    </svg>
                                </div>
                                <h3>{t('home.waarom.card3_titel')}</h3>
                                <p>{t('home.waarom.card3_tekst')}</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                    </svg>
                                </div>
                                <h3>{t('home.waarom.card4_titel')}</h3>
                                <p>{t('home.waarom.card4_tekst')}</p>
                            </motion.div>

                            <motion.div className="waarom-card waarom-card--accent" variants={fadeUp}>
                                <p className="waarom-card__quote">
                                    {t('home.waarom.quote')}
                                </p>
                                <Link to={overOnsPath} className="waarom-card__link">
                                    {t('home.waarom.quote_link')}
                                </Link>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </section>

                <WatWeBouwen/>


                <section className="aanpak-section">
                    <motion.div
                        className="aanpak-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="aanpak-header">
                            <motion.span className="aanpak-tag" variants={fadeUp}>
                                {t('home.aanpak.tag')}
                            </motion.span>
                            <motion.h2 variants={fadeUp}>
                                {t('home.aanpak.titel_deel1')} <em>{t('home.aanpak.titel_em')}</em>
                            </motion.h2>
                        </div>

                        <motion.div className="aanpak-stappen" variants={staggerChildren}>
                            {[
                                {
                                    num: "01",
                                    title: t('home.aanpak.stap1_titel'),
                                    desc: t('home.aanpak.stap1_tekst')
                                },
                                {
                                    num: "02",
                                    title: t('home.aanpak.stap2_titel'),
                                    desc: t('home.aanpak.stap2_tekst')
                                },
                                {
                                    num: "03",
                                    title: t('home.aanpak.stap3_titel'),
                                    desc: t('home.aanpak.stap3_tekst')
                                },
                                {
                                    num: "04",
                                    title: t('home.aanpak.stap4_titel'),
                                    desc: t('home.aanpak.stap4_tekst')
                                },
                            ].map(({num, title, desc}) => (
                                <motion.div className="aanpak-stap" key={num} variants={fadeUp}>
                                    <span className="aanpak-stap__num">{num}</span>
                                    <h3 className="aanpak-stap__title">{title}</h3>
                                    <p className="aanpak-stap__desc">{desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                <section className="pricing-section">
                    <motion.div
                        className="pricing-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="pricing-glow"/>

                        <motion.span className="pricing-tag" variants={fadeUp}>
                            {t('home.pricing.tag')}
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            {t('home.pricing.titel_deel1')}<br/>
                            <em>{t('home.pricing.titel_em')}</em>
                        </motion.h2>

                        <motion.p className="pricing-intro" variants={fadeUp}>
                            {t('home.pricing.intro')}
                        </motion.p>

                        <motion.div className="pricing-pillars" variants={staggerChildren}>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">01</span>
                                <h3>{t('home.pricing.pillar1_titel')}</h3>
                                <p>{t('home.pricing.pillar1_tekst')}</p>
                            </motion.div>
                            <div className="pricing-pillar__divider"/>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">02</span>
                                <h3>{t('home.pricing.pillar2_titel')}</h3>
                                <p>{t('home.pricing.pillar2_tekst')}</p>
                            </motion.div>
                            <div className="pricing-pillar__divider"/>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">03</span>
                                <h3>{t('home.pricing.pillar3_titel')}</h3>
                                <p>{t('home.pricing.pillar3_tekst')}</p>
                            </motion.div>
                        </motion.div>

                        <motion.div className="pricing-cta" variants={fadeUp}>
                            <Link to={offertePath} className="btn-primary btn-primary--large">
                                {t('home.pricing.cta_button')}
                            </Link>
                            <p className="pricing-cta__sub">{t('home.pricing.cta_sub')}</p>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;