import { useEffect, useState } from 'react';
import img from "../../../assets/images/img2.jpg";
import img2 from "../../../assets/images/img5.jpg";
import img1 from "../../../assets/images/img6.jpg";
import img4 from "../../../assets/images/img8.jpg";
import img5 from "../../../assets/images/img9.jpg";
import HeroSVG from '../utils/HeroSVG';

export const Hero = () => {

  let imgArray =[img, img1, img2,img4,img5]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let interval=  setInterval(() => {
      index ==4 ? setIndex(0) : setIndex(index+1);
    }, 10000)
    return () => {
      clearInterval(interval)
    };
  },[index]);
  // bg-[url("src/assets/images/img7.jpg")]
  return (
    <section className="flex flex-1 p-10 md:px-16 py-24 lg:px-32 bg-white w-screen h-fit lg:h-screen">
      <aside className='flex bg-bottom justify-center items-center md:items-start flex-1 flex-col'>
        <span className="text-[#002334] w-full md:text-xl lg:text-[25px]/[40px] font-light text-wrap text-lg text-center md:text-left">
          <h3 className="md:text-3xl lg:text-[60px]/[70px] text-2xl font-extrabold text-pretty mb-16">
            Premium Driver's License Application
          </h3>
          Get your Driver license done anywhere in the world <em className="text-[#15803D] ">in an instant</em>
        </span>
        <div className="flex mt-8 items-center gap-7">
        <a href="#services" className=" bg-custom-green text-[18px]/[19.2px] text-white px-8 py-4 font-medium rounded-full min-w-36 transition-all duration-500 hover:opacity-50">Get Started</a>

        </div>

      </aside>
      <aside className=" hidden md:flex md:flex-1 md:h-full overflow-hidden">
          {/* <Slider data={imgArray} /> */}
          <HeroSVG />

      </aside>

    </section>
  );
};
