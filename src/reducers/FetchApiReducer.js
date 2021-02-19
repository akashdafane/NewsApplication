import {
    LOADING,
    LOADING_SUCCESS,
    LOADING_ERROR
} from '../actions/actionType'


const initialState = {
    loading: false,
    data : [],
    error: null
}

 const FetchApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true}
        case LOADING_SUCCESS:
            return { ...state, data: action.response, loading: false}
        case LOADING_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export default FetchApiReducer