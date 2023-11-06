import { deleteUser, getUser, updateUser } from "@/scripts/user"
import { NextRequest, NextResponse } from "next/server"



export async function GET(request: NextRequest) {
    const url = new URL(request.nextUrl)
    const email = url.searchParams.get("email")
    
    if(!email) return
    
    try {
        const user = await getUser(email)
        return NextResponse.json({
            data: user,
            message: "User retrieved successfully",
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error retrieving user",
            error,
        })
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const { email } = body
    try {
        const deleted = await deleteUser(email)
        return NextResponse.json({
            data: deleted,
            message: "User deleted successfully",
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error deleting user",
            error,
        })
    }
}

export async function PATCH(request: NextRequest) {
    const body = await request.json()
    const { email, data } = body

    try {
        const updated = await updateUser(email, data)
        return NextResponse.json({
            data: updated,
            message: "User updated successfully",
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error server, Error updating user",
            error,
        })
    }
}