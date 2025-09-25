import axios from "axios";
import { useState } from 'react';
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import appointmentSlip from "../../assets/appointment-slip.svg";
import { ResponseInvalid } from "./components/ResponseInvalid";
import Spinner from "./components/SpinningPopup";
import StepBox from "./components/StepBox";
    
export const appointmentDashboardLoader = async ({request}) => {
    const user = JSON.parse(sessionStorage.getItem("auth")) || false;
    const pathname = new URL(request.url).pathname;
    if(user){
        return user
    } 
    else{
        throw redirect(`/login?message=Please login to continue&redirectTo= ${pathname}`);
    }
}


 export const AppointmentDashboard = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [showResponse, setShowResponse] = useState(false)
    const user = useLoaderData()

    const navigate = useNavigate();
    const closeModals = () =>{
        setShowResponse(false)
        setPopUp(false)
    }
    const handleChange =(event) =>{
        setSearchKeyword(event.target.value)
    }
    const fetchAppointmentSlip =async () => { 
        // fetch code here
        // let  refresh = user.refresh
        // console.log(user.refresh)
        //   const response = await axios.post(
        //       "https://saviorte.pythonanywhere.com/api/token/refresh",
        //      {
        //       "refresh":refresh
        //       },
        //   );

        //   console.log({response})
        if(searchKeyword.length !=0){
            console.log({user});
            try {
                setPopUp(true)
                const response = await axios.get(`https://saviorte.pythonanywhere.com/api/applications/reference/${searchKeyword}/`,{
                    headers:{
                        'Authorization':`Bearer  ${user.access}`,
                    },
                })
                const data = await response.data
                console.log(data)
                
                if (response.status === 200) {
                    setTimeout(() =>{
                        
                        navigate('/appointment');
                    },2000)
            }
        }
        catch (err){
            console.log({err})
            setPopUp(false)
            if(err.response.data.message == "No application found with the provided reference ID"){
                setShowResponse(true)
            }
            if (err.response.data.detail == 'Given token not valid for any token type'){
                console.log("i am in the details")

            }
        }
        }
};


    return (
    <>
        <section className="w-screen grid md:grid-cols-2 gap-2 md:gap-6 p-6 md:p-10 xl:p-16 xl:p-20">
            <div className='flex flex-col gap-6 pt-15 md:justify-center'>
                <h3 className="text-custom-green text-2xl md:text-3xl lg:text-5xl font-medium text-left">Search your appointment slip</h3>
                <p className="text-justify mb-6 ">Securely get your and reprint your slip through this service. This quick and easy process uses secure technology to protect your information. Get started by entering your <em>appointment Id</em>, search and print to get your appointment slip.</p>
                <label>
                    <h4 className='mb-2 text-custom-green text-xl md:text-2xl lg:text-3xl font-medium text-left'>Appointment Id</h4>
                    <label className=" w-full mt-6 flex shadow-[2px_5px_10px_rgba(0,0,0,0.1)] border border-gray-50  rounded-full">
                        <input onChange={handleChange}value={searchKeyword} placeholder="Enter Application ID" className='bg-transparent py-4 pl-6 pr-2 text-black w-full rounded-xl md:rounded-none  border-customr-grey outline-0' />
                        <button onClick={fetchAppointmentSlip} className="bg-custom-green px-8 text-white    rounded-full">Submit</button>
                    </label>
                </label>
            </div>
            
            <img src={appointmentSlip}  className="row-start-1 md:col-start-2 md:pl-10 runded-lg max-h-[600px] max-w-[600px]  object-fit bg-cover"/>


            <div className="grid  md:grid-cols-2 gap-8 mt-14 col-span-2 ">
                        <StepBox
                            head={<>Get Started</>}
                            message={"Click on input field above to begin your verification process"}
                            count={"1"}
                        />
                        <StepBox
                            head={<>Search for the Appointment <s></s>lip</>}
                            message={"Kindly input your appointment ID correctly for fetching your appointment slip and click the submit button to begin the search!"}
                            count={"2"}
                        />

                        <StepBox
                            head={<>Search Feedback</>}
                            message={"Our system securely check those details against official records to confirm your appointmentm slip"}
                            count={"3"}
                        />
                        <StepBox
                            head={"Print Results"}
                            message={"You should recieve a clear and concise response within seconds linking you to your appointment slip"}
                            count={"4"}
                        />

                    </div>

        </section>
        {popUp ? <Spinner />
         : null }
         {showResponse? <ResponseInvalid 
            BtnFunction={closeModals} /> :null }
</>
    )
}

