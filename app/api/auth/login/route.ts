import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
    const requent = await req.json();
    return NextResponse.json({status: 200, message: "success", data: requent})
}