const QRNG_API_URL =
  process.env.QRNG_API_URL || "https://qrng.anu.edu.au/API/jsonI.php";

interface QRNGResponse {
  type: string;
  length: number;
  data: number[];
  success: boolean;
}

export interface QuantumResult {
  numbers: number[];
  timestamp: Date;
  source: "anu";
}

export async function getQuantumRandomNumbers(
  length: number = 1
): Promise<QuantumResult> {
  const url = `${QRNG_API_URL}?length=${length}&type=uint8`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`QRNG API error: ${response.status}`);
  }

  const data: QRNGResponse = await response.json();

  if (!data.success) {
    throw new Error("QRNG API returned unsuccessful response");
  }

  return {
    numbers: data.data,
    timestamp: new Date(),
    source: "anu",
  };
}

export async function getQuantumBit(): Promise<0 | 1> {
  const result = await getQuantumRandomNumbers(1);
  return (result.numbers[0] % 2) as 0 | 1;
}

export async function getQuantumChoice<T>(options: T[]): Promise<T> {
  const result = await getQuantumRandomNumbers(1);
  const index = result.numbers[0] % options.length;
  return options[index];
}

export function interpretQuantumResponse(numbers: number[]): string {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  const normalized = average / 255;

  const responses = getResponsesByEnergy(normalized);
  const index = numbers[0] % responses.length;

  return responses[index];
}

function getResponsesByEnergy(energy: number): string[] {
  if (energy < 0.2) {
    return [
      "L'univers suggère la patience. Ce n'est pas encore le moment.",
      "Les énergies actuelles invitent à la réflexion plutôt qu'à l'action.",
      "Une pause s'impose. Laissez le temps faire son oeuvre.",
    ];
  } else if (energy < 0.4) {
    return [
      "Des obstacles peuvent se présenter. Procédez avec prudence.",
      "Le chemin existe, mais demande de la préparation.",
      "Considérez d'autres perspectives avant d'avancer.",
    ];
  } else if (energy < 0.6) {
    return [
      "L'équilibre est présent. Suivez votre intuition.",
      "Les possibilités sont ouvertes. C'est à vous de choisir.",
      "Ni oui, ni non - explorez les nuances de votre question.",
    ];
  } else if (energy < 0.8) {
    return [
      "Les conditions sont favorables. Avancez avec confiance.",
      "L'énergie soutient votre direction. Continuez.",
      "Des opportunités se présentent. Soyez attentif aux signes.",
    ];
  } else {
    return [
      "L'univers dit oui ! L'alignement est fort.",
      "Foncez ! Les énergies quantiques sont avec vous.",
      "C'est le moment idéal. Saisissez cette synchronicité.",
    ];
  }
}
