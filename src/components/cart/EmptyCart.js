import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./cartStyle.css"



const EmptyCart = () => {
    return (
        <Container style={{marginTop:'2rem'}}>
        <Row>
            <Col></Col>
            <Col>
                <h3>
                    Aún no tienes nada en tu carrito. <br /> <br /> <Link to={`/`}>  <Button variant="success" style={{width:'100%'}} ><h2>¡Revisa nuestros productos!</h2></Button> </Link>
                </h3>

            </Col>
            <Col></Col>
        </Row>
    </Container>
    )
}

export default EmptyCart;