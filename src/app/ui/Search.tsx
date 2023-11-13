'use client'
import { useState } from "react";
import getIcon from "../lib/getIcon";

export default function Search() {
    const [search, setSearch] = useState('')
    return(
        <>
            <label className="flex justify-between rounded-3xl bg-secondary-500 w-full py-2 pr-2 pl-8 border border-primary-500 gap-2 h-max lg:max-w-md">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent text-primary-600 focus-visible:outline-none w-full lg:w-full" 
                    type="text" 
                    placeholder="Buscar ..."
                />
                {getIcon('search')}
            </label>

            {search !== '' &&
            <div className="lg:absolute lg:top-20 lg:right-36 p-2 lg:rounded-xl lg:bg-secondary-700 w-full lg:max-w-md">
                ...
            </div>}
        </>
    )
}