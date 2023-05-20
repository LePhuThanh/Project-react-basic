//Cleanup function
import React, { useEffect, useState } from "react";

const CountDown = () => {
    const [showCountdown, setShowCountdown] = useState(false)
    const [countdown, setCountdown] = useState(180)


    const handleShowCountdown = () => {
        setShowCountdown(!showCountdown)
    }
    //C1
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
            //console.log(">>> Countdow ")

            //setCountdown(countdown - 1)
            //console.log('>>> Countdow', countdown) //Closure
        }, 1000)

        return () => clearInterval(timerId)
    }, [])
    //C2
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown => countdown - 1)
    //         //setCountdown(countdown - 1)
    //         //console.log('>>> Countdow', countdown) //Closure
    //     }, 1000)
    // }, [countdown])


    return (
        <div>
            <h3 style={{ color: '#71bdf0' }}>3. Countdown</h3>
            <button
                stype={{ margin: 30 }}
                onClick={handleShowCountdown}>
                Countdown
            </button> <br />
            {showCountdown && <>{countdown}</>}
        </div>
    )


}

export default CountDown;