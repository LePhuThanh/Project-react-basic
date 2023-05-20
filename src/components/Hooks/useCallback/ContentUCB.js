import { React, memo } from "react";

const ContentUCB = ({ onInCrease }) => {
    console.log('>>> check render: ');

    return (
        <div style={{ color: 'white' }}>
            <h2>Re-render ?</h2>

            <button onClick={onInCrease}>Use useCallBack</button>	&nbsp;
        </div>

    )
}

//HOC
//When React.memo wrap
export default memo(ContentUCB);