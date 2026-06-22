import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { systemPrompt } from "@/lib/systemPrompt";

export const runtime = "nodejs";

type Role = "user" | "assistant";
interface Msg {
  role: Role;
  content: string;
}

const VALID_ROLES = new Set<string>(["user", "assistant"]);
const MAX_MSG_CHARS = 2_000;
const MAX_BODY_BYTES = 16_384;
const MAX_HISTORY = 10;

export async function POST(request: Request) {
  // 1. Body size guard
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "payload_too_large" }, { status: 413 });
  }

  // 2. Parse and validate payload
  let messages: Msg[];
  try {
    const body = await request.json();
    messages = body.messages;
  } catch {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  for (const m of messages) {
    if (!VALID_ROLES.has(m?.role) || typeof m?.content !== "string") {
      return Response.json({ error: "invalid_payload" }, { status: 400 });
    }
  }

  // Truncate overlong messages (silent — safer than rejecting mid-conversation)
  messages = messages.map((m) => ({
    role: m.role,
    content:
      m.content.length > MAX_MSG_CHARS
        ? m.content.slice(0, MAX_MSG_CHARS)
        : m.content,
  }));

  // 3. Trim to last N messages
  const trimmed = messages.slice(-MAX_HISTORY);

  // First message in the window must be from the user
  if (trimmed[0]?.role !== "user") {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  // 4. Rate limiting
  const upstashConfigured =
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!upstashConfigured) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "FATAL: Upstash env vars missing in production — refusing to serve /api/chat unprotected"
      );
      return Response.json({ error: "rate_limit_unavailable" }, { status: 503 });
    }
    // Development: skip rate limiting and continue
  } else {
    const ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(20, "1 h"),
      prefix: "bv_chat",
    });
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return Response.json({ error: "rate_limit" }, { status: 429 });
    }
  }

  // 5. Stream from Claude
  const client = new Anthropic();

  try {
    const stream = client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: systemPrompt,
      messages: trimmed,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.enqueue(encoder.encode("\n[DONE]"));
        } finally {
          controller.close();
        }
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Claude API error:", err);
    return Response.json({ error: "upstream_error" }, { status: 500 });
  }
}
