import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import LoadingSpiner from '../components/LoadingSpinner';

class ItemPage extends Component {
    renderKartica(){
        if(!this.props.pageZaPrikaz.item){
            return <div className="center"><LoadingSpiner/></div>;
        }
        let story = this.props.pageZaPrikaz.item;
        let ts = Math.round((new Date()).getTime() / 1000);
        return (
            <div className="row">
                <div className="col m12 s12 l12">
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><span className="flow-text">{story.title}</span></span>
                        <p dangerouslySetInnerHTML={{ __html: story.text }}></p>
                        </div>
                        <div className="card-action">
                            <p style={{color: 'white'}}>
                                {story.score} pts | by {story.by} | {protekloVrijeme(ts-story.time)} ago | {story.descendants} comments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderList(){
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.pageZaPrikaz.komentari.map((comment) => {
            return (
                <div className="row">
                    <div className={"col m"+(12-comment.level)+" s"+(12-comment.level)+" l"+(12-comment.level)+" offset-s"+comment.level+" offset-m"+comment.level+" offset-l"+comment.level}>
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><p className="flow-text" dangerouslySetInnerHTML={{ __html: comment.text }}/></span>
                        </div>
                        <div className="card-action">
                            <p style={{color: 'white'}}>
                                by {comment.by} | {protekloVrijeme(ts-comment.time)} ago 
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    }

    componentWillMount(){
        let id = this.props.match.params.item_id;
        this.props.fetchItem(id);
    }

    render() {
        return (
            <div>
                <br/>
                {this.renderKartica()}
                <h3>Komentari:</h3>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        pageZaPrikaz: state.pageZaPrikaz
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchItem: (id) => dispatch(fetchItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);