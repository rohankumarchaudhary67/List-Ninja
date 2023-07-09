import { createContext } from "react";

interface ContextType {
    themeValue: 'light' | 'dark';
    toggleTheme: () => void;
}

export const Context = createContext<ContextType>({
    themeValue: 'light',
    toggleTheme: () => { }
});