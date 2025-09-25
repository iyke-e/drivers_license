import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const SignUpResponse = ({ setIsModalOpen, email }) => {
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col gap-5">
            <div className="absolute top-6 right-6 text-2xl text-grey cursor-pointer">
                <IoCloseSharp onClick={closeModal} className="font-semibold" />
            </div>
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">
                    Your account has been successfully created.
                </h3>
                <p className="text-center">
                    A verification link has been sent to{" "}
                    <span className="font-bold">{email}</span>, kindly click on {" "}
                    it to complete your registration. Thank you!
                </p>
            </div>
        </div>
    );
};

export default SignUpResponse;
