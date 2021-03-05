import { combineReducers } from 'redux';
import person from './personReducer';
import todos from './todos';
import formReducer from './formReducer';
import fetchApiReducer from './fetchApiReducer';
import loginReducer from './loginReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import IncrementReducer from './IncrementReducer'
import postReducer from './postReducer';

const persistConfig = {
    key: 'formReducer',
    storage: storage,
    whiteList: ['formReducer']
}

const rootReducer = combineReducers({
    person,
    todos,
    formReducer,
    fetchApiReducer,
    loginReducer,
    IncrementReducer,
    postReducer,
})

export default persistReducer(persistConfig, rootReducer); 