import React, { Component } from 'react';
import { json } from 'react-router-dom';

class API extends Component {
    constructor()
    {
        super()
        this.state={status:"pending........", FetchData:""}
    }
    componentDidMount()
    {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res)=>res.json())
            .then((Response)=>{
                console.log(Response);
                this.setState({status:"completed",FetchData: Response})
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 3000);
    }

    render() {
        
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.status}</h1>
                            <div>
                                {this.state.status=="completed"?JSON.stringify(this.state.FetchData):"No Data Found"}
                            </div>
                        </div>
                    </div>
                 </div>
                  
            </div>
        );
    }
}

export default API;