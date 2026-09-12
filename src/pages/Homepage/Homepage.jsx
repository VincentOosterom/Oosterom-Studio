import './Homepage.css';
import Header from "../../components/header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import MovingBar from "../../components/movingbar/movingBar.jsx";
import WatWeBouwen from "../../components/wat_we_bouwen/WatWeBouwen.jsx";
import projects from "../../../data/projects.js";
import PakketCta from "../../components/pakketCta/PakketCta.jsx";
import image_cta from "../../assets/images/cta2.jpg";

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
    // Eerste 3 projecten als uitgelicht op de homepage
    const uitgelichteProjecten = projects.slice(0, 3);

    return (
        <>
            <Helmet>
                <title>Oosterom Studio - Wij bouwen software die jouw bedrijf vooruit helpen</title>

                <meta
                    name="description"
                    content="Oosterom Studio bouwt maatwerk websites, webapplicaties en beveiligde digitale oplossingen voor MKB en startups in Nederland. Snel, veilig en resultaatgericht."
                />

                <link rel="canonical" href="https://www.oosteromstudio.nl/"/>

                <meta property="og:title"
                      content="Oosterom Studio – Wij bouwen software die jouw bedrijf vooruit helpen"/>
                <meta
                    property="og:description"
                    content="Oosterom Studio bouwt maatwerk websites, webapplicaties en beveiligde digitale oplossingen voor MKB en startups in Nederland. Snel, veilig en resultaatgericht."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/"/>
                <meta property="og:site_name" content="Oosterom Studio"/>

                <meta name="twitter:card" content="summary_large_image"/>

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
                        "description": "Oosterom Studio bouwt maatwerk websites, webapplicaties en beveiligde digitale oplossingen voor MKB en startups in Nederland."
                    })}
                </script>
            </Helmet>


            <Header
                title={"Van idee naar software\ndie echt waarde levert."}
                subtitle="Ik bouw websites, webapplicaties en SaaS-platformen voor het MKB, van eerste schets tot oplevering."
                buttonText="Offerte aanvragen"
                buttonTextSecon="Deel van ons werk"
                tag="Digitale oplossingen voor MKB en startups in Nederland"
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
                        <motion.h2 variants={fadeUp}>
                            Het werkt,<br/>of het is <em>niet af</em>.
                        </motion.h2>

                        <motion.p className="values-subtitle" variants={fadeUp}>
                            Elke keuze die ik maak, in design, code en samenwerking,
                            wordt langs diezelfde lat gelegd.
                        </motion.p>

                        <section className="values-grid">
                            <motion.article className="value-card" variants={fadeUp}>
                                <h3>Performance First</h3>
                                <p>
                                    Snelheid is geen luxe, het is het uitgangspunt. Ik ontwikkel
                                    technisch geoptimaliseerde websites met hoge Core Web Vitals-scores
                                    die bezoekers niet laten wachten.
                                </p>
                            </motion.article>

                            <motion.article className="value-card" variants={fadeUp}>
                                <h3>Beveiliging standaard</h3>
                                <p>
                                    Beveiliging zit in de basis, niet als afvinkpunt achteraf. HTTPS,
                                    security headers en bescherming tegen veelvoorkomende aanvallen zijn
                                    standaard onderdeel van elk project.
                                </p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <h3>WCAG Richtlijnen </h3>
                                <p>
                                    De Web Content Accessibility Guidelines zijn de standaarden om websites en apps
                                    toegankelijk te maken voor iedereen, inclusief mensen met een visuele, auditieve,
                                    motorische of cognitive beperking.
                                </p>
                            </motion.article>
                            <motion.article className="value-card" variants={fadeUp}>
                                <h3>Langetermijnpartner</h3>
                                <p>
                                    Ik denk verder dan de oplevering. Systemen die meegroeien,
                                    code die overdraagbaar is, en eerlijk advies ook als dat
                                    betekent dat ik je doorverwijs.
                                </p>
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
                            <motion.h2 variants={fadeUp}>
                                Niet het grootste bureau.<br/>
                                <em>Wel de juiste keuze.</em>
                            </motion.h2>
                            <motion.p className="waarom-subtitle" variants={fadeUp}>
                                Grote bureaus bouwen voor tientallen klanten tegelijk.
                                Bij Oosterom Studio krijg je directe betrokkenheid,
                                eerlijk advies en software die echt bij jouw bedrijf past.
                            </motion.p>
                        </div>

                        <motion.div className="waarom-grid" variants={staggerChildren}>

                            <motion.div className="waarom-card waarom-card--wide" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="1.5">
                                        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
                                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                                    </svg>
                                </div>
                                <h3>Eén aanspreekpunt</h3>
                                <p>Geen accountmanager die doorverbindt naar een developer die doorverbindt naar een
                                    designer. Jij praat rechtstreeks met degene die bouwt.</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                        <path d="M9 12l2 2 4-4"/>
                                    </svg>
                                </div>
                                <h3>Beveiliging zit ingebakken</h3>
                                <p>Niet als extra optie achteraf, maar als uitgangspunt. Elk project wordt opgeleverd
                                    met aandacht voor security, ook als je er niet specifiek om vraagt.</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 8v4l3 3"/>
                                    </svg>
                                </div>
                                <h3>Geen uurtje-factuurtje</h3>
                                <p>Heldere afspraken vooraf, geen verrassingen achteraf. Je weet wat je krijgt, wanneer
                                    je het krijgt en wat het kost.</p>
                            </motion.div>

                            <motion.div className="waarom-card" variants={fadeUp}>
                                <div className="waarom-card__icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="1.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                                    </svg>
                                </div>
                                <h3>Techniek én strategie</h3>
                                <p>Ik denk mee over wat je bouwt en waarom, niet alleen hoe. Als een eenvoudigere
                                    oplossing beter werkt, zeg ik dat ook.</p>
                            </motion.div>

                            <motion.div className="waarom-card waarom-card--accent" variants={fadeUp}>
                                <p className="waarom-card__quote">
                                    Digitaal sterk. Van buiten én van binnen.
                                </p>
                                <Link to="/over-ons" className="waarom-card__link">
                                    Over Oosterom Studio →
                                </Link>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </section>

                <WatWeBouwen/>

                <PakketCta
                    achtergrond={image_cta}
                    scriptTekst="Van A tot Z"
                    titelWit="Eén aanspreekpunt voor"
                    titelAccent="je hele project"
                    tekst="Van strategie en design tot development, hosting en onderhoud. Je hoeft niet te schakelen tussen partijen die naar elkaar wijzen."
                    primaireKnopTekst="Plan een gesprek"
                    secundaireKnopTekst="Over Oosterom Studio"
                />

                {/* ── Uitgelichte projecten ── */}
                <section className="projects-section">
                    <motion.div
                        className="projects-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="projects-header">
                            <motion.span className="projects-tag" variants={fadeUp}>
                                Uitgelicht werk
                            </motion.span>
                            <motion.h2 variants={fadeUp}>
                                Recente <em>projecten</em>
                            </motion.h2>
                            <motion.p className="projects-subtitle" variants={fadeUp}>
                                Een greep uit wat ik de afgelopen tijd voor klanten heb gebouwd.
                            </motion.p>
                        </div>

                        <motion.div className="projects-grid" variants={staggerChildren}>
                            {uitgelichteProjecten.map((project) => (
                                <motion.article
                                    className="project-card"
                                    key={project.slug}
                                    variants={fadeUp}
                                >
                                    <Link to={`/portfolio/${project.slug}`} className="project-card__image-wrap">
                                        <div className="project-card__image">
                                            <img src={project.image} alt={project.title} loading="lazy"/>
                                        </div>
                                    </Link>
                                    <div className="project-card__content">
                                        <h3>
                                            <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                                        </h3>
                                        <p>{project.card_description}</p>
                                        <Link to={`/portfolio/${project.slug}`} className="project-card__link">
                                            Bekijk project →
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        <motion.div className="projects-cta" variants={fadeUp}>
                            <Link to="/portfolio" className="projects-cta__link">
                                Bekijk alle projecten →
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                <section className="aanpak-section">
                    <motion.div
                        className="aanpak-container"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="aanpak-header">
                            <motion.h2 variants={fadeUp}>
                                Zo werken we <em>samen</em>
                            </motion.h2>
                        </div>

                        <motion.div className="aanpak-stappen" variants={staggerChildren}>
                            {[
                                {
                                    num: "01",
                                    title: "Analyse & Strategie",
                                    desc: "Ik analyseer je markt, doelgroep en technische situatie. Geen aannames, wel een helder beeld van waar je staat en waar je naartoe wilt."
                                },
                                {
                                    num: "02",
                                    title: "Architectuur & Design",
                                    desc: "Ik ontwerp een schaalbare en conversiegerichte structuur. Visueel sterk, technisch doordacht, afgestemd op jouw merk."
                                },
                                {
                                    num: "03",
                                    title: "Development & Optimalisatie",
                                    desc: "Ik bouw, test en optimaliseer voor performance en veiligheid. Elke regel code heeft een reden."
                                },
                                {
                                    num: "04",
                                    title: "Oplevering & Nazorg",
                                    desc: "Na de lancering sta je er niet alleen voor. Ik zorg voor een soepele overdracht en blijf beschikbaar voor doorontwikkeling."
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


                        <motion.h2 variants={fadeUp}>
                            Geen pakketten.<br/>
                            <em>Wel een eerlijke prijs.</em>
                        </motion.h2>

                        <motion.p className="pricing-intro" variants={fadeUp}>
                            Ik werk niet met standaardpakketten, omdat geen enkel bedrijf
                            hetzelfde is. Elk project begint met een goed gesprek, daarna
                            ontvang je een heldere offerte zonder verborgen kosten.
                        </motion.p>

                        <motion.div className="pricing-pillars" variants={staggerChildren}>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">01</span>
                                <h3>Gesprek</h3>
                                <p>We bespreken jouw doelen, wensen en technische behoeften. Geen verkooppraatje, wel
                                    eerlijk advies.</p>
                            </motion.div>
                            <div className="pricing-pillar__divider"/>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">02</span>
                                <h3>Offerte</h3>
                                <p>Je ontvangt een heldere offerte op maat, transparant, zonder kleine lettertjes of
                                    verrassingen achteraf.</p>
                            </motion.div>
                            <div className="pricing-pillar__divider"/>
                            <motion.div className="pricing-pillar" variants={fadeUp}>
                                <span className="pricing-pillar__num">03</span>
                                <h3>Bouwen</h3>
                                <p>Zodra we akkoord zijn, ga ik aan de slag. Je wordt op de hoogte gehouden en kunt
                                    altijd bijsturen.</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;