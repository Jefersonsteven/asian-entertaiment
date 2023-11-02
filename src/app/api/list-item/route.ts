import { NextRequest, NextResponse } from "next/server";
import { creatItemList } from "@/scripts/listItem";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, image, contentId, listId } = body;

    try {
        const listItem = await creatItemList(name, image, contentId, listId);
        
        return NextResponse.json(listItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}