import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {connect} from "react-redux"

import {getUser,logout} from "../actions/userAction"


class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/" >
                        DAIRY {new Date().getFullYear()}
                    </Link>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ml-auto" >
                        {
                            this.props.user === null ? (
                                    <li className="nav-item active">
                                        <Link className='nav-link' to="/login">Login</Link>
                                    </li>
                            ) : (
                                    <li className="nav-item active">
                                       <Link className='nav-link' to="/login" onClick={()=>this.props.logout()}>Logout</Link>
                                    </li>
                            )
                        }

                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}


function mapStateToProps(state,ownProps){
    return{
        user:state.user
    }
}


export default connect(mapStateToProps,{getUser,logout})(Header); 