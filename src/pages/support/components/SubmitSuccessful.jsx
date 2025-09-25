
import { IoCheckmarkDoneCircle } from "react-icons/io5";


const SubmitSuccessful = ({ BtnFunction }) => {
    return (
        <div className="fixed  top-0 left-0 w-full h-full bg-black/50 grid place-content-center">

            <div className="bg-white rounded-xl w-[25rem] p-6">
                <div className="grid gap-4  mb-4 justify-items-center">
                    <IoCheckmarkDoneCircle className="text-7xl text-green-700" />
                </div>
                <h1 className="text-center font-semibold text-lg">
                    Request Submitted Succesfully</h1>



                <div className="bg-white p-6 mt-4 rounded-xl shadow-[0_0_20px_2px_rgba(0,0,0,0.1)]">

                    <p>Our Team would get back to you as soon as possible</p>

                    <button onClick={BtnFunction} className="bg-custom-green w-full mt-6 text-white py-2.5 px-8 rounded-md">Proceed</button>

                </div>


            </div>

        </div>
    )
}

export default SubmitSuccessful