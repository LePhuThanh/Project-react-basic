import React from "react";
import MemoHOC from './ReactMemo/MemoHOC';
//import ExpUseCallBack from "./useCallback/ExpUseCallBack";
import ExpUseMemo from "./useMemo/ExpUseMemo";

class HookExample extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the HOC React Memo!</h2>
                <MemoHOC />
                {/* <h2>This is the useCallback!</h2> */}
                {/* <ExpUseCallBack /> */}
                <h2>This is the Hook useMemo!</h2>
                <ExpUseMemo />
            </div>
        )
    }

}
export default HookExample;