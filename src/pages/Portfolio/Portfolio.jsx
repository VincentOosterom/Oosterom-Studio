import './Portfolio.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";
import projects from "../../Projects.js";


function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Portfolio</title>
                <meta
                    name="description"
                    content="Bekijk hoe Oosterom Studio maatwerk websites en weboplossingen ontwikkelt die prestaties verbeteren, conversies verhogen en digitale groei stimuleren."

                />
                <meta name="keywords" content="portfolio, projecten, react, webdevelopment, Figma, Oosterom Studio"/>
                <meta property="og:title" content="Oosterom Studio | Portfolio"/>
                <meta property="og:description" content="Een overzicht van recent ontwikkelde websites en projecten."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/portfolio"/>
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
