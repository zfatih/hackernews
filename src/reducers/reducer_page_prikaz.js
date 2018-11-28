import { FETCH_ITEM,  FETCH_COMMENT, DELETE_PAGE_CONTENT } from "../actions/types";

export default function (state = { item: null, komentari: []}, action) {
    switch(action.type) {
        case FETCH_ITEM:
            return {
                item: action.payload,
                komentari: state.komentari
            }
        case FETCH_COMMENT:
            return {
                item: state.item,
                komentari: [...state.komentari, action.payload]
            };
        case DELETE_PAGE_CONTENT:
            return {
                item: null,
                komentari: []
            }
        default:
            return state;
    }
}
