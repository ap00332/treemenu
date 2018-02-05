import {SAY_HELLO} from '../actions';

const initialState = {
    name:'Ameet'
}

const sayMyApp = (state= initialState, action) =>{
    switch(action.type){
        case SAY_HELLO: 
        return {
                ...state,
                name : 'New name'
            }; 
        default:
         return state  
    }
    
}

export default sayMyApp;