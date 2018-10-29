import { FETCH_TOPSTORIES_IDS } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_TOPSTORIES_IDS:
            return action.payload.data;
        default:
            return state;
    }
}
