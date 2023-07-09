"use client"
import { FC, ReactElement, useState } from "react";
import { Context } from "./Context";

const ContextWrapper: FC<{ children: ReactElement }> = ({ children }) => {

    const [themeValue, setThemeValue] = useState<'dark' | 'light'>('light')

    const toggleTheme = () => {
        setThemeValue((prev) => (prev === 'light' ? 'dark' : 'light'))
        console.log(themeValue)
    }

    return (
        <Context.Provider
            value={{ themeValue, toggleTheme }}>
            {children}
        </Context.Provider>
    )
}

export default ContextWrapper;