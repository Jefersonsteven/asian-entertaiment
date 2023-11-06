import { createFavorite, deleteFavorite } from "@/scripts/favorite"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { userId, contentId, name, image } = body
    
    try {
        const favorite = await createFavorite(userId, contentId, name, image)
        if(favorite === "Favorite already created") return NextResponse.json({ message: favorite }, { status: 400 })
        return NextResponse.json(favorite, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "Error Server, unable to create favorite",
            error,
        }, { status: 500 })
    }
}


export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const { id } = body
    
    try {
        const favorite = await deleteFavorite(id)
        return NextResponse.json(favorite)
    } catch (error) {
        return NextResponse.json({
            message: "Error Server, unable to delete favorite",
            error,
        }, { status: 500 })
    }
}