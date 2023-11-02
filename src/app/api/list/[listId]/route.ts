import {getList} from '@/scripts/list';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
    const { listId } = context.params;

    try {
        const list = await getList(listId);
        return NextResponse.json(list, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error Server",error }, { status: 500 });
    }
}