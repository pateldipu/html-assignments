import React, { Component } from 'react';
import Resue from './ResuableCompo'

class compo extends Component {
 

    render() {
        return (
             <div className="container mt-5" >
                <div className="row">

                   <div className="col-3">
                      <Resue imgsrc='img/black.jpeg' title='black t-shirt' oldprice='5000' newprice='4000'/>
                      </div>



                       <div className="col-3">
                             <Resue imgsrc='img/polo.jpeg' title='polo t-shirt' oldprice='4000' newprice='3000'/> 
                       </div>


                       <div className="col-3">
                           <Resue imgsrc='img/red.jpeg' title='red t-shirt' oldprice='3000' newprice='2500'/>
                       </div>



                       <div className="col-3">
                       <Resue imgsrc='img/white.jpeg' title='white t-shirt' oldprice='2000' newprice='1500'/>  
                          
                       </div>

                </div>




                <div className="row mt-5">

                   <div className="col-3">
                      <Resue imgsrc='img/black.jpeg' title='black t-shirt' oldprice='5000' newprice='4000'/>
                      </div>



                       <div className="col-3">
                             <Resue imgsrc='img/red.jpeg' title='red t-shirt' oldprice='4000' newprice='3000'/> 
                       </div>


                       <div className="col-3">
                           <Resue imgsrc='img/white.jpeg' title='white t-shirt' oldprice='3000' newprice='2500'/>
                       </div>



                       <div className="col-3">
                       <Resue imgsrc='img/polo.jpeg' title='polo t-shirt' oldprice='2000' newprice='1500'/>  
                          
                       </div>

                </div>

             </div>
        );
    }
}

export default compo;