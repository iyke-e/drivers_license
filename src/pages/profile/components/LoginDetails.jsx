
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Button from '../utils/Button';
import SingleDetail from '../utils/SingleDetail';
import LoginDetailsForm from './Modals/LoginDetailsForm';

const LoginDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState({
        password: "oluwapelumi@#76666",
        newPassword: "",
        confirmPassword: ""
    })
    console.log({password})
    
    const editOldPassword = (args) => { 
        setPassword({
            ...password,
            oldPassword: args
        })
     };
    const editNewPassword = (args) => {
        setPassword({
            ...password,
            newPassword:args
        })
      };
    const editConfirmPassword = (args) => {  
        setPassword({
            ...password,
            confirmPassword : args
        })
    };

    const handleEditLoginDetails = () =>{
        setShowModal(true)
    }
    const handleCloseModal = () =>{
        setShowModal(false)
    }

    const handleShowPassword = () => { 
        setShowPassword(!showPassword)
     };
     let queryString = password.password.replace(/[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~@]/g,"*");

    return (
        <>
        <div className='flex mt-10 md:p-6 relative border-2 border-custom-grey '>
            <h4 className="p-3 bg-white text-lg md:text-2xl font-medium absolute top-[-29px]">Login Details</h4>
            <Button handleEditForm={handleEditLoginDetails} />
            <div className=' mt-5 md:mt-0 flex md:flex-row flex-col w-full items-end md:items-center'>
                {showPassword ? <BsEye className='flex-auto md:order-last text-xl md:text-4xl mr-3' onClick={handleShowPassword}/>: <BsEyeSlash className='flex-auto text-xl md:text-4xl mr-3 md:order-last' onClick={handleShowPassword} />}
                <SingleDetail
                    label='Password'
                    details={showPassword ? password.password : queryString} />
            </div>
        </div>
        {showModal ? 
        <LoginDetailsForm 
            oldpassword={password} 
            closeModal ={handleCloseModal}
            editConfirmPassword={editConfirmPassword}
            editNewPassword={editNewPassword}
            editOldPassword={editOldPassword}
        /> : null}
    </>
    )
}

export default LoginDetails
