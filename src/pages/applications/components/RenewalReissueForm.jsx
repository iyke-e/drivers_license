import React, { useState, useEffect } from "react";
import { hasEmptyValue } from "../utils";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RenewalReissueForm = ({
    formData,
    setRenewalReissueForm,
    handleChange,
    step,
    setStep,
    setIsSubmitted,
    applicationType,
}) => {
    const [errorMessage, setErrorMessage] = useState("");
    // const [isEmailValid, setIsEmailValid] = useState(false);
    // const [isEmailInputFocus, setIsEmailInputFocus] = useState(false);
    const isInvalid = hasEmptyValue(formData);
    // const { email } = formData;

    // useEffect(() => {
    //     const emailTest = EMAIL_REGEX.test(email);
    //     setIsEmailValid(emailTest);
    // }, [email]);

    // const handleEmailInputFocus = () => setIsEmailInputFocus(true);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                setRenewalReissueForm((prev) => ({
                    ...prev,
                    affidavit_police_report: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        if (hasEmptyValue(formData)) {
            setErrorMessage("All fields are required.");
            return;
        }

        setIsSubmitted(true);
        setStep(step + 1);
    };

    return (
        <div className="py-4 w-full md:w-1/2 md:mx-auto">
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                    {errorMessage}
                </p>
            )}

            <form className="">
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        {/* Email */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="nin"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                National Identification Number (NIN) <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="nin"
                                name="nin"
                                id="nin"
                                value={formData.nin}
                                onChange={(e) =>
                                    handleChange(e, setRenewalReissueForm)
                                }
                                // onFocus={handleEmailInputFocus}
                                placeholder="National Identification Number (NIN)"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                            {/* {isEmailInputFocus && !isEmailValid && (
                                <small className="text-sm text-red-600 font-medium">
                                    Invalid email address!
                                </small>
                            )} */}
                        </div>
                        {/* License ID */}
                        <div className="">
                            <label
                                htmlFor="license_id"
                                className="mb-[2px] block text-base font-medium text-neutral-700"
                            >
                                License ID{" "}
                                <small className="text-red-800">*</small>
                            </label>
                            <input
                                type="text"
                                name="license_id"
                                id="license_id"
                                value={formData.license_id}
                                onChange={(e) =>
                                    handleChange(e, setRenewalReissueForm)
                                }
                                placeholder="License ID"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                            />
                        </div>

                        {applicationType === "reissue" && (
                            <div className="">
                                <label
                                    htmlFor="affidavit_police_report"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Affidavit/Police Report{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="file"
                                    name="affidavit_police_report"
                                    id="affidavit_police_report"
                                    onChange={onImageChange}
                                    placeholder="Affidavit/Police Report"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end mt-4 md:mt-8">
                    <button
                        className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        onClick={submit}
                        disabled={isInvalid}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RenewalReissueForm;
