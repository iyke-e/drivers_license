

const Input = (props) => {
    return (
        <div className="mb-6">
        <label htmlFor={props.htmlFor} className="block mb-2 text-base md:text-[20px]/[22px] font-medium text-green-700 dark:text-green-500">{props.labelName}</label>
        <input 
            type={props.type} 
            id={props.htmlFor} 
            className="md:px-5 md:py-4 py-3 px-2
                    focus-visible:outline-none
                     bg-slate-50
                     border border-green-500 
                     text-green-900 text-sm md:text-[17px]/[20px]
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
            onChange={(event)=>{props.onChange(event.target.value)}}

        />
    </div>
    )
}

export default Input
