// Blog-content voor Oosterom Studio
// Elke post linkt naar 2-3 relevante diensten + minstens 1 andere blogpost (interlinking voor SEO)

export const blogPosts = [
    {
        slug: "ux-design-conversie",
        title: "Waarom UX-design net zo belangrijk is als hoe je website eruitziet",
        excerpt:
            "Een mooie website die niemand begrijpt, converteert niet. Waarom gebruiksvriendelijkheid het verschil maakt tussen bezoekers en klanten.",
        categorie: "Webdesign",
        datum: "2026-05-12",
        leestijd: "4 min",
        intro:
            "<p>Veel ondernemers denken bij een nieuwe website vooral aan kleuren, logo's en foto's. Maar de vraag die er echt toe doet is: snapt een bezoeker binnen drie seconden wat hij hier kan doen? Dat is UX-design — en het is waar de meeste websites op verliezen.</p>",
        secties: [
            {
                kop: "Mooi is niet hetzelfde als werkend",
                html:
                    "<p>Een website kan visueel sterk zijn en toch slecht presteren. Onduidelijke knoppen, te veel tekst boven de vouw, of een contactformulier dat zich verstopt — het zijn kleine dingen met grote impact op je conversie.</p><p>Bij <a href=\"/diensten/webdesign\">webdesign &amp; UX</a> draait het daarom niet om trends volgen, maar om bezoekers zo snel mogelijk naar hun doel leiden: een offerte aanvragen, contact opnemen, of een dienst beter begrijpen.</p>",
            },
            {
                kop: "Drie signalen dat je UX een opfrisbeurt nodig heeft",
                html:
                    "<ul><li>Bezoekers verlaten je site snel zonder te scrollen</li><li>Je krijgt vaak dezelfde vraag die eigenlijk al op de site staat</li><li>Je website ziet anders uit op mobiel dan je had verwacht</li></ul><p>Herken je een van deze? Dan is dat meestal geen contentprobleem, maar een structuurprobleem.</p>",
            },
            {
                kop: "Design en merk gaan hand in hand",
                html:
                    "<p>Goede UX werkt het beste als hij aansluit op een duidelijke merkidentiteit. Daarom combineren we bij <a href=\"/diensten/branding\">branding &amp; digitale strategie</a> vaak design-keuzes met een bredere visie op positionering, zodat je site niet alleen werkt, maar ook herkenbaar is.</p><p>En als je website eenmaal staat, is het slim om ook na te denken over de lange termijn — lees bijvoorbeeld hoe een <a href=\"/blog/onderhoudsabonnement-of-losse-facturen\">onderhoudsabonnement</a> je behoedt voor verrassingen achteraf.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/webdesign", "/diensten/branding"],
        gerelateerdeBlogs: ["onderhoudsabonnement-of-losse-facturen"],
    },
    {
        slug: "5-tekenen-beveiligingslek",
        title: "5 tekenen dat je website een beveiligingslek heeft (en wat je nu kunt doen)",
        excerpt:
            "De meeste MKB-websites zijn nooit gecontroleerd op kwetsbaarheden. Deze signalen geven aan dat het tijd is voor een check.",
        categorie: "Veiligheid",
        datum: "2026-05-26",
        leestijd: "5 min",
        intro:
            "<p>Een gehackte website merk je niet altijd meteen. Vaak draait hij gewoon door — alleen stuurt hij in het geheim spam, of staat hij op een zwarte lijst bij Google. Dit zijn de signalen die je niet moet negeren.</p>",
        secties: [
            {
                kop: "1. Je CMS of plugins zijn al maanden niet bijgewerkt",
                html:
                    "<p>Verouderde software is de meest voorkomende ingang voor hackers. Een onbeheerde installatie met oude plugins wordt in de praktijk vaak binnen enkele weken gevonden door geautomatiseerde scanners.</p>",
            },
            {
                kop: "2. Vreemde redirects of onbekende pagina's",
                html:
                    "<p>Word je opeens doorgestuurd naar een andere site, of vind je pagina's in Google die je zelf nooit hebt gemaakt? Dat is een klassiek teken van een geïnjecteerde malware-pagina.</p>",
            },
            {
                kop: "3 t/m 5: trage site, klachten van bezoekers, geen SSL-check",
                html:
                    "<p>Een opvallend tragere website, klanten die melden dat hun virusscanner waarschuwt, of een verlopen SSL-certificaat zijn drie aanvullende signalen. Geen van deze bewijst direct een hack, maar samen zijn ze reden voor onderzoek.</p>",
            },
            {
                kop: "Wat je nu kunt doen",
                html:
                    "<p>Het beste startpunt is een onafhankelijke <a href=\"/diensten/cybersecurity-scan\">cybersecurity scan &amp; beveiligingsaudit</a>: een check op kwetsbaarheden, verlopen certificaten en verdachte bestanden, met concrete actiepunten op volgorde van risico.</p><p>Voor de lange termijn voorkomt <a href=\"/diensten/website-beveiliging\">website beveiliging &amp; onderhoud</a> dat dit probleem terugkomt — denk aan automatische updates, monitoring en back-ups.</p><p>Werk je met persoonsgegevens van klanten? Check dan ook onze blog over <a href=\"/blog/avg-fouten-mkb\">de meest gemaakte AVG-fouten</a>, want beveiliging en privacy gaan hand in hand.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/cybersecurity-scan", "/diensten/website-beveiliging"],
        gerelateerdeBlogs: ["avg-fouten-mkb"],
    },
    {
        slug: "avg-fouten-mkb",
        title: "AVG en je website: de 4 meest gemaakte fouten door MKB-ondernemers",
        excerpt:
            "Een cookiebanner is niet genoeg. Dit zijn de AVG-fouten die we het vaakst tegenkomen bij websites van kleine bedrijven.",
        categorie: "Veiligheid",
        datum: "2026-06-02",
        leestijd: "5 min",
        intro:
            "<p>De AVG (GDPR) lijkt vooral een juridisch verhaal, maar in de praktijk gaat het om hoe je website technisch is gebouwd. Deze vier fouten zien we het vaakst.</p>",
        secties: [
            {
                kop: "1. Cookies laden vóórdat iemand toestemming geeft",
                html:
                    "<p>Veel cookiebanners zien er goed uit, maar de trackingscripts draaien al op de achtergrond zodra de pagina laadt — toestemming of niet. Dat is in strijd met de AVG, ook als de banner zelf compliant lijkt.</p>",
            },
            {
                kop: "2. Contactformulieren zonder beveiligde verbinding of opslag",
                html:
                    "<p>Een formulier dat gegevens onversleuteld verstuurt of zonder duidelijke bewaartermijn opslaat, is een veelvoorkomend datalek-risico. Dit hangt direct samen met de technische kant van <a href=\"/diensten/cybersecurity-scan\">beveiliging</a>.</p>",
            },
            {
                kop: "3. Geen (of een verlopen) verwerkersovereenkomst",
                html:
                    "<p>Gebruik je een extern formulier-, hosting- of e-mailplatform? Dan is een verwerkersovereenkomst verplicht. Deze ontbreekt verrassend vaak, ook bij bedrijven die hun website netjes laten onderhouden.</p>",
            },
            {
                kop: "4. Geen documentatie als toezicht erom vraagt",
                html:
                    "<p>Zelfs als alles technisch goed staat, moet je kunnen aantonen wat je hebt gedaan. Bij een <a href=\"/diensten/avg-proof-website\">AVG/GDPR-proof website</a> traject leveren we die documentatie standaard mee.</p><p>Wil je weten of jouw site nog andere kwetsbaarheden heeft naast privacy? Begin met de <a href=\"/blog/5-tekenen-beveiligingslek\">vijf signalen van een beveiligingslek</a> die we eerder beschreven.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/avg-proof-website", "/diensten/cybersecurity-scan"],
        gerelateerdeBlogs: ["5-tekenen-beveiligingslek"],
    },
    {
        slug: "wat-is-een-ai-agent",
        title: "Wat is een AI-agent, en heeft jouw bedrijf er eentje nodig?",
        excerpt:
            "AI-agents zijn meer dan een chatbot. Wanneer ze daadwerkelijk tijd besparen, en wanneer het overkill is.",
        categorie: "Software",
        datum: "2026-06-09",
        leestijd: "4 min",
        intro:
            "<p>De term 'AI-agent' wordt inmiddels voor alles gebruikt, van een simpele chatbot tot een volledig geautomatiseerd proces. Het verschil zit in wat een agent zelf mag beslissen.</p>",
        secties: [
            {
                kop: "Een chatbot beantwoordt, een agent handelt",
                html:
                    "<p>Een chatbot geeft antwoord op vragen. Een AI-agent gaat een stap verder: hij kan gegevens opzoeken, een afspraak inplannen, een e-mail opstellen of een taak doorzetten naar de juiste collega — op basis van regels die jij vooraf bepaalt.</p>",
            },
            {
                kop: "Waar AI-agents in de praktijk verschil maken",
                html:
                    "<p>Denk aan een agent die binnenkomende leads automatisch categoriseert en doorstuurt, of een interne agent die terugkerende rapportages samenstelt. Dit soort taken kost mensen veel herhaling en weinig denkwerk — precies waar automatisering wint.</p><p>Wij bouwen dit als onderdeel van <a href=\"/diensten/ai-agents\">AI-agents &amp; slimme automatisering</a>, altijd met een stap waarin een mens goedkeuring geeft voordat iets definitief de deur uit gaat.</p>",
            },
            {
                kop: "Wanneer het (nog) geen agent moet zijn",
                html:
                    "<p>Heb je een proces dat maar een paar keer per maand voorkomt, of waarbij elke situatie anders is? Dan is gewone <a href=\"/diensten/ai-automatisering\">workflow-automatisering</a> vaak een beter startpunt dan een volledige agent — simpeler te bouwen, en makkelijker te controleren.</p><p>Twijfel je tussen losse automatisering of maatwerk software eromheen? Lees ook <a href=\"/blog/wanneer-loont-maatwerk-software\">wanneer maatwerk software écht loont</a>.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/ai-agents", "/diensten/ai-automatisering"],
        gerelateerdeBlogs: ["wanneer-loont-maatwerk-software"],
    },
    {
        slug: "wanneer-loont-maatwerk-software",
        title: "Van kant-en-klaar naar maatwerk: wanneer loont custom software écht?",
        excerpt:
            "Niet elk bedrijf heeft maatwerk nodig. Deze signalen helpen je bepalen of het tijd is om verder te kijken dan standaardsoftware.",
        categorie: "Software",
        datum: "2026-06-13",
        leestijd: "5 min",
        intro:
            "<p>Standaardtools zijn vaak prima — totdat je begint 'workarounds' te bouwen om ze passend te maken voor hoe jij werkt. Dat is meestal het moment om maatwerk te overwegen.</p>",
        secties: [
            {
                kop: "Het signaal: je past je proces aan op de software",
                html:
                    "<p>Zodra je werkwijze gaat ombuigen om in een tool te passen — in plaats van andersom — verlies je tijd en eigenaarschap over je eigen proces. Dat is precies waar <a href=\"/diensten/software-op-maat\">custom software &amp; maatwerk ontwikkeling</a> verschil maakt.</p>",
            },
            {
                kop: "Van losse tools naar samenhangend systeem",
                html:
                    "<p>Veel bedrijven beginnen met losse spreadsheets, formulieren en e-mails. Op een gegeven moment is het efficiënter om dat samen te brengen in één omgeving — bijvoorbeeld een <a href=\"/diensten/klantportaal\">klantportaal of CRM op maat</a> waarin klantgegevens, status en communicatie samenkomen.</p>",
            },
            {
                kop: "En als het groter moet groeien?",
                html:
                    "<p>Heb je een idee voor een eigen platform of dienst die je aan meerdere klanten wilt aanbieden? Dan praat je niet meer over een interne tool, maar over <a href=\"/diensten/saas\">SaaS &amp; digitale systemen</a> — met andere eisen aan schaalbaarheid en gebruikersrollen.</p><p>Wil je eerst kleinere stappen zetten met automatisering voordat je investeert in maatwerk? Begin bij <a href=\"/blog/wat-is-een-ai-agent\">wat een AI-agent voor jouw bedrijf kan doen</a>.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/software-op-maat", "/diensten/klantportaal", "/diensten/saas"],
        gerelateerdeBlogs: ["wat-is-een-ai-agent"],
    },
    {
        slug: "onderhoudsabonnement-of-losse-facturen",
        title: "Onderhoudsabonnement of losse facturen: wat kost een website nou écht?",
        excerpt:
            "Een website is nooit 'klaar'. Waarom een vast onderhoudsabonnement vaak goedkoper uitpakt dan losse facturen.",
        categorie: "Dienst",
        datum: "2026-06-16",
        leestijd: "4 min",
        intro:
            "<p>'Mijn website is toch af?' is een van de meest gehoorde, en meest misleidende, gedachtes bij ondernemers. Een website is een levend systeem, niet een eenmalig project.</p>",
        secties: [
            {
                kop: "De verborgen kosten van 'even snel iets aanpassen'",
                html:
                    "<p>Een los telefoontje voor 'kun je even dit aanpassen' kost vaak meer tijd dan verwacht — uitzoeken wat er gevraagd wordt, inplannen, factureren. Bij een <a href=\"/diensten/onderhoud-support\">onderhoud- &amp; supportabonnement</a> valt dat weg: je hebt een vast aanspreekpunt en voorspelbare kosten.</p>",
            },
            {
                kop: "Onderhoud is ook beveiliging",
                html:
                    "<p>Updates en patches zijn niet alleen functioneel, ze zijn de eerste verdedigingslinie tegen kwetsbaarheden. Veel van de problemen uit onze blog over <a href=\"/blog/5-tekenen-beveiligingslek\">beveiligingslekken</a> waren voorkomen met regelmatig onderhoud.</p>",
            },
            {
                kop: "Het complete pakket",
                html:
                    "<p>Voor wie design, ontwikkeling én beveiliging in één keer goed wil regelen, is het <a href=\"/diensten/website-en-beveiliging\">website + beveiligingspakket</a> de meest complete optie — van buiten sterk, van binnen beveiligd.</p>",
            },
        ],
        gerelateerdeDiensten: ["/diensten/onderhoud-support", "/diensten/website-en-beveiliging"],
        gerelateerdeBlogs: ["5-tekenen-beveiligingslek"],
    },
];