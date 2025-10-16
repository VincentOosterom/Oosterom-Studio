import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './Contact.css';
import Navigate from "../../components/Navigate/Navigate.jsx";
import {Helmet} from "react-helmet-async";


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Bedankt voor je bericht! We nemen snel contact op.');
        setFormData({name: '', email: '', message: ''});
        // Hier kun je EmailJS of FormSubmit integreren
    };

    return (
        <>
            <Helmet>
                <title>Oosterom Studio | Contact</title>
                <meta
                    name="description"
                    content="Neem contact op met Oosterom Studio voor vragen, samenwerkingen of projecten. Snel antwoord gegarandeerd."
                />
                <meta name="keywords" content="contact, vragen, samenwerking, Oosterom Studio, webdevelopment" />
                <meta property="og:title" content="Oosterom Studio | Contact" />
                <meta property="og:description" content="Bereik Vincent Oosterom voor jouw webproject of vraag." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.oosteromstudio.nl/contact" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Navigate/>

            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <motion.h2
                        className="contact-title"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        Contact
                    </motion.h2>

                    <motion.p
                        className="contact-subtitle"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Heb je een vraag of wil je een project bespreken? Vul het formulier in en we nemen snel contact
                        op.
                    </motion.p>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <motion.input
                            type="text"
                            name="name"
                            placeholder="Volledige naam *"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input"
                            variants={{
                                hidden: {opacity: 0, y: 30},
                                visible: {opacity: 1, y: 0, transition: {delay: 0.1}},
                            }}
                            required
                        />
                        <motion.input
                            type="text"
                            name="Company-Name"
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
                        <motion.input
                            type="email"
                            name="email"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-input"
                            variants={{
                                hidden: {opacity: 0, y: 30},
                                visible: {opacity: 1, y: 0, transition: {delay: 0.2}},
                            }}
                            required
                        />
                        <motion.textarea
                            name="message"
                            placeholder="Uw bericht *"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="contact-textarea"
                            variants={{
                                hidden: {opacity: 0, y: 30},
                                visible: {opacity: 1, y: 0, transition: {delay: 0.3}},
                            }}
                            required
                        />
                        <motion.button
                            type="submit"
                            className="contact-btn"
                            variants={{
                                hidden: {opacity: 0, y: 20},
                                visible: {opacity: 1, y: 0, transition: {delay: 0.4}},
                            }}
                        >
                            Verstuur
                        </motion.button>
                    </motion.form>
                </div>
            </section>
        </>
    );
}

export default Contact;
