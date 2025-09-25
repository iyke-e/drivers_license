import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { hasEmptyValue } from "../utils";
import CustomModal from "./CustomModal";
import PaymentSuccess from "./PaymentSuccess";
import ProcedureListItem from "../../../components/ProcedureListItem";
import { paymentInfo } from "../data";
import PaystackPop from "@paystack/inline-js";

const PaymentForm = ({
    formData,
    setPaymentForm,
    handleChange,
    applicantEmail,
    isPaid,
    setIsPaid,
    step,
    setStep,
    setIsSubmitted,
    applicationType,
    vehicleType,
    paymentResponse,
    setPaymentResponse,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const licenseAmount =
        applicationType === "new"
            ? 35000
            : applicationType === "renewal"
            ? 40000
            : 50000;

    // console.log(isPaid);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setIsPaid(true);
        setStep(step + 1);
    };

    const goBack = (e) => {
        e.preventDefault();

        setStep(step - 1);
    };

    const payWithPaystack = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        let handler = PaystackPop.setup({
            key: "pk_test_ae72c93945182aca7f412a5fe98b988309e9a132", // Replace with your public key
            email: applicantEmail,
            amount: licenseAmount * 100,
            currency: "NGN",
            ref: "REF" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: () => {
                // alert("Window closed.");
                setIsSubmitting(false);
            },
            callback: (response) => {
                console.log(response);
                setIsSubmitting(false);
                setIsSubmitted(true);
                // setIsPaid(true);
                setPaymentResponse({
                    status: response.status,
                    message: response.message,
                    reference: response.reference,
                });

                openModal();

                // let message =
                //     "Payment complete! Reference: " + response.reference;
                // alert(message);
            },
        });

        handler.openIframe();
    };

    return isPaid ? (
        <div className="flex flex-col items-center gap-5">
            <div className="flex justify-center items-center self-center p-1 bg-neutral-100 rounded-full shadow-md h-20 w-20">
                <div className="flex justify-center items-center p-1 bg-neutral-200 rounded-full h-16 w-16">
                    <IoCheckmarkDoneCircle className="text-5xl text-green-700" />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-5">
                    Your payment has been successfully processed!
                </h3>
                <div className="flex items-center justify-center gap-2 mb-5 px-4 py-2 bg-green-200 text-green-800 rounded-lg">
                    <h4 className="">PAYMENT REFERENCE:</h4>
                    <h4 className="font-bold">{paymentResponse.reference}</h4>
                </div>
                <p className="">
                    Please check your email for a summary of the payment.
                </p>
            </div>

            <button
                className=" bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                onClick={() => setStep(step + 1)}
            >
                Review Your Application
            </button>
        </div>
    ) : (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-6 shadow-lg p-8">
                <h2 className="text-xl md:text-2xl font-medium text-custom-green">
                    Before you proceed...
                </h2>
                {paymentInfo.map((info, index) => (
                    <ProcedureListItem key={index} listItemData={info} />
                ))}
            </div>

            {/* Payment Summary */}
            <div className="payment-summary flex flex-col w-full max-w-[30rem] gap-2 pb-2 border border-gray-200 rounded-md shadow-lg">
                <div className="flex justify-center p-4 mb-2 bg-green-100 rounded-t-md">
                    <h1 className="font-bold text-custom-green">
                        Payment Summary
                    </h1>
                </div>

                <div className="flex justify-between gap-2 px-4">
                    <h3 className="md:text-lg text-grey flex-1">Application Type:</h3>
                    <h3 className="md:text-lg font-semibold text-grey capitalize">
                        {applicationType}
                    </h3>
                </div>

                <div className="flex justify-between gap-2 px-4 pb-4">
                    <h3 className="md:text-lg text-grey flex-1">Vehicle Type:</h3>
                    <h3 className="md:text-lg font-semibold text-grey capitalize">
                        {vehicleType || "Light Vehicles"}
                    </h3>
                </div>

                <div className="flex justify-between gap-2 px-4 pt-4 border-t">
                    <h3 className="md:text-lg text-grey">
                        License Fee:
                    </h3>
                    <h3 className="md:text-lg font-semibold text-grey">{`₦${licenseAmount}.00`}</h3>
                </div>

                <div className="px-4 pt-2 pb-4 mt-auto">
                    <button
                        className="w-full bg-custom-green hover:bg-green-600 px-4 py-3 text-white font-medium tracking-widest rounded-lg"
                        onClick={payWithPaystack}
                    >
                        {isSubmitting ? (
                            <div className="flex justify-center gap-4">
                                <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            "Pay"
                        )}
                    </button>
                </div>
            </div>

            {/* Payment Success Modal */}
            <CustomModal isOpen={isModalOpen}>
                <PaymentSuccess
                    step={step}
                    setStep={setStep}
                    setIsPaid={setIsPaid}
                    closeModal={closeModal}
                    paymentResponse={paymentResponse}
                />
            </CustomModal>
        </div>
    );
};

export default PaymentForm;
