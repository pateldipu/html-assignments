import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap5/src/css/bootstrap.min.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Timpani from  './component/Timpani.jsx'
// import Royalvega from './component/royalvega'
// import SliverDine  from './component/SliverDine.jsx'
import Hotel from './component/hotel.jsx'
// import API from './API'
// import Spinner from './component/spinner'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Timpani/>
           <Royalvega />
           <SliverDine/> */}

    <Hotel />
    {/* <Spinner/>         */}

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
