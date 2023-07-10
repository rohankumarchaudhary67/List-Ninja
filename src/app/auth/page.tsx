"use client"
import { Button } from "@/components/buttons/Button"
import { Context } from "@/lib/context/Context"
import { useContext } from "react"

export default function Auth() {

    const { themeValue, toggleTheme } = useContext(Context)

    return (
        <>
            <div className={`flex justify-center items-center h-screen w-screen ${themeValue == 'light' ? 'bg-white' : 'bg-black'}`}>
                <Button size="lg" variant="dark" onClick={toggleTheme}>Change Theme</Button>
            </div>
        </>
    )
}