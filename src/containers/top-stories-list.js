import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopStory, fetchTopStoriesIds } from '../actions';
import { bindActionCreators } from 'redux';

class TopStoriesList extends Component {
    renderList(){
        if(!this.props.topStories){
            return <div>nejma</div>;
        }
        return this.props.topStories.map((story) => {
            return (
                <li key={story.id} ><a href={story.url}>{story.title}</a></li>
            )
        })
    }

    componentWillMount(){
        this.props.fetchTopStoriesIds();
    }

    componentDidUpdate(prevProps){
        if(this.props.topStoriesIds !== prevProps.topStoriesIds){
            console.log('updatalo se', this.props);
            for(let i=0;i<20;i++){
                this.props.fetchTopStory(this.props.topStoriesIds[i]);
            }
        }
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    return {
        topStories: state.topStories,
        topStoriesIds: state.topStoriesIds
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTopStoriesIds, fetchTopStory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesList);