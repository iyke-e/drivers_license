import React from "react";

const ActionButton = ({ children, icon, styles, ...rest }) => {
    return (
        <button
            className={`${styles} w-full font-medium py-4 flex items-center justify-center gap-2 rounded-xl`}
            {...rest}
        >
            {icon}
            <span className="">{children}</span>
        </button>
    );
};

export default ActionButton;
