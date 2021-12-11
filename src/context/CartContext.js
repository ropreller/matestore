import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal)

const Context = React.createContext();

const CartFunction = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(0)

    const onAddProduct = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        if (!itemExiste) {
            setCart([...cart, { id: producto.id, stock: producto.stock, imagen: producto.imagen, nombre: producto.nombre, valor: producto.valor, cantidad: cantidad, subtotal: (producto.valor * cantidad) }])
            setTotal(total + (producto.valor * cantidad))
            setUnidades(unidades + 1)
            //setCantidadItems(20)
            setCantidadItems(cantidadItems + cantidad)
            console.log("cantiddad items final", cantidadItems)
        } else {
            const cartAux = cart.map((item) => {
                if (item.id === producto.id) {
                    item.cantidad += cantidad
                    item.subtotal += (producto.valor * cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total + (producto.valor * cantidad))
            setCantidadItems(cantidadItems + cantidad)

        }
    }
    const onClear = () => {

        Swal.fire({
            title: 'Vaciar Carrito',
            text: "¿Estás seguro de vaciar el carrito de compras?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                setTotal(0);
                setUnidades(0);
                setCantidadItems(0)
                Swal.fire(
                    'Carrito vacío',
                    '¡Puedes volver a buscar tus productos favoritos!',
                    'success'
                )
            }
        })

    }
    const onRemoveProduct = (idProducto, unidades, valor) => {

        const cartAux = cart
        const nuevoTotal = (total - (unidades * valor))
        var buscarProd = cartAux.findIndex(function (item) {
            return item.id === idProducto;
        })
        if (buscarProd !== -1) {
            cartAux.splice(buscarProd, 1);
        }
        setCart(cartAux)
        setUnidades(unidades - 1)
        console.log("unidades es ", unidades)
        setTotal(nuevoTotal)
        setCantidadItems(cantidadItems - unidades)
    }
    const onAddItem = (idProducto, valor, unidades) => {
        console.log("unidades es", unidades)
        const cartAux = cart.map((item) => {
            if (item.id === idProducto) {
                item.cantidad++
                item.subtotal = (valor * item.cantidad)
            }
            return item
        })
        setCart(cartAux)
        setTotal(total + valor)
        setCantidadItems(cantidadItems + 1)

    }
    const onDeleteItem = (idProducto, valor, unidades) => {
        const cartAux = cart.map((item) => {
            if (item.id === idProducto) {
                item.cantidad--
                item.subtotal = (valor * item.cantidad)
            }
            return item
        })
        setCart(cartAux)
        setTotal(total - valor)
        setCantidadItems(cantidadItems - 1)
    }
    const finalizarCompra = (orderId) => {
        setCart([]);
        setTotal(0);
        setUnidades(0);
        setCantidadItems(0)
        MySwal.fire({
            title: <p>ORDEN INGRESADA</p>,
            footer: 'Klubmate',
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(
            <>
            <h1>¡Felicitaciones!</h1>
            <p>Tu orden<br /> <br /> <b>{orderId}</b><br /> <br />fue ingresada con éxito.</p>
            </>
            )
        })
    }


    return <Context.Provider value={{ cart, unidades, cantidadItems, total, onAddProduct, onClear, onRemoveProduct, onAddItem, onDeleteItem, finalizarCompra }}>
        {children}
    </Context.Provider>
}

export { CartFunction, Context }