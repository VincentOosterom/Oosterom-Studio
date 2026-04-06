import './App.css'
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Altijd direct laden — staan op elke pagina
import ScrollToTop from "./components/scrollToTop/ScrollToTop.jsx";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker.jsx";
import CookieBanner from "./components/cookies/CookiesBanner.jsx";

// Lazy laden — alleen als bezoeker naar die pagina gaat
const Homepage           = lazy(() => import("./pages/Homepage/Homepage.jsx"));
const Diensten           = lazy(() => import("./pages/Diensten/Diensten.jsx"));
const Contact            = lazy(() => import("./pages/Contact/Contact.jsx"));
const OfferteAanvragen   = lazy(() => import("./pages/Offerte Aanvragen/OfferteAanvragen.jsx"));
const NotFound           = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const Portfolio          = lazy(() => import("./pages/Portfolio/Portfolio.jsx"));
const AboutUs            = lazy(() => import("./pages/Over Ons/OverOns.jsx"));
const ProjectPage        = lazy(() => import("./pages/ProjectPage/ProjectPage.jsx"));
const WebdesignPage      = lazy(() => import("./pages/DienstPage/DienstPages.jsx").then(m => ({ default: m.WebdesignPage })));
const WebdevelopmentPage = lazy(() => import("./pages/DienstPage/DienstPages.jsx").then(m => ({ default: m.WebdevelopmentPage })));
const SaasPage           = lazy(() => import("./pages/DienstPage/DienstPages.jsx").then(m => ({ default: m.SaasPage })));
const BrandingPage       = lazy(() => import("./pages/DienstPage/DienstPages.jsx").then(m => ({ default: m.BrandingPage })));

// Loading spinner terwijl pagina laadt
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
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

function App() {
    return (
        <>
            <ScrollToTop />
            <CookieBanner />
            <AnalyticsTracker />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/"                     element={<Homepage />} />
                    <Route path="/diensten"             element={<Diensten />} />
                    <Route path="/contact"              element={<Contact />} />
                    <Route path="/portfolio"            element={<Portfolio />} />
                    <Route path="/over-ons"             element={<AboutUs />} />
                    <Route path="/offerte-aanvragen"    element={<OfferteAanvragen />} />
                    <Route path="/diensten/webdesign"   element={<WebdesignPage />} />
                    <Route path="/diensten/webdevelopment" element={<WebdevelopmentPage />} />
                    <Route path="/diensten/saas"        element={<SaasPage />} />
                    <Route path="/diensten/branding"    element={<BrandingPage />} />
                    <Route path="/portfolio/:slug"      element={<ProjectPage />} />
                    <Route path="*"                     element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;