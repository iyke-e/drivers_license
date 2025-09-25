import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DropDownMenu = ({ menuArray, closeMobileMenu }) => {
    const { auth } = useAuth();

    return (
        <div className="flex flex-col absolute z-30 left-6 md:left-5 mt-2 min-w-60 bg-white text-custom-green shadow-lg rounded-md border divide-y divide-solid divide-neutral-200">
            {menuArray.map((menu, index) => (
                <Link
                    key={index}
                    to={menu.to}
                    onClick={closeMobileMenu}
                    className="md:hover:bg-custom-green md:hover:text-white rounded-md py-2 px-6 capitalize"
                >
                    {menu.title}
                </Link>
            ))}
        </div>
    );
};

export default DropDownMenu;
