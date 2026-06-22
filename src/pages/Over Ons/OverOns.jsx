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
                <p>Webdevelopment, SaaS en cybersecurity vanuit één duidelijke visie.</p>
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
                        Mijn naam is <strong>Vincent Oosterom</strong>, oprichter van <strong>Oosterom Studio</strong>.
                        Ik ontwikkel webapplicaties en digitale producten voor ondernemers en organisaties die hun processen willen moderniseren.
                    </p>

                    <p>
                        Wat begon als interesse in hoe software werkt, is uitgegroeid tot een duidelijke focus:
                        het bouwen van digitale producten die technisch sterk, schaalbaar en veilig zijn.
                    </p>
                </motion.article>

                <motion.article className="overons-text reverse" variants={fadeUp}>
                    <h2>
                        Ontwikkeling en <AnimatedWord>expertise</AnimatedWord>
                    </h2>

                    <p>
                        Ik heb de HBO-opleiding <strong>Full Stack Development</strong> afgerond aan de Novi Hogeschool,
                        gericht op het bouwen van complete webapplicaties van frontend tot backend en database-architectuur.
                    </p>

                    <p>
                        Daarnaast verdiep ik mij actief in <strong>cybersecurity</strong>, met focus op kwetsbaarheden,
                        systeembeveiliging en veilige software-architectuur via praktische omgevingen en real-world scenario’s.
                    </p>

                    <p>
                        Die combinatie gebruik ik in mijn werk om niet alleen software te bouwen, maar ook te zorgen dat deze
                        vanaf de basis veilig, robuust en goed doordacht is.
                    </p>
                </motion.article>

                <motion.article className="overons-text" variants={fadeUp}>
                    <h2>
                        Visie en <AnimatedWord>richting</AnimatedWord>
                    </h2>

                    <p>
                        Software, beveiliging en architectuur horen bij elkaar. Ik geloof dat digitale producten alleen goed zijn
                        wanneer ze technisch kloppen, veilig zijn ontworpen en logisch in elkaar zitten.
                    </p>

                    <p>
                        Vanuit die visie bouw ik software voor organisaties die verder willen dan standaardoplossingen —
                        met focus op kwaliteit, schaalbaarheid en veiligheid vanaf de basis.
                    </p>

                    <p>
                        Ik bouw niet alleen systemen, maar denk mee over <strong>structuur, keuzes en toekomstbestendigheid</strong>.
                    </p>
                </motion.article>

            </motion.section>

            <Footer />

        </>
    );
}

export default OverOns;
