import { combineReducers } from 'redux';
import person from './personReducer';
import todos from './todos';
import fromReducer from './formReducer';

export default combineReducers({
    person,
    todos,
    fromReducer,
})