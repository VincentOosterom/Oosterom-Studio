import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './OfferteAanvragen.css';
import Navigate from "../../components/navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";

function OfferteAanvragen() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        service: "",
        budget: "",
        message: ""
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/mldpazoo", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setFormData({name: "", email: "", service: "", budget: "", message: ""});
        } else {
            alert("Er is iets misgegaan, probeer het later opnieuw.");
        }
        setIsSubmitted(true);
    };

    return (
        <>
            <Helmet>
                <title>
                    Strategiegesprek aanvragen | Oosterom Studio
                </title>

                <meta
                    name="description"
                    content="Plan een vrijblijvend strategiegesprek met Oosterom Studio. Wij analyseren jouw digitale uitdaging en ontwikkelen een maatwerk voorstel voor schaalbare weboplossingen."
                />

                <meta property="og:title" content="Strategiegesprek aanvragen | Oosterom Studio" />

                <meta
                    property="og:description"
                    content="Bespreek jouw digitale doelen en ontvang een maatwerk voorstel voor een schaalbare en toekomstbestendige oplossing."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/offerte-aanvragen" />

                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>


            <Navigate/>

            <section className="offerte-layout">
                <article className="offerte-info">
                    <h2>Offerte aanvragen</h2>
                    <p>
                        Vertel ons wat je nodig hebt.
                        Op basis van je wensen ontvang je binnen 24 uur een vrijblijvende offerte.
                    </p>

                    <div className="offerte-details">
                        <p><strong>Reactietijd</strong>Binnen 24 uur</p>
                        <p><strong>Vrijblijvend</strong>Geen verplichtingen</p>
                    </div>
                </article>

                {!isSubmitted ? (
                    <motion.form
                        className="offerte-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2>Offerte aanvragen</h2>
                        <p className="warning">Let op! Velden met * zijn verplicht</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Naam *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="company"
                            placeholder="Bedrijfsnaam"
                            value={formData.company}
                            onChange={handleChange}
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
                            <option value="complete">Complete website</option>
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
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        />

                        <button type="submit">Verstuur aanvraag</button>
                    </motion.form>
                ) : (
                    <div className="thank-you-message">
                        <h2>Bedankt voor je aanvraag</h2>
                        <p>We nemen zo snel mogelijk contact met je op.</p>
                    </div>
                )}
            </section>

            <Footer/>
        </>
    );
}

export default OfferteAanvragen;
