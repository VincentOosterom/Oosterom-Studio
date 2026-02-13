import "./ProjectPage.css";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Navigate from "../../components/navigate/Navigate.jsx";
import projects from "/src/Projects.js";
import Footer from "../../components/Footer/Footer.jsx";

function ProjectPage() {
    const {slug} = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <>
                <Navigate/>
                <section className="project-not-found">
                    <h1>Project niet gevonden</h1>
                </section>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    {project.subtitle} | Case Study | Oosterom Studio
                </title>

                <meta
                    name="description"
                    content={`${project.subtitle} – ${project.intro}`}
                />

                <meta
                    property="og:title"
                    content={`${project.subtitle} | Case Study | Oosterom Studio`}
                />

                <meta
                    property="og:description"
                    content={`${project.intro}`}
                />

                <meta
                    property="og:type"
                    content="article"
                />

                <meta
                    property="og:url"
                    content={`https://www.oosteromstudio.nl/portfolio/${project.slug}`}
                />
                <meta
                    property="og:image"
                    content={project.image}
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "name": project.subtitle,
                        "description": project.intro,
                        "author": {
                            "@type": "Organization",
                            "name": "Oosterom Studio"
                        }
                    })}
                </script>
            </Helmet>


            <Navigate/>
            <header className="project-hero">
                <div className="project-hero-content">
                    <motion.span
                        className="project-eyebrow"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.6}}
                    >
                        Case Study
                    </motion.span>

                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                    >
                        {project.subtitle}
                    </motion.h1>

                    <motion.p
                        className="project-intro"
                        initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9}}
                    >
                        {project.intro}
                    </motion.p>
                </div>

                <motion.div
                    className="project-hero-image"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.1}}
                >
                    <img
                        src={project.image}
                        alt={`${project.subtitle} project preview`}
                    />
                </motion.div>
            </header>


            <main className="project-editorial">

                <section className="editorial-block">
                    <h2>De uitdaging</h2>
                    <p>{project.challenge}</p>
                </section>

                <section className="editorial-block reverse">
                    <h2>De oplossing</h2>
                    <p>{project.solution}</p>
                </section>

                <section className="editorial-block">
                    <h2>Het resultaat</h2>
                    <p>{project.result}</p>
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
            <section className="project-cta">
                <h2>Ook werken aan een schaalbare digitale oplossing?</h2>
                <p>
                    Plan een vrijblijvend strategiegesprek en ontdek hoe wij jouw digitale platform kunnen
                    optimaliseren.
                </p>
                <Link to="/contact" className="cta-button">
                    Plan een gesprek
                </Link>
            </section>
            <Footer/>
        </>
    );
}

export default ProjectPage;
