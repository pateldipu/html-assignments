// import React from 'react';


// function Design(props) {
//     return (


//         <div className="container mt-5 face">
//             <div className='round'>
//                 <div className='half'></div>
//                 <div className='canvas'></div>
//                 <div className='canvas1'></div>
//             </div>

//             <div className='round1'>
//                 <div className='half'></div>
//                 <div className='canvas'></div>
//                 <div className='canvas1'></div>
//             </div>
//         </div>



//     );
// }

// export default Design;


// import { useState } from "react"
// function AddRemoveInputField() {

//     const [inputFields, setInputFields] = useState([{
//         fullName: '',

//     }]);

//     const addInputField = () => {

//         setInputFields([...inputFields, {
//             fullName: '',
//         }])

//     }
//     const removeInputFields = (index) => {
//         const rows = [...inputFields];
//         rows.splice(index, 1);
//         setInputFields(rows);
//     }
//     const handleChange = (index, evnt) => {

//         const { name, value } = evnt.target;
//         const list = [...inputFields];
//         list[index][name] = value;
//         setInputFields(list);



//     }
//     return (

//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-8">
//                     {
//                         inputFields.map((data, index) => {
//                             const { fullName } = data;
//                             return (
//                                 <div className="row my-3" key={index}>
//                                     <div className="col">
//                                         <div className="form-group">
//                                             <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName" className="form-control" placeholder="Full Name" />
//                                         </div>
//                                     </div>

//                                     <div className="col">



//                                         {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button> : ''}


//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }

//                     <div className="row">
//                         <div className="col-sm-12">

//                             <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-sm-4">

//             </div>
//         </div>

//     )
// }
// export default AddRemoveInputField


import React, { useState, useEffect } from 'react';

function InputAddButton() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleAddButtonClick = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };
    const handleCancel = (event) => {
        console.log("fire");
        console.log(event);
        setItems((current) =>
            current.filter((fruit) => fruit !== event)
        );
    };
    useEffect(() => {
        console.log(items);
    }, [items])

    return (
        <div>
            <select className='p-1 my-2 me-2' style={{ borderRadius: "10px" }} onChange={handleInputChange}>
                <option >All</option>
                <option>Unread</option>
                <option>Expired</option>
                <option>jerry</option>
                <option>Open</option>
                <option>tom</option>
                <option>patlu</option>
                <option>jetho</option>
                <option>john</option>
                <option>doremon</option>
                <option>bhim</option>
                <option>nobita</option>

            </select>

            <button onClick={handleAddButtonClick}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={item}>{item} <button type="submit" onClick={() => handleCancel(item)}>❌</button></li>
                ))}

            </ul>
        </div>
    );
}

export default InputAddButton;
