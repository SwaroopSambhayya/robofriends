import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './container/App'; 
import * as serviceWorker from './serviceWorker';
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {logger} from 'redux-logger';
import {searchRobots,requestrobots} from './container/reducer';
import thunkMiddleware from 'redux-thunk';

const rootreducer=combineReducers({searchRobots,requestrobots});
const store=createStore(rootreducer, applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(<Provider store={store}> <App  /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
