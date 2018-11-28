import { combineReducers } from 'redux';
import TopStoriesReducer from './reducer_top_stories.js';
import TopStoryIDsReducer from './reducer_top_stories_ids.js';
import NewestStoriesReducer from './reducer_newest_stories';
import NewestStoryIDsReducer from './reducer_newest_stories_ids';
import NewCommentsReducer from './reducer_new_comments';
import ShowStoriesReducer from './reducer_show_stories';
import AskStoriesReduucer from './reducer_ask_stories';
import JobStoriesReducer from './reducer_job_stories';
import PrikazPageReducer from './reducer_page_prikaz';

const rootReducer = combineReducers({
    topStoriesIds: TopStoryIDsReducer,
    topStories: TopStoriesReducer,
    newestStoriesIds: NewestStoryIDsReducer,
    newestStories: NewestStoriesReducer,
    newComments: NewCommentsReducer,
    showStories: ShowStoriesReducer,
    askStories: AskStoriesReduucer,
    jobStories: JobStoriesReducer,
    pageZaPrikaz: PrikazPageReducer,
});

export default rootReducer;