import React ,{useState} from 'react';

function Time(props) {
const[timer , setTimer] = useState(0)

const startTimer = ()=>{
    window.myTimer = setInterval(()=>{
        setTimer((timer)=>timer + 1)
    },1000)
};

const stopTimer =()=>{
    console.log("stopTimer");
    clearInterval(window.myTimer);
}

const ResetTimer =()=>{
    clearInterval(window.myTimer);
    setTimer(0);
}


    return (
        <>
         <div className="container mt-5 p-5 text-center bg-dark bg-gradient table-responsive" style={{ height:'400px'}}>
            <h1>Timer</h1>
            <span>{Math.trunc(timer/60)}mins</span>
            <span>{timer % 60}secs</span>
           <div>
           <button type="button" class="btn btn-outline-primary" onClick={startTimer}>start</button>
          <button type="button" class="btn btn-outline-secondary" onClick={stopTimer}>Stop</button>
          <button type="button" class="btn btn-outline-success" onClick={ResetTimer}>Reset</button>
            </div> 
         </div>
        </>
    );
}

export default Time;


