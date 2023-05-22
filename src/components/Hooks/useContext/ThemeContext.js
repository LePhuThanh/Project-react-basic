import React, { useState, createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const valueTheme = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={valueTheme}>
            {children}
        </ThemeContext.Provider>

    )
}

export { ThemeContext, ThemeProvider }