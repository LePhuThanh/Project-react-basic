import { React, useState } from "react";
import Content from './Content'


// When we have component use multiple props in screen, It can re-render affect UI
//The variety of UI
//Set State dad component ? use multiple subcomponent + multiple UI + Complicated => memo 
// Avoid unnescessary re-render

function ExpMemoHOC() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    //should useCallback vs useMemo
    //const handleExReactMemoClick = () => { }

    return (
        <div>
            <h3 style={{ color: '#f4c27c' }}>1. Passing Props Subcomponent</h3>
            <p style={{ color: '#99f57c' }}>Count Memo: {count}</p>
            <p>Count NOT Memo: {count2}</p>
            <Content count={count}
            // onClick={handleExReactMemoClick}
            />

            <button onClick={() => setCount(count + 1)}>Use React Memo</button>	&nbsp;
            <button onClick={() => setCount2(count2 + 1)}>Don't Use React Memo</button>

        </div>
    )
}

export default ExpMemoHOC;