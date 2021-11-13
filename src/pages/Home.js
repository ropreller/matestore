import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import ImgFront from '../components/ImgFront';
import Welcome from '../components/Welcome';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemListContainer/ItemList/Item/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartFunction } from '../context/CartContext';
import Cart from '../components/cart/Cart';
import { Container, Row } from "react-bootstrap";


const Home = () => {
    return (
        <>
            <BrowserRouter>
                <CartFunction>
                    <NavBar />
                    <ImgFront />
                    <Container>
                        <Row>
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
                                    <Cart />
                                </Route>
                                <Route exact path="*">
                                    <h1>Página no encontrada</h1>
                                </Route>
                            </Switch>
                        </Row>
                    </Container>

                </CartFunction>
            </BrowserRouter>
        </>
    );
}

export default Home;