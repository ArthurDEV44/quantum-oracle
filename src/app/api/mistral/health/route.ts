import { NextResponse } from "next/server";
import { checkMistralHealth, isMistralConfigured } from "@/lib/mistral";

export async function GET() {
  if (!isMistralConfigured()) {
    return NextResponse.json(
      { available: false, error: "MISTRAL_API_KEY not configured" },
      { status: 503 }
    );
  }

  const health = await checkMistralHealth();

  return NextResponse.json(health, {
    status: health.available ? 200 : 503,
  });
}
