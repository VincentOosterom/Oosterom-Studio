import './Footer.css'


function Footer() {
    return (

        <>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p>© {new Date().getFullYear()} Oosterom Studio. Alle rechten voorbehouden.</p>
                    <div className="footer-links">
                        <a href="/diensten">Diensten</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;