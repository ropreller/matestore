import React, { useState, useEffect } from "react";
import data from '../../data/data';
import ItemList from "./ItemList/ItemList";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idCategoria } = useParams();
    console.log(idCategoria);

    useEffect(() => {
        setCargando(true);
        const listaDeProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(data)
            }, 1000)
        })
        listaDeProductos.then((data) => {
            idCategoria ? setProductos(data.filter(i => i.categoria === idCategoria)) : setProductos(data)
            setCargando(false)
        })
    }, [idCategoria]) // [Listener del cambio de estado productos]

    return (
        <div>
            {cargando ? <Container><Row className="justify-content-md-center"> <Col><Spinner animation="border" /></Col></Row> </Container> : <ItemList productos={productos} />}
        </div>
    );
}

export default ItemListContainer;