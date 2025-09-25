

const ApplicationBody = ({ metricsCard, chart, table }) => {
    return (
        <div className="grid gap-6  lg:gap-8 lg:grid-cols-[300px_1fr]">
            <div className="bg-white w-full rounded-2xl max-w-[300px]  h-[300px] grid place-content-center">{metricsCard}</div>
            <div className="bg-white  h-[300px] rounded-xl  grid place-content-center"> {chart}</div>
            <div className="bg-white min-h-[300px] lg:col-span-2  grid place-content-center"> {table}</div>
        </div>
    )
}

export default ApplicationBody