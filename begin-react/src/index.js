import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Counter />,
  document.getElementById('root') // 페이지에서 찾는다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
