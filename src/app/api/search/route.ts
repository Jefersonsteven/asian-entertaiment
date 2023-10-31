import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.nextUrl);
    const query = url.searchParams.get('query');

    if (!query) {
        return NextResponse.json({
            message: 'Query not found'
        }, {
            status: 400
        });
    }

    try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_TMDB_KEY}`
          }
        };
        
        const search = await fetch(`${process.env.API_TMDB_URL}/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);
        const data = await search.json();

        const languagues = ['ko','zh','th','ja','vi','tl','tw','id','cn']

        const response = { 
            page: data.page,
            results: data.results.filter((item: any) =>  languagues.includes(item.original_language)),
            total_pages: data.total_pages,
            total_results: data.total_results
        };

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { 
                message: 'Error on search',
                error: error 
            },
            { 
                status: 500 
            }
        )
    }
}