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
                            <div className="value-icon">🎨</div>
                            <h3>Creativiteit</h3>
                            <p>
                                We ontwerpen unieke, opvallende en memorabele visuals die jouw merk echt laten opvallen.
                                Elk ontwerp wordt afgestemd op jouw doelgroep en versterkt de identiteit van je bedrijf.
                            </p>
                        </article>
                        <article className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Betrouwbaarheid</h3>
                            <p>
                                Duidelijke communicatie, realistische planning en consistente kwaliteit zijn bij ons
                                vanzelfsprekend.
                                Jij kunt altijd rekenen op een betrouwbare partner voor elk project.
                            </p>
                        </article>
                        <article className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovatie</h3>
                            <p>
                                We gebruiken de nieuwste technologieën en creatieve oplossingen om jouw website of
                                applicatie
                                efficiënt, modern en toekomstbestendig te maken.
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
                    <h2>Prijzen</h2>
                    <p>
                        Wij werken niet met standaard pakketten of vaste tarieven, omdat we geloven dat elke website
                        uniek is.
                        Elk project heeft zijn eigen doel, uitstraling en technische wensen. Daarom kijken we zorgvuldig
                        naar wat jouw
                        website écht nodig heeft — van design tot functionaliteit.
                    </p>
                    <p>
                        De prijs wordt bepaald aan de hand van verschillende factoren, zoals de complexiteit van het
                        ontwerp, het aantal
                        pagina’s, eventuele koppelingen met systemen, de gewenste doorlooptijd en de mate van maatwerk.
                    </p>
                    <p>
                        Zo betaal je nooit te veel, maar krijg je precies wat bij jouw bedrijf past. Samen bespreken we
                        jouw wensen en
                        stellen we een transparante, eerlijke offerte op die aansluit bij jouw visie en doelen.
                    </p>
                </motion.div>
            </section>

            <Footer/>
        </>
    );
}

export default Homepage;
