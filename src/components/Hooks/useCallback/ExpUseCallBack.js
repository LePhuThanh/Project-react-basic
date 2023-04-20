// import React, { useState, useCallback } from "react";
// import ContUseCallBack from "./ContUseCallBack";

// const ExpUseCallBack = () => {

//     const [count, setCount] = useState(0)

//     const handleIncrease = () => {
//         setCount(prevCount => prevCount + 1)
//     }

//     return (
//         <>
//             <div>
//                 <p>useCallback is React Hook help me to create a 'memoized callback' and only create 'callback' when dependencies change</p>
//                 <p>Input 2 parameter: function and dependencies</p>
//                 <p>Return memoized callback</p>
//                 <p>If use empty dependencies that it never create new function</p>
//             </div>
//             <div>
//                 <ContUseCallBack onIncrease={handleIncrease} />
//                 <h1>{count}</h1>
//             </div>
//         </>
//     )
// }

// export default ExpUseCallBack;