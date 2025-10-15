import './Portfolio.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import { motion } from "framer-motion";
import logo_dave from "../../assets/logo-dave.jpg";
import {useNavigate} from "react-router-dom";


const projects = [
    {
        title: "Dave's Dakwerken",
        description: "Voor Dave’s Dakwerken, gespecialiseerd in dakwerken, isolatie en 24/7 lekkagediensten, hebben we een complete online zichtbaarheid en SEO-strategie opgezet.",
        image: logo_dave,// later zelf vervangen
        link: "www.davesdakwerken.nl"
    },
    {
        title: "Project 2",
        description: "Korte omschrijving van dit project.",
        image: "/images/project2.jpg",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Korte omschrijving van dit project.",
        image: "/images/project3.jpg",
        link: "#"
    }
    // voeg hier meer projecten toe
];

function Portfolio() {
    return (
        <>
            <Navigate />
            <section className="portfolio-section">
                <div className="portfolio-container">
                    <motion.h2
                        className="portfolio-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                       Onze Portfolio
                    </motion.h2>
                    <motion.div
                        className="portfolio-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.a
                                href={project.link}
                                className="portfolio-card"
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
                                }}
                            >
                                <div className="portfolio-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="portfolio-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <button>{project.link}</button>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;
