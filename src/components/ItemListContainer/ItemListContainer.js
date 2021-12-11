import React, { useState, useEffect } from "react";
import { query, getDocs, where } from "firebase/firestore";
import { getCollection, getFirstoreDB } from "../../lib/Firebase";
import ItemList from "./ItemList/ItemList";
import { Spinner, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const db = getFirstoreDB();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { idCategoria } = useParams();
    console.log(idCategoria);


    useEffect(() => {
        const myItems = idCategoria ?
            query(getCollection(db, 'products'), where("categoria", "==", idCategoria))
            :
            getCollection(db, 'products');
        getDocs(myItems)
            .then((res) => {
                const results = res.docs.map((doc) => {
                    return { ...doc.data() };
                });
                setProductos(results)
            }).finally(() => {
                setCargando(false)
            })

    }, [idCategoria]);

    return (
        <>
            {(idCategoria) ?
                <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <Row>
                        <Col>
                            <h1>Buscando por: {idCategoria}</h1>
                        </Col>
                    </Row>
                </Container> :
                ''
            }


            <div>
                {cargando ? <Spinner animation="border" /> : <ItemList productos={productos} />}
            </div>
        </>
    );
}

export default ItemListContainer;