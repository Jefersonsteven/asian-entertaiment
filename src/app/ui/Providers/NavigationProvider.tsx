'use client'
import { usePathname } from "next/navigation"
import { createContext } from "react"

const NavigationContext = createContext({})

function NavigationProvider({children}: {children: React.ReactNode}) {
    const route = usePathname()

    return (
        <NavigationContext.Provider value={{route}}>
            {children}
        </NavigationContext.Provider>
    )
}


export { NavigationContext, NavigationProvider }