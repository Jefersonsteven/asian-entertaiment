import { NextResponse } from "next/server";

export function GET() {
    try {
        return NextResponse.json('wait for it...')
    } catch (error) {
        console.log(error);
    }
}