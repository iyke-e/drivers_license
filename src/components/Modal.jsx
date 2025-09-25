import React from "react";

const Modal = ({ isOpen, children, mode }) => {
    if (!isOpen) return null;

    return (
        <div className={`fixed ${mode ? "lg:hidden" : ""} inset-0 flex items-center justify-center z-50`}>
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg p-6 mx-4 w-full max-w-[30rem] z-50 relative">
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default Modal;