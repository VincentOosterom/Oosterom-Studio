import './Header.css'
import Navigate from "../navigate/Navigate.jsx";
import {useNavigate} from "react-router-dom";

function Header({title, subtitle, buttonText}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/offerte-aanvragen");
    }

    return (
        <>
            <header className="header">
                <Navigate/>
                <section className="header-content">
                    <article className="content-left">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        {buttonText && (
                            <div className="call-to-action-btn">
                                <button onClick={handleClick}>{buttonText}</button>
                            </div>
                        )}
                    </article>
                </section>
            </header>
        </>
    )
}

export default Header