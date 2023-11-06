import { NextRequest, NextResponse } from "next/server";
import { creatItemList, deleteItemList } from "@/scripts/listItem";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, image, contentId, listId } = body;

    try {
        const listItem = await creatItemList(listId, contentId, name, image );
        
        return NextResponse.json(listItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const { id } = body;

    try {
        const listItem = await deleteItemList(id);
        
        return NextResponse.json(listItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}