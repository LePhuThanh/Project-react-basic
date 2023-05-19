import React, { useState } from "react";



const Twowaybinding = () => {
    const [name, setName] = useState('')
    //console.log(name)
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        //Call API
        console.log({
            name,
            email
        })
    }
    return (
        <div>
            <input
                value={name} // two way binding
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName('Nguyen Van BBBB')}>Change</button>

            <input
                value={email} // two way binding
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Twowaybinding;