import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import CartItemCount from "./CartItemCount";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cartStyle.css"


const Cart = () => {

    const { cart,  total, onClear, onRemoveProduct } = useContext(Context)
    
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
                                <p className="detalleCompra">{cartItem.cantidad} añadidos. </p>
                                <CartItemCount valor={cartItem.valor} itemId={cartItem.id} stock={cartItem.stock} cantidad={cartItem.cantidad}/>
                                <p className="detalleCompra">Precio unitario  ${cartItem.valor}</p>
                                <p className="detalleCompra">Subtotal  ${cartItem.valor * cartItem.cantidad}</p>
                                <div className="detalleCompra"> 
                                <Button variant="warning" onClick={() => onRemoveProduct(cartItem.id,cartItem.cantidad,cartItem.valor)} >Quitar</Button>
                                </div>
                                <hr />
                            </div>
                        )}
                        <h6 className="detalleCompra">Total ${total} <Button variant="danger" className="vaciar" onClick={borrar} >Vaciar carro</Button></h6>
                        <br />
                        <Link to={`/checkout`}> <Button variant="success" className="checkOut" >Checkout</Button></Link>
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