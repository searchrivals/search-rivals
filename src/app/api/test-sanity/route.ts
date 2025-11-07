import { NextResponse } from "next/server";
import { client } from "@/sanity/sanity.client";

export async function GET() {
  try {
    const data = await client.fetch('*[_type == "homepage"][0]');
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return NextResponse.json({ success: false, error: String(err) });
  }
}
