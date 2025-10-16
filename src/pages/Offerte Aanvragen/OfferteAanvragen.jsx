import React, { useState } from "react";
import './OfferteAanvragen.css';
import { motion } from "framer-motion";
import Navigate from "../../components/Navigate/Navigate.jsx"; //
import {Helmet} from "react-helmet-async";

function OfferteAanvragen() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Verzonden:", formData);
        alert("Bedankt voor je aanvraag! We nemen spoedig contact op.");
        setFormData({ name: "", email: "", service: "", budget: "", message: "" }); // reset form
    };

    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Offerte Aanvragen</title>
                <meta
                    name="description"
                    content="Vraag een offerte aan bij Oosterom Studio. Vertel wat je nodig hebt en ontvang snel een professionele prijsopgave."
                />
                <meta name="keywords" content="offerte, prijsopgave, webdevelopment, webdesign, Oosterom Studio" />
                <meta property="og:title" content="Oosterom Studio | Offerte Aanvragen" />
                <meta property="og:description" content="Snel en eenvoudig een offerte aanvragen voor jouw project." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/offerte-aanvragen" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Navigate />

            {/* Offerte formulier */}
            <section id="offerte">
                <motion.div
                    className="offerte-container"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Offerte aanvragen</h2>
                    <p>Vertel ons wat je nodig hebt, we reageren binnen 24 uur.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Naam *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Waar ben je naar op zoek?</option>
                            <option value="design">Webdesign (Figma)</option>
                            <option value="development">Webdevelopment</option>
                            <option value="complete">Complete website (design + build)</option>
                        </select>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                        >
                            <option value="">Geschat budget</option>
                            <option value="500-1500">€500 – €1.500</option>
                            <option value="1500-3000">€1.500 – €3.000</option>
                            <option value="3000-plus">€3.000+</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Vertel kort over je project *"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Verstuur aanvraag</button>
                    </form>
                </motion.div>
            </section>
        </>
    );
}

export default OfferteAanvragen;
