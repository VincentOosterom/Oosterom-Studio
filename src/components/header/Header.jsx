import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigate from "../navigate/Navigate.jsx";
import './Header.css';

// ── Animatie varianten ────────────────────────────────────────────────────────

const fadeUp = {
    hidden:  { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
    }),
};

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * @param {string}  title       — Grote headline, ondersteunt \n voor regelbreuken
 * @param {string}  subtitle    — Subtekst onder de headline
 * @param {string}  buttonText  — Tekst op de CTA-knop (optioneel)
 * @param {string}  tag         — Klein label boven de headline (optioneel)
 */
function Header({ title, subtitle, buttonText, tag }) {
    const navigate = useNavigate();

    return (
        <header className="header">
            <Navigate />

            <div className="header__grid" aria-hidden="true" />

            <section className="header-content">
                <article className="content-left">

                    {/* Optionele pill-tag */}
                    {tag && (
                        <motion.span
                            className="header__tag"
                            variants={fadeUp}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        >
                            {tag}
                        </motion.span>
                    )}

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < title.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Subtitel */}
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        animate="visible"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA knop */}
                    {buttonText && (
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            initial="hidden"
                            animate="visible"
                        >
                            <button
                                className="header__cta"
                                onClick={() => navigate("/offerte-aanvragen")}
                            >
                                {buttonText} →
                            </button>
                        </motion.div>
                    )}
                </article>
            </section>

            {/* Scroll indicator */}
            <motion.div
                className="header__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                aria-hidden="true"
            >
                <span className="header__scroll-line" />
            </motion.div>
        </header>
    );
}

export default Header;