import React from 'react';
import {motion} from 'framer-motion';
import './Diensten.css';
import Navigate from "../../components/Navigate/Navigate.jsx";

const services = [
    {
        title: "Webdesign (Figma)",
        description: "Pixel-perfect UI/UX ontwerpen in Figma. Van concept tot interactief prototype. Wij creëren designs die zowel visueel aantrekkelijk als functioneel zijn, zodat je gebruikerservaring optimaal is.",
        icon: "🎨",
        bgColor: "#E0F7FA"
    },
    {
        title: "Webdevelopment",
        description: "Van Figma naar React: snelle, responsive en SEO-geoptimaliseerde websites. Onze code is schoon, modulair en onderhoudsvriendelijk, zodat jouw website toekomstbestendig is.",
        icon: "💻",
        bgColor: "#FFF3E0"
    },
    {
        title: "Branding & Strategie",
        description: "Sterke merkidentiteit en visuele strategie om jouw bedrijf te laten groeien. We vertalen jouw visie naar een consistente branding die vertrouwen en herkenning opbouwt.",
        icon: "📈",
        bgColor: "#F3E5F5"
    },
];

function Diensten() {
    return (
        <div>
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
        </div>
    );
}

export default Diensten;
