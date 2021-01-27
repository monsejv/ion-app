import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Payment from '../components/Payment'
import Movements from '../components/Movements'

import {Container} from 'react-bootstrap'

function Home(){
    return(
        <main>
            <NavBar />
            <Container fluid className="padding-body">
                <Header />
                <Banner />
                <Payment />
                <Movements />
            </Container>
        </main>
    )
}

export default Home