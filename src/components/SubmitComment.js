import React, { Component } from 'react';
import {saveComment} from "../actions/notesAction"
import {connect} from "react-redux"

class SubmitComment extends Component{
    constructor(props){
        super(props);
        this.state ={
            commentBody:''
        }
        this.handleChange =  this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            commentBody:e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const comment = {
            commentBody:this.state.commentBody,
            uid:this.props.uid
        }
        this.props.saveComment(this.props.id,comment)
        this.setState({
            commentBody:''
        })
        //console.log(this.props.id,comment);
         
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea 
                            type="text"
                            value={this.state.commentBody}
                            name="commentbody"
                            className="form-control no-border"
                            placeholder='write Comment...'
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success' >Add Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return{
        uid:state.user.uid
    }
}

export default connect(mapStateToProps, { saveComment})(SubmitComment)