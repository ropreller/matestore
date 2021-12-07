import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Context = React.createContext();

const CartFunction = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(0)
    console.log("cantidad items incial ", cantidadItems)

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
        setCart([]);
        setTotal(0);
        setUnidades(0);
        setCantidadItems(0)
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2022',
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(<p>Se ha vaciado el carrito.</p>)
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
    const onAddItem = (idProducto,valor,unidades) => {
        console.log("unidades es", unidades)
        const cartAux = cart.map((item) => {
            if (item.id === idProducto) {
                item.cantidad ++
                item.subtotal = (valor * item.cantidad)
            }
            return item
        })
        setCart(cartAux)
        setTotal(total + valor)
        setCantidadItems(cantidadItems + 1)

    }
    const onDeleteItem = (idProducto,valor,unidades) => {
        const cartAux = cart.map((item) => {
            if (item.id === idProducto) {
                item.cantidad --
                item.subtotal = (valor * item.cantidad)
            }
            return item
        })
        setCart(cartAux)
        setTotal(total - valor)
        setCantidadItems(cantidadItems - 1)
    }
    

    return <Context.Provider value={{ cart, unidades, cantidadItems, total, onAddProduct, onClear, onRemoveProduct, onAddItem, onDeleteItem }}>
        {children}
    </Context.Provider>
}

export { CartFunction, Context }