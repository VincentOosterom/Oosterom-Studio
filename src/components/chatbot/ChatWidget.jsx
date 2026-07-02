import { useState, useRef, useEffect } from 'react'
import styles from './ChatWidget.module.css'
import assistantAvatar from '../../assets/images/oosterom_assistant_avatar.svg'

const WELKOMST_BERICHT = {
    role: 'assistant',
    content: 'Hi! Ik ben de digitale assistent van Oosterom Studio. Hoe kan ik je helpen?'
}

const SUGGESTIONS = [
    'Wat doet Oosterom Studio?',
    'Wat zijn de tarieven?',
    'Hoe neem ik contact op?',
]

function maakSessieId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export default function ChatWidget() {
    const [open, setOpen]                       = useState(false)
    const [berichten, setBerichten]             = useState([WELKOMST_BERICHT])
    const [input, setInput]                     = useState('')
    const [laden, setLaden]                     = useState(false)
    const [toonSuggestions, setToonSuggestions] = useState(true)

    const sessieId    = useRef(maakSessieId())
    const berichtenRef = useRef(null)
    const inputRef    = useRef(null)

    // Scroll naar nieuwste bericht
    useEffect(() => {
        if (berichtenRef.current) {
            berichtenRef.current.scrollTop = berichtenRef.current.scrollHeight
        }
    }, [berichten, laden])

    // Focus op input als chat opent
    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [open])

    // Sluit chat met Escape-toets
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    async function stuurBericht(tekst) {
        if (!tekst.trim() || laden) return

        const gebruikersBericht = { role: 'user', content: tekst }
        const nieuweBerichten   = [...berichten, gebruikersBericht]

        setBerichten(nieuweBerichten)
        setInput('')
        setLaden(true)
        setToonSuggestions(false)

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    berichten: nieuweBerichten.filter(b => b.role !== 'system'),
                    sessieId: sessieId.current
                })
            })

            const data = await response.json()
            const antwoord = data.antwoord || 'Er is iets misgegaan. Probeer het opnieuw.'

            setBerichten(prev => [...prev, { role: 'assistant', content: antwoord }])
        } catch {
            setBerichten(prev => [...prev, {
                role: 'assistant',
                content: 'Er is een verbindingsfout opgetreden. Probeer het later opnieuw.'
            }])
        }

        setLaden(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        stuurBericht(input)
    }

    return (
        <>
            {/* Toggle knop */}
            <button
                className={styles.toggleBtn}
                onClick={() => setOpen(v => !v)}
                aria-label={open ? 'Sluit chat' : 'Open chat'}
                aria-expanded={open}
            >
                {open ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <img src={assistantAvatar} alt="" className={styles.toggleAvatar} aria-hidden="true" />
                )}
            </button>

            {/* Chat panel */}
            {open && (
                <div
                    className={styles.panel}
                    role="dialog"
                    aria-label="Chat met Oosterom Studio"
                >
                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.headerAvatarWrap}>
                            <img src={assistantAvatar} alt="Assistent" className={styles.headerAvatarImg} />
                        </div>
                        <div className={styles.headerInfo}>
                            <span className={styles.headerName}>Oosterom Studio</span>
                            <span className={styles.headerStatus}>
                                <span className={styles.statusDot} aria-hidden="true" />
                                Online
                            </span>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setOpen(false)}
                            aria-label="Sluit chat"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Berichtenlijst */}
                    <div className={styles.messages} ref={berichtenRef}>
                        {berichten.map((bericht, i) => (
                            <div
                                key={i}
                                className={`${styles.msgRow} ${bericht.role === 'user' ? styles.msgRowUser : styles.msgRowBot}`}
                            >
                                {bericht.role === 'assistant' && (
                                    <div className={styles.msgAvatar} aria-hidden="true">
                                        <img src={assistantAvatar} alt="" className={styles.msgAvatarImg} />
                                    </div>
                                )}
                                <div className={bericht.role === 'user' ? styles.bubbleUser : styles.bubbleBot}>
                                    {bericht.content}
                                </div>
                            </div>
                        ))}

                        {/* Laad-animatie */}
                        {laden && (
                            <div className={`${styles.msgRow} ${styles.msgRowBot}`} aria-label="Assistent typt…">
                                <div className={styles.msgAvatar} aria-hidden="true">
                                    <img src={assistantAvatar} alt="" className={styles.msgAvatarImg} />
                                </div>
                                <div className={styles.typingDots}>
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Snelle suggesties */}
                    {toonSuggestions && !laden && (
                        <div className={styles.suggestions}>
                            {SUGGESTIONS.map(s => (
                                <button
                                    key={s}
                                    className={styles.suggestionBtn}
                                    onClick={() => stuurBericht(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <form className={styles.inputArea} onSubmit={handleSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Stel een vraag…"
                            disabled={laden}
                            className={styles.input}
                            aria-label="Typ je bericht"
                        />
                        <button
                            type="submit"
                            disabled={laden || !input.trim()}
                            className={styles.sendBtn}
                            aria-label="Verstuur bericht"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}