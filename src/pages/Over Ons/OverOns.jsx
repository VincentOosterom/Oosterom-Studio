import './OverOns.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import { motion } from "framer-motion";
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
                <meta name="keywords" content="over ons, Vincent Oosterom, full stack development, AI, cybersecurity, webdevelopment, Oosterom Studio" />
                <meta property="og:title" content="Oosterom Studio | Over Ons" />
                <meta property="og:description" content="Maak kennis met Vincent en ontdek zijn passie voor webontwikkeling en technologie." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/over-ons" />
            </Helmet>
            <Navigate />
            <section className="overons-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Over Oosterom Studio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Gedreven door passie voor design, technologie en veiligheid.
                </motion.p>
            </section>

            <section className="overons-content">
                <motion.div
                    className="overons-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Wie ben ik?</h2>
                    <p>
                        Mijn naam is <strong>Vincent Oosterom</strong>, 25 jaar en oprichter van <strong>Oosterom Studio</strong>.
                        Sinds mei 2025 volg ik de opleiding <strong>Software Development</strong>, een stap waar ik al jaren naar uitkeek.
                        Ik heb altijd al gefascineerd gekeken naar hoe websites écht werken — niet alleen wat je op het scherm ziet,
                        maar ook wat er onder de motorkap gebeurt.
                    </p>
                    <p>
                        Het idee dat een paar regels code kunnen uitgroeien tot een functionele, mooie website vond ik altijd bijzonder.
                        Toch kwam het er nooit van om er professioneel iets mee te doen — tot ik besloot: <em>ik ga ervoor!</em>
                    </p>
                </motion.div>

                <motion.div
                    className="overons-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2>Wat doe ik nu?</h2>
                    <p>
                        Op dit moment volg ik de <strong>HBO-opleiding Full Stack Development</strong>.
                        Eind november lever ik mijn eindopdracht in, waarna ik me verder ga specialiseren in de <strong>backend-ontwikkeling</strong>.
                        Tijdens deze opleiding combineer ik mijn kennis van frontend en backend om complete, efficiënte en veilige webapplicaties te bouwen.
                    </p>
                    <br/>
                    <p>
                        Naast mijn studie verdiep ik me steeds meer in <strong>Artificial Intelligence</strong> en <strong>automatisering</strong>.
                        Ik geloof dat AI een grote rol speelt in de toekomst van webontwikkeling — van slimme gebruikerservaringen
                        tot geautomatiseerde workflows die bedrijven tijd en kosten besparen.
                        Met Oosterom Studio wil ik die technologie op een praktische manier inzetten,
                        zodat moderne websites niet alleen mooi zijn, maar ook slimmer werken.
                    </p>
                </motion.div>

                <motion.div
                    className="overons-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2>Waar wil ik naartoe?</h2>
                    <p>
                        In de toekomst wil ik me verder specialiseren in <strong>Cybersecurity</strong>, zodat ik niet alleen mooie,
                        maar ook veilige websites kan bouwen. Met <strong>Oosterom Studio</strong> help ik ondernemers en creatieve professionals
                        aan een unieke online uitstraling — professioneel, snel en veilig.
                    </p>
                </motion.div>
            </section>

            <Footer/>
        </>
    );
}

export default OverOns;
