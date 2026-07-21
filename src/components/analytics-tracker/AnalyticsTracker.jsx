import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        window.gtag("config", "G-7DMJQ7CW4L", {
            page_path: location.pathname,
        });
    }, [location]);

    return null;
}

export default AnalyticsTracker;
