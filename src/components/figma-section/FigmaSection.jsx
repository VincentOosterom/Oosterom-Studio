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
                    Een sterke digitale oplossing begint met strategie
                </motion.h2>
                <motion.p
                    className="figma-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Wij starten elk project met een grondige analyse van jouw bedrijf, doelgroep en groeidoelstellingen. We kijken niet alleen naar design, maar naar structuur, prestaties en schaalbaarheid. Door vooraf de juiste architectuur en strategie te bepalen, bouwen we een digitale oplossing die niet alleen vandaag werkt — maar ook meegroeit met jouw organisatie.
                </motion.p>
            </div>
        </section>
    );
}

export default FigmaSection;
