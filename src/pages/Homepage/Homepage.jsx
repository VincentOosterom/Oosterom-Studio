import './Homepage.css';
import Header from "../../components/Header/Header.jsx";
import {motion} from "framer-motion";
import Footer from "../../components/Footer/Footer.jsx";
import {Helmet} from "react-helmet-async";
import FigmaSection from "../../components/FigmaSection/FigmaSection.jsx";
import {Link} from "react-router-dom";
import MovingBar from "../../components/movingbar/movingBar.jsx";
import IntentSection from "../../components/intent_section/IntentSection.jsx";


function Homepage() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Webdesign & Development</title>
                <meta
                    name="description"
                    content="Professionele websites en webapplicaties op maat, ontwikkeld door Oosterom Studio."
                />
                <meta property="og:title" content="Oosterom Studio"/>
                <meta property="og:description" content="Webdesign en development op maat."/>
                <meta property="og:type" content="website"/>
            </Helmet>

            <MovingBar/>
            <Header
                title="Wij bouwen digitale ervaringen die indruk maken."
                subtitle="Van doordacht design tot razendsnelle websites — bij Oosterom Studio komen creativiteit en techniek samen om digitale oplossingen te bouwen die niet alleen mooi zijn, maar ook daadwerkelijk resultaat opleveren."
                buttonText="Ontvang een gratis offerte"
            />
            <IntentSection/>




            {/* Section 1: Onze Kernwaarden */}
            <section className="values-section">
                <motion.div
                    className="values-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <h2>Onze Kernwaarden</h2>
                    <section className="values-grid">
                        <article className="value-card">
                            <div className="value-icon">⚡</div>
                            <h3>Performance First</h3>
                            <p>
                                Wij ontwikkelen snelle en technisch geoptimaliseerde websites die voldoen aan moderne performance standaarden.
                            </p>
                        </article>
                        <article className="value-card">
                            <div className="value-icon">🔐</div>
                            <h3>Security by Default</h3>
                            <p>
                                Veiligheid is geen extra optie. Wij bouwen volgens best practices met aandacht voor stabiliteit en bescherming.
                            </p>
                        </article>
                        <article className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Resultaatgericht</h3>
                            <p>
                                Elke keuze — van structuur tot techniek — is gericht op conversie, groei en schaalbaarheid.
                            </p>
                        </article>
                    </section>
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
                    <h2>Technische SEO & Performance</h2>
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
                            <h3>1. Analyse & Strategie</h3>
                            <p>We analyseren je markt, doelgroep en technische situatie.</p>
                        </div>
                        <div className="approach-card">
                            <h3>2. Architectuur & Design</h3>
                            <p>We ontwerpen een schaalbare en conversiegerichte structuur.</p>
                        </div>
                        <div className="approach-card">
                            <h3>3. Development & Optimalisatie</h3>
                            <p>We bouwen, testen en optimaliseren voor performance en veiligheid.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section 4: Figma Section */}
            <FigmaSection/>

            {/* Section 5: Call to Action */}
            <section className="cta-section">
                <motion.div
                    className="cta-container"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2>Klaar om jouw project te starten?</h2>
                    <p>
                        Of je nu een nieuwe website nodig hebt, je huidige design wilt vernieuwen of online beter
                        gevonden wilt worden — wij helpen je graag verder.
                    </p>
                    <Link to="/contact" className="cta-button">Neem contact op</Link>
                </motion.div>
            </section>

            <section className="pricing-section">
                <motion.div
                    className="pricing-container"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2>Investering</h2>

                    <p>
                        Wij bouwen maatwerk digitale oplossingen. Daarom werken we niet met standaard templates of vaste pakketten, maar met een gerichte aanpak afgestemd op jouw doelstellingen.
                    </p>

                    <p>
                        De investering voor een professionele maatwerk website start doorgaans vanaf €1.500.
                        Complexere platformen, webshops of maatwerk functionaliteiten worden bepaald op basis van scope, integraties en technische vereisten.
                    </p>

                    <p>
                        Tijdens een vrijblijvend strategiegesprek brengen we jouw wensen, groeidoelen en technische behoeften in kaart. Op basis daarvan ontvang je een heldere en transparante offerte zonder verrassingen achteraf.
                    </p>
                </motion.div>
            </section>

            <Footer/>
        </>
    );
}

export default Homepage;
