import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop();
        const type = url.searchParams.get('type');

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.API_TMDB_KEY}`
            }
        };
        

        const contentDetail = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
        const contentDetailCredits = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`, options)
        const contentDetailVideos = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, options)

        const response = {
            content: await contentDetail.json(),
            credits: await contentDetailCredits.json(),
            videos: await contentDetailVideos.json()
        }

        return NextResponse.json(response);
    } catch (error) {
        return {
            message: 'Error in the server',
            error
        }
    }
}