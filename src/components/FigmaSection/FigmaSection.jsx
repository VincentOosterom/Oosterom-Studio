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
                    Waarom we altijd beginnen met een ontwerp
                </motion.h2>
                <motion.p
                    className="figma-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Bij Oosterom Studio starten we elk project met een doordachte ontwerpfase. Door eerst een helder en interactief prototype uit te werken, krijg je vooraf een duidelijk beeld van het eindresultaat. Dit geeft ruimte om in een vroeg stadium te finetunen, zodat het ontwerp en de functionaliteit perfect aansluiten op jouw wensen. Zo bouwen we efficiënt, voorkomen we misverstanden en leggen we een sterke basis voor een hoogwaardige website.
                </motion.p>
            </div>
        </section>
    );
}

export default FigmaSection;
