import React from 'react'
import greenBg from "../../../assets/images/green-bg.png"
import outlineBg from "../../../assets/images/green-outline.png"

const NewsLetter = () => {
    return (
        <div className='bg-white relative py-20 flex items-center justify-center w-screen bg-gradient-to-b from-white to-[#F3FFF8]'>
            <div className="relative bg-white grid px-3 md:px-10 py-5 rounded-l-[50px] rounded-b-[50px] shadow-md md:max-w-[890px]">
               <div className="relative z-20 p-5 md:p-0 flex  flex-col">
                <h5 className="text-2xl text-[#093A51] tracking-widest font-semibold">NEWSLETTER</h5>
                <span className="mt-5 text-lg text-[#093A51] font-semibold">No Spammy Sales – Only Insights</span>
                <p className="mt-2 text-base font-light text-[#093A51] text-wrap">Stay Industry-connected with our monthly newsletter written by our editorial team.</p>
                <input className=" mt-5 border border-[#B1BED8] max-w-[280px] md:max-w-[560px] bg-white p-4 text-[#838383] text-xl outine-0 focus:outline-0 rounded-md" />
                <button className=" mt-8 bg-[#15803D] text-white rounded-md px-7 py-3 w-fit">Join</button>
                </div> 


                <img src={outlineBg} alt="image" className='absolute bottom-0 right-20'/>
                <img src={greenBg} alt="image" className='absolute top-0 right-0'/>
            </div>

            
        </div>
    )
}

export default NewsLetter
