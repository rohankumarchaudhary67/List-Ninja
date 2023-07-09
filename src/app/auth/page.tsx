"use client"
import { Context } from "@/lib/context/Context"
import { useContext } from "react"

export default function Auth() {

    const { themeValue, toggleTheme } = useContext(Context)

    return (
        <>
            <div className={`flex justify-center items-center h-screen w-screen ${themeValue == 'light' ? 'bg-white' : 'bg-black'}`}>
                <button onClick={toggleTheme} className={`${themeValue == 'light' ? 'text-white bg-black' : 'text-black bg-white'} border-4 px-4 py-2`}>Change Theme</button>
            </div>
        </>
    )
}