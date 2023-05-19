import React, { useState } from "react";
//---------useState-----------------
import ExpUseState from "./useState/ExpUseState";
import Gift from "./useState/Gift";
import Twowaybinding from "./useState/Twowaybinding";
import RadioExpTWB from "./useState/RadioExpTWB";
import CheckboxExpTWB from "./useState/CheckboxExpTWB";
import TodoListHook from "./useState/TodoListHook";
//---------useEffect-----------------
import ExpUseEffect from "./useEffect/ExpUseEffect";
import ReSize from "./useEffect/ReSize";
import CountDown from "./useEffect/CountDown";
import PreviewAvt from "./useEffect/PreviewAvt";
import FakeChatApp from "./useEffect/FakeChatApp/FakeChatApp";
//---------useLayoutEffect-----------------
import ExpUseLayoutEffect from "./useLayoutEffect/ExpUseLayoutEffect";

import ExpUseRef from "./useRef/ExpUseRef";
import ExpMemoHOC from './ReactMemo/ExpMemoHOC';
import ExpUseMemo from "./useMemo/ExpUseMemo";
import ExpUseCallBack from "./useCallBack/ExpUseCallBack";
import './../../styles/Hook/HookExample.scss'

const HookExample = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)



    return (
        //Write scss following BEM standard
        <div className="container">
            <button className="container__btn btn--useState"
                onClick={() => { setShow1(!show1) }}>
                I. Go to the useState
            </button>
            {show1 &&
                <>
                    <ExpUseState />
                    <Gift />
                    <Twowaybinding />
                    <RadioExpTWB />
                    <CheckboxExpTWB />
                    <TodoListHook />
                </>}
            <br />

            {/* //----------------------------------------- */}
            <button className="container__btn btn--useEffect"
                onClick={() => { setShow2(!show2) }}>
                II. Go to the useEffect
            </button>
            {show2 &&
                <>
                    <ReSize /><br />
                    <ExpUseEffect /> <br />
                    <CountDown /><br />
                    <PreviewAvt /><br />
                    <FakeChatApp />
                </>}<br />

            {/* //----------------------------------------- */}
            <button className="container__btn btn--useLayoutEffect"
                onClick={() => { setShow3(!show3) }}>
                III. Go to the useLayoutEffect!
            </button>
            {show3 && <>
                <ExpUseLayoutEffect />
            </>}
            <br />
            {/* //----------------------------------------- */}
            <button className="container__btn btn--useRef"
                onClick={() => { setShow4(!show4) }}>
                IV. Go to the useRef!
            </button>
            {show4 && <>
                <ExpUseRef />
            </>}
            <br />

            {/* //----------------------------------------- */}
            <button className="container__btn btn--HOCMemo"
                onClick={() => { setShow5(!show5) }}>
                V. Go to the HOC React Memo!
            </button>
            {show5 && <>
                <ExpMemoHOC />
            </>}
            <br />

            {/* //----------------------------------------- */}
            <button className="container__btn btn--useMemo " /*btn--disabled*/
                onClick={() => { setShow6(!show6) }}>
                VI. Go to the Hook useMemo!
            </button>
            {show6 && <>
                <ExpUseMemo />
            </>}
            <br />

            {/* //----------------------------------------- */}
            <button className="container__btn btn--useCallback"
                onClick={() => { setShow7(!show7) }}>
                VII. Go to the useCallback!
            </button>
            {show7 && <>
                <ExpUseCallBack />
            </>}
            <br />

        </div>
    )
}

export default HookExample;