import React, {useState} from 'react'

export default function Results({bill,percent,numPeople}) {
    const tipPerPerson = (bill * (percent/100))/numPeople;
    const totPerPerson = (bill /numPeople) + tipPerPerson;
    return (
        <div className="results">
            <p>Tip Amount</p>
            <p>{tipPerPerson}</p>
            <p>Total</p>
            <p>{totPerPerson}</p>
        </div>
    )
}
