import React from "react";
import { FiChevronDown, FiChevronUp, FiMinus, FiPlus } from "react-icons/fi";

const DropDownButton = ({ isOpen, isMobile, title }) => {
    return (
        <div
            className={`flex items-center ${
                isMobile ? "justify-between" : "gap-2"
            } text-grey lg:text-white cursor-pointer`}
        >
            <span className="text-grey lg:text-white transition-colors whitespace-nowrap">{title}</span>
            {isMobile ? (
                <span className="">{isOpen ? <FiMinus /> : <FiPlus />}</span>
            ) : (
                <span className="">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            )}
        </div>
    );
};

export default DropDownButton;
