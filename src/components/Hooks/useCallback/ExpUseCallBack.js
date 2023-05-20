import React, { useCallback, useState } from "react";
import ContentUCB from "./ContentUCB.js";


// Necessary skills
//1. memo() HOC
//2. useCallBack()
// -Reference types
// -React memo()

// useCallBack to avoid unnecessary re-render if subfunction is passed props which is reference types (function)
// Bc memo HOC compare props via === operator => no compare reference types  
// When use useCallBack in main component then a memo is required in the subcomponent (mandatory)

const ExpUseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(preCount => preCount + 1)
    }, [])

    return (
        <div style={{ color: '#fabcfa', padding: '10px 32px' }}>
            <h3 style={{ color: '#80f7e5' }}>1. Example For To Use UseCallBack</h3>
            <ContentUCB onInCrease={handleIncrease} />
            <h1>{count}</h1>

        </div>
    )
}

export default ExpUseCallBack;