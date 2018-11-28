import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShowStories } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';

class ShowList extends Component {
    renderList(){
        if(!this.props.showStories || this.props.showStories.length === 0){
            return <div className="center"><LoadingSpinner/></div>;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.showStories.map((story) => {
            console.log(story);
            return (
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
        this.props.fetchShowStories();
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
        showStories: state.showStories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchShowStories: () => dispatch(fetchShowStories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);