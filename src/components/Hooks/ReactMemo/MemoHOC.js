import { React, useState } from "react";
import Content from './Content'


function MemoHOC() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    //should useCallback vs useMemo
    //const handleExReactMemoClick = () => { }

    return (
        <div>
            <p>Count Memo: {count}</p>
            <p>Count NOT Memo: {count2}</p>
            <Content count={count}
            // onClick={handleExReactMemoClick}
            />

            <button onClick={() => setCount(count + 1)}>Use React Memo</button>	&nbsp;
            <button onClick={() => setCount2(count2 + 1)}>Don't Use React Memo</button>

        </div>
    )
}

export default MemoHOC;