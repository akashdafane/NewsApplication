import { FIELD_ARRAY } from '../actions/types'



const initialState = {
    fieldArray: [],
}

const fieldArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIELD_ARRAY:
            return {
                ...state,
                fieldArray: action.payload
            }
            default:
                return state;
    }
}

export default fieldArrayReducer;