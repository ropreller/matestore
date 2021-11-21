import React from "react"
import Item from "./Item/Item"
import { Container, Row, Col } from "react-bootstrap"

const ItemList = ({ productos }) => {
    return (
        <>
            <Container>
                <Row>
                    {productos.map((producto) =>
                        <Col key={producto.id}>
                            <Item id={producto.id} nombre={producto.nombre} desc={producto.desc} valor={producto.valor} imagen={producto.imagen} />
                        </Col>
                    )}
                </Row>


            </Container>

        </>
    )
}

export default ItemList