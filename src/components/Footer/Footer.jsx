import './Footer.css'
import { NavLink } from "react-router-dom";


function Footer() {
    return (

        <>
            {/* Footer */}
            <footer className="footer">
                <div>
                    <h2 className="availability">
                        <span className="status-dot" aria-hidden="true"></span>
                        Beschikbaar voor jouw project
                    </h2>
                </div>
                <section    className="footer-container">
                    <article className="footer-links">
                        <NavLink to="/diensten" className={({ isActive }) => isActive ? "active" : ""}>
                            Diensten
                        </NavLink>
                        <NavLink to="/over-ons" className={({ isActive }) => isActive ? "active" : ""}>Over ons</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </article>
                    <p className="footer-copyright">© {new Date().getFullYear()} Oosterom Studio. Alle rechten voorbehouden.</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;