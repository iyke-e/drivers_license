import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "./icons";

// Dropdown Component
const Dropdown = ({
    title,
    options,
    selectedOption,
    setSelectedOption,
    placeholder = "Select an option",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const listItemStyles = "text-xs py-2 px-4 hover:bg-gray-100 cursor-pointer";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between gap-4 text-xs font-medium text-[#2F394B] bg-transparent border border-[#DCDCE4] rounded-full shadow-sm py-2 px-4 w-full min-w-[187px] text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-custom-green"
            >
                <span className="bg-white px-2 py-1 rounded-full">{title}</span>
                <span className="text-nowrap">
                    {selectedOption ? selectedOption : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <ul className="absolute left-0 z-10 mt-2 w-full overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
                    <li
                        className={`${listItemStyles} opacity-50`}
                        onClick={() => handleSelect("")}
                    >{`Select none`}</li>

                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={listItemStyles}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
