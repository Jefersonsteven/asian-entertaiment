import { getLinks } from "@/scripts/links"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: any) {
    const id = context.params.id

    try {
        const links = await getLinks(id)
        return NextResponse.json(links, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}