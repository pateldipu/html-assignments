import React from 'react';
import PopularAPI from '../API/PopularAPI'
import { useState } from 'react';

function Popular(props) {
  const [API, setAPI] = useState(PopularAPI)
  console.log(API);
  return (
    <>
      <div className="container-fluid popular p-5">
        <div className="txt">
          <h2>Popular ways of using Podio</h2>
          <center><p>Here's an overview of the kinds of workflows and processes people love using Podio for.
            Starting with the top three:</p></center>
          <div className="row mt-5 pop">
            {API.map((res) => {
              return (
                <div className="col-4 mt-5">
                  <div className="card p-3">
                    <h3>{res.title}</h3>
                    <span>{res.info}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;