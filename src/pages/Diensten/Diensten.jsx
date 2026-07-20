import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
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

            {/* Achtergrond grid-patroon, zoals op Contact/Portfolio */}
            <div className="diensten-bg" aria-hidden="true" />

            {/* Hero / Pagina titel */}
            <motion.section
                className="diensten-hero"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <div className="diensten-hero__glow" aria-hidden="true" />
                <span className="diensten-hero__tag">Wat we doen</span>
                <h1>Digitale diensten</h1>
                <p>
                    Van design tot development en architectuur. We bouwen digitale producten die schaalbaar, snel en veilig zijn.
                </p>
            </motion.section>

            {/* Services overzicht */}
            <section className="diensten-overview">
                <article className="diensten-container">
                    {services.map((service, index) => {
                        return (
                            <motion.div
                                key={service.title}
                                className="dienst-row"
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
                            >
                                <article className="dienst-content">
                                    <span className="dienst-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>

                                    <ul>
                                        {service.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    {service.extra && <p className="dienst-extra">{service.extra}</p>}

                                    <Link to={service.link} className="card-link">
                                        Bekijk dienst →
                                    </Link>
                                </article>

                                {service.image && (
                                    <div className="dienst-image">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </article>
            </section>

            {/* CTA onderaan */}
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