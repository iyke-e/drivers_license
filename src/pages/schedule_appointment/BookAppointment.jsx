import React, { useState } from 'react'
import Input from './components/Input'

const BookAppointment = () => {
    const [state, setValue] = useState({
        name:"",
        email:"",
        phone_number:"",
        schedule_date: "",
        message:""
    })
    const [error, setError] = useState({})
    const editName = (args) => { 
        setValue({
            ...state,
            name:args
        })
    };
    const editEmail = (args) => {
        setValue({
            ...state,
            email:args
        })
      }
      const editPhone = (args) => { 
            const regExp = /^\d+$/;
            let value = args
        if (args.length<12){
          if (value ==="" || regExp.test(value)) {
            setValue({
                ...state,
                phone_number:args
            })
          }
        }
      }
      const editschedule = (args) => { 
        setValue({
            ...state,
            schedule_date:args
        })
    }

    const handleSubmit = () =>{
        event.preventDefaults();

    }
    const displayArray = [
        {
            "label": "Full Name",
            "type":"text",
            "value" : state.name,
            "placeholder" : "Full Name",
            "onChange": editName
        },
        {
            "label": "Email Address ",
            "type":"email",
            "value" : state.email,
            "placeholder" : "Email",
            "onChange": editEmail

        },
        {
            "label": "Phone Number ",
            "type":"text",
            "value" : state.phone_number,
            "placeholder": "Phonen Number",
            "inputmode":"decimal",
            "onChange": editPhone

        },
        {
            "label": "Available Date ",
            "type":"date",
            "value" : state.schedule_date,
            "onChange": editschedule

    
        }
    ]
    return (
        <section className="bg-white flex flex-col items-center w-screen h-screen px-6 md:px-20 lg:px-36 pt-12 pb-28">
            <h3 className='text-[#15803D] text-4xl font-bold'>Schedule Appointment </h3>
            <form onSubmit={handleSubmit} className='grid md:grid-cols-2 h-fit gap-x-20  mt-16 w-full  '>
                {
                    displayArray.map((item, index) =>{
                        return (
                            <Input key={`form-element-${index}`} 
                            type={item.type}
                            labelName={item.label}
                            htmlFor={item.placeholder}
                            placeholder={item.placeholder}
                            inputMode={item.inputmode}
                            pattern={item.pattern}
                            value={item.value}
                            required ={true}
                            onChange = {(event) =>{
                           item.onChange(event.target.value) } 
                            } />
                        )
                        })
                        }
                <label className="basis-[45%] max-w-[543px]">
                    <span className="block mb-2 text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500">Leave a message *</span>
                    <textarea required value={state.value} onChange={(event) =>{setValue({...state, message: event.target.value})}} className="py-3.5 px-7
                    focus-visible:outline-none
                     bg-[#F5FFF9]
                     border border-[#15803DB2]
                     text-[#8F8F8F] text-sm md:text-[17px]/[20px]
                     placeholder-green-700
                    rounded-lg 
                    focus:ring-green-500 focus:border-green-500 
                     block w-full min-h-32 resize max-h-[212px]
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600 
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    " > </textarea>
                </label>
                <div className=" w-full max-w-[543px] flex ">
                    <button type='button' className="ml-auto max-w-[237px] bg-[#15803D] mt-4  h-fit px-8 py-3 text-base rounded-lg text-white font-medium w-fit">Submit</button>

                </div>
            </form>
        </section>
    )
}

export default BookAppointment
