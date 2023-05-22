import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ParagraphUT = () => {

    //Get ThemeContext to use
    const context = useContext(ThemeContext)
    //console.log('>>> theme: ', theme)
    return (
        <div>
            <p className={context.theme}>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.
            </p>
        </div>
    )
}

export default ParagraphUT;