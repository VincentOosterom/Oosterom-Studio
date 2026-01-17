import './ProjectPage.css';
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";
import Navigate from "../../components/Navigate/Navigate.jsx";
import projects from "/src/Projects.js";
import Footer from "../../components/Footer/Footer.jsx";

function ProjectPage() {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut"
            }
        })
    };
    const {slug} = useParams();

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <>
                <Navigate/>
                <section className="project-not-found">
                    <h1>Project niet gevonden</h1>
                </section>
            </>
        );
    }

    return (
        <>
            <header className="project-page-header">
                <Navigate/>
                <section className="hero">
                    <article className="hero-left">
                        <motion.h1
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            {project.subtitle}
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                        >
                            {project.intro}
                        </motion.p>
                    </article>
                    <article className="hero-right">
                        <img src={project.image} alt=""/>
                    </article>
                </section>
            </header>

            <main className="main-content">
                <section className="project-content">

                    <motion.section
                        className="usp-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                    >
                        <div className="strikje">
                            <h2>De uitdaging</h2>
                        </div>
                        <p>{project.challenge}</p>
                    </motion.section>

                    <motion.section
                        className="usp-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                    >
                        <div className="strikje">
                            <h2>De oplossing</h2>
                        </div>
                        <p>{project.solution}</p>
                    </motion.section>

                    <motion.section
                        className="usp-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        <div className="strikje">
                            <h2>Het resultaat</h2>
                        </div>
                        <p>{project.result}</p>
                    </motion.section>

                </section>
                <section className="sfeer">
                    <h2>Bekijk ons werk hieronder</h2>
                    <img src={project.sfeer} alt=""/>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default ProjectPage;
