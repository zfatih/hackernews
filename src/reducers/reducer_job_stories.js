import { FETCH_JOBSTORIES, DELETE_JOBSTORIES } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_JOBSTORIES:
            return action.payload;
        case DELETE_JOBSTORIES:
            return [];
        default:
            return state;
    }
}
