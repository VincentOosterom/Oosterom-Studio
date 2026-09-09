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

                <link
                    rel="canonical"
                    href={`https://www.oosteromstudio.nl/portfolio/${project.slug}`}
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

                        {project.appStoreUrl ? (
                            <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-hero__appstore"
                                aria-label="Download in de App Store"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.05 12.536c-.02-2.14 1.75-3.17 1.83-3.22-1-1.46-2.55-1.66-3.1-1.68-1.32-.14-2.58.78-3.25.78-.67 0-1.7-.76-2.8-.74-1.44.02-2.77.84-3.5 2.13-1.5 2.6-.38 6.44 1.07 8.55.72 1.03 1.57 2.19 2.68 2.15 1.08-.04 1.49-.7 2.79-.7 1.3 0 1.67.7 2.8.68 1.16-.02 1.89-1.05 2.6-2.09.82-1.2 1.16-2.36 1.18-2.42-.03-.01-2.26-.87-2.28-3.44z"/>
                                    <path d="M15.02 6.02c.6-.72 1-1.72.9-2.72-.86.04-1.9.58-2.52 1.28-.55.62-1.03 1.63-.9 2.6.94.07 1.9-.48 2.52-1.16z"/>
                                </svg>
                                <span className="project-hero__appstore-text">
                                    <small>Download in de</small>
                                    <strong>App Store</strong>
                                </span>
                            </a>
                        ) : project.website && (
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
                            loading="lazy"
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