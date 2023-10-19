import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Apifunc(props) {
 const[status ,setstatus] = useState('pending....')
const[data , setdata]=useState('')

useEffect(()=>{
    setTimeout(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((Response)=>{
            console.log(Response);
            setstatus('success')
            setdata(Response);
        }).catch((error)=>{
            console.log(error);
        })
    }, 2000);
})


    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{status}</h1>

                    <table className='table table-dark table-bordered border-light table-hover'>
                        <thead>
                            <tr>
                                <td>userId</td>
                                <td>id</td>
                                <td>title</td>
                                <td>completed</td>

                            </tr>
                        </thead>
                        <tbody>
                           {Object.entries(data).map((res,i)=>{
                            console.log(res)
                            return(
                                <tr>
                                    <td>{res[1].userId}</td>
                                    <td>{res[1].id}</td>
                                    <td>{res[1].title}</td>
                                   <td>{res[1].completed + ""}</td>
                                </tr>
                            )
                           })}
                        </tbody>
                    </table>
                    {/* <div>{status=='success'?JSON.stringify(data):'no found data'}</div> */}
                </div>
            </div>
         </div>
        </>
    );
}

export default Apifunc;