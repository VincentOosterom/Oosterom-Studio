import './Homepage.css';
import Header from "../../components/header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import MovingBar from "../../components/movingbar/movingBar.jsx";
import IntentSection from "../../components/intent-section/IntentSection.jsx";
import WatWeBouwen from "../../components/wat_we_bouwen/WatWeBouwen.jsx";

const IconBolt = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
);

const IconShield = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
    </svg>
);

const IconTarget = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>
);

const IconSearch = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
    </svg>
);

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.7}},
};

const staggerChildren = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.15}},
};

// ── Compo

function Homepage() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio – Digitaal sterk van buiten én van binnen</title>

                <meta
                    name="description"
                    content="Oosterom Studio bouwt maatwerk websites, Shopify webshops en beveiligde digitale oplossingen voor MKB en startups in Nederland. Snel, veilig en resultaatgericht."
                />

                <meta property="og:title" content="Oosterom Studio – Webdesign, Shopify & Cybersecurity"/>
                <meta
                    property="og:description"
                    content="Digitaal sterk van buiten én van binnen. Oosterom Studio combineert scherp webdesign met cybersecurity voor MKB en startups."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/"/>
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
                            "availableLanguage": "Dutch"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Netherlands"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/vincent-oosterom-05017176/",
                            "https://www.instagram.com/oosteromstudio"
                        ],
                        "description": "Oosterom Studio bouwt maatwerk websites, Shopify webshops en beveiligde digitale oplossingen voor MKB en startups in Nederland."
                    })}
                </script>
            </Helmet>


            <Header
                title="Van idee naar software die echt waarde levert."
                subtitle="Oosterom Studio bouwt webapps, SaaS-platformen en mobiele software voor het MKB. Doordacht ontworpen, technisch solide en vanaf de basis veilig ontwikkeld."
                buttonText="Klaar om te beginnen?"
            />
            <MovingBar/>

            <main>
                {/* Section 1: Kernwaarden */}
                <section className="values-section">
                    <motion.div
                        className="values-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span className="values-tag" variants={fadeUp}>
                            Waar we voor staan
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            Gebouwd op <em>principes</em>,<br />niet op aannames.
                        </motion.h2>

                        <motion.p className="values-subtitle" variants={fadeUp}>
                            Elke keuze die we maken, in design, code en samenwerking.
                            Komt voort uit dezelfde vier uitgangspunten.
                        </motion.p>

                        <section className="values-grid">
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                    </svg>
                                </div>
                                <h3>Performance First</h3>
                                <p>
                                    Snelheid is geen luxe, het is het uitgangspunt. We ontwikkelen
                                    technisch geoptimaliseerde websites met hoge Core Web Vitals-scores
                                    die bezoekers niet laten wachten.
                                </p>
                            </motion.article>

                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                </div>
                                <h3>Security by Default</h3>
                                <p>
                                    Beveiliging zit in de basis, niet als afvinkpunt achteraf. HTTPS,
                                    security headers en bescherming tegen veelvoorkomende aanvallen zijn
                                    standaard onderdeel van elk project.
                                </p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M18 20V10M12 20V4M6 20v-6"/>
                                    </svg>
                                </div>
                                <h3>Resultaatgericht</h3>
                                <p>
                                    Elke keuze, van structuur tot techniek, is gericht op conversie
                                    en groei. Een mooie website die niet converteert lost niets op.
                                </p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <div className="value-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                    </svg>
                                </div>
                                <h3>Langetermijnpartner</h3>
                                <p>
                                    We denken verder dan de oplevering. Systemen die meegroeien,
                                    code die overdraagbaar is, en eerlijk advies ook als dat betekent
                                    dat we je doorverwijzen.
                                </p>
                            </motion.article>
                        </section>
                    </motion.div>
                </section>

                <WatWeBouwen/>

                {/* Section 3: Aanpak */}
                <section className="approach-section">
                    <motion.div
                        className="approach-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <motion.h2 variants={fadeUp}>De aanpak</motion.h2>
                        <div className="approach-grid">
                            {[
                                {

                                    title: "Analyse & Strategie",
                                    desc: "We analyseren je markt, doelgroep en technische situatie. Geen aannames, wel een helder beeld van waar je staat en waar je naartoe wilt."
                                },
                                {

                                    title: "Architectuur & Design",
                                    desc: "We ontwerpen een schaalbare en conversiegerichte structuur. Visueel sterk, technisch doordacht, afgestemd op jouw merk."
                                },
                                {

                                    title: "Development & Optimalisatie",
                                    desc: "We bouwen, testen en optimaliseren voor performance en veiligheid. Elke regel code heeft een reden."
                                },
                                {

                                    title: "Oplevering & Nazorg",
                                    desc: "Na de lancering ben je er niet alleen voor. We zorgen voor een soepele overdracht, beantwoorden vragen en staan klaar voor doorontwikkeling."
                                },
                            ].map(({title, desc}) => (
                                <motion.div className="approach-card" variants={fadeUp}>
                                    <span className="approach-step"></span>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Section 6: Investering */}
                <section className="pricing-section">
                    <motion.div
                        className="pricing-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="pricing-glow" />

                        <motion.span className="pricing-tag" variants={fadeUp}>
                            Investering
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            Geen pakketten.<br />
                            <em>Wel een eerlijke prijs.</em>
                        </motion.h2>

                        <motion.p className="pricing-intro" variants={fadeUp}>
                            Wij werken niet met standaardpakketten, omdat geen enkel bedrijf
                            hetzelfde is. Elk project begint met een goed gesprek, daarna
                            ontvang je een heldere offerte zonder verborgen kosten.
                        </motion.p>

                        <motion.div className="pricing-pillars" variants={staggerChildren}>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">01</span>
                                <h3>Gesprek</h3>
                                <p>We bespreken jouw doelen, wensen en technische behoeften. Geen verkooppraatje, wel eerlijk advies.</p>
                            </motion.div>
                            <div className="pricing-pillar__divider" />
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">02</span>
                                <h3>Offerte</h3>
                                <p>Je ontvangt een heldere offerte op maat, transparant, zonder kleine lettertjes of verrassingen achteraf.</p>
                            </motion.div>
                            <div className="pricing-pillar__divider" />
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">03</span>
                                <h3>Bouwen</h3>
                                <p>Zodra we akkoord zijn, gaan we aan de slag. Je wordt op de hoogte gehouden en kan altijd bijsturen.</p>
                            </motion.div>
                        </motion.div>

                        <motion.div className="pricing-cta" variants={fadeUp}>
                            <Link to="/offerte-aanvragen" className="btn-primary btn-primary--large">
                                Plan een gratis gesprek →
                            </Link>
                            <p className="pricing-cta__sub">Vrijblijvend · Reactie binnen 24 uur</p>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;
