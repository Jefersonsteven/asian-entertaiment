'use client'
import { Result } from "@/app/lib/types/tvs"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function SliderItem({tv} : {tv: Result}) {

    return (
        <Link href={`/content/${tv.id}`}>
            <article key={tv.id} className="relative flex flex-col gap-2">
                <Image
                    className="min-h-[115px] min-w-[87px] max-w-[198px] max-h-[265px] w-full h-full object-cover rounded-md shadow-black aspect-auto bg-white"
                    src={tv.poster_path
                        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${tv.poster_path}` 
                        : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                    }  
                    alt={tv.name} 
                    width={533} 
                    height={300}
                />

                <p 
                    className="text-ellipsis overflow-hidden h-7 max-w-[198px] text-primary-600 bg-clip-text shadow-black text-subheading-mobile"
                    >
                    {tv.name}
                </p>
            </article>
        </Link>
    )
}