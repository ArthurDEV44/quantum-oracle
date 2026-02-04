/**
 * Sacred Geometry — Constants and Calculations
 *
 * The fundamental mathematical constants that encode the geometric
 * principles of the cosmos: Phi (Golden Ratio), Fibonacci sequence,
 * Pi, square root of 2, and the Silver Ratio.
 *
 * Each constant carries both mathematical significance and symbolic
 * meaning within the esoteric tradition.
 */

// =============================================================================
// CONSTANTS
// =============================================================================

export const PHI = 1.618033988749895;
export const PI = 3.141592653589793;
export const SQRT2 = 1.4142135623730951;
export const SILVER_RATIO = 2.414213562373095; // 1 + sqrt(2)

export const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233] as const;

// =============================================================================
// SACRED CONSTANT DESCRIPTIONS
// =============================================================================

export interface SacredConstant {
  name: string;
  symbol: string;
  value: number;
  mathematicalSignificance: string;
  symbolicSignificance: string;
  occurrencesInNature: readonly string[];
}

export const SACRED_CONSTANTS = {
  phi: {
    name: "Phi — Golden Ratio",
    symbol: "\u03C6",
    value: PHI,
    mathematicalSignificance:
      "Le nombre d'or (1,618033...) est la solution positive de l'equation x\u00B2 = x + 1. C'est le seul nombre dont le carre est egal a lui-meme plus un, et dont l'inverse est egal a lui-meme moins un (\u03C6\u207B\u00B9 = \u03C6 - 1 = 0,618...). Il est le rapport limite des termes consecutifs de la suite de Fibonacci. Phi est un nombre irrationnel algebrique, la racine la plus « noble » car elle est le nombre le plus lentement approchable par des fractions — ce qui en fait le nombre le plus irrationnel au sens de la theorie de l'approximation diophantienne (theoreme de Hurwitz).",
    symbolicSignificance:
      "Dans la tradition hermetique, Phi represente la proportion divine — le rapport que l'architecte cosmique utilise pour structurer la creation. Le pentagramme, symbole sacre des pythagoriciens, est entierement determine par Phi : chaque diagonale est en rapport Phi avec le cote. Luca Pacioli, moine franciscain et ami de Leonard de Vinci, nomma ce rapport « Divine Proportion » dans son traite de 1509, illustre par de Vinci lui-meme. Le temple de Parthenon, les pyramides d'Egypte et les cathedrales gothiques incorporent ce rapport dans leurs proportions. Dans la Kabbale, Phi apparait dans les proportions de l'Arbre de Vie entre les piliers.",
    occurrencesInNature: [
      "Spirale de Fibonacci dans les coquillages (Nautilus)",
      "Arrangement des graines dans les tournesols (spirales 34/55)",
      "Disposition des feuilles sur les tiges (phyllotaxie)",
      "Proportions du corps humain (nombril/taille totale)",
      "Spiral des galaxies (bras logarithmiques)",
      "Structure de l'ADN (rapport largeur/pas de l'helice)",
    ],
  },
  pi: {
    name: "Pi",
    symbol: "\u03C0",
    value: PI,
    mathematicalSignificance:
      "Pi (3,14159...) est le rapport de la circonference d'un cercle a son diametre — une constante universelle independante de la taille du cercle. C'est un nombre irrationnel transcendant (Lindemann, 1882), ce qui demontre l'impossibilite de la quadrature du cercle. Pi apparait dans la formule d'Euler (e^{i\u03C0} + 1 = 0), qui relie les cinq constantes fondamentales des mathematiques. Pi intervient dans la distribution normale de Gauss, les series de Fourier, la mecanique quantique (equation de Schrodinger), et la relativite generale (equations de champ d'Einstein).",
    symbolicSignificance:
      "Pi est le nombre du cercle et donc de la totalite, de l'infini et de l'eternite. Le cercle, n'ayant ni debut ni fin, symbolise le divin dans presque toutes les traditions. La quadrature du cercle — transformer un cercle en un carre de meme aire — fut la grande quete des geometres anciens et devint une metaphore alchimique : reconcilier le celeste (cercle) et le terrestre (carre), l'esprit et la matiere. Les mandalas, les rosaces des cathedrales et les diagrammes cosmiques de toutes les traditions utilisent le cercle comme forme fondamentale. Pi, en etant transcendant, signifie que cette reconciliation ne peut jamais etre achevee par des moyens finis — la quete est infinie.",
    occurrencesInNature: [
      "Tout phenomene circulaire ou periodique",
      "Ondes electromagnetiques et acoustiques",
      "Orbites planetaires (kepler) et precession",
      "Distribution de Buffon (aiguilles et Pi)",
      "Fonction d'onde quantique (normalisation)",
    ],
  },
  sqrt2: {
    name: "Square Root of 2",
    symbol: "\u221A2",
    value: SQRT2,
    mathematicalSignificance:
      "La racine carree de 2 (1,41421...) est la diagonale d'un carre de cote 1 — le premier nombre dont l'irrationalite fut demontree (attribuee a Hippase de Metaponte, Ve s. av. J.-C.). Cette decouverte provoqua une crise dans la philosophie pythagoricienne, qui postulait que tout pouvait etre exprime comme rapport d'entiers. \u221A2 est un nombre irrationnel algebrique (racine de x\u00B2 - 2 = 0). C'est aussi le rapport de frequences d'un demi-ton dans le temperament egal (2^{1/12}), la base du systeme musical occidental.",
    symbolicSignificance:
      "La racine de 2 represente la transgression des limites rationnelles — le moment ou la geometrie depasse l'arithmetique. Dans la tradition hermetique, c'est le passage du carre (matiere, stabilite, quatre elements) a sa diagonale, qui ouvre la porte a une dimension superieure. La decouverte de l'irrationalite de \u221A2 est un acte initiatique : la revelation que la realite depasse les categories de la pensee ordinaire. L'Octave (rapport 2:1) et le Triton (\u221A2:1) forment l'axe de symetrie du cercle des quintes, reliant \u221A2 a l'harmonie musicale. Dans la franc-maconnerie, le rapport du carre et de sa diagonale symbolise l'elevation du compagnon au grade de maitre.",
    occurrencesInNature: [
      "Diagonale du carre (geometrie fondamentale)",
      "Format de papier A (ratio \u221A2:1, norme ISO 216)",
      "Cristallographie (maille carree a face centree)",
      "Temperament egal en musique (intervalle de triton)",
    ],
  },
  silverRatio: {
    name: "Silver Ratio",
    symbol: "\u03B4\u209B",
    value: SILVER_RATIO,
    mathematicalSignificance:
      "Le nombre d'argent (2,41421... = 1 + \u221A2) est la solution positive de l'equation x = 2 + 1/x. Il est au nombre d'or ce que l'octogone est au pentagone : Phi genere le pentagone regulier et la spirale logarithmique d'or, tandis que le nombre d'argent genere l'octogone regulier et sa propre spirale. Il est la valeur propre dominante de la matrice de Pell et apparait dans les fractions continues [2; 2, 2, 2, ...] — la fraction continue la plus simple apres celle de Phi [1; 1, 1, 1, ...]. Il est le deuxieme nombre metallique apres Phi.",
    symbolicSignificance:
      "Le nombre d'argent, associe a l'octogone, est lie a la geometrie sacree de la tradition islamique — le motif octogonal est omnipresent dans l'art et l'architecture islamiques (Dome du Rocher, Alhambra). L'octogone est la forme de transition entre le carre (terrestre) et le cercle (celeste), ce qui en fait un symbole de passage et de bapteme dans la tradition chretienne (baptisteres octogonaux). En numerologie sacree, 8 est le nombre de la resurrection et du renouveau (l'ogdoade gnostique). Le nombre d'argent est moins connu que Phi mais tout aussi fondamental dans la geometrie des pavages (pavage de Ammann-Beenker, quasi-cristaux octogonaux).",
    occurrencesInNature: [
      "Octogone regulier (architecture islamique)",
      "Quasi-cristaux a symetrie octogonale (Shechtman, 1982)",
      "Pavages de Ammann-Beenker (analogues octogonaux des pavages de Penrose)",
      "Nombre de Pell et approximations de \u221A2",
    ],
  },
  fibonacci: {
    name: "Fibonacci Sequence",
    symbol: "F\u2099",
    value: 0,
    mathematicalSignificance:
      "La suite de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...) est definie par la recurrence F(n) = F(n-1) + F(n-2). Le rapport de deux termes consecutifs converge vers Phi. Elle apparait dans les problemes de denombrement (combinaisons sans elements adjacents), la theorie des nombres (identites de Fibonacci-Lucas), et la theorie de la complexite (algorithme d'Euclide). Chaque entier positif peut etre ecrit comme somme de termes de Fibonacci non consecutifs (theoreme de Zeckendorf).",
    symbolicSignificance:
      "Introduite en Occident par Leonardo de Pise (Fibonacci) dans son Liber Abaci (1202), mais connue des mathematiciens indiens depuis le VIe siecle (Virahanka, Hemachandra). La suite illustre le principe hermetique de Correspondance : les memes proportions se retrouvent des spirales galactiques aux coquillages, des capitules de tournesol aux pommes de pin. Chaque terme est la somme des deux precedents — une image de la creation par union des complementaires (Principe de Genre). La suite commence par 1, 1 — l'unite se reflechit elle-meme avant de commencer a generer la multiplicite, echo du Premier Principe (Mentalisme) : l'Un se contemple et engendre le Tout.",
    occurrencesInNature: [
      "Phyllotaxie (disposition des feuilles : 2/5, 3/8, 5/13...)",
      "Spirales des tournesols (21/34 ou 34/55 spirales)",
      "Pommes de pin (8/13 spirales)",
      "Coquille du nautile (spirale logarithmique approximative)",
      "Ramification des arbres et des bronches pulmonaires",
      "Reproduction des abeilles (arbre genealogique des males)",
    ],
  },
} as const;

// =============================================================================
// TYPES & CALCULATIONS
// =============================================================================

export interface SacredGeometryReading {
  phiResonance: number;
  fibonacciAlignment: number;
  harmonicFrequency: string;
}

/**
 * Calculate sacred geometry metrics from quantum bytes
 */
export function calculateSacredGeometry(bytes: number[]): SacredGeometryReading {
  const average = bytes.reduce((a, b) => a + b, 0) / bytes.length;

  // Calculate Phi resonance from consecutive byte ratios
  let phiSum = 0;
  for (let i = 0; i < bytes.length - 1; i++) {
    const ratio =
      Math.max(bytes[i], bytes[i + 1]) / (Math.min(bytes[i], bytes[i + 1]) || 1);
    phiSum += 1 - Math.min(Math.abs(ratio - PHI) / PHI, 1);
  }
  const phiResonance = phiSum / (bytes.length - 1);

  // Find closest Fibonacci number
  const fibonacciAlignment = FIBONACCI.reduce((closest, fib) =>
    Math.abs(fib - average) < Math.abs(closest - average) ? fib : closest
  );

  // Determine harmonic frequency
  const harmonicFrequency =
    phiResonance > 0.8 ? "Divine harmony - strong cosmic alignment" :
    phiResonance > 0.6 ? "High resonance - favorable universal flow" :
    phiResonance > 0.4 ? "Balanced vibration - neutral cosmic state" :
    phiResonance > 0.2 ? "Low resonance - introspective energy" :
    "Chaotic vibration - transformative potential";

  return { phiResonance, fibonacciAlignment, harmonicFrequency };
}
