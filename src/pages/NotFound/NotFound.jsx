import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigate from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './NotFound.css';

const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }
    }),
};

function NotFound() {
    return (
        <>
            <Navigate />

            <section className="notfound">
                <div className="notfound__bg" aria-hidden="true" />

                <div className="notfound__inner">
                    <motion.span
                        className="notfound__code"
                        variants={fadeUp}
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        aria-hidden="true"
                    >
                        404
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        animate="visible"
                    >
                        Deze pagina<br />
                        <em>bestaat niet.</em>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        animate="visible"
                    >
                        De pagina die je zoekt is verplaatst, verwijderd of heeft
                        nooit bestaan. Geen zorgen, je kunt altijd terug.
                    </motion.p>

                    <motion.div
                        className="notfound__actions"
                        variants={fadeUp}
                        custom={3}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link to="/" className="notfound__btn notfound__btn--primary">
                            Terug naar home →
                        </Link>
                        <Link to="/contact" className="notfound__btn notfound__btn--ghost">
                            Neem contact op
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default NotFound;