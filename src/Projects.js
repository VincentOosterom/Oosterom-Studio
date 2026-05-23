import logo_dave from "./assets/logo-dave.jpg"
import logo_oliebollen from "./assets/logo-oliebollenalphen.png"
import logo_casino from "./assets/logo_jp_casino.svg"

import website_dave from "./assets/website_dave.png"
import work_oliebollenalphen from "./assets/OliebollenAlphen_work.png"
import work_jp from "./assets/portfolio_JP.png"
import logo_smart from "./assets/logo_smart.jpg"
import work_smart from "./assets/work_smart.png"

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
        sfeer: website_dave
    },
    {
        slug: "jp-casino-verhuur",
        title: "JP Casino-Verhuur",
        image: logo_casino,
        card_description: `Voor JP Casino-Verhuur hebben we een complete rebranding verzorgd met sterke focus op SEO. De kleuren zijn afgestemd op het bestaande logo, daar hebben we omheen gebouwd voor een samenhangend geheel.`,
        subtitle: "Diensten van Oosterom Studio",
        intro: `JP Casino-Verhuur had al een website, maar die was toe aan een frisse start. Wij hebben een volledige rebranding uitgevoerd: nieuwe uitstraling, betere SEO-structuur en een ontwerp dat perfect aansluit bij het bestaande logo en de merkbeleving.`,
        challenge: `De website van JP Casino-Verhuur bestond al, maar miste een sterke online identiteit en SEO-fundament. De uitdaging was om de bestaande basis te transformeren naar een professionele, vindbare website — zonder het vertrouwde merk los te laten.`,
        solution: `We zijn gestart met een rebranding op basis van het bestaande logo. Kleuren, typografie en opzet zijn hier volledig op afgestemd. Daarnaast hebben we de site SEO-technisch opgebouwd voor betere vindbaarheid. Als extra hebben we een professioneel portaal ontwikkeld via Supabase, waarmee JP zelf alle aanvragen kan bekijken en de status ervan kan beheren.`,
        result: `Het resultaat is een volledig herbouwde website met een herkenbare uitstraling die aansluit bij het logo, versterkte SEO en een werkend portaal. JP Casino-Verhuur heeft nu een professionele online aanwezigheid én een eigen dashboard om aanvragen te beheren.`,
        sfeer: work_jp
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
        sfeer: work_oliebollenalphen
    },
    {
        slug: "smart-telecom-store",
        title: "Smart Telecom Store",
        image: logo_smart,
        card_description: `Voor Smart Telecom Store hebben we een volledig custom WordPress thema gebouwd met meer dan 15 pagina's voor optimale SEO. Inclusief blog, WooCommerce webshop koppeling en doorlopend onderhoud van de website en zoekwoorden.`,
        subtitle: "Diensten van Oosterom Studio",
        intro: `Smart Telecom Store had een professionele online aanwezigheid nodig die niet alleen goed oogt, maar ook gevonden wordt. Wij hebben een custom WordPress thema gebouwd, de SEO volledig opgezet en zorgen voor doorlopend onderhoud.`,
        challenge: `De klant had behoefte aan een website die écht scoort in Google — niet alleen mooi van buiten, maar technisch sterk van binnen. Daarnaast moest er een webshop komen voor online verkoop, en was er behoefte aan een betrouwbare partner voor langdurig onderhoud en groei.`,
        solution: `We hebben een volledig custom WordPress thema ontwikkeld in de huisstijl van Smart Telecom Store. Om de beste SEO-resultaten te behalen zijn er meer dan 15 pagina's aangemaakt met gerichte zoekwoorden. Via Google Site Kit houden we de prestaties bij. Een blog is toegevoegd voor continue vindbaarheid. WooCommerce is gekoppeld voor online verkoop en we beheren doorlopend de website, content en zoekwoordstrategie.`,
        result: `Het resultaat is een professionele, goed vindbare website met een groeiende online aanwezigheid. Door de combinatie van een sterk technisch fundament, gerichte SEO en doorlopend onderhoud groeit het organisch verkeer maandelijks. De WooCommerce integratie zorgt daarnaast voor een extra verkoopkanaal dat dag en nacht open is.`,
        sfeer: work_smart
    }

];

export default projects;
