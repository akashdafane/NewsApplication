import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from './reducers/formReducer';




// const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // pReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware),)
    
    
);

store.subscribe(()=>{
    console.log('state updated');
    console.log("store", store.getState());
})




const persistor = persistStore(store);

export  {store};
export { persistor };