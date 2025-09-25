import React from 'react'

const Testimonials = () => {
    return (
        <section className='bg-[#f2f2f2] w-full p-4 md:p-10 lg:p-20 flex-col lg:flex-row flex gap-10'>
            <div className="self-center flex flex-col gap-1 p-6">
                <h3 className="text-[#22C55E] text-3xl md:text-5xl lg:text-7xl font-medium mb-5">Testimonials</h3>
                <span className="text-black text-2xl md:text-4xl text-wrap font-semibold">What our users say about us </span>
                <p className="mt-2 text-lg font-light text-gray-900 text-center mb-3">knwledge, expertise advices & confidence</p>
            </div>
            <div className="w-3/5 grid grid-cols-2 gap-7">
                <div className="grid place-items-center gap-4">
                    <figure className= "h-fit shadow-xl flex gap-5 flex-col items-center p-8 text-center bg-white rounded-3xl ">
                        <blockquote className=" text-wrap text-gray-500 ">
                            <h3 className="text-lg font-semibold text-gray-900">
                            Very easy this was to integrate
                            </h3>
                            <p className="mt-2 text-xl font-light">
                            If you care for your time, I hands down would go with this."
                            </p>
                        </blockquote>
                        <figcaption className="flex gap-3 items-center">
                            <img
                            className="w-20 h-20 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                            alt="user"
                            />
                            <div className="flex flex-col">
                            <div className="text-base font-medium text-gray-500 ">Bonnie Green</div>
                            <div className="text-sm font-light text-gray-500">
                                Developer at Random AI
                            </div>
                            </div>

                        </figcaption>
                    </figure>
                </div>
                <div className="grid place-content-center gap-8">
                    <figure className= "h-fit shadow-xl flex gap-5 flex-col items-center p-8 text-center bg-white rounded-3xl ">
                    <blockquote className=" text-wrap text-gray-500 ">
                        <h3 className="text-lg font-semibold text-gray-900">
                        Very easy this was to integrate
                        </h3>
                        <p className="mt-2 text-xl font-light">
                        If you care for your time, I hands down would go with this."
                        </p>
                    </blockquote>
                    <figcaption className="flex gap-3 items-end">
                        <img
                        className="w-20 h-20 rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                        alt="user"
                        />
                        <div className="flex flex-col">
                        <div className="text-base font-medium text-gray-500 ">Bonnie Green</div>
                        <div className="text-sm font-light text-gray-500">
                            Developer at Random AI
                        </div>
                        </div>

                    </figcaption>
                    </figure>
                    <figure className= "h-fit shadow-xl flex gap-5 flex-col items-center p-8 text-center bg-white rounded-3xl ">
                    <blockquote className=" text-wrap text-gray-500 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                        Solid foundation for any project
                        </h3>
                        <p className="mt-2 text-xl font-light">
                        Designing with Figma components that can be easily translated to
                        the utility classes of Tailwind CSS is a huge timesaver!"
                        </p>
                    </blockquote>
                    <figcaption className="flex gap-3 items-end">
                        <img
                        className="w-20 h-20 rounded-full"
                        src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                        alt="user"
                        />
                        <div className="flex flex-col">
                        <div className="text-base font-medium text-gray-500 ">Roberta Casas</div>
                        <div className="text-sm font-light text-gray-500">
                            Lead designer at Random
                        </div>
                        </div>
                    </figcaption>
                    </figure>
                </div>
{/* {                <div className="grid place-items-center gap-4">
                    <figure className= "h-fit shadow-md flex gap-5 flex-col items-center p-8 py-6 text-center bg-white rounded-lg border-4 border-black">
                        <blockquote className=" text-wrap text-gray-500 ">
                            <h3 className="text-lg font-semibold text-gray-900">
                            Very easy this was to integrate
                            </h3>
                            <p className="mt-2 text-xl font-light">
                            If you care for your time, I hands down would go with this."
                            </p>
                        </blockquote>
                        <figcaption className="flex gap-3 items-end">
                            <img
                            className="w-20 h-20 rounded-full"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                            alt="user"
                            />
                            <div className="flex flex-col">
                            <div className="text-base font-medium text-gray-500 ">Bonnie Green</div>
                            <div className="text-sm font-light text-gray-500">
                                Developer at Random AI
                            </div>
                            </div>

                        </figcaption>
                    </figure>
                </div>
                <div className="grid place-content-center gap-4">
                    <figure className= "h-fit shadow-md flex gap-5 flex-col items-center p-8 py-6 text-center bg-white rounded-lg border-4 border-black">
                    <blockquote className=" text-wrap text-gray-500 ">
                        <h3 className="text-lg font-semibold text-gray-900">
                        Very easy this was to integrate
                        </h3>
                        <p className="mt-2 text-xl font-light">
                        If you care for your time, I hands down would go with this."
                        </p>
                    </blockquote>
                    <figcaption className="flex gap-3 items-end">
                        <img
                        className="w-20 h-20 rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                        alt="user"
                        />
                        <div className="flex flex-col">
                        <div className="text-base font-medium text-gray-500 ">Bonnie Green</div>
                        <div className="text-sm font-light text-gray-500">
                            Developer at Random AI
                        </div>
                        </div>

                    </figcaption>
                    </figure>
                    <figure className= "h-fit shadow-md flex gap-5 flex-col items-center p-8 py-6 text-center bg-white rounded-lg border-4 border-black">
                    <blockquote className=" text-wrap text-gray-500 ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                        Solid foundation for any project
                        </h3>
                        <p className="mt-2 text-xl font-light">
                        Designing with Figma components that can be easily translated to
                        the utility classes of Tailwind CSS is a huge timesaver!"
                        </p>
                    </blockquote>
                    <figcaption className="flex gap-3 items-end">
                        <img
                        className="w-20 h-20 rounded-full"
                        src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
                        alt="user"
                        />
                        <div className="flex flex-col">
                        <div className="text-base font-medium text-gray-500 ">Roberta Casas</div>
                        <div className="text-sm font-light text-gray-500">
                            Lead designer at Random
                        </div>
                        </div>
                    </figcaption>
                    </figure>
                </div>  }          */}
            </div>
       </section>
    )
}

export default Testimonials
