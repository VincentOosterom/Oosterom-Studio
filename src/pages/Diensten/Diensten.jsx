import React from 'react';
import {motion} from 'framer-motion';
import './Diensten.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";

const services = [
    {
        title: "Webdesign (Figma)",
        description: "Pixel-perfect UI/UX ontwerpen in Figma, volledig afgestemd op jouw doelgroep en doelen.",
        bullets: [
            "UX research & wireframes",
            "High-end UI design",
            "Interactieve prototypes",
            "Design klaar voor development"
        ],
        icon: "🎨",
        link: "/diensten/figma"
    },
    {
        title: "Webdevelopment",
        description: "Snelle, schaalbare en SEO-vriendelijke websites gebouwd met moderne technologie.",
        bullets: [
            "React / moderne frontend",
            "Responsive & performance-first",
            "SEO & toegankelijkheid",
            "Onderhoudsvriendelijke code"
        ],
        icon: "💻",
        link: "/diensten/webdevelopment"
    },
    {
        title: "Branding & Strategie",
        description: "Een sterke merkidentiteit die vertrouwen uitstraalt en herkenbaar blijft.",
        bullets: [
            "Merkstrategie & positionering",
            "Logo & visuele identiteit",
            "Consistente merkuitstraling",
            "Langetermijnvisie"
        ],
        icon: "📈",
        link: "/diensten/branding&strategie"
    },
    {
        title: "Social Media Beheer",
        description: "Doordachte content en consistente aanwezigheid op social media.",
        bullets: [
            "Contentplanning",
            "Creatie & publicatie",
            "Merkconsistentie",
            "Groei & zichtbaarheid"
        ],
        icon: "💬",
        link: "/diensten/social-media-beheer"
    }
];


function Diensten() {

    return (
        <div>
            <Helmet>
                <title>Oosterom Studio | Diensten</title>
                <meta
                    name="description"
                    content="Ontdek de diensten van Oosterom Studio: Webdesign (Figma), Webdevelopment en Branding op maat voor jouw bedrijf."
                />
                <meta name="keywords" content="webdesign, Figma, webdevelopment, branding, UI/UX, Oosterom Studio" />
                <meta property="og:title" content="Oosterom Studio | Diensten" />
                <meta property="og:description" content="Professionele webdesign en development diensten voor ondernemers." />
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
