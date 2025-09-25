import { useState } from "react";
import captcha from "../assets/images/captcha.png";
const Captcha = (props) => {
    const [isLoading, setLoading] = useState(false)
    console.log({props})
    const handleClick = () =>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            props.isLoading(true)
        }, 4000)
    }
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center p-7 pt-32">
            <h3 className="text-[#15803D] font-semibold text-[35px]/[80px]">dannongroup.ng</h3>
            <span className="font-medium text-lg text-black">Verify you are human by completing the action below</span>
            <div className="mt-16 flex border border-[#15803D] rounded-2xl w-fit overflow-hidden">
            <label className="p-4 pr-9 md:pr-32 flex gap-4 items-center">
               
               {isLoading ? <div className="w-[45px] h-[45px] rounded-full animate-spin border-y-4 border-solid border-white border-t-[#15803D] shadow-md"></div>
               : <input type="checkbox" onClick={handleClick}  className="w-[45px] h-[45px]"/> }
                <span className="text-[#15803D] text-base font-normal">Click to Verify</span>
            </label>
                <button className="bg-[#15803D] p-4 max-h-[90px] max-w-[90px]">
                    <img className="invert object-fit w-full h-full" src={captcha} alt="captcha"/>
                </button>
            </div>
            <span className='font-light text-lg text-black mt-24'>dannongroup.ng needs to review the security of your connection before proceeding.</span>
        </div>
    )
}

export default Captcha 
