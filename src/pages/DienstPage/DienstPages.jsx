// ─────────────────────────────────────────────────────────────────────────────
// pages/diensten/Webdesign.jsx
// ─────────────────────────────────────────────────────────────────────────────
import DienstPage from "../../pages/DienstPage/DienstPage.jsx";

const icon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
    </svg>
);

export function WebdesignPage() {
    return (
        <DienstPage
            title="Webdesign & UX"
            metaDescription="Oosterom Studio ontwerpt maatwerk websites en landingspagina's voor MKB en startups in Nederland. Scherp design, sterke UX en gebouwd voor conversie."
            heroTag="Webdesign & UX"
            heroIcon={icon}
            heroTitle={"Design dat\novertuigt."}
            heroSubtitle="Een website is je digitale visitekaartje — en de eerste indruk telt. Oosterom Studio ontwerpt visueel sterke, gebruiksvriendelijke websites die bezoekers omzetten in klanten."
            diensten={[
                {
                    icon,
                    title: "Maatwerk websiteontwerp",
                    desc: "Geen templates, geen compromissen. Elk ontwerp is gebouwd rondom jouw merk, doelgroep en doelstellingen.",
                    features: ["Uniek visueel concept", "Mobile-first design", "Framer of Figma prototype", "Consistente brandidentiteit"],
                },
                {
                    icon,
                    title: "Landingspagina's",
                    desc: "Gerichte pagina's met één doel: converteren. Voor campagnes, launches of specifieke doelgroepen.",
                    features: ["Conversiegericht ontwerp", "A/B test-klaar", "Snelle oplevering", "Geoptimaliseerd voor Google Ads"],
                },
                {
                    icon,
                    title: "UX & gebruikerservaring",
                    desc: "Goede UX is onzichtbaar — maar voelbaar. We denken na over elke klik, elke scrollstap en elk moment van twijfel.",
                    features: ["Gebruikersflow mapping", "Wireframes & prototypes", "Heatmap-analyse", "Iteratief verfijnen"],
                },
            ]}
            stappen={[
                { title: "Intake & briefing", desc: "We bespreken jouw merk, doelgroep en wat je wilt bereiken. Geen aannames." },
                { title: "Concept & wireframes", desc: "We schetsen de structuur en visuele richting voordat we een regel code schrijven." },
                { title: "Design uitwerking", desc: "Het volledige ontwerp wordt uitgewerkt in Figma — inclusief mobile en dark/light varianten." },
                { title: "Oplevering & handoff", desc: "Jij krijgt een werkend design én de kennis om het zelf te beheren of door te ontwikkelen." },
            ]}
            faq={[
                { vraag: "Lever je ook de code op of alleen een design?", antwoord: "Beide opties zijn mogelijk. We kunnen het ontwerp opleveren als Figma-bestand of het volledig laten ontwikkelen — afhankelijk van jouw situatie." },
                { vraag: "Hoe lang duurt een websiteontwerp?", antwoord: "Een gemiddeld websiteontwerp duurt 2 tot 4 weken, afhankelijk van de scope en het aantal pagina's." },
                { vraag: "Kan ik tussentijds feedback geven?", antwoord: "Absoluut. We werken in iteraties en vragen actief om jouw feedback voordat we verder gaan." },
                { vraag: "Werk je ook met bestaande huisstijlen?", antwoord: "Ja. Als je al een huisstijl hebt, bouwen we het ontwerp daar omheen. Heb je nog niets? Dan helpen we je met de basis." },
            ]}
            ctaTitle="Klaar voor een website die echt werkt?"
            ctaSubtitle="Plan een gratis gesprek en we kijken samen wat jouw website nodig heeft."
        />
    );
}


// ─────────────────────────────────────────────────────────────────────────────
// pages/diensten/Webdevelopment.jsx
// ─────────────────────────────────────────────────────────────────────────────

const devIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 5l-2 14"/>
    </svg>
);

export function WebdevelopmentPage() {
    return (
        <DienstPage
            title="Webdevelopment & Applicaties"
            metaDescription="Oosterom Studio bouwt maatwerk websites, webapplicaties en Shopify webshops voor MKB en startups. Snel, schaalbaar en veilig gebouwd in React, Next.js en moderne technologie."
            heroTag="Webdevelopment & Applicaties"
            heroIcon={devIcon}
            heroTitle={"Code die\nschaalbaar groeit."}
            heroSubtitle="Van een snelle marketingwebsite tot een complexe webapplicatie — Oosterom Studio bouwt digitale producten die presteren, schalen en beschermd zijn."
            diensten={[
                {
                    icon: devIcon,
                    title: "Maatwerk websites",
                    desc: "Gebouwd in React of Next.js — snel, SEO-vriendelijk en klaar voor groei. Geen pagebuilders, wel echte code.",
                    features: ["React & Next.js", "CMS-integratie (Sanity, Contentful)", "Hoge Lighthouse scores", "Shopify & headless e-commerce"],
                },
                {
                    icon: devIcon,
                    title: "Webapplicaties",
                    desc: "Complexere digitale producten met gebruikersaccounts, dashboards of integraties met externe systemen.",
                    features: ["Full stack development", "REST & GraphQL API's", "Authenticatie & autorisatie", "Database design"],
                },
                {
                    icon: devIcon,
                    title: "Shopify webshops",
                    desc: "Maatwerk Shopify-winkels die er niet uitzien als een template — geoptimaliseerd voor conversie en gebruiksgemak.",
                    features: ["Custom Shopify thema's", "Liquid templating", "App-integraties", "Checkout optimalisatie"],
                },
            ]}
            stappen={[
                { title: "Technische analyse", desc: "We brengen de technische vereisten in kaart: stack, integraties, schaalbaarheid en security." },
                { title: "Architectuur & planning", desc: "We bepalen de beste technische aanpak en maken een realistische planning." },
                { title: "Development & testing", desc: "We bouwen iteratief, testen grondig en houden je op de hoogte van de voortgang." },
                { title: "Launch & monitoring", desc: "We begeleiden de lancering en monitoren de eerste weken op performance en stabiliteit." },
            ]}
            faq={[
                { vraag: "Welke technologieën gebruik je?", antwoord: "Voornamelijk React, Next.js, Node.js en Shopify. De keuze hangt altijd af van wat het beste past bij jouw project en toekomstplannen." },
                { vraag: "Kan ik de website daarna zelf beheren?", antwoord: "Ja. We bouwen met een CMS zodat je zelf content kunt aanpassen zonder technische kennis. We geven ook altijd een korte training." },
                { vraag: "Hoe zit het met hosting?", antwoord: "We adviseren en helpen bij het opzetten van hosting op Vercel, Netlify of een VPS — afhankelijk van je wensen en budget." },
                { vraag: "Wat als ik later meer functionaliteiten wil?", antwoord: "We bouwen modulair, zodat uitbreidingen later eenvoudig zijn. Doorontwikkeling is altijd mogelijk." },
            ]}
            ctaTitle="Een digitaal product dat echt werkt?"
            ctaSubtitle="Vertel ons over jouw project en we denken direct mee over de beste aanpak."
        />
    );
}


// ─────────────────────────────────────────────────────────────────────────────
// pages/diensten/SaaS.jsx
// ─────────────────────────────────────────────────────────────────────────────

const saasIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
    </svg>
);

export function SaasPage() {
    return (
        <DienstPage
            title="SaaS & Digitale Systemen"
            metaDescription="Oosterom Studio bouwt SaaS-producten, klantportalen en digitale systemen voor ambitieuze startups en scale-ups. Van MVP tot schaalbaar platform."
            heroTag="SaaS & Digitale Systemen"
            heroIcon={saasIcon}
            heroTitle={"Van idee naar\nschaalbaar platform."}
            heroSubtitle="Je hebt een idee voor een digitaal product. Oosterom Studio helpt je het bouwen — van eerste MVP tot een volledig schaalbaar SaaS-platform."
            diensten={[
                {
                    icon: saasIcon,
                    title: "MVP development",
                    desc: "Snel een werkend product bouwen om je idee te valideren — zonder onnodige complexiteit of technische schuld.",
                    features: ["Lean & iteratief", "Gebruikersauthenticatie", "Betalingsintegratie (Stripe)", "Admin dashboard"],
                },
                {
                    icon: saasIcon,
                    title: "Klantportalen",
                    desc: "Beveiligde omgevingen waar jouw klanten inloggen, hun data beheren of diensten afnemen.",
                    features: ["Rolgebaseerde toegang", "Real-time data", "Notificatiesystemen", "Audit logging"],
                },
                {
                    icon: saasIcon,
                    title: "Systeem- en API-integraties",
                    desc: "Verbind je bestaande tools en systemen met elkaar via maatwerk API-koppelingen.",
                    features: ["REST & Webhook integraties", "CRM-koppelingen", "Automatisering & triggers", "Data synchronisatie"],
                },
            ]}
            stappen={[
                { title: "Product discovery", desc: "We brengen jouw product, doelgroep en kernfunctionaliteiten in kaart. Wat moet versie 1.0 kunnen?" },
                { title: "MVP scope & planning", desc: "We bepalen de minimale set features voor een werkend product en maken een heldere roadmap." },
                { title: "Iteratieve bouw", desc: "We bouwen in sprints, leveren regelmatig werkende versies op en passen bij op basis van feedback." },
                { title: "Schalen & doorontwikkelen", desc: "Na lancering helpen we het platform te optimaliseren, uitbreiden en schaalbaar te maken." },
            ]}
            faq={[
                { vraag: "Ik heb alleen een idee — is dat genoeg om te starten?", antwoord: "Absoluut. We helpen je het idee te structureren, prioriteren en omzetten in een concrete bouwopdracht." },
                { vraag: "Hoe lang duurt het bouwen van een MVP?", antwoord: "Een eenvoudig MVP is binnen 6 tot 10 weken te realiseren. Complexere producten duren langer — we maken altijd een eerlijke inschatting vooraf." },
                { vraag: "Wat is het verschil tussen een MVP en een volwassen product?", antwoord: "Een MVP bevat alleen de kernfunctionaliteiten om het concept te valideren. Op basis van gebruikersfeedback bouwen we daarna stap voor stap verder." },
                { vraag: "Kunnen jullie ook overnemen wat al gebouwd is?", antwoord: "Ja. We doen eerst een technische review van de bestaande codebase en adviseren over de beste vervolgstap." },
            ]}
            ctaTitle="Klaar om jouw product te bouwen?"
            ctaSubtitle="Plan een gratis discovery sessie en we helpen je van idee naar realiteit."
        />
    );
}


// ─────────────────────────────────────────────────────────────────────────────
// pages/diensten/Branding.jsx
// ─────────────────────────────────────────────────────────────────────────────

const brandIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        <path d="M2 12h20"/>
    </svg>
);

export function BrandingPage() {
    return (
        <DienstPage
            title="Branding & Digitale Strategie"
            metaDescription="Oosterom Studio helpt MKB en startups een sterk digitaal merk te bouwen. Van visuele identiteit en merkstrategie tot een heldere digitale koers."
            heroTag="Branding & Digitale Strategie"
            heroIcon={brandIcon}
            heroTitle={"Een merk dat\nblijft hangen."}
            heroSubtitle="Design is meer dan een logo. Oosterom Studio helpt je een consistente, herkenbare merkidentiteit bouwen — en een digitale strategie die daadwerkelijk richting geeft."
            diensten={[
                {
                    icon: brandIcon,
                    title: "Visuele identiteit",
                    desc: "Logo, kleurpalet, typografie en designsysteem — alles wat je nodig hebt voor een consistente uitstraling.",
                    features: ["Logo design", "Merkrichtlijnen (brand guide)", "Kleur- en typografiesysteem", "Social media templates"],
                },
                {
                    icon: brandIcon,
                    title: "Digitale strategie",
                    desc: "Waar sta je nu, waar wil je naartoe en wat is de snelste route? We helpen je prioriteiten stellen en keuzes maken.",
                    features: ["Positioneringsanalyse", "Doelgroep- en concurrentieonderzoek", "Digitale roadmap", "KPI's & meetbaarheid"],
                },
                {
                    icon: brandIcon,
                    title: "Contentstrategie",
                    desc: "Wat zeg je, hoe zeg je het en waar? We helpen je een heldere communicatielijn ontwikkelen die aansluit bij je doelgroep.",
                    features: ["Tone of voice bepalen", "Content planning", "SEO-strategie", "LinkedIn & social aanpak"],
                },
            ]}
            stappen={[
                { title: "Merkanalyse", desc: "We analyseren je huidige positie, doelgroep en concurrenten. Wat maakt jou anders?" },
                { title: "Strategische richting", desc: "We definiëren je positionering, tone of voice en visuele richting." },
                { title: "Identiteit bouwen", desc: "We werken de visuele identiteit uit en leggen alles vast in een brand guide." },
                { title: "Implementatie & begeleiding", desc: "We helpen je de nieuwe identiteit consequent door te voeren op alle kanalen." },
            ]}
            faq={[
                { vraag: "Ik heb al een logo — kunnen jullie daar mee verder?", antwoord: "Ja. We kunnen voortbouwen op wat er al is of adviseren of een refresh zinvol is." },
                { vraag: "Wat is het verschil tussen branding en marketing?", antwoord: "Branding bepaalt wie je bent en hoe je eruitziet. Marketing bepaalt hoe je jezelf promoot. Goede marketing begint bij sterke branding." },
                { vraag: "Lever je ook de bronbestanden op?", antwoord: "Altijd. Je krijgt alle bestanden in de juiste formaten zodat je niet afhankelijk bent van ons." },
                { vraag: "Kan ik na het traject zelf verder?", antwoord: "Ja. We maken een duidelijke brand guide zodat jij — of toekomstige designers — consistent verder kunnen werken." },
            ]}
            ctaTitle="Tijd om jouw merk scherp te zetten?"
            ctaSubtitle="Plan een strategiegesprek en ontdek hoe we jouw merk sterker maken."
        />
    );
}