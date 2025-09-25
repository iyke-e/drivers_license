import { useState } from "react";
import { Accordion } from "./components/Accordion";
import faq from "../../assets/faq.svg";
import {
    Lens,
    Badge,
    Envelope,
    Case,
    DeliveryVan,
    Currency,
    NotAllowed,
} from "./components/icons";
import QuestionItem from "./components/QuestionItem";

const faqs = [
    {
        id: 1,
        icon: <Currency />,
        question: "How much will the new License cost me?",
        answer: "The new driver license is in different classes and validity periods. For Class A and validity of 3 years, the price is 5,000 naira while for 5 years validity the price is 8400. Other classes are 10,000 naira for 3 years and 15,000 naira for 5 years.",
    },
    {
        id: 2,
        icon: <DeliveryVan />,
        question: "How do I pay for the new license?",
        answer: "Payment for the new license can either be online through this web portal or through designated banks accross the country",
    },
    {
        id: 3,
        icon: <NotAllowed />,
        question:
            "What happens to a driver license that have recently expired?",
        answer: "Initiate a Renewal Application from this Portal",
    },
    {
        id: 4,
        icon: <Badge />,
        question: "What are classes of License?",
        answer: "The class of a licence is denoted by an alphabet. It specifies the category of vehicles that the licence holder is permitted to operate. Possible classes are: A, B, C, D, E, F, G. H, J.",
    },
    {
        id: 5,
        icon: <Case />,
        question: "What should I do if my payment fails?",
        answer: "If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.",
    },
    {
        id: 6,
        icon: <Envelope />,
        question:
            "I am a fresh Applicant. What do i need to do to obtain the new Driver License?",
        // answer: "1. Visit an accredited driving school and complete the mandatory drivers training.2. Obtain a driving school certificate number from the accredited driving school to be used to initiate a fresh application.3. Access the nigeriadriverslicence.frsc.gov.ng, click on DL Application tab and select New Driver’s Licence Application.4. Provide your Certificate Number (Which is the number on the certificate provided from the driving school attended) and click on submit.5. Fill in your application details and submit and make payment.",
        answer: (
            <>
                <ol className="grid gap-3 pl-2 list-decimal">
                    <li>
                        Visit an accredited driving school and complete the
                        mandatory drivers training.
                    </li>
                    <li>
                        {" "}
                        Obtain a driving school certificate number from the
                        accredited driving school to be used to initiate a fresh
                        application.
                    </li>
                    <li>
                        Access the nigeriadriverslicence.frsc.gov.ng, click on
                        DL Application tab and select New Driver’s Licence
                        Application.
                    </li>
                    <li>
                        Provide your Certificate Number (Which is the number on
                        the certificate provided from the driving school
                        attended) and click on submit.
                    </li>
                    <li>
                        Fill in your application details and submit and make
                        payment.
                    </li>
                </ol>
            </>
        ),
    },
];

const Faq = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <section className="space-y-6 md:space-y-8 lg:space-y-10 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">
                FAQ
            </h1>

            <div className="space-y-8 py-12 bg-[#EEFFF5] text-[#53686A] text-center">
                <div className="space-y-3">
                    <h5 className="text-xs  font-semibold">FAQs</h5>
                    <h2 className="text-3xl text-[#202224] font-semibold">
                        Ask us anything
                    </h2>
                    <p className="text-sm">
                        Have any questions? We're here to assist you.
                    </p>
                </div>

                <div className="w-full md:max-w-[235px] bg-white pl-7 pr-3 py-2 mx-auto relative">
                    <Lens className="absolute left-2 inset-y-[14px]" />
                    <input
                        type="text"
                        name="searchText"
                        className="w-full text-xs text-[#53686A] outline-none bg-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search here"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-20">
                {faqs.map((faq) => (
                    <QuestionItem
                        key={faq.id}
                        icon={faq.icon}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faq;
