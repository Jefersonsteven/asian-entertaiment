import { NextRequest, NextResponse } from "next/server";

const API_TMDB_URL = process.env.API_TMDB_URL;
const API_TMDB_KEY = process.env.API_TMDB_KEY;

export async function POST(request: NextRequest) {
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_TMDB_KEY}`
            }
        };

        const url = new URL(request.url);
        const params = {
            sort: url.searchParams.get('sort'),
            page: url.searchParams.get('page'),
            country: url.searchParams.get('country'),
            type: url.searchParams.get('type'),
            genres: url.searchParams.get('genres'),
            status: url.searchParams.get('status')
        }

        const responsePrincipal = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=${params.country || 'KR'}${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}`, options)
        const dataPrincipal = await responsePrincipal.json();

        if(!params.country) {
            const responseCN = await fetch(`${API_TMDB_URL}/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=${params.country || 'CN'}${params.genres ? `&with_genres=${params.genres}` : ''}`, options)
            const responseTH = await fetch(`${API_TMDB_URL}/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=${params.country || 'TH'}${params.genres ? `&with_genres=${params.genres}` : ''}`, options)
            const dataCN = await responseCN.json();
            const dataTH = await responseTH.json();
            const data = {
                page: dataPrincipal.page,
                results: [...dataPrincipal.results, ...dataCN.results, ...dataTH.results].sort((a, b) => b.popularity - a.popularity),
                total_pages: dataPrincipal.total_pages + dataCN.total_pages + dataTH.total_pages,
                total_results: dataPrincipal.total_results + dataCN.total_results + dataTH.total_results
            };
            
            return NextResponse.json(data, { status: 200 })
        }
        
        return NextResponse.json(dataPrincipal, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: 'Error in the server',
            error
        }, {
            status: 500 
        })
    }
}