import React from 'react'
import Bill from './Bill'
import NumPeople from './NumPeople'
import TipSection from './TipSection'

export default function Calculator({calc}) {

    return (
        <div className="calculator">
            <Bill />
            <TipSection />    
            <NumPeople />

        </div>
    )
}
