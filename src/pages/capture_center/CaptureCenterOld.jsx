import { useState } from "react";
import Button, { Button2 } from "../../components/utils/Button"
import NaijaStates from "naija-state-local-government";


let state

const CaptureCenter = () => {
    const [selectState, setSelectState] = useState('')
    const [selectLga, setSelectLga] = useState("")

    return (
        <div className="h-full pb-8 p-4 md:p-10 xl:px-20 py-8 ">
            <h1 className="text-2xl lg:text-5xl font-bold mb-1 text-custom-green">Capture Center</h1>
            <p className="text-sm text-gray-700">Available Capture Center Details</p>

            <div className="border-2 relative mt-6 md:mt-8 lg:mt-16 border-custom-green p-3 md:p-8">
                <h2 className="bg-white px-4 text-lg font-semibold text-custom-green -translate-y-1/2 top-0 left-4 absolute">Search</h2>
                <div className="flex flex-col md:flex-row mt-3 md:mt-8 gap-3 md:gap-6 items-center">
                    <div className="md:grid max-w-[30rem] w-full">
                        <label className="block mb-1" htmlFor="">State <span className="text-red-500">*</span></label>
                        <select name="states" onChange={(e) => { setSelectState(e.target.value) }} className="p-2 border">
                            <option value="">--Please Select--</option>
                            {NaijaStates.states().map((state, index) => (
                                <option key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className=" md:grid  max-w-[30rem] w-full">
                        <label className="block mb-1" htmlFor="">LGA <span className="text-red-500">*</span></label>
                        <select name="lga" onChange={(e) => { setSelectLga(e.target.value) }} className="p-2 border">

                            <option selected value="">--Please Select--</option>
                            {selectState && NaijaStates.lgas(selectState).lgas.map(
                                (lga, index) => (
                                    <option key={index} value={lga}>
                                        {lga}
                                    </option>
                                )
                            )}

                        </select>
                    </div>
                </div>

                <div className="grid mt-8 gap-3">
                    <p>Please enter code as displayed <span className="text-red-500">*</span></p>
                    <div className="flex gap-4">
                        <div>Capchacode</div>
                        <input className="border max-w-[10rem] w-full p-4" type="text" />
                    </div>




                </div>

                <div className="mt-8 justify-center md:justify-start flex gap-4 items-center ">
                    <Button>Search</Button>
                    <Button2>Reset</Button2>
                </div>
            </div>
        </div>


    )
}

export default CaptureCenter