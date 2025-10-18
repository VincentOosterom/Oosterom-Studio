import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './OfferteAanvragen.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";

function OfferteAanvragen() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
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
                <title>Oosterom Studio | Offerte Aanvragen</title>
                <meta
                    name="description"
                    content="Vraag een offerte aan bij Oosterom Studio. Vertel wat je nodig hebt en ontvang snel een professionele prijsopgave."
                />
                <meta name="keywords" content="offerte, prijsopgave, webdevelopment, webdesign, Oosterom Studio"/>
                <meta property="og:title" content="Oosterom Studio | Offerte Aanvragen"/>
                <meta property="og:description" content="Snel en eenvoudig een offerte aanvragen voor jouw project."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/offerte-aanvragen"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>

            <Navigate/>

            <section id="offerte" className="offerte-section">
                <div className="offerte-container">
                    <motion.h2
                        className="offerte-title"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        Offerte aanvragen
                    </motion.h2>

                    <motion.p
                        className="offerte-subtitle"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Vertel wat je nodig hebt, we reageren binnen 24 uur.
                    </motion.p>

                    {!isSubmitted ? (
                            <motion.form
                                className="offerte-form"
                                onSubmit={handleSubmit}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                            >
                                <motion.input
                                    type="text"
                                    name="name"
                                    placeholder="Naam *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="offerte-input"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.1}},
                                    }}
                                    required
                                />
                                <motion.input
                                    type="email"
                                    name="email"
                                    placeholder="E-mailadres *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="offerte-input"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.2}},
                                    }}
                                    required
                                />
                                <motion.input
                                    type="text"
                                    name="company"
                                    placeholder="Bedrijfsnaam"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="contact-input"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.2}},
                                    }}
                                    required
                                />
                                <motion.select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="offerte-input"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.3}},
                                    }}
                                    required
                                >
                                    <option value="">Waar ben je naar op zoek?</option>
                                    <option value="design">Webdesign (Figma)</option>
                                    <option value="development">Webdevelopment</option>
                                    <option value="complete">Complete website (design + build)</option>
                                </motion.select>
                                <motion.select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="offerte-input"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.4}},
                                    }}
                                >
                                    <option value="">Geschat budget</option>
                                    <option value="500-1500">€500 – €1.500</option>
                                    <option value="1500-3000">€1.500 – €3.000</option>
                                    <option value="3000-plus">€3.000+</option>
                                </motion.select>
                                <motion.textarea
                                    name="message"
                                    placeholder="Vertel kort over je project *"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="offerte-textarea"
                                    variants={{
                                        hidden: {opacity: 0, y: 30},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.5}},
                                    }}
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    className="offerte-btn"
                                    variants={{
                                        hidden: {opacity: 0, y: 20},
                                        visible: {opacity: 1, y: 0, transition: {delay: 0.6}},
                                    }}
                                >
                                    Verstuur aanvraag
                                </motion.button>
                            </motion.form>) : (
                        <div className="thank-you-message">
                            <h2>Bedankt voor uw offerte aanvraag!</h2>
                            <p>We nemen zo snel mogelijk contact met u op.</p>
                        </div>
                        )}
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default OfferteAanvragen;
