import React from 'react';



function Usecase(props) {
    return (
        <>
        <hr/>
        <div className="container text-center usecase">
           <span>Using Podio</span>
           <h1>Whatever you work with, there's a Podio workspace for it</h1>
           <p>From structuring a project, to organizing your sales team, to transforming the way your entire company works together. 
            Podio can help you simply get the job done, or grow with you to connect all your work in one place.</p>
        </div>

        <div className="container-fluid mt-5 useimg ">
          <img src="img/usecase.jpg" alt="usecase" />
        </div>
        </>
    );
}

export default Usecase;