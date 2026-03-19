import './Portfolio.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";
import projects from "../../Projects.js";


function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio & Cases | Oosterom Studio – Webdesign & Cybersecurity</title>

                <meta
                    name="description"
                    content="Bekijk gerealiseerde projecten van Oosterom Studio — van maatwerk websites en Shopify webshops tot beveiligde digitale platformen voor MKB en startups in Nederland."
                />

                <meta property="og:title" content="Portfolio & Cases | Oosterom Studio"/>
                <meta
                    property="og:description"
                    content="Van webdesign tot cybersecurity — bekijk wat Oosterom Studio heeft gebouwd voor MKB en startups."
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/portfolio"/>
                <meta property="og:site_name" content="Oosterom Studio"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Portfolio & Cases | Oosterom Studio",
                        "url": "https://www.oosteromstudio.nl/portfolio",
                        "description": "Gerealiseerde projecten van Oosterom Studio op het gebied van webdesign, Shopify en cybersecurity.",
                        "author": {
                            "@type": "Organization",
                            "name": "Oosterom Studio"
                        }
                    })}
                </script>
            </Helmet>

            <Navigate/>
            <section className="portfolio-section">
                <div className="portfolio-container">
                    <motion.h2
                        className="portfolio-title"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        Onze Portfolio
                    </motion.h2>

                    <motion.div
                        className="portfolio-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.slug}
                                className="portfolio-card"
                                variants={{
                                    hidden: {opacity: 0, y: 50},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {duration: 0.6}
                                    }
                                }}
                            >

                                <Link
                                    to={`/portfolio/${project.slug}`}
                                    className="portfolio-card-link"
                                >
                                    <div className="portfolio-image">
                                        <img src={project.image} alt={project.title}/>
                                        <div className="portfolio-image-overlay">
                                            <span>Bekijk project →</span>
                                        </div>
                                    </div>


                                    <div className="portfolio-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.card_description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                        ))
                    </motion.div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Portfolio;
