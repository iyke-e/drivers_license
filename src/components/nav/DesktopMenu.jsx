import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDownButton from "../DropDownButton";
import DropDownMenu from "../DropdownMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideMenu from "../SideMenu";
import LinkButton from "../LinkButton";
import CustomNavLink from "./CustomNavLink";

// import useAuth from "../hooks/useAuth";
// import { dropdownData } from "./utils/data";

const DesktopMenu = ({
    solutionsState,
    realTimeState,
    servicesState,
    dropdownData,
    auth,
    setAuth,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const { solutions, services, realTimeUpdate } = dropdownData;
    const { isSolutionsOpen, setIsSolutionsOpen } = solutionsState;
    const { isServicesOpen, setIsServicesOpen } = servicesState;
    const { isRealTimeOpen, setIsRealTimeOpen } = realTimeState;
    const homeLinkText = auth.user ? "Dashboard" : "Home";
    const homeLinkTo = !auth.user ? "/" : "/dashboard";

    const toggleDrawer = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsSolutionsOpen(false);
        setIsRealTimeOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <div className="flex justify-between gap-4 items-center px-4 w-full max-w-[1280px] mx-auto">
            <Logo />

            <div className="hidden lg:flex items-center gap-6">
                <CustomNavLink name={homeLinkText} to={homeLinkTo} />

                {auth?.user && (
                    <div
                        className="relative py-4"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <DropDownButton
                            isOpen={isSolutionsOpen}
                            isMobile={false}
                            title="Solutions"
                        />

                        {isSolutionsOpen && (
                            <DropDownMenu
                                menuArray={solutions}
                                closeMobileMenu={closeMobileMenu}
                            />
                        )}
                    </div>
                )}

                <CustomNavLink name="Verify License" to="/verify-license" />

                <div
                    className="relative py-4"
                    onMouseEnter={() => setIsRealTimeOpen(true)}
                    onMouseLeave={() => setIsRealTimeOpen(false)}
                >
                    <DropDownButton
                        isOpen={isRealTimeOpen}
                        isMobile={false}
                        title="Real Time Updates"
                    />

                    {isRealTimeOpen && (
                        <DropDownMenu menuArray={realTimeUpdate} />
                    )}
                </div>

                <div
                    className="relative py-4"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <DropDownButton
                        isOpen={isServicesOpen}
                        isMobile={false}
                        title="Services"
                    />

                    {isServicesOpen && <DropDownMenu menuArray={services} />}
                </div>

                <CustomNavLink name="FAQ" to="/faq" />                
            </div>

            {!auth?.user && (
                <div className="hidden lg:flex items-center flex-row gap-4">
                    <LinkButton
                        buttonText="Login"
                        linkTo="/login"
                        classAttr="text-white border-white hover:bg-white hover:text-custom-green px-4 py-2 text-center bg-transparent border font-medium whitespace-nowrap rounded-lg"
                        onClick={closeMobileMenu}
                    />

                    <LinkButton
                        buttonText="Sign Up"
                        linkTo="/signup"
                        classAttr="bg-white hover:bg-custom-green hover:border-white border border-custom-green hover:text-white border-white px-4 py-2 text-center text-custom-green font-medium whitespace-nowrap rounded-lg"
                        onClick={closeMobileMenu}
                    />
                </div>
            )}

            {auth.user && (
                <div
                    onClick={() => {
                        setPopup(!popup);
                    }}
                    className="ml-auto lg:ml-0"
                >
                    {auth.user.Passport ? (
                        <img
                            className="h-14 rounded-full"
                            src={auth.user?.Passport}
                            alt=""
                        />
                    ) : (
                        <FaUserAlt className="text-3xl p-1 text-white cursor-pointer border border-white hover:border-2 rounded-full" />
                    )}
                </div>
            )}

            {auth.user && popup && (
                <SideMenu
                    closeFunc={() => {
                        setPopup(false);
                    }}
                />
            )}

            <div className="lg:hidden">
                <button
                    className="text-white"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {<MdMenu className="text-3xl" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <MobileMenu
                    menuState={{ isMenuOpen, setIsMenuOpen }}
                    solutionsState={{ isSolutionsOpen, setIsSolutionsOpen }}
                    servicesState={{ isServicesOpen, setIsServicesOpen }}
                    realTimeState={{ isRealTimeOpen, setIsRealTimeOpen }}
                    dropdownData={dropdownData}
                    setAuth={setAuth}
                    auth={auth}
                />
            )}
        </div>
    );
};

export default DesktopMenu;
