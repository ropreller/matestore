import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import CartItemCount from "./CartItemCount";
import EmptyCart from "./EmptyCart";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cartStyle.css"


const Cart = () => {

    const { cart, total, onClear, onRemoveProduct } = useContext(Context)

    const borrar = () => {
        onClear();
    }

    return (
        <>
            {(cart.length > 0) ?
                <div>
                    <h2 className="tituloCarrito">Resumen de su compra</h2>
                    <div className="purchase-card">
                        {cart.map((cartItem) =>
                            <div key={cartItem.id}>
                                <img src={cartItem.imagen} alt={cartItem.nombre} />
                                <h6 className="detalleCompra">{cartItem.nombre}</h6>
                                <p className="detalleCompra">{cartItem.cantidad} añadidos. </p>
                                <CartItemCount valor={cartItem.valor} itemId={cartItem.id} stock={cartItem.stock} cantidad={cartItem.cantidad} />
                                <p className="detalleCompra">Precio unitario  ${cartItem.valor}</p>
                                <p className="detalleCompra">Subtotal  ${cartItem.valor * cartItem.cantidad}</p>
                                <div className="detalleCompra">
                                    <Button variant="warning" onClick={() => onRemoveProduct(cartItem.id, cartItem.cantidad, cartItem.valor)} >Quitar</Button>
                                </div>
                                <hr />
                            </div>
                        )}
                        <h6 className="detalleCompra">Total ${total} <Button variant="danger" className="vaciar" onClick={borrar} >Vaciar carro</Button></h6>
                        <br />
                        <Link to={`/checkout`}> <Button variant="success" className="checkOut" >Checkout</Button></Link>
                    </div>
                </div>
                :
                <EmptyCart />
            }

        </>
    )
}

export default Cart