import './Footer.css'
import { NavLink } from "react-router-dom";


function Footer() {
    return (

        <>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p>© {new Date().getFullYear()} Oosterom Studio. Alle rechten voorbehouden.</p>
                    <div className="footer-links">
                        <NavLink to="/diensten" className={({ isActive }) => isActive ? "active" : ""}>
                            Diensten
                        </NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;