import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import  {Provider} from 'react-redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Login from './components/login'
import Header from './routes/Header'
import LoadingComponent from "./components/loadingComponent"
import AuthenticatedComponent from "./components/AuthenticatedComponent"
import NoteDetail from './components/NoteDetails';
import NoteEdit from "./components/noteEdit";
import './styles/index.css'
 
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                    <LoadingComponent>
                        <div>

                            <Switch>
                                <Route exact={true}  path="/login" component={Login} />
    
                                <AuthenticatedComponent>
                                    <Header />
                                    <Route exact={true}  path="/" component={App} />
                                    <Route exact={true} path="/:id/edit" component={NoteEdit} />
                                    <Route path="/:id" component={NoteDetail} exact={true} />
                                </AuthenticatedComponent>
                            </Switch>
                        </div>
                    </LoadingComponent>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
