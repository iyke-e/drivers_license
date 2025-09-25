import React from "react";

const ReusableModal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-65"></div>
            <div className="bg-transparent rounded-lg p-6 w-100 z-50">
                <div className="mt-4 bg-transparent">{children}</div>
            </div>
        </div>
    );
};

export default ReusableModal;
