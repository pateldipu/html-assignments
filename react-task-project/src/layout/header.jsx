import React from 'react';

function Header(props) {
    return (
        <>
    
          <div className="container-fluid  p-5"  style={{backgroundColor:' #141414'}}>
             <div className="row text-center mybox text-white">
                <h1>GET INFORMED
                    <br />
                    <span>GET INSPIRED</span>
                </h1>
                <div className="row bg-danger myrow "> 
                 </div>

                 <div className="text text-wight mt-3 ">
                    <h3>Stories Curated For You</h3>
                 </div>
                 
                 <div className='text-center mt-5 '>
                 <button type="button" class="btn btn-danger btn-lg">Sign up</button>
                 </div>

            </div>
               
          </div>
        </>
    );
}

export default Header;