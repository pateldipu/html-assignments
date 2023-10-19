import React, { useEffect, useState } from 'react';
import Navbar  from './navbar';

function Spinner(props) {
    const[loading , setloading] =useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setloading(false);
        }, 3000);
    })


    return (
        <>
        {loading?
        <div className='d-flex justify-content-center align-items-center' style={{height:'700px'}}>
          {/* <div className="spinner-border text-primary" role="status" >
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
            </div> */}

            <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>
 :
                <>
                <Navbar/>
                </>
}
        </>
    );
}

export default Spinner;