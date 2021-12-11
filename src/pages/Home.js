import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import ImgFront from '../components/ImgFront';
import Welcome from '../components/Welcome';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemListContainer/ItemList/Item/ItemDetailContainer';
import CartWidget from '../components/cart/CartWidget';
import Checkout from '../components/cart/Checkout';
import Payment from '../components/cart/Payment';
import SiteFooter from '../components/SiteFooter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartFunction } from '../context/CartContext';
import Cart from '../components/cart/Cart';
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
    return (
        <>
            <BrowserRouter>
                <CartFunction>
                    <NavBar />
                    <ImgFront />
                    <Container>
                        <Row>
                            <Col>
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
                                    <Route exact path="/checkout">
                                        <Checkout />
                                    </Route>
                                    <Route exact path="/payment">
                                        <Payment />
                                    </Route>
                                    <Route exact path="*">
                                        <h1>Página no encontrada</h1>
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                    <CartWidget />
                    <SiteFooter />
                </CartFunction>
            </BrowserRouter>
        </>
    );
}

export default Home;