import { useContext } from "react";
import ContentUT from "./ContentUT";
import { ThemeContext } from './ThemeContext';

import '../../../styles/Hook/ParagraphUT.scss'

// Context
// CompA => CompB => CompC // useContext passing direct A=>C not through B (props)
// Passing data don't need use props

//Theme: Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer

const ExpUseContext = () => {
    //Get ThemeContext to use 
    const context = useContext(ThemeContext) //context is object have {theme,toggleTheme}

    return (
        <div>
            <h3 style={{ color: '#bcadf7' }}>1. Passing Data Through UseContext</h3>
            <ContentUT />
            <button onClick={context.toggleTheme}>Toggle theme</button>
        </div>
    )
}

export default ExpUseContext;