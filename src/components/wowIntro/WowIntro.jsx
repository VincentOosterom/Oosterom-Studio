import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WowIntro.css";

const PARTICLES = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const radius = 180 + Math.random() * 100;
    return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        delay: Math.random() * 0.3,
    };
});

function WowIntro({ onComplete, tagline = "Wij bouwen digitale ervaringen die bedrijven laten groeien." }) {
    const [phase, setPhase] = useState("particles"); // particles -> line -> tagline -> done

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("line"), 1300);
        const t2 = setTimeout(() => setPhase("tagline"), 1900);
        const t3 = setTimeout(() => onComplete?.(), 3400);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [onComplete]);

    return (
        <div className="wow-intro" role="presentation" aria-hidden="true">

            {/* ── Particles + logo ── */}
            <div className="wow-intro__logo-wrap">
                {PARTICLES.map((p) => (
                    <motion.span
                        key={p.id}
                        className="wow-intro__particle"
                        initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: [0.5, 1, 0.3] }}
                        transition={{
                            duration: 1.1,
                            delay: p.delay,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                ))}

                <motion.span
                    className="wow-intro__letter"
                    initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    Oosterom Studio<span className="wow-intro__dot" aria-hidden="true" />
                </motion.span>
            </div>

            {/* ── Lijn-sweep ── */}
            <AnimatePresence>
                {(phase === "line" || phase === "tagline") && (
                    <motion.div
                        className="wow-intro__line"
                        initial={{ scaleX: 0, opacity: 1 }}
                        animate={{ scaleX: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                )}
            </AnimatePresence>

            {/* ── Tagline ── */}
            <AnimatePresence>
                {phase === "tagline" && (
                    <motion.p
                        className="wow-intro__tagline"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {tagline}
                    </motion.p>
                )}
            </AnimatePresence>

        </div>
    );
}

export default WowIntro;