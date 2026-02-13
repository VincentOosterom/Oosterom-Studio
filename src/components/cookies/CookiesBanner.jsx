import { useState, useEffect } from "react";
import './CookiesBanner.css';

function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
        loadAnalytics();
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    };

    const loadAnalytics = () => {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-7DMJQ7CW4L";
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", "G-7DMJQ7CW4L");
    };



    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <p>
                Wij gebruiken cookies om onze website te verbeteren en statistieken te
                analyseren.
            </p>
            <button onClick={acceptCookies}>Accepteren</button>
            <button onClick={declineCookies}>Weigeren</button>
        </div>
    );
}

export default CookieBanner;
