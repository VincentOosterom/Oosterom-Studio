import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navigate from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./FAQ.css";

// ── Data ──────────────────────────────────────────────────────────────────────

const categories = [
    {
        id: "webdevelopment",
        label: "Webdevelopment",
        vragen: [
            {
                vraag: "Wat is het verschil tussen een website en een webapplicatie?",
                antwoord: "Een website is primair informatief, bezoekers lezen en navigeren. Een webapplicatie heeft interactie: gebruikers loggen in, beheren data, of voeren acties uit. Een portfolio-site is een website; een klantportaal met dashboards is een webapplicatie. In de praktijk bestaat er veel tussenin."
            },
            {
                vraag: "Waarom React en niet WordPress?",
                antwoord: "WordPress is prima voor content-gedreven sites met weinig maatwerk. React geeft volledige controle over gedrag, performance en toekomstige uitbreidingen, zoals dashboards, gebruikersrollen of koppelingen met externe systemen. Als je verwacht dat je site een applicatie wordt, is React de betere basis."
            },
            {
                vraag: "Hoe lang duurt het bouwen van een website?",
                antwoord: "Een eenvoudige marketingsite duurt 2 tot 4 weken. Een webapplicatie met authenticatie, dashboard en API-koppelingen eerder 6 tot 12 weken. De exacte doorlooptijd hangt af van de scope — die bepalen we samen tijdens de intake."
            },
            {
                vraag: "Kan ik na oplevering zelf aanpassingen doen?",
                antwoord: "Ja. We bouwen altijd met een beheermogelijkheid, of dat nu een CMS is, een admin-panel, of gewoon goed gedocumenteerde code die een andere developer kan overnemen. Je bent nooit volledig afhankelijk van ons."
            },
            {
                vraag: "Bouwen jullie ook mobiele apps?",
                antwoord: "We bouwen webapplicaties die volledig mobielvriendelijk zijn. Native iOS- of Android-apps bouwen we momenteel niet, maar React Native (voor cross-platform mobiele apps) behoort tot de opties voor grotere trajecten."
            },
        ]
    },
    {
        id: "seo",
        label: "SEO",
        vragen: [
            {
                vraag: "Wat is SEO en waarom is het belangrijk?",
                antwoord: "SEO staat voor Search Engine Optimization, het geheel van technieken waarmee je website beter vindbaar wordt in zoekmachines zoals Google. Een goed geoptimaliseerde site trekt bezoekers aan zonder dat je betaalt per klik, in tegenstelling tot advertenties."
            },
            {
                vraag: "Hoe lang duurt het voordat SEO resultaat oplevert?",
                antwoord: "Organische SEO is een langetermijnstrategie. De eerste verbeteringen in rankings zijn vaak na 6 tot 12 weken zichtbaar, maar significante resultaten komen na 3 tot 6 maanden regelmatige optimalisatie. Hoe ouder en gevestigder je domein, hoe sneller het effect."
            },
            {
                vraag: "Wat is het verschil tussen technische SEO en content-SEO?",
                antwoord: "Technische SEO gaat over hoe goed Google je site kan crawlen en indexeren: laadsnelheid, mobiele weergave, HTTPS, sitemap, correcte statuscode's. Content-SEO gaat over de relevantie van je teksten voor de zoektermen die jouw doelgroep gebruikt. Beide zijn nodig voor duurzame resultaten."
            },
            {
                vraag: "Zijn Core Web Vitals echt belangrijk voor mijn ranking?",
                antwoord: "Ja, Google gebruikt Core Web Vitals (laadtijd, interactiviteit en visuele stabiliteit) als rankingfactor. Een trage website wordt niet alleen lager gerankt, bezoekers haken ook sneller af. We bouwen standaard op hoge Lighthouse-scores."
            },
            {
                vraag: "Helpt een blog écht voor SEO?",
                antwoord: "Ja, mits de blogartikelen gericht zijn op zoekwoorden waar je doelgroep daadwerkelijk op zoekt. Een blog over 'tips voor een mooie tuin' helpt een hoveniersbedrijf. Generieke blogs zonder zoekwoord-focus voegen weinig toe. Kwaliteit en regelmaat zijn bepalend."
            },
        ]
    },
    {
        id: "api",
        label: "API & Koppelingen",
        vragen: [
            {
                vraag: "Wat is een API?",
                antwoord: "Een API (Application Programming Interface) is een afgesproken manier waarop twee systemen met elkaar communiceren. Als je website bestellingen doorstuurt naar je boekhoudsoftware, of een chatbot verbonden is met je CRM, werkt dat via een API, als een gestandaardiseerde 'brug' tussen systemen."
            },
            {
                vraag: "Kan mijn website koppelen met mijn bestaande software?",
                antwoord: "In de meeste gevallen wel. Populaire tools zoals Exact, Salesforce, Mollie, Stripe, Google Calendar en Mailchimp hebben allen publieke API's waar we tegenaan kunnen bouwen. Voor software zonder publieke API is een maatwerk-koppeling via webhooks of dataimport soms een alternatief."
            },
            {
                vraag: "Wat is het verschil tussen een REST API en een webhook?",
                antwoord: "Een REST API werkt op verzoek: jouw systeem vraagt data op wanneer het dat nodig heeft. Een webhook werkt andersom: het andere systeem stuurt een bericht zodra er iets gebeurt, zonder dat jij erom vraagt. Webhooks zijn efficiënter voor realtime notificaties — zoals een melding zodra een betaling binnenkomt."
            },
            {
                vraag: "Wat kost het bouwen van een API-koppeling?",
                antwoord: "Dat verschilt sterk. Een eenvoudige koppeling met een goed gedocumenteerde API duurt een paar uur; een complexe twee-richtingssynchronisatie tussen meerdere systemen kan meerdere weken kosten. Na een korte analyse geven we altijd een concrete inschatting vooraf."
            },
        ]
    },
    {
        id: "software",
        label: "Software op Maat",
        vragen: [
            {
                vraag: "Wanneer heb ik maatwerk software nodig?",
                antwoord: "Als je merkt dat je werkprocessen zich aanpassen aan de beperkingen van bestaande tools, in plaats van andersom, is dat het signaal. Maatwerk loont ook als je een specifieke combinatie van functionaliteiten nodig hebt die geen enkel standaardpakket biedt, of als je verwacht snel te groeien en standaardtools dat niet kunnen bijhouden."
            },
            {
                vraag: "Hoe verloopt een software-ontwikkeltraject?",
                antwoord: "We starten altijd met een intake om processen en wensen scherp te krijgen. Daarna volgt een technische analyse en een heldere scope. Vervolgens bouwen we iteratief in sprints en leveren we regelmatig werkende versies op zodat je kunt bijsturen. Na livegang is doorontwikkeling altijd mogelijk."
            },
            {
                vraag: "Wie is eigenaar van de gebouwde software?",
                antwoord: "Jij. Na oplevering ontvang je volledige toegang tot de broncode en documentatie. Je bent niet afhankelijk van ons voor toekomstige aanpassingen, al staan we uiteraard klaar als je dat wilt."
            },
            {
                vraag: "Wat is een MVP en waarom beginnen jullie daarmee?",
                antwoord: "Een MVP (Minimum Viable Product) is de kleinste werkende versie van je product waarmee je het concept kunt valideren bij echte gebruikers. Zo voorkom je dat je maanden bouwt aan functies die niemand gebruikt. Op basis van feedback bouw je daarna stap voor stap de functies die er écht toe doen."
            },
        ]
    },
    {
        id: "sea",
        label: "SEA & Adverteren",
        vragen: [
            {
                vraag: "Wat is SEA en hoe verschilt het van SEO?",
                antwoord: "SEA staat voor Search Engine Advertising — betaalde advertenties in zoekmachines zoals Google Ads. Het verschil met SEO: SEA levert direct verkeer zolang je betaalt, SEO bouwt langzaam organische vindbaarheid op die blijft bestaan ook als je stopt met investeren. Beide hebben hun plek, afhankelijk van je doel en budget."
            },
            {
                vraag: "Wanneer is Google Ads zinvol voor mijn bedrijf?",
                antwoord: "Google Ads is zinvol als je snel zichtbaarheid wilt op specifieke zoektermen, een nieuw product of dienst lanceert, of in een markt zit waar organische ranking lang duurt. Het is minder zinvol als je budget laag is en de concurrentie op de zoekwoorden hoog — dan is de klik-prijs snel hoger dan de marge op een opdracht."
            },
            {
                vraag: "Wat is een goede landingspagina voor een advertentiecampagne?",
                antwoord: "Een landingspagina voor SEA heeft één doel: de bezoeker omzetten in een lead of klant. Dat betekent: één heldere boodschap, één call-to-action, geen afleiding naar andere pagina's, en inhoud die exact aansluit op de advertentietekst. Een generieke homepage converteert aanzienlijk slechter dan een gerichte landingspagina."
            },
            {
                vraag: "Kan ik SEO en SEA combineren?",
                antwoord: "Absoluut, en het werkt goed samen. SEA geeft direct verkeer en inzicht in welke zoektermen converteren. Die data gebruik je om je SEO-strategie te sturen. Intussen bouwt SEO organische autoriteit op, zodat je op termijn minder afhankelijk wordt van betaald verkeer."
            },
        ]
    },
];

// ── FAQ Item ──────────────────────────────────────────────────────────────────

function FaqItem({ vraag, antwoord, index }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
            <button
                className="faq-item__trigger"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="faq-item__num">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-item__vraag">{vraag}</span>
                <svg
                    className={`faq-item__icon ${open ? "faq-item__icon--open" : ""}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="faq-item__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                        <p>{antwoord}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Pagina ────────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function FAQPage() {
    const [actieveCategorie, setActieveCategorie] = useState("webdevelopment");
    const categorie = categories.find((c) => c.id === actieveCategorie);

    return (
        <>
            <Helmet>
                <title>Veelgestelde vragen | Oosterom Studio</title>
                <meta
                    name="description"
                    content="Antwoorden op veelgestelde vragen over webdevelopment, SEO, API-koppelingen, maatwerk software en online adverteren van Oosterom Studio."
                />
            </Helmet>

            <Navigate />

            {/* Hero */}
            <motion.section
                className="faq-hero"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                <div className="faq-hero__bg" aria-hidden="true" />
                <div className="faq-hero__content">
                    <motion.span className="faq-hero__tag" variants={fadeUp}>
                        Veelgestelde vragen
                    </motion.span>
                    <motion.h1 className="faq-hero__title" variants={fadeUp}>
                        Geen vraag is<br /><em>te technisch.</em>
                    </motion.h1>
                    <motion.p className="faq-hero__subtitle" variants={fadeUp}>
                        Antwoorden op de vragen die we het vaakst krijgen,
                        over webdevelopment, SEO, API's, software en adverteren.
                        Staat jouw vraag er niet tussen?{" "}
                        <Link to="/contact">Stel hem direct.</Link>
                    </motion.p>
                </div>
            </motion.section>

            <section className="faq-body">
                <div className="faq-body__inner">

                    {/* Sidebar tabs */}
                    <nav className="faq-tabs" aria-label="FAQ categorieën">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`faq-tab ${actieveCategorie === cat.id ? "faq-tab--active" : ""}`}
                                onClick={() => setActieveCategorie(cat.id)}
                            >
                                {cat.label}
                                <span className="faq-tab__count">{cat.vragen.length}</span>
                            </button>
                        ))}
                    </nav>


                    <motion.div
                        key={actieveCategorie}
                        className="faq-list"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 className="faq-list__titel" variants={fadeUp}>
                            {categorie.label}
                        </motion.h2>

                        <motion.div className="faq-items" variants={stagger}>
                            {categorie.vragen.map((item, i) => (
                                <motion.div key={i} variants={fadeUp}>
                                    <FaqItem
                                        vraag={item.vraag}
                                        antwoord={item.antwoord}
                                        index={i}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="faq-cta">
                <div className="faq-cta__glow" aria-hidden="true" />
                <motion.div
                    className="faq-cta__inner"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeUp}>
                        Staat jouw vraag er niet bij?
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Plan een vrijblijvend gesprek, we denken graag mee, ook als je nog niet precies weet wat je nodig hebt.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/offerte-aanvragen" className="cta-button">
                            Plan een gratis gesprek →
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}