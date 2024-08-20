import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  {store}  from './store/store';
import RedditPage from './redditPage';

 









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RedditPage/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
