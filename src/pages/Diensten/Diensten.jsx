import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import './Diensten.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";
import {services} from "../../../data/services";

const fadeUp = {
    hidden: {opacity: 0, y: 32},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const stagger = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.08}},
};

const werkwijze = [
    {
        num: "01",
        titel: "Kennismaking",
        tekst: "We bespreken je doelen, huidige situatie en wensen. Geen verkooppraatje, wel eerlijk advies over wat wel en niet nodig is.",
    },
    {
        num: "02",
        titel: "Voorstel & planning",
        tekst: "Je ontvangt een helder voorstel met scope, tijdlijn en prijs. Geen kleine lettertjes, geen verrassingen achteraf.",
    },
    {
        num: "03",
        titel: "Bouwen",
        tekst: "We bouwen in korte, overzichtelijke stappen. Je ziet voortgang, kan bijsturen, en weet altijd waar het project staat.",
    },
    {
        num: "04",
        titel: "Livegang & nazorg",
        tekst: "Na oplevering laten we je niet los. Onderhoud, doorontwikkeling en een vast aanspreekpunt zijn gewoon onderdeel van de deal.",
    },
];

// NL-notatie: €1.500 i.p.v. €1500 of $1,500
const formatPrice = (amount) =>
    new Intl.NumberFormat('nl-NL', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0}).format(amount);

function Diensten() {
    return (
        <div>
            <Helmet>
                <title>Diensten | Oosterom Studio </title>
                <meta
                    name="description"
                    content="Oosterom Studio bouwt maatwerk websites, Shopify webshops en beveiligde digitale platformen voor MKB en startups. Inclusief technische SEO, performance optimalisatie en cybersecurity."
                />
                <link rel="canonical" href="https://www.oosteromstudio.nl/diensten" />
                <meta property="og:title" content="Diensten | Oosterom Studio"/>
                <meta
                    property="og:description"
                    content="Webdesign, Shopify webshops en cybersecurity onder één dak. Bekijk wat Oosterom Studio voor jouw bedrijf kan betekenen."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/diensten"/>
                <meta property="og:site_name" content="Oosterom Studio"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>
            </Helmet>

            <Navigate/>
            <div className="diensten-bg" aria-hidden="true" />

            {/* ══════════════════════════════════════════════════════════
                SECTIE 1 — Hero
            ══════════════════════════════════════════════════════════ */}
            <motion.section
                className="diensten-hero"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <div className="diensten-hero__glow" aria-hidden="true" />
                <h1>Digitale diensten</h1>
                <p>Van design tot development en architectuur. We bouwen digitale producten die schaalbaar, snel en veilig zijn.</p>
            </motion.section>

            {/* ══════════════════════════════════════════════════════════
                SECTIE 2 — Diensten-overzicht (compact grid)
            ══════════════════════════════════════════════════════════ */}
            <section className="diensten-grid-sectie">
                <motion.div
                    className="diensten-grid-container"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.15}}
                >
                    <motion.div className="diensten-grid-header" variants={fadeUp}>
                        <span className="diensten-grid__tag">Overzicht</span>
                        <h2>{services.length} diensten, <em>één studio</em></h2>
                        <p>Kies een dienst voor meer details, of neem contact op als je niet zeker weet waar je moet beginnen.</p>
                    </motion.div>

                    <div className="diensten-grid">
                        {services.map((service, index) => (
                            <motion.article
                                key={service.title}
                                className="dienst-card"
                                variants={fadeUp}
                            >
                                <span className="dienst-card__num">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {service.image && (
                                    <div className="dienst-card__image">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                )}

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                <ul className="dienst-card__bullets">
                                    {service.bullets.slice(0, 3).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                {service.priceFrom && (
                                    <div className="dienst-card__price">
                                        <span className="dienst-card__price-label">Vanaf</span>
                                        <span className="dienst-card__price-amount">
                                            {formatPrice(service.priceFrom)}
                                        </span>
                                        <span className="dienst-card__price-unit">{service.priceUnit}</span>
                                    </div>
                                )}

                                <Link to={service.link} className="dienst-card__link">
                                    Bekijk dienst →
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                SECTIE 3 — Werkwijze
            ══════════════════════════════════════════════════════════ */}
            <section className="diensten-werkwijze">
                <motion.div
                    className="werkwijze-container"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                >
                    <motion.div className="werkwijze-header" variants={fadeUp}>
                        <span className="diensten-grid__tag">Werkwijze</span>
                        <h2>Zo pakken we <em>elk project</em> aan</h2>
                    </motion.div>

                    <motion.div className="werkwijze-stappen" variants={stagger}>
                        {werkwijze.map((stap) => (
                            <motion.div className="werkwijze-stap" key={stap.num} variants={fadeUp}>
                                <span className="werkwijze-stap__num">{stap.num}</span>
                                <h3>{stap.titel}</h3>
                                <p>{stap.tekst}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                SECTIE 4 — CTA
            ══════════════════════════════════════════════════════════ */}
            <motion.section
                className="diensten-cta"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
            >
                <h2>Niet zeker welke dienst past?</h2>
                <p>Plan een vrijblijvend gesprek en we denken gewoon mee, geen verplichtingen.</p>
                <Link to="/contact" className="diensten-cta__btn">
                    Plan een gesprek →
                </Link>
            </motion.section>

            <Footer/>
        </div>
    );
}

export default Diensten;