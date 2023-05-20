import React, { useLayoutEffect, useState } from "react";

// useEffect
/*
    1. Re-update State
    2. Update? DOM (mutated)
    3. Re-render UI
    4. Call Cleanup if deps have change
    5. Call useEffect callback
 */
// useLayoutEffect       // hardly use
/*
    1. Re-update State
    2. Update DOM (mutated)
    3. Call Cleanup if deps have change (Sync)
    4. Call useEffect callback (Sync)
    5. Re-render UI
*/



const ExpUseLayoutEffect = () => {
    const [count, setCount] = useState(0)

    // Use when update count in handle function + Effect function
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h3 style={{ color: '#f8a6cc' }}>1. Cyclic Count</h3>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}


export default ExpUseLayoutEffect;