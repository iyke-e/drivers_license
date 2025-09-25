import { useState, useEffect } from "react";
import axios from "axios";
import { loginFields } from "../constants/FormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { Link, useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast, Toaster } from "react-hot-toast";
import { login } from "../api";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({ paragraph, linkUrl, linkName }) {
    const [loginState, setLoginState] = useState(fieldsState);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passVisible, setPassVisible] = useState(false)

    const { setAuth, setIsUserAuthenticated, isUserAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const notify = () => toast.error("Invalid login details, please try again.");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        const data = {
            email: loginState["email"],
            password: loginState["password"],
        };
        const loginResponse = await login(data);

        if (loginResponse.access) {
            setIsUserAuthenticated(true);
            setAuth(loginResponse);
            navigate("/dashboard");
            return;
        }

        setIsSubmitting(false);
        notify();
    };




    return isUserAuthenticated ? (
        <Navigate to="/dashboard" replace={true} />
    ) : (
        <>


            <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid gap-4">
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={passVisible ? field.type : "text"}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            changePasswordType={() => { setPassVisible(!passVisible) }}

                        />





                    ))}
                </div>


                <button
                    className="bg-custom-green w-full hover:bg-green-600 p-4 text-white font-medium rounded-lg "
                    onSubmit={handleSubmit}
                    type="submit"
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Logging in...</span>
                        </div>
                    ) : (
                        "Login"
                    )}
                </button>
                <FormExtra />
                <p className="mt-2   text-sm text-gray-600">
                    {paragraph}{" "}
                    <Link
                        to={linkUrl}
                        className="font-medium text-[#15803D]"
                    >
                        {linkName}
                    </Link>
                </p>
            </form>
        </>
    );
}
