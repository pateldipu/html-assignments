import React, { Component } from 'react';
import Timpani from './Timpani'
import Royalvega from './royalvega'
import SliverDine from './SliverDine';
import API from './API'
import Time from './time'
// import UseContext from './UseContext';
import UseContext from './Context';
import Reducertime from './reducertime';
// import Header from './Header'
import Design from './Design.jsx'
// import Reducertime from './reducertime';
// import { Router } from 'react-router-dom';
import Table from './Table';
import Rowtable from './Rowtable';
import Dropdown from './Dropdown'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"


class hotel extends Component {

  render() {
    const TableData = {
      '/Timpani': 'Timpani', '/royalvega': 'Royalvega', '/SliverDine': 'SliverDine',
      '/API.jsx': 'API', '/time.jsx': 'Time', '/reducertime.jsx': 'Reducertime', '/UseContext.jsx': 'UseContext', '/Design.jsx': 'Design'
      , '/Table': 'Table', '/Rowtable': 'Rowtable', '/Dropdown': 'Dropdown'
    }
    const FoodData = Object.entries(TableData).map((res, j) => {
      console.log(j);
      return <li class="nav-item" key={j}>
        <Link class="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
      <>
        <Router>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">

                <img src="https://tse2.mm.bing.net/th?id=OIP.kDAqddvPLqexLsOyt7rsjgHaHa&pid=Api&P=0&h=180" alt=""
                  height="70px" width="70px" /></a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">


                  {FoodData}
                  {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}




                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="text" placeholder="Search" />
                  <button className="btn btn-primary" type="button">Search</button>
                </form>
              </div>
            </div>
          </nav>



          <Routes>
            <Route path='/Timpani' element={< Timpani />}></Route>
            <Route path='/royalvega' element={<Royalvega />}></Route>
            <Route path='/SliverDine' element={<SliverDine />}></Route>
            <Route path='/API.jsx' element={<API />}></Route>
            <Route path='/time.jsx' element={<Time />}></Route>
            <Route path='/UseContext.jsx' element={<UseContext />}></Route>
            <Route path='/reducertime.jsx' element={<Reducertime />}></Route>
            { /*<Route path='/Header.jsx' element={<Header />}> </Route>*/}
            <Route path='/Design.jsx' element={<Design />}>  </Route>
            {/* <Route path='/reducertime.jsx' element={<Reducertime/>}></Route> */}
            <Route path='/Table' element={<Table />}></Route>
            <Route path='/Rowtable' element={<Rowtable />}></Route>
            <Route path='/Dropdown' element={<Dropdown />}></Route>

          </Routes>

        </Router>



      </>
    );
  }
}

export default hotel;