import { createList, deleteList, getList } from "@/scripts/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, userId } = body;

    try {
        const list = await createList(name, userId);
        return NextResponse.json(list, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    const body = await request.json();
    const { listId } = body;

    try {
        const list = await getList(listId);
        return NextResponse.json(list, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const { listId } = body;

    try {
        const list = await deleteList(listId);
        return NextResponse.json(list, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}