import React, { useContext } from "react";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartStyle.css"

const Checkout = () => {

    const { cart, total, onClear } = useContext(Context)
    const borrar = () => {
        onClear();
    }

    return (
       
        <Container>
            <Row>
                <Col>
                    {(cart.length > 0) ?
                     <>
                        <Table striped bordered hover style={{ marginTop: '5%' }}>
                            <thead>
                                <tr>
                                    <th>Foto del producto</th>
                                    <th>Nombre</th>
                                    <th>Valor unitario</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((cartItem) =>

                                    <tr key={cartItem.id}>
                                        <td><img src={cartItem.imagen} alt={cartItem.nombre} /></td>
                                        <td>{cartItem.nombre}</td>
                                        <td>${cartItem.valor}</td>
                                        <td>{cartItem.cantidad}</td>
                                        <td>${cartItem.valor * cartItem.cantidad}</td>
                                    </tr>
                                )}
                                 <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><b>Total</b></td>
                                        <td><b>${total}</b></td>
                                    </tr>
                            </tbody>
                        </Table>
                        <Link to={`/payment`}> <Button variant="success" className="btnCheckout" >Realizar pago</Button></Link>
                        <Button variant="danger" className="btnCheckout" onClick={borrar} >Cancelar compra</Button>

                        </>                   
                        :
                        <h4>
                            Aún no tienes nada en tu carrito. <Link to={`/`}>  <Button variant="success">¡Revisa nuestros productos!</Button> </Link>
                        </h4>
                    }
                    
                </Col>
            </Row>
        </Container>
       
    )
}

export default Checkout;

