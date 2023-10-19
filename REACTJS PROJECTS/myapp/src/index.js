import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap5/src/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
// import Home from './component/home'
// import About from './component/About.jsx'
// import Navbar from './component/navbar'
import Spinner from './component/spinner';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

 <>
  {/* <h1>this is my frist element</h1>
  <p>this is para</p> */}
 {/* <Home/>
 <About/> */}
{/* <Navbar/> */}
<Spinner/>

 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
