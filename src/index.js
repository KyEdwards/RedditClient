import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';



//Store
//The store holds all the data for the application. -- A globolised state

//Action
//It describes what you want to do. IE I go to a store and i'm hungry (but not the actual buying of the food)

//action increment
const increment = () =>{
  return {
    type: 'INCREMENT'
  }
}
const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
}
//Reducer 
// Describes how your actions will interact with the store
const counter = (state = 0, action) => {
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1
    }
}

let store = createStore(counter);

//Display it in the console
store.subscribe( () => console.log(store.getState()));

//Dispatch
//How to exicute the action.
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
