import { useEffect, useImperativeHandle, useRef } from "react";
import Video from "./Video";

//ref don't have in function component    
//Use Create Button Access Play & Pause Avoid to leak element DOM

const ExpUseImperativeHandle = () => {
    const videoRef = useRef()
    //console.log(videoRef.current) => undefined
    // useEffect(() => {
    //     console.log(videoRef.current)
    // })

    const handlePlay = () => {
        //console.log(videoRef.current.remove()) //Exp serious
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <h3 style={{ color: '#f78888' }}>1. Create Videos' Play & Pause Button But Don't Touch To Elemnet</h3>
            <Video ref={videoRef} /><br />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div >
    )
}

export default ExpUseImperativeHandle;
