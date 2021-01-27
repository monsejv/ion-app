import React, { useState } from "react";
import CurrencyFormat from 'react-currency-format';
import CircularSlider from '@fseehawer/react-circular-slider';

 
function DonutSlide (props) {
    const [ months, setMonth ] = useState( 60 )

    const monthHandler = value => {
        setMonth(value)
    }

    const negativeMonths =  `-${months} `
    const monthlyPayments = (( 0.166 * 350000 ) / (1 - Math.pow(1.166, negativeMonths))).toFixed(2)

    return(
        <div className="justify-content-center d-flex circle-wrapper">
            <CircularSlider
                hideLabelValue={true}
                knobColor="#bb64c8"
                progressColorFrom="#bb64c8"
                progressColorTo="#783183"
                progressSize={24}
                trackColor="#E6F5F9"
                trackSize={24}
                data={[3, 6, 9,12,18,24,36, 42,60,66,72,78, 84, 90]}
                dataIndex={8}
                onChange={value => { monthHandler( value ) }}
            />
            <div className="circle-data">
                <p>Tu pago mensual</p>
                <CurrencyFormat 
                    value={monthlyPayments} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} 
                    renderText={value => <p className="currency">{value}</p>} />
                <p className="month">a {months} meses</p>
                <p className="taxes">Tasa de interés <br/> 16.6%</p>
            </div>
        </div>
    )

}
 
export default DonutSlide