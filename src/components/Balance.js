import React from 'react'

function Balance(props){
    return(
        <div className={props.className}>
            <div className="sale">
                <p>{props.title}</p>
                <h2 className="number">$1,499,970.00</h2>
            </div>
        </div>
    )
}

export default Balance