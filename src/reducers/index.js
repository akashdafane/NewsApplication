import { combineReducers } from 'redux'
import person from './personReducer'
import todos from './todos'

export default combineReducers({
    person,
    todos
})