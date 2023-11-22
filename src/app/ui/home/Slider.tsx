'use client'
import { ContentTv } from "@/app/lib/types/tvs"
import React from "react"
import SuspenseClient from "../SuspenseClient"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import SliderItem from "./SliderItem"

interface Props {
    next?: number
    title: string
    limit: number
}

export default function Slider({next, title, limit} : Props) {
    const [content, setContent] = React.useState<ContentTv | null>(null)
    const [slidesPerView, setSlidesPerView] = React.useState<number>(3)
    
    async function fetchContent() {
        const params = `?limit=${limit}${next ? `&next=${next}` : ''}${title === 'Recientes' ? '&recents=true' : ''}`
        const data = await fetch(`${process.env.NEXT_DEPLOYMENT_URL}/api/content${params}`)
        const content: ContentTv = await data.json()
        setContent(content)
    }

    function handleResize() {
        if (window.innerWidth < 640) {
            setSlidesPerView(3)
        } else if (window.innerWidth < 1024) {
            setSlidesPerView(5)
        } else if (window.innerWidth > 1224) {
            setSlidesPerView(8)
        }
    }

    React.useEffect(() => {
        handleResize()
        fetchContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <SuspenseClient fallback={<div>Slider Skeleton ...</div>} condition={content ? true : false}>
            <div className="px-4 lg:p-0">
                <h2 className="mb-4 text-heading-mobile">
                    {title}
                </h2>
                <Swiper
                    onResize={handleResize}
                    spaceBetween={30}
                    navigation={true}
                    slidesPerView={slidesPerView}
                    modules={[Pagination, Navigation]}
                    className="slider"

                >
                    {content?.results?.map((tv, index) => (
                            <SwiperSlide key={tv.id} className=" min-w-[87px] max-w-[198px]">
                                <div className="relative">
                                    <SliderItem tv={tv} />
                                    {title === 'Top 10' && <h3 className="absolute top-0 left-0 bg-primary-600 p-2 leading-none text-white rounded-md font-bold text-heading">{index + 1}</h3>}
                                </div>
                            </SwiperSlide>
                         ))}
                </Swiper>
            </div>
        </SuspenseClient>
    )
}