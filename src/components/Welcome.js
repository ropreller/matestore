import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = ({ saludo }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <h4>
                            Tienda online de productos de mate. ¡Revise nuestras categorías!.
                        </h4>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}
export default Welcome;