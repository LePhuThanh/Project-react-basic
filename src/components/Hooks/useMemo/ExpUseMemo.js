import { React, useState, useMemo } from "react";

function expensiveFunction(number) {
    console.log('Start');
    const start = new Date();

    //Wait 3s
    while ((new Date() - start) < 2000); //2s = 2000ms
    console.log('Finish', new Date() - start, 'ms');
    return number * number;
}

const ExpUseMemo = () => {
    const [count, setCount] = useState(0);
    const number = useMemo(() => {
        return expensiveFunction(10);
    }, [])

    return (
        <div>
            <p>Like as useCallBack but return value</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <p>Number: {number}</p>

        </div>
    )
}
export default ExpUseMemo;