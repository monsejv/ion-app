import React from 'react'

import { Image } from 'react-bootstrap'

function  BodyTableImg(props) {
    return(
        <tr>
            <td className="img">
                <Image src={props.img} width="44px"></Image>
            </td>
            <td className="text-left">
                <p className="text-bold">{props.name}</p>
                <p>{props.type}</p>
            </td>
            <td className="text-right">
                <p>{props.since}</p>
                <p className="text-bold">{props.import}</p>
            </td>
        </tr>
    )
}

export default BodyTableImg