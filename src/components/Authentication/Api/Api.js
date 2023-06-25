import axios from 'axios';
import {getUserDataLogin} from './Storage';

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyDvavAkVc5ebYefF3zghywGLgttHVR_pRI";
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;



export const RegisterApi = (formValues) =>{

    let data = {
        displayName : formValues.name,
        email : formValues.email,
        password : formValues.password,
        mobile : formValues.mobile
    };
    console.log(data)

    return axios.post(REGISTER_URL,data)
}


export const LoginApi = (formValues) =>{

    let data = {
        email : formValues.email,
        password : formValues.password,
    };

    return axios.post(LOGIN_URL,data)
}


export const userDetailApi = () => {

    let data = {
        idToken:getUserDataLogin()
    }

    return axios.post(USER_DETAILS_URL,data);
}