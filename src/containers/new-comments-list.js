import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewComments } from '../actions';
import { protekloVrijeme } from '../actions/funkcije';
import { Link } from 'react-router-dom';

class NewCommentsList extends Component {
    renderList(){
        if(!this.props.newComments){
            return <div>nejma</div>;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        return this.props.newComments.map((comment) => {
            return (
                <div className="row">
                    <div className="col m12 s12 l12">
                    <div className="card orange lighten-2">
                        <div className="card-content white-text">
                        <span className="card-title"><p className="flow-text" dangerouslySetInnerHTML={{ __html: comment.text }}/></span>
                        </div>
                        <div className="card-action">
                            <p style={{color: 'white'}}>
                                by {comment.by} | {protekloVrijeme(ts-comment.time)} ago | <Link to={"/Item/"+comment.parent} style={{color: 'white', textTransform: 'none'}} >Article</Link>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    }

    componentWillMount(){
        this.props.fetchNewComments();
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
        newComments: state.newComments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNewComments: () => dispatch(fetchNewComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentsList);