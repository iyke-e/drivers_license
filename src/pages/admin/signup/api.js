import axios from "axios";
export const createAccount = async (data) => {
    try {
        const response = await axios.post(
            "https://saviorte.pythonanywhere.com/api/signup/",
            data
        );
        
        if (response.status === 201) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}