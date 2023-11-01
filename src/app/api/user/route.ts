import { deleteUser } from "@/scripts/user";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const { email } = body;
    try {
        const deleted = await deleteUser(email);
        return NextResponse.json({
            data: deleted,
            message: "User deleted successfully",
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error deleting user",
            error,
        });
    }
}