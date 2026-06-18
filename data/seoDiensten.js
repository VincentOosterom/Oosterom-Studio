// Nieuwe diensten/landingspagina's — focus: dienst, veiligheid, software
// hidden: true betekent: NIET in hoofdnav, maar wel een eigen route + opgenomen in sitemap.xml
// Voeg toe via: const services = [...bestaandeServices, ...seoDiensten];

export const seoDiensten = [
    {
        title: "AI-Agents & Slimme Automatisering",
        description:
            "AI-agents die taken overnemen, klanten te woord staan of processen automatiseren — gebouwd rondom jouw workflows.",
        bullets: [
            "Chatbots met eigen kennisbank",
            "Workflow-automatisering (AI + n8n)",
            "Integratie met CRM & e-mail",
            "Telegram/Slack notificaties",
            "Menselijke goedkeuring waar nodig"
        ],
        extra:
            "AI-agents werken het beste als ze gekoppeld zijn aan je bestaande systemen. Wij bouwen agents die meekijken, signaleren en pas handelen als jij dat wil — geen black box.",
        icon: "🤖",
        link: "/diensten/ai-agents",
        hidden: true
    },
    {
        title: "Cybersecurity Scan & Beveiligingsaudit",
        description:
            "Een grondige scan van je website en systemen op kwetsbaarheden — voordat een hacker ze vindt.",
        bullets: [
            "Kwetsbaarhedenscan",
            "SSL & securityheaders check",
            "Concrete actiepunten op prioriteit",
            "Rapportage in begrijpelijke taal",
            "Optionele vervolgmonitoring"
        ],
        extra:
            "Veel MKB-websites hebben nooit een beveiligingscheck gehad. Onze scan laat precies zien waar de risico's zitten, zonder technisch jargon.",
        icon: "🛡️",
        link: "/diensten/cybersecurity-scan",
        hidden: true
    },
    {
        title: "Website Beveiliging & Onderhoud",
        description:
            "Doorlopende bescherming en onderhoud zodat je website veilig, snel en up-to-date blijft.",
        bullets: [
            "Updates & patches",
            "Uptime monitoring",
            "Malware- & inbraakdetectie",
            "Automatische back-ups",
            "Maandelijks beveiligingsrapport"
        ],
        extra:
            "Beveiliging is geen eenmalige actie maar een doorlopend proces. Met een onderhoudsabonnement blijft je site continu beschermd.",
        icon: "🔒",
        link: "/diensten/website-beveiliging",
        hidden: true
    },
    {
        title: "AVG/GDPR-proof Website",
        description:
            "Een website die voldoet aan de AVG, zonder gedoe met cookiebanners of datalekken.",
        bullets: [
            "Privacy-by-design",
            "Correct ingerichte cookieconsent",
            "Verwerkersovereenkomsten check",
            "Beveiligde formulieren",
            "Documentatie voor toezicht"
        ],
        extra:
            "Veel websites zijn technisch onveilig ingericht qua privacy zonder dat de eigenaar het weet. Wij maken je site aantoonbaar AVG-proof.",
        icon: "📋",
        link: "/diensten/avg-proof-website",
        hidden: true
    },
    {
        title: "Custom Software & Maatwerk Ontwikkeling",
        description:
            "Software die past bij jouw bedrijfsprocessen, niet andersom.",
        bullets: [
            "Op maat gebouwde tools",
            "Koppelingen met bestaande systemen",
            "Schaalbare backend-architectuur",
            "Van idee tot productie",
            "Documentatie & overdracht"
        ],
        extra:
            "Standaardsoftware past zelden perfect. Wij bouwen maatwerk dat aansluit op hoe jouw bedrijf daadwerkelijk werkt.",
        icon: "⚙️",
        link: "/diensten/software-op-maat",
        hidden: true
    },
    {
        title: "Klantportalen & CRM op Maat",
        description:
            "Eigen klantomgevingen en CRM-systemen, gebouwd rondom hoe jij werkt.",
        bullets: [
            "Inlog & rechtenbeheer",
            "Dashboards per klant",
            "Gekoppeld aan je website",
            "Realtime data",
            "Uitbreidbaar met nieuwe features"
        ],
        extra:
            "Een eigen portaal geeft klanten inzicht en jou minder e-mailverkeer. Wij bouwen dit modulair, zodat het meegroeit met je bedrijf.",
        icon: "🗂️",
        link: "/diensten/klantportaal",
        hidden: true
    },
    {
        title: "Website + Beveiligingspakket",
        description:
            "Onze signature-combinatie: een sterke website van buiten, beveiligd van binnen.",
        bullets: [
            "Webdesign + development",
            "Beveiligingsaudit inbegrepen",
            "AVG-proof opgeleverd",
            "Onderhoud & monitoring",
            "Eén aanspreekpunt"
        ],
        extra:
            "Digitaal sterk. Van buiten én van binnen. Deze dienst bundelt design, development en beveiliging in één traject.",
        icon: "🏰",
        link: "/diensten/website-en-beveiliging",
        hidden: true
    },
    {
        title: "IoT & Slimme Bedrijfsoplossingen",
        description:
            "Sensoren en slimme apparaten die je bedrijf inzicht geven en automatiseren — veilig aangesloten op je systemen.",
        bullets: [
            "Slimme stekkers & sensoren",
            "Realtime metingen & alerts",
            "Koppeling met dashboard",
            "Beveiligde data-opslag",
            "Schaalbaar per locatie"
        ],
        extra:
            "IoT-apparaten zijn vaak een ingang voor hackers als ze slecht beveiligd zijn. Wij bouwen slimme oplossingen mét beveiliging als uitgangspunt.",
        icon: "📡",
        link: "/diensten/iot-oplossingen",
        hidden: true
    },
    {
        title: "Onderhoud & Supportabonnement",
        description:
            "Vast aanspreekpunt voor updates, kleine aanpassingen en technische vragen — zonder gedoe.",
        bullets: [
            "Maandelijks tegoed aan uren",
            "Prioriteit bij storingen",
            "Updates & beveiligingspatches",
            "Optioneel: social media support",
            "Persoonlijk contact, geen ticketsysteem"
        ],
        extra:
            "Geen losse facturen per kleine aanpassing. Met een abonnement weet je precies waar je aan toe bent.",
        icon: "🛠️",
        link: "/diensten/onderhoud-support",
        hidden: true
    },
    {
        title: "Workflow Automatisering met AI",
        description:
            "Tijdrovende taken automatiseren met AI, van leadopvolging tot interne processen.",
        bullets: [
            "Procesanalyse",
            "AI-gestuurde automatisering",
            "Koppeling met je tools (mail, CRM)",
            "Mens blijft in controle bij belangrijke stappen",
            "Tijd- en kostenbesparing inzichtelijk"
        ],
        extra:
            "Niet alles hoeft handmatig. Wij automatiseren de repetitieve stappen, terwijl jij de controle houdt over belangrijke besluiten.",
        icon: "🔄",
        link: "/diensten/ai-automatisering",
        hidden: true
    }
];