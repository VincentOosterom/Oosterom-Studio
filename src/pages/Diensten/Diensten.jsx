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
        description: "Pixel-perfect UI/UX ontwerpen in Figma. Van concept tot interactief prototype. Wij creëren designs die zowel visueel aantrekkelijk als functioneel zijn, zodat je gebruikerservaring optimaal is.",
        icon: "🎨",
        bgColor: "#E0F7FA",
        link: "/diensten/figma"
    },
    {
        title: "Webdevelopment",
        description: "Van Figma naar React: snelle, responsive en SEO-geoptimaliseerde websites. Onze code is schoon, modulair en onderhoudsvriendelijk, zodat jouw website toekomstbestendig is.",
        icon: "💻",
        bgColor: "#FFF3E0",
        link: "/diensten/webdevelopment"
    },
    {
        title: "Branding & Strategie",
        description: "Sterke merkidentiteit en visuele strategie om jouw bedrijf te laten groeien. We vertalen jouw visie naar een consistente branding die vertrouwen en herkenning opbouwt.",
        icon: "📈",
        bgColor: "#F3E5F5",
        link: "/diensten/branding&strategie",
    },
    {
        title: "Social Media Beheer",
        description: "Consistente en doordachte aanwezigheid op social media om jouw merk zichtbaar te maken. We creëren, plannen en beheren content die jouw doelgroep aanspreekt en groei stimuleert.",
        icon: "💬",
        bgColor: "#E3F2FD",
        link: "/diensten/social-media-beheer"
    },

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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="dienst-section"
                            style={{backgroundColor: service.bgColor}}
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.4, delay: index * 0.3}}
                        >
                            <div className="dienst-content">
                                <div className="dienst-icon">{service.icon}</div>
                                <h2 className="dienst-title">{service.title}</h2>
                                <p className="dienst-description">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>

    );
}

export default Diensten;
