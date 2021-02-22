import { combineReducers } from 'redux';
import person from './personReducer';
import todos from './todos';
import formReducer from './formReducer';
import fetchapireducer from './FetchApiReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'formReducer',
    storage: storage,
    whiteList: ['formReducer']
}

const rootReducer = combineReducers({
    person,
    todos,
    formReducer,
    fetchapireducer,
})

export default persistReducer(persistConfig, rootReducer); 