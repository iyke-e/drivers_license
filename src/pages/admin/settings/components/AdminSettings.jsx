import { useState } from 'react';
import Input from './Input';
import SlidableToggle from './SlidableToggle';
const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
const AdminSettings = () => {
    const [data, setData] = useState({
        password:"",
        new_password:""
    })
    const [errors, setErrors] = useState({
        password:"",
        new_password:""
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setData({
            ...data,
            [name]: value
        })
    }
    const validate = () =>{
        let error ={}
        if(!data.password){
            error.password = "field is required";
        }
        if (!data.new_password) {
            error.new_password = "Field is required";
        } else if (!PWD_REGEX.test(data.new_password)) {
            error.new_password = "Alphanumeric password  required";
        }
        else if(data.password != data.new_password){
            error.new_password = "password dont match";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log("Validated");
            // Submit form logic here
        }
    };
    return (
        <div className="grid gap-2">
            <span className=" text-[#333B69] text-base font-medium mt-5 mb-2">Two-factor Authentication</span>
            <SlidableToggle />
            <span className=" text-[#333B69] text-base font-medium mt-5 mb-2">Change Password</span>
            <div className="md:w-1/2">
                <Input
                label={"Current Password"}
                onChange={handleChange}
                error={errors.password}
                placeholder={"**********"}
                value={data.password}
                type="password"
                name="password"
                />
            </div>
            <div className="md:w-1/2">
            <Input
                label={"New Password"}
                onChange={handleChange}
                error={errors.new_password}
                placeholder={"**********"}
                value={data.new_password}
                type="password"
                name="new_password"
            />
            </div>
            <div className="mt-8 flex w-full justify-end  h-fit">
                <button onClick={handleSubmit} className="bg-[#15803D] px-16 py-4 rounded-2xl text-white text-base font-medium">Save</button>
            </div>
        </div>
    )
}

export default AdminSettings
