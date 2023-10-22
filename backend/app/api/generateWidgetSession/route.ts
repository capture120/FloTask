import { NextRequest, NextResponse } from "next/server";
import Terra from "terra-api";

const terra = new Terra(process.env.TERRA_DEV_ID ?? "", process.env.TERRA_API_KEY ?? "", process.env.TERRA_WEBHOOK_SECRET ?? "");

export async function GET(request: NextRequest) {
    const resp = await terra.generateWidgetSession({
        referenceID: "HelloHarvard",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:19006",
        authFailureRedirectUrl: "http://localhost:19006"
    })
    console.log(JSON.stringify(resp));
const responseHeaders = {
    "Access-Control-Allow-Origin": "http://localhost:19006", // replace localhost:19006 with your frontend URL
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

    return NextResponse.json({ url: resp.url }, { status: 200, headers: responseHeaders }); 
}