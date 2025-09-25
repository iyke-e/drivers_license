import React from "react";

const StepLine = ({isSubmitted, isPaid}) => {
    return (
        <div
            className={`separator flex-1 h-[2px] ${
                (isSubmitted || isPaid) ? "bg-custom-green" : "bg-neutral-200"
            } -mt-6`}
        ></div>
    );
};

export default StepLine;
