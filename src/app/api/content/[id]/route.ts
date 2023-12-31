import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: any) {
    const url = new URL(request.url)
    const id = context.params.id
    const type = url.searchParams.get('type')

    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.API_TMDB_KEY}`
            }
        }
        
        const contentDetail = await fetch(`${process.env.API_TMDB_URL}/${type}/${id}?language=en-US`, options)
        const contentDetailCredits = await fetch(`${process.env.API_TMDB_URL}/${type}/${id}/credits?language=en-US`, options)
        const contentDetailVideos = await fetch(`${process.env.API_TMDB_URL}/${type}/${id}/videos?language=en-US`, options)
        const contentRecommendations = await fetch(`${process.env.API_TMDB_URL}/${type}/${id}/recommendations?language=en-US&page=1`, options)

        const response = {
            content: await contentDetail.json(),
            credits: await contentDetailCredits.json(),
            videos: await contentDetailVideos.json(),
            recommendations: await contentRecommendations.json()
        }

        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({
            message: 'Error in the server',
            error
        })
    }
}