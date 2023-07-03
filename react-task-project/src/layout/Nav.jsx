import React from 'react';


function Nav(props) {
   
    return (
        <>
          {/* <nav class="navbar bg-dark  "> */}
          <div className="container-fluid texxt  sticky-top" style={{backgroundColor:' #141414'}}>
            {/* <div className="conatiner-fluid "> */}
          <ul class="nav nav-pills nav-justified  ftn p-2"  style={{fontFamily:"sans-serif", backgroundColor:' #141414' }} >
                <li class="nav-item ">
                    <a class="nav-link " aria-current="page" href="#">NEWS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ENTERMENETS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">TECHNOLOGY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">TRAVEL</a>
                </li>
              
                <li class="nav-item">
                    <a class="nav-link" href="#">FOOD</a>
                </li>
              
                <li class="nav-item">
                    <a class="nav-link" href="#">SPORTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FLIPBOARD TV</a>
                </li>
              
       </ul>
       {/* </div> */}
       </div>
       

       {/* </nav> */}

   
        </>
    );
}

export default Nav;