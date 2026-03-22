import { NavLink, Link } from "react-router-dom";
import './Footer.css';
import algemene from "../../assets/Algemene Voorwaarden - Oosterom Studio.pdf";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">

                {/* LEFT — logo + beschrijving + socials */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        Oosterom <span>Studio</span>
                    </Link>
                    <p className="footer-tagline">
                        Digitaal sterk van buiten én van binnen. Wij bouwen websites,
                        webshops en beveiligde digitale oplossingen voor MKB en startups.
                    </p>
                    <div className="footer-socials">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/vincent-oosterom-05017176/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="footer-social-link"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/oosteromstudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="footer-social-link"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                            </svg>
                        </a>
                        {/* GitHub */}
                        <a
                            href="https://github.com/oosteromstudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="footer-social-link"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT — link kolommen */}
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Diensten</h4>
                        <ul>
                            <li><Link to="/diensten/webdesign">Webdesign & UX</Link></li>
                            <li><Link to="/diensten/webdevelopment">Webdevelopment</Link></li>
                            <li><Link to="/diensten/webdevelopment" >Shopify Webshops</Link></li>
                            <li><Link to="/diensten/branding">Branding & Strategie</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Studio</h4>
                        <ul>
                            <li><Link to="/over-ons">Over ons</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/offerte-aanvragen">Offerte aanvragen</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:vincent@oosteromstudio.nl">vincent@oosteromstudio.nl</a></li>
                            <li><span className="footer-availability">
                                <span className="status-dot" aria-hidden="true"/>
                                Beschikbaar voor projecten
                            </span></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Oosterom Studio — onderdeel van Oosterom Creative
                </p>
                <div className="footer-bottom-links">
                    <Link to={algemene} target="_blank" rel="noopener noreferrer" className="document-link">Algemene Voorwaarden</Link>
                    <Link to="/privacy">Privacybeleid</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;