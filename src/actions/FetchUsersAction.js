import Axios from 'axios';



export const FetchUsersAction = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch( error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}


export default FetchUsersAction;