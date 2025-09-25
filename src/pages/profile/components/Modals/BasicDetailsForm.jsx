import NaijaStates from "naija-state-local-government";
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from '../../api';
import Gender from "../../utils/Gender";
import Input from "../../utils/Input";
import Select from "../../utils/Select";


const BasicDetailsForm = (props) => {
    const [stateDropdown, setDropdown] = useState(false)
    const [state, setState] = useState()
    const [lgaDropdown, setLgaDropdown] = useState(false)
    const [profileDetails, setProfile] = useState(props.formData)
const user = JSON.parse(sessionStorage.getItem("auth"));
  
  
    console.log({profileDetails})
  
    const editFirstName = (args) => {
      setProfile({
          ...profileDetails,
          first_name:args
      })
    };
    const editMiddleName = (args) => { 
        setProfile({
            ...profileDetails,
            middle_name:args
        })
    };
    const editSurname = (args) => { 
        setProfile({
            ...profileDetails,
            last_name:args
        })
    };
    const editEmail = (args) => {
        setProfile({
            ...profileDetails,
            email:args
        })
      };
    const editGender = (args) => { 
        setProfile({
            ...profileDetails,
            gender:args
        })
    };
    const editAddress = (args) => { 
        setProfile({
            ...profileDetails,
            street_address:args
        })
    };
    const editPhone = (args) => { 
      console.log({profileDetails})
          const regExp = /^\d+$/;
          let value = args
      if (args.length<12){
        if (value ==="" || regExp.test(value)) {
          setProfile({
              ...profileDetails,
              phone_number:args
          })
        }
      }
    }
  
    const editDob = (args) => { 
        setProfile({
            ...profileDetails,
            date_of_birth:args
        })
    }
    const editState = (args) => { 
      console.log(args)
      setProfile({
              ...profileDetails,
              state_of_residence:args
      })
    };
    const editLga = (args) => { 
      setProfile({
          ...profileDetails,
          local_govt_area:args
      })
    };

  
  const updateBasicDetails = async (event) => {

    event.preventDefault()
    console.log({profileDetails})
    console.log(Object.values(profileDetails))
    let checkNullValue 
    for (let value in profileDetails){
        console.log(profileDetails[value])
        if (profileDetails[value] == null  && profileDetails[value] == undefined ){
            checkNullValue = [value, profileDetails[value]]
            break;
        }
    }
    console.log(checkNullValue)
    const isEmpty = Object.values(profileDetails).some(x =>  (x == null || x == '' || x== undefined));
    console.log({isEmpty})
    if(isEmpty ==  false){
      //axios code to push
      const formData = new FormData()

      for(let item in profileDetails){
        formData.append(item,profileDetails[item])
      }
      
        const response = await updateProfile(user.access,formData)
        console.log({response})
        if (response.status == 200){
             toast.success("saved successfully")
             props.updateBasicDetails(profileDetails)
             setTimeout(() => {
                props.closeModal()
              
            }, 1500)
        }

    }
    else{
       
        console.log(checkNullValue[0]+" is required")
        toast.error(checkNullValue[0]+" is required")
    }
  };
  

    const handleChangeDropdown = (args) => {
        setDropdown(!stateDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            console.log('i am in the if statement')
            setState(args)
            editState(args.toLowerCase())
            if (args != profileDetails.StateofAddress) {
                editLga()
                
            }
            console.log(NaijaStates.lgas(args))
        }
      };
      useEffect(()=>{
        typeof state == "string" ? editState(state.toLowerCase()) : null
      },[state])
      const handleLgaChangeDropdown = (args) => {
        setLgaDropdown(!lgaDropdown)
        console.log('args:', args)
        if(typeof args =="string"){
            editLga(args.toLowerCase())
        }
      };


      console.log(state)

    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='relative w-10/12 md:w-3/4 lg:w-3/5 grid p-4 md:p-8 bg-white rounded-lg h-4/5 md:h-5/6 lg:h-3/4 overflow-scroll overflow-x-hidden' onSubmit={updateBasicDetails}>
            <Toaster />  
                <h3 className='sticky md:relative w-fit text-xl md:text-2xl lg:text-4xl text-custom-green mb-8'>Edit Basic Details</h3> 
                <div className='grid md:grid-cols-2 gap-1 md:gap-3'>
                <Input 
                    type="text"
                    labelName="First Name"
                    htmlFor='firstName'
                    placeholder='First Name'
                    value={profileDetails.first_name}
                    onChange={editFirstName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Middle Name"
                    htmlFor='middleName'
                    placeholder='Middle Name' 
                    value={profileDetails.middle_name}
                    onChange={editMiddleName}
                    required={true} />
                <Input 
                    type="text"
                    labelName="Surname"
                    htmlFor='surname'
                    placeholder='Surname' 
                    value={profileDetails.last_name}
                    onChange={editSurname}
                    required={true} />
                <Input 
                    type='email'
                    labelName="Email Address"
                    htmlFor='email'
                    placeholder='Email Address'
                    value={profileDetails.email}
                    onChange={editEmail}
                    required={true} />
                <Input 
                    type='text'
                    labelName="phone"
                    htmlFor='Phone Number'
                    placeholder='Phone Number'
                    inputMode="decimal"
                    value={profileDetails.phone_number}
                    onChange={editPhone}
                    required={true} />
                <Gender 
                    value={profileDetails.gender}
                    onChange={editGender}
                 />
                <Input 
                    type='text'
                    labelName="Home Address"
                    htmlFor='address'
                    placeholder='Home Address'
                    value={profileDetails.street_address}
                    onChange={editAddress}
                    required={true} />
                <Input 
                    type='date'
                    labelName="Date of Birth"
                    htmlFor='dob'
                    value={profileDetails.date_of_birth}
                    onChange={editDob}
                    required={true}
                     />
                     <label className='relative grid gap-2 w-full mb-6' onClick={handleChangeDropdown}>
                        <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>State</span>
                        {stateDropdown ?
                        <Select closeModal={handleChangeDropdown} value="state"/>:
                        <button type="button" className="w-full h-full py-2 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{profileDetails.state_of_residence ? profileDetails.state_of_residence :"Select a state"}</button>

                        }
                     </label>
                     <label className='relative grid gap-2 w-full mb-6' onClick={handleLgaChangeDropdown}>
                        <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>L.G.A</span>                       
                        {lgaDropdown && profileDetails.state_of_residence && stateDropdown == false?
                        <Select closeModal={handleLgaChangeDropdown} value={profileDetails.state_of_residence}/>:
                        <button type="button" className="w-full h-full py-2 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{profileDetails.local_govt_area != undefined && profileDetails.local_govt_area.length > 0 && profileDetails.local_govt_area !=""? profileDetails.local_govt_area : profileDetails.state_of_residence !=null && profileDetails.state_of_residence !="" ? "Select your LGA" : "Select a state"}</button>

                        }

                     </label>
                    </div>
                     <div className=" bg-white sticky bottom-[-24px] flex items-center gap-5 justify-end py-4">
                        <button type='button' onClick={props.closeModal} className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default BasicDetailsForm
