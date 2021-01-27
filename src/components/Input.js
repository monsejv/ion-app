import React from 'react'

import { Form } from 'react-bootstrap'

function Input(props){
    return(
        <Form>
        <Form.Group>
            <Form.Control type={props.type} placeholder={props.placeholder} className="input" readOnly>
            </Form.Control>
        </Form.Group>
        </Form>
    )
}

export default Input