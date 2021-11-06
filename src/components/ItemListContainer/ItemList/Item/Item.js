import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id,nombre, desc, valor, imagen }) => {
    return (
       
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    ${valor}
                </Card.Text>
                <Link to={`/producto/${id}`}>
                <Button variant="warning">Ver Producto</Button>
                </Link>
                <Button variant="primary">Añadir</Button>
            </Card.Body>
        </Card>
      
    )
}
export default Item;