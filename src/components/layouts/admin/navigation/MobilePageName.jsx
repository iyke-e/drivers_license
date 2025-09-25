import { IoMdSearch } from "react-icons/io";


const MobilePageName = ({ pageName }) => {
    return (
        <>
            <h1 className='lg:hidden font-semibold text-2xl mb-4'>{pageName}</h1>

            <div className="search-Container md:hidden mb-4 w-full relative">
                <input className="bg-[#F5F7FA] pl-12 w-full p-3 rounded-full border focus:outline border-[#718ebf38] focus:border-[#718EBF] outline-none placeholder:text-[#8BA3CB]" placeholder="Search for Something" type="search" />
                <IoMdSearch className="text-[#718EBF]  text-2xl absolute top-[50%] -translate-y-1/2 left-3.5" />
            </div>
        </>
    )
}

export default MobilePageName