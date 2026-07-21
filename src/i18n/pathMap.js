// src/i18n/pathMap.js
const NL_TO_ES = {
    "/": "/es",
    "/diensten": "/es/servicios",
    "/portfolio": "/es/portfolio",
    "/over-ons": "/es/sobre-nosotros",
    "/contact": "/es/contacto",
    "/offerte-aanvragen": "/es/solicitar-presupuesto",
    "/faq": "/es/faq",
    "/oosterom-os": "/es/oosterom-os",
    "/blog": "/es/blog",

    "/diensten/webdesign": "/es/servicios/diseno-web",
    "/diensten/webdevelopment": "/es/servicios/desarrollo-web",
    "/diensten/saas": "/es/servicios/saas",
    "/diensten/branding": "/es/servicios/branding",
    "/diensten/ai-agents": "/es/servicios/agentes-ia",
    "/diensten/software-op-maat": "/es/servicios/software-a-medida",
    "/diensten/klantportaal": "/es/servicios/portal-cliente",
    "/diensten/avg-proof-website": "/es/servicios/sitio-web-rgpd",
    "/diensten/onderhoud-support": "/es/servicios/mantenimiento-soporte",
};

// Omgekeerde mapping wordt automatisch afgeleid, zodat je 'm niet dubbel
// hoeft te onderhouden.
const ES_TO_NL = Object.fromEntries(
    Object.entries(NL_TO_ES).map(([nl, es]) => [es, nl])
);

/**
 * Geeft het equivalente pad in de andere taal terug.
 * Onbekende paden (bijv. /portfolio/mijn-project of /l/webdesign-gouda)
 * blijven ongewijzigd, of krijgen alleen het /es-voorvoegsel erbij/eraf,
 * zodat dynamische routes (:slug) ook redelijk werken.
 */
export function getLocalizedPath(pathname, targetLang) {
    if (targetLang === "es") {
        if (NL_TO_ES[pathname]) return NL_TO_ES[pathname];

        // Dynamische routes zoals /portfolio/mijn-project of /blog/mijn-post:
        // probeer het bekende basispad te vertalen en de rest te behouden.
        for (const [nl, es] of Object.entries(NL_TO_ES)) {
            if (nl !== "/" && pathname.startsWith(nl + "/")) {
                return pathname.replace(nl, es);
            }
        }

        // Landingspagina's (/l/...) zijn voorlopig alleen NL — geen ES-variant.
        if (pathname.startsWith("/l/")) return null;

        // Onbekend pad: val terug op de Spaanse homepage.
        return "/es";
    }

    // targetLang === "nl"
    if (ES_TO_NL[pathname]) return ES_TO_NL[pathname];

    for (const [es, nl] of Object.entries(ES_TO_NL)) {
        if (es !== "/es" && pathname.startsWith(es + "/")) {
            return pathname.replace(es, nl);
        }
    }

    if (pathname === "/es") return "/";

    return "/";
}