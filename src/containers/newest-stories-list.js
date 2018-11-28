import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewestStoriesIds } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import { Link } from 'react-router-dom';

class NewestStoriesList extends Component {
    renderList(){
        if(!this.props.newestStories){
            return <div>nejma</div>;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.newestStories.map((story) => {
            return (
                //<li key={story.id} ><a href={story.url}>{story.title}</a></li>
                <div className="row">
                    <div className="col m12 s12 l12">
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><a className="flow-text" href={story.url}>{story.title}</a></span>
                        </div>
                        <div className="card-action">
                            <p style={{color: 'white'}}>
                                {story.score} pts | by {story.by} | {protekloVrijeme(ts-story.time)} ago | <Link to={"/Item/"+story.id} style={{color: 'white', textTransform: 'none'}} >{story.descendants} comments</Link>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    }

    componentWillMount(){
        this.props.fetchNewestStoriesIds();
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
        newestStories: state.newestStories,
        newestStoriesIds: state.newestStoriesIds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNewestStoriesIds: () => dispatch(fetchNewestStoriesIds())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewestStoriesList);