import {getUserData,getUserDataLogin,removeUserDataLogin} from './Storage';

export const isAuthenticated = () =>{
    return getUserData()!=null?true:false;
}



export const isAuthenticatedLogin = () =>{
    return getUserDataLogin()!=null?true:false;
}


export const logout = ()=>{
    removeUserDataLogin();
}

