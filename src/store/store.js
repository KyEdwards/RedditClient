import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from '../reducers/index';
import { thunk } from 'redux-thunk'; 


const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk) ];

export const store = createStore(allReducers, compose(...enhancers));