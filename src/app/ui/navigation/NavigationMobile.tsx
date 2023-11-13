'use client'
import getIcon from "@/app/lib/getIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
            {openSearch && <div className=" absolute w-full h-[100%] top-0 left-0 bg-secondary-600">Search ...</div>}
            <footer className="flex w-full justify-around fixed bottom-0 left-0 bg-secondary-600 px-4 py-2">
                <Link
                    onClick={closeSearch} 
                    className={`btn-navigation ${route === '/' ? 'btn-navigation--active' : ''}`} 
                    href="/"> {getIcon('home')}
                </Link>

                <Link
                    onClick={closeSearch} 
                    className={`btn-navigation ${segment === 'explore' ? 'btn-navigation--active' : ''}`}
                    href="/explore"> {getIcon('tv')}
                </Link>


                <button
                    onClick={() => setOpenSearch(!openSearch)}
                    className={`btn-navigation ${openSearch ? 'btn-navigation--active' : ''}`}> {getIcon('search')}
                </button>

                <Link
                    onClick={closeSearch} 
                    className={`btn-navigation ${segment === 'profile' ? 'btn-navigation--active' : ''}`} 
                    href="/profile/1"> {getIcon('user')}
                </Link>
            </footer>
        </nav>
    )
}