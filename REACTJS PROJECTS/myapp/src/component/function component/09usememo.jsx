import React,{useMemo, useState} from 'react';

function Usememo(props) {
const[count,setcount]=useState(0)

const Btnclick =()=>{
    console.log("btn called");
    setcount((c)=>c+1)
}

const imc = useMemo(()=>Increment(count))


    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>{count}</h1>
                    <button className='btn btn-dark' onClick={Btnclick}>Click</button>
                </div>
            </div>
        </div>
        </>
    );
}
const Increment = (mycount)=>{
    for (let i=0; i<=500; i++)
    {
        mycount+=1
    }
}

export default Usememo;