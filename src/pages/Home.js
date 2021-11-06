import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import Slider from '../components/Slider';
import ImgFront from '../components/ImgFront';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemListContainer/ItemList/Item/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <ImgFront />
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/productos/:idCategoria">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/producto/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/envios">
                        <h1>Sección Envíos</h1>
                    </Route>
                    <Route exact path="/contacto">
                        <h1>Sección Contacto</h1>
                    </Route>
                    <Route exact path="/cart">
                        <h1>Carrito</h1>
                    </Route>
                    <Route exact path="*">
                        <h1>Página no encontrada</h1>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Home;