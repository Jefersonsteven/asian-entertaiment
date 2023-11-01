import comparePassword from "@/scripts/comparePassword";
import { getUser } from "@/scripts/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body;

    try {
        const user = await getUser(email);

        if(!user) {
            return NextResponse.json('Login failed, user not found', { status: 404 });
        }
        
        if(user && await comparePassword(password, user.password)) {
            return NextResponse.json({
                token: 'token',
                message: 'Login success',
            }, { status: 200 });
        } else {
            return NextResponse.json('Login failed, password incorrect', { status: 401 });
        }
    } catch (error) {
       return NextResponse.json({message: 'Error Server', error}, { status: 500 });
    }
}