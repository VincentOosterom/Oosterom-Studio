import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigate.css';
import AnimatedNavText from "../AnimatedNavText.jsx";
import LanguageSwitcher from "../language-switcher/Languageswitcher.jsx";

// ── Scroll hook ───────────────────────────────────────────────────────────────

function useScrolled(threshold = 60) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > threshold);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}

// ── Links ─────────────────────────────────────────────────────────────────────

const links = [
    { to: "/diensten",  label: "Diensten"  },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog",      label: "Kennisbank"      },
    { to: "/over-ons",  label: "Over ons"  },
    { to: "/contact",   label: "Contact"   },
];

// ── Framer variants ───────────────────────────────────────────────────────────

const menuVariants = {
    hidden:  { opacity: 0, y: 20, scale: 0.97 },
    visible: { opacity: 1, y: 0,  scale: 1,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, y: 20, scale: 0.97,
        transition: { duration: 0.25 } },
};

const itemVariants = {
    hidden:  { opacity: 0, x: -10 },
    visible: (i) => ({
        opacity: 1, x: 0,
        transition: { delay: i * 0.055, duration: 0.28 },
    }),
};

// ── Component ─────────────────────────────────────────────────────────────────

function Navigate() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate  = useNavigate();
    const scrolled  = useScrolled();

    const closeMenu = () => setIsOpen(false);

    function goHome() {
        navigate("/");
        closeMenu();
    }

    // Sluit menu als de gebruiker Escape indrukt
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") closeMenu(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Vergrendel body-scroll als menu open is
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
                 role="navigation" aria-label="Hoofdnavigatie">
                {/*<LanguageSwitcher/>*/}

                {/* Logo */}
                <button className="navbar-logo" onClick={goHome} aria-label="Terug naar home">
                    <span className="logo">Oosterom Studio</span>
                </button>

                {/* Desktop links */}
                <ul className="navbar-links" role="list">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                <AnimatedNavText text={label} />
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <NavLink to="/offerte-aanvragen" className="navbar-cta">
                    Offerte aanvragen
                </NavLink>

                {/* Hamburger */}
                <button
                    className={`hamburger ${isOpen ? "hamburger--open" : ""}`}
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </nav>

            {/* Mobile overlay ── buiten <nav> zodat het over alles valt */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="mobile-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={closeMenu}
                            aria-hidden="true"
                        />

                        {/* Menu */}
                        <motion.ul
                            id="mobile-menu"
                            className="mobile-menu"
                            role="list"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {links.map(({ to, label }, i) => (
                                <motion.li
                                    key={to}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <NavLink
                                        to={to}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `mobile-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <span className="mobile-link__num">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {label}
                                    </NavLink>
                                </motion.li>
                            ))}

                            {/* CTA */}
                            <motion.li
                                custom={links.length}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="mobile-menu__cta-item"
                            >
                                <NavLink
                                    to="/offerte-aanvragen"
                                    className="navbar-cta"
                                    onClick={closeMenu}
                                >
                                    Offerte aanvragen
                                </NavLink>
                            </motion.li>
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navigate;