import { verifyTokenSession } from "@/scripts/tokenSession"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { token } = body

    try {
        const decoded = verifyTokenSession(token)

        return NextResponse.json({
            data: decoded,
            message: "Token verified successfully",
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error verifying token",
            error,
        })
    }
}