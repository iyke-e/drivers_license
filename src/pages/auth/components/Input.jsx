import { FaInfoCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
const fixedInputClass =
    "rounded-md bg-[#F5FFF9] relative border-[#15803cb5] appearance-none relative block w-full p-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm";
    "rounded-md bg-[#F5FFF9] relative border-[#15803cb5] appearance-none relative block w-full p-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm";

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
    isPasswordValid,
    isPasswordMatch,
    isEmailValid,
    changePasswordType
}) {
    const inputRef = useRef();
    const { pathname } = useLocation();
    const [isInputErrorVisible, setIsInputErrorVisible] = useState(false)

    const isFocusableInput = (name === "password" || name === "confirm_password" || name === "email") && pathname === "/signup";
    const handleFocus = () => setIsInputErrorVisible(true);

    return (
        <div className="grid gap-2 relative">
            <label htmlFor={labelFor} className="font-poppins font-medium text-[#282828] ">
                {labelText}
            </label>
            <div className="relative">
                <input
                    onChange={handleChange}
                    onFocus={isFocusableInput ? handleFocus : undefined}
                    value={value}
                    id={id}
                    name={name}
                    type={type}
                    ref={inputRef}
                    required={isRequired}
                    className={fixedInputClass + customClass + "bg-[#15803cb5] font-poppins"}
                    placeholder={placeholder}
                    aria-invalid={
                        name === "password" && isPasswordValid ? "false" : "true"
                    }
                    aria-describedby={name === "password" ? "password-note" : ""}
                />

                {
                    (name === "password" || name === "confirm_password") &&
                    <> {
                        (type === "password")
                            ? <FaRegEyeSlash onClick={changePasswordType} className="absolute cursor-pointer text-2xl text-[#949CA9] -translate-y-1/2  top-1/2 right-2" />
                            : <FaRegEye onClick={changePasswordType} className="absolute  cursor-pointer  text-2xl  text-[#949CA9]  -translate-y-1/2  top-1/2 right-2" />
                    }


                    </>

                }

            </div>


            {isInputErrorVisible && (pathname === "/signup" && name === "password" && !isPasswordValid && (
                <div
                    id="password-note"
                    className={
                        !isPasswordValid
                            ? "flex gap-2 text-xs bg-grey text-white p-1 rounded-md mt-1 absolute top-[5.3rem] left-0 z-10"
                            : "sr-only"
                    }
                >
                    <FaInfoCircle size={18} />
                    <div>
                        <span className="">Password must contain:</span>
                        <ul className="list-disc list-inside text-xs">
                            <li>8-24 characters</li>
                            <li>At least 1 capital letter</li>
                            <li>At least 1 digit</li>
                            <li>At least 1 special characrter</li>
                            <li>
                                Allowed special characters:{" "}
                                <span aria-label="exclamation mark">!</span>{" "}
                                <span aria-label="hashtag">#</span>{" "}
                                <span aria-label="at symbol">@</span>{" "}
                                <span aria-label="dollar sign">$</span>{" "}
                                <span aria-label="underscore">_</span>{" "}
                                <span aria-label="hyphen">-</span>{" "}
                                <span aria-label="asterik">*</span>{" "}
                                <span aria-label="ampersand">&</span>{" "}
                                <span aria-label="percent">%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}

            {isInputErrorVisible && (name === "confirm_password" && !isPasswordMatch && (
                <span className="text-sm w-full text-red-600 font-medium absolute top-[5.4rem] right-0 z-10">
                    Passwords do not match!
                </span>
            ))}

            {isInputErrorVisible && (name === "email" && !isEmailValid && (
                <span className="text-sm text-red-600 font-medium">
                    Invalid email address!
                </span>
            ))}
        </div>
    );
}