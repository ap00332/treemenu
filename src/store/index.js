import {createStore} from 'redux';
//import {thunk} from 'redux-thunk';
import rootReducer from './rootreducer';


let store = createStore(rootReducer);

export default store;