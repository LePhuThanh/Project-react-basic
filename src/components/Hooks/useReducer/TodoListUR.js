import React, { useReducer, useRef } from "react";

//useReducer
//  1. Init State:
const initState = {
    job: '',
    jobs: []
}
//  2. Actions: 
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload

    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload

    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload

    }
}
//console.log(setJob('Dish Washing'))

//  3. Reducer
const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)

    let newState
    switch (action.type) {

        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break

        case ADD_JOB:
            newState = {
                ...state,
                //job: '', // Delete job UI enter //Don't should
                jobs: [...state.jobs, action.payload]
            }
            break

        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1) // Delete 1 element

            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action !')
    }
    console.log('New state: ', newState)

    return newState
}


const TodoListUR = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state // declare & get job & jobs //destructuring

    const todoRef = useRef()

    //  4. Dispatch
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        todoRef.current.focus()
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h3 style={{ color: '#e0fe76' }}>2. Todo tool use useReducer</h3>
            <input
                ref={todoRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs?.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
                    </li>

                ))}

                {/* <li>Sweeping</li>
                <li>Mopping</li> */}
            </ul>
        </div>
    )
}

export default TodoListUR;