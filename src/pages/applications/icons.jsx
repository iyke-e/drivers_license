import React from "react";
import successIcon from "../../assets/images/payment-success-icon.svg"

export const StepDot = ({ ...rest }) => {
    return (
        <svg
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <circle cx="3.40078" cy="3.13751" r="2.725" fill="#15803D" />
        </svg>
    );
};

export const PaymentSuccessIcon = ({ ...rest }) => {
    return (
        <img src={successIcon} alt="" {...rest} />
    );
};

export const CloseIcon = ({ ...rest }) => {
    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M27.59 7.07817C21.9564 1.44452 12.7114 1.44452 7.07777 7.07817C1.44413 12.7118 1.44413 21.9568 7.07777 27.5904C12.7114 33.2241 21.8119 33.2241 27.4456 27.5904C33.0792 21.9568 33.2237 12.7118 27.59 7.07817ZM21.3786 23.4013L17.3339 19.3566L13.2892 23.4013L11.2669 21.379L15.3116 17.3343L11.2669 13.2896L13.2892 11.2673L17.3339 15.312L21.3786 11.2673L23.4009 13.2896L19.3562 17.3343L23.4009 21.379L21.3786 23.4013Z"
                fill="#15803D"
            />
        </svg>
    );
};
