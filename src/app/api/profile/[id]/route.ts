import { getUserComplete } from "@/scripts/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
    const { id } = context.params;
    try {
        const user = await getUserComplete(id);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            message: 'Error in the server, user not found',
            error
        })
    }
}