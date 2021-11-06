import React, { useState, useEffect } from "react";
import data from "../../../../data/data";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const mostrarProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res(data)
            }, 2000)
        });
        mostrarProducto.then((data) => {
            setProducto(data.find((i) => i.id === id));
        });
    }, [id]);
    return (
        <ItemDetail {...producto} />
    );
};

export default ItemDetailContainer;