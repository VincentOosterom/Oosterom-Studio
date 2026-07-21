import './App.css'
import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

// ── i18n ────────────────────────────────────────────────────────────────────
import "./i18n/i18n.js";
import LanguageSync from "./components/LanguageSync/LanguageSync.jsx";

// ── Altijd direct laden — staan op elke pagina ────────────────────────────────
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker.jsx";
import CookieBanner from "./components/cookies/CookiesBanner.jsx";
import ChatWidget from "./components/chatbot/ChatWidget.jsx";

// ── Lazy laden — alleen laden als bezoeker naar die pagina gaat ───────────────
// Algemene pagina's
const Homepage = lazy(() => import("./pages/Homepage/Homepage.jsx"));
const Diensten = lazy(() => import("./pages/Diensten/Diensten.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio.jsx"));
const ProjectPage = lazy(() => import("./pages/ProjectPage/ProjectPage.jsx"));
const AboutUs = lazy(() => import("./pages/Over Ons/OverOns.jsx"));
const OfferteAanvragen = lazy(() => import("./pages/Offerte Aanvragen/OfferteAanvragen.jsx"));
const OosteromOS = lazy(() => import("./pages/OosteromOS/OosteromOS.jsx"));
const FAQPage = lazy(() => import("./pages/FAQ/FAQPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

// Blog
const BlogOverview = lazy(() => import("./pages/Blogoverview/BlogOverview.jsx"));
const BlogPost = lazy(() => import("./pages/Blogpost/BlogPost.jsx"));

// Dienstpagina's — allemaal uit hetzelfde bestand, elk als losse export
const dienstModule = () => import("./pages/DienstPage/DienstPages.jsx");

const WebdesignPage = lazy(() => dienstModule().then(m => ({default: m.WebdesignPage})));
const WebdevelopmentPage = lazy(() => dienstModule().then(m => ({default: m.WebdevelopmentPage})));
const SaasPage = lazy(() => dienstModule().then(m => ({default: m.SaasPage})));
const BrandingPage = lazy(() => dienstModule().then(m => ({default: m.BrandingPage})));
const AIAgentsPage = lazy(() => dienstModule().then(m => ({default: m.AIAgentsPage})));
const SoftwareOpMaatPage = lazy(() => dienstModule().then(m => ({default: m.SoftwareOpMaatPage})));
const KlantportaalPage = lazy(() => dienstModule().then(m => ({default: m.KlantportaalPage})));
const AVGProofPage = lazy(() => dienstModule().then(m => ({default: m.AVGProofPage})));
const OnderhoudSupportPage = lazy(() => dienstModule().then(m => ({default: m.OnderhoudSupportPage})));

// SEO Landingspagina's — niet in navbar, blijven voorlopig alleen NL
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage.jsx"));

// ── Laadscherm tijdens lazy load ──────────────────────────────────────────────
function PageLoader() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: '#080808',
        }}>
            <div style={{
                width: '32px',
                height: '32px',
                border: '2px solid #1a1a1a',
                borderTop: '2px solid #4dffc3',
                borderRadius: '50%',
                animation: 'spin 0.7s linear infinite',
            }}/>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
    return (
        <>
            <LanguageSync/>
            <ScrollToTop/>
            <CookieBanner/>
            <AnalyticsTracker/>
            <ChatWidget/>

            <Suspense fallback={<PageLoader/>}>
                <Routes>

                    {/* ══════════════════════════════════════════════════════
                        Nederlands (standaard, geen prefix)
                    ══════════════════════════════════════════════════════ */}

                    {/* Algemeen */}
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/diensten" element={<Diensten/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/portfolio/:slug" element={<ProjectPage/>}/>
                    <Route path="/over-ons" element={<AboutUs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/offerte-aanvragen" element={<OfferteAanvragen/>}/>
                    <Route path="/faq" element={<FAQPage/>}/>
                    <Route path="/oosterom-os" element={<OosteromOS/>}/>

                    {/* Blog */}
                    <Route path="/blog" element={<BlogOverview/>}/>
                    <Route path="/blog/:slug" element={<BlogPost/>}/>

                    {/* Dienstpagina's */}
                    <Route path="/diensten/webdesign" element={<WebdesignPage/>}/>
                    <Route path="/diensten/webdevelopment" element={<WebdevelopmentPage/>}/>
                    <Route path="/diensten/saas" element={<SaasPage/>}/>
                    <Route path="/diensten/branding" element={<BrandingPage/>}/>
                    <Route path="/diensten/ai-agents" element={<AIAgentsPage/>}/>
                    <Route path="/diensten/software-op-maat" element={<SoftwareOpMaatPage/>}/>
                    <Route path="/diensten/klantportaal" element={<KlantportaalPage/>}/>
                    <Route path="/diensten/avg-proof-website" element={<AVGProofPage/>}/>
                    <Route path="/diensten/onderhoud-support" element={<OnderhoudSupportPage/>}/>

                    {/* SEO Landingspagina's — niet in navbar, voorlopig alleen NL */}
                    <Route path="/l/:slug" element={<LandingPage/>}/>


                    {/* ══════════════════════════════════════════════════════
                        Español (/es/ prefix)
                        Zelfde pagina's, dezelfde componenten  de component
                        zelf toont Spaanse tekst via i18next (useTranslation),
                        gestuurd door LanguageSync op basis van de URL.
                    ══════════════════════════════════════════════════════ */}

                    <Route path="/es" element={<Homepage/>}/>
                    <Route path="/es/diensten" element={<Diensten/>}/>
                    <Route path="/es/portfolio" element={<Portfolio/>}/>
                    <Route path="/es/portfolio/:slug" element={<ProjectPage/>}/>
                    <Route path="/es/sobre-nosotros" element={<AboutUs/>}/>
                    <Route path="/es/contacto" element={<Contact/>}/>
                    <Route path="/es/solicitar-presupuesto" element={<OfferteAanvragen/>}/>
                    <Route path="/es/faq" element={<FAQPage/>}/>
                    <Route path="/es/oosterom-os" element={<OosteromOS/>}/>

                    <Route path="/es/blog" element={<BlogOverview/>}/>
                    <Route path="/es/blog/:slug" element={<BlogPost/>}/>

                    <Route path="/es/servicios/diseno-web" element={<WebdesignPage/>}/>
                    <Route path="/es/servicios/desarrollo-web" element={<WebdevelopmentPage/>}/>
                    <Route path="/es/servicios/saas" element={<SaasPage/>}/>
                    <Route path="/es/servicios/branding" element={<BrandingPage/>}/>
                    <Route path="/es/servicios/agentes-ia" element={<AIAgentsPage/>}/>
                    <Route path="/es/servicios/software-a-medida" element={<SoftwareOpMaatPage/>}/>
                    <Route path="/es/servicios/portal-cliente" element={<KlantportaalPage/>}/>
                    <Route path="/es/servicios/sitio-web-rgpd" element={<AVGProofPage/>}/>
                    <Route path="/es/servicios/mantenimiento-soporte" element={<OnderhoudSupportPage/>}/>


                    {/* 404 — altijd als laatste */}
                    <Route path="*" element={<NotFound/>}/>

                </Routes>
            </Suspense>
        </>
    );
}

export default App;