import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ buttonText, linkTo, state, classAttr, ...rest }) => {
    return (
        <Link
            to={linkTo}
            state={state}
            className={classAttr}
            {...rest}
        >
            {buttonText}
        </Link>
    );
};

export default LinkButton;
