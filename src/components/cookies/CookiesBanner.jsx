import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../components/cookies/CookiesBanner.css';

function CookieBanner() {
    const [visible, setVisible] = useState(false);

    // Controleer bij laden of er al een keuze is gemaakt
    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Kleine vertraging zodat de pagina eerst laadt
            const timer = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(timer);
        }

        if (consent === "accepted") {
            updateConsent("granted");
        }
    }, []);

    // Stuur de consent-status door naar Google via Consent Mode v2
    // (het GA-script staat al in index.html, dit update alleen de instelling)
    function updateConsent(status) {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: status,
                ad_storage: status,
            });
        }
    }

    function acceptCookies() {
        localStorage.setItem("cookie-consent", "accepted");
        updateConsent("granted");
        setVisible(false);
    }

    function declineCookies() {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-label="Cookievoorkeur">
            <div className="cookie-banner__inner">
                <div className="cookie-banner__content">
                    <p className="cookie-banner__text">
                        We houden van cookies, maar alleen de functionele soort. Analytics om te leren, geen advertenties, geen data die de deur uitgaat.{" "}
                        <a
                            href="/Privacybeleid Oosterom Studio.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cookie-banner__link"
                        >
                            Meer info
                        </a>
                    </p>
                </div>

                <div className="cookie-banner__actions">
                    <button
                        className="cookie-banner__btn cookie-banner__btn--decline"
                        onClick={declineCookies}
                    >
                        Weigeren
                    </button>
                    <button
                        className="cookie-banner__btn cookie-banner__btn--accept"
                        onClick={acceptCookies}
                    >
                        Accepteren
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;