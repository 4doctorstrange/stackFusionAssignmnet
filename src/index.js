import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './form';
import {Route,BrowserRouter } from 'react-router-dom';

function Router(){
  return (
    
    
      <BrowserRouter>

    <Route exact path="/" component = {Form} />
    <Route exact path="/users" component = {App} />
  
      </BrowserRouter>
    
  )
}





ReactDOM.render(
  /*
  <React.StrictMode>
    <Form/>
    <App />
  </React.StrictMode>
  */
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
