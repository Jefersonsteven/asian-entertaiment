import getIcon from "../lib/getIcon";

export default function Search() {
    return(
        <>
            <label className="flex justify-between rounded-3xl bg-secondary-500 w-full py-2 pr-2 pl-8 border border-primary-500 gap-2">
                <input 
                    className="bg-transparent text-primary-600 font focus-visible:outline-none w-full" 
                    type="text" 
                    placeholder="Buscar ..."
                />
                {getIcon('search')}
            </label>

            <div>
                ...
            </div>
        </>
    )
}