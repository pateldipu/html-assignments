import React from 'react';
import {
    Link,
} from "react-router-dom"

function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'black', maxWidth: '100vw' }}>
                <div class="container-fluid">
                    <a class="navbar-brand text-white fs-3" href="#"><i class="fa-brands fa-flipboard text-danger"></i> Flipboard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='d-flex ms-auto'>

                            <a class="nav-link active text-white" aria-current="page" href="#">Newsletters</a>

                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search Flipboard" aria-label="Search" />
                            </form>
                            <button className='btn bg-danger text-white'>Sign Up</button>
                            <button className='btn bg-white ms-2'>Login</button>
                        </div>
                    </div> 
                </div>
            </nav>


        </>
    );
}

export default Navbar;