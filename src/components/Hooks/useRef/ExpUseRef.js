import React, { useRef, useState, useEffect } from "react";


//Get element in DOM = getElementById // Get coordinates (tọa độ), dimention of element

//let timerId  // Solution
const ExpUseRef = () => {
    const [count, setCount] = useState(60)

    //const ref = useRef(99) // useRef always return object
    //console.log(ref.current)

    const timerId = useRef() // No parameter => underfine (default)
    const prevCount = useRef()

    const h1Ref = useRef()//Exp3:

    useEffect(() => {
        prevCount.current = count
    }, [count])

    //GET
    useEffect(() => {
        console.log(h1Ref.current);
    })
    //Get information coordinates
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect);
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            //ref.current = Math.random()
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start -> ', timerId.current);

    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop -> ', timerId.current);
    }

    //Exp2: Get current value and previous value
    console.log(count, prevCount.current)

    return (
        <div style={{ padding: 20 }}>
            <h3 style={{ color: '#f0e1bd' }}>1. Increase & Decrease Tool</h3>
            <h1 ref={h1Ref} style={{ color: "yellow" }}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default ExpUseRef;