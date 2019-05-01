import React, { Component } from 'react';
import {connect} from 'react-redux';
import {googleLogin,twitterLogin} from "../actions/userAction"

class Login extends Component{
    componentWillMount(){
        if(this.props.user !== null){
           //console.log(this.props.history);
             this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user !== null){
            nextProps.history.push('/');
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div class='col-sm-12 jumbotron' >
                        <h1> 
                            DAIRY | {new Date().getFullYear()}
                        </h1>
                        <h2>
                           <i>
                                Login with your favourite <b>Socail Network</b> to Start Writting.
                           </i> 
                        </h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <button className='btn btn-danger btn-lg col-sm-6' onClick={this.props.googleLogin}>
                            Login with Google
                        </button>
                        <button className='btn btn-success btn-lg col-sm-6' onClick={this.props.twitterLogin}>
                            Login with Twitter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
 return{
     user:state.user
 } 
}


export default connect(mapStateToProps,{googleLogin,twitterLogin})(Login);