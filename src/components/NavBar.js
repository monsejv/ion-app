import React from 'react'

import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function NavBar(props){

    return(
        <Nav 
            fill
            className="justify-content-center" 
            activeKey="/home">
            <Nav.Item>
                <Link 
                    to="/"
                    className="icon home">
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link 
                    to="/"
                    className="icon money">
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link 
                    to="/detail"
                    className="icon credit-card">
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link 
                    to="/"
                    className="icon star">
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link 
                    className="icon bell">
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar