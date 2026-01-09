import './OverOns.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";

function OverOns() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Over Ons</title>
                <meta
                    name="description"
                    content="Ontmoet Vincent Oosterom, oprichter van Oosterom Studio. Full Stack developer met focus op webdevelopment, AI en cybersecurity."
                />
                <meta name="keywords"
                      content="over ons, Vincent Oosterom, full stack development, AI, cybersecurity, webdevelopment, Oosterom Studio"/>
                <meta property="og:title" content="Oosterom Studio | Over Ons"/>
                <meta property="og:description"
                      content="Maak kennis met Vincent en ontdek zijn passie voor webontwikkeling en technologie."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/over-ons"/>
            </Helmet>
            <Navigate/>
            <section className="overons-hero">
                <h1>Over Oosterom Studio</h1>
                <p>Gedreven door passie voor design, technologie en veiligheid.</p>
            </section>

            <section className="overons-content">
                <article className="overons-text">
                    <h2>Wie ben ik?</h2>
                    <p>
                        Mijn naam is <strong>Vincent Oosterom</strong>, 25 jaar en oprichter van{" "}
                        <strong>Oosterom Studio</strong>. Sinds mei 2025 volg ik de opleiding{" "}
                        Software Development.
                    </p>
                    <p>
                        Ik ben altijd gefascineerd geweest door hoe websites écht werken — niet
                        alleen wat je ziet, maar ook wat er achter de schermen gebeurt.
                        Wat begon als interesse, groeide uit tot een bewuste keuze:{" "}
                        <em>ik ga hier mijn werk van maken.</em>
                    </p>
                </article>

                <article className="overons-text reverse">
                    <h2>Wat doe ik nu?</h2>
                    <p>
                        Momenteel volg ik de{" "}
                        <strong>HBO-opleiding Full Stack Development</strong>. Hierbij combineer
                        ik frontend en backend om complete, snelle en veilige webapplicaties te
                        bouwen.
                    </p>
                    <p>
                        Daarnaast verdiep ik mij steeds meer in{" "}
                        <strong>Artificial Intelligence</strong> en{" "}
                        <strong>automatisering</strong>. Ik geloof dat slimme technologie een
                        grote rol speelt in de toekomst van webontwikkeling.
                    </p>
                </article>

                <article className="overons-text">
                    <h2>Waar wil ik naartoe?</h2>
                    <p>
                        In de toekomst wil ik mij verder specialiseren in{" "}
                        <strong>Cybersecurity</strong>, zodat websites niet alleen mooi en snel,
                        maar ook veilig zijn.
                    </p>
                    <p>
                        Met <strong>Oosterom Studio</strong> help ik ondernemers aan een sterke
                        online aanwezigheid — professioneel, betrouwbaar en toekomstgericht.
                    </p>
                </article>

            </section>

            <Footer/>
        </>
    );
}

export default OverOns;
