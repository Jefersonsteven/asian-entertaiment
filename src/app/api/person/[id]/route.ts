import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: any) {
    const id = context.params.id
    
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.API_TMDB_KEY}`,
            }
          }
          
          const person = await fetch(`${process.env.API_TMDB_URL}/person/${id}?language=en-US`, options)
          const personCatalogue = await fetch(`${process.env.API_TMDB_URL}/person/${id}/combined_credits?language=en-US`, options)
          const personDataExternal = await fetch(`${process.env.API_TMDB_URL}/person/${id}/external_ids`, options)

          const response = {
            content: await person.json(),
            catalogue: await personCatalogue.json(),
            external: await personDataExternal.json()
          }

          return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({
            message: 'Error in the server',
            error
        })
    }
}