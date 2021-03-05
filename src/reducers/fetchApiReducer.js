import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILUER,
} from '../actions/types'

const initialState = {
    items: [],

}

export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                items: action.payload
            };
            default:
                return state;
    }
}