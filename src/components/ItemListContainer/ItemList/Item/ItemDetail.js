import React, { useContext, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ItemCount from "../../../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export const ItemDetail = ({ id, nombre, desc, valor, imagen, stock }) => {
    const [buy, setBuy] = useState(false);
    const { cart, onAddProduct } = useContext(Context)

    // checkear si item existe en el carrito:
    const itemEnCarro = cart.find(item => item.id === id)
    if (!itemEnCarro) {
        console.log("item NO en carro")
    } else {
        cart.map((item) => {
            if (item.id === id) {
                console.log("Unidades que hay en carro: ", item.cantidad)
                stock -= item.cantidad
            }
            return item
        })
    }



    const agregar = (props) => {
        setBuy(true);
        onAddProduct({ id, stock, nombre, valor, imagen }, props.unidades)
        //alert(`agregaste ${props.unidades} al carrito`)
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2022',
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(<p>agregaste {props.unidades} al carrito</p>)
        })
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={imagen} />
                    </Col>
                    <Col>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Card.Text>Precio: ${valor}</Card.Text>
                        <hr />
                        {!buy ?
                          
                                <ItemCount stock={stock} onAddProduct={agregar} /> :
                                <Link to='/cart'><Button variant="success">Terminar compra</Button></Link>}
                    </Col>
                </Row>
            </Container>
        </>
    );
};