import {useState} from 'react'
import {motion} from 'framer-motion'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'
import Navigate from '../../components/navigate/Navigate.jsx'
import Footer from '../../components/footer/Footer.jsx'
import './OosteromOS.css'

const features = [
    {
        icon: '⚡',
        titel: 'Persoonlijk CMS',
        omschrijving: 'Teksten op je website aanpassen zonder technische kennis. Direct bewerken, direct live.',
        ai: true,
        aiLabel: 'AI herschrijft teksten op verzoek',
    },
    {
        icon: '📋',
        titel: 'Projectoverzicht',
        omschrijving: 'Altijd inzicht in de voortgang van je project. Welke fase, wat loopt er, wat komt eraan.',
        ai: false,
    },
    {
        icon: '🧾',
        titel: 'Facturen & offertes',
        omschrijving: 'Al je facturen en offertes op één plek. Geen verrassingen, altijd inzichtelijk.',
        ai: false,
    },
    {
        icon: '📁',
        titel: 'Bestanden',
        omschrijving: 'Alle gedeelde bestanden, designs en documenten direct toegankelijk vanuit je portaal.',
        ai: false,
    },
    {
        icon: '💬',
        titel: 'Berichten',
        omschrijving: 'Direct communiceren met Oosterom Studio. Geen email threads, alles op één plek.',
        ai: false,
    },
    {
        icon: '📥',
        titel: 'Aanvragen inzien',
        omschrijving: 'Formulierinzendingen van je eigen website direct zichtbaar in je dashboard.',
        ai: false,
    },
    {
        icon: '🤖',
        titel: 'Chatbot beheer',
        omschrijving: 'Bekijk alle gesprekken die bezoekers voeren met de AI chatbot op jouw site.',
        ai: true,
        aiLabel: 'Inzicht in AI gesprekken',
    },
    {
        icon: '📱',
        titel: 'Social media',
        omschrijving: 'Posts bekijken, goedkeuren of aanvragen. Jij bepaalt wat er online gaat.',
        ai: true,
        aiLabel: 'AI schrijft posts op verzoek',
    },
]

const stappen = [
    {
        nummer: '01',
        titel: 'Project gestart',
        omschrijving: 'Je ontvangt een persoonlijke uitnodiging voor jouw portaal.'
    },
    {nummer: '02', titel: 'Inloggen', omschrijving: 'Veilig inloggen met je eigen account. Alleen jouw data, altijd.'},
    {
        nummer: '03',
        titel: 'Alles op één plek',
        omschrijving: 'Project, facturen, bestanden, berichten — direct inzichtelijk.'
    },
    {nummer: '04', titel: 'Zelf beheren', omschrijving: 'Teksten aanpassen, aanvragen bekijken, chatbot monitoren.'},
]

export default function OosteromOS() {
    const [activeFeature, setActiveFeature] = useState(null)

    return (
        <>
            <Helmet>
                <title>Oosterom OS — Jouw persoonlijk klantportaal | Oosterom Studio</title>
                <meta name="description"
                      content="Als klant van Oosterom Studio krijg je toegang tot Oosterom OS, jouw persoonlijk dashboard voor projectbeheer, CMS, facturen, chatbot en meer."/>
                <meta property="og:title" content="Oosterom OS | Oosterom Studio"/>
                <meta property="og:description" content="Jouw project. Altijd inzichtelijk."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/oosterom-os"/>
                <meta property="og:image" content="https://www.oosteromstudio.nl/og-image.jpg"/>
            </Helmet>

            <Navigate/>

            <header>
                {/* HERO */}
                <section className="os-hero">
                    <div className="os-hero-bg">
                        <div className="os-grid-lines"/>
                        <div className="os-glow"/>
                    </div>
                    <div className="os-hero-inner">
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            className="os-badge"
                        >
                            Exclusief voor klanten van Oosterom Studio
                        </motion.div>
                        <motion.h1
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.1}}
                            className="os-hero-titel"
                        >
                            Oosterom <span className="os-accent">OS</span>
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="os-hero-sub"
                        >
                            Jouw project. Altijd inzichtelijk.
                        </motion.p>
                        <motion.p
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                            className="os-hero-desc"
                        >
                            Als klant van Oosterom Studio krijg je toegang tot een persoonlijk portaal waar je je
                            project beheert, teksten aanpast, facturen inziet en direct communiceert. Allemaal op één
                            plek.
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="os-hero-ctas"
                        >
                            <Link to="/offerte-aanvragen" className="os-btn-primair">
                                Start je project
                            </Link>
                            <Link to="/contact" className="os-btn-secundair">
                                Stel een vraag
                            </Link>
                        </motion.div>
                    </div>

                    {/* Dashboard preview */}
                    <motion.div
                        initial={{opacity: 0, y: 60}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        className="os-dashboard-preview"
                    >
                        <section className="os-preview-bar">
                            <span className="os-preview-dot" style={{background: '#ef4444'}}/>
                            <span className="os-preview-dot" style={{background: '#f59e0b'}}/>
                            <span className="os-preview-dot" style={{background: '#4ade80'}}/>
                            <span className="os-preview-url">oosteromstudio.nl</span>
                        </section>
                        <article className="os-preview-body">
                            <aside className="os-preview-sidebar">
                                {['Dashboard', 'Projecten', 'Facturen', 'Bestanden', 'Berichten', 'CMS'].map((item, i) => (
                                    <div key={item} className={`os-preview-nav-item ${i === 0 ? 'active' : ''}`}>
                                        {item}
                                    </div>
                                ))}
                            </aside>
                            <article className="os-preview-content">
                                <div className="os-preview-titel">Dashboard</div>
                                <div className="os-preview-cards">
                                    {[
                                        {label: 'Project', waarde: 'In uitvoering', kleur: '#4ade80'},
                                        {label: 'Facturen', waarde: '2 open', kleur: '#f59e0b'},
                                        {label: 'Berichten', waarde: '1 nieuw', kleur: '#60a5fa'},
                                    ].map(card => (
                                        <div key={card.label} className="os-preview-card">
                                            <div className="os-preview-card-label">{card.label}</div>
                                            <div className="os-preview-card-waarde"
                                                 style={{color: card.kleur}}>{card.waarde}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="os-preview-blokken">
                                    <div className="os-preview-blok"/>
                                    <div className="os-preview-blok" style={{width: '70%'}}/>
                                    <div className="os-preview-blok" style={{width: '85%'}}/>
                                </div>
                            </article>
                        </article>
                    </motion.div>
                </section>
            </header>

            <section className="os-features">
                <div className="os-container">
                    <article className="os-section-header">
                        <h2 className="os-section-titel">Alles wat je nodig hebt</h2>
                        <p className="os-section-sub">Eén portaal. Volledig op jouw bedrijf afgestemd.</p>
                    </article>
                    <article className="os-features-grid">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.titel}
                                className={`os-feature-card ${activeFeature === i ? 'active' : ''}`}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: i * 0.07}}
                                onMouseEnter={() => setActiveFeature(i)}
                                onMouseLeave={() => setActiveFeature(null)}
                            >
                                <div className="os-feature-icon">{f.icon}</div>
                                <div className="os-feature-titel">{f.titel}</div>
                                <div className="os-feature-omschrijving">{f.omschrijving}</div>
                                {f.ai && (
                                    <div className="os-ai-badge">
                                        <span className="os-ai-dot"/>
                                        {f.aiLabel}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </article>
                </div>
            </section>

            <section className="os-stappen">
                <div className="os-container">
                    <article className="os-section-header">
                        <h2 className="os-section-titel">Hoe het werkt</h2>
                        <p className="os-section-sub">Van project start tot volledig beheer in vier stappen.</p>
                    </article>
                    <article className="os-stappen-lijst">
                        {stappen.map((s, i) => (
                            <motion.div
                                key={s.nummer}
                                className="os-stap"
                                initial={{opacity: 0, x: -30}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: i * 0.1}}
                            >
                                <div className="os-stap-nummer">{s.nummer}</div>
                                <div className="os-stap-content">
                                    <div className="os-stap-titel">{s.titel}</div>
                                    <div className="os-stap-omschrijving">{s.omschrijving}</div>
                                </div>
                                {i < stappen.length - 1 && <div className="os-stap-lijn"/>}
                            </motion.div>
                        ))}
                    </article>
                </div>
            </section>

            {/* AI SECTIE */}
            <section className="os-ai">
                <article className="os-container">
                    <div className="os-ai-inner">
                        <motion.div
                            className="os-ai-tekst"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                        >
                            <div className="os-badge" style={{marginBottom: 16}}>AI-gestuurd</div>
                            <h2 className="os-section-titel" style={{textAlign: 'left'}}>
                                Meer dan een portaal.<br/>Een digitale assistent.
                            </h2>
                            <p className="os-ai-desc">
                                Oosterom OS is gebouwd met AI in de kern. Teksten herschrijven, social media posts
                                genereren, chatbot gesprekken analyseren. Jij vraagt het, de AI doet het werk.
                            </p>
                            <ul className="os-ai-lijst">
                                <li>Tekst op je website aanpassen met één klik</li>
                                <li>AI schrijft social media posts in jouw stijl</li>
                                <li>Chatbot gesprekken automatisch samengevat</li>
                                <li>Aanvragen geprioriteerd op basis van urgentie</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="os-ai-visual"
                            initial={{opacity: 0, scale: 0.95}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <div className="os-ai-card">
                                <div className="os-ai-card-header">
                                    <span className="os-ai-dot" style={{width: 8, height: 8}}/>
                                    AI Assistent
                                </div>
                                <div className="os-ai-chat">
                                    <div className="os-ai-msg os-ai-msg-user">Herschrijf mijn homepage tekst,
                                        zakelijker
                                    </div>
                                    <div className="os-ai-msg os-ai-msg-ai">
                    <span className="os-ai-typing">
                      "Wij bouwen digitale oplossingen die werken. Van strategie tot lancering. Resultaatgericht, zonder omwegen."
                    </span>
                                    </div>
                                    <div className="os-ai-msg os-ai-msg-user">Schrijf een Instagram post over onze
                                        nieuwe dienst
                                    </div>
                                    <div className="os-ai-msg os-ai-msg-ai">
                    <span className="os-ai-typing">
                      "Nieuw: wij nemen je social media volledig uit handen. Elke week verse content, afgestemd op jouw bedrijf. 🚀"
                    </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </article>
            </section>

            {/* CTA */}
            <section className="os-cta">
                <div className="os-container">
                    <motion.div
                        className="os-cta-inner"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                    >
                        <h2 className="os-cta-titel">Klaar om digitaal sterk te worden?</h2>
                        <p className="os-cta-sub">
                            Oosterom OS is inbegrepen bij elk project van Oosterom Studio. Start je project en krijg
                            direct toegang.
                        </p>
                        <div className="os-hero-ctas">
                            <Link to="/offerte-aanvragen" className="os-btn-primair">
                                Start je project
                            </Link>
                            <Link to="/contact" className="os-btn-secundair">
                                Meer weten?
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer/>
        </>
    )
}