import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducer/index'


const middleware = [thunk];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware),)
);

export default store