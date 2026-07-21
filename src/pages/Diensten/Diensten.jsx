import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './Diensten.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";
import {services} from "../../../data/services";

// Haalt de laatste slug uit een link, bijv. "/diensten/webdesign" -> "webdesign".
// Dit is de key waaronder de vertaling van deze dienst in translation.json staat.
function getServiceKey(link) {
    return link.split("/").filter(Boolean).pop();
}

function Diensten() {
    const {t, i18n} = useTranslation();
    const isSpanish = i18n.language === 'es';

    const canonicalUrl = isSpanish
        ? 'https://www.oosteromstudio.nl/es/servicios'
        : 'https://www.oosteromstudio.nl/diensten';
    const contactPath = isSpanish ? '/es/contacto' : '/contact';

    return (
        <div>
            <Helmet>
                <title>{t('diensten.meta_title')}</title>

                <meta
                    name="description"
                    content={t('diensten.meta_description')}
                />

                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hreflang="nl" href="https://www.oosteromstudio.nl/diensten" />
                <link rel="alternate" hreflang="es" href="https://www.oosteromstudio.nl/es/servicios" />
                <link rel="alternate" hreflang="x-default" href="https://www.oosteromstudio.nl/diensten" />

                <meta property="og:title" content={t('diensten.og_title')}/>
                <meta
                    property="og:description"
                    content={t('diensten.og_description')}
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={canonicalUrl}/>
                <meta property="og:site_name" content="Oosterom Studio"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>
            </Helmet>

            {/* Navbar */}
            <Navigate/>

            {/* Achtergrond grid-patroon */}
            <div className="diensten-bg" aria-hidden="true" />

            {/* Hero / Pagina titel */}
            <motion.section
                className="diensten-hero"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <div className="diensten-hero__glow" aria-hidden="true" />
                <span className="diensten-hero__tag">{t('diensten.hero.tag')}</span>
                <h1>{t('diensten.hero.titel')}</h1>
                <p>{t('diensten.hero.intro')}</p>
            </motion.section>

            {/* Services overzicht */}
            <section className="diensten-overview">
                <article className="diensten-container">
                    {services.map((service, index) => {
                        const key = getServiceKey(service.link);
                        const servicePath = isSpanish
                            ? service.link.replace('/diensten/', '/es/servicios/')
                            : service.link;

                        return (
                            <motion.div
                                key={service.title}
                                className="dienst-row"
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.3}}
                                transition={{duration: 0.6}}
                            >
                                <article className="dienst-content">
                                    <span className="dienst-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h2>{t(`diensten.services.${key}.title`, {defaultValue: service.title})}</h2>
                                    <p>{t(`diensten.services.${key}.description`, {defaultValue: service.description})}</p>

                                    <ul>
                                        {t(`diensten.services.${key}.bullets`, {
                                            defaultValue: service.bullets,
                                            returnObjects: true
                                        }).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    {service.extra && (
                                        <p className="dienst-extra">
                                            {t(`diensten.services.${key}.extra`, {defaultValue: service.extra})}
                                        </p>
                                    )}

                                    <Link to={servicePath} className="card-link">
                                        {t('diensten.bekijk_dienst')}
                                    </Link>
                                </article>

                                {service.image && (
                                    <div className="dienst-image">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </article>
            </section>

            {/* CTA onderaan */}
            <motion.section
                className="diensten-cta"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7}}
            >
                <h2>{t('diensten.cta.titel')}</h2>
                <p>{t('diensten.cta.tekst')}</p>
                <Link to={contactPath} className="diensten-cta__btn">
                    {t('diensten.cta.button')}
                </Link>
            </motion.section>

            <Footer/>
        </div>
    );
}

export default Diensten;