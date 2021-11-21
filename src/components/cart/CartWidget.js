import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./cartStyle.css"


const CartWidget = () => {
    const { cart, total } = useContext(Context)
    return (
        <>
            {(cart.length > 0) ?
                <Card style={{ width: '18rem' }} className="widget">
                    <Card.Header>Carrito de compras</Card.Header>
                    <ListGroup variant="flush">

                        {cart.map((cartItem) =>
                            <ListGroup.Item key={cartItem.id}>
                                <div>
                                    <img src={cartItem.imagen} alt={cartItem.nombre} className="imgWidget" />

                                    <h6 className="detalleCompra"> {cartItem.nombre}</h6>
                                    <h6 className="detalleCompra"> x {cartItem.cantidad}</h6>
                                </div>
                            </ListGroup.Item>
                        )}
                        <h6 className="detalleCompra">Total ${total}</h6>
                        <Link to={`/cart`}>  <Button variant="success">Ir al carro</Button> </Link>
                    </ListGroup>
                </Card> :
                ' '}
        </>
    )
}

export default CartWidget;