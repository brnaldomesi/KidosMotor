import { FETCH_FILTRED_CARS } from '../actions/types';

export default function(state= [], action){
    switch(action.type){
        case FETCH_FILTRED_CARS :
        console.log(action.payload);
            return action.payload;
        default : 
        return state;
    }
}