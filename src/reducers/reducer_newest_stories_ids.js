import { FETCH_NEWESTSTORIES_IDS, DELETE_NEWESTSTORIES } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_NEWESTSTORIES_IDS:
            return action.payload;
        case DELETE_NEWESTSTORIES:
            return [];
        default:
            return state;
    }
}
