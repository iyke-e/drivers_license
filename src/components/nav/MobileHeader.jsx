import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../assets/Logo.svg";
import coatOfArm from "../../assets/coatOfArm.png";

const MobileHeader = ({ toggleDrawer, isMenuOpen }) => {
    return (
        <div className="w-full flex justify-between bg-white border-b text-grey p-6 shadow-sm">
            <div className="flex items-center divide-x divide-custom-green">
                <img
                    src={coatOfArm}
                    alt="Coat of Arm"
                    className="w-12 h-auto pr-3"
                />
                <img
                    src={logo}
                    alt="Dannon Group Logo"
                    className="w-40 h-10 pl-3"
                />
            </div>

            <div className="md:hidden">
                <button
                    className="text-3xl"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {<MdMenu />}
                </button>
            </div>
        </div>
    );
};

export default MobileHeader;
