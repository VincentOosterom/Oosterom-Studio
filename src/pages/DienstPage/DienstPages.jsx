import DienstPage from "../../pages/DienstPage/DienstPage.jsx";

const webdesignIcon = (
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
            heroIcon={webdesignIcon}
            heroTitle={"Design dat\novertuigt."}
            heroSubtitle="Een website is je digitale visitekaartje, de eerste indruk telt. Oosterom Studio ontwerpt visueel sterke, gebruiksvriendelijke websites die bezoekers omzetten in klanten."
            diensten={[
                {
                    icon: webdesignIcon,
                    title: "Maatwerk websiteontwerp",
                    desc: "Geen templates, geen compromissen. Elk ontwerp is gebouwd rondom jouw merk, doelgroep en doelstellingen.",
                    features: ["Uniek visueel concept", "Mobile-first design", "Framer of Figma prototype", "Consistente brandidentiteit"],
                },
                {
                    icon: webdesignIcon,
                    title: "Landingspagina's",
                    desc: "Gerichte pagina's met één doel: converteren. Voor campagnes, launches of specifieke doelgroepen.",
                    features: ["Conversiegericht ontwerp", "A/B test-klaar", "Snelle oplevering", "Geoptimaliseerd voor Google Ads"],
                },
                {
                    icon: webdesignIcon,
                    title: "UX & gebruikerservaring",
                    desc: "Goede UX is onzichtbaar, maar voelbaar. We denken na over elke klik, elke scrollstap en elk moment van twijfel.",
                    features: ["Gebruikersflow mapping", "Wireframes & prototypes", "Heatmap-analyse", "Iteratief verfijnen"],
                },
            ]}
            stappen={[
                { title: "Intake & briefing", desc: "We bespreken jouw merk, doelgroep en wat je wilt bereiken. Geen aannames." },
                { title: "Concept & wireframes", desc: "We schetsen de structuur en visuele richting voordat we een regel code schrijven." },
                { title: "Design uitwerking", desc: "Het volledige ontwerp wordt uitgewerkt in Figma." },
                { title: "Oplevering & handoff", desc: "Jij krijgt een werkend design én de kennis om het zelf te beheren of door te ontwikkelen." },
            ]}
            faq={[
                { vraag: "Lever je ook de code op of alleen een design?", antwoord: "Beide opties zijn mogelijk. We kunnen het ontwerp opleveren als Figma-bestand of het volledig laten ontwikkelen, afhankelijk van jouw situatie." },
                { vraag: "Hoe lang duurt een websiteontwerp?", antwoord: "Een gemiddeld websiteontwerp duurt 2 tot 4 weken, afhankelijk van de scope en het aantal pagina's." },
                { vraag: "Kan ik tussentijds feedback geven?", antwoord: "Absoluut. We werken in iteraties en vragen actief om jouw feedback voordat we verder gaan." },
                { vraag: "Werk je ook met bestaande huisstijlen?", antwoord: "Ja. Als je al een huisstijl hebt, bouwen we het ontwerp daar omheen. Heb je nog niets? Dan helpen we je met de basis." },
            ]}
            ctaTitle="Klaar voor een website die echt werkt?"
            ctaSubtitle="Plan een gratis gesprek en we kijken samen wat jouw website nodig heeft."
        />
    );
}

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
                    desc: "Gebouwd in React of Next.js, snel, SEO-vriendelijk en klaar voor groei. Geen pagebuilders, wel echte code.",
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
                    desc: "Maatwerk Shopify-winkels die er niet uitzien als een template, geoptimaliseerd voor conversie en gebruiksgemak.",
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
                { vraag: "Hoe zit het met hosting?", antwoord: "We adviseren en helpen bij het opzetten van hosting op Vercel, Netlify of een VPS,afhankelijk van je wensen en budget." },
                { vraag: "Wat als ik later meer functionaliteiten wil?", antwoord: "We bouwen modulair, zodat uitbreidingen later eenvoudig zijn. Doorontwikkeling is altijd mogelijk." },
            ]}
            ctaTitle="Een digitaal product dat echt werkt?"
            ctaSubtitle="Vertel ons over jouw project en we denken direct mee over de beste aanpak."
        />
    );
}

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
            heroSubtitle="Je hebt een idee voor een digitaal product. Oosterom Studio helpt je het bouwen, van eerste MVP tot een volledig schaalbaar SaaS-platform."
            diensten={[
                {
                    icon: saasIcon,
                    title: "MVP development",
                    desc: "Snel een werkend product bouwen om je idee te valideren, zonder onnodige complexiteit of technische schuld.",
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
                { vraag: "Hoe lang duurt het bouwen van een MVP?", antwoord: "Een eenvoudig MVP is binnen 6 tot 10 weken te realiseren. Complexere producten duren langer, we maken altijd een eerlijke inschatting vooraf." },
                { vraag: "Wat is het verschil tussen een MVP en een volwassen product?", antwoord: "Een MVP bevat alleen de kernfunctionaliteiten om het concept te valideren. Op basis van gebruikersfeedback bouwen we daarna stap voor stap verder." },
                { vraag: "Kunnen jullie ook overnemen wat al gebouwd is?", antwoord: "Ja. We doen eerst een technische review van de bestaande codebase en adviseren over de beste vervolgstap." },
            ]}
            ctaTitle="Klaar om jouw product te bouwen?"
            ctaSubtitle="Plan een gratis discovery sessie en we helpen je van idee naar realiteit."
        />
    );
}

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
                    desc: "Logo, kleurpalet, typografie en designsysteem, alles wat je nodig hebt voor een consistente uitstraling.",
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
                { vraag: "Ik heb al een logo, kunnen jullie daar mee verder?", antwoord: "Ja. We kunnen voortbouwen op wat er al is of adviseren of een refresh zinvol is." },
                { vraag: "Wat is het verschil tussen branding en marketing?", antwoord: "Branding bepaalt wie je bent en hoe je eruitziet. Marketing bepaalt hoe je jezelf promoot. Goede marketing begint bij sterke branding." },
                { vraag: "Lever je ook de bronbestanden op?", antwoord: "Altijd. Je krijgt alle bestanden in de juiste formaten zodat je niet afhankelijk bent van ons." },
                { vraag: "Kan ik na het traject zelf verder?", antwoord: "Ja. We maken een duidelijke brand guide zodat jij of toekomstige designers, consistent verder kunnen werken." },
            ]}
            ctaTitle="Tijd om jouw merk scherp te zetten?"
            ctaSubtitle="Plan een strategiegesprek en ontdek hoe we jouw merk sterker maken."
        />
    );
}

const aiIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="8" width="14" height="11" rx="2"/>
        <path d="M9 8V5a3 3 0 016 0v3M9 13h.01M15 13h.01"/>
    </svg>
);

export function AIAgentsPage() {
    return (
        <DienstPage
            title="AI Agents"
            metaDescription="Oosterom Studio bouwt AI-agents en workflow-automatisering voor MKB en startups. Chatbots, procesautomatisering en koppelingen met je bestaande tools, met de mens altijd in controle."
            heroTag="AI Agents"
            heroIcon={aiIcon}
            heroTitle={"Slimme agents\ndie meedenken."}
            heroSubtitle="Herhalend werk kost tijd die je niet hebt. Oosterom Studio bouwt AI-agents die taken overnemen, klanten te woord staan en processen automatiseren, met jou nog altijd aan het stuur."
            diensten={[
                {
                    icon: aiIcon,
                    title: "Chatbots & klantcontact",
                    desc: "Een AI-agent die vragen beantwoordt op basis van jouw eigen kennis, dag en nacht, zonder dat klanten merken dat het geen mens is.",
                    features: ["Eigen kennisbank", "Geïntegreerd in je website of portal", "Escalatie naar een mens waar nodig", "Meertalig mogelijk"],
                },
                {
                    icon: aiIcon,
                    title: "Workflow-automatisering",
                    desc: "Terugkerende taken die nu tijd kosten, leads categoriseren, rapportages samenstellen, statussen bijhouden of automatisch laten verlopen.",
                    features: ["Koppeling met CRM & e-mail", "Telegram/Slack notificaties", "Foutafhandeling & logging", "Schaalbaar per proces"],
                },
                {
                    icon: aiIcon,
                    title: "Agents met goedkeuringsstap",
                    desc: "Voor taken die impact hebben, bouwen we een controlemoment in: de agent stelt voor, jij keurt goed voordat iets definitief gebeurt.",
                    features: ["Menselijke controle waar het telt", "Volledige audit trail", "Aanpasbare regels", "Veilig op te schalen"],
                },
            ]}
            stappen={[
                { title: "Proces in kaart brengen", desc: "We analyseren welke taken zich herhalen en waar een agent daadwerkelijk tijd bespaart." },
                { title: "Agent-ontwerp", desc: "We bepalen wat de agent zelf mag beslissen, en waar een mens het laatste woord houdt." },
                { title: "Bouw & koppelingen", desc: "We bouwen de agent en koppelen hem aan je bestaande tools, CRM, mail, Telegram of Slack." },
                { title: "Testen & livegang", desc: "We testen met echte scenario's voordat de agent zelfstandig aan de slag gaat, en blijven monitoren na livegang." },
            ]}
            faq={[
                { vraag: "Is een AI-agent niet onveilig of onvoorspelbaar?", antwoord: "Niet als hij goed is ontworpen. Wij bouwen altijd duidelijke grenzen en een goedkeuringsstap in bij taken met impact, zodat de agent nooit zelfstandig iets onomkeerbaars doet." },
                { vraag: "Heb ik veel data nodig om een agent te trainen?", antwoord: "Meestal niet. De meeste agents werken met de kennis en documenten die je al hebt — denk aan je website, handleidingen of FAQ's, in plaats van een apart trainingstraject." },
                { vraag: "Kan een agent met meerdere systemen tegelijk werken?", antwoord: "Ja. We koppelen agents vaak aan meerdere tools tegelijk, zoals je CRM, e-mail en Telegram, zodat informatie automatisch op de juiste plek terechtkomt." },
                { vraag: "Wat als de agent een fout maakt?", antwoord: "Elke actie wordt gelogd, en bij gevoelige stappen vraagt de agent eerst goedkeuring. Zo blijft de impact van een fout altijd beperkt en traceerbaar." },
            ]}
            ctaTitle="Klaar om tijd terug te winnen?"
            ctaSubtitle="Plan een gratis gesprek en we kijken samen welke taken een AI-agent voor jou kan overnemen."
        />
    );
}

const maatwerkIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l9 5-9 5-9-5 9-5z"/>
        <path d="M3 12l9 5 9-5M3 17l9 5 9-5"/>
    </svg>
);

export function SoftwareOpMaatPage() {
    return (
        <DienstPage
            title="Software op Maat"
            metaDescription="Oosterom Studio ontwikkelt maatwerk software voor MKB en startups: van procesanalyse tot schaalbare, op maat gebouwde applicaties die eigendom van jou blijven."
            heroTag="Software op Maat"
            heroIcon={maatwerkIcon}
            heroTitle={"Software die\npast bij jouw proces."}
            heroSubtitle="Standaardtools werken totdat je eromheen begint te bouwen. Oosterom Studio ontwikkelt maatwerk software die aansluit op hoe jij al werkt, niet andersom."
            diensten={[
                {
                    icon: maatwerkIcon,
                    title: "Procesanalyse & advies",
                    desc: "Voordat we bouwen, kijken we eerst kritisch: is maatwerk wel de juiste oplossing, of kan een bestaande tool het ook?",
                    features: ["Procesanalyse", "Eerlijk advies", "Technische haalbaarheidscheck", "Heldere scope vooraf"],
                },
                {
                    icon: maatwerkIcon,
                    title: "Maatwerk applicaties",
                    desc: "Tools die precies passen bij jouw workflow, van interne beheertools tot klantgerichte applicaties.",
                    features: ["Full stack development", "Database- en architectuurontwerp", "Koppeling met bestaande systemen", "Schaalbaar opgezet"],
                },
                {
                    icon: maatwerkIcon,
                    title: "Doorontwikkeling & beheer",
                    desc: "Software is nooit echt klaar. We bouwen modulair zodat uitbreiden later eenvoudig blijft.",
                    features: ["Modulaire opbouw", "Documentatie & overdracht", "Onderhoud & doorontwikkeling", "Technische ondersteuning"],
                },
            ]}
            stappen={[
                { title: "Intake & analyse", desc: "We brengen je huidige proces en knelpunten in kaart, zonder meteen naar een technische oplossing te springen." },
                { title: "Scope & architectuur", desc: "We bepalen wat de software moet kunnen en welke technische opzet daar het beste bij past." },
                { title: "Iteratieve bouw", desc: "We bouwen in overzichtelijke stappen en laten regelmatig werkende versies zien zodat je kunt bijsturen." },
                { title: "Oplevering & overdracht", desc: "Je krijgt werkende software, documentatie, en de keuze om het zelf te beheren of bij ons te laten." },
            ]}
            faq={[
                { vraag: "Hoe weet ik of ik maatwerk nodig heb?", antwoord: "Als je merkt dat je werkprocessen zich aanpassen aan de beperkingen van bestaande tools, in plaats van andersom dan is dat het signaal. We kijken dit eerlijk samen door tijdens de intake." },
                { vraag: "Wat kost maatwerk software ongeveer?", antwoord: "Dat hangt sterk af van de scope. Na de intake geven we een concrete inschatting, zodat je niet voor verrassingen komt te staan." },
                { vraag: "Kan de software later koppelen met andere systemen?", antwoord: "Ja, we houden hier vanaf het begin rekening mee in de architectuur, zodat koppelingen later geen herbouw vereisen." },
                { vraag: "Wie is eigenaar van de code?", antwoord: "Op het eerste moment van live gang zijn wij nog eigenaar. Uiteindelijke is het altijd bespreekbaar. " },
            ]}
            ctaTitle="Tijd voor software die echt bij je past?"
            ctaSubtitle="Plan een gratis intake en we bekijken eerlijk of maatwerk de juiste keuze is."
        />
    );
}

const klantportaalIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
);

export function KlantportaalPage() {
    return (
        <DienstPage
            title="Klantportalen & CRM"
            metaDescription="Oosterom Studio bouwt klantportalen en CRM-systemen op maat voor MKB en startups. Eén overzicht van klanten, projecten en communicatie, veilig en op maat gebouwd."
            heroTag="Klantportalen & CRM"
            heroIcon={klantportaalIcon}
            heroTitle={"Een plek voor\nal je klantdata."}
            heroSubtitle="Spreadsheets, losse mailtjes en WhatsApp-berichten lopen op een gegeven moment vast. Oosterom Studio bouwt eigen klantportalen en CRM-systemen die meegroeien met je bedrijf."
            diensten={[
                {
                    icon: klantportaalIcon,
                    title: "Klantportaal op maat",
                    desc: "Een beveiligde omgeving waar klanten inloggen, status zien en documenten uitwisselen, zonder dat je dit handmatig bijhoudt.",
                    features: ["Inlog & rechtenbeheer", "Documenten & status delen", "Gekoppeld aan je eigen merk", "Mobiel-vriendelijk"],
                },
                {
                    icon: klantportaalIcon,
                    title: "CRM & klantbeheer",
                    desc: "Eén overzicht van al je klanten, projecten en communicatie, in plaats van verspreid over mail, spreadsheets en notities.",
                    features: ["Klant- & projectoverzicht", "Notities & geschiedenis", "Statusoverzicht per klant", "Zoek- & filterfunctie"],
                },
                {
                    icon: klantportaalIcon,
                    title: "Koppelingen & automatisering",
                    desc: "Je portaal werkt het beste als hij praat met je andere systemen, denk aan facturatie, agenda of e-mail.",
                    features: ["Koppeling met facturatiesoftware", "Automatische notificaties", "API-koppelingen op maat", "Realtime data-synchronisatie"],
                },
            ]}
            stappen={[
                { title: "Behoefte in kaart", desc: "We bespreken welke informatie klanten nodig hebben en wat jij wilt automatiseren." },
                { title: "Structuur & rollen", desc: "We bepalen wie wat mag zien, van klant tot beheerder en ontwerpen de juiste schermen." },
                { title: "Bouw & koppelingen", desc: "We bouwen het portaal en koppelen het aan je bestaande tools, zoals facturatie of e-mail." },
                { title: "Livegang & training", desc: "Je krijgt een werkend portaal én een korte uitleg zodat je zelf verder kunt zonder technische kennis." },
            ]}
            faq={[
                { vraag: "Kunnen meerdere klanten gelijktijdig inloggen?", antwoord: "Ja. Elke klant heeft een eigen beveiligde login en ziet alleen zijn eigen gegevens — andere klanten zijn niet zichtbaar." },
                { vraag: "Kan ik later zelf nieuwe functies toevoegen?", antwoord: "We bouwen modulair, zodat we eenvoudig functionaliteit kunnen toevoegen zonder het hele systeem opnieuw te bouwen." },
                { vraag: "Werkt dit ook voor een klein bedrijf met weinig klanten?", antwoord: "Zeker. We hebben dit al gebouwd voor een eenmanszaak, de schaal van het portaal past zich aan jouw situatie aan." },
                { vraag: "Hoe zit het met de beveiliging van klantgegevens?", antwoord: "Toegang verloopt via beveiligde authenticatie en gegevens worden volgens de AVG opgeslagen. Beveiliging is standaard onderdeel van het traject." },
            ]}
            ctaTitle="Klaar voor overzicht in je klantbeheer?"
            ctaSubtitle="Plan een gratis gesprek en we bekijken samen hoe een eigen portaal jouw werk makkelijker maakt."
        />
    );
}

const avgIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/>
        <path d="M14 3v6h6M9 14l2 2 4-4"/>
    </svg>
);

export function AVGProofPage() {
    return (
        <DienstPage
            title="AVG-proof Website"
            metaDescription="Oosterom Studio maakt websites AVG/GDPR-proof voor MKB: correcte cookieconsent, beveiligde formulieren en de juiste documentatie voor toezicht."
            heroTag="AVG-proof Website"
            heroIcon={avgIcon}
            heroTitle={"Privacy die\nklopt, niet alleen lijkt."}
            heroSubtitle="Een cookiebanner is geen garantie dat je website AVG-proof is. Oosterom Studio zorgt dat privacy ook technisch klopt — van cookies tot formulieren tot documentatie."
            diensten={[
                {
                    icon: avgIcon,
                    title: "Cookie- & toestemmingsbeheer",
                    desc: "Trackingscripts laden pas nadat een bezoeker écht toestemming geeft, geen schijnbanner die los staat van wat er technisch gebeurt.",
                    features: ["Correct werkende cookieconsent", "Categorisering van cookies", "Geen tracking vóór toestemming", "Periodieke controle"],
                },
                {
                    icon: avgIcon,
                    title: "Beveiligde formulieren & opslag",
                    desc: "Contactformulieren en aanvragen worden versleuteld verzonden en volgens een duidelijke bewaartermijn opgeslagen.",
                    features: ["Versleutelde verbinding", "Duidelijke bewaartermijnen", "Dataminimalisatie", "Veilige opslaglocatie"],
                },
                {
                    icon: avgIcon,
                    title: "Documentatie & verwerkersovereenkomsten",
                    desc: "Je kunt aantonen wat je hebt gedaan, mocht toezicht erom vragen, inclusief overeenkomsten met externe leveranciers.",
                    features: ["Verwerkersovereenkomsten check", "Privacyverklaring op maat", "Verwerkingsregister-basis", "Documentatie voor toezicht"],
                },
            ]}
            stappen={[
                { title: "Privacy-audit", desc: "We controleren je huidige website op cookies, formulieren, trackingscripts en leveranciers." },
                { title: "Risico's & prioriteiten", desc: "We zetten de gevonden risico's op volgorde van urgentie, zodat je weet waar je het eerst aan moet werken." },
                { title: "Technische aanpassingen", desc: "We passen cookieconsent, formulieren en koppelingen aan zodat ze technisch kloppen, niet alleen op papier." },
                { title: "Documentatie & overdracht", desc: "Je krijgt de juiste documentatie en uitleg zodat je ook bij een controle weet wat je kunt laten zien." },
            ]}
            faq={[
                { vraag: "Ik heb al een cookiebanner, is dat niet genoeg?", antwoord: "Een banner alleen is niet genoeg als de trackingscripts er al vóór toestemming draaien. We checken of de techniek daadwerkelijk overeenkomt met wat de banner belooft." },
                { vraag: "Moet ik een verwerkersovereenkomst hebben met elke leverancier?", antwoord: "Met elke partij die persoonsgegevens namens jou verwerkt, zoals je hostingpartij of een formulierdienst, is dit in principe verplicht." },
                { vraag: "Wat gebeurt er als de Autoriteit Persoonsgegevens vragen stelt?", antwoord: "Met de juiste documentatie kun je aantonen welke maatregelen je hebt genomen. Dat traject zetten we voor je op tijdens dit project." },
                { vraag: "Is dit eenmalig of moet ik dit blijven onderhouden?", antwoord: "Privacy is geen eenmalige actie. We kunnen dit combineren met een onderhoudsabonnement zodat het up-to-date blijft bij wijzigingen aan je site." },
            ]}
            ctaTitle="Wil je zeker weten dat je site AVG-proof is?"
            ctaSubtitle="Plan een gratis gesprek en we doen een eerste check van je huidige website."
        />
    );
}

const onderhoudIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 11-3-6.7"/>
        <path d="M21 3v5h-5"/>
    </svg>
);

export function OnderhoudSupportPage() {
    return (
        <DienstPage
            title="Onderhoud & Support"
            metaDescription="Vast onderhoud- en supportabonnement van Oosterom Studio voor MKB: updates, kleine aanpassingen en prioriteit bij storingen, zonder losse facturen."
            heroTag="Onderhoud & Support"
            heroIcon={onderhoudIcon}
            heroTitle={"Eén aanspreekpunt,\ngeen losse facturen."}
            heroSubtitle="Een website is nooit echt 'klaar'. Met een vast onderhoudsabonnement houden we je site up-to-date, veilig en werkend — zonder dat je voor elke aanpassing een nieuwe afspraak hoeft te maken."
            diensten={[
                {
                    icon: onderhoudIcon,
                    title: "Updates & technisch onderhoud",
                    desc: "Software, plugins en afhankelijkheden worden regelmatig bijgewerkt zodat kwetsbaarheden niet blijven liggen.",
                    features: ["Periodieke updates", "Uptime monitoring", "Automatische back-ups", "Snelheids- & performancecheck"],
                },
                {
                    icon: onderhoudIcon,
                    title: "Kleine aanpassingen",
                    desc: "Tekst, afbeeldingen of kleine functionele wijzigingen, geregeld binnen je maandelijkse uren, zonder losse factuur per keer.",
                    features: ["Maandelijks urentegoed", "Geen factuur per aanpassing", "Snelle doorlooptijd", "Direct contact, geen ticketsysteem"],
                },
                {
                    icon: onderhoudIcon,
                    title: "Prioriteit bij storingen",
                    desc: "Als er iets misgaat, sta je niet achter in de wachtrij. Abonnementhouders krijgen voorrang.",
                    features: ["Voorrang bij storingen", "Snelle respons", "Vast aanspreekpunt", "Heldere afspraken over reactietijd"],
                },
            ]}
            stappen={[
                { title: "Nulmeting", desc: "We bekijken de huidige staat van je website: updates, beveiliging en performance." },
                { title: "Abonnement op maat", desc: "We bepalen samen hoeveel uren en welke service-afspraken bij jouw situatie passen." },
                { title: "Doorlopend onderhoud", desc: "We voeren updates, controles en kleine aanpassingen uit volgens een vast ritme." },
                { title: "Maandelijkse terugkoppeling", desc: "Je ontvangt een kort overzicht van wat er is gedaan, zodat je weet waar je aan toe bent." },
            ]}
            faq={[
                { vraag: "Wat als ik in een maand geen uren gebruik?", antwoord: "Niet-gebruikte uren binnen het abonnement kunnen we beperkt meenemen naar de volgende maand, dat spreken we vooraf duidelijk af." },
                { vraag: "Kan ik op- of afschalen als mijn behoefte verandert?", antwoord: "Ja, het abonnement is geen vast keurslijf. We passen het aan zodra je situatie verandert." },
                { vraag: "Is beveiliging hier ook onderdeel van?", antwoord: "Basismaatregelen zoals updates en back-ups zitten standaard in het onderhoud. Voor een uitgebreidere beveiligingscheck verwijzen we naar onze beveiligingsdiensten." },
                { vraag: "Kan ik op elk moment opzeggen?", antwoord: "Ja, we werken zonder lange opzegtermijnen. Je zit niet vast aan een onnodig lang contract." },
            ]}
            ctaTitle="Klaar voor rust in je website-onderhoud?"
            ctaSubtitle="Plan een gratis gesprek en we stellen samen een abonnement op maat samen."
        />
    );
}