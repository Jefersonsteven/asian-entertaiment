'use client'
import { ContentTv } from "@/app/lib/types/tvs"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import SuspenseClient from "../SuspenseClient"
import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderBannerItem from "./SliderBannerItem"

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
                                <SliderBannerItem tv={tv} />
                            </SwiperSlide>
                         ))}
                </Swiper>  
            </div> 
        </SuspenseClient>
    )
}