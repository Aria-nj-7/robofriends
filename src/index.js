import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './App.js'
// import bootstrap from 'bootstrap';
import { Provider } from 'react-redux';
import  ThunkMiddleware  from 'redux-thunk';
import { legacy_createStore , applyMiddleware, combineReducers } from 'redux';
import { searchRobot , requestRobots } from './reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const rootReducer = combineReducers({searchRobot,requestRobots});
const store = legacy_createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger));
ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.unregister();
