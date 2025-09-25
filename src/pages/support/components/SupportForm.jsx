import { useEffect, useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from "../../../components/utils/Button"







const SupportForm = ({ BtnFunction }) => {
    const [value, setValue] = useState(null)
    const [formData, setFormData] = useState({})




    useEffect(() => {
        setFormData({
            ...formData,
            phoneNo: value,
        })

    }, [value])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }


    console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("you submitted a form")
    }





    const inputStyle = "bg-[#F5FFF9] px-4 py-3 border rounded-md w-full border-[rgba(21,128,60,0.7)]"

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="text-sm gap-x-10 ">


                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Full Name <span>*</span></label>
                    <input name="fullName" onChange={handleChange} className={inputStyle} type="text" placeholder="e.g John Doe" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Email Address <span>*</span></label>
                    <input name="email" onChange={handleChange} className={inputStyle} type="email" placeholder="e.g +2349009000222" required />
                </div>
                <div className=" mb-8" >
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Application ID <span>*</span></label>
                    <input name="applicationId" onChange={handleChange} className={inputStyle} type="text" placeholder="Enter Application ID" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Driver's Licence Number <span>*</span></label>
                    <input name="licenseNo" onChange={handleChange} className={inputStyle} type="text" placeholder="e.g 01/01/2024" required />
                </div>
                <div className=" mb-8">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Date of Birth (dd/mm/yyyy) <span>*</span></label>
                    <input name="dob" onChange={handleChange} className={inputStyle} type="date" placeholder="e.g 01/01/2024" required />
                </div>

                <div className=" mb-8">
                    <label className="mb-[2px] bg-transparent block text-base font-medium text-neutral-700">Contact Number <span>*</span></label>

                    <div className={inputStyle}>
                        <PhoneInput
                            international
                            placeholder="e.g +2349009000222"
                            countryCallingCodeEditable={false}
                            defaultCountry="NG"
                            value={value}
                            onChange={setValue}

                        />

                    </div>
                </div>

                <div className="col-span-2">
                    <label className="mb-[2px] block text-base font-medium text-neutral-700">Comments <span>*</span></label>
                    <textarea name="comments" onChange={handleChange} className="bg-[#F5FFF9] px-4 py-3 border rounded-md w-full border-[rgba(21,128,60,0.7)] text-base outline-none  mt-1 resize-none h-[10rem]" id="" required></textarea>
                </div>
            </form>
            <div className="mt-10 grid place-content-end">
                <Button BtnFunction={BtnFunction}>
                    Submit
                </Button>

            </div>
        </div>
    )
}

export default SupportForm