import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import './Navigate.css';
import AnimatedNavText from "../AnimatedNavText.jsx";




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

// ── Navigate component ────────────────────────────────────────────────────────

function Navigate() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const scrolled = useScrolled();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    function BackToHome() {
        navigate("/");
        closeMenu();
    }

    const links = [
        { to: "/diensten", label: "Diensten" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/over-ons", label: "Over ons" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

                {/* Logo */}
                <div className="navbar-logo" onClick={BackToHome} style={{ cursor: "pointer" }}>
                    <h1 className="logo">Oosterom Studio</h1>
                </div>

                {/* Desktop links */}
                <ul className="navbar-links">
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
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
                    aria-expanded={isOpen}
                >
                    <div className={`bar ${isOpen ? "open" : ""}`} />
                    <div className={`bar ${isOpen ? "open" : ""}`} />
                    <div className={`bar ${isOpen ? "open" : ""}`} />
                </button>
            </nav>

            {/* Mobile menu — buiten <nav> zodat het over alles heen valt */}
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
                        />

                        {/* Menu */}
                        <motion.ul
                            className="mobile-menu open"
                            initial={{ opacity: 0, y: 20, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {links.map(({ to, label }, i) => (
                                <motion.li
                                    key={to}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3 }}
                                >
                                    <NavLink
                                        to={to}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </motion.li>
                            ))}

                            {/* CTA onderaan mobile menu */}
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: links.length * 0.06 + 0.1 }}
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