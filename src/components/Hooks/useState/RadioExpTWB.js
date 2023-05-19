import React, { useState } from "react";


const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

const RadioExpTWB = () => {
    const [checked, setChecked] = useState(1)
    console.log({ id: checked });

    const handleSubmitRadio = () => {

    }

    return (
        <div>
            {courses?.map(course => (
                <div key={course.id}>
                    <input
                        type='radio'
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}

                </div>
            ))}
            <button onClick={handleSubmitRadio}>Register</button>
        </div>
    )
}


export default RadioExpTWB;