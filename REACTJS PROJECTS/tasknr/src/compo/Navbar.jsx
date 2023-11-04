import React, { Component  , useRef} from 'react'
// import React, { useRef } from 'react';

import Todouereducre from './Todouereducre'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom"


export default class Navbar extends Component {
    render() {

        const MenuData = {
            '/Todouereducre': 'Todouereducre',
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
                        <Route path='Todousereducre' element={<Todouereducre />}> </Route>
                    </Routes >


                </Router >


            </>
        )
    }
}
