import application from "../../../assets/images/application.png";
import edit from "../../../assets/images/edit.png";
import print from "../../../assets/images/print.png";
import reissue from "../../../assets/images/reissue.png";
import renew from "../../../assets/images/renew.png";
import verify from "../../../assets/images/verify.png";
import Card from "../utils/Card";

let arrayService =[
    {
        "image": application,
        "title" : "New Application",
        "paragraph": "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    },
    {
        "image": renew,
        "title" : "Renew Application",
        "paragraph": "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    },
    {
        "image": reissue,
        "title" : "Reissue Application",
        "paragraph" : "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    },
    {
        "image": edit,
        "title" : "Edit Application",
        "paragraph": "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    },
    {
        "image": verify,
        "title" : "Licence Verification",
        "paragraph": "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    },
    {
        "image": print,
        "title" : "Print Appointment Slip",
        "paragraph": "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
    }
]
// px-6 md:px-8 lg:px-10 py-16  md:py-20 xl:px-16 

const Services = () => {
    return (
        <section idname="services" className='bg-[#f2f2f2] w-screen flex flex-col py-12'>
            <h3 className=" text-[#002334] text-2xl md:text-4xl font-semibold text-center">
            Our Services
            </h3>
            <p className=" mt-4 mb-8 md:mb-16 text-[#22D665] font-medium text-lg text-center">Here's what we offer</p>
            <div className='grid even:bg-[#F3FFF8]'>
                {arrayService.map((item, index) => {
                   return <Card image={item.image} paragraph={item.paragraph} index={index} title={item.title} key={`service-${index}`} />
                })}
            </div>
        </section>
    )
}

export default Services
