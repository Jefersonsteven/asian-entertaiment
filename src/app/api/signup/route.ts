import { ErrorPrisma } from "@/app/lib/types/error"
import { validateEmailAndPassword } from "@/app/lib/validate"
import {createUser, deleteUser} from "@/scripts/user"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { email, password } = body

    const validated = validateEmailAndPassword(email, password)

    if(validated !== true) return NextResponse.json({ errors: validated }, { status: 400 })
    
    try {
        const user = await createUser(email, password)
        
        return NextResponse.json({
            data: user,
            message: "User created successfully",
        },{
            status: 201,
        })
    } catch (error: ErrorPrisma | any) {
        return NextResponse.json({
            message: "Error creating user",
            error: error.code === "P2002" ? "Ya hay un usuario registrado con este email" : error,
        }, {status: 400})
    }
}
