import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signupFields, passwordFields } from "../constants/FormFields";
import { Link, Navigate } from "react-router-dom";
import FormAction from "./FormAction";
import Modal from "../../../components/Modal";
import SignUpResponse from "./SignUpResponse";
import Input from "./Input";
import { createAccount } from "../api";
import useAuth from "../../../hooks/useAuth";

const fields = signupFields;
let fieldsState = {};

const PWD_REGEX =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

fields.forEach((field) => (fieldsState[field.id] = ""));
passwordFields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup({ paragraph, linkUrl, linkName }) {
    const [signupState, setSignupState] = useState(fieldsState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [registeredEmail, setRegisteredEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [passVisible, setPassVisible] = useState(false)
    const navigate = useNavigate();
    const { name, email_license_id, password, confirm_password } = signupState;
    const { isUserAuthenticated } = useAuth();

    console.log(signupState)

    useEffect(() => {
        const emailTest = EMAIL_REGEX.test(email_license_id);
        setIsEmailValid(emailTest);
    }, [email_license_id]);

    useEffect(() => {
        const passwordTest = PWD_REGEX.test(password);
        setIsPasswordValid(passwordTest);
    }, [password, confirm_password]);

    useEffect(() => {
        const matchTest = password === confirm_password;
        setIsPasswordMatch(matchTest);
    }, [password, confirm_password]);

    const handleChange = (e) =>
        setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const clearForm = () => {
        setSignupState({
            email_license_id: "",
            name: "",
            password: "",
            confirm_password: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        if (!isEmailValid) {
            setError("Invalid email address!");
            setIsSubmitting(false);
            return;
        }

        if (!isPasswordMatch) {
            setError("Passwords do not match!");
            setIsSubmitting(false);
            return;
        }

        if (!isPasswordValid) {
            setError(
                "Invalid password! Password must contain the following: 8-24 characters; at least 1 capital letter; at least 1 digit; at least 1 special character; Allowed characters are !@#$%*&_-"
            );
            setIsSubmitting(false);
            return;
        }

        const data = {
            username: signupState.name,
            email: signupState.email_license_id,
            password: signupState.password,
            confirm_password: signupState.confirm_password,
        };

        const signupResponse = await createAccount(data);

        if (signupResponse.id) {
            setIsSubmitting(false);
            setRegisteredEmail(signupResponse.email);
            setIsOpen(true);
            clearForm();
            console.log(signupResponse);

            setTimeout(() => {
                navigate("/login");
            }, 5000);
            return;
        }

        setIsSubmitting(false);
        setError("Something went wrong! Please try again.");
    };

    return isUserAuthenticated ? (
        <Navigate to="/dashboard" replace={true} />
    ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
                <p className="bg-red-100 text-red-700 py-2 px-4 rounded-md">
                    {error}
                </p>
            )}
            <div className="grid gap-4">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                        isPasswordValid={isPasswordValid}
                        isPasswordMatch={isPasswordMatch}
                        isEmailValid={isEmailValid}                        
                    />
                ))}
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                    {passwordFields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={passVisible ? "text" : field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            isPasswordValid={isPasswordValid}
                            isPasswordMatch={isPasswordMatch}
                            isEmailValid={isEmailValid}
                            changePasswordType={() => { setPassVisible(!passVisible) }}
                        />
                    ))}
                </div>
                <button
                    className="bg-custom-green w-full hover:bg-green-800 p-4 text-white font-poppins font-medium rounded-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    onSubmit={handleSubmit}
                    type="submit"
                    disabled={
                        !isPasswordValid ||
                        !isPasswordMatch ||
                        !name ||
                        !isEmailValid
                    }
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span className="font-poppins">Creating account...</span>
                        </div>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
                {paragraph}{" "}
                <Link
                    to={linkUrl}
                    className="font-poppins font-medium text-custom-green hover:text-green-800"
                >
                    {linkName}
                </Link>
            </p>

            <Modal isOpen={isOpen}>
                <SignUpResponse
                    setIsModalOpen={setIsOpen}
                    email={registeredEmail}
                />
            </Modal>
        </form>
    );
}
