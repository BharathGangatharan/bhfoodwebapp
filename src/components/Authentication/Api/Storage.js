export const StoreUserData = (data) =>{
    localStorage.setItem('idToken',data)
}


export const StoreUserDataLogin = (data) =>{
    localStorage.setItem('idTokenLogin',data)
}


export const getUserData = () =>{
    return localStorage.getItem('idToken');
}

export const getUserDataLogin = () =>{
    return localStorage.getItem('idTokenLogin');
}

export const removeUserDataLogin = ()=>{
    localStorage.removeItem('idToken')
}