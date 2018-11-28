import { FETCH_SHOWSTORIES, DELETE_SHOWSTORIES } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_SHOWSTORIES:
            return action.payload;
        case DELETE_SHOWSTORIES:
            return [];
        default:
            return state;
    }
}
