import { FETCH_TOPSTORY, DELETE_TOPSTORY } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_TOPSTORY:  
            return [ ...state, action.payload ];
        case DELETE_TOPSTORY:
            return state.filter(topStory => topStory.id !== action.payload);
        default:
            return state;
    }
}
