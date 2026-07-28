import {Link} from "react-router-dom";
import "./PakketCta.css";

function PakketCta({
                       achtergrond,
                       scriptTekst = "Van A tot Z",
                       titelWit = "Wij helpen jou met het",
                       titelAccent = "hele pakket!",
                       tekst,
                       primaireKnopTekst = "Maak kennis met ons",
                       primaireKnopLink = "/contact",
                       secundaireKnopTekst = "Bekijk onze werkwijze",
                       secundaireKnopLink = "/over-ons",
                   }) {
    return (
        <section className="pakket-cta">
            <div
                className="pakket-cta__bg"
                style={achtergrond ? {backgroundImage: `url(${achtergrond})`} : undefined}
            >
                <div className="pakket-cta__overlay" aria-hidden="true"/>

                <div className="pakket-cta__content">
                    <span className="pakket-cta__script">{scriptTekst}</span>

                    <h2 className="pakket-cta__title">
                        {titelWit} <span className="pakket-cta__title-accent">{titelAccent}</span>
                    </h2>

                    <p className="pakket-cta__text">{tekst}</p>

                    <div className="pakket-cta__buttons">
                        <Link to={primaireKnopLink} className="pakket-cta__btn pakket-cta__btn--solid">
                            {primaireKnopTekst}
                        </Link>
                        <Link to={secundaireKnopLink} className="pakket-cta__btn pakket-cta__btn--outline">
                            {secundaireKnopTekst}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PakketCta;