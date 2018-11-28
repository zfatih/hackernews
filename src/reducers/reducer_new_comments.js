import { FETCH_NEWCOMMENTS, DELETE_NEWCOMMENTS } from "../actions/types";

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_NEWCOMMENTS:
            return [...state, action.payload];
        case DELETE_NEWCOMMENTS:
            return [];
        default:
            return state;
    }
}
