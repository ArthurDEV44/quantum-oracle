/**
 * Ollama Integration for Quantum Oracle
 *
 * Uses Mistral-Trismegistus-7B for generating clear, practical responses
 * guided by quantum energy levels.
 */

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const MODEL_NAME = "arthurjean/mistral-trismegistus:7b-q6_K";

export interface QuantumConstraints {
  energy: number; // 0-1 normalized energy level
  category: EnergyCategory;
  tone: string;
  temperature: number; // LLM temperature derived from quantum variance
  seed: number; // First quantum byte for reproducibility
}

export type EnergyCategory =
  | "very_low"
  | "low"
  | "neutral"
  | "high"
  | "very_high";

export interface OracleResponse {
  text: string;
  model: string;
  constraints: QuantumConstraints;
}

/**
 * Derive quantum constraints from raw quantum numbers
 */
export function deriveQuantumConstraints(numbers: number[]): QuantumConstraints {
  // Calculate normalized energy (0-1)
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  const energy = average / 255;

  // Calculate variance for temperature
  const variance =
    numbers.reduce((acc, n) => acc + Math.pow(n / 255 - energy, 2), 0) /
    numbers.length;
  // Map variance to temperature range (0.3 - 0.9)
  const temperature = 0.3 + variance * 2.4;

  // Determine category and tone
  const { category, tone } = getCategoryAndTone(energy);

  return {
    energy,
    category,
    tone,
    temperature: Math.min(0.9, Math.max(0.3, temperature)),
    seed: numbers[0],
  };
}

function getCategoryAndTone(energy: number): {
  category: EnergyCategory;
  tone: string;
} {
  if (energy < 0.2) {
    return {
      category: "very_low",
      tone: "calm and reflective, suggesting a time for pause and consideration",
    };
  } else if (energy < 0.4) {
    return {
      category: "low",
      tone: "measured and careful, recommending thorough preparation",
    };
  } else if (energy < 0.6) {
    return {
      category: "neutral",
      tone: "balanced and objective, acknowledging multiple valid paths",
    };
  } else if (energy < 0.8) {
    return {
      category: "high",
      tone: "positive and supportive, indicating good conditions for action",
    };
  } else {
    return {
      category: "very_high",
      tone: "confident and direct, suggesting strong alignment with your goals",
    };
  }
}

const SYSTEM_PROMPT = `You are a thoughtful advisor providing clear, practical guidance based on quantum-derived insights.

CRITICAL: Your response must be exactly 1-2 sentences. Maximum 30 words total. No exceptions.

Style: Clear, direct, helpful. Give actionable perspective.
Never: be vague, use metaphors, write poems, or exceed 2 sentences.
Focus on practical advice relevant to the question asked.`;

/**
 * Build the prompt for the oracle
 */
function buildPrompt(question: string, constraints: QuantumConstraints): string {
  const energyPercent = Math.round(constraints.energy * 100);

  return `Energy: ${energyPercent}% (${constraints.tone})
Question: "${question}"`;
}

/**
 * Generate oracle response using Ollama
 */
export async function generateOracleResponse(
  question: string,
  numbers: number[]
): Promise<OracleResponse> {
  const constraints = deriveQuantumConstraints(numbers);
  const prompt = buildPrompt(question, constraints);

  const response = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      system: SYSTEM_PROMPT,
      prompt,
      stream: false,
      options: {
        temperature: constraints.temperature,
        seed: constraints.seed,
        num_predict: 50,
        top_p: 0.85,
        top_k: 30,
        repeat_penalty: 1.2,
        stop: ["USER:", "\n\n", "Question:", "Energy:", "As the", "To address", "In the quantum"],
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Ollama error: ${response.status} - ${error}`);
  }

  const data = await response.json();

  return {
    text: cleanResponse(data.response),
    model: MODEL_NAME,
    constraints,
  };
}

/**
 * Clean up the LLM response
 */
function cleanResponse(text: string): string {
  return text
    .trim()
    .replace(/^(ASSISTANT:|Oracle:|Response:|Answer:)\s*/i, "")
    .replace(/^[\d-]+\s*[Ss]entence[s]?\s*[Rr]esponse:\s*/i, "")
    .replace(/^\*\*?[^*]+\*\*?:\s*/i, "") // Remove **Label**: patterns
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Check if Ollama is available and model is loaded
 */
export async function checkOllamaHealth(): Promise<{
  available: boolean;
  modelLoaded: boolean;
  error?: string;
}> {
  try {
    // Check if Ollama is running
    const tagsResponse = await fetch(`${OLLAMA_URL}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!tagsResponse.ok) {
      return { available: false, modelLoaded: false, error: "Ollama not responding" };
    }

    const tags = await tagsResponse.json();
    const modelLoaded = tags.models?.some(
      (m: { name: string }) => m.name.startsWith(MODEL_NAME)
    );

    return { available: true, modelLoaded };
  } catch (error) {
    return {
      available: false,
      modelLoaded: false,
      error: error instanceof Error ? error.message : "Connection failed",
    };
  }
}
