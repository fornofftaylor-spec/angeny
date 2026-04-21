import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, address, serviceType, description } = body;

    const response = await resend.emails.send({
      from: "Angeny Solutions <no-reply@angenysolutions.com>",
      to: "mason@angenysolutions.com",
      subject: "New Quote Request — Angeny Solutions",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Address:</strong> ${address || "N/A"}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
