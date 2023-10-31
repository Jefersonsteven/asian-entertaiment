import { NextRequest, NextResponse } from "next/server";

const API_TMDB_URL = process.env.API_TMDB_URL;
const API_TMDB_KEY = process.env.API_TMDB_KEY;

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const params = {
        sort: url.searchParams.get('sort'),
        page: url.searchParams.get('page'),
        country: url.searchParams.get('country'),
        type: url.searchParams.get('type'),
        genres: url.searchParams.get('genres'),
        status: url.searchParams.get('status'),
        limit: url.searchParams.get('limit'),
        next: url.searchParams.get('next')
    };

    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${API_TMDB_KEY}`
            }
        };

        let date: string | Date = new Date();
        if(params.next) {
            date = new Date();
            date.setDate(date.getDate() + Number(params.next))
            date = date.toISOString().split('T')[0];
        }
        console.log(date);

        const responsePrincipal = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=${params.country || 'KR'}${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
        const dataPrincipal = await responsePrincipal.json();
        
        if(!params.country) {
            const responseCN = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=CN${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseTH = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=TH${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseJP = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=JP${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseVN = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=VN${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responsePH = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=PH${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseTW = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=TW${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseID = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=ID${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const responseHK = await fetch(`${API_TMDB_URL}/discover/${params.type || 'tv'}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${params.page || 1}&sort_by=${params.sort || 'popularity.desc'}&with_origin_country=HK${params.genres ? `&with_genres=${params.genres}` : ''}${params.status ? `&with_status${params.status}` : ''}${params.next ? `&first_air_date.gte=${date}` : ''}`, options)
            const dataCN = await responseCN.json();
            const dataTH = await responseTH.json();
            const dataJP = await responseJP.json();
            const dataVN = await responseVN.json();
            const dataPH = await responsePH.json();
            const dataTW = await responseTW.json();
            const dataID = await responseID.json();
            const dataHK = await responseHK.json();

            const data = {
                page: dataPrincipal.page,
                results: [...dataPrincipal.results, ...dataCN.results, ...dataTH.results, ...dataJP.results, ...dataVN.results, ...dataPH.results, ...dataTW.results, ...dataID.results, ...dataHK.results].sort((a, b) => b.popularity - a.popularity).slice(0, Number(params.limit) || 180),
                total_pages: dataPrincipal.total_pages + dataCN.total_pages + dataTH.total_pages + dataJP.total_pages + dataVN.total_pages + dataPH.total_pages + dataTW.total_pages + dataID.total_pages + dataHK.total_pages,
                total_results: dataPrincipal.total_results + dataCN.total_results + dataTH.total_results + dataJP.total_results + dataVN.total_results + dataPH.total_results + dataTW.total_results + dataID.total_results + dataHK.total_results
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