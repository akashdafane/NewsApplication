import { combineReducers } from 'redux';
import person from './personReducer';
import todos from './todos';
import fromReducer from './formReducer';
import fetchapireducer from './FetchApiReducer';

export default combineReducers({
    person,
    todos,
    fromReducer,
    fetchapireducer,
})