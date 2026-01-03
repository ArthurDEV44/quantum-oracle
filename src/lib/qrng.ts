export interface QuantumResult {
  numbers: number[];
  timestamp: Date;
  source: "anu" | "lfd" | "fallback";
}

// Helper to convert hex string to number array
function hexToNumbers(hex: string): number[] {
  const numbers: number[] = [];
  // Remove any spaces or non-hex characters
  const cleanHex = hex.replace(/[^0-9a-fA-F]/g, "");
  for (let i = 0; i < cleanHex.length; i += 2) {
    numbers.push(parseInt(cleanHex.substring(i, i + 2), 16));
  }
  return numbers;
}

// ANU QRNG API
async function fetchFromANU(length: number): Promise<QuantumResult> {
  const url = `https://qrng.anu.edu.au/API/jsonI.php?length=${length}&type=uint8`;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`ANU API error: ${response.status}`);
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error("ANU API returned unsuccessful response");
  }

  return {
    numbers: data.data,
    timestamp: new Date(),
    source: "anu",
  };
}

// LfD QRNG API (Leibniz Universität Hannover, Germany) - fallback
async function fetchFromLfD(length: number): Promise<QuantumResult> {
  const url = `https://lfdr.de/qrng_api/qrng?length=${length}&format=HEX`;

  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "text/plain" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`LfD QRNG API error: ${response.status}`);
  }

  const hexData = await response.text();
  const numbers = hexToNumbers(hexData);

  if (numbers.length === 0) {
    throw new Error("LfD QRNG returned empty data");
  }

  return {
    numbers,
    timestamp: new Date(),
    source: "lfd",
  };
}

// Crypto fallback (uses system entropy, not truly quantum but cryptographically secure)
function generateCryptoFallback(length: number): QuantumResult {
  const numbers: number[] = [];
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    numbers.push(array[i]);
  }

  return {
    numbers,
    timestamp: new Date(),
    source: "fallback",
  };
}

export async function getQuantumRandomNumbers(
  length: number = 1
): Promise<QuantumResult> {
  // Try ANU first
  try {
    return await fetchFromANU(length);
  } catch (anuError) {
    console.warn("ANU QRNG failed, trying LfD QRNG:", anuError);
  }

  // Try LfD QRNG (Germany) as fallback
  try {
    return await fetchFromLfD(length);
  } catch (lfdError) {
    console.warn("LfD QRNG failed, using crypto fallback:", lfdError);
  }

  // Last resort: crypto fallback
  return generateCryptoFallback(length);
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
      "Les fluctuations quantiques révèlent un moment de gestation cosmique. Comme la graine enfouie dans la terre, votre intention a besoin de silence et d'obscurité pour germer. Cultivez la patience — ce qui semble être de l'immobilité est en réalité une transformation profonde. Méditez sur l'élément Terre.",
      "L'univers vous invite à un voyage intérieur. Les particules ont choisi le repli, non par refus, mais par sagesse. C'est dans le vide apparent que naissent les étoiles. Prenez ce temps pour clarifier vos véritables désirs avant d'agir.",
      "Le champ quantique murmure : « Pas encore. » Ce n'est pas un non, c'est une invitation à approfondir votre question. Qu'est-ce qui, au fond de vous, demande encore à être compris ? La réponse viendra quand vous serez prêt à l'entendre.",
    ];
  } else if (energy < 0.4) {
    return [
      "Les qubits dessinent un chemin sinueux mais praticable. Des défis se profilent — non pas comme des murs, mais comme des portails de transformation. Chaque obstacle cache un enseignement. Demandez-vous : que dois-je apprendre ici avant d'avancer ?",
      "L'énergie quantique suggère la prudence du sage, non la peur du timide. Comme l'eau qui contourne la montagne, cherchez le passage plutôt que la confrontation. Votre intuition connaît déjà le chemin — faites-lui confiance.",
      "Le cosmos vous offre un miroir. Ce que vous percevez comme résistance extérieure reflète peut-être une hésitation intérieure. Prenez le temps d'harmoniser votre intention avec votre action. L'alignement précède la manifestation.",
    ];
  } else if (energy < 0.6) {
    return [
      "Vous vous tenez au carrefour quantique, là où toutes les possibilités coexistent. L'univers ne choisit pas pour vous — il vous honore de votre libre arbitre. Écoutez le murmure de votre cœur : il connaît déjà la direction. Faites confiance à votre première intuition.",
      "L'équilibre parfait des probabilités quantiques reflète votre moment présent. Ni oui ni non, mais « et si ? ». C'est l'invitation à explorer, à expérimenter, à danser avec l'incertitude. La magie réside dans le voyage, pas seulement dans la destination.",
      "Les nombres quantiques révèlent une dualité créatrice. Comme le yin et le yang, deux chemins s'offrent à vous, chacun porteur de ses propres dons. Il n'y a pas de mauvais choix — seulement des expériences différentes. Qu'est-ce qui fait vibrer votre âme ?",
    ];
  } else if (energy < 0.8) {
    return [
      "Le vent cosmique souffle dans votre direction. Les particules s'alignent en votre faveur, créant un courant porteur. C'est le moment d'avancer avec confiance — pas avec précipitation, mais avec la grâce assurée de celui qui sait que l'univers conspire en sa faveur.",
      "L'énergie quantique pulse d'un éclat favorable. Vos intentions trouvent écho dans le tissu même de la réalité. Restez attentif aux synchronicités qui se multiplient autour de vous — elles sont les breadcrumbs de l'univers sur votre chemin.",
      "Les fluctuations du vide quantique portent votre intention comme une vague porte le surfeur. Le momentum est avec vous. Agissez depuis un lieu de confiance intérieure, et observez comment les portes s'ouvrent naturellement sur votre passage.",
    ];
  } else {
    return [
      "Alignement cosmique remarquable ! Les qubits ont dansé dans une harmonie rare, signalant une fenêtre de manifestation puissante. L'univers dit OUI avec toute la force de ses étoiles. C'est le moment d'oser, de créer, de vous élancer. La magie est avec vous.",
      "L'effondrement quantique révèle une convergence extraordinaire d'énergies favorables. Vous êtes en résonance profonde avec le flux universel. Tout ce que vous initiez maintenant porte la bénédiction du cosmos. Faites confiance à cette synchronicité parfaite.",
      "Les nombres quantiques chantent en votre faveur ! Cette lecture est un feu vert cosmique. L'énergie de création est à son apogée autour de vous. Saisissez cet instant — il porte la promesse de l'accomplissement. L'univers vous soutient pleinement.",
    ];
  }
}
