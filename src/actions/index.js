import { FETCH_TOPSTORY, FETCH_TOPSTORIES_IDS } from './types';
import axios from 'axios';

const ROOT_URL = 'https://hacker-news.firebaseio.com/v0/';

export function fetchTopStoriesIds() {
    const request = axios.get(ROOT_URL+'topstories.json');

    return {
        type: FETCH_TOPSTORIES_IDS,
        payload: request
    };
}

export function fetchTopStory( id ) {
    const request = axios.get(ROOT_URL+'item/'+id+'.json');

    return {
        type: FETCH_TOPSTORY,
        payload: request
    };
}