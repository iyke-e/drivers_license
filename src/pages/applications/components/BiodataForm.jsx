import React, { useState } from "react";
import { hasEmptyValue, biodataFormValid } from "../utils";
import { vehicleTypes } from "../data";

const BiodataForm = ({
    formData,
    setBiodataForm,
    handleChange,
    step,
    setStep,
    setIsSubmitted,
    applicationType,
}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const isValid = biodataFormValid(formData);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                setBiodataForm((prev) => ({
                    ...prev,
                    passport_photo: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        setErrorMessage("");

        if (!biodataFormValid(formData)) {
            setErrorMessage("Fields marked with * are required.");
            return;
        }

        setIsSubmitted(true);
        setStep(step + 1);
    };

    return (
        <div className="py-4">
            {errorMessage && (
                <p className="bg-red-200 text-red-900 text-sm px-3 py-2 rounded-md mb-4">
                    {errorMessage}
                </p>
            )}

            <form className="">
                <fieldset className="border-2 px-8 py-6 rounded-md mb-6">
                    <legend className="px-2 text-lg font-medium">
                        Personal Information
                    </legend>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            {/* First Name */}
                            <div className="">
                                <label
                                    htmlFor="first_name"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    First Name{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    value={formData.first_name}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="First Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="">
                                <label
                                    htmlFor="last_name"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Last Name{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    value={formData.last_name}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Last Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            {/* Middle Name */}
                            <div className="">
                                <label
                                    htmlFor="middle_name"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Middle Name
                                </label>
                                <input
                                    type="text"
                                    name="middle_name"
                                    id="middle_name"
                                    value={formData.middle_name}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Middle Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="">
                                <label
                                    htmlFor="gender"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Gender{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <select
                                    name="gender"
                                    id="gender"
                                    value={formData.gender}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                                >
                                    <option value="">--Select gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="date_of_birth"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Date of Birth{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    id="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Date of Birth"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>

                            <div className="">
                                <label
                                    htmlFor="mothers_maiden_name"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Mother's Maiden Name{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="mothers_maiden_name"
                                    id="mothers_maiden_name"
                                    value={formData.mothers_maiden_name}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Mother's Maiden Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            {/* NIN */}
                            <div className="">
                                <label
                                    htmlFor="nin"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    NIN{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="text"
                                    name="nin"
                                    id="nin"
                                    value={formData.nin}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="NIN"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>

                            <div className="">
                                <label
                                    htmlFor="passport_photo"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Passport Photo{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <input
                                    type="file"
                                    name="passport_photo"
                                    id="passport_photo"
                                    onChange={onImageChange}
                                    placeholder="Passport Photo"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="border-2 px-8 py-6 rounded-md">
                    <legend className="px-2 text-lg font-medium">
                        License Information
                    </legend>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                            <div className="">
                                <label
                                    htmlFor="vehicle_type"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Vehicle Type{" "}
                                    <small className="text-red-800">*</small>
                                </label>
                                <select
                                    name="vehicle_type"
                                    id="vehicle_type"
                                    value={formData.vehicle_type}
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                                >
                                    <option value="">
                                        --Select Vehicle Type--
                                    </option>
                                    {vehicleTypes.map((type) => (
                                        <option
                                            key={type.id}
                                            value={type.description}
                                        >{`${type.class} - ${type.description}`}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Driving School Certificate Number */}
                            <div className="">
                                <label
                                    htmlFor="driving_school_certificate_number"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Driving School Certificate Number
                                </label>
                                <input
                                    type="text"
                                    name="driving_school_certificate_number"
                                    id="driving_school_certificate_number"
                                    value={
                                        formData.driving_school_certificate_number
                                    }
                                    onChange={(e) =>
                                        handleChange(e, setBiodataForm)
                                    }
                                    placeholder="Driving School Certificate Number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="flex justify-end mt-4">
                    <button
                        className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        onClick={submit}
                        disabled={!isValid}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BiodataForm;
