import React, { useEffect } from 'react';
import { useState } from 'react';

function UseEffect(props) {
    const[data , setdata] = useState("good morning!!!!")
    const[counter , setcounter] = useState(0)

    useEffect(()=>{
        console.log("useEffect called ");
        setTimeout(() => {
               setdata("welcome to reactjs class")
        }, 2000);
    })
    const[count, setcount]=useState(0)
    useEffect(()=>{
        console.log("counter useeffect called");
        console.log(document.title=`you have clicked ${count} times`);
    })

    return (
      <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>{data}</h1>
                    <h1>{count}</h1>
                    <button className='btn btn-primary' onClick={()=>setcount(count+1)}>Click</button>
                </div>
            </div>
        </div>
      </>
    );
}

export default UseEffect;