import NaijaStates from "naija-state-local-government";
import React from 'react';

const Select = (props) => {
    const handleSelectOptions = (event) =>{
        event.preventDefault()
        let value = event.target.getAttribute('value')
        console.log(value)
        props.closeModal(value)
    }
    return (
        // <select
        //     name="state"
        //     id="state"
        //     onChange={(e) => {
                
        //     }}
        //     className="block rounded-md border border-[#e0e0e0] bg-white py-[10px] px-4 text-base font-medium text-[#6B7280] outline-none focus:shadow-md
        //     *:rounded-full *:w-fit *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10"
        // >
        //     <option value="">--Select state--</option>
        //     {NaijaStates.states().map((state, index) => (
        //         <option key={index} value={state}>
        //             {state}
        //         </option>
        //     ))}
        // </select>

        <ul    className="w-full h-[400px] overflow-scroll overflow-x-hidden left-0 bottom-0 absolute block rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:shadow-md
         *:border *:border-custom-grey *:bg-white">
        {props.value =="state" ? NaijaStates.states().map((state, index) => (
            <li className="w-full p-4 text-base" key={index} value={state} onClick={handleSelectOptions}>
                {state}
            </li>
        )) :         NaijaStates.lgas(String(props.value)).lgas.map((state, index) => (
            <li className="w-full p-4 text-base" key={index} value={state} onClick={handleSelectOptions}>
                {state}
            </li>
        ))}
        </ul>
    )
}

export default Select


