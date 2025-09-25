import React from 'react'
import bgImage from "../../../assets/images/licene-process-image.png"

const LicenseProcess = () => {
    return (
        <section style={{backgroundImage:`url("${bgImage}")`}} className='w-screen'>
           <div className="bg-[#000000BF] backdrop-blur p-4 md:p-10 lg:py-12 lg:px-40  flex-col flex">
                <div className='text-2xl md:text-3xl lg:text-[40px]/[50px] text-white font-semibold  text-center p-4 md:p-8 text-wrap flex flex-col items-center justify-center'>
                                Four simple steps to get your <br/>license 
                </div>
            <div className='grid md:grid-cols-2'>

            <div className='flex p-6 xl:p-12 items-center gap-5 rounded-lg'>
                <p className='shrink-0 bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white text-[20px]/[28px] flex items-center justify-center'>01</p>
                <p className='font-normal text-white text-lg text-wrap text-left'> Start and complete the<br/> registration form </p>
            </div>
            <div className='  flex p-6 xl:p-12 items-center gap-5 rounded-lg'>
                <p className='shrink-0 bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>02</p>
                <p className='font-normal text-white text-lg text-wrap text-left'> Pay for your instant DLC, Generate <br/> an appointment slip</p>
            </div>
            <div className=' flex p-6 xl:p-12 items-center gap-6 rounded-lg'>
                <p className='shrink-0 bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>03</p>
                <p className='font-normal text-white text-lg text-wrap text-left'> Biometrics registration</p>
            </div>
            <div className='flex p-6 xl:p-12 items-center gap-6 rounded-lg'>
                <p className='shrink-0 bg-[#22C55E] w-16 h-16 rounded-full font-normal text-white  text-[20px]/[28px] flex items-center justify-center'>04</p>
                <p className='font-normal text-white text-lg text-wrap text-left'>Done, Driver license </p>
            </div>

        </div> 
        </div>
        </section>
    )
}

export default LicenseProcess
