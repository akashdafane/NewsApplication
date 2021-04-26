import {SET_FIRSTNAME} from '../Actions/types'

const initialState = {
  name:{}
}

const nameReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_FIRSTNAME:
      return{
        firstName : action
      };
      default:
        return state;
  }
}

export default nameReducer;