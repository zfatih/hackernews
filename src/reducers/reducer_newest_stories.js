import { FETCH_NEWESTSTORY, DELETE_NEWESTSTORY } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_NEWESTSTORY:  
            return [ ...state, action.payload ];
        case DELETE_NEWESTSTORY:
            return state.filter(newestStory => newestStory.id !== action.payload);
        default:
            return state;
    }
}
