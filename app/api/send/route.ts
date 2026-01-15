import { Resend } from "resend";

export const runtime = "nodejs";
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
const resend = new Resend(apiKey);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    // Validate
    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    const to = "ermir@lirimi.com";
const fromEmail = "onboarding@resend.dev";

if (!to || !fromEmail) {
  return Response.json(
    { ok: false, error: "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL env vars." },
    { status: 500 }
  );
}
    const subject = `New contact message from ${name}${company ? ` (${company})` : ""}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>New Contact Form Submission</h2>

        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Company:</b> ${escapeHtml(company || "-")}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>

        <hr />

        <p><b>Message:</b></p>
        <div style="white-space: pre-wrap; padding:12px; background:#f6f6f6; border-radius:8px">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: `Website Contact <${fromEmail}>`,
      to,
      replyTo: email, // IMPORTANT: so you can hit reply and respond to the sender
      subject,
      html,
    });

    if ("error" in result && result.error) {
      return Response.json({ ok: false, error: result.error }, { status: 400 });
    }

    return Response.json({ ok: true, id: result.data?.id });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
    return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
  }
}
