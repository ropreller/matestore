import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup, Table } from 'react-bootstrap';
import { Context } from "../../context/CartContext";
import { getCollection, getFirstoreDB } from "../../lib/Firebase";
import { addDoc } from "@firebase/firestore";
import EmptyCart from "./EmptyCart";
import "./cartStyle.css"


const Payment = () => {

    const { cart, total, finalizarCompra } = useContext(Context);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    
    const buyProducts = async () => {
        try {
            const db = getFirstoreDB();
            const collection = getCollection(db, 'orders');

            const addProducts = await addDoc(collection, {
                buyer: {
                    name: name,
                    lastName: lastName,
                    phone: phone,
                    email: email
                },
                items: cart?.map((item) => item),
                total: { total },
                status: 'INGRESADA'
            });

            if (addProducts?._key?.path?.segments?.[1] !== '') {
                const orderId = addProducts?._key?.path?.segments?.[1];
                finalizarCompra(orderId);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
              {(cart.length > 0) ?
            <Row style={{ marginTop: '50px' }} >
                <Col>
                <h4>Resumen</h4>
                        <Table striped bordered hover size="sm">
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
                </Col>
                <Col>
                <h4>Ingrea tus datos para realizar la compra</h4>
                    <Form noValidate>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    defaultValue=""
                                    onChange={evt =>setName(evt.target.value)}
                                />
                                <Form.Control.Feedback>Válido</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                      Ingrese su nombre.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Apellido"
                                    defaultValue=""
                                    onChange={evt =>setLastName(evt.target.value)}
                                />
                                <Form.Control.Feedback>Válido</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                      Ingrese su apellido.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Teléfono - Solo números."
                                    defaultValue=""
                                    onChange={evt =>setPhone(evt.target.value)}
                                />
                                <Form.Control.Feedback>Válido</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                      Ingrese su teléfono. 
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={evt =>setEmail(evt.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                       Ingrese su email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>Check Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Reingresar Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={evt =>setCheckEmail(evt.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                       Ingrese nuevamente su email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                    </Form>
                    {
                        ((name !== "" && lastName!=="" && email!=="" && checkEmail!==""  && phone!=="") && (email==checkEmail) ) ? 
                        <Button variant="success" className="checkOut" onClick={buyProducts} >Realizar pago: {total}</Button> :
                        <Button disabled variant="danger" className="checkOut" >Debe ingresar sus datos</Button>
                    }
                </Col>
            </Row>
              : 
              <EmptyCart />
                       
            }
        </Container>
    )
}

export default Payment;