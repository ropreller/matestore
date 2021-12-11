import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Card, ListGroup, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./cartStyle.css"


const CartWidget = () => {
    const { cart, total } = useContext(Context)
    return (
        <>
            {(cart.length > 0) ?
                <>
                    <Accordion className="widgetContent">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Carrito</Accordion.Header>
                            <Accordion.Body style={{padding:'0px'}}>
                                <Card className="widget">
                                    <ListGroup variant="flush">
                                        {cart.map((cartItem) =>
                                            <ListGroup.Item key={cartItem.id}>
                                                <div>
                                                    <img src={cartItem.imagen} alt={cartItem.nombre} className="imgWidget" />
                                                    <h6 className="detalleCompra"> x {cartItem.cantidad} {cartItem.nombre}</h6>
                                                </div>
                                            </ListGroup.Item>
                                        )}
                                        <h6 className="detalleCompra">Total ${total}</h6>
                                        <Link to={`/cart`}>  <Button variant="success" className="checkOut">Ir al carro</Button> </Link>
                                    </ListGroup>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
                :
                ' '}
        </>
    )
}

export default CartWidget;