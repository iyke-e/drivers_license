import { useState, useEffect } from "react";
import NaijaStates from "naija-state-local-government";
import { hasEmptyValue } from "../utils";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ContactForm = ({
    formData,
    setContactForm,
    handleChange,
    step,
    setStep,
    setIsSubmitted,
}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isEmailInputFocus, setIsEmailInputFocus] = useState(false);
    const isInvalid = hasEmptyValue(formData);
    const { email } = formData;

    useEffect(() => {
        const emailTest = EMAIL_REGEX.test(email);
        setIsEmailValid(emailTest);
    }, [email]);

    const handleEmailInputFocus = () => setIsEmailInputFocus(true);

    console.log(formData)

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        if (isInvalid) {
            setErrorMessage("All fields are required.");
            return;
        }

        setIsSubmitted(true);
        setStep(step + 1);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div className="px-10 py-4">
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                    {errorMessage}
                </p>
            )}

            <form className="">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        {/* Email */}
                        <div className="">
                            <label
                                htmlFor="email"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Email <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                onFocus={handleEmailInputFocus}
                                placeholder="Email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                            {isEmailInputFocus && !isEmailValid && (
                                <small className="text-sm text-red-600 font-medium">
                                    Invalid email address!
                                </small>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="">
                            <label
                                htmlFor="phone_number"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Phone Number{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                value={formData.phone_number}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                placeholder="Phone Number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        {/* Street Address */}
                        <div className="">
                            <label
                                htmlFor="street_address"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Street Address{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <textarea
                                name="street_address"
                                id="street_address"
                                value={formData.street_address}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                placeholder="Street Address"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                        <div className="">
                            <label
                                htmlFor="state_of_residence"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                State of Residence{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="state_of_residence"
                                id="state_of_residence"
                                value={formData.state_of_residence}
                                onChange={(e) => {
                                    handleChange(e, setContactForm);
                                    // setState()
                                }}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select state--</option>
                                {NaijaStates.states().map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="">
                            <label
                                htmlFor="local_govt_area"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                Local Govt. Area{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <select
                                name="local_govt_area"
                                id="local_govt_area"
                                value={formData.local_govt_area}
                                onChange={(e) =>
                                    handleChange(e, setContactForm)
                                }
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            >
                                <option value="">--Select LGA--</option>
                                {formData.state_of_residence &&
                                    NaijaStates.lgas(formData.state_of_residence).lgas.map(
                                        (lga, index) => (
                                            <option key={index} value={lga}>
                                                {lga}
                                            </option>
                                        )
                                    )}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4 md:mt-8">
                    <button
                        className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                        onClick={goBack}
                    >
                        Previous
                    </button>

                    <button
                        className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        onClick={submit}
                        disabled={isInvalid || !isEmailValid}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
