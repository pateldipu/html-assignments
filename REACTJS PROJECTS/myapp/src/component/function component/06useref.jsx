import React from 'react';
import { useRef } from 'react';

function Useref(props) {
   const myref = useRef('')
   const emailref = useRef('')
   const phoneref = useRef('')





   console.log(myref.current);

    const Click=()=>{
    console.log("btn called");
    if(myref.current.value=="")
    {
        alert("please enter the value!!!")
        myref.current.focus();
    }
    if(emailref.current.value=="")
    {
        alert("please enter the email!!!")
        emailref.current.focus();
    }
    if(phoneref.current.value=="")
    {
        alert("please enter the number!!!")
        phoneref.current.focus();
    }

    
    }
    const Counterref=useRef(0)
    const CounterClick=()=>{
         console.log(Counterref.current);
         Counterref.current=Counterref.current+1
          alert('you have clicked ' +Counterref.current+' times')
        }

    return (
        <>
          <div className="container mt-5 ">
            <div className="row">
                <div className="col-5 mx-auto ">
                    <input type="text" placeholder='Name' className='form-control' name='text' ref={myref}  id=""/>

                    <input type="email" placeholder='email' className='form-control' name='text' ref={emailref} id=""/>
                    <input type="phone"  placeholder='phone' className='form-control' name='num' ref={phoneref} />

                    <button className='btn btn-outline-success btn-lg ' onClick={Click}>Click Me</button>
                    <br /> <br />
                    <button className='btn btn-outline-primary ' onClick={CounterClick}>click to counter</button>
                </div>
            </div>

          </div>
        </>
    );
}

export default Useref;