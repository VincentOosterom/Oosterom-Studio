// src/pages/LandingPage/landingPagesData.js
//
// Elke SEO landingspagina is één object in deze array.
// Nieuwe pagina toevoegen = nieuw object toevoegen. Geen nieuwe route,
// geen nieuw component nodig — de template pakt dit automatisch op.
//
// VELDEN:
//   Verplicht: slug, titel, meta_description, h1, intro, stad, dienst,
//              dienst_link, cta_tekst
//   Optioneel maar sterk aanbevolen voor SEO-diepgang:
//     - bullets:       korte USP-lijst (had je al)
//     - extra:         extra alinea over de dienst (had je al)
//     - regio_titel:   kop voor het regionale blok (optioneel, anders auto)
//     - regio_tekst:   waarom deze dienst relevant is voor déze plaats —
//                       dit is de content die je onderscheidt van generieke
//                       landingspagina's en die Google echt waardeert
//     - stappen:       array van { titel, tekst } — jouw werkwijze in 3-4 stappen
//     - faq:           array van { vraag, antwoord } — verhoogt kans op
//                       FAQ-rich snippets in Google en pakt long-tail
//                       zoekopdrachten ("wat kost een website in Gouda")
//
// LET OP over duplicate content: geef elke pagina een eigen tekst, ook al
// gaat het om dezelfde dienst in een andere stad. Simpelweg de stadsnaam
// vervangen in identieke tekst schaadt je SEO in plaats van dat het helpt.

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
        regio_titel: "Webdesign voor ondernemers in Alphen aan den Rijn",
        regio_tekst:
            "Alphen aan den Rijn kent een brede mix van lokale dienstverleners, bouwbedrijven en groeiende MKB-ondernemingen. Veel van deze bedrijven werken nog met een verouderde website die niet goed werkt op mobiel of traag laadt. Oosterom Studio is zelf gevestigd in de regio en kent de lokale markt: van ondernemers die zich willen onderscheiden in een concurrerende sector, tot bedrijven die voor het eerst een professionele website laten bouwen. Een kennismaking is altijd op locatie mogelijk, geen verplicht videobellen met een account­manager die het project niet zelf bouwt.",
        stappen: [
            { titel: "Kennismaking", tekst: "We bespreken je doelen, doelgroep en huidige website (indien aanwezig), telefonisch of op locatie in de regio." },
            { titel: "Ontwerp", tekst: "Je ontvangt een ontwerpvoorstel afgestemd op je merk, met focus op duidelijkheid en conversie." },
            { titel: "Bouw", tekst: "We bouwen de website met React, inclusief beveiliging en snelheid als vaste onderdelen." },
            { titel: "Livegang & nazorg", tekst: "Na livegang blijf je bij ons in beeld voor updates, aanpassingen en vragen." },
        ],
        faq: [
            {
                vraag: "Wat kost een website laten maken in Alphen aan den Rijn?",
                antwoord: "Dat hangt af van de omvang en functionaliteit. Een eenvoudige website begint doorgaans rond de €1.500, een uitgebreider project met maatwerkfunctionaliteit ligt hoger. Na een kort gesprek ontvang je een concrete, transparante offerte."
            },
            {
                vraag: "Hoe lang duurt het bouwen van een website?",
                antwoord: "Een gemiddeld websiteproject duurt 3 tot 6 weken, afhankelijk van de hoeveelheid content en het aantal revisierondes. Voor spoed is een kortere doorlooptijd bespreekbaar."
            },
            {
                vraag: "Werk je ook met bedrijven buiten Alphen aan den Rijn?",
                antwoord: "Zeker. Alphen aan den Rijn is de thuisbasis, maar Oosterom Studio werkt door heel Nederland, volledig op afstand of hybride waar gewenst."
            },
        ],
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
        regio_titel: "Waarom een lokale webdesigner in Gouda",
        regio_tekst:
            "Gouda combineert een historische binnenstad met een groeiend aantal moderne bedrijven en zzp'ers. Juist in zo'n mix is het lastig om online op te vallen: veel lokale concurrenten hebben een vergelijkbare website via dezelfde bouwer. Oosterom Studio bouwt geen sjabloon-sites, maar ontwerpt vanaf nul, afgestemd op wat jouw bedrijf in Gouda onderscheidt. Doordat de regio bekend terrein is, denkt Oosterom Studio ook mee over lokale zoekwoorden en concurrentie, niet alleen over hoe de site eruitziet.",
        stappen: [
            { titel: "Kennismaking", tekst: "We bespreken je huidige situatie, doelen en wensen in een vrijblijvend gesprek." },
            { titel: "Ontwerp", tekst: "Een op maat gemaakt ontwerp, gericht op jouw doelgroep in en rond Gouda." },
            { titel: "Bouw", tekst: "Ontwikkeling in React, met aandacht voor snelheid, SEO en beveiliging." },
            { titel: "Livegang & nazorg", tekst: "Na oplevering sta je er niet alleen voor: aanpassingen en vragen kunnen altijd." },
        ],
        faq: [
            {
                vraag: "Kan mijn bestaande website worden vernieuwd in plaats van helemaal opnieuw?",
                antwoord: "Ja, een herontwerp op basis van je bestaande content en structuur behoort tot de mogelijkheden. We bekijken samen wat overeind kan blijven en wat beter opnieuw wordt opgebouwd."
            },
            {
                vraag: "Bied je ook hulp bij het schrijven van teksten voor de website?",
                antwoord: "We denken mee over structuur en boodschap, en kunnen op verzoek ook teksten aanleveren of meeschrijven, afgestemd op je doelgroep in Gouda en omgeving."
            },
            {
                vraag: "Is de website ook geschikt voor mobiel?",
                antwoord: "Elke website die Oosterom Studio bouwt is standaard volledig responsive en getest op mobiel, tablet en desktop."
            },
        ],
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
        regio_titel: "Webdesign tussen kennisstad en ondernemersstad",
        regio_tekst:
            "Leiden heeft een bijzondere mix: een sterke universitaire en kennissector naast een groeiend aantal startups en gevestigd MKB. Bedrijven hier concurreren vaak niet alleen lokaal, maar ook landelijk of zelfs internationaal om talent en klanten. Dat vraagt om een website die serieus overkomt op een breder publiek, niet alleen op de buurman. Oosterom Studio bouwt daarom vanaf de eerste versie met schaalbaarheid in gedachten: een site die klein kan starten, maar niet hoeft te worden weggegooid zodra je bedrijf groeit.",
        stappen: [
            { titel: "Intake", tekst: "We brengen in kaart wie je doelgroep is en of je site vooral moet overtuigen, informeren of converteren." },
            { titel: "Designsysteem", tekst: "In plaats van losse pagina's bouwen we een herbruikbaar designsysteem, handig als je later meer pagina's toevoegt." },
            { titel: "Ontwikkeling", tekst: "De website wordt gebouwd in React, met aandacht voor laadsnelheid en vindbaarheid vanaf dag één." },
            { titel: "Lancering", tekst: "Na livegang evalueren we samen de eerste resultaten en bepalen we eventuele vervolgstappen." },
        ],
        faq: [
            {
                vraag: "Is Oosterom Studio geschikt voor een startup zonder groot budget?",
                antwoord: "Ja, we bouwen regelmatig een eerste, gerichte versie van een website voor startups, die later stap voor stap wordt uitgebreid zodra er meer budget of duidelijkheid is."
            },
            {
                vraag: "Kan de website later meegroeien naar een webapplicatie?",
                antwoord: "Zeker, dat is precies waarom we vanaf het begin met een schaalbaar designsysteem werken. Veel van onze klanten in Leiden starten met een website en breiden later uit naar functionaliteit zoals een klantportaal of dashboard."
            },
            {
                vraag: "Werk je samen met bestaande marketing- of brandingbureaus?",
                antwoord: "Regelmatig. Als je al een huisstijl of merkidentiteit hebt, bouwen we de website daarop voort in plaats van een nieuwe richting te forceren."
            },
        ],
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
        regio_titel: "Webdevelopment voor familiebedrijven en groeiende MKB in Boskoop",
        regio_tekst:
            "Boskoop is een regio met veel gevestigde, vaak familiegerunde bedrijven die al jaren bestaan maar digitaal soms zijn blijven hangen in de tijd. Een website die alleen een digitale visitekaartje is, volstaat niet meer als concurrenten wél online bestellingen, aanvragen of afspraken laten verlopen. Oosterom Studio helpt deze bedrijven de stap te zetten van een statische website naar een webapplicatie die daadwerkelijk werk uit handen neemt, zonder de persoonlijke aanpak te verliezen die deze bedrijven kenmerkt.",
        stappen: [
            { titel: "Procesgesprek", tekst: "We inventariseren welk deel van je bedrijfsvoering nu nog handmatig gaat en digitaal versneld kan worden." },
            { titel: "Technisch ontwerp", tekst: "We bepalen de opzet van de applicatie: van database tot gebruikersinterface." },
            { titel: "Bouw & testen", tekst: "Ontwikkeling in React met doorlopend testen, zodat er geen verrassingen zijn bij livegang." },
            { titel: "Overdracht", tekst: "Je krijgt uitleg en documentatie, zodat je niet afhankelijk bent van uitleg achteraf." },
        ],
        faq: [
            {
                vraag: "Kan een bestaande website worden uitgebreid met een applicatie, of moet alles opnieuw?",
                antwoord: "In veel gevallen kan een bestaande website behouden blijven en wordt de nieuwe functionaliteit ernaast of erin gebouwd. We bekijken dit per project."
            },
            {
                vraag: "Is React ook geschikt voor een kleiner bedrijf, of is dat overkill?",
                antwoord: "React is schaalbaar in beide richtingen: het werkt prima voor een compacte website, én is direct klaar voor uitbreiding zodra dat nodig is. Je betaalt dus niet voor complexiteit die je nu nog niet gebruikt."
            },
            {
                vraag: "Hoe zit het met onderhoud na oplevering?",
                antwoord: "Dat regelen we via een los onderhoudsabonnement, zodat updates, back-ups en kleine aanpassingen niet blijven liggen."
            },
        ],
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
        regio_titel: "Webdevelopment voor een groeistad als Zoetermeer",
        regio_tekst:
            "Zoetermeer is een van de snelst gegroeide steden van Nederland, met veel bedrijven die relatief jong zijn en snel schaalden. Die groei brengt vaak een lappendeken van tools met zich mee: een los CRM hier, een spreadsheet daar, een verouderd systeem dat niemand meer durft aan te passen. Oosterom Studio bouwt webapplicaties die deze losse onderdelen samenbrengen in één systeem, afgestemd op hoe een groeiend bedrijf in de praktijk werkt, niet op hoe een generieke tool denkt dat je zou moeten werken.",
        stappen: [
            { titel: "Systeemanalyse", tekst: "We brengen in kaart welke tools en processen je nu gebruikt, en waar de knelpunten zitten." },
            { titel: "Architectuur", tekst: "We ontwerpen een technische structuur die bestaande systemen waar nodig integreert in plaats van vervangt." },
            { titel: "Bouw in fases", tekst: "Ontwikkeling gebeurt in behapbare fases, zodat je snel resultaat ziet in plaats van te wachten op één grote oplevering." },
            { titel: "Doorontwikkeling", tekst: "Na livegang blijven we beschikbaar voor uitbreidingen naarmate je bedrijf verder groeit." },
        ],
        faq: [
            {
                vraag: "Kunnen jullie koppelen met software die we al gebruiken?",
                antwoord: "In veel gevallen wel, via een API-koppeling. We bespreken vooraf welke systemen je gebruikt en wat technisch haalbaar is."
            },
            {
                vraag: "Werken jullie ook met een vast team of alleen met één ontwikkelaar?",
                antwoord: "Je hebt gedurende het traject een vast aanspreekpunt, zodat er geen ruis ontstaat tussen verschillende schakels."
            },
            {
                vraag: "Wat als onze eisen tijdens het project veranderen?",
                antwoord: "Dat gebeurt vaker dan je denkt, vooral bij groeiende bedrijven. Door in fases te bouwen kunnen we tussentijds bijsturen zonder het hele project opnieuw te hoeven starten."
            },
        ],
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
        regio_titel: "Maatwerk webdevelopment dicht bij huis in Waddinxveen",
        regio_tekst:
            "Waddinxveen ligt centraal tussen een aantal grotere steden, en veel lokale ondernemers werken juist daardoor met klanten uit een bredere regio. Dat maakt een generieke website vaak ontoereikend: er is behoefte aan iets dat specifieker meedenkt, zoals een offerteformulier op maat, een planningsysteem, of een koppeling met facturatie. Oosterom Studio bouwt dat soort maatwerk zonder de overhead van een groot bureau, met korte lijnen en duidelijke uitleg in gewone taal in plaats van technisch jargon.",
        stappen: [
            { titel: "Verkennend gesprek", tekst: "We bespreken zonder verplichtingen wat je voor ogen hebt en of maatwerk de juiste keuze is." },
            { titel: "Plan van aanpak", tekst: "Je ontvangt een helder overzicht van wat er gebouwd wordt, in welke volgorde en tegen welke kosten." },
            { titel: "Bouwfase", tekst: "We houden je tussentijds op de hoogte met werkende versies, niet pas bij de eindoplevering." },
            { titel: "Nazorg", tekst: "Na livegang blijf je niet alleen achter met een handleiding: vragen kunnen altijd gesteld worden." },
        ],
        faq: [
            {
                vraag: "Is maatwerk niet veel duurder dan een kant-en-klare oplossing?",
                antwoord: "Op korte termijn soms wel, maar kant-en-klare tools brengen vaak verborgen kosten met zich mee zoals licenties per gebruiker of functionaliteit die je niet nodig hebt. We bespreken open wat in jouw situatie het beste uitpakt."
            },
            {
                vraag: "Hoe verloopt de communicatie tijdens het project?",
                antwoord: "Via korte, regelmatige updates, telefonisch of op locatie waar gewenst. Geen wekenlange stiltes tussen mijlpalen."
            },
            {
                vraag: "Kan de applicatie ook door een niet-technisch persoon beheerd worden?",
                antwoord: "Waar mogelijk bouwen we een beheeromgeving die zonder technische kennis te gebruiken is, met uitleg die aansluit op hoe jij werkt."
            },
        ],
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
        regio_titel: "Van lokaal dienstverlener naar SaaS-ondernemer in Alphen aan den Rijn",
        regio_tekst:
            "Steeds meer ondernemers in Alphen aan den Rijn die een dienst leveren, zien kansen om een deel daarvan te vertalen naar een digitaal product dat ze aan meerdere klanten kunnen aanbieden. De stap van 'dienst leveren' naar 'software verkopen' is technisch en strategisch een grote sprong. Oosterom Studio begeleidt die overgang, van het scherp krijgen van het eerste product tot een technische basis die klaar is voor de eerste betalende gebruikers, zonder meteen te bouwen voor een schaal die je nog niet hebt.",
        stappen: [
            { titel: "Productscherpte", tekst: "We bepalen samen wat het kernprobleem is dat je product oplost, en wat bewust nog niet wordt gebouwd." },
            { titel: "Architectuur", tekst: "We richten de database en gebruikersstructuur zo in dat latere groei geen volledige herbouw vereist." },
            { titel: "Eerste versie (MVP)", tekst: "We bouwen de kleinste werkende versie waarmee je echte gebruikers kunt testen." },
            { titel: "Lancering & doorontwikkeling", tekst: "Na de eerste gebruikers bepalen we op basis van feedback wat de volgende stap wordt." },
        ],
        faq: [
            {
                vraag: "Ik heb alleen een idee, nog geen technisch plan. Kan ik daarmee terecht?",
                antwoord: "Ja, dat is juist het startpunt van de meeste SaaS-trajecten. We helpen het idee te vertalen naar een concreet, bouwbaar plan."
            },
            {
                vraag: "Wat kost het ontwikkelen van een eerste SaaS-versie?",
                antwoord: "Dat verschilt sterk per idee. Na een intakegesprek geven we een realistische inschatting, gebaseerd op wat écht nodig is voor een eerste, werkende versie."
            },
            {
                vraag: "Blijft Oosterom Studio betrokken na de lancering?",
                antwoord: "Dat kan, via doorontwikkeling of een onderhoudsabonnement, afhankelijk van hoeveel technische kennis je zelf in huis hebt of opbouwt."
            },
        ],
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
        regio_titel: "SaaS-ontwikkeling met oog voor de lange termijn in Gouda",
        regio_tekst:
            "Gouda heeft een groeiend aantal zzp'ers en kleine bedrijven die vanuit huis of een klein kantoor werken aan een eigen product-idee, vaak naast een bestaande dienstverlening. Voor deze groep is het risico van een te grote, te dure eerste bouw reëel: geld en tijd steken in functionaliteit voordat duidelijk is of er vraag naar is. Oosterom Studio adviseert daarom bewust over wat wél en niet in de eerste versie hoort, zodat je met een realistisch budget een werkend product op de markt kunt zetten.",
        stappen: [
            { titel: "Ideeën aanscherpen", tekst: "We stellen kritische vragen om te bepalen of het idee als los product levensvatbaar is." },
            { titel: "Technisch fundament", tekst: "We bouwen een architectuur die geschikt is voor meerdere klanten (multi-tenant) zodra dat nodig is." },
            { titel: "Bouwen en testen", tekst: "Ontwikkeling in overzichtelijke stappen, met tussentijdse controlemomenten." },
            { titel: "Live met eerste gebruikers", tekst: "We begeleiden de eerste lancering en verzamelen gericht feedback voor de volgende versie." },
        ],
        faq: [
            {
                vraag: "Wat is het verschil tussen een SaaS-product en een gewone webapplicatie?",
                antwoord: "Een SaaS-product is bedoeld om aan meerdere klanten tegelijk aan te bieden, meestal via een abonnement, met eigen accounts en afgeschermde data per klant. Een webapplicatie is vaak voor intern gebruik binnen één bedrijf."
            },
            {
                vraag: "Moet ik meteen investeren in een volledig uitgewerkt platform?",
                antwoord: "Nee, en dat raden we ook af. Een kleinere, gerichte eerste versie levert sneller bruikbare feedback op dan een groot platform dat pas na maanden live gaat."
            },
            {
                vraag: "Kunnen jullie ook meedenken over de prijsstrategie van het product?",
                antwoord: "We geven geen formeel bedrijfsadvies, maar denken vanuit technisch perspectief graag mee over hoe abonnementen, gebruikerslimieten en functionaliteit zich tot elkaar verhouden."
            },
        ],
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
        regio_titel: "AI-agents voor kennisintensieve bedrijven in Leiden",
        regio_tekst:
            "Leiden telt relatief veel bedrijven en instellingen waar kennis en informatie de kern van het werk vormen: onderzoek, advies, onderwijsgerelateerde dienstverlening. Bij dat soort werk komt vaak veel tijd terug in het opzoeken, samenvatten en doorzetten van informatie, taken die zich uitstekend lenen voor automatisering, mits zorgvuldig ingericht. Oosterom Studio bouwt AI-agents die dit soort herhalend denkwerk overnemen, met ingebouwde controlemomenten zodat een mens het laatste woord houdt bij belangrijke beslissingen.",
        stappen: [
            { titel: "Taakanalyse", tekst: "We brengen in kaart welke terugkerende taken zich lenen voor automatisering en welke risico's daarbij horen." },
            { titel: "Ontwerp van de agent", tekst: "We bepalen welke bronnen de agent mag raadplegen en waar een menselijke goedkeuring verplicht blijft." },
            { titel: "Bouw & training", tekst: "De agent wordt gekoppeld aan jouw eigen data en systemen, niet aan generieke, ongerichte kennis." },
            { titel: "Livegang met toezicht", tekst: "We monitoren de eerste periode nauwlettend en stellen bij op basis van echte gebruikssituaties." },
        ],
        faq: [
            {
                vraag: "Vervangt een AI-agent medewerkers?",
                antwoord: "Het doel is repetitieve taken uit handen te nemen, niet besluitvorming te vervangen. Bij de meeste van onze projecten blijft een mens de eindverantwoordelijke stap."
            },
            {
                vraag: "Is onze bedrijfsdata veilig bij het trainen van een agent?",
                antwoord: "We werken met afgeschermde omgevingen en bespreken vooraf welke data wel en niet gebruikt mag worden, passend bij AVG-vereisten."
            },
            {
                vraag: "Kan een AI-agent gekoppeld worden aan onze bestaande software?",
                antwoord: "In veel gevallen wel, via een koppeling met je CRM, e-mail of interne systemen. We beoordelen dit per situatie."
            },
        ],
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
        regio_titel: "Een chatbot die écht antwoord geeft, voor bedrijven in Bodegraven",
        regio_tekst:
            "Kleinere bedrijven in Bodegraven en omgeving hebben vaak niet de capaciteit om buiten kantooruren vragen van website-bezoekers te beantwoorden, terwijl juist dan veel oriënterende bezoekers actief zijn. Een generieke chatbot die alleen standaardzinnen herhaalt, voelt voor bezoekers al snel als een doodlopend gesprek. Oosterom Studio bouwt chatbots die specifiek getraind zijn op de content, diensten en veelgestelde vragen van jouw eigen bedrijf, zodat een bezoeker in Bodegraven daadwerkelijk verder geholpen wordt, ook om 21 uur 's avonds.",
        stappen: [
            { titel: "Kennisinventarisatie", tekst: "We verzamelen de informatie waarop de chatbot getraind moet worden: diensten, veelgestelde vragen, tarieven waar relevant." },
            { titel: "Configuratie", tekst: "De chatbot wordt afgestemd op je merk qua toon en wordt begrensd tot onderwerpen die voor jouw bedrijf relevant zijn." },
            { titel: "Integratie", tekst: "We plaatsen de chatbot op je bestaande website, zonder dat dit de laadsnelheid van de site aantast." },
            { titel: "Evaluatie", tekst: "Na de eerste weken bekijken we samen welke vragen vaak gesteld worden en waar de chatbot kan verbeteren." },
        ],
        faq: [
            {
                vraag: "Kan de chatbot ook leads doorsturen naar mijn e-mail of CRM?",
                antwoord: "Ja, dat is een veelgevraagde uitbreiding: de chatbot kan contactgegevens en vraagdetails automatisch doorzetten naar de juiste plek."
            },
            {
                vraag: "Wat als de chatbot een vraag niet kan beantwoorden?",
                antwoord: "De chatbot is ingesteld om eerlijk aan te geven wanneer iets buiten zijn kennis valt, en kan dan doorverwijzen naar een contactformulier of telefoonnummer in plaats van te gokken."
            },
            {
                vraag: "Hoeveel tijd kost het om de chatbot op te zetten?",
                antwoord: "Voor een eerste werkende versie reken je doorgaans op één tot twee weken, afhankelijk van hoeveel content er al beschikbaar is om de chatbot mee te trainen."
            },
        ],
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
        regio_titel: "Maatwerksoftware voor de praktische ondernemer in Nieuwkoop",
        regio_tekst:
            "In een regio als Nieuwkoop, met veel agrarische, logistieke en ambachtelijke bedrijvigheid, lopen processen vaak al jaren op een manier die goed werkt, maar niet altijd goed is vastgelegd in software. Standaardpakketten sluiten daar zelden op aan, waardoor bedrijven blijven werken met spreadsheets, papieren formulieren of losse WhatsApp-afspraken. Oosterom Studio begint bij hoe het proces nu daadwerkelijk verloopt, en bouwt daar software omheen, in plaats van een pakket te verkopen waar het proces zich naar moet voegen.",
        stappen: [
            { titel: "Meelopen in het proces", tekst: "Waar mogelijk kijken we letterlijk mee hoe een taak nu wordt uitgevoerd, voordat we iets ontwerpen." },
            { titel: "Ontwerp op maat", tekst: "We vertalen het proces naar een logische, begrijpelijke schermopbouw, geen overbodige functies." },
            { titel: "Bouw in behapbare delen", tekst: "We leveren eerst het belangrijkste onderdeel op, zodat je snel resultaat ziet." },
            { titel: "Overdracht en documentatie", tekst: "Je krijgt heldere documentatie, zodat je nooit vastzit aan alleen onze uitleg." },
        ],
        faq: [
            {
                vraag: "We werken nu met Excel, is dat een goed startpunt voor maatwerk?",
                antwoord: "Prima startpunt zelfs. Excel-bestanden laten vaak precies zien welke gegevens en berekeningen belangrijk zijn, en dat gebruiken we als basis voor het ontwerp van de software."
            },
            {
                vraag: "Hoeveel controle behoud ik over hoe het systeem werkt?",
                antwoord: "Volledige controle: het is jouw software, met documentatie erbij, zodat je niet afhankelijk blijft van één externe partij."
            },
            {
                vraag: "Kan de software meegroeien als ons bedrijf verandert?",
                antwoord: "Dat is precies waarom we modulair bouwen: nieuwe onderdelen kunnen later worden toegevoegd zonder het bestaande systeem te moeten herbouwen."
            },
        ],
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
        regio_titel: "Van verouderd systeem naar maatwerk in Woerden",
        regio_tekst:
            "Woerden kent een gezonde mix van gevestigde MKB-bedrijven die in de loop der jaren zijn gegroeid, vaak sneller dan hun interne systemen konden bijbenen. Het gevolg is herkenbaar: een oud systeem dat niemand meer durft aan te passen, gekoppeld aan een lappendeken van work-arounds eromheen. Oosterom Studio is gespecialiseerd in precies dit scenario, het vervangen van een verouderd of overgroeid systeem door maatwerksoftware die aansluit op hoe het bedrijf inmiddels daadwerkelijk werkt.",
        stappen: [
            { titel: "Situatie in kaart brengen", tekst: "We analyseren het bestaande systeem en de work-arounds eromheen, zodat niets over het hoofd wordt gezien." },
            { titel: "Migratieplan", tekst: "We bepalen hoe bestaande data veilig wordt overgezet naar het nieuwe systeem." },
            { titel: "Bouw en parallelle testfase", tekst: "Het nieuwe systeem wordt getest naast het oude, zodat de overstap zonder onderbreking van de bedrijfsvoering verloopt." },
            { titel: "Volledige overdracht", tekst: "Na livegang lever je het oude systeem definitief in, met volledige documentatie van het nieuwe." },
        ],
        faq: [
            {
                vraag: "Onze data staat in een verouderd systeem, kan dat worden overgezet?",
                antwoord: "In de meeste gevallen wel. We bekijken vooraf in welk formaat de data beschikbaar is en stellen een migratieplan op om dataverlies te voorkomen."
            },
            {
                vraag: "Hoe voorkomen we downtime tijdens de overstap?",
                antwoord: "Door het nieuwe systeem eerst parallel te laten draaien naast het oude, kunnen we testen zonder dat de dagelijkse bedrijfsvoering stilvalt."
            },
            {
                vraag: "Zijn we na oplevering afhankelijk van Oosterom Studio?",
                antwoord: "Nee. Je krijgt volledige documentatie en eigenaarschap van de software, zodat je ook met een andere partij verder zou kunnen als je dat ooit wilt."
            },
        ],
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
        regio_titel: "Klantportalen voor dienstverleners in en rond Reeuwijk",
        regio_tekst:
            "Reeuwijk en omgeving kennen veel dienstverlenende bedrijven waarbij klanten regelmatig vragen naar de status van een aanvraag, project of levering. Elk van die vragen kost telefoontijd en e-mailverkeer die met een klantportaal grotendeels wegvalt. Oosterom Studio bouwt portalen waarin klanten zelf, met een beveiligde inlog, hun eigen status, documenten of afspraken kunnen inzien, zodat jouw team zich kan richten op het werk zelf in plaats van op statusupdates.",
        stappen: [
            { titel: "Behoefte bepalen", tekst: "We inventariseren welke informatie klanten het vaakst opvragen en dus het meeste tijd bespaart als het portaal dat zelf toont." },
            { titel: "Ontwerp van rollen", tekst: "We bepalen welke gebruikers wat mogen zien: klant, medewerker, beheerder." },
            { titel: "Bouw en koppeling", tekst: "Het portaal wordt gekoppeld aan bestaande systemen zoals facturatie of e-mail, waar relevant." },
            { titel: "Uitrol", tekst: "We begeleiden de eerste klanten bij het gebruik van het portaal, zodat de overstap soepel verloopt." },
        ],
        faq: [
            {
                vraag: "Is een klantportaal alleen interessant voor grotere bedrijven?",
                antwoord: "Nee, juist kleinere teams met veel klantcontact merken vaak het snelst het verschil, omdat elk bespaard telefoontje relatief meer tijd oplevert."
            },
            {
                vraag: "Kunnen klanten zelf documenten uploaden via het portaal?",
                antwoord: "Ja, dat is een veelgevraagde functie, bijvoorbeeld voor het aanleveren van stukken of het goedkeuren van een offerte."
            },
            {
                vraag: "Hoe zit het met de beveiliging van klantgegevens in het portaal?",
                antwoord: "Elk portaal wordt gebouwd met beveiligde authenticatie en afgeschermde toegang per gebruiker, passend bij de AVG-vereisten voor het bewaren van persoonsgegevens."
            },
        ],
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
        regio_titel: "AVG-controle voor MKB-websites in Alphen aan den Rijn",
        regio_tekst:
            "Veel lokale ondernemers in Alphen aan den Rijn hebben ooit een cookiebanner laten plaatsen en gaan ervan uit dat daarmee de privacy-kant geregeld is. In de praktijk draaien bij een groot deel van deze websites trackingscripts al voordat een bezoeker toestemming geeft, of ontbreekt een verwerkersovereenkomst met een extern formulier- of hostingplatform. Oosterom Studio voert een concrete, technische controle uit op dit soort risico's, niet alleen een juridische checklist, en lost gevonden problemen direct op in de code van je website.",
        stappen: [
            { titel: "Technische scan", tekst: "We controleren welke scripts en cookies daadwerkelijk laden, en op welk moment, onafhankelijk van wat de cookiebanner beweert." },
            { titel: "Risicorapport", tekst: "Je ontvangt een overzicht van gevonden risico's, gerangschikt op ernst en impact." },
            { titel: "Technische correctie", tekst: "We passen de website aan zodat trackingscripts pas laden na daadwerkelijke toestemming, en formulieren veilig worden verwerkt." },
            { titel: "Documentatie", tekst: "Je krijgt overzichtelijke documentatie van wat is gecontroleerd en aangepast, bruikbaar als toezicht ernaar vraagt." },
        ],
        faq: [
            {
                vraag: "We hebben al een cookiebanner, is dat niet genoeg?",
                antwoord: "Een cookiebanner alleen is vaak niet genoeg. Het gaat erom of scripts pas laden ná toestemming, wat bij veel websites technisch niet correct is ingericht, ondanks een keurig ogende banner."
            },
            {
                vraag: "Wat gebeurt er als we niet AVG-proof zijn?",
                antwoord: "De risico's variëren van een waarschuwing tot een boete bij controle, maar het grootste praktische risico is vaak een datalek via een onveilig formulier. Een audit brengt dat risico expliciet in kaart."
            },
            {
                vraag: "Hoe lang duurt een privacy-audit?",
                antwoord: "Een technische scan en rapportage is doorgaans binnen een week klaar. De duur van de correcties hangt af van het aantal gevonden risico's."
            },
        ],
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
        regio_titel: "Onderhoud voor de vele webshops en bedrijfssites in Boskoop",
        regio_tekst:
            "Boskoop kent van oudsher veel ondernemende, vaak kleinere bedrijven, waarvan er steeds meer online verkopen of aanvragen verwerken via hun website. Juist bij die bedrijven blijft onderhoud vaak liggen: er is geen interne IT-afdeling, en 'de website loopt toch gewoon' totdat een plugin verouderd raakt of een storing onopgemerkt blijft. Oosterom Studio neemt dat structureel uit handen met een vast onderhoudsabonnement, zodat updates, back-ups en beveiliging routinematig gebeuren in plaats van pas bij een probleem.",
        stappen: [
            { titel: "Nulmeting", tekst: "We brengen de huidige staat van je website in kaart: software-versies, beveiligingsniveau en eventuele achterstallige updates." },
            { titel: "Abonnement op maat", tekst: "We bepalen samen welk urentegoed en welke monitoring bij jouw website past." },
            { titel: "Doorlopend onderhoud", tekst: "Updates, back-ups en controles gebeuren op vaste basis, zonder dat je er zelf aan hoeft te denken." },
            { titel: "Snelle opvolging bij storingen", tekst: "Bij een storing heb je prioriteit, met korte reactietijden in plaats van een wachtrij." },
        ],
        faq: [
            {
                vraag: "Wat gebeurt er als mijn website nu al achterloopt met updates?",
                antwoord: "We starten met een nulmeting en brengen de website eerst bij, inclusief eventuele beveiligingsrisico's, voordat we overgaan op regulier onderhoud."
            },
            {
                vraag: "Is een onderhoudsabonnement duurder dan losse facturen?",
                antwoord: "Op de lange termijn meestal niet: losse facturen tellen bij regelmatig contact vaak sneller op dan een vast maandbedrag, en je voorkomt bovendien de kosten van een verwaarloosde, kwetsbare website."
            },
            {
                vraag: "Kan ik het abonnement op elk moment aanpassen?",
                antwoord: "Ja, het urentegoed en de omvang van het onderhoud kunnen worden aangepast als jouw situatie verandert."
            },
        ],
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