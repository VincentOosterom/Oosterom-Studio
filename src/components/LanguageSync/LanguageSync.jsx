import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LanguageSync() {
    const location = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const isSpanish = location.pathname.startsWith("/es");
        const targetLang = isSpanish ? "es" : "nl";

        if (i18n.language !== targetLang) {
            i18n.changeLanguage(targetLang);
        }

        // <html lang="..."> bijwerken, belangrijk voor SEO en toegankelijkheid
        document.documentElement.lang = targetLang;
    }, [location.pathname, i18n]);

    return null;
}

export default LanguageSync;