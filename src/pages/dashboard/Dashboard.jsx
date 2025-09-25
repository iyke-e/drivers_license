import { Link } from "react-router-dom";
import dpplaceholder from "../../assets/dashboard/dpplaceholder.svg";
import useAuth from "../../hooks/useAuth";
import { dashboardLinks } from "./component/data";







const Dashboard = () => {
    const { auth } = useAuth()

    console.log(auth.user)




    return (
        <div className="md:px-10 xl:px-20 max-w-[100vw] overflow-hidden px-4  py-4 pb-20 ">

            <div >
                <div className=" flex md:py-4 gap-3 items-center">
                    <div className=" ">
                        {
                            !auth.user?.image ? <img src={dpplaceholder} alt="" /> : <img className="h-16 rounded-full" src={auth.user?.image} alt="" />
                        }

                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl">Hello <span className="text-custom-green font-bold">{auth.user?.username}</span> </h1>
                        <p className="text-base  md:text-lg">Welcome Back!</p>

                    </div>
                </div>




            </div>



            <div className="grid w-full my-10 gap-4 grid-cols-2  lg:grid-cols-4 md:grid-cols-3">

                {
                    dashboardLinks.map((card, index) => (
                        <Link
                            key={index} to={card.link}
                            style={{ background: `linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${card.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                            className={`hover:scale-105 transition-all hover:-translate-y-2  duration-300  rounded-2xl grid gap-2 content-center text-custom-green p-4 h-[225px] `} >
                            <h3
                                className="text-white text-xl  font-semibold before:inline-block before:h-1 relative before:absolute before:-bottom-[32px] before:left-0 before:bg-[#22D665] before:w-[55px]">
                                {card.name}</h3>
                        </Link>

                    ))
                }





            </div>

        </div >
    );
};

export default Dashboard;