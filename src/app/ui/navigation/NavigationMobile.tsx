'use client'
import getIcon from "@/app/lib/getIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Search from "../Search";
import clsx from "clsx";

export default function NavigationMobile() {
    const route = usePathname()
    const segment = route.split('/')[1]
    const [openSearch, setOpenSearch] = useState(false)

    function closeSearch() {
        setOpenSearch(false)
    }
    
    return (
        <nav className="flex flex-col lg:hidden">
            <header className="flex justify-between bg-secondary-600 py-3 px-4">
                <Link
                    onClick={closeSearch} href="/">{getIcon('youtube')}</Link>
                <button>{getIcon('settings')}</button>
            </header>

            {openSearch && 
            <div className="flex flex-col gap-4 absolute w-full h-[100%] top-0 left-0 bg-secondary-600 px-4 py-8 z-10">
                <Search/>
            </div>}

            <footer className="flex w-full justify-around fixed bottom-0 left-0 bg-secondary-600 px-4 py-2 z-20">
                <Link
                    onClick={closeSearch} 
                    className={clsx("btn-navigation", {
                        'btn-navigation--active': route === '/'
                    })}  
                    href="/"> {getIcon('home')}
                </Link>

                <Link
                    onClick={closeSearch} 
                    className={clsx("btn-navigation", {
                        'btn-navigation--active': segment === 'explore'
                    })
                    }
                    href="/explore"> {getIcon('tv')}
                </Link>


                <button
                    onClick={() => setOpenSearch(!openSearch)}
                    className={clsx("btn-navigation", {
                        'btn-navigation--active': openSearch
                    })}
                        > {getIcon('search')}
                </button>

                <Link
                    onClick={closeSearch} 
                    className={clsx("btn-navigation", {
                        'btn-navigation--active': segment === 'profile'
                    })}
                    href="/profile/1"> {getIcon('user')}
                </Link>
            </footer>
        </nav>
    )
}