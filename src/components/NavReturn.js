import React from 'react'

import { ArrowLeftShort } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function NavReturn(props){
    return(
        <div className="justify-content-between d-flex pt-4 pb-3">
            <Link to="/">
                <ArrowLeftShort width="24px" height="24px" color="#333" />
            </Link>
            <Link to="/" className="color-blue">Cancelar</Link>
        </div>
    )
}

export default NavReturn