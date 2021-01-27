import React from 'react'
import { CreditCard } from 'react-bootstrap-icons'

function BodyTable(props){
    return(
        <tr>
            <td>{ props.icon === 'money' ? <span className="icon money blue w-15"></span> : <CreditCard color="#5acaee" width="15px" /> }</td>
            <td className="text-left">{props.name}</td>
            <td className="text-right"><b>{props.money}</b></td>
        </tr>
    )
}

export default BodyTable