import React, { useState, useEffect } from "react";
import data from "../../../../data/data";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        setCargando(true);
        const mostrarProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res(data)
            }, 2000)
        });
        mostrarProducto.then((data) => {
            setProducto(data.find((i) => i.id === id));
            setCargando(false);
        });
    }, [id]);
    return (
        <div>
            {cargando ? <Container><Row className="justify-content-md-center"> <Col><Spinner animation="border" /></Col></Row> </Container> : <ItemDetail {...producto} />}
        </div>

    );
};

export default ItemDetailContainer;