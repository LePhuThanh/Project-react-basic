import { React, memo } from "react";

const Content = ({ count }) => {
    console.log('>>> check render: ', count);
    return (
        <div>
            The number of Loop: {count}
        </div>
    )
}

//HOC
//When React.memo wrap
export default memo(Content);