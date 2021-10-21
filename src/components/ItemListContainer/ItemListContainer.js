import React, { useState, useEffect } from "react";
import data from '../../data/data';
import ItemList from "./ItemList/ItemList";
import { Spinner, Container, Row, Col } from "react-bootstrap";

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const listaDeProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(data)
            }, 3000)
        })
        listaDeProductos.then((data) => {
            setProductos(data)
            setCargando(false)
        })
    }, [productos]) // [Listener del cambio de estado productos]

    return (
        <div>
            {cargando ? <Container><Row className="justify-content-md-center"> <Col><Spinner animation="border" /></Col></Row> </Container> : <ItemList productos={productos} />}
        </div>
    );
}

export default ItemListContainer;