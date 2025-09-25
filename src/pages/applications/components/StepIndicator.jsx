import React from "react";
import { StepDot } from "../icons";

const StepIndicator = ({isSubmitted, showStep, isCurrentStep, title}) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <div
                className={`icon p-4 flex items-center justify-center border rounded-full hover:cursor-pointer`}
                onClick={showStep}
            >
                {(isCurrentStep || isSubmitted) && (
                    <StepDot />
                )}
            </div>
            <span className="">{title}</span>
        </div>
    );
};

export default StepIndicator;
