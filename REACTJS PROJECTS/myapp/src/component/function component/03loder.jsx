import  { useEffect, useState } from 'react';
import Compo from '../04_compo.jsx';

function loder(props) {
const[loading , setloading]= useState(true)


  useEffect(()=>{
    setTimeout(() => {
          setloading(false)
    }, 3000 );
  })

    return (
      <>
      {loading?
        <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>  
        :
                <>
                <Compo/>
                </>
}
    </>         
      
    
    );
}

export default loder;