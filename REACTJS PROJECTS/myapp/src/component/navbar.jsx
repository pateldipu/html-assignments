import React, { Component } from 'react';
import Home from './home'
import About from './About.jsx'
import State from './01_STATE.jsx'
import LifeCycle from './02LifeCycle.jsx';
import API from './03_API';
import Compo from './04_compo';
import UseState from './function component/01UseState';
import UseEffect from './function component/02UseEffect';
import Loder from './function component/03loder'
import Apifunc from './function component/04apifunc';
import Usereducer from './function component/05useresducer';
import Useref from './function component/06useref';
import Usecontext from './function component/07usecontext';
import Stylecompo from './function component/08stylecompo';
import UseMemo from './function component/09usememo';
import Useid from './function component/10useid';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"

class navbar extends Component {


  render() {
    const MenuData = {
      '/home': 'Home', '/about': 'About', '/01_STATE.jsx': 'State', '/02LifeCycle.jsx': 'LifeCycle',
      '/04_compo': 'Compo', '/03_API.jsx': 'API', '/01UseState.jsx': 'UseState', '/02UseEffect.jsx': 'UseEffect'
      , '/03loder.jsx': 'Loder', '/04apifunc.jsx': 'Apifunc', '/05useresducer.jsx': 'Usereducer',
      '/06useref.jsx': 'Useref', '/07usecontext.jsx': 'Usecontext', '/08stylecompo.jsx': 'Stylecompo',
      '/09usememo.jsx': 'Usememo', '/10useid.jsx': 'Useid'
    }
    const ResultData = Object.entries(MenuData).map((res, i) => {
      console.log(i);
      return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>

    })
    return (
      <>
        <Router>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">TOPS TECHNOLOGIES</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">


                  {ResultData}

                  {/* <li className="nav-item">
          <Link className="nav-link" to = {'/home'}>Home</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-liak" to = {'/about'}>ABOUT</Link>
        </li> */}

                  {/* <li className="nav-item">
          <a className="nav-link" href="">Link</a>
        </li> */}

                </ul>

              </div>
            </div>
          </nav>


          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/01_STATE.jsx' element={<State />}></Route>
            <Route path='/02LifeCycle.jsx' element={<LifeCycle />}></Route>
            <Route path='/03_API.jsx' element={<API />}></Route>
            <Route path='04_compo' element={< Compo />}></Route>
            <Route path='/01UseState.jsx' element={< UseState />}></Route>
            <Route path='/02UseEffect.jsx' element={<UseEffect />}></Route>
            <Route path='/03loder.jsx' element={<Loder />}></Route>
            <Route path='/04apifunc.jsx' element={<Apifunc />}></Route>
            <Route path='/05useresducer.jsx' element={<Usereducer />}></Route>
            <Route path='/06useref.jsx' element={<Useref />}></Route>
            <Route path='/07usecontext.jsx' element={<Usecontext />}></Route>
            <Route path='/08stylecompo.jsx' element={<Stylecompo />}></Route>
            <Route path='/09usememo.jsx' element={<UseMemo />}></Route>
            <Route path='/10useid.jsx' element={<Useid />}></Route>
            {/* <Route path='/both.jsx' element={<Both />}></Route> */}

          </Routes>
        </Router>
      </>
    );
  }
}

export default navbar;