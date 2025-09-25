import React from "react";

const FlexItem = ({ icon, text, textStyles }) => {
    return (
        <div className="flex items-center gap-2">
            {/* <Clock className="flex-none" /> */}
            {icon}
            <span className={`${textStyles} text-[#1D1E21]`}>{text}</span>
        </div>
    );
};

export default FlexItem;
