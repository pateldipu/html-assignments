import React from 'react';
import Navbar from './Navbar'
import Header from './header';
import Nav from './Nav'
import News from './News'
import Footer from './Footer';
// import Entermenets from './Entermenets'


function Main(props) {
    return (
       <>
        <Navbar/>
        <Header/>
        <Nav/>
        <News/>
        <Footer/>
        {/* <Entermenets/> */}
       </>
    );
}

export default Main;