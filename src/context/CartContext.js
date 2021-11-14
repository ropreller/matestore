import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2022',
            didOpen: () => {
              // `MySwal` is a subclass of `Swal`
              //   with all the same instance & static methods
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(<p>Se ha vaciado el carrito.</p>)
          })
    }

    return <Context.Provider value={{ cart, unidades, total, onAdd, onClear }}>
        {children}
    </Context.Provider>
}

export { CartFunction, Context }