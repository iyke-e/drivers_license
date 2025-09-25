import React from 'react';
import Input from '../../utils/Input';

const LoginDetailsForm = (props) => {

    const updateBasicDetails = (event) => {
        event.preventDefault()
        props.closeModal()
      };
    return (
        <div className='z-10 fixed backdrop-blur w-screen h-full left-0 top-0 bg-[#00000080] flex items-center justify-center'>
            <form className='w-11/12 md:w-3/4 lg:w-2/5 grid p-2 md:p-8 bg-white rounded-lg' onSubmit={updateBasicDetails}>
                <h3 className='text-xl md:text-2xl lg:text-4xl text-custom-green mb-8'>Change Password</h3> 
                <Input 
                    type="password"
                    labelName="Old Password"
                    htmlFor='oldpassword'
                    placeholder=' Old Password' 
                    required={true}
                    onChange={props.editOldPassword} />
                <Input 
                    type="password"
                    labelName="New Password"
                    htmlFor='newpassword'
                    placeholder='New Password' 
                    required={true}
                    onChange={props.editNewPassword} />
                <Input 
                    type='password'
                    labelName="Confirm New Password"
                    htmlFor='confirmPassword'
                    placeholder='Confirm New Password'
                    onChange={props.editConfirmPassword}
                    required={true} />

                     <div className=" bg-white sticky bottom-[-24px] flex items-center gap-5 justify-end py-4">
                        <button type='button' onClick={props.closeModal} className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base bg-rose-600 text-white'>Cancel</button>
                        <button type='submit' className='px-3 py-3 md:px-8 md:py-4 rounded-lg text-xs md:text-base text-white bg-[#22C55E] w-fit'>Saves Changes</button>
                     </div>

            </form>
        </div>
    )
}

export default LoginDetailsForm
