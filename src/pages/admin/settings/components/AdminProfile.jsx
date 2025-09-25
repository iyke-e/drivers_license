import React, { useState } from 'react';
import Input from './Input';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;

export const AdminProfile = () => {
    const [profileData, setProfileData] = useState({
        full_name: "",
        user_name: "",
        email: "",
        password: "",
        dob: "",
        current_address: "",
        permanent_address: "",
        city: "",
        postal_code: "",
        country: "",
        prodile_pic:""

    });

    const [errors, setErrors] = useState({
        full_name: "",
        user_name: "",
        email: "",
        password: "",
        dob: "",
        current_address: "",
        permanent_address: "",
        city: "",
        postal_code: "",
        country: "",
        prodile_pic:""
    });
    const handleImageChange =  (event) =>{
            const file = event.target.files[0]
                const reader = new FileReader()

                reader.onload = ()=>{
                    setProfileData({
                        ...profileData,
                        profile_pic: reader.result
                    });


                }
            reader.readAsDataURL(file)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfileData({
            ...profileData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const validate = () => {
        let error = {};

        if (!profileData.full_name) {
            error.full_name = "Field is required";
        }
        if (!profileData.user_name) {
            error.user_name = "Field is required";
        }
        if (!profileData.email) {
            error.email = "Field is required";
        } else if (!EMAIL_REGEX.test(profileData.email)) {
            error.email = "Invalid email";
        }
        if (!profileData.password) {
            error.password = "Field is required";
        } else if (!PWD_REGEX.test(profileData.password)) {
            error.password = "Alphanumeric password is required";
        }
        if (!profileData.postal_code) {
            error.postal_code = "Field is required";
        } else if (!(profileData.postal_code.length === 10 || profileData.postal_code.length === 11)) {
            error.postal_code = "Incomplete postal code";
        }
        if (!profileData.country) {
            error.country = "Field is required";
        }
        if (!profileData.city) {
            error.city = "Field is required";
        }
        if (!profileData.current_address) {
            error.current_address = "Field is required";
        }
        if (!profileData.permanent_address) {
            error.permanent_address = "Field is required";
        }
        if (!profileData.dob) {
            error.dob = "Field is required";
        }
        if (!profileData.profile_pic) {
            error.dob = "Field is required";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log("Validated");
            // Submit form logic here
        }
    };

    const listArray = [
        {
            name: "full_name",
            type: "text",
            label: "Full Name",
            placeholder: "Full Name",
            value: profileData.full_name,
            error: errors.full_name
        },
        {
            name: "user_name",
            type: "text",
            label: "User Name",
            placeholder: "User Name",
            value: profileData.user_name,
            error: errors.user_name
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email Address",
            value: profileData.email,
            label: "Email Address",
            error: errors.email
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            value: profileData.password,
            error: errors.password
        },
        {
            name: "dob",
            type: "date",
            placeholder: "Date of Birth",
            label: "Date of Birth",
            value: profileData.dob,
            error: errors.dob
        },
        {
            name: "current_address",
            type: "text",
            placeholder: "Current Address",
            value: profileData.current_address,
            label: "Present Address",
            error: errors.current_address
        },
        {
            name: "permanent_address",
            type: "text",
            placeholder: "Permanent Address",
            label: "Permanent Address",
            value: profileData.permanent_address,
            error: errors.permanent_address
        },
        {
            name: "city",
            type: "text",
            placeholder: "City",
            value: profileData.city,
            error: errors.city,
            label: "City"
        },
        {
            name: "postal_code",
            type: "text",
            placeholder: "Postal Code",
            value: profileData.postal_code,
            error: errors.postal_code,
            label: "Postal Code"
        },
        {
            name: "country",
            type: "text",
            placeholder: "Country",
            value: profileData.country,
            error: errors.country,
            label: "Country"
        }
    ];

    return (
        <div className='grid lg:grid-cols-[161px_1fr_1fr] grid-flow-row gap-4 gap-8 pt-[55px]'>
            <div className=" h-fit flex flex-col w-fit">
                <label className="relative  rounded-full cursor-pointer h-fit w-fit border border-black">
                    <input onChange={handleImageChange} type="file" accept='image/' className="hidden" />
                    <img src={profileData.profile_pic} alt="profile image" className='aspect-square rounded-full h-[130px] object-fit' />
                    <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[#15803D] absolute bottom-0 -right-0'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_230_3380)">
                                <path d="M14.5872 4.16333L13.2366 5.51392C13.0989 5.65161 12.8763 5.65161 12.7386 5.51392L9.48661 2.26196C9.34892 2.12427 9.34892 1.90161 9.48661 1.76392L10.8372 0.41333C11.385 -0.134521 12.2757 -0.134521 12.8265 0.41333L14.5872 2.17407C15.138 2.72192 15.138 3.61255 14.5872 4.16333ZM8.32646 2.92407L0.633095 10.6174L0.0120011 14.177C-0.0729598 14.6575 0.345986 15.0735 0.826454 14.9915L4.38602 14.3674L12.0794 6.67407C12.2171 6.53638 12.2171 6.31372 12.0794 6.17603L8.82743 2.92407C8.68681 2.78638 8.46415 2.78638 8.32646 2.92407ZM3.63602 9.95825C3.47489 9.79712 3.47489 9.53931 3.63602 9.37817L8.14774 4.86646C8.30888 4.70532 8.56669 4.70532 8.72782 4.86646C8.88895 5.02759 8.88895 5.2854 8.72782 5.44653L4.2161 9.95825C4.05497 10.1194 3.79716 10.1194 3.63602 9.95825ZM2.57841 12.4221H3.98466V13.4856L2.09501 13.8167L1.18388 12.9055L1.51493 11.0159H2.57841V12.4221Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_230_3380">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </label>
                {errors.profile_pic  && <p className="text-xs text-orange-700 ml-auto">errors.profile_pic</p>}
            </div>
            <div className='grid md:grid-cols-2 lg:col-span-2  gap-6 '>
                {listArray.map((item, index) => (
                    <Input
                        key={index}
                        label={item.label}
                        onChange={handleChange}
                        error={item.error}
                        placeholder={item.placeholder}
                        value={item.value}
                        type={item.type}
                        name={item.name} 
                    />
                ))}
            </div>
            <div className="mt-8 flex w-full justify-end lg:col-span-3  h-fit">
                <button onClick={handleSubmit} className="bg-[#15803D] px-16 py-4 rounded-2xl text-white text-base font-medium">Save</button>
            </div>
        </div>
    );
}
