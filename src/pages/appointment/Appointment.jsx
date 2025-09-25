import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useLoaderData, useLocation } from "react-router-dom";
import { getAppointment } from "../../api";
import { requireAuth } from "../../utils/auth";

export const loader = async ({request}) => {
    await requireAuth(request);

    return getAppointment();
}



const Appointment = () => {
    const { state } = useLocation();
    // const { biodata, contactData } = state?.responseData;
    const appointmentData = useLoaderData();

    const printSlip = () => {
        window.print();
    };
    console.log({state})
    return (
        <div className="flex flex-col items-center gap-6 py-6 px-6">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <h1 className="text-2xl font-bold text-center">Appointment Scheduled</h1>

            <div className="flex flex-col gap-4 w-full md:w-[576px] border p-6">
                <h3 className="text-xl font-semibold pb-2 border-b">Personal Information</h3>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="fullName"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Full Name:
                    </label>
                    <p className="font-bold text-grey" id="fullName">
                        {`${appointmentData.first_name} ${appointmentData.middle_name} ${appointmentData.last_name}`}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="email"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Email:
                    </label>
                    <p className="font-bold text-grey" id="email">
                        {appointmentData.email}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="phone"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Phone Number:
                    </label>
                    <p className="font-bold text-grey" id="phone">
                        {appointmentData.phone_number}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="nin"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        NIN:
                    </label>
                    <p className="font-bold text-grey" id="nin">
                        {appointmentData.nin}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="state"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        State of Residence:
                    </label>
                    <p className="font-bold text-grey" id="state">
                        {appointmentData.state_of_residence}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="lga"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        LGA:
                    </label>
                    <p className="font-bold text-grey" id="lga">
                        {appointmentData.local_govt_area}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-[576px] border p-6">
                <h3 className="text-xl font-semibold pb-2 border-b">Appointment Information</h3>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="fullName"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Application ID:
                    </label>
                    <p className="font-bold text-grey" id="fullName">
                        {appointmentData.application_id}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="capture-center"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Capture Center:
                    </label>
                    <p className="font-bold text-grey" id="capture-center">
                        {appointmentData.capture_center}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="appointment-date"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Date:
                    </label>
                    <p className="font-bold text-grey" id="appointment-date">
                        {appointmentData.appointment_date}
                    </p>
                </div>

                <div className="flex justify-between gap-10">
                    <label
                        htmlFor="phone"
                        className="mb-[2px] block text-base font-medium text-neutral-700"
                    >
                        Time:
                    </label>
                    <p className="font-bold text-grey" id="phone">
                        {appointmentData.appointment_time}
                    </p>
                </div>
            </div>

            <div className="flex justify-end print:hidden">
                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={printSlip}
                >
                    Print Appointment Slip
                </button>
            </div>
        </div>
    );
};

export default Appointment;
