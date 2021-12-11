import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = ({ saludo }) => {
    return (
        <>
            <Container style={{marginTop:'2rem',marginBottom:'2rem'}}>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2>
                            Productos destacados
                        </h2>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}
export default Welcome;