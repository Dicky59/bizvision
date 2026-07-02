import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_192;
const MAX_MESSAGE_CHARS = 5_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  // 1. Body size guard
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "payload_too_large" }, { status: 413 });
  }

  // 2. Parse payload
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.website === "string" ? body.website : "";

  // 3. Honeypot — silent 200, no signal to bots
  if (honeypot) {
    return Response.json({ ok: true });
  }

  // 4. Rate limiting (same pattern as /api/chat)
  const upstashConfigured =
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!upstashConfigured) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "FATAL: Upstash env vars missing in production — refusing to serve /api/contact unprotected"
      );
      return Response.json({ error: "rate_limit_unavailable" }, { status: 503 });
    }
    // Development: skip rate limiting and continue
  } else {
    const ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "bv_contact",
    });
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return Response.json({ error: "rate_limit" }, { status: 429 });
    }
  }

  // 5. Server-side validation
  if (!name) {
    return Response.json({ error: "validation_error", field: "name" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ error: "validation_error", field: "email" }, { status: 400 });
  }
  if (!message) {
    return Response.json({ error: "validation_error", field: "message" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return Response.json({ error: "validation_error", field: "message" }, { status: 400 });
  }

  // 6. Send via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "BizVision Contact <contact@send.bizvision.fi>",
      to: ["info@bizvision.fi"],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><hr/><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "send_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
