import './Homepage.css';
import Header from "../../components/Header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/Footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import FigmaSection from "../../components/FigmaSection/FigmaSection.jsx";

function Homepage() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Webdesign & Development</title>
                <meta
                    name="description"
                    content="Professionele websites en webapplicaties op maat, ontwikkeld door Oosterom Studio."
                />
                <meta property="og:title" content="Oosterom Studio" />
                <meta property="og:description" content="Webdesign en development op maat." />
                <meta property="og:type" content="website" />
            </Helmet>


            {/* Header Component */}
            <Header/>

            {/* Section 1: Onze Kernwaarden */}
            <section className="values-section">
                <motion.div
                    className="values-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <h2>Onze Kernwaarden</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Creativiteit</h3>
                            <p>Unieke designs die opvallen en je merk versterken.</p>
                        </div>
                        <div className="value-card">
                            <h3>Betrouwbaarheid</h3>
                            <p>Altijd op tijd, duidelijke communicatie en kwaliteit.</p>
                        </div>
                        <div className="value-card">
                            <h3>Innovatie</h3>
                            <p>Moderne technologieën en oplossingen die werken.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: Waarom SEO belangrijk is */}
            <section className="seo-section">
                <motion.div
                    className="seo-container"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2>Waarom SEO belangrijk is</h2>
                    <p>
                        Goede SEO is cruciaal om online zichtbaar te zijn. Een hoge ranking in zoekmachines trekt
                        relevante bezoekers aan, verhoogt de geloofwaardigheid van je merk en zorgt voor
                        conversies. Wij optimaliseren je website zodat je gevonden wordt door de juiste doelgroep,
                        met aandacht voor snelheid, structuur en content.
                    </p>
                </motion.div>
            </section>

            {/* Section 3: Onze aanpak */}
            <section className="approach-section">
                <motion.div
                    className="approach-container"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2>Onze aanpak</h2>
                    <div className="approach-grid">
                        <div className="approach-card">
                            <h3>1. Strategie</h3>
                            <p>We beginnen met een duidelijke strategie en doelen voor jouw project.</p>
                        </div>
                        <div className="approach-card">
                            <h3>2. Design</h3>
                            <p>Pixel-perfect designs in Figma die gebruikerservaring centraal zetten.</p>
                        </div>
                        <div className="approach-card">
                            <h3>3. Development</h3>
                            <p>Responsive en snelle websites met React en moderne technologieën.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <FigmaSection/>
            <Footer/>
        </>
    );
}

export default Homepage;
