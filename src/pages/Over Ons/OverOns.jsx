import './OverOns.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/footer/Footer.jsx";

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

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    return (
        <>
            <Helmet>
                <title>Over Oosterom Studio – Webdeveloper & Cybersecurity Specialist</title>

                <meta
                    name="description"
                    content="Vincent Oosterom is oprichter van Oosterom Studio — een webdeveloper en cybersecurity specialist die maatwerk digitale oplossingen bouwt voor MKB en startups in Nederland."
                />

                <meta property="og:title" content="Over Vincent Oosterom | Oosterom Studio"/>
                <meta
                    property="og:description"
                    content="Webdeveloper, Shopify specialist en cybersecurity expert. Ontdek de visie en aanpak achter Oosterom Studio."
                />
                <meta property="og:type" content="profile"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/over-ons"/>
                <meta property="og:site_name" content="Oosterom Studio"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Vincent Oosterom",
                        "jobTitle": "Webdeveloper & Cybersecurity Specialist",
                        "url": "https://www.oosteromstudio.nl/over-ons",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Oosterom Studio",
                            "url": "https://www.oosteromstudio.nl"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/in/vincent-oosterom-05017176/",
                            "https://www.instagram.com/oosteromstudio"
                        ]
                    })}
                </script>
            </Helmet>

            <Navigate/>
            <section className="overons-hero">
                <h1>Over Oosterom Studio</h1>
                <p>Gedreven door passie voor design, technologie en veiligheid.</p>
            </section>
            <motion.section
                className="overons-content"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.article className="overons-text" variants={fadeUp}>
                    <h2>
                        De <AnimatedWord>basis</AnimatedWord> van Oosterom Studio
                    </h2>
                    <p>
                        Mijn naam is <strong>Vincent Oosterom</strong>, oprichter van
                        <strong> Oosterom Studio</strong>. Vanuit een sterke interesse in
                        technologie en digitale kwaliteit bouw ik professionele
                        weboplossingen voor ondernemers die verder willen.
                    </p>
                    <p>
                        Wat begon als nieuwsgierigheid naar hoe websites écht functioneren,
                        is uitgegroeid tot een duidelijke visie: digitale producten moeten
                        niet alleen visueel overtuigen, maar ook technisch robuust,
                        veilig en toekomstbestendig zijn.
                    </p>
                </motion.article>

                <motion.article className="overons-text reverse" variants={fadeUp}>
                    <h2>
                        Ontwikkeling en <AnimatedWord>expertise</AnimatedWord>
                    </h2>
                    <p>
                        Momenteel volg ik de <strong>HBO-opleiding Full Stack Development</strong>,
                        gericht op het ontwerpen en bouwen van complete webapplicaties —
                        van frontend tot backend en datalaag.
                    </p>
                    <p>
                        Parallel verdiep ik mij actief in <strong>cybersecurity</strong>,
                        via praktijkgerichte omgevingen zoals TryHackMe, waar ik
                        hands-on ervaring opdoe met kwetsbaarheden, aanvalstechnieken en
                        verdedigingsprincipes binnen moderne IT-omgevingen.
                    </p>
                    <p>
                        Die combinatie is geen toeval. Na mijn opleiding specialiseer ik
                        mij verder in <strong>cybersecurity</strong> — zodat ik software
                        niet alleen kan bouwen, maar ook onderbouwd beveiligen en adviseren
                        over architectuur en risico's.
                    </p>
                </motion.article>

                <motion.article className="overons-text" variants={fadeUp}>
                    <h2>
                        Visie en <AnimatedWord>richting</AnimatedWord>
                    </h2>
                    <p>
                        Ik geloof dat software, beveiliging en strategisch inzicht
                        onlosmakelijk met elkaar verbonden zijn. Bedrijven verdienen
                        technologie die onderbouwd, uitlegbaar en toekomstbestendig is.
                    </p>
                    <p>
                        Vanuit die overtuiging ondersteun ik organisaties bij het bouwen
                        van doordachte softwareoplossingen, waarbij veiligheid geen
                        bijzaak is maar een fundamenteel onderdeel van het ontwerp.
                    </p>
                    <p>
                        Ik bouw niet alleen, ik denk mee over <strong>hoe</strong> systemen
                        worden opgezet en <strong>waarom</strong> bepaalde keuzes
                        worden gemaakt.
                    </p>
                </motion.article>

            </motion.section>

            <Footer />

        </>
    );
}

export default OverOns;
