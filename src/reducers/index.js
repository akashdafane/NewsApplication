import { combineReducers } from 'redux';
import person from './personReducer';
import todos from './todos';
import formReducer from './formReducer';
import FetchApiReducer from './FetchApiReducer';
import loginReducer from './loginReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import IncrementReducer from './IncrementReducer'

const persistConfig = {
    key: 'formReducer',
    storage: storage,
    whiteList: ['formReducer']
}

const rootReducer = combineReducers({
    person,
    todos,
    formReducer,
    FetchApiReducer,
    loginReducer,
    IncrementReducer,
})

export default persistReducer(persistConfig, rootReducer); 