import React from 'react';

function Navbar(props) {
    return (
        <>
        
          <nav class="navbar navbar-expand-lg navbar-light"  style={{backgroundColor:' #141414'}}>
                <div class="container-fluid mybord">
                        <a class="navbar-brand txt " href="#"><i class="fa-brands fa-flipboard"></i> Flipboard</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"> </span>
                    </button>
           
                    <div class="col-auto  d-flex gap-2">
                    <ul class="nav">
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="#">Newsletters</a>
                        </li>
                    </ul>

                     
                    <label for="inputPassword2" class="visually-hidden">search</label>
                    <input type="text" class="form-control mb-3" id="search Flikborad" placeholder="search Flikborad"/>
                    
                    <div class="d-grid gap-2  d-md-flex justify-content-md-end ">
                         <button class="btn btn-danger me-md-2  " type="button">signup</button>
                          <button class="btn btn-light" type="button">LOGIN</button>
                    </div>
                
                    
                </div>

             </div>
             
       </nav>
    
        </>
    );
}

export default Navbar;