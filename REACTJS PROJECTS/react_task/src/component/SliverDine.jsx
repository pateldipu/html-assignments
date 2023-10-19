import React, { Component } from 'react';

class sliverDine extends Component {

    constructor()
    {
        super()
        this.state={name:"" , image:""};
    }
    ChngData=()=>{
        console.log("ChngData called");
        this.setState({name:"Waffles  " ,price:"$50" , image:"img/wafles.jpeg"});
        this.setState({names:"juice" ,pricee:"$80" ,imagee:"img/juice.jpeg"});
    }

    ChngDataa=()=>{
        console.log("ChngData called");
        this.setState({name1:"paneer butter masala  " ,price1:"$550" , image1:"img/butter masala.jpeg"});
        this.setState({names1:"Tawa paneer " ,pricee1:"$280" ,imagee1:"img/tava.jpeg"});
    }
    ChngDatae=()=>{
        console.log("ChngData called");
        this.setState({namee1:"Golden panner fre " ,pricea1:"$330" , imagea1:"img/golden.jpeg"});
        this.setState({namess1:"Sev khamni " ,priceea1:"$190" , imageea1:"img/sev.jpeg"});
    }


    render() {
        return (
              
            <div>
            <div className="container mt-5" >
               <div className="row">
                <div className="col">

                    <button className='btn btn-outline-secondary' onClick={this.ChngData}>Break fast</button>
                    <h1>{this.state.name}</h1>
                    <h1>{this.state.price}  <img src={this.state.image} alt="" />  </h1>

                    <h1>{this.state.names}</h1>
                    <h1>{this.state.pricee} <img src={this.state.imagee} alt="" /> </h1>



                    <button className='btn btn-outline-secondary' onClick={this.ChngDataa}>Lunch</button>
                    <h1>{this.state.name1}</h1>
                    <h1>{this.state.price1} <img src={this.state.image1} alt="" /> </h1>

                    <h1>{this.state.names1}</h1>
                    <h1>{this.state.pricee1} <img src={this.state.imagee1} alt="" />  </h1>
                    

                    <button className='btn btn-outline-secondary' onClick={this.ChngDatae}>Dinner</button>
                    <h1>{this.state.namee1}</h1>
                    <h1>{this.state.pricea1}  <img src={this.state.imagea1} alt="" /> </h1>

                    <h1>{this.state.namess1}</h1>
                    <h1>{this.state.priceea1} <img src={this.state.imageea1} alt="" />  </h1>

                </div>
               </div>
            </div>
         </div> 
           
        );
    }
}

export default sliverDine;