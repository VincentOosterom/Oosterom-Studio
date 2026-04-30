import {Link} from "react-router-dom";
import './IntentSection.css'

function intentSection() {
    return (
        <>
            <section className="intent-section">
                <article className="intent-container">

                    <article className="intent-left">
                        <div className="streepje"></div>
                        <h2>Manifest</h2>
                        <p>
                            Wat ik lever moet er uitzien als een doordacht product, en zich gedragen als een <span className="color-primary">kluis</span>. Geen overhead, geen tussenlagen, één ervaren engineer die met je meedenkt, code schrijft die je over drie jaar nog wil onderhouden, en security niet achteraf opplakt maar in de fundering legt.
                        </p>

                    </article>
                </article>
            </section>
        </>
    )
}

export default intentSection;