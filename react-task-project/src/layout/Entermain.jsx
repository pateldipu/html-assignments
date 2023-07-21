import React from 'react';
import Navbar from './Navbar'
import Header from './header';
import Nav from './Nav'
import Entermenets from './Entermenets';
import Footer from './Footer';

function Entermain(props) {
    return (
        <>
          <Navbar/>
           <Header/>
          <Nav/>
        <Entermenets/>
        <Footer/>
        </>
    );
}

export default Entermain;