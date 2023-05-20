import React, { useState } from "react";

const TodoListHook = () => {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {

        const storageJobs = JSON.parse(localStorage.getItem('jobs')) // string => array
        console.log("check storageJobs in local storage: ", storageJobs)
        return (storageJobs ?? [])
    })
    //console.log(">>> check job: ", job);

    const handleSubmitTDL = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            //Save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })

        setJob('')
        //console.log(">>> check job: ", jobs);
    }
    const handleDeleteTDL = () => {
        localStorage.removeItem('jobs')
    }
    return (

        <div style={{ padding: 30 }}>
            <h3 style={{ color: '#a8ea73' }}>6. TodoList Use UseState + Local Storage</h3>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}

            />
            <button onClick={handleSubmitTDL}>Add</button>
            <button onClick={handleDeleteTDL}>Delete</button>

            <ul>
                {console.log(jobs)}
                {jobs?.length > 0 ? jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))
                    :
                    <li>{[]}</li>
                }
            </ul>

        </div >

    )
}
export default TodoListHook;