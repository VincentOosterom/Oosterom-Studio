import {Link} from "react-router-dom";
import './IntentSection.css'

function intentSection() {
    return (
        <>
            <section className="intent-section">
                <article className="intent-container">

                    <article className="intent-left">
                        <span className="intent-eyebrow">Digitale groei</span>
                        <div className="streepje"></div>
                        <h2>
                            Welke <span>digitale uitdaging</span> wil jij oplossen?
                        </h2>
                        <p>
                            Of je nu een schaalbare website wilt ontwikkelen, je online prestaties wilt verbeteren
                            of processen wilt automatiseren — wij denken strategisch met je mee en bouwen
                            oplossingen die meetbaar bijdragen aan groei.
                        </p>

                    </article>


                    <div className="intent-right">
                        <div className="intent-card">⚙️ Schaalbare website ontwikkelen</div>
                        <div className="intent-card">🛒 Conversiegerichte webshop bouwen</div>
                        <div className="intent-card">📈 Online prestaties optimaliseren</div>
                        <div className="intent-card">🔎 Technische SEO verbeteren</div>
                        <div className="intent-card">🔗 Processen automatiseren</div>

                    </div>
                </article>
            </section>
        </>
    )
}

export default intentSection;