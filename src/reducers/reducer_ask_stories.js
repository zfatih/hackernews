import { FETCH_ASKSTORIES, DELETE_ASKSTORIES } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_ASKSTORIES:
            return action.payload;
        case DELETE_ASKSTORIES:
            return [];
        default:
            return state;
    }
}
