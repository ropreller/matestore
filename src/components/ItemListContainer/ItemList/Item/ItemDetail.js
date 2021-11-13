import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../../../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/CartContext";


export const ItemDetail = ({ id, nombre, desc, valor, imagen, stock }) => {
    const [buy, setBuy] = useState(false);
    const { onAdd } = useContext(Context)

    const agregar = (props) => {
        setBuy(true);
        onAdd({ id, nombre, valor, imagen }, props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)
    }


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <hr />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${valor}
                    </Card.Text>
                </Card.Body>
                {!buy ?
                    <ItemCount stock={stock} onAdd={agregar} /> :
                    <Link to='/cart'><Button variant="success">Terminar compra</Button></Link>
                }
            </Card>
        </>
    );
};