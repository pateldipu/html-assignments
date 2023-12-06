import React from 'react';
import {
  Link,
} from "react-router-dom"

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light p-3 fixed-top">
        <div className="container-fluid mylogo">

          <img src="img/logo.svg" alt="logo" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-3">
                <Link className="nav-link" href=" ">Fetures</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" href=" "> Pricing </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to='Usecase'> UseCases </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" href=" "> Request a Demo </Link >
              </li>
              <li className="nav-item ">
                <Link className="nav-link" href=" "> More </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className='btn'> Login </button>
              <button className="btn mybtn" type="button" > Signup </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;