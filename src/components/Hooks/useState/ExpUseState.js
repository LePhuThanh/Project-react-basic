import React, { useState } from "react";

const orders = [100, 200, 300]
const ExpUseState = () => {
    //EXP1
    const [counter, setCounter] = useState(() => {
        //initial state with callback
        const total = orders.reduce((total, cur) => total + cur)
        console.log(total);
        return total
    })
    //EXP2
    const [info, setInfo] = useState({
        name: 'Phu Thanh',
        age: '24',
        address: 'Ho Chi Minh, VN'
    })

    //EXP1
    const handleIncrease = () => {
        // should useCallBack
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)

    }
    //console.log('re-render')

    //EXP2
    const handleUpdate = () => {

        //
        // setInfo(prev => {

        //     //logic...

        //     return {
        //         ...prev,
        //         bio: 'Handsome ^^!',
        //         marryStatus: 'Yes'
        //     }
        // })
        setInfo({
            ...info,
            bio: 'Handsome ^^!',
            marryStatus: 'Yes'
        })
    }

    return (
        <div>
            {/* <p>useCallback is React Hook help me to create a 'memoized callback' and only create 'callback' when dependencies change</p>
            <p>Input 2 parameter: function and dependencies</p>
            <p>Return memoized callback</p>
            <p>If use empty dependencies that it never create new function</p> */}
            <h3 style={{ color: '#a8ea73' }}>1. Calculate The Number's Sum Of The Array</h3>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}> Increase</button>

            <h3 style={{ color: '#a8ea73' }}>2. Update The String</h3>
            <p>{JSON.stringify(info)}</p>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default ExpUseState;