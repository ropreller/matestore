import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./cartStyle.css"

const Cart = () => {

    const { cart,  total } = useContext(Context)
    const { onClear, onRemoveItem } = useContext(Context)
    const borrar = () => {
        onClear();
    }

    return (
        <>
            {(cart.length > 0) ?
                <div>
                    <h2 className="tituloCarrito">Resumen de su compra</h2>
                    <div className="purchase-card">
                        {cart.map((cartItem) =>
                            <div key={cartItem.id}>
                                <img src={cartItem.imagen} alt={cartItem.nombre} />
                                <h6 className="detalleCompra">{cartItem.nombre}</h6>
                                <p className="detalleCompra">Cantidad:  {cartItem.cantidad} </p>
                                <p className="detalleCompra">Precio unitario  ${cartItem.valor}</p>
                                <p className="detalleCompra">Subtotal  ${cartItem.valor * cartItem.cantidad}</p>
                                <Button variant="alert" className="detalleCompra" onClick={() => onRemoveItem(cartItem.id,cartItem.cantidad,cartItem.valor)} >Quitar</Button>
                                <hr />
                            </div>

                        )}
                        <h6 className="detalleCompra">Total ${total}</h6>
                        <br />
                        <Button variant="success" className="checkOut" >Checkout</Button>
                        <Button variant="warning" className="checkOut" onClick={borrar} >Vaciar</Button>
                    </div>
                </div>
                :
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h4>
                                Aún no tienes nada en tu carrito. <Link to={`/`}>  <Button variant="success">¡Revisa nuestros productos!</Button> </Link>
                            </h4>
                            
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            }

        </>
    )
}

export default Cart