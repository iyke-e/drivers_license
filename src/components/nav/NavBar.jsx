import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import DesktopMenu from "./DesktopMenu";
import { dropdownData } from "../utils/data";

const NavBar = () => {
    const { auth, setAuth } = useAuth();
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isRealTimeOpen, setIsRealTimeOpen] = useState(false);

    return (
        <nav className="fixed w-screen z-50 bg-custom-green py-4 print:hidden">
            <DesktopMenu
                solutionsState={{ isSolutionsOpen, setIsSolutionsOpen }}
                servicesState={{ isServicesOpen, setIsServicesOpen }}
                realTimeState={{ isRealTimeOpen, setIsRealTimeOpen }}
                dropdownData={dropdownData}
                auth={auth}
                setAuth={setAuth}
            />
        </nav>
    );
};

export default NavBar;
