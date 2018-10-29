import { combineReducers } from 'redux';
import TopStoriesReducer from './reducer_top_stories.js';
import TopStoryIDsReducer from './reducer_top_stories_ids.js';

const rootReducer = combineReducers({
    topStoriesIds: TopStoryIDsReducer,
    topStories: TopStoriesReducer
});

export default rootReducer;