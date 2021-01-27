import React from 'react'

import Balance from '../components/Balance'
import Input from '../components/Input'
import NavReturn from '../components/NavReturn'
import DonutSlide from '../components/DonutSlide'
import { Container, Button } from 'react-bootstrap'

function Disposition(){
    return(
        <main className="bg-gradient">
            <Container fluid className="paddings">
                <NavReturn />
                <h1 className="title mb-3">Disposición</h1>
                <Balance title="Tienes disponible" className="disposition mb-4" />
                <Input
                    type="text"
                    placeholder="Auto"
                />
                <Input
                    type="text"
                    placeholder="$350,000.00"
                />
                <p className="text-bold mt-4">Selecciona tu plazo</p>
                <DonutSlide />
                <Button variant="primary" className="w-100 mb-5 mt-5">LO QUIERO</Button>
            </Container>
        </main>
    )
}

export default Disposition