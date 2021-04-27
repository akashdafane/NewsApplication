import * as action from './types'


export const addName = (payload) =>(console.log("action",payload),{
  type: action.SET_FIRSTNAME,
  payload
})