import './Homepage.css';
import Header from "../../components/header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import FigmaSection from "../../components/figma-section/FigmaSection.jsx";
import {Link} from "react-router-dom";
import MovingBar from "../../components/movingbar/movingBar.jsx";
import IntentSection from "../../components/intent-section/IntentSection.jsx";

const IconBolt = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
);

const IconShield = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
    </svg>
);

const IconTarget = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
    </svg>
);

const IconSearch = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
    </svg>
);

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerChildren = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
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
                title="Software die standhoudt ."
                subtitle="Ik ben Oosterom Studio. een eenmanszaak in Alphen aan den rijn die webapps, SaaS-platformen en mobiele software bouwt voor MKB en enterprise. Doordacht ontworpen, technisch solide, en veilig vanaf de eerste regel code."
                buttonText="Start jouw project"
            />
            <MovingBar/>

            <IntentSection/>

            {/* Section 1: Kernwaarden */}
            <section className="values-section">
                <motion.div
                    className="values-container"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeUp}>Kernwaarden</motion.h2>
                    <section className="values-grid">
                        <motion.article className="value-card" variants={fadeUp}>
                            <div className="value-icon"><IconBolt/></div>
                            <h3>Performance First</h3>
                            <p>
                                Wij ontwikkelen snelle en technisch geoptimaliseerde websites die voldoen aan
                                moderne performance standaarden, met hoge scores op Core Web Vitals als uitgangspunt.
                            </p>
                        </motion.article>
                        <motion.article className="value-card" variants={fadeUp}>
                            <div className="value-icon"><IconShield/></div>
                            <h3>Security by Default</h3>
                            <p>
                                Veiligheid is geen extra optie. Wij bouwen volgens best practices met aandacht voor
                                stabiele architectuur, HTTPS, security headers en bescherming tegen veelvoorkomende aanvallen.
                            </p>
                        </motion.article>
                        <motion.article className="value-card" variants={fadeUp}>
                            <div className="value-icon"><IconTarget/></div>
                            <h3>Resultaatgericht</h3>
                            <p>
                                Elke keuze, van structuur tot techniek, is gericht op conversie, groei en
                                schaalbaarheid. Een mooie website die niet converteert, is geen goede website.
                            </p>
                        </motion.article>
                    </section>
                </motion.div>
            </section>

            <section className="wat-we-bouwen">
                <h2>Wat ik bouw</h2>
                <div className="line"></div>
                <section className="wat-we-bouwen-cards">
                    <article className="wat-we-bouwen-card card-line">
                        <p className="color-primary">01 / 03</p>
                        <h3>Web apps & Saas</h3>
                        <p>Productiesystemen, klantportalen, interne tools. Postgres als bron van waarheid, deploys waar je niet van wakker ligt.</p>
                        <div className="bouwen-card-list">
                            <ul className="bouwen-card-list">
                                <li>PostgreSQL</li>
                                <li>React</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                    </article>
                    <article className="wat-we-bouwen-card card-line">
                        <p className="color-primary">02 / 03</p>
                        <h3>Custom Software</h3>
                        <p>Maatwerk waar standaardpakketten ophouden — integraties, dataplatforms, automatisering. Eerst je proces begrijpen, dan pas typen.</p>
                        <div className="bouwen-card-list">
                            <ul className="bouwen-card-list">
                                <li>PostgreSQL</li>
                                <li>React</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                    </article>
                    <article className="wat-we-bouwen-card">
                        <p className="color-primary">03 / 03</p>
                        <h3>Mobile Apps</h3>
                        <p>iOS en Android via React Native. Offline-first, biometrische auth, encrypted-at-rest. Geen webview-omhulsel.</p>
                        <div className="bouwen-card-list">
                            <ul className="bouwen-card-list">
                                <li>PostgreSQL</li>
                                <li>React Native</li>
                                <li>IOS & Android</li>
                            </ul>
                        </div>
                    </article>
                </section>
            </section>

            {/* Section 3: Aanpak */}
            <section className="approach-section">
                <motion.div
                    className="approach-container"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                        ].map(({ title, desc }) => (
                            <motion.div className="approach-card" variants={fadeUp}>
                                <span className="approach-step"></span>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Section 4: Figma */}
            <FigmaSection/>

            {/* Section 5: CTA */}
            <section className="cta-section">
                <motion.div
                    className="cta-container"
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeUp}>
                        Klaar om jouw project te starten?
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Of je nu een nieuwe website nodig hebt, je huidige design wilt vernieuwen of online beter
                        gevonden wilt worden, wij helpen je graag verder.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/contact" className="cta-button">Neem contact op</Link>
                    </motion.div>
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
                    <motion.h2 variants={fadeUp}>Investering</motion.h2>
                    <motion.p variants={fadeUp}>
                        Wij bouwen maatwerk digitale oplossingen. Daarom werken we niet met standaard templates
                        of vaste pakketten, maar met een gerichte aanpak afgestemd op jouw doelstellingen.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        Tijdens een vrijblijvend strategiegesprek brengen we jouw wensen, groeidoelen en
                        technische behoeften in kaart. Op basis daarvan ontvang je een heldere en transparante
                        offerte, zonder verrassingen achteraf.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/contact" className="cta-button cta-button--secondary">
                            Plan een gratis gesprek
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer/>
        </>
    );
}

export default Homepage;
