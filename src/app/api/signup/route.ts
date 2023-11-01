import { ErrorPrisma } from "@/app/lib/types/error";
import {createUser, deleteUser} from "@/scripts/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body;
    
    try {
        const user = await createUser(email, password);
        
        return NextResponse.json({
            data: user,
            message: "User created successfully",
        },{
            status: 201,
        });
    } catch (error: ErrorPrisma | any) {
        return NextResponse.json({
            message: "Error creating user",
            error: error.code === "P2002" ? "Email already exists" : error,
        });
    }
};
