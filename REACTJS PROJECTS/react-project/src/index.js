import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import Main from './layout/PODIO/Main'
import './layout/layout.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import Usecasemain from './layout/USECASE/Usecasemain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Usecase" element={<Usecasemain />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
