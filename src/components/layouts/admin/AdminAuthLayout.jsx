import { Navigate, Outlet, useLocation, useNavigation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ReusableModal from "../../ReusableModal";
import Spinner from "../../Spinner";
import SideNav from "./navigation/SideNav";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"
import coatofarm from "../../../assets/coatOfArm.png"
import logo from "../../../assets/Logo1.svg"
import NavBar from "./navigation/NavBar";
import { useState } from "react";
import MobilePageName from "./navigation/MobilePageName";




const AdminAuthLayout = () => {
    const { pathname } = useLocation();
    const { state } = useNavigation();
    const isLoading = state === "loading";
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    // console.log(isLoading);

    const [pageName, setPageName] = useState('')

    const { isAdminAuthenticated } = useAuth();

    return isAdminAuthenticated ? (
        <div className="grid  lg:grid-cols-[252px_1fr] w-screen">
            <div className={` absolute bg-[rgba(0,0,0,0.5)] w-screen lg:relative lg:w-auto z-10   ${isSideNavOpen ? 'left-0' : 'left-[-100%]'}   lg:left-0 h-screen`}>
                <div className={`h-screen bg-white grid absolute lg:relative grid-rows-[100px_1fr] pb-4`}>
                    <div className="flex justify-between items-center px-4 py-6">
                        <div className="flex items-center gap-2 lg:p-[32px]" >
                            <img className="h-6 md:h-[42px]" src={coatofarm} alt="coatOfArm.png" />
                            <img className="h-6 md:h-[30px]" src={logo} alt="" />

                        </div>
                        <IoClose className="text-2xl lg:hidden" onClick={() => { setIsSideNavOpen(false) }} />
                    </div>


                    <aside className=" h-[full] overflow-y-auto w-[252px] md:inline border-r border-[#E6EFF5]">
                        <SideNav closeNav={() => { setIsSideNavOpen(false) }} />
                    </aside>
                </div>
            </div>



            <div className="grid  h-screen grid-rows-[70px_1fr] md:grid-rows-[100px_1fr]">
                <header className=" border-l border-b h-[100px] border-[#E6EFF5]">

                    <NavBar openNav={() => { setIsSideNavOpen(true) }} pageName={pageName} />

                </header>
                <main className="bg-[#F5F7FA] h-[full]  overflow-y-auto flex-1 p-4 md:px-10 md:py-8">
                    <MobilePageName pageName={pageName} />
                    <Outlet context={{ pageName, setPageName }} />

                    <ReusableModal isOpen={isLoading}>
                        <Spinner />
                    </ReusableModal>
                </main>
            </div>
        </div>
    ) : (
        <Navigate
            to="/admin"
            state={{
                requestedUrl: pathname,
                message: "Please login to continue!",
            }}
            replace={true}
        />
    );
};

export default AdminAuthLayout;
