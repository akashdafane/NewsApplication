// import Axios from 'axios';
// import {
//     LOADING,
//     LOADING_SUCCESS,
//     LOADING_ERROR
// } from './actionType';


// export const FetchUsersAction = (response) => {
//     return (dispatch) => {
//         dispatch({ type: LOADING });
//         Axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 console.log("1", response)
//                 dispatch({
//                     type: LOADING_SUCCESS,
//                      payload: response,
//                 })
//             })
//             .catch(error => {
//                 dispatch({
//                     type: LOADING_ERROR,
//                     error
//                 })
//             })
//     }
// }


// export default FetchUsersAction;

import Axios from 'axios';
import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILUER,
    FILTER_USER_DATA,
    FETCH_API_SUCCESS,
} from './types'


export function fetchUserAction(){
    return function(dispatch){
        Axios('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        .then(response => dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response
        }))
    }
}

export function fetchApiAction(){
    return function(dispatch){
        Axios('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_API_SUCCESS,
            payload: res
        }))
    }
}



// export function filterUserData () {
//     return function(dispatch){
//         Axios('https://jsonplaceholder.typicode.com/users')
//         // .then(res => res.json())
//         .then(res => dispatch({
//             type: FILTER_USER_DATA,
//             payload: res
//         }))
//     }
// }