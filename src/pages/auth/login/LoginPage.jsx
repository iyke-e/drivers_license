import { useLocation } from "react-router-dom";
import Login from "../components/Login";
import LoginHeader from "../components/LoginHeader";
import background from "../../../assets/license.png"
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
    const { state } = useLocation();

    return (
        <div className="grid lg:py-14 relative p-4 min-h-[80vh] ">

            <Toaster containerStyle={{
                position: "relative"
            }} />

            <div className="w-full m-auto p-3 bg-white grid gap-8 md:p-10 h-fit pt-6 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] max-w-[540px] ">
                <LoginHeader
                    heading="Sign In"
                    routeMessage={state?.message}
                />
                <Login
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
            </div>
        </div>
    );
}
