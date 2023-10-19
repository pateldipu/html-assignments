import React from 'react';

function Dependability(props) {
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src="img\usermanagement.png" alt="pc" />
                </div>
                <div className="col-8 depen">
                    <span>Secure & reliable</span>
                    <h2>Dependability you can trust to run your business</h2>
                    <p>Podio’s stability (99.99% uptime last year) and intuitive interface makes deployment 
                        straightforward. And as part of Citrix, we adhere to the most rigorous security standards.</p>
                    <button className='mybtn mt-5 '>Learn More</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default Dependability;