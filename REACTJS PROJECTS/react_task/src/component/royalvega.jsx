import React, { Component } from 'react';

class royalvega extends Component {
    constructor()
    {
        super()
        this.state={name:"" , image:""};
    }
    ChngData=()=>{
        console.log("ChngData called");
        this.setState({name:"burrito  " ,price:"$50" , image:"img/burrito.jpeg"});
        this.setState({names:"Tea" ,pricee:"$80" , imagee:"img/tea.jpeg"});
    }

    ChngDataa=()=>{
        console.log("ChngData called");
        this.setState({name1:"khaman " ,price1:"$280" , image1:"img/khaman.jpeg"});
        this.setState({names1:"Dal makhani " ,pricee1:"$580" , imagee1:"img/dal.jpeg"});
    }
    ChngDatae=()=>{
        console.log("ChngData called");
        this.setState({namee1:"Paneer cheese balls" ,pricea1:"$360",  imagea1:"img/paneer.jpeg"});
        this.setState({namess1:"corn salsa " ,priceea1:"$680" , imageea1:"img/corn.jpeg"});
    }

    render() {
        return (
            <div>
            <div className="container mt-5">
               <div className="row">
                <div className="col">

                    <button className='btn btn-outline-success' onClick={this.ChngData}>Break fast</button>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.price}  <img src={this.state.image} alt="" /> </h1>
                    

                    <h1>{this.state.names}</h1>
                    <h1>{this.state.pricee} <img src={this.state.imagee} alt="" /> </h1>



                    <button className='btn btn-outline-success' onClick={this.ChngDataa}>Lunch</button>
                    <h1>{this.state.name1}</h1>
                    <h1>{this.state.price1}  <img src={this.state.image1} alt="" /> </h1>

                    <h1>{this.state.names1}</h1>
                    <h1>{this.state.pricee1} <img src= {this.state.imagee1} alt="" /> </h1>

                    <button className='btn btn-outline-success' onClick={this.ChngDatae}>Dinner</button>
                    <h1>{this.state.namee1}</h1>
                    <h1>{this.state.pricea1}  <img src={this.state.imagea1} alt="" />  </h1>

                    <h1>{this.state.namess1}</h1>
                    <h1>{this.state.priceea1}  <img src={this.state.imageea1} alt="" /> </h1>

                </div>
               </div>
            </div>
         </div>
        );
    }
}

export default royalvega;