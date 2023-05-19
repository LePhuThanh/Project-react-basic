import React from "react"


const CustomizeEvent = () => {
    // Fake comments || FakeChatApp
    //Customized event to emit a different event
    //EventEmiter
    const emitComment = (id) => {
        setInterval(() => {
            window.dispatchEvent(
                new CustomEvent(`lesson-${id}`, {
                    detail: `Content comment of lesson-${id}`
                })
            )
        }, 2000)
    }
    emitComment(1)
    emitComment(2)
    emitComment(3)
}


export default CustomizeEvent;