import React from 'react';
// import Styled from 'styled-components';
import Styled from 'styled-components'

const H1 =Styled.h1`
  color:green;
  background:gray;
  padding:10px;
  text-align:center;
`

function stylecompo(props) {
    return (
        <>
         <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <H1> GOOD MORNING!!!!! </H1>
                </div>
            </div>
         </div>
        </>
    );
}

export default stylecompo;