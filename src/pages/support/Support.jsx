
import SubmitSuccessful from './components/SubmitSuccessful';
import SupportForm from './components/SupportForm';
import SupportHero from './components/SupportHero';
import { useState } from "react";

const Support = () => {
    const [Popup, SetPopup] = useState(false)

    window.scrollTo(0, 0)


    const [Message, SetMessage] = useState()

    return (
        <div className='p-4 pb-20 w-[100vw] md:py-8 md:px-10 xl:px-20'>
            <h1 className="text-custom-green text-center  mb-8 text-3xl md:text-[40px] font-bold ">Support Center</h1>
            <div className='grid md:grid-cols-2 gap-10 md:mt-8 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] mt-4 pt-6 p-4 md:p-8 lg:p-12'>
                <SupportHero />
                <SupportForm
                    BtnFunction={() => { SetPopup(true) }}
                />
            </div>


            {
                Popup && <SubmitSuccessful
                    BtnFunction={() => { SetPopup(false) }}
                />
            }
        </div>
    );
};

export default Support;
