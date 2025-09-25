import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ name, to, ...rest }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    isActive ? "font-bold" : "font-normal",
                    "text-grey lg:text-white px-6 py-4 lg:px-0 lg:py-0 hover:font-bold",
                ].join(" ")
            }
            {...rest}
        >
            {name}
        </NavLink>
    );
};

export default CustomNavLink;
