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
            <div>1. Measure The Screen Size</div>
            <button
                stype={{ padding: 30 }}
                onClick={handleShowSize}>
                Measure
            </button> <br />
            {showSize && <>{width} {height}</>}

        </div>
    )
}
export default ReSize;