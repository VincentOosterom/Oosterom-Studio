import React from 'react';
import {motion} from 'framer-motion';
import './Diensten.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";

const services = [
    {
        title: "Webdesign & UX",
        description:
            "Strategisch webdesign dat verder gaat dan alleen uitstraling. We ontwerpen gebruiksvriendelijke interfaces die bezoekers sturen richting conversie en groei.",
        bullets: [
            "UX research & wireframes",
            "High-end UI design",
            "Interactieve prototypes",
            "Conversiegericht ontwerp",
            "Ontworpen met schaalbaarheid in gedachten"
        ],
        extra:
            "Een sterk design vormt de basis voor elke website of digitale applicatie. Daarom ontwerpen wij altijd met het oog op toekomstige uitbreiding, zoals dashboards, klantportalen of SaaS-functionaliteit.",
        icon: "🎨",
        link: "/diensten/webdesign"
    },
    {
        title: "Webdevelopment & Applicaties",
        description:
            "Snelle, veilige en schaalbare websites en webapplicaties gebouwd met moderne technologie.",
        bullets: [
            "React & moderne frontend",
            "Performance-first ontwikkeling",
            "SEO & toegankelijkheid",
            "Onderhoudsvriendelijke code",
            "Voorbereid op API’s & koppelingen"
        ],
        extra:
            "Onze websites zijn niet alleen eindproducten, maar vormen vaak het startpunt van grotere systemen. Denk aan reserveringssystemen, klantomgevingen of SaaS-oplossingen die met je bedrijf meegroeien.",
        icon: "💻",
        link: "/diensten/webdevelopment"
    },
    {
        title: "SaaS & Digitale Systemen",
        description:
            "Van idee naar digitaal product. Wij helpen bij het ontwerpen en bouwen van schaalbare online systemen en SaaS-oplossingen.",
        bullets: [
            "Concept & productstructuur",
            "MVP-ontwikkeling",
            "Dashboard & gebruikersrollen",
            "Schaalbare architectuur",
            "Klaar voor groei en doorontwikkeling"
        ],
        extra:
            "Heb je een idee voor een platform of online dienst? Wij denken mee over structuur, functionaliteit en techniek, zodat jouw SaaS niet alleen werkt, maar ook toekomstbestendig is.",
        icon: "🧩",
        link: "/diensten/saas"
    },
    {
        title: "Branding & Digitale Strategie",
        description:
            "Een sterke merkidentiteit en duidelijke digitale koers vormen de basis voor online succes.",
        bullets: [
            "Merkstrategie & positionering",
            "Visuele identiteit",
            "Consistente online uitstraling",
            "Digitale roadmap",
            "Langetermijnvisie"
        ],
        extra:
            "Wij helpen je niet alleen met hoe je eruitziet, maar ook met waar je naartoe wilt. Zo sluiten branding, website en eventuele systemen perfect op elkaar aan.",
        icon: "📈",
        link: "/diensten/branding-strategie"
    }
];


function Diensten() {

    return (
        <div>
            <Helmet>
                <title>Diensten | Oosterom Studio – Webdevelopment & Digitale Oplossingen</title>

                <meta
                    name="description"
                    content="Ontdek de diensten van Oosterom Studio: maatwerk webdevelopment, e-commerce oplossingen, technische SEO en performance optimalisatie. Wij bouwen schaalbare en veilige digitale platformen voor groeiende bedrijven."
                />

                <meta property="og:title" content="Diensten | Oosterom Studio" />

                <meta
                    property="og:description"
                    content="Van schaalbare websites tot technische optimalisatie — ontdek hoe Oosterom Studio digitale oplossingen ontwikkelt die prestaties en groei stimuleren."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/diensten" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Navbar */}
            <Navigate/>

            {/* Hero / Pagina titel */}
            <motion.section
                className="diensten-hero"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <h1>Onze Diensten</h1>
                <p>Wij helpen je met design, development en branding om jouw digitale aanwezigheid te versterken.</p>
            </motion.section>

            {/* Services overzicht */}
            <section className="diensten-overview">
                <div className="diensten-container">
                    {services.map((service, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                className={`dienst-row ${isReversed ? "reverse" : ""}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <article className="dienst-content">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>

                                    <ul>
                                        {service.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    {service.extra && <p className="dienst-extra">{service.extra}</p>}
                                </article>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
            <Footer/>
        </div>

    );
}

export default Diensten;
