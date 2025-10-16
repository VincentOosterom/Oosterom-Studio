import './Portfolio.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import { motion } from "framer-motion";
import logo_dave from "../../assets/logo-dave.jpg";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";
import logo_oliebollenalphen from "../../assets/logo-oliebollenalphen.png";
import jp_casinoverhuur from "../../assets/jp-casinoverhuur.jpg";


const projects = [
    {
        title: "Dave's Dakwerken",
        description: "Voor Dave hebben we een volledig nieuwe website ontwikkeld via een no-code platform. Voor dit project was een overzichtelijke basiswebsite nodig die duidelijk zijn werkzaamheden, werkwijze en eindresultaten presenteert. Daarnaast beheren we inmiddels ook zijn bijbehorende socialmedia-account, waar we afgeronde projecten delen.",
        image: logo_dave,
        link: "https://www.davesdakwerken.nl/"
    },
    {
        title: "OliebollenAlphen",
        description: "Voor OliebollenAlphen hebben we in korte tijd een professionele webshop gerealiseerd met het no-code platform Shopify. Omdat het een spoedklus was, hebben we snel en efficiënt gehandeld om binnen enkele dagen een volledig functionele webshop op te leveren. De website is overzichtelijk, gebruiksvriendelijk en klaar voor de drukke eindejaarsperiode, zodat bestellingen soepel kunnen verlopen en klanten eenvoudig hun favoriete oliebollen kunnen bestellen. ",
        image: logo_oliebollenalphen,
        link: "https://www.oliebollenalphen.nl/"
    },
    {
        title: "JP Casino-Verhuur",
        description: "Voor JP Casino-Verhuur hebben we tot nu toe een professioneel Figma-ontwerp ontwikkeld als basis voor een mogelijke toekomstige website. Dit ontwerp vormt een modern en stijlvol concept dat later eenvoudig kan worden omgezet naar een volledige website, mocht het bedrijf besluiten om zijn online uitstraling te vernieuwen.",
        image: jp_casinoverhuur,
    }
    // voeg hier meer projecten toe
];

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Portfolio</title>
                <meta
                    name="description"
                    content="Bekijk het portfolio van Oosterom Studio. Inspirerende websites en webapplicaties gebouwd met React, Vite en Figma."
                />
                <meta name="keywords" content="portfolio, projecten, react, webdevelopment, Figma, Oosterom Studio" />
                <meta property="og:title" content="Oosterom Studio | Portfolio" />
                <meta property="og:description" content="Een overzicht van recent ontwikkelde websites en projecten." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/portfolio" />
            </Helmet>
            <Navigate />
            <section className="portfolio-section">
                <div className="portfolio-container">
                    <motion.h2
                        className="portfolio-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                       Onze Portfolio
                    </motion.h2>
                    <motion.div
                        className="portfolio-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.a
                                href={project.link}
                                className="portfolio-card"
                                key={index}
                                target={`_blank`}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } }
                                }}
                            >
                                <div className="portfolio-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="portfolio-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Portfolio;
