// import React from "react";
// // import "./styles.css";

// export default function Timer({ estimatedTime, onTick, active, newTime }) {
//   const [counter, setCounter] = React.useState(estimatedTime);
//   const [counterSecond, setCounterSecond] = React.useState(newTime);

//   // Update time after each second
//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setCounterSecond(counterSecond + 1);
//       setCounter(counter - 1);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [counterSecond, counter]);

//   // Reset time and countdown
//   React.useEffect(() => {
//     if (!active) {
//       // onTick(counterSecond);
//       setCounter(estimatedTime);
//       setCounterSecond(1);
//     }
//   }, [active]);
//   return (
//     <div>
//       <div>Time: {counterSecond} </div>
//       <div>Countdown: {counter}</div>
//     </div>
//   );
// }

// import React, { useReducer } from "react"


// function init(initialState) {
//   return { time: initialState }
// }

// let initialState = {
//   TimerOn: true,
//   timerStart: 0,
//   timerTime: 0
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'start timer':
//       return startTimer()
//     case 'reset timer':
//       return zerotimer(initialState)
//     case 'resume timer':
//       return
//     default:
//       return state
//   }
// }


// function zerotimer(initialState) {
//   return { initialState };
// }

// function startTimer(initialState) {
//   this.timer = setInterval(() => {
//     this.setState({
//       timerTime: Date.now() - this.state.timerStart
//     });
//   }, 10);
// }

// function Reducertime({ initialState }) {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   let centiseconds = (Math.floor(initialState / 10) % 100);
//   let seconds = (Math.floor(initialState / 1000) % 60);
//   let minutes = (Math.floor(initialState / 60000) % 60);
//   let hours = (Math.floor(initialState / 3600000));
//   return (
//     <div>
//       <div>
//         <div>
//           <h2>Time to run!</h2>
//         </div>
//         <div>Stopwatch</div>
//         <div>
//           {hours} : {minutes} : {seconds} : {centiseconds}
//         </div>
//         {state.TimerOn === false && state.timerTime === 0 && (
//           <button onClick={() => dispatch({ type: 'start timer' })}>Start</button>
//         )}
//         {state.TimerOn === true && (
//           <button onClick={this.stopTimer}>Stop</button>
//         )}
//         {state.TimerOn === false && state.timerTime > 0 && (
//           <button onClick={this.startTimer}>Resume</button>
//         )}
//         {state.TimerOn === false && state.timerTime > 0 && (
//           <button onClick={() => dispatch({ type: 'reset timer' })}>Reset</button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Reducertime;




// import { useState, useEffect,useRef } from "react"
// const Reducertime = () => {
//   const [timer, setTimer] = useState(1500)    // 25 minutes
//   const [start, setStart] = useState(false)
//   const[stop , setstop] = useState(true)
//   var firstStart = useRef(true)
//   var tick;

//   useEffect( () => {
//       if (firstStart.current) {
//           console.log("first render, don't run useEffect for timer")
//           firstStart.current = !firstStart.current
//           return
//       }

//       console.log("subsequent renders")
//       console.log(start)
//       if (start) {
//           tick = setInterval(() => {
//           setTimer(timer => {
//               timer = timer - 1
//               console.log(timer)
//               return timer       
//               }
//           )
//       }, 1000)
//   } else {
//       console.log("clear interval")
//       clearInterval(tick);
//   }
//   }, [start,])

//   const toggleStart = () => {
//       setStart(!start)
//   }

  





//   const dispSecondsAsMins = (seconds) => {
//       // 25:00 
//       console.log("seconds " + seconds)
//       const mins = Math.floor(seconds / 60)
//       const seconds_ = seconds % 60
//       return mins.toString() + ":" + ((seconds_ == 0) ? "00" : seconds_.toString())
//   }

//   return (
//       <div className="conatier mt-5 p-5 text-center">
//           {/* <ul>
//               <button className="pomBut">Pomodoro</button>
//               <button className="pomBut">Short Break</button>
//               <button className="pomBut">Long Break</button>
//           </ul> */}
//           <h1>{dispSecondsAsMins(timer)}</h1>
//           <div className="startDiv">
//               {/* event handler onClick is function not function call */}
//               <button className="startBut" onClick={toggleStart}>{!start ? "START" : "STOP"}</button>
//               {/* {start && <AiFillFastForward className="ff" onClick="" />} */}
//           </div>
//       </div>
//   )
// }

// export default Reducertime;


import React, { useState, useRef } from 'react';

// import './App.css';
  
  
function Reducertime() {
  const [insert, setInsert] = useState('');
  const [secs, setSecs] = useState(0);
  const reference = useRef(0);
  const time = useRef();
  
  const handleOnchange = (e) => {
    setInsert(e.target.value);
    reference.current++;
  }
  
  const startTime = () => {
    time.current = setInterval(() => {
      reference.current++;
      setSecs(prev => prev + 1)
    }, 1000)
  }
  
  const stopTime = () => {
    clearInterval(time.current);
    time.current = 0;
  }
  
  const resetTime = () => {
    stopTime();
    if (secs) {
      reference.current++;
      setSecs(0);
    }
  }
  return (
    <div className='container mt-5 p-5'>
      <input
        type="text"
        placeholder='use reference'
        value={insert}
        onChange={handleOnchange}
        className="input"
      />
      <br /><br />
      <div className='input-text '> <p className='text'>Please input your name: {insert}</p></div>
      <div >
      </div>
      <input type="button"className='btn btn-outline-dark' value="start time" onClick={startTime} />
      <input type="button"  className='btn btn-outline-primary' value="stop time" onClick={stopTime} />
      <input type="button" className='btn btn-outline-success' value="reset time" onClick={resetTime} />
      <p>Timer{secs}</p>
      <div>
        <p>Render:[{reference.current}]</p>
      </div>
    </div>
  );
}
  
export default Reducertime;