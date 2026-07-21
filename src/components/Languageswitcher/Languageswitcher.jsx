// src/components/LanguageSwitcher/LanguageSwitcher.jsx
//
// Knop/toggle voor in de Header of Navigate-component.
// Schakelt tussen NL en ES, met behoud van de huidige pagina
// (bijv. van /diensten/webdesign naar /es/servicios/diseno-web).
//
// Gebruik in Navigate.jsx:
//   import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";
//   ...
//   <LanguageSwitcher />

import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {getLocalizedPath} from "../../i18n/pathMap.js";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
    const location = useLocation();
    const navigate = useNavigate();
    const {i18n} = useTranslation();

    const isSpanish = i18n.language === "es";

    const handleSwitch = (targetLang) => {
        if (targetLang === i18n.language) return;

        const newPath = getLocalizedPath(location.pathname, targetLang);

        // Landingspagina's (/l/...) hebben geen ES-variant — daar is de knop
        // simpelweg niet klikbaar naar ES (zie hieronder, disabled state).
        if (newPath) {
            navigate(newPath);
        }
    };

    // Op /l/... pagina's bestaat geen Spaanse variant, dus tonen we de
    // schakelaar niet actief klikbaar naar ES.
    const isLandingPage = location.pathname.startsWith("/l/");

    return (
        <div className="lang-switcher" role="group" aria-label="Taal kiezen">
            <button
                type="button"
                className={`lang-switcher__btn ${!isSpanish ? "lang-switcher__btn--active" : ""}`}
                onClick={() => handleSwitch("nl")}
            >
                NL
            </button>
            <span className="lang-switcher__divider">/</span>
            <button
                type="button"
                className={`lang-switcher__btn ${isSpanish ? "lang-switcher__btn--active" : ""}`}
                onClick={() => handleSwitch("es")}
                disabled={isLandingPage && !isSpanish}
                title={isLandingPage && !isSpanish ? "Deze pagina is nog niet in het Spaans beschikbaar" : undefined}
            >
                ES
            </button>
        </div>
    );
}

export default LanguageSwitcher;