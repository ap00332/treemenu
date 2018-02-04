import {SAY_HELLO} from '../actions';

const initialState = {
    name:'Ameet'
}

export default function sayMyApp(state= initialState, action){
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