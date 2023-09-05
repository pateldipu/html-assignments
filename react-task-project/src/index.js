import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import Main from './layout/main'
import './layout/layout.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
// import Usecasemain from './layout/Usecasemain';
import Entermain from './layout/Entermain'
import Technomain from './layout/Technomain';
import Trevelmain from './layout/Trevelmain';
import Foodmain from './layout/Foodmain'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Entermain" element={<Entermain />}></Route>
        <Route path="/Technomain" element={<Technomain />}> </Route>
        <Route path="/Trevelmain" element={<Trevelmain />} > </Route>
        <Route path="/Foodmain" element={<Foodmain />} > </Route>
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
