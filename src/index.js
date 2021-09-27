import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo/index'
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'
import { createStore } from 'redux';

const store = createStore(reducer);
const app = (
  <Provider store={store}>
      <Todo />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
