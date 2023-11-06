import { createLinks, deleteLinks } from "@/scripts/links"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { contentId } = body

    try {
        const links = await createLinks(contentId)
        return NextResponse.json(links, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const { id } = body

    try {
        const links = await deleteLinks(id)
        return NextResponse.json(links, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}