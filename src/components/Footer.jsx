import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1.svg";
import coatofarm from "../assets/coatOfArm.png";


const Footer = () => {

    const linkStyle = "flex hover:translate-x-1  transition-all hover:text-[#15803D] duration-100 text-[#093A51] gap-2"
    const linkheadStyle = "text-lg mb-4 text-[#22D665]"
    const iconStyle = " hover:text-green-600 hover:-translate-y-2 transition-all duration-200 text-3 cursor-pointer grid place-content-center h-10 w-10 rounded-full p-1 border border-[#1ACC00]"
    return (
        <footer className="bg-[#F3FFF8]  ">

            <div className="flex flex-wrap tran px-4 md:px-10 xl:px-20 md:flex-row flex-col gap-10 md:gap-14 justify-between py-8  md:pt-16">



                <div>
                    <p className={linkheadStyle}>About Dannon</p>
                    <ul className="grid gap-4">
                        <li className="w-fit">
                            <Link to={"/application"} className={linkStyle}>

                                About Us
                            </Link>
                        </li>

                        <li className="w-fit">
                            <Link to={"/application"} className={linkStyle}>
                                Meet the team
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link to="/faq" className={linkStyle}>
                                Careers
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link to={"/support"} className={linkStyle}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link to={"/admin"} className={linkStyle}>
                                Admin
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className={linkheadStyle}>Solutions</p>
                    <ul className="grid gap-4">
                        <li className="w-fit">
                            <Link to={"/application"} state={"new"} className={linkStyle}>

                                New Application
                            </Link>
                        </li>

                        <li className="w-fit">
                            <Link to={"/application"} state="renewal" className={linkStyle}>
                                Renewal
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link to="/faq" className={linkStyle}>
                                Reissue
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link to={"/support"} className={linkStyle}>
                                Our Capabilities
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className={linkheadStyle}>Services</p>
                    <ul className="grid gap-4">


                        <li className="w-fit">
                            <Link className={linkStyle}>
                                Application Slip
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>
                                Capture center
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>
                                Driving school
                            </Link>
                        </li>

                    </ul>
                </div>

                <div>
                    <p className={linkheadStyle}>Real Time Update</p>
                    <ul className="grid gap-4">
                        <li className="w-fit">
                            <Link className={linkStyle}>About us</Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>Our history</Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>Careers</Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>Partnership</Link>
                        </li>
                        <li className="w-fit">
                            <Link className={linkStyle}>
                                Contact Us
                            </Link>

                        </li>

                    </ul>

                </div>

            </div>
            <div className="flex  flex-col lg:flex-row gap-10   px-4 md:px-10 xl:px-20 justify-between pb-4 border-b border-b-[#15803D] lg:items-center mt-[60px]">
                <div className="md:flex items-center gap-6 hidden ">
                    <img className="h-10 md:h-14" src={coatofarm} alt="" />
                    <img className="h-10 md:h-10" src={logo} alt="" />
                </div>
                <ul className="flex flex-col md:flex-row gap-4">
                    <li>Privacy Policy</li>
                    <li>Information</li>
                    <li>Security Policy</li>
                </ul>
                <ul className="flex items-center text-[#093A51] text-2xl gap-4">

                    <li className={iconStyle}>
                        <FaInstagram />
                    </li>
                    <li className={iconStyle}>
                        <FaTwitter />
                    </li>
                    <li className={iconStyle}>
                        <FaFacebookF />
                    </li>

                    <li className={iconStyle}>
                        <FaLinkedinIn />
                    </li>
                </ul>
                <div className="flex gap-6 md:hidden">
                    <img className="h-12 md:h-14" src={coatofarm} alt="" />
                    <img className="h-10 md:h-12" src={logo} alt="" />
                </div>
            </div>

            <div className=" py-4  text-center md:text-end px-4 md:px-10 xl:px-20">
                &copy; DANNON GROUP 2024

            </div>
        </footer>
    );
};

export default Footer;


<div className="grid gap-8 content-start ">

</div>

