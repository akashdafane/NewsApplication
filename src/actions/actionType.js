// import Login from "../Components/Login";

export const LOGIN = "LOGIN";
// export const REGISTER = "REGISTER";
export const LOGINPROCESSING = "LOGINPROCESSIONG";
// export const REGISTERING = "REGISTERING";

// export  const login1 = (data) =>{console.log("loginaction",data); dispatch({ type: LOGIN,action:{loggedIn:true} })},

export function login1(data) {
    console.log("data",data)
    return dispatch => {
        return dispatch({ type: LOGIN, action: data })
    }
}



// export const LOADING = "LOADING";
// export const LOADING_SUCCESS = "LOADING_SUCCESS";
// export const LOADING_ERROR = "LOADING_ERROR";
