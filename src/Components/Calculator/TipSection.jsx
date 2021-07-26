import React from 'react'
import Tip from './Tip'
export default function TipSection() {
    return (
        <div>
            <p>Select Tip %</p>
             <div className="get-tip">
                <Tip percent={5} />
                <Tip percent={10} />
                <Tip percent={15} />
                <Tip percent={25} />
                <Tip percent={50} />
            </div>
            
        </div>
    )
}
