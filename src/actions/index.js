import { FETCH_TOPSTORY, FETCH_TOPSTORIES_IDS, FETCH_NEWESTSTORIES_IDS, FETCH_NEWESTSTORY, DELETE_TOPSTORIES, 
    DELETE_NEWESTSTORIES, DELETE_NEWESTSTORY, DELETE_TOPSTORY, DELETE_NEWCOMMENTS, FETCH_NEWCOMMENTS, 
    DELETE_SHOWSTORIES, FETCH_SHOWSTORIES, DELETE_ASKSTORIES, FETCH_ASKSTORIES, DELETE_JOBSTORIES, 
    FETCH_JOBSTORIES, FETCH_ITEM, FETCH_COMMENT, DELETE_PAGE_CONTENT } from './types';
import axios from 'axios';

const ROOT_URL = 'https://hacker-news.firebaseio.com/v0/';

export function fetchTopStoriesIds() {
    
    return (dispatch, getState) => {
        const vecLoadano = getState().topStoriesIds;
        if(vecLoadano){
            for(let i=0;i<20;i++){
                dispatch({
                    type: DELETE_TOPSTORY,
                    payload: vecLoadano[i]
                })
            }
            dispatch({
                type: DELETE_TOPSTORIES
            });
        }
        const request = axios.get(ROOT_URL+'topstories.json');
        request.then( ({data}) => {
                dispatch({
                    type: FETCH_TOPSTORIES_IDS,
                    payload: data
                }) 
                for(let i=0;i<20;i++){
                    dispatch(fetchTopStory(data[i]));
                } 
            }
        );
    };
}

export function fetchTopStory( id ) {
    const request = axios.get(ROOT_URL+'item/'+id+'.json');
    
    return (dispatch) => {
        request.then( ({data}) => {
                dispatch({
                    type: FETCH_TOPSTORY,
                    payload: data
                })  
            }
        );
    };
}

export function fetchNewestStoriesIds() {
    return (dispatch, getState) => {
        const vecLoadano = getState().newestStoriesIds;
        if(vecLoadano){
            for(let i=0;i<20;i++){
                dispatch({
                    type: DELETE_NEWESTSTORY,
                    payload: vecLoadano[i]
                })
            }
            dispatch({
                type: DELETE_NEWESTSTORIES
            });
        }
        const request = axios.get(ROOT_URL+'newstories.json');
        request.then( ({data}) => {
                
                dispatch({
                    type: FETCH_NEWESTSTORIES_IDS,
                    payload: data
                }) 
                for(let i=0;i<20;i++){
                    console.log("dispeco "+data[i]);
                    dispatch(fetchNewestStory(data[i]));
                } 
            }
        );
    };
}

export function fetchNewestStory( id ) {
    const request = axios.get(ROOT_URL+'item/'+id+'.json');
    
    return (dispatch) => {
        request.then( ({data}) => {
                dispatch({
                    type: FETCH_NEWESTSTORY,
                    payload: data
                })  
            }
        );
    };
}



export function fetchNewComments(){
    return async (dispatch) => {
        dispatch({
            type: DELETE_NEWCOMMENTS
        })
        const request =  await axios.get(ROOT_URL+'maxitem.json');
        let id=request.data;
        for(let i=0;i<20;){
            const request = await axios.get(ROOT_URL+'item/'+id+'.json');
            if(request.data.type === 'comment'){
                i++;
                dispatch({
                    type: FETCH_NEWCOMMENTS,
                    payload: request.data
                })
            }
            id--;
        }
    }
}

export function fetchShowStories(){
    return async (dispatch) => {
        dispatch({
            type: DELETE_SHOWSTORIES
        });
        const request =  await axios.get(ROOT_URL+'showstories.json');
        let showStoriesIds = request.data;
        let showStories = [];
        for(let i=0;i<20;i++){
            const request = await axios.get(ROOT_URL+'item/'+showStoriesIds[i]+'.json');
            showStories.push(request.data);
        }
        dispatch({
            type: FETCH_SHOWSTORIES,
            payload: showStories
        });
    }
}

export function fetchAskStories(){
    return async (dispatch) => {
        dispatch({
            type: DELETE_ASKSTORIES
        });
        const request =  await axios.get(ROOT_URL+'askstories.json');
        let askStoriesIds = request.data;
        let askStories = [];
        for(let i=0;i<20;i++){
            const request = await axios.get(ROOT_URL+'item/'+askStoriesIds[i]+'.json');
            askStories.push(request.data);
        }
        dispatch({
            type: FETCH_ASKSTORIES,
            payload: askStories
        });
    }
}

export function fetchJobStories(){
    return async (dispatch) => {
        dispatch({
            type: DELETE_JOBSTORIES
        });
        const request =  await axios.get(ROOT_URL+'jobstories.json');
        let jobStoriesIds = request.data;
        let jobStories = [];
        for(let i=0;i<(20<jobStoriesIds.length ? 20 : jobStoriesIds.length);i++){
            const request = await axios.get(ROOT_URL+'item/'+jobStoriesIds[i]+'.json');
            jobStories.push(request.data);
        }
        dispatch({
            type: FETCH_JOBSTORIES,
            payload: jobStories
        });
    }
}

export function fetchItem( id ) {
    return async (dispatch) => {
        dispatch({
            type: DELETE_PAGE_CONTENT
        });
        const request = await axios.get(ROOT_URL+'item/'+id+'.json');
        let item = request.data;
        dispatch({
            type: FETCH_ITEM,
            payload: item
        })  
        if(item.kids){
            for(let i=0;i<item.kids.length;i++){
                dispatch(fetchComment(item.kids[i], 0));
            }
        }
    };
}

export function fetchComment( id, level ){
    const request = axios.get(ROOT_URL+'item/'+id+'.json');
    
    return (dispatch) => {
        request.then( ({data}) => {
                data.level = level;
                dispatch({
                    type: FETCH_COMMENT,
                    payload: data
                });
                if(data.kids){
                    for(let i=0;i<data.kids.length;i++){
                        dispatch(fetchComment(data.kids[i], level+1));
                    }
                }
            }
        );
    };
}