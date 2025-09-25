import React from "react";
import womanDriver from "./assets/woman-driver.png";
import manDriver from "./assets/man-driver.png";

const About = () => {
    return (
        <section className="space-y-10 md:space-y-14 lg:space-y-20 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">
                About Us
            </h1>

            <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 lg:gap-[114px] px-10 md:px-20">
                <p className="text-[#1A2434] md:text-xl w-full lg:max-w-[572px] leading-10 tracking-[2%]">
                    Welcome to our platform, your trusted partner for all things
                    related to driver’s licensing. We are dedicated to
                    simplifying the process of obtaining, renewing, or replacing
                    your driver’s license, ensuring a smooth and hassle-free
                    experience from start to finish.
                </p>
                <img
                    src={womanDriver}
                    className="w-full lg:max-w-[512px]"
                    alt="A woman driving"
                />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[114px] px-10 md:px-20">
                <img
                    src={manDriver}
                    className="w-full lg:max-w-[512px]"
                    alt="A smiling driver"
                />

                <div className="space-y-8">
                    <p className="text-[#1A2434] md:text-xl w-full lg:max-w-[572px] leading-10 tracking-[2%]">
                        We understand that navigating the complexities of
                        driver’s license regulations can be overwhelming. That’s
                        why we’ve made it our mission to provide clear,
                        accurate, and up-to-date information to guide you every
                        step of the way. Whether you're a first-time driver or
                        need assistance with renewals or changes, our platform
                        offers comprehensive resources, helpful tools, and
                        personalized support to meet your needs.
                    </p>
                    <p className="text-[#1A2434] md:text-xl w-full lg:max-w-[572px] leading-10 tracking-[2%]">
                        We are committed to delivering exceptional service,
                        transparency, and convenience, all in one place. Join
                        us, and let’s hit the road together — safely and
                        confidently.
                    </p>
                    <p className="text-[#1A2434] md:text-xl w-full lg:max-w-[572px] leading-10 tracking-[2%]">
                        Drive with ease. Drive with us!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
