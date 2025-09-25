import React from "react";

const QuestionItem = ({ icon, question, answer }) => {
    return (
        <div className="space-y-5">
            {icon}
            <div className="space-y-2 text-[#373435]">
                <h4 className="text-lg font-medium">{question}</h4>
                <p className="text-sm">{answer}</p>
            </div>
        </div>
    );
};

export default QuestionItem;
