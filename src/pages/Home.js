import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
const Home = () => {
    return (
        <>
            <NavBar />
            <Welcome saludo='Rodrigo' />
            <ItemListContainer />
            
        </>
    );
}

export default Home;