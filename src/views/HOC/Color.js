import React from "react";


// js random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    //Why props is here?
    //When we return, Let the react understand we write component. Means: we receive input =>must return output

    return (props) => ( //This props recieved from Home component 
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}
export default Color;