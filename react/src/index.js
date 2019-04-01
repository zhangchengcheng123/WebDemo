import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import AuthExample from './auth/AuthExample' 
// import CustomLink from './containers/CustomLink'  
 
import Counter from './Counter'
import TodoList from './TodoList'


ReactDOM.render(
  <div style={{padding:'30px'}}>
    <Counter />
    <TodoList />
  </div>,
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

