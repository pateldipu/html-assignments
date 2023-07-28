import React from 'react';
import TechnoAPI  from './API/TechnoAPI';
import { useState } from 'react';

function Technology(props) {
       
        const [API , setAPI] = useState(TechnoAPI);
        console.log(API);
         return (
            <>
            <div className="container-fluid" style={{backgroundColor:' #141414'}} >
               <div className="container">
            <div className="row pop">
                         {API.map((res)=>{
                           return(
                               <div className="col-4 mt-5">
                                   <div className="card p-3"  style={{backgroundColor:' #141414'}}>
                                 
   
                                   
                                         <h5 style={{color:'#949494'}}><img src={res.img} alt=""  class="rounded-circle px-2" style={{width:'60px', height:'50px'}} />{res.title} </h5>
                                         <h5 style={{color:'#949494'}} class="px-5">{res.title1}</h5>
                                          <a href=""> <img src={res.image} alt="" style={{width:'100%'}}  className='mt-3'/></a>
                                          <h5 className='mt-3 ' style={{color:'#949494'}}>{res.condition + ""}</h5>
                                         <a href="" className='text-light mt-3' style={{fontFamily:'cursive' , fontSize:'18px'}} ><span>{res.info}</span></a>
   
                                         <h5 className='mt-3' style={{color:'#949494'}}>{res.data + ""}</h5>
                                       
                                         <a href="">   <h4 class="boxx p-3 mt-5 text-light ">
                                                 <i class="fa-regular fa-heart "><span>{res.heart +""}</span></i>       
                                                 <i class="fa-regular fa-comment-dots"></i> 
                                                 <i class="fa-solid fa-plus"></i>   
                                                 <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                                 {res.add} </h4></a>
                                    
   
   
                                   </div>
                               </div>
                               
   
                               
                           )
                         })}
                        </div>
   
                     <div className="read mt-3 p-2 text-center ">
                     <button type="button" class="btn btn-danger">Read more</button>
                     </div>
            </div>
            </div>
           </>
        
    );
}

export default Technology;