import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAskStories } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import LoadingSpiner from '../components/LoadingSpinner';

class AskList extends Component {
    renderList(){
        if(!this.props.askStories || this.props.askStories.length === 0){
            return <div className="center"><LoadingSpiner/></div>;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.askStories.map((story) => {
            return (
                //<li key={story.id} ><a href={story.url}>{story.title}</a></li>
                <div className="row">
                    <div className="col m12 s12 l12">
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><span className="flow-text"><Link to={"/Item/"+story.id}>{story.title}</Link></span></span>
                        <p dangerouslySetInnerHTML={{ __html: story.text }}></p>
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
        this.props.fetchAskStories();
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
        askStories: state.askStories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAskStories: () => dispatch(fetchAskStories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskList);