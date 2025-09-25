import { useEffect } from "react";

const ScrollToTop = ({ dependency }) => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [dependency]);

    return null;
};

export default ScrollToTop;
