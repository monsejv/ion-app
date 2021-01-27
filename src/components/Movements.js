import React from 'react'

import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import BodyTableImg from './BodyTableImg'

import { movementList } from '../lib/Movement'

function Movements(props){
    return(
        <section>
            <div className="movements justify-content-between d-flex">
                <h1>Tus Movimientos</h1>
                <Link to="/">Ver todos</Link>
            </div>
            <div className="wrapper-table">
                <Table className="movement-list">
                    <tbody>
                    { movementList.map(movementList => ( 
                        <BodyTableImg
                            img={movementList.img}
                            name={movementList.name}
                            type={movementList.type}
                            since={movementList.since}
                            import={movementList.import}
                        />
                        )
                    )}
                    </tbody>
                </Table>
            </div>
        </section>
    )
}

export default Movements