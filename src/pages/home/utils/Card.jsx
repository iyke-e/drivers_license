
const Card = (props) => {
    return (
        <div className="odd:bg-[#F3FFF8] relative flex flex-col justify-center py-4 md:py-8 md:px-6 xl:px-52">
            <div className="grid md:grid-cols-2 py-16 md:gap-16 lg:gap-48 ">
                    <span className={`hidden md:block rounded-[50px] w-[325px] min-h-[325px] ${props.index % 2 == 0 ?"order-1" : ""}`}>
                        <img src={props.image} alt="image" className="object-fit w-full h-full rounded-[50px]"/>
                    </span>
                    <div className="flex flex-col items-center justify-start gap-10 p-5 md:p-0 text-[#002334]">
                        <p className='font-medium text-2xl md:text-[30px]/[38px] text-wrap '>
                            {props.title}
                        </p>
                        <p className="text-lg font-normal text-wrap">{props.paragraph}</p>

                         <a href="#services" className=" w-fit bg-custom-green text-[18px]/[19.2px] text-white px-8 py-4 font-medium rounded-full min-w-36 transition-all duration-500 hover:opacity-50">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Card
