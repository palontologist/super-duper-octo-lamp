import { NextResponse } from "next/server";
import { formSchema } from "@/app/waitlist/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = formSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validatedData.error.errors },
        { status: 400 }
      );
    }

    // Send to external API (using the same endpoint from the waitlist action.ts)
    const response = await fetch(
      "https://app.router.so/api/endpoints/sjiyhc68",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ROUTER_API_KEY}`,
        },
        body: JSON.stringify(validatedData.data),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit to external API" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 