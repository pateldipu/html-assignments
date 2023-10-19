import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
const Intialvalue ={counter:0}

function Reducer (state , action)
{
    switch (action.type) {
        case 'Increment':
            return{counter:state.counter+1}
    
        case 'Decrement':
            return{counter:state.counter-1}    
         default:return state;
    
        
    }
}

function Useresducer(props) {
const[state,dispatch]=useReducer(Reducer, Intialvalue)


    return (
       <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary' onClick={()=>dispatch({type:'Decrement'})}>Decrememnt</button>
            <h1>{state.counter}</h1>
                    <button className='btn btn-primary' onClick={()=>dispatch({type:'Increment'})}>Incrememnt</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default Useresducer;