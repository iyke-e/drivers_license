

const Input = (props) => {
    return (
        <div className="mb-6 h-fit shrink-0 basis-[45%] max-w-[543px]">
        <label htmlFor={props.htmlFor} className="block mb-2 text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500">{props.labelName}</label>
        <input 
            type={props.type} 
            id={props.htmlFor} 
            pattern={props.pattern}
            className="py-3.5 px-7
                    focus-visible:outline-none
                     bg-[#F5FFF9]
                     border border-[#15803DB2]
                     text-[#8F8F8F] text-sm md:text-[17px]/[20px]
                     placeholder-green-700
                    rounded-lg 
                    focus:ring-green-500 focus:border-green-500 
                     block w-full
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600 
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    " 
            placeholder={props.placeholder}
            inputMode={props.inputMode}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
    )
}

export default Input
