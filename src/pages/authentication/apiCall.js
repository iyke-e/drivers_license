import axios from 'axios';

const API_BASE_URL = 'https://saviorte.pythonanywhere.com/api';

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, data);
    if (response.status === 200) {
      const authData = {
        access: response.data.access,
        refresh: response.data.refresh,
      };
      sessionStorage.setItem('auth', JSON.stringify(authData));
      scheduleTokenRefresh(response.data.refresh);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const createAccount = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup/`, data);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const updateAccessToken = async (refresh) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/token/refresh`, {
      refresh,
    });
    updateUserCredentials(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    // Handle token refresh failure (e.g., logout user)
  }
};

const updateUserCredentials = (data) => {
  let auth = JSON.parse(sessionStorage.getItem('auth'));
  auth.access = data.access;
  sessionStorage.setItem('auth', JSON.stringify(auth));
};

const scheduleTokenRefresh = (refresh) => {
  // Refresh token 5 minutes before it expires (assuming 30-minute expiry)
  setTimeout(() => {
    updateAccessToken(refresh);
  }, 25 * 60 * 1000); // 25 minutes
};

export const logout = () => {
  sessionStorage.removeItem('auth');
  // Additional logout logic if needed
};
