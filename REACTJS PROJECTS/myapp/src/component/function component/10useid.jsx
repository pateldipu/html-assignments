import React, { useId } from 'react';
import { useState } from 'react';

function Useid(props) {
    const myid = useId()
    console.log(myid)


    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                   <p id={myid}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id facilis cupiditate reiciendis,
                    numquam ducimus rerum nostrum vel sunt, vitae alias expedita doloremque nobis porro aut cum, debitis enim totam minus.</p>
                </div>
            </div>
        </div>
       </>
    );
}

export default Useid;