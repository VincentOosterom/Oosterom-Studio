import './Header.css'
import Navigate from "../Navigate/Navigate.jsx";
import headerImage  from "../../assets/header-image.jpg";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function goToOfferte(){
        navigate("/offerte-aanvragen");
    }
    return (
        <>
            <header className="header">
                <Navigate/>
                <div className="header-content">
                    <div className="content-left">
                        <h1>Wij bouwen digitale ervaringen die indruk maken.</h1>
                        <p>Van strak design in Figma tot razendsnelle React-websites — bij Oosterom Studio komt
                            creativiteit en code samen.</p>
                        <div className="call-to-action-btn">
                            <button onClick={goToOfferte}>Ontvang een gratis offerte</button>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src={headerImage} alt=""/>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header