import getIcon from "@/app/lib/getIcon";
import Search from "../Search";
import Link from "next/link";

export default function HeaderDesktop() {
    return (
        <div className="header hidden lg:flex lg:col-start-2 lg:row-start-1 relative h-max p-8 w-full lg:max-w-screen justify-end items-center gap-4">
            <Search/>
            <Link href="/profile/1" className="bg-gray-700 rounded-full w-max h-max">
                {getIcon('user')}
            </Link>
            <button className="btn-navigation bg-secondary-600 rounded-2xl">
                {getIcon('settings')}
            </button>
        </div>
    )
}