import axios from "axios";

export const submitApplication = async (data, type, token) => {
    let endpointPath;

    if (type === "new")
        endpointPath =
            "https://saviorte.pythonanywhere.com/api/applications/new/";
    if (type === "renewal")
        endpointPath =
            "https://saviorte.pythonanywhere.com/api/applications/renewal/";
    if (type === "reissue")
        endpointPath =
            "https://saviorte.pythonanywhere.com/api/applications/reissue/";

    try {
        const response = await axios.post(endpointPath, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                error: error.response.data,
                status: error.response.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                error: error.request,
            };
        } else {
            // Something happened in setting up the request
            return {
                error: error.message,
            };
        }
    }
};

export const getProfile = async () => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const { access } = auth;

    try {
        const response = await axios.get(
            "https://saviorte.pythonanywhere.com/api/profile/",
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            }
        );

        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                error: error.response.data,
                status: error.response.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                error: error.request,
            };
        } else {
            // Something happened in setting up the request
            return {
                error: error.message,
            };
        }
    }
};
