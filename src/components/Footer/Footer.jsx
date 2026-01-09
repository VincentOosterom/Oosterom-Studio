import './Footer.css'
import { NavLink } from "react-router-dom";


function Footer() {
    return (

        <>
            {/* Footer */}
            <footer className="footer">
                <section    className="footer-container">
                    <article className="footer-links">
                        <NavLink to="/diensten" className={({ isActive }) => isActive ? "active" : ""}>
                            Diensten
                        </NavLink>
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