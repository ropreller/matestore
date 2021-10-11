import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavBarSitio = () => {
    // Nota: Debí cambiar el nombre de la constante de Navbar a NabBarSitio, ya que el nombre original choca con el import de bootstrap.
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img alt="LogoKM" src="../../../img/klub.png" width="60" height="60" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#calabazas">Calabazas</Nav.Link>
                        <Nav.Link href="#bombillas">Bombillas</Nav.Link>
                        <Nav.Link href="#materas">Materas</Nav.Link>
                        <Nav.Link href="#yerba">Yerba</Nav.Link>
                        <Nav.Link href="#envios">Envíos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarSitio;