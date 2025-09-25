import useAuth from "./hooks/useAuth";
import { getTomorrowsDate } from "./pages/appointment/utils";
import axios from "axios";

export const getAppointment = async (id) => {
    const profile = JSON.parse(sessionStorage.getItem("profile"));
    const appointmentData = {
        appointment_date: getTomorrowsDate(),
        appointment_time: "10:00 AM",
    };
    
    return [profile, appointmentData];

    // return {
    //     first_name: "John",
    //     last_name: "Doe",
    //     middle_name: "Oxen",
    //     email: "john96@gmail.com",
    //     phone_number: "08054321098",
    //     nin: 2714679806,
    //     state_of_residence: "Lagos",
    //     local_govt_area: "Mainland",
    //     application_id: "QWSERT-12345-12GH90",
    //     capture_center:
    //         "Beside FO filling station, Unilag Premise, Lagos Mainland, Lagos.",
    //     appointment_date: getTomorrowsDate(),
    //     appointment_time: "10:00 AM",
    // };
};

export const getProfile = async () => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));

    try {
        // const res = await axios.get(
        //     `http://localhost:3000/profiles?userId=${userId}`
        // );

        // const res = await axios.get("https://saviorte.pythonanywhere.com/api/profile/", {
        //     headers: {
        //         Authorization: `Bearer ${auth.access}`
        //     }
        // });
        const res = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                Authorization: `Bearer ${auth.user.token}`
            }
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const updateUserProfile = async (data) => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));

    try {
        // const res = await axios.put(
        //     `http://localhost:3000/profiles?id=${userId}`,
        //     data
        // );

        const res = await axios.put("https://saviorte.pythonanywhere.com/api/profile/", data, {
            headers: {
                Authorization: `Bearer ${auth.access}`
            }
        });

        return res.data;
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
};

export const getLicense = async (userId) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/licenses?userId=${userId}`
        );

        return res.data[0];
    } catch (error) {
        return error;
    }
};
