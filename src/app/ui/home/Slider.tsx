'use client'
import { ContentTv } from "@/app/lib/types/tvs"
import React from "react"
import SuspenseClient from "../SuspenseClient"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import SliderItem from "./SliderItem"

export default function Slider() {
    const [content, setContent] = React.useState<ContentTv | null>(null)
    const [slidesPerView, setSlidesPerView] = React.useState<number>(3)
    
    async function fetchContent() {
        const params = '?limit=20'
        const data = await fetch(`${process.env.NEXT_DEPLOYMENT_URL}/api/content${params}`)
        const content: ContentTv = await data.json()
        setContent(content)
    }

    function handleResize() {
        if (window.innerWidth < 640) {
            setSlidesPerView(3)
        } else {
            setSlidesPerView(5)
        }
    }

    React.useEffect(() => {
        handleResize()
        fetchContent()
    }, [])
    
    return (
        <SuspenseClient fallback={<div>Slider Skeleton ...</div>} condition={content ? true : false}>
                <Swiper
                    onResize={handleResize}
                    spaceBetween={30}
                    navigation={true}
                    slidesPerView={slidesPerView}
                    modules={[Pagination, Navigation]}
                    className="slider"
                    
                >
                    {content?.results.map((tv) => (
                            <SwiperSlide key={tv.id}>
                                <SliderItem tv={tv} />
                            </SwiperSlide>
                         ))}
                </Swiper>
        </SuspenseClient>
    )
}