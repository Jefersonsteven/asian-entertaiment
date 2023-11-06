import { createLink, deleteLink } from "@/scripts/link"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { contentId, StreamingProvider, url } = body

    try {
        const link = await createLink(contentId, StreamingProvider, url)
        return NextResponse.json(link, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const { id } = body

    try {
        const link = await deleteLink(id)
        return NextResponse.json(link, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}