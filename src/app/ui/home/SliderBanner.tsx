'use client'
import { ContentTv } from "@/app/lib/types/tvs"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import SuspenseClient from "../SuspenseClient"
import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SliderBanner() {
    const [content, setContent] = React.useState<ContentTv | null>(null)
    
    async function fetchContent() {
        const params = '?limit=8'
        const data = await fetch(`${process.env.NEXT_DEPLOYMENT_URL}/api/content${params}`)
        const content: ContentTv = await data.json()
        setContent(content)
    }

    React.useEffect(() => {
        fetchContent()
    }, [])
    
    
    return (
        <SuspenseClient fallback={<div>Slider Skeleton ...</div>} condition={content ? true : false}>
            <div className="max-w-3xl">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {content?.results.map((tv) => (
                            <SwiperSlide key={tv.id}>
                                <article key={tv.id} className="relative">
                                    <Image
                                        className="absolute z-1 min-h-full object-cover w-full max-w-3xl opacity-20"
                                        src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${tv.backdrop_path}`} 
                                        alt={tv.name} 
                                        width={533} 
                                        height={300}
                                    />
                                    <div className="relative z-2 grid justify-items-center gap-8 py-8 px-10 md:px-20 md:justify-items-start">
                                        <h2 className="w-full text-ellipsis overflow-hidden max-h-10 md:max-h-24 text-primary-600 bg-clip-text shadow-black font-bold text-subheading md:text-heading-mobile">{tv.name}</h2>
                                        <p className="w-full text-ellipsis max-h-16 overflow-hidden">{tv.overview}</p>
                                        <Link className="btn btn-primary w-max" href={`/content/${tv.id}`}>Ir</Link>
                                    </div>
                                </article>
                            </SwiperSlide>
                         ))}
                </Swiper>  
            </div> 
        </SuspenseClient>
    )
}