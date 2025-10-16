import { motion } from "framer-motion";
import './FigmaSection.css';

function FigmaSection() {
    return (
        <section className="figma-section">
            <div className="figma-container">
                <motion.h2
                    className="figma-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Waarom we altijd beginnen met een Figma ontwerp
                </motion.h2>
                <motion.p
                    className="figma-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Bij Oosterom Studio starten we elk project met een Figma ontwerp. Zo kunnen we een helder en interactief
                    prototype maken voordat er ook maar één regel code wordt geschreven. Dit zorgt ervoor dat je precies ziet hoe
                    jouw website eruit komt te zien, en we kunnen in een vroeg stadium wijzigingen doorvoeren.
                    <br /><br />
                    Door te werken met Figma besparen we tijd, voorkomen we misverstanden en zorgen we voor een pixel-perfect
                    ontwerp dat naadloos wordt omgezet in een professionele website.
                </motion.p>
            </div>
        </section>
    );
}

export default FigmaSection;
