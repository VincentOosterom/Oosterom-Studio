import Navigate from "../../components/Navigate/Navigate.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {motion} from "framer-motion";

function FigmaPage() {
    return (
        <>
            <Header title="Waarom wij altijd beginnen met Figma"
                    subtitle="Bij Oosterom Studio starten we elk project met een Figma ontwerp. Zo kunnen we een helder en interactief prototype maken voordat er ook maar één regel code wordt geschreven. Dit zorgt ervoor dat je precies ziet hoe jouw website eruit komt te zien, en we kunnen in een vroeg stadium wijzigingen doorvoeren.

                     Door te werken met Figma besparen we tijd, voorkomen we misverstanden en zorgen we voor een pixel-perfect ontwerp dat naadloos wordt omgezet in een professionele website."
            />
            <section className="values-section">
                <motion.div
                    className="values-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <h2>De voordelen van werken met Figma</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎨</div>
                            <h3>Snellere communicatie</h3>
                            <p>
                                Jij ziet live mee met het designproces en kunt direct feedback geven.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">⚡</div>
                            <h3>Efficienter bouwen</h3>
                            <p>
                                Onze developers werken vanuit een duidelijk design-systeem, waardoor de vertaalslag naar code soepel verloopt.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🧠</div>
                            <h3>Gebruikersgericht</h3>
                            <p>
                                Door wireframes en prototypes te testen, ontdekken we wat werkt vóórdat we gaan bouwen.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className="seo-section">
                <motion.div
                    className="seo-container"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2>Van concept tot realisatie</h2>
                    <p>
                        Zodra het ontwerp in Figma is goedgekeurd, zetten we het om naar een volledig werkende website met moderne technologieën zoals React en Spring Boot.
                        Doordat het fundament al stevig in Figma ligt, kunnen we de focus volledig leggen op prestatie, gebruiksvriendelijkheid en schaalbaarheid.
                    </p>
                </motion.div>
            </section>










            <Footer/>
        </>
    )
}

export default FigmaPage