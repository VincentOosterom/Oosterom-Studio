import React, {useState} from 'react';
import {color, motion} from 'framer-motion';
import './Contact.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";
import Footer from "../../components/Footer/Footer.jsx";
import algemene from "../../assets/Algemene Voorwaarden - Oosterom Studio.pdf";

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/mzzjyoko", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setFormData({name: "", company: "", email: "", message: ""});
        } else {
            setError("Er is iets mis gegaan. Probeer het opnieuw")
        }
        setIsSubmitted(true);
    };


    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Contact</title>
                <meta
                    name="description"
                    content="Neem contact op met Oosterom Studio voor vragen, samenwerkingen of projecten. Snel antwoord gegarandeerd."
                />
                <meta name="keywords"
                      content="contact, vragen, samenwerking, website, SEO, Oosterom Studio, webdevelopment"/>
                <meta property="og:title" content="Oosterom Studio | Contact"/>
                <meta property="og:description" content="Bereik Vincent Oosterom voor jouw webproject of vraag."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.oosteromstudio.nl/contact"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>

            <Navigate/>
            <section className="contact-layout">
                <article className="contact-info">
                    <h2>Neem contact op</h2>
                    <p>
                        Heb je een idee, project of vraag?
                        Vul het formulier in en we nemen snel contact met je op.
                    </p>
                    <article className="contact-details">
                        <p><strong>E-mail</strong>vincent@oosteromstudio.nl</p>
                        <p><strong>Reactietijd</strong>Binnen 24 uur</p>
                    </article>
                    <article className="company-details">
                        <h3>Oosterom Studio is onderdeel van Oosterom Creative</h3>
                        <div className="company-details-extra">
                            <p><strong>KVK Nummer:</strong><br/>85118028</p>
                            <p><strong>BTW Nummer</strong><br/>NL004057297B50</p>
                            <a href={algemene} target="_blank" rel="noopener noreferrer" className="document-link">
                                Algemene Voorwaarden
                            </a>
                        </div>
                    </article>
                </article>

                {!isSubmitted ? (
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <h2>Contactformulier</h2>
                        {error && <p>{error}</p>}
                        <p className="warning">Let op! Velden met * zijn verplicht</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Volledige naam *"
                            value={formData.name}
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

                        <input
                            type="email"
                            name="email"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Waar kunnen we je bij helpen? *"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        />

                        <button type="submit">Verstuur bericht</button>
                    </motion.form>
                ) : (
                    <div className="thank-you-message">
                        <h2>Bedankt!</h2>
                        <p>We nemen zo snel mogelijk contact met je op.</p>
                    </div>
                )}
            </section>

            <Footer/>
        </>
    );
}

export default Contact;
