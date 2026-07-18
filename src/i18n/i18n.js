import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nl from "./locales/nl/translation.json";
import es from "./locales/es/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        nl: { translation: nl },
        es: { translation: es },
    },
    lng: "nl",          // startwaarde, wordt overschreven door LanguageSync
    fallbackLng: "nl",  // als een vertaalsleutel in ES ontbreekt, toon NL
    interpolation: {
        escapeValue: false, // React escaped al automatisch, dit is niet nodig
    },
});

export default i18n;