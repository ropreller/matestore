import React, { useState } from "react";

const Context = React.createContext();

const CartFunction = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)


    const onAdd = (producto, cantidad) => {
        const itemExiste = cart.find(item => item.id === producto.id)
        if (!itemExiste) {
            setCart([...cart, { id: producto.id, imagen: producto.imagen, nombre: producto.nombre, valor: producto.valor, cantidad: cantidad, subtotal: (producto.valor * cantidad) }])
            setTotal(total + (producto.valor * cantidad))
            setUnidades(unidades + 1)
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
        }
    }
    const onClear = () => {
        setCart([]);
        setTotal(0);
        setUnidades(0);
        alert('Items borrados del carrito');
    }

    return <Context.Provider value={{ cart, unidades, total, onAdd, onClear }}>
        {children}
    </Context.Provider>
}

export { CartFunction, Context }