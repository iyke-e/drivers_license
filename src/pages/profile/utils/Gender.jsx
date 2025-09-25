import { useState } from 'react'

const Gender = (props) => {
    const genderArray =["male","female"]
    const [dropdown, setDropdown] = useState(false)
    const [value, setValue] = useState(props.value)
    const handleDropdown = (event) => {
        event.preventDefault()
        setDropdown(!dropdown)
        let value
        if(event.target.getAttribute("value")){
            value= event.target.getAttribute("value")
            setValue(value)
            props.onChange(value)
        }
      };
    return (
        <label className='relative grid gap-2 w-full mb-6' onClick={handleDropdown}>
            <span className='text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500'>Gender</span>
        {dropdown ? 
        <ul className="w-full left-0 bottom-0 absolute block rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:shadow-md
        *:border *:border-custom-grey *:bg-white">
       {genderArray.map((value, index) => ( 
            <li className="w-full py-3 px-4 text-sm md:text[17px]/[20px]] bg-slate-50 text-center border-2 border-sky-500" key={index} value={value} onClick={handleDropdown}>
                    {value.toUpperCase()}
                  </li>)) }
           </ul>
           :
        <button type="button" className="w-full h-full py-2 px-5  border-2 border-custom-grey bg-slate-50 rounded-lg">{value ? value.toUpperCase() :"Select Gender"}</button>
        }

     </label>
    )
}

export default Gender
