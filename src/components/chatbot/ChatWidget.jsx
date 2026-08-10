import { useState, useRef, useEffect } from 'react'
import styles from './ChatWidget.module.css'
import assistantAvatar from '../../assets/images/oosterom_assistant_avatar.svg'

const WELKOMST_BERICHT = {
    role: 'assistant',
    content: 'Hi! Leuk dat je er bent. Ik ben de digitale AI hulp van Oosterom Studio. Kan ik je ergens mee helpen? Je kunt ook een keuze maken uit één van de onderstaande buttons'
}

const SUGGESTIONS = [
    'Wat doet Oosterom Studio?',
    'Wat zijn de tarieven?',
    'Hoe neem ik contact op?',
]

function maakSessieId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// ── Linkify: zet kale URLs in tekst om naar klikbare links ──────────────────
// Herkent https://... en www... en maakt er een <a target="_blank"> van.
// De rest van de tekst blijft platte tekst, zoals de bot 'm aanlevert.
const URL_REGEX = /(https?:\/\/[^\s]+|www\.[^\s]+)/g

function linkifyContent(tekst) {
    const delen = tekst.split(URL_REGEX)

    return delen.map((deel, i) => {
        if (!deel) return null

        if (URL_REGEX.test(deel)) {
            // reset lastIndex omdat de regex 'g' flag heeft en test() state bijhoudt
            URL_REGEX.lastIndex = 0
            const href = deel.startsWith('www.') ? `https://${deel}` : deel

            return (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.msgLink}
                >
                    {deel}
                </a>
            )
        }

        URL_REGEX.lastIndex = 0
        return <span key={i}>{deel}</span>
    })
}

export default function ChatWidget() {
    const [open, setOpen]                       = useState(false)
    const [berichten, setBerichten]             = useState([WELKOMST_BERICHT])
    const [input, setInput]                     = useState('')
    const [laden, setLaden]                     = useState(false)
    const [toonSuggestions, setToonSuggestions] = useState(true)
    const sessieId     = useRef(maakSessieId())
    const berichtenRef = useRef(null)
    const inputRef      = useRef(null)

    // Scroll naar nieuwste bericht
    useEffect(() => {
        if (berichtenRef.current) {
            berichtenRef.current.scrollTop = berichtenRef.current.scrollHeight
        }
    }, [berichten, laden])

    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [open])


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
                                Ik ben er voor je!
                            </span>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setOpen(false)}
                            aria-label="Sluit chat"
                        >
                            Sluiten
                        </button>
                    </div>


                    <div
                        className={styles.messages}
                        ref={berichtenRef}
                        aria-live="polite"
                        aria-atomic="false"
                    >
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
                                    {bericht.role === 'assistant'
                                        ? linkifyContent(bericht.content)
                                        : bericht.content}
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
                          Verstuur
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}