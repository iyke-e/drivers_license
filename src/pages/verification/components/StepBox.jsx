

const StepBox = ({ head, message, count }) => {
    return (
        <div className="bg-green-100 relative p-6 rounded-lg">
            <h3 className="text-2xl  text-custom-green font-bold mb-4">{head}</h3>
            <p>{message}</p>
            <div className="absolute border-green-100 border-[8px] bg-custom-green grid place-content-center text-white w-16 h-16 rounded-full text-xl top-0 -translate-y-4 translate-x-4 right-0 ">{count}</div>

        </div>
    )
}

export default StepBox