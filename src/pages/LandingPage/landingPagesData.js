// src/pages/LandingPage/landingPagesData.js
//
// Elke SEO landingspagina is één object in deze array.
// Nieuwe pagina toevoegen = nieuw object toevoegen. Geen nieuwe route,
// geen nieuw component nodig — de template pakt dit automatisch op.
//
// "slug" wordt de URL: oosteromstudio.nl/l/{slug}
// "dienst_link" verwijst naar een bestaande dienstpagina uit services.js.
//
// LET OP over duplicate content: geef elke pagina een eigen intro/extra-tekst,
// ook al gaat het om dezelfde dienst in een andere stad. Simpelweg de stadsnaam
// vervangen in identieke tekst kan Google als duplicate content zien, wat je
// SEO-resultaten juist schaadt in plaats van helpt.

export const landingPages = [
    // ── Webdesign & UX ─────────────────────────────────────────────────────
    {
        slug: "webdesign-alphen-aan-den-rijn",
        titel: "Webdesign Alphen aan den Rijn",
        meta_description:
            "Professionele website laten maken in Alphen aan den Rijn? Oosterom Studio bouwt snelle, veilige websites voor lokale ondernemers en MKB.",
        h1: "Webdesign in Alphen aan den Rijn",
        intro:
            "Op zoek naar een webdesigner in Alphen aan den Rijn die verder kijkt dan alleen een mooi ontwerp? Oosterom Studio bouwt websites die niet alleen goed ogen, maar ook technisch sterk en veilig zijn.",
        stad: "Alphen aan den Rijn",
        dienst: "Webdesign & UX",
        dienst_link: "/diensten/webdesign",
        icon: "🎨",
        bullets: [
            "UX research & wireframes op maat",
            "Snelle, moderne website",
            "Gebouwd met beveiliging als uitgangspunt",
            "Lokale kennis van de regio",
        ],
        extra:
            "We ontwerpen niet alleen websites, maar interfaces die klaar zijn voor uitbreiding naar dashboards, portals en SaaS-producten.",
        cta_tekst: "Vraag een gratis kennismaking aan",
    },
    {
        slug: "webdesign-gouda",
        titel: "Webdesign Gouda",
        meta_description:
            "Website laten maken in Gouda? Oosterom Studio ontwerpt en bouwt websites die converteren, met beveiliging als vast onderdeel van het proces.",
        h1: "Webdesign voor ondernemers in Gouda",
        intro:
            "Ondernemers in Gouda verdienen een website die net zo scherp is als hun dienstverlening. Oosterom Studio combineert doordacht ontwerp met een technisch stevige basis, zodat je site niet alleen mooi is, maar ook standhoudt.",
        stad: "Gouda",
        dienst: "Webdesign & UX",
        dienst_link: "/diensten/webdesign",
        icon: "🎨",
        bullets: [
            "Ontwerp gericht op conversie",
            "Persoonlijk contact, geen accountmanager-laag",
            "Gebouwd met React voor snelheid",
            "Regionale aanwezigheid in Zuid-Holland",
        ],
        extra:
            "Een goed ontwerp is de eerste stap. Daarna zorgen we dat het ook technisch klopt: snel, veilig en makkelijk uit te breiden.",
        cta_tekst: "Plan een vrijblijvend gesprek",
    },
    {
        slug: "webdesign-leiden",
        titel: "Webdesign Leiden",
        meta_description:
            "Webdesign in Leiden voor MKB en startups. Oosterom Studio bouwt websites die opvallen én technisch goed in elkaar zitten.",
        h1: "Webdesign in Leiden voor MKB en startups",
        intro:
            "Leiden kent een levendige mix van gevestigde bedrijven en startups. Oosterom Studio ontwerpt websites die daarbij passen: snel te lanceren, maar gebouwd op een fundament dat meegroeit als je bedrijf groeit.",
        stad: "Leiden",
        dienst: "Webdesign & UX",
        dienst_link: "/diensten/webdesign",
        icon: "🎨",
        bullets: [
            "Snel op te leveren eerste versie",
            "Schaalbare designsystemen",
            "Focus op gebruiksvriendelijkheid",
            "Ervaring met zowel MKB als startups",
        ],
        extra:
            "Of je nu een eerste website nodig hebt of een herontwerp van een verouderde site, we denken mee vanaf het eerste gesprek.",
        cta_tekst: "Vraag vrijblijvend advies aan",
    },

    // ── Webdevelopment & Applicaties ───────────────────────────────────────
    {
        slug: "webdevelopment-boskoop",
        titel: "Webdevelopment Boskoop",
        meta_description:
            "Snelle, veilige websites en webapplicaties voor bedrijven in Boskoop. Oosterom Studio bouwt met moderne technologie zoals React.",
        h1: "Webdevelopment voor bedrijven in Boskoop",
        intro:
            "Bedrijven in Boskoop hebben een website nodig die meer doet dan alleen informeren. Oosterom Studio bouwt snelle, schaalbare webapplicaties met React, klaar voor groei.",
        stad: "Boskoop",
        dienst: "Webdevelopment & Applicaties",
        dienst_link: "/diensten/webdevelopment",
        icon: "💻",
        bullets: [
            "React & moderne frontend",
            "Performance-first development",
            "SEO & toegankelijkheid",
            "Onderhoudbare, schaalbare code",
        ],
        extra:
            "Onze applicaties zijn gebouwd als fundament voor groei, van websites tot complete systemen zoals portals en SaaS-platformen.",
        cta_tekst: "Plan een vrijblijvend gesprek",
    },
    {
        slug: "webdevelopment-zoetermeer",
        titel: "Webdevelopment Zoetermeer",
        meta_description:
            "Maatwerk webdevelopment voor bedrijven in Zoetermeer. Snelle, veilige applicaties gebouwd met React en moderne technieken.",
        h1: "Webdevelopment in Zoetermeer",
        intro:
            "Voor bedrijven in Zoetermeer die verder willen dan een standaard website bouwt Oosterom Studio maatwerk webapplicaties: snel, veilig en volledig afgestemd op jouw processen.",
        stad: "Zoetermeer",
        dienst: "Webdevelopment & Applicaties",
        dienst_link: "/diensten/webdevelopment",
        icon: "💻",
        bullets: [
            "Maatwerk functionaliteit",
            "Koppelingen met bestaande systemen mogelijk",
            "Gebouwd voor lange termijn onderhoud",
            "Directe lijn met de ontwikkelaar",
        ],
        extra:
            "Geen tussenlagen of los van elkaar werkende teams: je hebt gedurende het hele traject met dezelfde persoon te maken.",
        cta_tekst: "Bespreek je project",
    },
    {
        slug: "webdevelopment-waddinxveen",
        titel: "Webdevelopment Waddinxveen",
        meta_description:
            "Website of webapplicatie laten bouwen in Waddinxveen? Oosterom Studio levert snelle, technisch degelijke oplossingen.",
        h1: "Webdevelopment voor ondernemers in Waddinxveen",
        intro:
            "Ondernemers in Waddinxveen kiezen steeds vaker voor een webapplicatie op maat in plaats van een standaard websitebouwer. Oosterom Studio levert die maatwerkoplossing, met React als basis.",
        stad: "Waddinxveen",
        dienst: "Webdevelopment & Applicaties",
        dienst_link: "/diensten/webdevelopment",
        icon: "💻",
        bullets: [
            "Van idee tot werkende applicatie",
            "Duidelijke communicatie zonder jargon",
            "Beveiliging als standaard, niet als extra",
            "Regionale betrokkenheid",
        ],
        extra:
            "We bouwen niet los van je bedrijfsvoering, maar erin: de applicatie sluit aan op hoe je nu al werkt.",
        cta_tekst: "Vraag een offerte aan",
    },

    // ── SaaS & Digitale Systemen ────────────────────────────────────────────
    {
        slug: "saas-ontwikkeling-alphen-aan-den-rijn",
        titel: "SaaS Ontwikkeling Alphen aan den Rijn",
        meta_description:
            "SaaS-platform laten bouwen vanuit Alphen aan den Rijn. Oosterom Studio helpt van idee naar werkend product met een schaalbare basis.",
        h1: "SaaS-ontwikkeling voor bedrijven in Alphen aan den Rijn",
        intro:
            "Heb je een idee voor een digitaal product, maar mis je de technische kennis om het te bouwen? Oosterom Studio vertaalt je idee naar een werkend SaaS-platform, met een architectuur die is voorbereid op groei.",
        stad: "Alphen aan den Rijn",
        dienst: "SaaS & Digitale Systemen",
        dienst_link: "/diensten/saas",
        icon: "🧩",
        bullets: [
            "MVP-ontwikkeling en productstructuur",
            "Dashboard en gebruikersrollen",
            "Schaalbare database-architectuur",
            "Begeleiding van idee tot lancering",
        ],
        extra:
            "We helpen niet alleen met de techniek, maar denken ook mee over productkeuzes: wat bouw je eerst, en wat kan later.",
        cta_tekst: "Bespreek je SaaS-idee",
    },
    {
        slug: "saas-ontwikkeling-gouda",
        titel: "SaaS Ontwikkeling Gouda",
        meta_description:
            "Digitaal product of SaaS-platform bouwen vanuit Gouda. Oosterom Studio zorgt voor een technische basis die klaar is voor schaal.",
        h1: "Van idee naar SaaS-product in Gouda",
        intro:
            "Steeds meer bedrijven in en rond Gouda willen hun dienstverlening vertalen naar een digitaal platform. Oosterom Studio bouwt die eerste versie, met een architectuur die meegroeit als het aantal gebruikers toeneemt.",
        stad: "Gouda",
        dienst: "SaaS & Digitale Systemen",
        dienst_link: "/diensten/saas",
        icon: "🧩",
        bullets: [
            "Productadvies vanaf de eerste schets",
            "Multi-tenant architectuur waar nodig",
            "Veilige gebruikersauthenticatie",
            "Groei-ready vanaf de eerste versie",
        ],
        extra:
            "Een SaaS-product dat achteraf herbouwd moet worden kost meer tijd en geld dan een product dat vanaf het begin goed is opgezet.",
        cta_tekst: "Plan een kennismaking",
    },

    // ── AI Agents ───────────────────────────────────────────────────────────
    {
        slug: "ai-agents-leiden",
        titel: "AI Agents Leiden",
        meta_description:
            "AI-agents en automatisering voor bedrijven in Leiden. Oosterom Studio bouwt chatbots en workflows met controle als uitgangspunt.",
        h1: "AI Agents voor bedrijven in Leiden",
        intro:
            "Steeds meer bedrijven in Leiden willen repetitief werk automatiseren zonder de controle te verliezen. Oosterom Studio bouwt AI-agents die taken overnemen, met een mens die uiteindelijk beslist.",
        stad: "Leiden",
        dienst: "AI Agents",
        dienst_link: "/diensten/ai-agents",
        icon: "🤖",
        bullets: [
            "AI-chatbots met eigen kennisbasis",
            "Automatisering van herhalende taken",
            "Koppeling met CRM en e-mail",
            "Human-in-the-loop, geen black box",
        ],
        extra:
            "We bouwen automatisering die je kunt vertrouwen: met notificaties en goedkeuringsstappen waar dat nodig is.",
        cta_tekst: "Ontdek de mogelijkheden",
    },
    {
        slug: "ai-chatbot-bodegraven",
        titel: "AI Chatbot Bodegraven",
        meta_description:
            "AI-chatbot laten bouwen voor je website in Bodegraven. Oosterom Studio integreert een slimme assistent met kennis van jouw bedrijf.",
        h1: "AI-chatbot voor je website in Bodegraven",
        intro:
            "Een chatbot die alleen standaardantwoorden geeft, helpt je klanten niet verder. Oosterom Studio bouwt chatbots die getraind zijn op jouw eigen bedrijfsinformatie, zodat bezoekers in Bodegraven en daarbuiten echt geholpen worden.",
        stad: "Bodegraven",
        dienst: "AI Agents",
        dienst_link: "/diensten/ai-agents",
        icon: "🤖",
        bullets: [
            "Chatbot getraind op jouw eigen content",
            "Directe integratie op je bestaande website",
            "Gesprekken opgeslagen voor inzicht",
            "Uitbreidbaar met automatisering",
        ],
        extra:
            "De chatbot die we op onze eigen website gebruiken, is gebouwd volgens hetzelfde principe dat we voor klanten toepassen.",
        cta_tekst: "Vraag een demo aan",
    },

    // ── Software op Maat ─────────────────────────────────────────────────────
    {
        slug: "software-op-maat-nieuwkoop",
        titel: "Software op Maat Nieuwkoop",
        meta_description:
            "Maatwerksoftware voor bedrijven in Nieuwkoop. Oosterom Studio bouwt systemen die aansluiten op jouw processen, niet andersom.",
        h1: "Software op maat voor bedrijven in Nieuwkoop",
        intro:
            "Standaardsoftware dwingt je vaak om je werkwijze aan te passen aan het programma. Oosterom Studio draait dat om: we bouwen software die aansluit op hoe jouw bedrijf in Nieuwkoop al werkt.",
        stad: "Nieuwkoop",
        dienst: "Software op Maat",
        dienst_link: "/diensten/software-op-maat",
        icon: "⚙️",
        bullets: [
            "Procesanalyse voorafgaand aan bouw",
            "Volledig eigendom van de software",
            "Koppeling met bestaande tools",
            "Documentatie zodat je niet vastzit aan één ontwikkelaar",
        ],
        extra:
            "We bouwen modulair, zodat je kan starten met de belangrijkste functionaliteit en later kan uitbreiden.",
        cta_tekst: "Bespreek je proces",
    },
    {
        slug: "software-op-maat-woerden",
        titel: "Software op Maat Woerden",
        meta_description:
            "Bedrijfssoftware laten ontwikkelen in Woerden. Oosterom Studio bouwt maatwerkoplossingen voor de lange termijn.",
        h1: "Maatwerk bedrijfssoftware in Woerden",
        intro:
            "Voor bedrijven in Woerden die zijn vastgelopen in Excel-bestanden of verouderde systemen bouwt Oosterom Studio maatwerksoftware die wél bij het bedrijf past, inclusief overdracht en documentatie.",
        stad: "Woerden",
        dienst: "Software op Maat",
        dienst_link: "/diensten/software-op-maat",
        icon: "⚙️",
        bullets: [
            "Vervanging van verouderde Excel-processen",
            "Full stack development",
            "Uitbreidbare, modulaire opbouw",
            "Overdracht en documentatie inbegrepen",
        ],
        extra:
            "We bouwen software die van jou blijft, geen vendor lock-in of afhankelijkheid van een externe partij die later duur uitpakt.",
        cta_tekst: "Vraag een intakegesprek aan",
    },

    // ── Klantportalen & CRM ──────────────────────────────────────────────────
    {
        slug: "klantportaal-op-maat-reeuwijk",
        titel: "Klantportaal op Maat Reeuwijk",
        meta_description:
            "Eigen klantportaal of CRM laten bouwen in Reeuwijk. Oosterom Studio ontwikkelt portalen die aansluiten op jouw werkwijze.",
        h1: "Klantportaal op maat voor bedrijven in Reeuwijk",
        intro:
            "Minder e-mailverkeer en meer overzicht voor je klanten: dat is wat een goed klantportaal oplevert. Oosterom Studio bouwt portalen op maat voor bedrijven in Reeuwijk, inclusief rechtenbeheer per gebruiker.",
        stad: "Reeuwijk",
        dienst: "Klantportalen & CRM",
        dienst_link: "/diensten/klantportaal",
        icon: "🗂️",
        bullets: [
            "Inlog en rechtenbeheer per klant",
            "Realtime inzicht in status en voortgang",
            "Koppeling met facturatie en e-mail",
            "Modulair uit te breiden per fase",
        ],
        extra:
            "We beginnen met de belangrijkste functionaliteit en breiden daarna uit, zodat je niet in één keer een groot bedrag hoeft te investeren.",
        cta_tekst: "Ontdek de mogelijkheden",
    },

    // ── AVG-proof Website ─────────────────────────────────────────────────────
    {
        slug: "avg-proof-website-alphen-aan-den-rijn",
        titel: "AVG-proof Website Alphen aan den Rijn",
        meta_description:
            "Is jouw website in Alphen aan den Rijn echt AVG-proof? Oosterom Studio voert een privacy-audit uit en lost technische risico's op.",
        h1: "AVG-proof website voor bedrijven in Alphen aan den Rijn",
        intro:
            "Veel websites lijken in orde qua privacy, maar zijn dat technisch niet. Oosterom Studio voert een audit uit op jouw website in Alphen aan den Rijn en lost de risico's op, van cookieconsent tot formulierbeveiliging.",
        stad: "Alphen aan den Rijn",
        dienst: "AVG-proof Website",
        dienst_link: "/diensten/avg-proof-website",
        icon: "📋",
        bullets: [
            "Privacy-audit en risicoanalyse",
            "Correct werkende cookieconsent",
            "Beveiligde formulieren en opslag",
            "Documentatie voor eventueel toezicht",
        ],
        extra:
            "Dit is precies waar de combinatie van webdesign en cybersecurity bij Oosterom Studio samenkomt: mooi én aantoonbaar veilig.",
        cta_tekst: "Vraag een privacy-scan aan",
    },

    // ── Onderhoud & Support ──────────────────────────────────────────────────
    {
        slug: "website-onderhoud-boskoop",
        titel: "Website Onderhoud Boskoop",
        meta_description:
            "Vast onderhoud en support voor je website in Boskoop. Oosterom Studio zorgt voor updates, back-ups en snelle hulp bij storingen.",
        h1: "Website onderhoud voor bedrijven in Boskoop",
        intro:
            "Een website die je met rust kan laten, zonder dat hij verouderd of onveilig wordt: dat is wat een onderhoudsabonnement bij Oosterom Studio oplevert voor bedrijven in Boskoop.",
        stad: "Boskoop",
        dienst: "Onderhoud & Support",
        dienst_link: "/diensten/onderhoud-support",
        icon: "🛠️",
        bullets: [
            "Updates en beveiligingspatches",
            "Uptime monitoring en back-ups",
            "Vast maandelijks urentegoed",
            "Prioriteit bij storingen",
        ],
        extra:
            "Geen losse facturen per kleine aanpassing: met een vast abonnement weet je precies wat je krijgt en wat het kost.",
        cta_tekst: "Bekijk de abonnementen",
    },

    // Voeg hier nieuwe pagina's toe — kopieer een object en pas de velden aan.
    // Denk aan: unieke slug, unieke intro/extra-tekst (geen kopie met alleen
    // de stadsnaam aangepast), en een kloppende dienst_link.
];

// Helper om snel een pagina op te zoeken op basis van de URL-slug
export function getLandingPageBySlug(slug) {
    return landingPages.find((page) => page.slug === slug);
}