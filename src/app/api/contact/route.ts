import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * Right now this validates the input and logs it to the server console so the
 * site works out of the box. To actually deliver emails, plug in a provider:
 *
 *   1. Sign up at https://resend.com (free tier), get an API key.
 *   2. Add it to a `.env.local` file:  RESEND_API_KEY=your_key_here
 *   3. `npm install resend`
 *   4. Uncomment the Resend block below and set the `to` address.
 *
 * Any email provider (SendGrid, Nodemailer + SMTP, etc.) works the same way.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const phone = body.phone?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  // ── Deliver the message ──────────────────────────────────
  // Uncomment after installing `resend` and setting RESEND_API_KEY + a
  // verified sender/recipient. See the note at the top of this file.
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Website <onboarding@resend.dev>",
  //   to: "doctor@example.com", // the doctor's real inbox
  //   replyTo: email,
  //   subject: `New enquiry from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  // });

  // Until a provider is configured, log so nothing is lost during dev.
  console.log("📩 New contact message:", { name, email, phone, message });

  return NextResponse.json({ ok: true });
}
