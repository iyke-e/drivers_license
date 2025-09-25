import axios from 'axios';
import { redirect } from "react-router-dom";

let auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxOTU1NzgzLCJpYXQiOjE3MjE5NTM5ODMsImp0aSI6Ijk3ZmI4MzJjYjBjYjRkMDRiMTRlMDhjNzdlMGUwOGVjIiwidXNlcl9pZCI6MTJ9.m6iPft_vNgRDdes15z8g2V50Osj75cgPp9vIHL2IZQE";

export const fetchProfile = (token,pathname) =>{
console.log({token})
  let data= axios.get('https://saviorte.pythonanywhere.com/api/profile/', {
      headers: {
        'Authorization':`Bearer  ${token}`,
      },}
    ).then(response => {console.log(response.data)
     const data = response.data;
     console.log(data)
     return data
    })
    .catch(error => {console.log(error)
      throw redirect(`/login?message=Please-login-to-continue&redirectTo= ${pathname}`);
    });

    console.log({data})
    return data
}

export const updateProfile = async (token,profile) => {
const response = await axios.patch('https://saviorte.pythonanywhere.com/api/profile/',
  profile ,{
    headers: {
      'Authorization':`Bearer  ${token}`,
    }})

  return response
}