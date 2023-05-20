import React, { useReducer } from "react";


//useState & useReducer are used the same

/*1. useState are used for simple key (simple state) 
    exp: Primitive Data Types => string, number , boolean or object (1 level) or the number state in component is small
2. useReducer will be suiltable for complicated key
    exp: Not primitive data types (multiple level) => array(multiple level), object(multiple level) or multiple state
*/

//==========================================================
//useState
//  1. Init State: 0
//  2. Actions: Up (state + 1) / Down (State - 1)

//useReducer
//  1. Init State: 0
//  2. Actions: Up (state + 1) / Down (State - 1)
//  3. Reducer
//  4. Dispatch

//Init state
const initState = 0

//Actions
const UP_ACTIONS = 'up'
const DOWN_ACTIONS = 'down'

//Reducer
const reducer = (state, action) => {
    //console.log('reducer running...')
    switch (action) {
        case UP_ACTIONS:
            return state + 1
        case DOWN_ACTIONS:
            return state - 1
        default:
            throw new Error("Invalid action")
    }
}

const ExpUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState) // Maybe set 3 parameter


    return (
        <div style={{ padding: '0 20px' }}>
            <h3 style={{ color: '#e0fe76' }}>1. Up down the number tool</h3>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTIONS)}
            >
                Down
            </button><br />
            <button
                onClick={() => dispatch(UP_ACTIONS)}
            >
                Up
            </button>


        </div>
    )
}



export default ExpUseReducer;