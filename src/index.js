import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore({});

const reactRoot = document.getElementById('react-root');
const baseComponent = React.createElement(App, { store });

ReactDOM.render(baseComponent, reactRoot);