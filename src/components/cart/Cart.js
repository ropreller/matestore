import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./cartStyle.css"
const Cart = () => {

    const { cart, unidades, total } = useContext(Context)
    const { onClear } = useContext(Context)
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
                                <p className="detalleCompra">Cantidad  {cartItem.cantidad}</p>
                                <p className="detalleCompra">Precio  ${cartItem.valor}</p>
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
                                Aún no tienes nada en tu carrito. ¡Revisa nuestros productos!
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