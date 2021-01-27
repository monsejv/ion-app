import React from 'react'

import { Link } from 'react-router-dom'
import { BellFill, StarFill, TagFill } from 'react-bootstrap-icons';
import Balance from './Balance'

function Banner(props){
    return(
        <section>
            <div className="justify-content-around d-flex banner">
                <Link to="/">
                    <StarFill color="#fff" width="20px" />
                    <p>Crear logo</p>
                </Link>
                <Link to="/">
                    <div className="scale-h">
                        <TagFill color="#fff" width="20px" />
                    </div>
                    <p>Pagar servicio</p>
                </Link>
                <Link to="/">
                    <BellFill color="#fff" width="20px" />
                    <p>Suscripción</p>
                </Link>
            </div>
            <Balance
                title="SALDO DISPONIBLE"
                className="available-wrapper" />
        </section>
    )
}

export default Banner