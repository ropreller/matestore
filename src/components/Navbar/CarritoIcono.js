import React from "react";
import { BsFillCartFill,BsFillCartPlusFill } from 'react-icons/bs';
import { Badge } from "react-bootstrap";

const CarritoIcono = (props) => {
  
    return (
        <>
        {(props.items>0) ? <><BsFillCartPlusFill size="1.5em" /><Badge>{props.items}</Badge></> : <BsFillCartFill size="1.5em"/> }
           
        </>
    )
}

export default CarritoIcono