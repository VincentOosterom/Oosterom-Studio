// src/pages/LandingPage/LandingPage.jsx
//
// Eén generieke template voor alle SEO landingspagina's.
// De inhoud komt uit landingPagesData.js — je hoeft dit bestand
// niet aan te passen om een nieuwe pagina toe te voegen.
//
// Vereist: react-helmet-async (staat al in je package.json)
// main.jsx moet gewrapt zijn in <HelmetProvider> (zie instructies.md)

import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getLandingPageBySlug } from "./landingPagesData.js";
import "./LandingPage.css";
import Footer from "../../components/footer/Footer.jsx";
import Nav from "../../components/navigate/Navigate.jsx";


function LandingPage() {
    const { slug } = useParams();
    const data = getLandingPageBySlug(slug);

    // Bestaat de slug niet? Stuur door naar 404
    if (!data) {
        return <Navigate to="/404" replace />;
    }

    const canonicalUrl = `https://www.oosteromstudio.nl/l/${data.slug}`;

    // FAQ structured data — helpt Google om FAQ-rich snippets te tonen
    const faqJsonLd = data.faq && data.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faq.map((item) => ({
            "@type": "Question",
            "name": item.vraag,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.antwoord
            }
        }))
    } : null;

    return (
        <>
            <Helmet>
                <title>{data.titel} | Oosterom Studio</title>
                <meta name="description" content={data.meta_description} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph voor social sharing */}
                <meta property="og:title" content={data.titel} />
                <meta property="og:description" content={data.meta_description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />

                {faqJsonLd && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqJsonLd)}
                    </script>
                )}
            </Helmet>

            <Nav/>

            <section className="landing-page">
                <div className="landing-container">

                    {/* ── Hero ── */}
                    <div className="landing-hero">
                        <h1 className="landing-h1">{data.h1}</h1>
                        <p className="landing-intro">{data.intro}</p>
                        <Link to="/offerte-aanvragen" className="landing-cta">
                            {data.cta_tekst}
                        </Link>
                    </div>

                    {/* ── Wat je kunt verwachten ── */}
                    {data.bullets && data.bullets.length > 0 && (
                        <div className="landing-bullets">
                            <h2>Wat je kunt verwachten</h2>
                            <ul>
                                {data.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* ── Extra uitleg over de dienst ── */}
                    {data.extra && (
                        <div className="landing-extra">
                            <p>{data.extra}</p>
                        </div>
                    )}

                    {/* ── Regionale context — waarom deze stad ── */}
                    {data.regio_tekst && (
                        <div className="landing-regio">
                            <h2>{data.regio_titel || `${data.dienst} in ${data.stad}`}</h2>
                            <p>{data.regio_tekst}</p>
                        </div>
                    )}

                    {/* ── Aanpak / stappen ── */}
                    {data.stappen && data.stappen.length > 0 && (
                        <div className="landing-stappen">
                            <h2>Zo werkt het</h2>
                            <div className="landing-stappen__grid">
                                {data.stappen.map((stap, index) => (
                                    <div className="landing-stap" key={index}>
                                        <span className="landing-stap__num">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3>{stap.titel}</h3>
                                        <p>{stap.tekst}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Veelgestelde vragen ── */}
                    {data.faq && data.faq.length > 0 && (
                        <div className="landing-faq">
                            <h2>Veelgestelde vragen</h2>
                            <div className="landing-faq__list">
                                {data.faq.map((item, index) => (
                                    <details className="landing-faq__item" key={index}>
                                        <summary>{item.vraag}</summary>
                                        <p>{item.antwoord}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── Link naar volledige dienstpagina ── */}
                    <div className="landing-footer-link">
                        <p>
                            Benieuwd naar alles wat we doen op het gebied van{" "}
                            {data.dienst}?{" "}
                            <Link to={data.dienst_link}>Bekijk de volledige dienst</Link>
                        </p>
                    </div>

                    {/* ── Laatste call to action ── */}
                    <div className="landing-bottom-cta">
                        <h2>Klaar om te starten?</h2>
                        <p>Plan een vrijblijvend gesprek en ontdek wat we voor je kunnen betekenen.</p>
                        <Link to="/offerte-aanvragen" className="landing-cta">
                            {data.cta_tekst}
                        </Link>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );
}

export default LandingPage;