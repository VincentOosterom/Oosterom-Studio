import './movingBar.css';

// ── Items ─────────────────────────────────────────────────────────────────────
// Voeg hier items toe of verwijder ze — de bar past zich automatisch aan

const items = [
    "Webdesign",
    "Webdevelopment",
    "SEO",
    "SEA",
    "AI Agents",
    "UI/UX",
    "Webshops",
    "Branding",
    "Software op maat",
    "Digitale strategie",
];

// ── Component ─────────────────────────────────────────────────────────────────

function MovingBar() {
    return (
        <section className="moving-bar" aria-hidden="true">
            <div className="moving-track">

                {/* Twee identieke tracks naast elkaar voor een naadloze loop */}
                {[0, 1].map((key) => (
                    <div className="track" key={key}>
                        {items.map((item, i) => (
                            <span key={i} className="track__item">
                                <span className="track__dot" />
                                {item}
                            </span>
                        ))}
                    </div>
                ))}

            </div>
        </section>
    );
}

export default MovingBar;