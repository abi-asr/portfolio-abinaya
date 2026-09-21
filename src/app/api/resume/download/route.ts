import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const candidatePaths = [
      path.resolve(process.cwd(), "public", "resume.pdf"),
      path.resolve(process.cwd(), "uploads", "ABINAYA_RAJANGAM_Resume_FE_2026.pdf"),
    ];

    let filePath: string | null = null;
    for (const p of candidatePaths) {
      if (fs.existsSync(p)) {
        filePath = p;
        break;
      }
    }

    if (!filePath) {
      return NextResponse.json({ success: false, error: "Resume file not found." }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Abinaya_Rajangam_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving resume download:", error);
    return NextResponse.json(
      { success: false, error: "Failed to download resume." },
      { status: 500 }
    );
  }
}
