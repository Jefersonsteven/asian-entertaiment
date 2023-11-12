import getIcon from "@/app/lib/getIcon";
import Link from "next/link";

export default function NavigationMobile() {
    return (
        <nav className="flex flex-col">
            <header className="flex justify-between bg-secondary-500">
                <Link href="/home">{getIcon('youtube')}</Link>
                <button>{getIcon('settings')}</button>
            </header>
            <footer className="flex w-full justify-around absolute bottom-0 left-0 bg-secondary-500">
                <Link href="/home">{getIcon('home')}</Link>
                <Link href="/explore">{getIcon('tv')}</Link>
                <button>{getIcon('search')}</button>
                <Link href="/profile">{getIcon('user')}</Link>
            </footer>
        </nav>
    )
}