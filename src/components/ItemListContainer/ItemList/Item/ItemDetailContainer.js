import React, { useState, useEffect } from "react";
//import data from "../../../../data/data";
// Firebase
import { getFirstoreDB } from "../../../../lib/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";

const ItemDetailContainer = () => {
    const db = getFirstoreDB();
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { id } = useParams();
    //console.log(id);


    useEffect(() => {
        const myItem = doc(db, 'products', id)
        getDoc(myItem)
            .then((res) => {
                const result = { id: res.id, ...res.data() }
                setProducto(result)
            }).finally(() => {
                setCargando(false)
            })

    }, []);

    return (
        <div>
            {cargando ? <Container><Row className="justify-content-md-center"> <Col><Spinner animation="border" /></Col></Row> </Container> : <ItemDetail {...producto} />}
        </div>

    );
};

export default ItemDetailContainer;