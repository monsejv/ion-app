import React from 'react'

import User from '../media/user.jpg'

function Header(props){
    return(
        <div className="justify-content-center d-flex header">
            <p>Hola José</p>
            <img src={User} className="user-img"></img>
        </div>
    )    
}

export default Header