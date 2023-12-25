import React from 'react'

function Home() {
    return (
        <div>
            <div className='container'>
                <h2>user data</h2>
                <div className='my-2'>
                    <button className='btn btn-info'> Add user++ </button>
                </div>

                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <td>ID</td>
                            <td>name</td>
                            <td>email</td>
                            <td>action</td>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td>iid</td>
                            <td>nammeee</td>
                            <td>Emailll</td>
                            <td>
                                <button className='btn btn-info'>SAVE</button>
                                <button className='btn btn-primary'>DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home
