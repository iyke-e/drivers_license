import React from "react";

const CustomModal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="rounded-3xl shadow-lg w-full max-w-[478px] p-6 w-100 z-50 bg-[#F8FFF7] relative">
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default CustomModal;