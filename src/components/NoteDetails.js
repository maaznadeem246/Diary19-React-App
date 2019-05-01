import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import SubmitComment from "./SubmitComment"
import _ from "lodash"
import Comment from "./comment"


class NoteDetail extends Component {
    renderComments(){
        const {note}  = this.props;
        return _.map(note.comments,(comment,key)=>{
            return <Comment key={key} id={key}>{comment.commentBody}</Comment>
        })
    }

    render() {
        const {note} = this.props;
        return(
             <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 ">
                        <h1>{note.title}</h1>
                        <p>{note.body}</p>
                        <SubmitComment id={this.props.match.params.id}/>
                        {this.renderComments()}
                        <br/>
                        <Link to='/' > &#171; Back</Link>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
             </div>
             );
    }
}


function mapStateProps(state,ownProps){
    return {
        note: state.notes[ownProps.match.params.id],
        uid:state.user.uid
    }
}

export default connect(mapStateProps)(NoteDetail);