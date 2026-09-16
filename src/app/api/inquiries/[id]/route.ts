import { NextResponse } from "next/server";
import { updateInquiryStatus, deleteInquiry } from "@/lib/inquiriesStore";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!["PENDING", "CONFIRMED", "ARCHIVED"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 }
      );
    }

    const updated = updateInquiryStatus(id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Inquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, inquiry: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update inquiry" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = deleteInquiry(id);
    if (!success) {
      return NextResponse.json(
        { success: false, error: "Inquiry not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Inquiry deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete inquiry" },
      { status: 500 }
    );
  }
}
