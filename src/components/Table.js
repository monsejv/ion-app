import React from 'react'

import BodyTable from './BodyTable'
import { Table } from 'react-bootstrap'

function Tables(props){
    return(
        <Table>
            <tbody>
                <BodyTable
                    icon="money"
                    name="Mis logros"
                    money="$27,260.00"
                />
                <BodyTable
                    icon="card"
                    name="Compras con TDC"
                    money="$1,600.00"
                />
            </tbody>
        </Table>
    )
}

export default Tables