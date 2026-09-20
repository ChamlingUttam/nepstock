import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/schema/contact";

const BACKEND_URL =
  "https://stocknep.product-api.hamroyouthit.com/api/v1/public/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields correctly.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    try {
      const backendRes = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(8000),
      });

      if (backendRes.ok) {
        const result = await backendRes.json().catch(() => ({}));
        return NextResponse.json(
          {
            success: true,
            message:
              (result as { message?: string }).message ||
              "Your message has been sent! We'll get back to you soon.",
          },
          { status: 200 }
        );
      }

      console.error(
        `[contact] Backend returned ${backendRes.status}. Accepting submission anyway.`
      );
    } catch (backendErr) {
      console.error("[contact] Could not reach backend:", backendErr);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been received! We'll get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
