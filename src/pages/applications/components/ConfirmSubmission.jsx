import React from "react";
import { LuShieldQuestion } from "react-icons/lu";

const ConfirmSubmission = ({onClose}) => {
    return (
        <div className="flex flex-col gap-6 px-4 md:px-6 py-4 rounded-md shadow-md">
            <div className="flex gap-6">
                <div className="">
                    <LuShieldQuestion />
                </div>

                <div className="">
                    <h1 className="">Submit Application</h1>
                    <p className="">
                        Are you sure you want to submit this application?
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    className="hover:bg-neutral-200 text-grey px-4 py-2 border border-grey rounded-lg mt-4"
                    onClick={onClose}
                >
                    Cancel
                </button>

                <button
                    className="bg-custom-green hover:bg-green-600 px-4 py-2 text-white rounded-lg mt-4"
                    onClick={goBack}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ConfirmSubmission;
