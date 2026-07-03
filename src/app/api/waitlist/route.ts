import { NextRequest, NextResponse } from "next/server";

interface WaitlistEntry {
  email: string;
  city: string;
  role: "customer" | "barber";
  name?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistEntry = await request.json();
    const { email, city, role, name } = body;

    if (!email || !city || !role) {
      return NextResponse.json(
        { success: false, message: "Email, city, and role are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!["customer", "barber"].includes(role)) {
      return NextResponse.json(
        { success: false, message: "Role must be either 'customer' or 'barber'." },
        { status: 400 }
      );
    }

    // TODO: Integrate with your CRM, email service (Resend, Mailchimp, ConvertKit), or database
    // Example: await resend.emails.send({ ... })
    // Example: await db.waitlist.create({ data: { email, city, role, name } })

    console.log("New waitlist entry:", { email, city, role, name, timestamp: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist! We'll be in touch soon.",
        data: { email, city, role },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "BOOKBER Waitlist API — Use POST to join." },
    { status: 200 }
  );
}
