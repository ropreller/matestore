import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../../../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../../context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export const ItemDetail = ({ id, nombre, desc, valor, imagen, stock }) => {
    const [buy, setBuy] = useState(false);
    const { cart, onAdd } = useContext(Context)

    // checkear si item existe en el carrito:
    const itemEnCarro = cart.find(item => item.id === id)
    if (!itemEnCarro) {
       console.log("item NO en carro")
    } else {
        cart.map((item) => {
            if (item.id === id) {
                console.log("Unidades que hay en carro: ",item.cantidad)
                stock -= item.cantidad
            }
            return item
        })
    }



    const agregar = (props) => {
        setBuy(true);
        onAdd({ id,stock, nombre, valor, imagen }, props.unidades)
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