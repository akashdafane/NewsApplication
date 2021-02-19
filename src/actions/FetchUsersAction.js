import Axios from 'axios';
import { 
    LOADING,
    LOADING_SUCCESS,
    LOADING_ERROR
} from './actionType';


export const FetchUsersAction = () => {
    return (dispatch) => {
        dispatch({ type: LOADING });
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            console.log("1",response)
            dispatch({
                type: LOADING_SUCCESS,
                response,
            })
        } )
        .catch( error => {
            dispatch({
                type: LOADING_ERROR,
                error
            })
        })
    }
}


export default FetchUsersAction;