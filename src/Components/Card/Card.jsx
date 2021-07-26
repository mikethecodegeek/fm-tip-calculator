import React, {useState, useEffect} from 'react'
import Calculator from '../Calculator/Calculator'
import Results from '../Results/Results'

export default function Card() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [numPeople, setNumPeople] = useState(0);

    const setValues = (a,b,c) => {
        setBill(100);
        setTip(10);
        setNumPeople(2);
    }

    useEffect(()=>{
        setValues(1,2,3)
    },[])
    
    return (
        <div className="card">
            <Calculator calc={(a,b,c)=>setValues(a,b,c)} />
            <Results bill={bill} percent={tip} numPeople={numPeople} />
        </div>
    )
}
