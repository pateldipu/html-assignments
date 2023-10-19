import React from 'react';
import Navbar from '../Navbar'
import Header from './header'
import Drive from './Drive'
import Collabration from './collabration'
import Chancelight from './Chancelight';
import Dependability from './Dependability';
import Features from './Features'
import Footer from '../Footer';



function Main(props) {
    return (
        <>
            <Navbar />
            <Header />
            <Drive />
            <Collabration />
            <Chancelight />
            <Dependability />
            <Features />
            <Footer />
        </>
    );
}

export default Main;