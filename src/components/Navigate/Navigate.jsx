import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import './Navigate.css';

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
                    <li><NavLink to="/diensten">Diensten</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/offerte-aanvragen">Offerte Aanvragen</NavLink></li>
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
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
                            <li><NavLink to="/diensten" onClick={toggleMenu}>Diensten</NavLink></li>
                            <li><NavLink to="/offerte-aanvragen" onClick={toggleMenu}>Offerte Aanvragen</NavLink></li>
                            <li><NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}

export default Navigate;
