import { useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Captcha from "./Captcha";
import Footer from "./Footer";
import NavBar from "./nav/NavBar";
import ReusableModal from "./ReusableModal";
import ScrollToTop from "./ScrollToTop";
import Spinner from "./Spinner";


const Root = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";
    const [loading, setLoading] = useState(JSON.parse(sessionStorage.getItem("load")));
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const { pathname } = useLocation();

    function handleAuth(args) {
        console.log({ args })
        setLoading(true)
        sessionStorage.setItem("load", JSON.stringify(true))
    }
    console.log({ loading })
    return (
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[100svw] overflow-hidden relative min-h-screen">


            {auth || loading ?
                <>
                    <ScrollToTop dependency={pathname} />
                    <header>
                        <NavBar />
                    </header>
                    <main className="pt-20 relative">

                        <Outlet />
                        <ReusableModal isOpen={isLoading}>
                            <Spinner />
                        </ReusableModal>
                    </main>

                    <Footer />
                </> :
                <Captcha auth={auth} isLoading={handleAuth} />}
        </div>
    );
};

export default Root;
