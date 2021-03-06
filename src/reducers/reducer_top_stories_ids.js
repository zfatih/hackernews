import { FETCH_TOPSTORIES_IDS, DELETE_TOPSTORIES } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_TOPSTORIES_IDS:
            return action.payload;
        case DELETE_TOPSTORIES:
            return [];
        default:
            return state;
    }
}
