import React, {useContext}from "react";
import { Navbar as NavBarSitio, Container, Nav } from "react-bootstrap";
import rutas from "../../data/rutas";
import { Link } from "react-router-dom";
import CarritoIcono from "./CarritoIcono";
import { Context } from "../../context/CartContext";

const NavBar = () => {
    const { cart,cantidadItems } = useContext(Context)
    return (
        <>
            <NavBarSitio bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <Nav.Link to="/">
                        <img alt="LogoKM" src="../../../img/klub.png" width="60" height="60" className="d-inline-block align-top" />
                    </Nav.Link>
                    <Nav className="me-auto">
                        {rutas.map((ruta) => {
                            return (
                                // Bootstrap: as Link.
                                <Nav.Link as={Link} key={ruta.id} to={ruta.address}>{ruta.text}</Nav.Link>
                            );
                        })}
                    </Nav>
                    <NavBarSitio.Collapse className="justify-content-end">
                        <NavBarSitio.Text>
                            <Link to="/cart">
                                <CarritoIcono items={cantidadItems}/>
                            </Link>
                        </NavBarSitio.Text>
                    </NavBarSitio.Collapse>
                </Container>
            </NavBarSitio>
        </>
    );
}

export default NavBar;