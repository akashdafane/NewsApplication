// import Promise from 'es6-promise';
// import { act } from 'react-dom/test-utils';
// const LOGIN_PENDING = 'LOGIN_PENDING';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const LOGIN_ERROR = 'LOGIN_ERROR';

// function setLoginPending(isLoginPending) { 
//     return {
//         type: LOGIN_PENDING,
//         isLoginPending
//     };
// }

// function setLoginSuccess(isLoginSuccess) {
//     return {
//         type: LOGIN_SUCCESS,
//         isLoginSuccess
//     };
// }

// function setLoginError(loginerror) {
//     return {
//         type: LOGIN_ERROR,
//         loginerror
//     };
// }

// export function login(email, password){
//     return dispatch => {
//         dispatch(setLoginPending(false));
//         dispatch(setLoginSuccess(false));
//         dispatch(setLoginError(null));

//         sendLoginRequest(email, password)
//         .then(success => {
//             dispatch(setLoginPending(false));
//             dispatch(setLoginSuccess(true));
//         })
//         .catch(err => {
//             dispatch(setLoginPending(false));
//             dispatch(setLoginError(err));
//         });
//     };
// }

// export default function personReducer(state={
//     isLoginPending:false,
//     isLoginSuccess:false,
//     LOGIN_ERROR:null
// }, action){
//     switch (action.type){
//         case LOGIN_SUCCESS:
//         return {
//             ...state,
//             isLoginSuccess : action.isLoginSuccess
//         };
//         case LOGIN_PENDING:
//             return {
//                 ...state,
//                 isLoginPending : action.isLoginPending
//             }
//         case LOGIN_ERROR:
//             return {
//                 ...state,
//                 loginerror : action.loginerror
//             };
//         default:
//             return state;
//     }
// }

// const sendLoginRequest = (email, password) => {
//     return new Promise(resolve, reject){
//         if (email === 'demo@botreetechnologies.com' && password === 'admin') {
//             return resolve(true);
//         }else{
//             return reject(new Error('Invalid Email or Password'));
//         }
//     }
// }


// // export default personReducer;








import { LOGIN, REGISTER, LOGINPROCESSING,REGISTERING } from '../actions/actionType';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, loggedIn: true};
            break;
        case REGISTER:
            return {...state, registred: true};
            break;
        case LOGINPROCESSING:
            return {...state, loginProcessing: true};
            break;
        case REGISTERING:
            return {...state, registering: true};
            break;
        default:
            return state;

    }
};

export default reducer;