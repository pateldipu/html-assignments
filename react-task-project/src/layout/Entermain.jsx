import React from 'react';
import Navbar from './Navbar'
import Header from './header';
import Nav from './Nav'
import Entermenets from './Entermenets';

function Entermain(props) {
    return (
        <>
          <Navbar/>
           <Header/>
          <Nav/>
        <Entermenets/>
        </>
    );
}

export default Entermain;