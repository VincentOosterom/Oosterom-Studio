import { useState, useRef, useEffect } from "react";
import styles from "./ChatWidget.module.css";
import assistantAvatar from "../../assets/oosterom_assistant_avatar.svg";

const SYSTEM_PROMPT = `Je bent de professionele digitale assistent van Oosterom Studio, een Nederlands webburo gespecialiseerd in webdesign, webontwikkeling, SEO en digitale strategie voor MKB-bedrijven en startups. Je communiceert altijd in het Nederlands, professioneel en zakelijk maar toegankelijk.

Over Oosterom Studio:
- Opgericht door Vincent Oosterom, KvK: 85118028, gevestigd in Alphen aan den Rijn
- Diensten: webdesign (React, WordPress), SEO-optimalisatie, maandelijks onderhoud en retainers, digitale strategie, cybersecurity
- Klanten: MKB-bedrijven en startups in Nederland
- Werkwijze: persoonlijk contact, maatwerk, geen standaard templates
- Contact: via de website of WhatsApp

Richtlijnen:
- Beantwoord vragen over webdesign, SEO, onderhoud, prijzen, werkwijze en digitale strategie
- Voor specifieke prijsopgaves: verwijs naar een vrijblijvend gesprek
- Beantwoord ook algemene vragen over webtechnologie, SEO, marketing en digitale business
- Wees bondig maar volledig — maximaal 3 à 4 zinnen per antwoord tenzij meer detail nodig is
- Gebruik geen markdown in je antwoorden, schrijf in gewone tekst
- Sluit complexe vragen af met een suggestie om contact op te nemen`;

const SUGGESTIONS = [
    "Wat doet Oosterom Studio?",
    "Wat zijn de tarieven?",
    "Hoe neem ik contact op?",
];

const EDGE_FUNCTION_URL =
    "https://avocqybnotohdiqspket.supabase.co/functions/v1/chat-proxy";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "bot",
            text: "Goedendag! Ik ben de digitale assistent van Oosterom Studio. Hoe kan ik u assisteren?",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [history, setHistory] = useState([]);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 100);
    }, [open]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const send = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || loading) return;

        setShowSuggestions(false);
        setInput("");
        setLoading(true);

        const newHistory = [...history, { role: "user", content: trimmed }];
        setHistory(newHistory);
        setMessages((prev) => [...prev, { role: "user", text: trimmed }]);

        try {
            const res = await fetch(EDGE_FUNCTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({ system: SYSTEM_PROMPT, messages: newHistory }),
            });

            const data = await res.json();
            const reply =
                data.content?.[0]?.text || "Er is iets misgegaan. Probeer het opnieuw.";

            setMessages((prev) => [...prev, { role: "bot", text: reply }]);
            setHistory((prev) => [...prev, { role: "assistant", content: reply }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Er is een verbindingsfout opgetreden. Probeer het later opnieuw.",
                },
            ]);
        }

        setLoading(false);
    };

    const handleKey = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
    };

    return (
        <>
            {/* Toggle button */}
            <button
                className={styles.toggleBtn}
                onClick={() => setOpen((v) => !v)}
                aria-label="Open chat"
            >
                {open ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <img src={assistantAvatar} alt="Assistent" className={styles.toggleAvatar} />
                )}
            </button>

            {open && (
                <div className={styles.panel}>

                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.headerAvatarWrap}>
                            <img src={assistantAvatar} alt="Assistent" className={styles.headerAvatarImg} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className={styles.headerName}>Oosterom Studio</div>
                            <div className={styles.headerStatus}>
                                <span className={styles.statusDot} />
                                Online
                            </div>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setOpen(false)}
                            aria-label="Sluit chat"
                        > X
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.messages}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`${styles.msgRow} ${msg.role === "user" ? styles.msgRowUser : styles.msgRowBot}`}
                            >
                                {msg.role === "bot" && (
                                    <div className={styles.msgAvatar}>
                                        <img src={assistantAvatar} alt="Assistent" className={styles.msgAvatarImg} />
                                    </div>
                                )}
                                <div className={msg.role === "user" ? styles.bubbleUser : styles.bubbleBot}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className={styles.msgRow}>
                                <div className={styles.msgAvatar}>
                                    <img src={assistantAvatar} alt="Assistent" className={styles.msgAvatarImg} />
                                </div>
                                <div className={styles.typingDots}>
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && (
                        <div className={styles.suggestions}>
                            {SUGGESTIONS.map((s) => (
                                <button key={s} className={styles.suggestionBtn} onClick={() => send(s)}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className={styles.inputArea}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKey}
                            placeholder="Stel een vraag..."
                            disabled={loading}
                            className={styles.input}
                        />
                        <button
                            onClick={() => send(input)}
                            disabled={loading || !input.trim()}
                            className={styles.sendBtn}
                        > Verstuur
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>

                </div>
            )}
        </>
    );
}