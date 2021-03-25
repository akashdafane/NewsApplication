import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILUER,
    FILTER_USER_DATA,
    SORT_BY_ASC,
    SORT_BY_DESC,
    FETCH_API_SUCCESS,
    ITEM
} from '../actions/types'

const initialState = {
    // items: [],
    filteredItems: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        // case FETCH_API_SUCCESS:
        //     return {
        //         ...state,
        //         items: action.payload
        //     };
        
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                filteredItems: action.payload
            }
        case SORT_BY_ASC:
            case SORT_BY_DESC:
            return{
                ...state,
                filteredItems: action.payload
            }
        case ITEM:
            return{
                ...state,
                filteredItems: action.payload
            }
        default:
            return state;
    }
}