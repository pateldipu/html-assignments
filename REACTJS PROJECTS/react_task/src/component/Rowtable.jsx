// import React from 'react'

// export default function Rowtable() {
//     return (
//         <>

//             <div class="container text-center">
//                 <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-3 align-items-start">
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                     <div class="col">
//                         One of three columns
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useState } from 'react';
// import './Modal.css'; // Import your CSS file for styling

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-dialog my-3" >
                <div className="modal-content" style={{ backgroundColor: "#", width: "" }} >


                    <div className="modal-header text-white " style={{ backgroundColor: "#382F86" }}>
                        <h1 className="modal-title fs-5" id="staticBackdropLabel" > Add user </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="row w-100 my-1 m-0 p-0" >
                        <div className="col-6">


                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="on" checked />
                                <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="on" />
                                <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="on
                                =" />
                                <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
                            </div>

                        </div>
                        <div className="col-6">
                            <input type="text" />
                        </div>


                        <div className="col-6 my-1">
                            <p>Name</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "balck", border: "1px solid gray" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>Company</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>Email</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>concent no</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>state</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>city</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>Pin code</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                        <div className="col-6 my-1">
                            <p>Category</p>
                        </div>

                        <div className="col-6">
                            <input type="text" className='w-75' style={{ backgroundColor: "rgb(216, 233, 224)", border: "none" }} />
                        </div>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn  text-white" style={{ border: "1px solid black", backgroundColor: "#382F86" }} data-bs-dismiss="modal">Save</button>
                        <button type="button" className="btn text-white " onClick={onClose} style={{ backgroundColor: "#382F86" }}>Cancle</button>
                    </div>




                </div>
            </div>
        </div >

    );
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='continer my-5 mx-3'>

            <button onClick={toggleModal}>Toggle Modal
            </button>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default App;

// import React from 'react'

// export default function Rowtable() {
//     return (
//         <div>
//             <div className="row  my-5 mx-3">
//                 <div className="col-6">
//                     <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
//                         <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
//                         <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

//                         <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
//                         <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

//                         <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
//                         <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
//                     </div>
//                 </div>
//                 <div className="col-6">
//                     tupes
//                 </div>
//             </div>
//         </div>
//     )
// }


