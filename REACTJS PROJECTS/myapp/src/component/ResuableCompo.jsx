import React, { Component } from 'react';

class ResuableCompo extends Component {

    render() {
        return (
            
            <div className="card">
             <img src={this.props.imgsrc} alt="" />
              <div className="card-body text-center">
                 <h3> {this.props.title} </h3>
                 <span>Old price:$<del>{this.props.oldprice}</del></span>
                 <span className='mx-3 '>New price:${this.props.newprice}</span>
                 <button className='btn btn-primary'> By Now</button>
              </div>
            </div>
        
        );
    }
}

export default ResuableCompo;