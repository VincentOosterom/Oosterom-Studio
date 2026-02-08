import "./ProjectPage.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigate from "../../components/Navigate/Navigate.jsx";
import projects from "/src/Projects.js";
import Footer from "../../components/Footer/Footer.jsx";

function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    const sections = [
        { title: "De uitdaging", content: project?.challenge },
        { title: "De oplossing", content: project?.solution },
        { title: "Het resultaat", content: project?.result }
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut"
            }
        })
    };

    if (!project) {
        return (
            <>
                <Navigate />
                <section className="project-not-found">
                    <h1>Project niet gevonden</h1>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{project.subtitle} | Portfolio</title>
                <meta
                    name="description"
                    content={project.intro}
                />
            </Helmet>

            <header className="project-page-header">
                <Navigate />

                <section className="hero">
                    <div className="hero-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {project.subtitle}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {project.intro}
                        </motion.p>
                    </div>

                    <div className="hero-right">
                        <img
                            src={project.image}
                            alt={`${project.subtitle} project preview`}
                        />
                    </div>
                </section>
            </header>

            <main className="main-content">
                <section className="project-content">
                    {sections.map((section, index) => (
                        <motion.section
                            key={section.title}
                            className="usp-card"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                        >
                            <div className="strikje">
                                <h2>{section.title}</h2>
                            </div>
                            <p>{section.content}</p>
                        </motion.section>
                    ))}
                </section>

                <section className="sfeer">
                    <h2>Bekijk ons werk hieronder</h2>
                    {project.sfeer ? (
                        <img
                            src={project.sfeer}
                            alt={`${project.subtitle} eindresultaat`}
                        />
                    ) : (
                        <p>Nog geen werk toegevoegd</p>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}

export default ProjectPage;
