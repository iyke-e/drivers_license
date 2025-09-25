import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PageNotFound = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { auth, adminAuth } = useAuth();
    let homeUrl = "";

    if (pathname.includes("admin")) {
        homeUrl = adminAuth.admin ? "/admin/dashboard" : "/admin";
    } else {
        homeUrl = auth.user ? "/dashboard" : "/";
    }

    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <section className="flex px-10 flex-col justify-center items-center gap-6 min-h-[83vh] w-full max-w-[500px] mx-auto">
            <h1 className="text-4xl font-bold text-center">
                404 <br /> Page Not Found
            </h1>
            <p className="text-lg font-medium text-center">
                Sorry, the page you were looking for does not exist.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <button
                    onClick={goBack}
                    className="w-full min-w-28 p-3 text-custom-green hover:text-white border border-custom-green hover:bg-green-800 rounded-md font-bold text-lg text-center"
                >
                    Back
                </button>
                <Link
                    to={homeUrl}
                    className="w-full min-w-28 p-3 bg-custom-green hover:bg-green-800 rounded-md font-bold text-lg text-center text-white"
                >
                    Home
                </Link>
            </div>
        </section>
    );
};

export default PageNotFound;
