'use client'
import { Result } from "@/app/lib/types/tvs"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function SliderBannerItem({tv} : {tv: Result}) {

    return (
        <article key={tv.id} className="">
            <Image
                className="absolute z-1 min-h-full object-cover w-full opacity-20"
                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${tv.backdrop_path}`} 
                alt={tv.name} 
                width={1920} 
                height={1080}
            />
            <div className="relative z-2 flex flex-col items-center justify-center gap-8 py-8 px-10 md:px-20 md:items-start md:h-full">
                <h2 className="w-full text-ellipsis overflow-hidden max-h-10 md:max-h-24 text-primary-600 bg-clip-text shadow-black font-bold text-subheading md:text-heading-mobile">{tv.name}</h2>
                <p className="w-full text-ellipsis max-h-16 max-w-2xl overflow-hidden">{tv.overview}</p>
                <Link className="h-max btn btn-primary w-max" href={`/content/${tv.id}`}>Ir</Link>
            </div>
        </article>
    )
}