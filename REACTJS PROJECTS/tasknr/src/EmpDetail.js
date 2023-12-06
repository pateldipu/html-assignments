import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmpDetail() {

    const [empData, setEmpData] = useState();
    const navigate = useNavigate()

    useEffect(() => {

        fetch("http://localhost:8000/employee")
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data)
                setEmpData(data)
            })


    }, [])

    const LoadProfile = (id) => {

        navigate("/employee/view/" + id)

    }


    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id)
    }


    const LoadDelete = (id) => {



        if (window.confirm("Are you sure...? ")) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empData)
            })

                .then((res) => {
                    alert("Delete succesfully...!");
                    window.location.reload();

                })

                .catch((err) => {
                    console.log(err.message)
                })
        }



    }



    return (
        <div>

            <div className='container'>
                <div className='card'>
                    <div className='card-title'>
                        <h1>Employee Details</h1>
                        <Link to="employee/create" className='btn btn-warning'>Add New (+)</Link>

                    </div>

                    <div className=' card-body'>
                        <table className='table'>
                            <thead className='table-dark'>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>

                                </tr>
                            </thead>

                            <tbody>

                                {empData &&
                                    empData.map((item, e) => (
                                        <tr key={e}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <button className='btn btn-success me-2' onClick={() => { LoadEdit(item.id) }}>Edit</button>
                                                <button className='btn btn-danger me-2' onClick={() => { LoadDelete(item.id) }} >Delete</button>
                                                <button onClick={() => { LoadProfile(item.id) }} className='btn btn-primary'>View Detail</button>
                                            </td>
                                        </tr>

                                    ))
                                }


                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default EmpDetail
