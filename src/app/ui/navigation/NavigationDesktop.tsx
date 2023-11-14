'use client'
import getIcon from "@/app/lib/getIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import clsx from "clsx";

export default function NavigationDesktop() {
    const route = usePathname()
    const segment = route.split('/')[1]
    const [openMenu, setOpenMenu] = useState(false)
    
    return (
        <aside className="hidden lg:flex lg:flex-col p-4 w-max">
            <nav className="flex flex-col py-3">
                <button
                    className="p-3"
                    onClick={() => setOpenMenu(prev => !prev)}>
                    {getIcon('menu')}
                </button>
                
                <ul className="flex flex-col gap-2 bg-secondary-600 rounded-2xl p-2">
                    <li className={clsx("btn-navigation", {
                        'btn-navigation--active': route === '/'
                    })}>
                        <Link className="flex gap-4 font-bold items-center h-9" href="/">
                            {getIcon('home')}
                            {openMenu && <h3>Inicio</h3>}
                        </Link>
                    </li>
                    <li className={clsx("btn-navigation flex gap-4 items-center", {
                        'btn-navigation--active': segment === 'explore'
                    })}>
                        <Link className="flex gap-4 font-bold items-center h-9" href="/explore">
                            {getIcon('tv')}
                            {openMenu && <h3>Explorar</h3>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}