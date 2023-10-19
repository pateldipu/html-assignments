import React, { Component } from 'react';

class state extends Component {

    constructor()
    {
        super()
        this.state={name:"GOOD MORNING!!!" , age:12};
    }
    ChngData=()=>{
        console.log("ChngData called");
        this.setState({name:"WELCOME TO Reactjs CLASS"});
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.name}</h1>
                            <button className='btn btn-primary' onClick={this.ChngData}>
                                Click me to change 
                            </button>
                            <h1>{this.state.age}</h1>
                            <button className='btn btn-dark' onClick={()=>this.setState({age:17})}>
                                click to me change age
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default state;