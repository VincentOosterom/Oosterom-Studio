import './Portfolio.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";
import projects from "../../../data/projects.js";


// ── Project card ──────────────────────────────────────────────
function ProjectCard({project, index}) {
    return (
        <motion.article
            className="pf-card"
            initial={{opacity: 0, y: 32}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08}}
        >
            <Link to={`/portfolio/${project.slug}`} className="pf-card__image-wrap">
                <div className="pf-card__image">
                    <img src={project.image} alt={project.title} loading="lazy"/>
                    <div className="pf-card__image-overlay">
                        <span className="pf-card__cta">
                            Bekijk project
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>

            <div className="pf-card__content">
                <span className="pf-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="pf-card__tag">Case study</span>

                <h2 className="pf-card__title">
                    <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                </h2>

                <p className="pf-card__desc">{project.card_description}</p>

                <div className="pf-card__links">
                    <Link to={`/portfolio/${project.slug}`} className="pf-card__link">
                        Lees case study →
                    </Link>
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-card__link pf-card__link--muted"
                    >
                        Bekijk website
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

// ── Portfolio page ────────────────────────────────────────────
function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio & Cases | Oosterom Studio – Webdesign & Cybersecurity</title>
                <meta name="description"
                      content="Bekijk gerealiseerde projecten van Oosterom Studio — van maatwerk websites en Shopify webshops tot beveiligde digitale platformen voor MKB en startups in Nederland."/>
                <meta property="og:title" content="Portfolio & Cases | Oosterom Studio"/>
                <meta property="og:description"
                      content="Van webdesign tot cybersecurity — bekijk wat Oosterom Studio heeft gebouwd voor MKB en startups."/>
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
                        "author": {"@type": "Organization", "name": "Oosterom Studio"}
                    })}
                </script>
            </Helmet>

            <Navigate/>

            <section className="pf-hero">
                <div className="pf-hero__bg-grid"/>
                <div className="pf-hero__glow"/>

                <motion.div
                    className="pf-hero__content"
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
                >
                    <span className="pf-hero__tag">Geselecteerde projecten</span>
                    <h1 className="pf-hero__title">
                        Wat we<br/><em>hebben gebouwd.</em>
                    </h1>
                    <p className="pf-hero__sub">
                        Van maatwerk websites tot complete digitale platformen.
                        Elk project is een samenwerking met een ambitieuze ondernemer.
                    </p>
                </motion.div>

                <div className="pf-hero__count">
                    <span>{projects.length}</span>
                    <small>projecten</small>
                </div>
            </section>

            <div className="pf-divider">
                <motion.div
                    className="pf-divider__line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                />
            </div>

            {/* Projects — grid in plaats van gestapelde rijen */}
            <section className="pf-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index}/>
                ))}
            </section>

            <motion.section
                className="pf-cta"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
            >
                <div className="pf-cta__glow"/>
                <span className="pf-hero__tag">Volgende stap</span>
                <h2 className="pf-cta__title">
                    Jouw project<br/><em>staat hier straks ook?</em>
                </h2>
                <Link to="/offerte-aanvragen" className="pf-cta__btn">
                    Laten we beginnen →
                </Link>
            </motion.section>

            <Footer/>
        </>
    );
}

export default Portfolio;