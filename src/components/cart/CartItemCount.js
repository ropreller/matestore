import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../context/CartContext";

// Recibe el stock y debe realizar las operaciones suma/resta
const CartItemCount = (props) => {
    const [stock, setStock] = useState(props.stock - props.cantidad);
    const [unidades, setUnidades] = useState(props.cantidad);
    const { onAddItem, onDeleteItem } = useContext(Context);
    
    const handleStock = {
        sumaStock: () => {
            if (stock === 0) {
            } else {
                setUnidades(unidades + 1);
                setStock(stock - 1);
                onAddItem( props.itemId , props.valor,(unidades+1));
            }
        },
        restaStock: () => {
            if (unidades === 1 || unidades === 0) {
            } else {
                setUnidades(unidades - 1);
                setStock(stock + 1);
                onDeleteItem( props.itemId , props.valor,(unidades-1));
            }
        }
    }

    return (
        <div className="detalleCompra">
            <div>
                <Button variant="secondary" onClick={handleStock.restaStock} > - </Button>
                &nbsp;&nbsp;
                <Button variant="secondary" onClick={handleStock.sumaStock} > + </Button>
            </div>
            <div>
                <p>Stock: {(stock > 0) ? stock : "sin stock"}</p>
            </div>
        </div>
    )

}

export default CartItemCount;