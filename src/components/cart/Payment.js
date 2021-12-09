import React, {useContext} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Context } from "../../context/CartContext";
import { getCollection, getFirstoreDB } from "../../lib/Firebase";
import { addDoc } from "@firebase/firestore";
import "./cartStyle.css"


const Payment = () => {

    const { cart, total, finalizarCompra } = useContext(Context)

    const buyProducts = async () => {
        try {
            const db = getFirstoreDB();
            const collection = getCollection(db, 'orders');
   
            const addProducts = await addDoc(collection, {
                buyer: {
                    name: 'Andreas',
                    phone: '976182656',
                    email: 'rodrigooportus@email.cl'
                },
                items: cart?.map((item) => item),
                total: {total}
            });
            
            if (addProducts?._key?.path?.segments?.[1] !== '') {
                finalizarCompra();
            }

        } catch (error){
            console.log(error);
        }
    }

    return (
        <Container>
            <Row style={{marginTop:'50px'}}>
                <Col>
                <Button variant="success" className="checkOut" onClick={buyProducts} >Pagar</Button>

                </Col>
            </Row>
        </Container>
    )

}

export default Payment;