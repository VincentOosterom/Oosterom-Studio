import {Link} from "react-router-dom";
import './IntentSection.css'

function intentSection() {
    return (
        <>
            <section className="intent-section">
                <article className="intent-container">

                    <article className="intent-left">
                        <span className="intent-eyebrow">Om te beginnen</span>
                        <h2>
                            Waar ben <span>jij</span> naar op zoek?
                        </h2>
                        <p>
                            Of je nu een nieuwe website wilt laten bouwen, je huidige design wilt verbeteren
                            of meer resultaat uit je online aanwezigheid wilt halen — wij denken met je mee
                            en bouwen oplossingen die écht werken.
                        </p>
                    </article>


                    <div className="intent-right">
                        <div className="intent-card">🚀 Nieuwe website</div>
                        <div className="intent-card">🎨 Huidig design verbeteren</div>
                        <div className="intent-card">📈 Meer conversie behalen</div>
                        <div className="intent-card">🔍 Beter vindbaar worden</div>
                        <div className="intent-card disabled">✨ Nieuwe branding</div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default intentSection;