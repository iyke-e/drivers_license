import phone from "../../../assets/phone.svg"
import supportimg from "../../../assets/support/supportImg.svg"
import envelop from "../../../assets/envelop.svg"

const SupportHero = () => {
    return (
        <div className="grid gap-8 ">

            <img src={supportimg} alt="" />

            <div className="w-full">
                <p className="md:text-base/8 text-sm text-justify">Don't hesitate to reach out to our friendly customer support team. They are happy to assist you with any questions or challenge you may encounter on this platform. you can reach out to us via the channels below</p>
                <div className="grid gap-4 mt-6">
                    <div className="flex gap-3 items-start">
                        <img className="w-6" src={phone} alt="" />
                        <p>+234900123456</p>
                    </div>
                    <div className="flex gap-3">
                        <img className="w-6" src={envelop} alt="" />
                        <p>idl_support@gmail.com</p>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default SupportHero