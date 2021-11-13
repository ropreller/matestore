import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Recibe el stock y debe realizar las operaciones suma/resta
const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(0);
    const [carro, setCarro] = useState(0);

    const handleStock = {
        sumaStock: () => {
            if (stock === 0) {
                //alert('No hay stock');s
            } else {
                setUnidades(unidades + 1);
                setStock(stock - 1);
                setCarro(1);
            }
        },
        restaStock: () => {
            if (unidades === 1) {
                //alert('No se puede seleccionar menos de 0');
            } else {
                setUnidades(unidades - 1);
                setStock(stock + 1);
                setCarro(1);
            }
        }
    }

    return (
        <div>
            <div>
                <Button variant="secondary" onClick={handleStock.restaStock} > - </Button>
                <p>{unidades}</p>
                <Button variant="secondary" onClick={handleStock.sumaStock} > + </Button>
            </div>
            <div>
                <p>Stock disponible: {(stock > 0) ? stock  : "sin stock"}</p>
            </div>
            <div>
                {(carro > 0) ? <Button variant="primary" onClick={() => props.onAdd({ unidades })} > Agregar al carrito </Button>
                    : <Button variant="danger"> Debe añadir items </Button>}
            </div>
        </div>
    )

}

export default ItemCount;