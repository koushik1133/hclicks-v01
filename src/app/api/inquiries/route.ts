import { NextResponse } from "next/server";
import { getInquiries, addInquiry } from "@/lib/inquiriesStore";

export async function GET() {
  try {
    const inquiries = getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      location,
      region,
      budget,
      guestCount,
      coverage,
      message,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const newInquiry = addInquiry({
      name: name || "Anonymous Client",
      email: email || "",
      phone: phone || "Not Provided",
      eventType: eventType || "Royal Wedding Cinema",
      eventDate: eventDate || "TBD",
      location: location || "USA / Hyderabad",
      region: (region as "USA" | "HYDERABAD") || "USA",
      budget: budget || "$15,000 - $25,000",
      guestCount: guestCount || "150-300",
      coverage: coverage || "8K Cinema & Heirloom Photography",
      message: message || "Direct web concierge reservation",
    });

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      message: "Booking inquiry submitted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create inquiry" },
      { status: 500 }
    );
  }
}
