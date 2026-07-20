import "./ProjectPage.css";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Navigate from "../../components/navigate/Navigate.jsx";
import projects from "/data/projects.js";
import Footer from "../../components/footer/Footer.jsx";

function ProjectPage() {
    const {slug} = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <>
                <Navigate/>
                <section className="project-not-found">
                    <h1>Project niet gevonden</h1>
                    <Link to="/portfolio" className="cta-button">Terug naar portfolio</Link>
                </section>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`Case Study ${project.title} | Oosterom Studio`}</title>

                {/* Meta description */}
                <meta
                    name="description"
                    content={`${project.title} – ${project.intro}`}
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content={`${project.title} | Case Study | Oosterom Studio`}
                />
                <meta
                    property="og:description"
                    content={`${project.intro}`}
                />
                <meta property="og:type" content="article"/>
                <meta
                    property="og:url"
                    content={`https://www.oosteromstudio.nl/portfolio/${project.slug}`}
                />
                <meta property="og:image" content={project.image}/>
                <meta name="twitter:card" content="summary_large_image"/>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "name": project.title,
                        "description": project.intro,
                        "author": {
                            "@type": "Organization",
                            "name": "Oosterom Studio"
                        }
                    })}
                </script>
            </Helmet>

            <Navigate/>

            {/* ── Hero: tekst en afbeelding naast elkaar ── */}
            <header className="project-hero">
                <div className="project-hero__inner">
                    <motion.div
                        className="project-hero__content"
                        initial={{opacity: 0, y: 24}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
                    >
                        <span className="project-eyebrow">Case Study</span>
                        <h1>{project.subtitle}</h1>
                        <p className="project-intro">{project.intro}</p>

                        {project.website && (
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-hero__link"
                            >
                                Bekijk live website ↗
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        className="project-hero__image"
                        initial={{opacity: 0, scale: 0.97}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1}}
                    >
                        <img
                            src={project.image}
                            alt={`${project.subtitle} project preview`}
                        />
                    </motion.div>
                </div>
            </header>

            {/* ── Editorial: uitdaging / oplossing / resultaat ── */}
            <main className="project-editorial">

                <motion.section
                    className="editorial-block"
                    initial={{opacity: 0, y: 24}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 0.6}}
                >
                    <span className="editorial-block__num">01</span>
                    <h2>De uitdaging</h2>
                    <p>{project.challenge}</p>
                </motion.section>

                <motion.section
                    className="editorial-block"
                    initial={{opacity: 0, y: 24}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 0.6}}
                >
                    <span className="editorial-block__num">02</span>
                    <h2>De oplossing</h2>
                    <p>{project.solution}</p>
                </motion.section>

                <motion.section
                    className="editorial-block"
                    initial={{opacity: 0, y: 24}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 0.6}}
                >
                    <span className="editorial-block__num">03</span>
                    <h2>Het resultaat</h2>
                    <p>{project.result}</p>
                </motion.section>

                {project.sfeer && (
                    <motion.section
                        className="sfeer"
                        initial={{opacity: 0, y: 24}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.7}}
                    >
                        <h2>Bekijk ons werk</h2>
                        <img
                            src={project.sfeer}
                            alt={`${project.subtitle} eindresultaat`}
                        />
                    </motion.section>
                )}
            </main>

            <section className="project-cta">
                <h2>Ook werken aan een schaalbare digitale oplossing?</h2>
                <p>
                    Plan een vrijblijvend strategiegesprek en ontdek hoe wij jouw digitale
                    platform kunnen optimaliseren.
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