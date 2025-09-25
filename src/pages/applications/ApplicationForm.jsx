import React, { useState, useContext } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import BiodataForm from "./components/BiodataForm";
import PaymentForm from "./components/PaymentForm";
import ContactForm from "./components/ContactForm";
import Review from "./components/Review";
import CustomModal from "./components/CustomModal";
import StepIndicator from "./components/StepIndicator";
import StepLine from "./components/StepLine";
// import CheckoutModal from "./components/CheckoutModal";
// import CheckoutSuccess from "./components/CheckoutSuccess";
// import CheckoutFailure from "./components/CheckoutFailure";
import { MdOutlinePersonOutline, MdOutlineContactPage } from "react-icons/md";
import {
    FaRectangleList,
    FaRegCreditCard,
    FaRegRectangleList,
} from "react-icons/fa6";
import SubmissionResponse from "./components/SubmissionResponse";
import RenewalReissueForm from "./components/RenewalReissueForm";
import { requireAuth } from "../../utils/auth";
import { getProfile } from "./api";
import ScrollToTop from "../../components/ScrollToTop";

export const applicationFormLoader = async ({ request }) => {
    await requireAuth(request);

    const profileResponse = await getProfile();
    console.log(profileResponse.data);

    if (profileResponse.error) {
        return {
            first_name: "",
            last_name: "",
            middle_name: "",
            gender: "",
            date_of_birth: "",
            passport_photo: "",
            email: "",
            phone_number: "",
            street_address: "",
            state_of_residence: "",
            local_govt_area: "",
        };
    }

    return {
        profile: profileResponse.data,
    };
};

const ApplicationForm = () => {
    const profile = useLoaderData();
    const params = useParams();
    const { type } = params;
    const [step, setStep] = useState(1);
    const [isBiodataSubmitted, setIsBiodataSubmitted] = useState(false);
    const [isContactSubmitted, setIsContactSubmitted] = useState(false);
    const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
    const [isPaid, setIsPaid] = useState(false);
    const [isInfoReviewed, setIsInfoReviewed] = useState(false);
    const [isRenewalReissueSubmitted, setIsRenewalReissueSubmitted] =
        useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paymentResponse, setPaymentResponse] = useState({});

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [biodataForm, setBiodataForm] = useState({
        first_name: profile.first_name,
        last_name: profile.last_name,
        middle_name: profile.middle_name,
        gender: profile.gender,
        mothers_maiden_name: "",
        date_of_birth: profile.date_of_birth,
        passport_photo: profile.passport_photo,
        nin: "",
        driving_school_certificate_number: "",
        vehicle_type: "",
    });
    const [contactForm, setContactForm] = useState({
        email: profile.email,
        phone_number: profile.phone_number,
        street_address: profile.street_address,
        state_of_residence: profile.state_of_residence,
        local_govt_area: profile.local_govt_area,
    });
    const [paymentForm, setPaymentForm] = useState({
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardPin: "",
    });

    const [renewalReissueForm, setRenewalReissueForm] = useState(
        type === "renewal"
            ? {
                  nin: "",
                  license_id: "",
              }
            : {
                  nin: "",
                  license_id: "",
                  affidavit_police_report: "",
              }
    );

    const handleFormChange = (e, setForm) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    };

    const showBiodataForm = () => {
        if (isBiodataSubmitted) {
            setStep(1);
        }
    };

    const showContactForm = () => {
        if (isContactSubmitted) {
            setStep(2);
        }
    };

    const showRenewalReissueForm = () => {
        if (isRenewalReissueSubmitted) {
            setStep(1);
        }
    };

    const showReview = () => {
        if (isBiodataSubmitted && isContactSubmitted) {
            setStep(3);
        }
    };

    const showPaymentForm = () => {
        if (isPaid) {
            if ( type === "new") {
                setStep(3);
            } else {
                setStep(2);
            }
        }
    };

    return (
        <div className="container p-10 w-full max-w-[1280px] m-auto">
            <ScrollToTop dependency={step} />
            <h1 className="text-3xl text-center md:text-left font-bold text-custom-green mb-8">
                {type === "new"
                    ? "New Driver's License Application"
                    : type === "renewal"
                    ? "Online Driver's License Renewal"
                    : "Driver's License Replacement/Re-Issue"}
            </h1>
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-10">
                <div className="multistep-form-container flex-1">
                    {type === "new" && (
                        <div className="multistep-form">
                            <div className="step-indicator w-full">
                                <div className="flex items-center w-full">
                                    <StepIndicator
                                        isSubmitted={isBiodataSubmitted}
                                        showStep={showBiodataForm}
                                        isCurrentStep={step === 1}
                                        title="Biodata"
                                    />
                                    <StepLine
                                        isSubmitted={isBiodataSubmitted}
                                    />

                                    <StepIndicator
                                        isSubmitted={isContactSubmitted}
                                        showStep={showContactForm}
                                        isCurrentStep={step === 2}
                                        title="Contact"
                                    />
                                    <StepLine
                                        isSubmitted={isContactSubmitted}
                                    />

                                    <StepIndicator
                                        isSubmitted={isPaymentSubmitted}
                                        showStep={showPaymentForm}
                                        isCurrentStep={step === 3}
                                        title="Payment"
                                    />
                                    <StepLine
                                        isSubmitted={isPaymentSubmitted}
                                        isPaid={isPaid}
                                    />

                                    <StepIndicator
                                        isSubmitted={isInfoReviewed}
                                        showStep={showReview}
                                        isCurrentStep={step === 4}
                                        title="Review"
                                    />
                                </div>
                            </div>

                            <h2 className="text-2xl font-medium text-grey pt-5 pb-5 text-center">
                                {step === 1
                                    ? "Biodata"
                                    : step === 2
                                    ? "Contact Info"
                                    : step === 3
                                    ? "Payment"
                                    : "Review Details"}
                            </h2>

                            <div className="body">
                                {step === 1 ? (
                                    <BiodataForm
                                        formData={biodataForm}
                                        setBiodataForm={setBiodataForm}
                                        handleChange={handleFormChange}
                                        step={step}
                                        setStep={setStep}
                                        setIsSubmitted={setIsBiodataSubmitted}
                                        applicationType={type}
                                    />
                                ) : step === 2 ? (
                                    <ContactForm
                                        formData={contactForm}
                                        setContactForm={setContactForm}
                                        handleChange={handleFormChange}
                                        step={step}
                                        setStep={setStep}
                                        setIsSubmitted={setIsContactSubmitted}
                                    />
                                ) : step === 3 ? (
                                    <PaymentForm
                                        formData={paymentForm}
                                        setPaymentForm={setPaymentForm}
                                        isPaid={isPaid}
                                        setIsPaid={setIsPaid}
                                        handleChange={handleFormChange}
                                        step={step}
                                        setStep={setStep}
                                        setIsSubmitted={setIsPaymentSubmitted}
                                        applicationType={type}
                                        vehicleType={biodataForm.vehicle_type}
                                        paymentResponse={paymentResponse}
                                        setPaymentResponse={setPaymentResponse}
                                        applicantEmail={contactForm.email}
                                    />
                                ) : (
                                    <Review
                                        biodata={biodataForm}
                                        contactData={contactForm}
                                        step={step}
                                        setStep={setStep}
                                        setIsReviewed={setIsInfoReviewed}
                                        openModal={openModal}
                                        applicationType={type}
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {/* Renewal or Re-issue */}
                    {type !== "new" && (
                        <div className="multistep-form">
                            <div className="step-indicator">
                                <div className="flex items-center">
                                    <StepIndicator
                                        isSubmitted={isRenewalReissueSubmitted}
                                        showStep={showRenewalReissueForm}
                                        isCurrentStep={step === 1}
                                        title="Form"
                                    />
                                    <StepLine
                                        isSubmitted={isRenewalReissueSubmitted}
                                    />

                                    <StepIndicator
                                        isSubmitted={isPaymentSubmitted}
                                        showStep={showPaymentForm}
                                        isCurrentStep={step === 2}
                                        title="Payment"
                                    />
                                    <StepLine
                                        isSubmitted={isPaymentSubmitted}
                                        isPaid={isPaid}
                                    />

                                    <StepIndicator
                                        isSubmitted={isInfoReviewed}
                                        showStep={showReview}
                                        isCurrentStep={step === 3}
                                        title="Review"
                                    />
                                </div>
                            </div>

                            <h2 className="text-2xl font-medium text-grey pt-5 pb-5 text-center">
                                {step === 1
                                    ? "Application Form"
                                    : step === 2
                                    ? "Payment"
                                    : "Review Details"}
                            </h2>

                            <div className="body">
                                {step === 1 ? (
                                    <RenewalReissueForm
                                        formData={renewalReissueForm}
                                        setRenewalReissueForm={
                                            setRenewalReissueForm
                                        }
                                        handleChange={handleFormChange}
                                        step={step}
                                        setStep={setStep}
                                        setIsSubmitted={
                                            setIsRenewalReissueSubmitted
                                        }
                                        applicationType={type}
                                    />
                                ) : step === 2 ? (
                                    <PaymentForm
                                        formData={paymentForm}
                                        setPaymentForm={setPaymentForm}
                                        handleChange={handleFormChange}
                                        isPaid={isPaid}
                                        setIsPaid={setIsPaid}
                                        step={step}
                                        setStep={setStep}
                                        setIsSubmitted={setIsPaymentSubmitted}
                                        applicationType={type}
                                        vehicleType={biodataForm.vehicle_type}
                                        paymentResponse={paymentResponse}
                                        setPaymentResponse={setPaymentResponse}
                                        applicantEmail={"test-amil@gmail.com"}
                                    />
                                ) : (
                                    <Review
                                        renewalReissueData={renewalReissueForm}
                                        step={step}
                                        setStep={setStep}
                                        setIsReviewed={setIsInfoReviewed}
                                        openModal={openModal}
                                        applicationType={type}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <CustomModal isOpen={isModalOpen}>
                <SubmissionResponse
                    responseData={{
                        biodata: biodataForm,
                        contactData: contactForm,
                    }}
                />
            </CustomModal>
        </div>
    );
};

export default ApplicationForm;
