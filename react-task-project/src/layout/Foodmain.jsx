import React from 'react';
import Navbar from './Navbar'
import Header from './header';
import Nav from './Nav'
import Food from './Food'


function Foodmain(props) {
    return (
        <>
            <Navbar />
            <Header />
            <Nav />
            <Food />
        </>
    );
}

export default Foodmain;