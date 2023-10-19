import React from 'react';

function Footer(props) {
    return (
       <>
        <div className="container-fluid footer mt-5 text-center p-5">
             <h2 className='text-white'>Get started on Podio, for streamlined work that will drive your business forward.
              </h2>
              <div className="mysearch">
                <input type="text" placeholder='Enter your work Email' />
                <button className='serachbtn'>Start Free</button>
              </div>
        </div>

        <div className="container mt-3 footer-2">
         <div>
            <img src="img/logo.svg" alt="logo" className='mx-5' />
             
           <a href="" className='mx-2'>privacy and legal terms|</a>

           <a href="" className='mx-2'>privacy and legal terms|</a>

           <a href="" className='mx-2'>privacy and legal terms|</a>

           <a href="" className='mx-2'>privacy and legal terms|</a>

         </div>

         <div>
             <select name="" id="" className='myslct rounded mt-2 mx-5'>
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>

             </select>
         </div>

         <div className='text-end'>
            <h6>© 2023, Cloud Software Group, Inc. All rights reserved.</h6>
         </div>

        </div>
       </>
    );
}

export default Footer;