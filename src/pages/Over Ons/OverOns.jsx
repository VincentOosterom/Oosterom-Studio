import './OverOns.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";

function OverOns() {
    const AnimatedWord = ({ children }) => (
        <motion.span
            className="keyword"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.span>
    );

    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Over Ons</title>
                <meta
                    name="description"
                    content="Ontmoet Vincent Oosterom, oprichter van Oosterom Studio. Full Stack developer met focus op webdevelopment, AI en cybersecurity."
                />
                <meta name="keywords"
                      content="over ons, Vincent Oosterom, full stack development, AI, cybersecurity, webdevelopment, Oosterom Studio"/>
                <meta property="og:title" content="Oosterom Studio | Over Ons"/>
                <meta property="og:description"
                      content="Maak kennis met Vincent en ontdek zijn passie voor webontwikkeling en technologie."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/over-ons"/>
            </Helmet>
            <Navigate/>
            <section className="overons-hero">
                <h1>Over Oosterom Studio</h1>
                <p>Gedreven door passie voor design, technologie en veiligheid.</p>
            </section>
            <section className="overons-content">

                <article className="overons-text">
                    <h2>
                        De <AnimatedWord>basis</AnimatedWord> van Oosterom Studio
                    </h2>

                    <p>
                        Mijn naam is <strong>Vincent Oosterom</strong>, oprichter van
                        <strong> Oosterom Studio</strong>. Vanuit een sterke interesse in
                        technologie en digitale kwaliteit ben ik gestart met het bouwen
                        van professionele weboplossingen voor ondernemers.
                    </p>
                    <p>
                        Wat begon als nieuwsgierigheid naar hoe websites écht functioneren,
                        groeide uit tot een duidelijke visie: digitale producten moeten
                        niet alleen visueel overtuigen, maar ook technisch robuust,
                        veilig en toekomstbestendig zijn.
                    </p>
                </article>

                <article className="overons-text reverse">
                    <h2>
                        Ontwikkeling en <AnimatedWord>expertise</AnimatedWord>
                    </h2>

                    <p>
                        Momenteel volg ik de <strong>HBO-opleiding Full Stack Development</strong>,
                        waarin ik mij richt op het ontwerpen en realiseren van complete
                        webapplicaties — met aandacht voor frontend, backend en datalaag.
                    </p>
                    <p>
                        Parallel hieraan verdiep ik mij actief in <strong>cybersecurity</strong>,
                        via praktijkgerichte leeromgevingen zoals TryHackMe, waar ik
                        hands-on ervaring opdoe met kwetsbaarheden, aanvalstechnieken en
                        verdedigingsprincipes binnen moderne IT-omgevingen.
                    </p>
                    <p>
                        Na afronding van deze opleiding ligt mijn focus op verdere specialisatie
                        binnen <strong>cybersecurity</strong>. Door mijn technische basis in
                        full stack development te combineren met security-kennis, kan ik
                        software niet alleen bouwen, maar ook onderbouwd beveiligen en
                        strategisch adviseren over architectuur en risico’s.
                    </p>

                </article>

                <article className="overons-text">
                    <h2>
                        Visie en <AnimatedWord>richting</AnimatedWord>
                    </h2>
                    <p>
                        Oosterom Studio bevindt zich in een fase van ontwikkeling en groei.
                        Wat vaststaat, is de richting: wij geloven dat software, beveiliging
                        en strategisch inzicht onlosmakelijk met elkaar verbonden zijn.
                    </p>
                    <p>
                        In de toekomst willen wij organisaties ondersteunen bij het bouwen
                        van doordachte softwareoplossingen, waarbij veiligheid geen
                        bijzaak is maar een fundamenteel onderdeel van het ontwerp.
                    </p>
                    <p>
                        Hoe deze dienstverlening zich exact zal ontwikkelen, staat nog
                        niet volledig vast. Wel is onze overtuiging helder: bedrijven
                        verdienen technologie die onderbouwd, uitlegbaar en
                        toekomstbestendig is.
                    </p>
                    <p>
                        Vanuit die visie willen wij niet alleen bouwen, maar ook
                        adviseren — over <strong>hoe</strong> systemen worden opgezet en
                        <strong> waarom</strong> bepaalde keuzes worden gemaakt.
                    </p>
                </article>

            </section>

            <Footer />

        </>
    );
}

export default OverOns;
