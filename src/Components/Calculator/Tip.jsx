import React from 'react'

export default function Tip({percent}) {
    return (
        <div className="tip-btn">
            <p>{percent}%</p>
        </div>
    )
}
