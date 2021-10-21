import React from "react";
import { Navbar as NavBarSitio, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    // Nota: Debí cambiar el nombre de la constante de Navbar a NabBarSitio, ya que el nombre original choca con el import de bootstrap.
    return (
        <>
            <NavBarSitio bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <NavBarSitio.Brand href="#home">
                        <img alt="LogoKM" src="../../../img/klub.png" width="60" height="60" className="d-inline-block align-top" />
                    </NavBarSitio.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#calabazas">Calabazas</Nav.Link>
                        <Nav.Link href="#bombillas">Bombillas</Nav.Link>
                        <Nav.Link href="#materas">Materas</Nav.Link>
                        <Nav.Link href="#yerba">Yerba</Nav.Link>
                        <Nav.Link href="#envios">Envíos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </NavBarSitio>
        </>
    );
}

export default NavBar;