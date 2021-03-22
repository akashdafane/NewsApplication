import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILUER,
    FILTER_USER_DATA,
} from '../actions/types'

const initialState = {
    items: [],
    filteredItems: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                items: action.payload
            };
        case FILTER_USER_DATA:
            return {
                ...state,
                filteredItems: action.payload
            }
        default:
            return state;
    }
}