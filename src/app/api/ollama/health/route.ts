import { NextResponse } from "next/server";
import { checkOllamaHealth } from "@/lib/ollama";

export async function GET() {
  const health = await checkOllamaHealth();

  return NextResponse.json(health, {
    status: health.available && health.modelLoaded ? 200 : 503,
  });
}
