import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobStories } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import LoadingSpinner from '../components/LoadingSpinner';

class JobList extends Component {
    

    renderList(){
        if(!this.props.jobStories || this.props.jobStories.length === 0){
            return <div className="center"><LoadingSpinner /></div>;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.jobStories.map((story) => {
            return (
                //<li key={story.id} ><a href={story.url}>{story.title}</a></li>
                <div className="row">
                    <div className="col m12 s12 l12">
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><span className="flow-text"><a href={story.url}>{story.title}</a></span></span>
                        <p dangerouslySetInnerHTML={{ __html: story.text }}></p>
                        </div>
                        <div className="card-action">
                            <p style={{color: 'white'}}>
                                {story.score} pts | by {story.by} | {protekloVrijeme(ts-story.time)} ago 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    }

    componentWillMount(){
        this.props.fetchJobStories();
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
        jobStories: state.jobStories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJobStories: () => dispatch(fetchJobStories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);