import { NextRequest, NextResponse } from "next/server";
import { insertContactMessage, getAllContactMessages } from "@/lib/db";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, personaViewed } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ success: false, error: "A valid email address is required." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Subject is required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Message is required." }, { status: 400 });
    }

    const result = insertContactMessage({
      name,
      email,
      subject,
      message,
      personaViewed,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        id: result.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}

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
