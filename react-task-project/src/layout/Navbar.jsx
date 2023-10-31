import React from 'react';
import {
    Link,
} from "react-router-dom"

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black', maxWidth: '100vw' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-3" href="#"><i className="fa-brands fa-flipboard text-danger"></i> Flipboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div classNameName='d-flex ms-auto'>

                            <a className="nav-link active text-white  " aria-current="page" href="#" >Newsletters</a>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search Flipboard" aria-label="Search" />
                            </form>
                            <button classNameName='btn bg-danger text-white'>Sign Up</button>
                            <button classNameName='btn bg-white ms-2'>Login</button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;