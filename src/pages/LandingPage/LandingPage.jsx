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
            </Helmet>

            <Nav/>

            <section className="landing-page">
                <div className="landing-container">

                    <div className="landing-hero">
                        <h1 className="landing-h1">{data.h1}</h1>
                        <p className="landing-intro">{data.intro}</p>
                        <Link to="/offerte-aanvragen" className="landing-cta">
                            {data.cta_tekst}
                        </Link>
                    </div>

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

                    {data.extra && (
                        <div className="landing-extra">
                            <p>{data.extra}</p>
                        </div>
                    )}

                    <div className="landing-footer-link">
                        <p>
                            Benieuwd naar alles wat we doen op het gebied van{" "}
                            {data.dienst}?{" "}
                            <Link to={data.dienst_link}>Bekijk de volledige dienst</Link>
                        </p>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );
}

export default LandingPage;