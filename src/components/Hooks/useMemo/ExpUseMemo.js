import React, { useState, useMemo, useRef } from "react";
import Exp2 from "./Exp2";

const ExpUseMemo = () => {

    const [show1, setShow1] = useState(false)

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handldeSubmit = () => {
        setProducts([...products, {
            name,
            //price: Number(price) //C1  convert from string to number
            //price: parseInt(price) //C2
            price: +price // C3 tip
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    //Calculation sum
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log(">>> Recalculation: ")
            return result + prod.price
        }, 0)
        return result
    }, [products])

    return (
        <div styles={{ padding: '10px 32px' }}>
            <h3 style={{ color: '#ebaea0' }}>1. Tool For Calculate Products's Sum  </h3>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            /> <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            /> <br />
            <button onClick={handldeSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products?.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>

            {/* Show Exp2 */}
            <h3 style={{ color: '#ebaea0' }}>2. Example Delay Function To Use UseMemo </h3>
            <button onClick={() => setShow1(!show1)}>Ex2 After 2s will start</button>
            {show1 &&
                <div>
                    <Exp2 />
                </div>}
        </div>
    )


}

export default ExpUseMemo;