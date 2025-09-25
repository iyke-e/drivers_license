import React from 'react';
import { BsCameraFill } from "react-icons/bs";
const ProfilePicture = (props) => {
    return (
        <div className='flex md:flex-row flex-col items-center md:items-end mt-8 md:mt-16 gap-6 md:gap-10'>
              <div className=" flex shrink-0">
            </div>
            <form>
              <label className="block overflow-hidden relative ">
                <img className="h-60 w-60 object-cover border-2 border-custom-grey rounded-full hover:opacity-50" src={props.state} alt="Current profile photo" />
                <div className=" rounded-full cursor-pointer bg-[#00000040] absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-all">
                <BsCameraFill className="w-12 h-12 fill-white" />
                  <span className="text-base w-6/12 text-center text-white">CHANGE PIC</span>
                </div>
                <input type="file" accept='image/' idName="passport_photo" name="passport_photo" className="hidden w-full text-sm text-slate-500
                  file:mr-2 md:file:mr-4 file:py-4 file:px-6
                  file:rounded-full file:border-0
                  file:text-base file:font-semibold
                  file:bg-violet-50 file:text-[#22C55E]
                  hover:file:bg-[#22C55EFF] hover:file:text-white
                "
                onChange={props.onImageChange}/>
              </label> 

            </form>
        </div>
    )
}

export default ProfilePicture
