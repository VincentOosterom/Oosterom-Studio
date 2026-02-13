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
                <title>
                    Case Studies | Oosterom Studio – Digitale Oplossingen
                </title>

                <meta
                    name="description"
                    content="Bekijk hoe Oosterom Studio schaalbare websites en digitale oplossingen ontwikkelt die prestaties verbeteren, conversies verhogen en duurzame online groei realiseren."
                />

                <meta property="og:title" content="Case Studies | Oosterom Studio" />

                <meta
                    property="og:description"
                    content="Ontdek gerealiseerde digitale oplossingen en case studies met focus op performance, schaalbaarheid en technische optimalisatie."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/portfolio" />

                <meta name="twitter:card" content="summary_large_image" />
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
