import { getUsers } from "@/scripts/admin/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await getUsers()
        return NextResponse.json({ users }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error Server', error }, { status: 500 })
    }
}