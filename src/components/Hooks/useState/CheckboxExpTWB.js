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

const CheckboxExpTWB = () => {
    const [checked, setChecked] = useState([])

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            // if (isChecked) {
            //     return checked.filter(item => item !== id)
            // } else {
            //     return [...prev, id]
            // }
            return (
                isChecked ?
                    //Uncheck
                    checked.filter(item => item !== id)
                    :
                    [...prev, id]
            )
        })
    }

    const handleSubmitCheckbox = () => {
        // Call API
        console.log({ ids: checked });
    }

    return (
        <div>
            {courses?.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked.includes(course.id)} // includes return True if array have this course.id
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}

                </div>
            ))}
            <button onClick={handleSubmitCheckbox}>Register</button>
        </div>
    )
}


export default CheckboxExpTWB;