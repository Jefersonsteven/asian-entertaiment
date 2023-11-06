import {deleteList, getList} from '@/scripts/list'
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, context: any) {
    const { listId } = context.params

    if(!listId) return NextResponse.json({ message: "List not found" }, { status: 404 })

    try {
        const list = await getList(listId)
        return NextResponse.json(list, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}



export async function DELETE(request: NextRequest, context: any) {
    const { listId } = context.params

    if(!listId) return NextResponse.json({ message: "List not found" }, { status: 404 })

    try {
        const list = await deleteList(listId)
        return NextResponse.json(list, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 })
    }
}