import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import './Navigate.css';
import AnimatedNavText from "../AnimatedNavText.jsx";

function Navigate() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => setIsOpen(!isOpen);

    function BackToHome() {
       navigate('/')
    }

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="navbar-logo" onClick={BackToHome}>
                    <h1 className="logo">Oosterom Studio</h1>
                </div>

                {/* Desktop links */}
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/diensten" className="nav-link">
                            <AnimatedNavText text="Diensten" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="nav-link">
                            <AnimatedNavText text="Portfolio" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/over-ons" className="nav-link">
                            <AnimatedNavText text="Over ons" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link">
                            <AnimatedNavText text="Contact" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/offerte-aanvragen" className="nav-link">
                            <AnimatedNavText text="Offerte Aanvragen" />
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className="mobile-menu"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "100%" }}
                            transition={{
                                duration: 0.45,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <li><NavLink to="/diensten" onClick={toggleMenu}>Diensten</NavLink></li>
                            <li><NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink></li>
                            <li><NavLink to="/over-ons" onClick={toggleMenu}>Over ons</NavLink></li>
                            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
                            <li><NavLink to="/offerte-aanvragen" onClick={toggleMenu}>Offerte aanvragen</NavLink></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

export default Navigate;
