import React from 'react';
import NavBarSitio from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/footer';
const Home = () => {
    return (
        <>
            <NavBarSitio />
            <Welcome saludo='Rodrigo' />
            <Footer />
        </>
    )
};

export default Home;