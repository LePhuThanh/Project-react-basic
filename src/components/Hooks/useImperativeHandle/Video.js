import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from '../../../assets/videos/Head-in-the-loud.mp4';

//forwardRef HOC is used passing ref through function component

const Video = (props, ref) => {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
            style={{ padding: 20 }}
            ref={videoRef}
            //ref={ref} // ref={videoRef} 
            src={video1}
            width={300}
        // controls
        />
    )
}

export default forwardRef(Video);