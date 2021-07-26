import React from 'react'
import Bill from './Bill'
import NumPeople from './NumPeople'
import Tip from './Tip'
import TipSection from './TipSection'

export default function Calculator() {
    return (
        <div className="calculator">
            <Bill />
            <TipSection />    
            <NumPeople />

        </div>
    )
}
