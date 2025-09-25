import React from 'react';
import { FaEdit } from "react-icons/fa";


const Button = (props) => {
    return (
        <button className="shadow-lg flex items-center gap-3 rounded-lg bg-white text-base md:text-xl font-medium absolute top-[-22px] right-10 cursor-pointer border border-green-100 p-2" onClick={ props.handleEditForm}>
            <FaEdit  />
            Edit
        </button>
    )
}

export default Button
