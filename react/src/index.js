import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthExample from './auth/AuthExample' ;
// import CustomLink from './containers/CustomLink';  
 
import Counter from './Counter';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <TodoList />
  </Provider>,
  document.getElementById('root')
);










// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <CustomLink />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <AuthExample />,
//   document.getElementById('root')
// );

