import React, { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getFirstoreDB } from "../../lib/Firebase";
import ItemList from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

    const db = getFirstoreDB();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { idCategoria } = useParams();
    console.log(idCategoria);


    useEffect(() => {
        const myItems = idCategoria ?
            query(collection(db, 'products'), where("categoria", "==", idCategoria))
            :
            collection(db, 'products');
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
        <div>
            {cargando ? <Spinner animation="border" /> : <ItemList productos={productos} />}
        </div>
    );
}

export default ItemListContainer;