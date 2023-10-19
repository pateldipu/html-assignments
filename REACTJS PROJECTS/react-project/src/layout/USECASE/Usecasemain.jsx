import React from 'react';
import Navbar from '../Navbar'
import Usecase from './Usecase'
import Popular from './Popular';
import Podio from './podio';
import Podiopopular from './podiopopular';

function Usecasemain(props) {
    return (
        <>
            <Navbar />
            <Usecase />
            <Popular />
            <Podio />
            <Podiopopular />
        </>
    );
}

export default Usecasemain;