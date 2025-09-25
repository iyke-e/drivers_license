import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { submitApplication } from "../api";
import useAuth from "../../../hooks/useAuth";

const Review = ({
    biodata,
    contactData,
    renewalReissueData,
    step,
    setStep,
    setIsReviewed,
    openModal,
    applicationType,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { auth } = useAuth();
    const { access } = auth;

    const getFormData = (data) => {
        let formData = new FormData();

        for (let prop in data) {
            formData.append(prop, data[prop]);
        }

        return formData;
    };

    const submit = async (e) => {
        e.preventDefault();
        let formData;

        setIsSubmitting(true);

        if (applicationType === "new") {
            const newLicenseData = {
                first_name: biodata.first_name,
                last_name: biodata.last_name,
                middle_name: biodata.middle_name,
                gender: biodata.gender,
                date_of_birth: biodata.date_of_birth,
                mothers_maiden_name: biodata.mothers_maiden_name,
                nin: biodata.nin,
                email: contactData.email,
                phone_number: contactData.phone_number,
                street_address: contactData.street_address,
                state_of_residence: contactData.state_of_residence,
                local_govt_area: contactData.local_govt_area,
                application_type: applicationType,
                vehicle_type: biodata.vehicle_type,
                driving_school_certificate_number:
                    biodata.driving_school_certificate_number,
                passport_photo: biodata.passport_photo,
            };

            formData = getFormData(newLicenseData);
        }

        if (applicationType === "renewal") {
            const renewalData = {
                license_id: renewalReissueData.license_id,
                application_type: applicationType,
            };

            formData = getFormData(renewalData);
        }

        if (applicationType === "reissue") {
            const reissueData = {
                license_id: renewalReissueData.license_id,
                affidavit_police_report:
                    renewalReissueData.affidavit_police_report,
                application_type: applicationType,
            };

            formData = getFormData(reissueData);
        }

        const response = await submitApplication(
            formData,
            applicationType,
            access
        );

        if (response.error) {
            console.log(response);
            setIsSubmitting(false);
            return;
        }

        setTimeout(() => {
            setIsSubmitting(true);

            setIsReviewed(true);
            openModal();
            setIsSubmitting(false);
        }, 3000);
    };

    const apply = (e) => {
        e.preventDefault();

        setTimeout(() => {
            openModal();
            setIsSubmitting(false);
            setIsSubmitting(true);
        }, 3000);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    return (
        <div className="flex flex-col md:px-10 py-4 w-full">
            {applicationType === "new" ? (
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Biodata Review */}
                    <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                        <div className="flex justify-between bg-green-100 p-4">
                            <h4 className="text-xl font-bold text-custom-green">
                                Biodata
                            </h4>
                            <button
                                className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md self-center"
                                onClick={() => setStep(1)}
                            >
                                <BiSolidEdit />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 p-4">
                            <div className="self-center">
                                <img
                                    src={biodata.passport_photo}
                                    className="rounded-full w-28 h-auto"
                                    alt="Passport Photo"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="first_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        First Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="first_name"
                                    >
                                        {biodata.first_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="last_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Last Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="last_name"
                                    >
                                        {biodata.last_name}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="middle_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Middle Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="middle_name"
                                    >
                                        {biodata.middle_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="gender"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Gender
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="gender"
                                    >
                                        {biodata.gender}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="mothers_maiden_name"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Mother's Maiden Name
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="mothers_maiden_name"
                                    >
                                        {biodata.mothers_maiden_name}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="date_of_birth"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Date of Birth
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="date_of_birth"
                                    >
                                        {biodata.date_of_birth}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="nin"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        NIN
                                    </label>
                                    <p className="font-bold text-grey" id="nin">
                                        {biodata.nin}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="driving_school_certificate_number"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Driving Certificate ID
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="driving_school_certificate_number"
                                    >
                                        {
                                            biodata.driving_school_certificate_number
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Review */}
                    <div className="flex flex-col w-full md:w-1/2 shadow-md border border-neutral-200 rounded-md">
                        <div className="flex justify-between bg-green-100 p-4">
                            <h4 className="text-xl font-bold text-custom-green">
                                Contact
                            </h4>
                            <button
                                className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md self-center"
                                onClick={() => setStep(2)}
                            >
                                <BiSolidEdit />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="email"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Email
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="email"
                                    >
                                        {contactData.email}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="phone_number"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Phone Number
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="phone_number"
                                    >
                                        {contactData.phone_number}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="state_of_residence"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        State
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="state_of_residence"
                                    >
                                        {contactData.state_of_residence}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="local_govt_area"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Local Govt. Area
                                    </label>
                                    <p
                                        className="font-bold text-grey"
                                        id="local_govt_area"
                                    >
                                        {contactData.local_govt_area}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="vehicle_type"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Vehicle Type
                                    </label>
                                    <p
                                        className="font-bold text-grey capitalize"
                                        id="vehicle_type"
                                    >
                                        {biodata.vehicle_type}
                                    </p>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="application_type"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Application Type
                                    </label>
                                    <p
                                        className="font-bold text-grey capitalize"
                                        id="application_type"
                                    >
                                        {applicationType}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:gap-10">
                                <div className="">
                                    <label
                                        htmlFor="street_address"
                                        className="mb-[2px] block text-base font-medium text-neutral-700"
                                    >
                                        Street Address
                                    </label>
                                    <p
                                        className="font-bold text-grey capitalize"
                                        id="street_address"
                                    >
                                        {contactData.street_address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full md:w-1/2 md:mx-auto shadow-md border border-neutral-200 rounded-md">
                    <div className="flex justify-between bg-green-100 p-4">
                        <h4 className="text-xl font-bold text-custom-green">
                            Application Data
                        </h4>
                        <button
                            className="bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md self-center"
                            onClick={() => setStep(1)}
                        >
                            <BiSolidEdit />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 p-4">
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            <div className="">
                                <label
                                    htmlFor="nin"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    NIN
                                </label>
                                <p className="font-bold text-grey" id="nin">
                                    {renewalReissueData?.nin}
                                </p>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="license_id"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    License ID
                                </label>
                                <p
                                    className="font-bold text-grey"
                                    id="license_id"
                                >
                                    {renewalReissueData?.license_id}
                                </p>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="application_type"
                                    className="mb-[2px] block text-base font-medium text-neutral-700"
                                >
                                    Application Type
                                </label>
                                <p
                                    className="font-bold text-grey capitalize"
                                    id="application_type"
                                >
                                    {applicationType}
                                </p>
                            </div>
                        </div>
                        {applicationType === "reissue" && (
                            <div className="w-full">
                                <label
                                    htmlFor="license_id"
                                    className="mb-2 block text-base font-medium text-neutral-700"
                                >
                                    Affidavit/Police Report File
                                </label>
                                <img
                                    src={
                                        renewalReissueData?.affidavit_police_report
                                    }
                                    className="object-cover"
                                    alt="Affidavit"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={goBack}
                >
                    Previous
                </button>

                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={apply}
                >
                    {isSubmitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        "Submit Application"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Review;
