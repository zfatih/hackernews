import { FETCH_TOPSTORY } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_TOPSTORY:
            if(state.length<20 && !state.includes(action.payload.data))    
                return [ ...state, action.payload.data ];
            return state;
        default:
            return state;
    }
}
