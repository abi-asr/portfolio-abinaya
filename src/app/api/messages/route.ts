import { NextResponse } from "next/server";
import { getAllContactMessages } from "@/lib/db";

export async function GET() {
  try {
    const messages = getAllContactMessages();
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("Error retrieving contact messages:", error);
    return NextResponse.json(
      { success: false, error: "Unable to retrieve messages." },
      { status: 500 }
    );
  }
}
