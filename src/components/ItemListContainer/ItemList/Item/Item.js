import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ nombre, desc, valor, imagen }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                    {valor}
                </Card.Text>
                <Button variant="primary">Añadir</Button>
            </Card.Body>
        </Card>
    )
}
export default Item;