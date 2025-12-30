import './App.css'
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Diensten from "./pages/Diensten/Diensten.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import OfferteAanvragen from "./pages/Offerte Aanvragen/OfferteAanvragen.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import AboutUs from "./pages/Over Ons/OverOns.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/diensten" element={<Diensten />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/over-ons" element={<AboutUs />}/>
                <Route path="/offerte-aanvragen" element={<OfferteAanvragen />}/>
                <Route path="/portfolio/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound/>}/>

            </Routes>
        </>
    )
}

export default App
