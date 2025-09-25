import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { PaymentSuccessIcon } from "../icons";

const SubmissionResponse = ({ responseData }) => {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    console.log(responseData);

    const generateSlip = () => {
        setIsGenerating(true);

        setTimeout(() => {
            setIsGenerating(false);
            navigate("/get-appointment-slip", { state: { responseData } });
        }, 3000);
    };

    return (
        <div className="flex flex-col gap-5 justify-center p-4">
            <PaymentSuccessIcon className="w-full max-w-44 mx-auto" />

            <div className="flex flex-col items-center">
                <h3 className="text-lg text-center font-bold mb-5">
                    Your application has been successfully submitted.
                </h3>
                <p className="text-center">
                    Please generate your appointment slip to get the details of your capturing center. Thank you.
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
                <button
                    className="w-full bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                    onClick={generateSlip}
                >
                    {isGenerating ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Generating Slip...</span>
                        </div>
                    ) : (
                        "Generate Appointment Slip"
                    )}
                </button>
            </div>
        </div>
    );
};

export default SubmissionResponse;
