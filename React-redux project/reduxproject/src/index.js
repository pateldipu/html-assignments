import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Navbar from './COMPO/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap5/src/css/bootstrap.min.css'   
// import 'bootstrap5/css/bootstrap5.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import './COMPO/Layout.css';
import Slider from './COMPO/Slider';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {<Navbar />}
    <Router>
      <Routes>
        <Route path="/" element={<Slider />}></Route >
        {/* <Route path="/Usecase" element={< />}></Route> */}
        {/* <Route path="/Pricing" element={< />}></Route> */}

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
