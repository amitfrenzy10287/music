import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from './store/reducers/authReducer';
import appReducer from './store/reducers/appReducer';

const rootReducer = combineReducers({ 
  auth:authReducer,
  news: appReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));