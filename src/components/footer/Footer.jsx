import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Footer.css';
import privacy from "../../assets/Privacybeleid Oosterom Studio.pdf";

function useSystemStatus() {
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        fetch('/api/uptime')
            .then(r => r.json())
            .then(data => {
                if (data.stat !== 'ok') { setStatus('unknown'); return }
                const down = (data.monitors ?? []).some(m => m.status === 9 || m.status === 8)
                setStatus(down ? 'down' : 'up')
            })
            .catch(() => setStatus('unknown'))
    }, [])

    return status
}

function Footer() {
    const status = useSystemStatus()

    const statusLabel = {
        loading: 'Systemen laden…',
        up: 'Alle systemen operationeel',
        down: 'Storing gedetecteerd',
        unknown: 'Status niet beschikbaar',
    }[status]

    const statusColor = {
        loading: '#888',
        up: '#22c55e',
        down: '#ef4444',
        unknown: '#f59e0b',
    }[status]

    return (
        <footer className="footer">
            <section className="footer-main">

                <article className="footer-brand">
                    <Link to="/" className="footer-logo">
                        Oosterom <span>Studio</span>
                    </Link>
                    <p className="footer-tagline">
                        Digitaal sterk van buiten én van binnen. Wij bouwen websites,
                        webshops en beveiligde digitale oplossingen voor MKB en startups.
                    </p>
                    <section className="footer-socials">
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
                    </section>
                </article>

                <section className="footer-columns">
                    <article className="footer-column">
                        <h4>Diensten</h4>
                        <ul>
                            <li><Link to="/diensten/webdesign">Webdesign & UX</Link></li>
                            <li><Link to="/diensten/webdevelopment">Webdevelopment</Link></li>
                            <li><Link to="/diensten/webdevelopment">Shopify Webshops</Link></li>
                            <li><Link to="/diensten/branding">Branding & Strategie</Link></li>
                        </ul>
                    </article>
                    <article className="footer-column">
                        <h4>Informatie</h4>
                        <ul>
                            <li><Link to="/blog/wanneer-loont-maatwerk-software">Loont maatkwerk?</Link></li>
                            <li><Link to="/blog/wat-is-een-ai-agent">AI Agents, wat is het?</Link></li>
                            <li><Link to="/blog/avg-fouten-mkb">AVG Fouten</Link></li>
                        </ul>
                    </article>
                    <article className="footer-column">
                        <h4>Studio</h4>
                        <ul>
                            <li><Link to="/over-ons">Over ons</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/oosterom-os">Oosterom OS</Link></li>
                            <li><Link to="/offerte-aanvragen">Offerte aanvragen</Link></li>
                            <li><Link to="/faq">Veelgestelde vragen</Link></li>

                        </ul>
                    </article>
                </section>

            </section>


            <section className="footer-bottom">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Oosterom Studio
                </p>
                <a
                    href="https://stats.uptimerobot.com/qBeLzHbru4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-status-link"
                >
                    <span
                        className="footer-status-dot"
                        style={{ background: statusColor }}
                        aria-hidden="true"
                    />
                    {statusLabel}
                </a>
                <div className="footer-bottom-links">
                    <Link to={privacy} target="_blank" rel="noopener noreferrer" className="document-link">Cookiebeleid</Link>
                </div>
            </section>
        </footer>
    );
}

export default Footer;