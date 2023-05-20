//Cleanup function

import React, { useEffect, useState } from "react";

const ReSize = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [showSize, setShowSize] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        //Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const handleShowSize = () => {
        setShowSize(!showSize)
    }

    return (
        <div>
            <h3 style={{ color: '#71bdf0' }}>1. Measure The Screen Size</h3>
            <button
                stype={{ padding: 30 }}
                onClick={handleShowSize}>
                Measure
            </button> <br />
            {showSize && <>{width} {height}</>}

        </div >
    )
}
export default ReSize;