// app/api/content/route.ts
import { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";
import { z } from "zod";

// Read‑only via SDK; writes go through Vercel REST API
const writeSchema = z.object({
  heroTitle: z.string().min(1),
  adminToken: z.string().min(8),
});

export async function GET() {
  const [heroTitle, heroSubtitle, aboutText] = await Promise.all([
    get<string>("heroTitle"),
    get<string>("heroSubtitle"),
    get<string>("aboutText"),
  ]);
  return Response.json({ heroTitle, heroSubtitle, aboutText });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = writeSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { heroTitle, adminToken } = parsed.data;

  if (adminToken !== process.env.ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID!;
  const VERCEL_TOKEN = process.env.VERCEL_TOKEN!;

  // Write via Vercel REST API — PATCH items (atomic upsert)
  const res = await fetch(
    `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ operation: "upsert", key: "heroTitle", value: heroTitle }],
      }),
    },
  );

  if (!res.ok) {
    const err = await res.text();
    return new Response(
      JSON.stringify({ error: `Edge Config error: ${err}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return Response.json({ ok: true });
}
