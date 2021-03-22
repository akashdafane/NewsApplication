// import Login from "../Components/Login";

import * as all from './types'

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



export const sortByPrice = payload => ({
    type: all.SORT_BY_PRICE,
    payload 
  });
  
  export const filterByPrice = payload => ({
    type: all.FILTER_BY_PRICE,
    payload
  });
  
  export const filterByValue = payload => ({
    type: all.FILTER_BY_VALUE,
    payload
  });
  
   
  export const loadData = payload => ({
    type: all.FETCH_API_SUCCESS,
    payload
  });
  
  export const loadNewPage = payload => ({
    type: all.LOAD_NEW_PAGE,
    payload
  });
  
  export const loadExactPage = payload => ({
    type: all.LOAD_EXACT_PAGE,
    payload
  });


  export const sortByAlphabet = payload => ({
    type: all.SORT_BY_ALPHABET,
    payload
  });

  