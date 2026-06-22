import React from 'react';
import {motion} from 'framer-motion';
import './Diensten.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";
import {services} from "../../../data/services";

function Diensten() {

    return (
        <div>
            <Helmet>
                <title>Diensten | Oosterom Studio – Webdesign, Webshops & Cybersecurity</title>

                <meta
                    name="description"
                    content="Oosterom Studio bouwt maatwerk websites, Shopify webshops en beveiligde digitale platformen voor MKB en startups. Inclusief technische SEO, performance optimalisatie en cybersecurity."
                />

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

            {/* Navbar */}
            <Navigate/>

            {/* Hero / Pagina titel */}
            <motion.section
                className="diensten-hero"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <h1>Digitale diensten</h1>
                <p>
                    Van design tot development en architectuur. We bouwen digitale producten die schaalbaar, snel en veilig zijn.
                </p>
            </motion.section>

            {/* Services overzicht */}
            <section className="diensten-overview">
                <article className="diensten-container">
                    {services.map((service, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <motion.div
                                key={index}
                                className={`dienst-row ${isReversed ? "reverse" : ""}`}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
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
                                <a href={service.link} className="card-link">Bekijk dienst</a>
                            </motion.div>
                        );
                    })}
                </article>
            </section>
            <Footer/>
        </div>

    );
}

export default Diensten;