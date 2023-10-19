import React, { Component } from 'react';

class Timpani extends Component {


    constructor()
    {
        super()
        this.state={name:"",image:""};
    }
    ChngData=()=>{
        console.log("ChngData called");
        this.setState({name:"BREAD-BUTTER " ,price:"$50" , image:"img/bread.jpeg" });
        this.setState({names:"coffe " ,pricee:"$80" , images:"img/coffe.jpeg"});
    }

    ChngDataa=()=>{
        console.log("ChngData called");
        this.setState({name1:" khandvi " ,price1:"$250" , image1:"img/khandvi.jpeg"});
        this.setState({names1:" uthiyu-puri" ,pricee1:"$480" , imagee1:"img/uthiyu puri.jpeg"});
    }
    ChngDatae=()=>{
        console.log("ChngData called");
        this.setState({namee1:"Mix Vage Parotha " ,pricea1:"$150" , imagea:"img/parotha.jpeg"});
        this.setState({namess1:"Vage Biryani " ,priceea1:"$280" , imagea1:"img/vage.jpeg"});
    }

    render() {
        return (
         <div >
            <div className="container mt-5">
               {/* <div className="row"> */}
                {/* <div className="col"> */}

                    <button className='btn btn-outline-info' onClick={this.ChngData}>Break fast
                    </button>

                    <h1>{this.state.name} </h1>
                    <h1>{this.state.price} </h1>
                    <div>
                    <img src={this.state.image} alt="" />
                    </div>
                     <br />

                     <h1>{this.state.names}</h1>
                    <h1>{this.state.pricee}</h1>
                    <div>
                    <img src={this.state.images} alt="" />
                    </div>

                     <br />


                    <button className='btn btn-outline-info' onClick={this.ChngDataa}>Lunch</button>
                    <h1>{this.state.name1}</h1>
                    <h1>{this.state.price1}</h1>
                    <div>
                    <img src={this.state.image1} alt="" />
                    </div>
                     <br />
                    <h1>{this.state.names1}</h1>
                    <h1>{this.state.pricee1}</h1>
                    <div>
                    <img src={this.state.imagee1} alt="" />
                    </div>
                    

                    <br />

                    <button className='btn btn-outline-info' onClick={this.ChngDatae}>Dinner</button>
                    <h1>{this.state.namee1}</h1>
                    <h1>{this.state.pricea1}</h1>
                    <div>
                    <img src={this.state.imagea} alt="" />
                    </div>
                    <br />

                    <h1>{this.state.namess1}</h1>
                    <h1>{this.state.priceea1} </h1>
                    <div>
                    <img src={this.state.imagea1} alt="" />
                    </div>

                {/* </div> */}
               {/* </div> */}
            </div>
         </div>           
          

        );
    }
}

export default Timpani;
