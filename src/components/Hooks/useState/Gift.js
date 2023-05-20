import React, { useState } from "react";

const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard',
    'Mercedes Maybach S-Class',
    'Iphone 14 Pro Max',
    'Technical Book',
    'React courses'
]
const Gift = () => {
    const [gift, setGift] = useState()
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        //console.log(">>> check random gift", gifts[index]);
        setGift(gifts[index]);
    }
    return (
        <div>
            <h3 style={{ color: '#a8ea73' }}>3. Gift App</h3>
            <p><b>{gift || 'No Gift Yet'}</b></p> {/* if there is gift => display 'gift', opposite display 'no gift yet'*/}
            <button onClick={randomGift}>Give gift</button>

        </div>
    )
}



export default Gift;