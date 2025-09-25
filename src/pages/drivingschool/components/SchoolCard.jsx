import React from "react";
import SchoolInfo from "./SchoolInfo";
import { Phone, Envelope, Dot } from "./icons";

const SchoolCard = ({ school, selectedSchool, onClick }) => {
    return (
        <div
            className={`w-full px-5 py-3 rounded-xl shadow-custom-shadow space-y-3 cursor-pointer ${
                school.name === selectedSchool?.name
                    ? "border border-custom-green"
                    : ""
            }`}
            onClick={() => onClick(school)}
        >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="text-lg font-medium text-[#1D1E21]">
                    {school.name}
                </h3>
                <div className="flex items-center gap-1">
                    <Dot fill={school.active ? "#15803D" : "#DD4C1E"} />
                    <span
                        className={`text-sm font-medium ${
                            school.active
                                ? "text-custom-green"
                                : "text-[#DD4C1E]"
                        }`}
                    >
                        {school.active ? "Available" : "Not Available"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1">
                    <Phone />
                    <span className="text-[10px] text-[#B8BBC3] font-medium">
                        {school.phone}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <Envelope />
                    <span className="text-[10px] text-[#B8BBC3] font-medium">
                        {school.email}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SchoolCard;
