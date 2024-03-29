import React from 'react';
import EnterAPI from './API/EnterAPI'
import { useState } from 'react';

function Entermenets(props) {

    const [API, setAPI] = useState(EnterAPI);
    console.log(API);
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: ' #141414' }} >
                <div className="container">
                    <div className="row pop">
                        {API.map((res) => {
                            return (
                                <div className="col-4 mt-5">
                                    <div className="card p-3" style={{ backgroundColor: ' #141414' }}>



                                        <h5 style={{ color: '#949494' }}><img src={res.img} alt="" class="rounded-circle px-2" style={{ width: '60px', height: '50px' }} />{res.title} </h5>
                                        <h5 style={{ color: '#949494' }} class="px-5">{res.title1}</h5>
                                        <link href=""> <img src={res.image} alt="" style={{ width: '100%' }} className='mt-3' /></link>
                                        <h5 className='mt-3 ' style={{ color: '#949494' }}>{res.condition + ""}</h5>
                                        <link href="" className='text-light mt-3' style={{ fontFamily: 'cursive', fontSize: '18px' }} ><span>{res.info}</span></link>

                                        <h5 className='mt-3' style={{ color: '#949494' }}>{res.data + ""}</h5>

                                        <link href="">   <h4 class="boxx p-3 mt-5 text-light ">
                                            <i class="fa-regular fa-heart "><span>{res.heart + ""}</span></i>
                                            <i class="fa-regular fa-comment-dots"><span>{res.dpt + ""}</span></i>
                                            <i class="fa-solid fa-plus"></i>
                                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                            {res.add} </h4></link>



                                    </div>
                                </div>



                            )
                        })}
                    </div>

                    <div className="read mt-3 p-2 text-center ">
                        <button type="button" class="btn btn-danger">Read more</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Entermenets;

