import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import Tables from './Table'


function Payment(props){
    return(
        <div className="p-relative payments">
            <Card>
                <Card.Body>
                    <Card.Subtitle>Tu próximo pago</Card.Subtitle>
                    <Card.Title>$28,860.00</Card.Title>
                    <Row>
                        <Col xs={6}>
                            <Card.Subtitle>Fecha de pago</Card.Subtitle>
                            <Card.Text>16 Enero</Card.Text>
                        </Col>
                        <Col xs={6}>
                            <Card.Link href="#" className="btn btn-primary">PAGAR AHORA</Card.Link>
                        </Col>
                    </Row>
                    <Row>
                        <Tables />
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Payment