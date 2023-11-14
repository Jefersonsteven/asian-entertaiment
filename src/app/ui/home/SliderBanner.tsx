import { ContentTv } from "@/app/lib/types/tvs"
import Image from "next/image"
import Link from "next/link"

export default async function SliderBanner() {
    const recents = '?limit=8'
    const data = await fetch(`${process.env.NEXT_DEPLOYMENT_URL}/api/content${recents}`)
    const content: ContentTv = await data.json()
    
    return (
        <div>
            {content.results.map((tv) => (
                <div key={tv.id}>
                    <Image src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${tv.backdrop_path}`} alt={tv.name} width={533} height={300}/>
                    <h2>{tv.name}</h2>
                    <p>{tv.overview}</p>
                    <Link className="" href={`/content/${tv.id}`}>Ir</Link>
                </div>
            ))}
        </div>
    )
}