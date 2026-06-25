import logo_dave from "../src/assets/images/logo-dave.jpg"
import logo_oliebollen from "../src/assets/images/logo-oliebollenalphen.png"
import logo_casino from "../src/assets/images/logo_jp_casino.svg"

import website_dave from "../src/assets/images/website_dave.png"
import work_oliebollenalphen from "../src/assets/images/OliebollenAlphen_work.png"
import work_jp from "../src/assets/images/portfolio_JP.png"
import logo_smart from "../src/assets/images/logo_smart.jpg"
import work_smart from "../src/assets/images/work_smart.png"
import Logo from "../src/assets/images/Logo | Wit.png"
import work_crm from "../src/assets/images/crm-image.png"
import logo_vandervis from "../src/assets/images/logo-vandervis.webp"
import work_vandervis from "../src/assets/images/work_vandervis.png"





const projects = [
    {
        slug: "daves-dakwerken",
        title: "Dave's Dakwerken",
        image: logo_dave,
        card_description: "Voor Dave hebben we een volledig nieuwe website ontwikkeld in React. De website beschikt over een AI-chatbot, realtime weer alerts, een dakinspectie checker en een geïntegreerd offertesysteem.",
        subtitle: "Diensten van Oosterom Studio",
        intro: "Voor Dave hebben we een moderne React website gebouwd die ver uitstijgt boven een standaard bedrijfswebsite. Met slimme features zoals een AI-assistent en realtime integraties onderscheidt Dave zich direct van de concurrentie.",
        challenge: "Dave had een verouderde Squarespace website die niet meer aansloot bij de groei van zijn bedrijf. De website bood onvoldoende mogelijkheden om leads te genereren, bezoekers actief te begeleiden naar een offerte aanvraag en zijn vakmanschap goed te presenteren. Daarnaast ontbrak een systeem om nieuwe aanvragen efficiënt op te vangen.",
        solution: "We hebben gekozen voor een volledig maatwerk React website met een strak en professioneel ontwerp. De website beschikt over een AI-chatbot die bezoekers 24/7 te woord staat en offerte aanvragen verwerkt, een dakinspectie checker die bezoekers helpt de staat van hun dak te beoordelen, realtime weer alerts die automatisch verschijnen bij storm of extreme hitte in de regio, een uitgebreid portfolio met voor en na sliders en een volledig geautomatiseerd offerte en contactformulier gekoppeld aan een CRM.",
        result: "Het eindresultaat is een snelle en professionele website die continu leads genereert, ook buiten kantooruren. De AI-chatbot vangt vragen op en begeleidt bezoekers naar een offerte aanvraag. Alle gesprekken en aanvragen worden automatisch opgeslagen in het CRM zodat Dave altijd een volledig overzicht heeft van nieuwe klanten en lopende aanvragen.",
        sfeer: website_dave,
        website: "https://www.davesdakwerken.nl"
    },
    {
        slug: "casino-on-tour",
        title: "Casino On Tour",
        image: logo_casino,
        card_description: `Voor Casino On Tour hebben we een complete rebranding verzorgd met sterke focus op SEO. De kleuren zijn afgestemd op het bestaande logo, daar hebben we omheen gebouwd voor een samenhangend geheel.`,
        subtitle: "Diensten van Oosterom Studio",
        intro: `Casino On Tour had al een website, maar die was toe aan een frisse start. Wij hebben een volledige rebranding uitgevoerd: nieuwe uitstraling, betere SEO-structuur en een ontwerp dat perfect aansluit bij het bestaande logo en de merkbeleving.`,
        challenge: `De website van Casino On Tour bestond al, maar miste een sterke online identiteit en SEO-fundament. De uitdaging was om de bestaande basis te transformeren naar een professionele, vindbare website, zonder het vertrouwde merk los te laten.`,
        solution: `We zijn gestart met een rebranding op basis van het bestaande logo. Kleuren, typografie en opzet zijn hier volledig op afgestemd. Daarnaast hebben we de site SEO-technisch opgebouwd voor betere vindbaarheid. Als extra hebben we een professioneel portaal ontwikkeld via Supabase, waarmee JP zelf alle aanvragen kan bekijken en de status ervan kan beheren.`,
        result: `Het resultaat is een volledig herbouwde website met een herkenbare uitstraling die aansluit bij het logo, versterkte SEO en een werkend portaal. Casino On Tour heeft nu een professionele online aanwezigheid én een eigen dashboard om aanvragen te beheren.`,
        sfeer: work_jp,
        website: "https://www.casinoontour.nl"
    },
    {
        slug: "oliebollenalphen",
        title: "OliebollenAlphen",
        image: logo_oliebollen,

        card_description: `Voor OliebollenAlphen hebben we in korte tijd een professionele webshop gerealiseerd
    die klaar was voor de drukke eindejaarsperiode. Door snel te schakelen en efficiënt te werken,
    is er binnen enkele dagen een volledig functionele online winkel opgeleverd waarin klanten
    eenvoudig hun bestelling kunnen plaatsen.`,

        subtitle: "Diensten van Oosterom Studio",

        intro: `Van idee naar resultaat. Voor OliebollenAlphen ontwikkelden we een overzichtelijke en
    gebruiksvriendelijke webshop waarin snelheid, eenvoud en bestelgemak centraal staan.`,

        challenge: `OliebollenAlphen had behoefte aan een betrouwbare online verkoopomgeving voor een
    seizoensgebonden product. De uitdaging lag in de korte doorlooptijd: de webshop moest snel live
    zijn, foutloos functioneren en tegelijkertijd voldoende schaalbaar zijn om piekmomenten rond
    de feestdagen aan te kunnen.`,

        solution: `We hebben gekozen voor een efficiënte aanpak waarbij de focus lag op gebruiksgemak,
    duidelijke productpresentatie en een soepel bestelproces. Door het ontwerp en de structuur
    eenvoudig en overzichtelijk te houden, kunnen klanten snel hun favoriete producten selecteren
    en afrekenen zonder onnodige stappen.`,

        result: `Het resultaat is een professionele en stabiele webshop die klaar is voor hoge
    bezoekersaantallen en bestellingen tijdens de drukke eindejaarsperiode. Klanten kunnen eenvoudig
    bestellen, terwijl de ondernemer beschikt over een betrouwbare online verkoopomgeving die
    bijdraagt aan een soepel en succesvol verkoopseizoen.`,
        sfeer: work_oliebollenalphen,
        website: "https://www.oliebollenalphen.nl"
    },
    {
        slug: "smart-telecom-store",
        title: "Smart Telecom Store",
        image: logo_smart,
        card_description: `Voor Smart Telecom Store hebben we een volledig custom WordPress thema gebouwd met meer dan 15 pagina's voor optimale SEO. Inclusief blog, WooCommerce webshop koppeling en doorlopend onderhoud van de website en zoekwoorden.`,
        subtitle: "Diensten van Oosterom Studio",
        intro: `Smart Telecom Store had een professionele online aanwezigheid nodig die niet alleen goed oogt, maar ook gevonden wordt. Wij hebben een custom WordPress thema gebouwd, de SEO volledig opgezet en zorgen voor doorlopend onderhoud.`,
        challenge: `De klant had behoefte aan een website die écht scoort in Google, niet alleen mooi van buiten, maar technisch sterk van binnen. Daarnaast moest er een webshop komen voor online verkoop, en was er behoefte aan een betrouwbare partner voor langdurig onderhoud en groei.`,
        solution: `We hebben een volledig custom WordPress thema ontwikkeld in de huisstijl van Smart Telecom Store. Om de beste SEO-resultaten te behalen zijn er meer dan 15 pagina's aangemaakt met gerichte zoekwoorden. Via Google Site Kit houden we de prestaties bij. Een blog is toegevoegd voor continue vindbaarheid. WooCommerce is gekoppeld voor online verkoop en we beheren doorlopend de website, content en zoekwoordstrategie.`,
        result: `Het resultaat is een professionele, goed vindbare website met een groeiende online aanwezigheid. Door de combinatie van een sterk technisch fundament, gerichte SEO en doorlopend onderhoud groeit het organisch verkeer maandelijks. De WooCommerce integratie zorgt daarnaast voor een extra verkoopkanaal dat dag en nacht open is.`,
        sfeer: work_smart,
        website: "https://www.smarttelecomstore.nl"
    },
    {
        slug: "eigen-cms-systeem",
        title: "Oosterom CMS",
        image: Logo,
        card_description: `Een volledig door Oosterom Studio ontwikkeld contentmanagementsysteem waarmee websites eenvoudig beheerd kunnen worden. Snel, veilig en volledig afgestemd op de wensen van de klant.`,
        subtitle: "Ons eigen contentmanagementsysteem",
        intro: `Niet iedere organisatie heeft baat bij een standaard CMS. Daarom hebben wij Oosterom CMS ontwikkeld: een gebruiksvriendelijk en flexibel beheersysteem waarmee content eenvoudig kan worden aangepast zonder onnodige complexiteit.`,
        challenge: `Veel bestaande CMS-platformen bevatten functies die niet worden gebruikt of zijn juist beperkt in maatwerkmogelijkheden. Daarnaast kunnen externe plugins en updates zorgen voor beveiligingsrisico's en prestatieproblemen.`,
        solution: `Met Oosterom CMS hebben we een volledig eigen contentmanagementsysteem gebouwd waarin snelheid, veiligheid en gebruiksgemak centraal staan. Klanten kunnen zelf pagina's, afbeeldingen en content beheren via een overzichtelijk dashboard, terwijl wij volledige controle houden over de techniek en doorontwikkeling. Hierdoor is het systeem eenvoudig uit te breiden met nieuwe functionaliteiten en perfect afgestemd op iedere maatwerkwebsite.`,
        result: `Het resultaat is een stabiel, snel en toekomstbestendig CMS zonder overbodige functionaliteiten. Websites laden sneller, zijn eenvoudiger te beheren en kunnen probleemloos meegroeien met de ambities van de klant.`,
        sfeer: work_crm
    },
    {
        slug: "van-der-vis-bouw",
        title: "Van der Vis Bouw",
        image: logo_vandervis,
        card_description: `Een volledig custom WordPress website voor Van der Vis Bouwbedrijf, mobielvriendelijk, voorzien van Yoast SEO en verschillende plugins, met een offerte- en contactformulier dat rechtstreeks per e-mail binnenkomt.`,
        subtitle: "Diensten van Oosterom Studio",
        intro: `Van der Vis Bouwbedrijf had nog geen eigen website. Wij hebben een volledig custom WordPress website gebouwd waarmee het bedrijf voor het eerst online vindbaar en bereikbaar is.`,
        challenge: `Voor Van der Vis Bouwbedrijf was er nog geen website aanwezig, waardoor potentiële klanten geen manier hadden om het bedrijf online te vinden of een offerte aan te vragen. Er was behoefte aan een professionele, mobielvriendelijke website met een werkend contact- en offerteformulier.`,
        solution: `We hebben een volledig custom WordPress website ontwikkeld, mobielvriendelijk opgezet en uitgerust met verschillende plugins, waaronder Yoast SEO voor de zoekmachineoptimalisatie. Bezoekers kunnen via de website eenvoudig een offerte aanvragen of contact opnemen; deze aanvragen komen rechtstreeks per e-mail binnen bij Van der Vis Bouwbedrijf.`,
        result: `Het resultaat is een professionele website waarmee Van der Vis Bouwbedrijf voor het eerst goed vindbaar en bereikbaar is online. Potentiële klanten kunnen eenvoudig, ook vanaf mobiel, een offerte aanvragen of contact opnemen — aanvragen komen direct per e-mail binnen, zodat er niets tussen wal en schip valt.`,
        website: "https://www.vandervisbouw.nl",
        sfeer: work_vandervis
    },
];

export default projects;
