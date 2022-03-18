import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: action.isIncrement ? state.count + action.number : state.count - action.number };

        default: return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
