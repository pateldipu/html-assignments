import React from 'react';
import PodiopopularAPI from '../API/PodiopopularAPI'
import { useState } from 'react';

function Podiopopular(props) {
    const [API, setAPI] = useState(PodiopopularAPI)
    console.log(API);

    return (
        <>
            <div className="container popular p-5 bg-light">
                <div className="mytxt">
                    <h2>Popular ways of using Podio</h2>

                    <div className="row mt-3 pop">
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

export default Podiopopular;