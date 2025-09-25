import React from 'react'

const Input = (props) => {
    return (
        <label className="w-full">
        <span className="text-[#232323] text-base font-normal mb-2 flex w-full items-end">{props.label} {props.error !="" && <p className="text-xs text-orange-700 ml-auto">{props.error}</p>}</span>
        <input
        name={props.name}
        className={`${props.error !="" && props.error != undefined ? "border-orange-700" :"border-[#DFEAF2]"} w-full bg-transparent focus-visible:outline-0 border text-black rounded-2xl px-5 py-4 text-[#414552] block placeholder-[#718EBF]`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange} />
        
    </label>
    )
}

export default Input
