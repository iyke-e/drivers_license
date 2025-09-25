import { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PaymentSuccessIcon, CloseIcon } from "../icons";

const PaymentSuccess = ({ step, setStep, setIsPaid, closeModal, paymentResponse }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const goToReview = () => {
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setIsPaid(true);
            setStep(step + 1);
        }, 1000);
    };

    return (
        <div className="flex flex-col gap-5 p-4">
            <CloseIcon onClick={closeModal} className="absolute right-5 top-5 hover:cursor-pointer hover:scale-105 transition duration-300" />

            <PaymentSuccessIcon className="w-full max-w-44 mx-auto" />

            <h3 className="text-xl text-center text-custom-green font-medium">
                Payment successful!
            </h3>
        </div>
    );
};

export default PaymentSuccess;
