import React from 'react';
import {useState} from 'react';

function UseState(props) {
     const[name, setName] = useState("React")
     const [counter , setCounter] = useState(0)

     const BtnClick=()=>{
        console.log("btn called");
        setName("Reactjs")

     }
     const IncData=()=>{
        setCounter(counter+1)
     }

     const decData=()=>{
        setCounter(counter-1)
        
     }

     
    
     const ResData=()=>{
        setCounter(0)
     }
     
    return (
        <> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button className='btn btn-primary' onClick={BtnClick}>Click me</button>
                        <br/>    <br/>    <br/>   <br/>



                         <button className='btn btn-danger' onClick={decData}>Decremenet</button>
                         <h1>{counter}</h1>
                         <button className='btn btn-info' onClick={IncData}>Increment</button>



                         <br/> <br/> <br/>
                              
                              <button className='btn btn-success' onClick={ResData}>Reset</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export  default UseState;