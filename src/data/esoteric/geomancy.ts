/**
 * Geomancy — 16 Figures of Ilm al-Raml (Science of the Sand)
 *
 * Arab geomancy (Ilm al-Raml), systematized in the 9th-10th centuries CE,
 * is a binary divination system using 4-bit figures. Each figure consists
 * of four levels (Head/Neck/Body/Feet), each either single (●, odd = 1)
 * or double (● ●, even = 0). This produces exactly 16 = 2^4 figures.
 *
 * Binary signature convention:
 *   4 characters, from top to bottom: Head Neck Body Feet
 *   "1" = single point (●)   = odd / active
 *   "0" = double points (● ●) = even / passive
 *
 * XOR Combination Logic — GF(2)^4:
 *   In a full geomantic shield, 4 Mother figures are generated from the
 *   QRNG. Daughter figures are derived by transposition. Then:
 *     - Niece = Mother XOR Daughter (bitwise XOR of their 4-bit signatures)
 *     - Right Witness = Niece₁ XOR Niece₂
 *     - Left Witness  = Niece₃ XOR Niece₄
 *     - Judge = Right Witness XOR Left Witness
 *     - Sentence (Reconciler) = First Mother XOR Judge
 *   This XOR operation is equivalent to adding in GF(2)^4 and preserves
 *   the algebraic structure of the field. For Quantum Oracle, we extract
 *   two 4-bit nibbles (Figure Mère 1 and Figure Mère 2) and compute:
 *     Judge = Figure Mère 1 XOR Figure Mère 2
 *
 * Planetary/zodiacal attributions follow the traditional Arab-Latin system
 * as transmitted by Hugo of Santalla (12th c.) and Henry Cornelius Agrippa.
 */

import type { GeomancyFigure } from "./types";

export const GEOMANCY_FIGURES: Record<number, GeomancyFigure> = {
  0: {
    number: 0,
    nameArabic: "At-Tariq (الطريق)",
    nameLatin: "Via",
    binarySignature: "0000",
    element: "Water",
    planet: "Moon",
    zodiacSign: "Cancer",
    meaning:
      "La Voie — chemin, voyage, mouvement, flux constant. Via représente le passage, la route qui s'ouvre devant le consultant. Figure entièrement passive (quatre niveaux pairs), elle incarne le courant ininterrompu de l'eau qui s'écoule, la réceptivité totale. Elle indique un changement de lieu ou de situation, un déplacement physique ou intérieur. Via est favorable aux voyages et aux transitions mais défavorable à la stabilité : ce qui est en mouvement ne peut être retenu. Comme Juge, elle annonce que la situation est en pleine transformation et que le consultant doit suivre le flux plutôt que résister.",
    reversedMeaning:
      "Errance, dispersion, instabilité chronique, fuite en avant. Le consultant est emporté par les événements sans direction claire. Perte de repères.",
    judgeRole:
      "Comme Juge, Via indique une issue mobile et changeante — la situation ne se stabilisera pas de sitôt. Le verdict est au mouvement et à la transition.",
    correspondences: {
      element: "Water",
      planet: "Moon",
      hermeticPrinciple: "Rhythm",
      direction: "West",
      dayOfWeek: "Monday",
      color: "Silver",
      tarotArcana: "The Moon (XVIII)",
      yijingTrigram: "Kun (☷ — Receptive Earth)",
    },
  },
  1: {
    number: 1,
    nameArabic: "An-Nasr al-Kharij (النصر الخارج)",
    nameLatin: "Cauda Draconis",
    binarySignature: "0001",
    element: "Fire",
    planet: "South Node (Cauda)",
    zodiacSign: "Sagittarius",
    meaning:
      "La Queue du Dragon — fin, achèvement, dissolution, sortie. Cauda Draconis est la figure de la terminaison, du passage d'un cycle à un autre. Elle marque la fin d'une entreprise, la dissolution d'une situation. Le dernier niveau est actif (impair), indiquant que l'énergie se libère par le bas, comme une porte de sortie. Elle est favorable pour clore ce qui doit l'être, quitter une situation toxique, couper les liens. Défavorable pour les commencements et les projets neufs. Sa nature de feu consume ce qui fut.",
    reversedMeaning:
      "Refus de lâcher prise, agrippement au passé, déni d'une fin inévitable. Processus de deuil bloqué, stagnation par attachement.",
    judgeRole:
      "Comme Juge, Cauda Draconis tranche : c'est terminé. La situation arrive à sa conclusion naturelle. Accepter la fin pour pouvoir renaître.",
    correspondences: {
      element: "Fire",
      planet: "South Node",
      hermeticPrinciple: "Cause and Effect",
      direction: "South",
      dayOfWeek: "Tuesday",
      color: "Dark Red",
      tarotArcana: "The Tower (XVI)",
      yijingTrigram: "Gen (☶ — Mountain / Stillness)",
    },
  },
  2: {
    number: 2,
    nameArabic: "Al-Utba ad-Dakhila (العتبة الداخلة)",
    nameLatin: "Caput Draconis",
    binarySignature: "0010",
    element: "Earth",
    planet: "North Node (Caput)",
    zodiacSign: "Virgo",
    meaning:
      "La Tête du Dragon — commencement, entrée, seuil, initiative. Caput Draconis est l'exact opposé de Cauda : elle ouvre les portes, inaugure les cycles. Le troisième niveau (Corps) est actif, signifiant que l'énergie se concentre au centre, prête à se déployer. Elle est extrêmement favorable aux nouveaux projets, aux entreprises naissantes, aux rencontres. Son élément Terre lui confère la solidité nécessaire aux fondations durables. Elle indique un seuil à franchir avec confiance.",
    reversedMeaning:
      "Faux départ, précipitation, entreprise lancée sans préparation suffisante. Naïveté face à un engagement dont on ne mesure pas la portée.",
    judgeRole:
      "Comme Juge, Caput Draconis promet un nouveau départ. La situation s'ouvre vers l'avenir. Saisir l'opportunité qui se présente.",
    correspondences: {
      element: "Earth",
      planet: "North Node",
      hermeticPrinciple: "Cause and Effect",
      direction: "North",
      dayOfWeek: "Thursday",
      color: "Green",
      tarotArcana: "The World (XXI)",
      yijingTrigram: "Zhen (☳ — Thunder / Arousing)",
    },
  },
  3: {
    number: 3,
    nameArabic: "Al-Iqtiran (الاقتران)",
    nameLatin: "Conjunctio",
    binarySignature: "0011",
    element: "Air",
    planet: "Mercury",
    zodiacSign: "Virgo",
    meaning:
      "La Conjonction — union, rencontre, association, communication, lien. Conjunctio réunit ce qui était séparé. Les deux niveaux inférieurs sont actifs, créant une base solide sur laquelle l'union peut s'établir. Figure de Mercure et de l'Air, elle gouverne les échanges, le commerce, les contrats, les mariages, les alliances. Elle est favorable à tout ce qui rassemble et met en relation. C'est la figure diplomatique par excellence, la rencontre des contraires dans un espace de dialogue. Elle indique que les conditions sont propices à la communication et à l'accord.",
    reversedMeaning:
      "Dépendance affective, confusion des rôles, perte d'individualité dans la relation. Compromis excessifs ou alliance avec un partenaire inadéquat.",
    judgeRole:
      "Comme Juge, Conjunctio annonce une issue favorable par l'union et la coopération. La solution réside dans le rapprochement des parties.",
    correspondences: {
      element: "Air",
      planet: "Mercury",
      hermeticPrinciple: "Correspondence",
      direction: "East",
      dayOfWeek: "Wednesday",
      color: "Yellow-Orange",
      tarotArcana: "The Lovers (VI)",
      yijingTrigram: "Xun (☴ — Wind / Gentle)",
    },
  },
  4: {
    number: 4,
    nameArabic: "Al-Inqilab (الانقلاب)",
    nameLatin: "Carcer",
    binarySignature: "0100",
    element: "Earth",
    planet: "Saturn",
    zodiacSign: "Capricorn",
    meaning:
      "La Prison — restriction, confinement, limites, structure, patience. Carcer est la figure de Saturne, le grand maître du temps et des limites. Seul le niveau du Cou est actif, comme un verrou au centre d'une porte close. Elle représente ce qui retient, emprisonne, mais aussi ce qui structure et protège. Favorable pour la méditation, la retraite, la consolidation, la protection d'un secret. Défavorable pour l'action, le mouvement, la liberté. Elle invite à la patience et à l'acceptation des contraintes comme voie de sagesse et de maturation intérieure.",
    reversedMeaning:
      "Enfermement mental, rigidité, refus du changement, isolement pathologique. La prison est devenue intérieure — le consultant est son propre geôlier.",
    judgeRole:
      "Comme Juge, Carcer signifie blocage et délai. La situation est verrouillée. Il faut attendre que le temps fasse son œuvre.",
    correspondences: {
      element: "Earth",
      planet: "Saturn",
      hermeticPrinciple: "Cause and Effect",
      direction: "North",
      dayOfWeek: "Saturday",
      color: "Black",
      tarotArcana: "The Devil (XV)",
      yijingTrigram: "Gen (☶ — Mountain / Stillness)",
    },
  },
  5: {
    number: 5,
    nameArabic: "Al-Jama'a (الجماعة)",
    nameLatin: "Populus",
    binarySignature: "0101",
    element: "Water",
    planet: "Moon",
    zodiacSign: "Cancer",
    meaning:
      "Le Peuple — foule, collectif, masse, multiplicité, passivité. Populus incarne le groupe, l'opinion publique, la collectivité. Les niveaux pairs et impairs alternent en un rythme régulier, reflétant le battement de la vie sociale. Figure lunaire et aquatique, elle est réceptive, changeante, impressionnable. Favorable pour les affaires publiques, les assemblées, les sondages d'opinion. Défavorable pour les actions individuelles qui nécessitent du caractère. Elle indique que l'influence du groupe est prépondérante et que le consultant est porté par le courant collectif.",
    reversedMeaning:
      "Grégarisme, conformisme, perte d'identité dans la masse. Manipulation par l'opinion publique. Le consultant suit le troupeau sans discernement.",
    judgeRole:
      "Comme Juge, Populus indique une issue collective, dépendante de l'opinion d'autrui. La réponse viendra du groupe, pas de l'individu seul.",
    correspondences: {
      element: "Water",
      planet: "Moon",
      hermeticPrinciple: "Rhythm",
      direction: "West",
      dayOfWeek: "Monday",
      color: "Silver",
      tarotArcana: "The High Priestess (II)",
      yijingTrigram: "Kun (☷ — Receptive Earth)",
    },
  },
  6: {
    number: 6,
    nameArabic: "Al-Jaudala (الجودلة)",
    nameLatin: "Amissio",
    binarySignature: "0110",
    element: "Fire",
    planet: "Venus",
    zodiacSign: "Taurus",
    meaning:
      "La Perte — déperdition, abandon, sacrifice, lâcher-prise. Amissio est la figure de la perte matérielle, de ce qui s'échappe des mains. Les niveaux centraux (Cou et Corps) sont actifs tandis que la Tête et les Pieds sont passifs : l'énergie se dissipe par le centre, sans ancrage ni direction. Paradoxalement liée à Vénus, la perte peut être un sacrifice nécessaire à l'amour. Défavorable pour les affaires matérielles, les finances, la conservation des biens. Favorable pour le détachement spirituel, l'offrande, le don de soi. Ce qu'on perd sur le plan matériel peut être gagné sur le plan de l'âme.",
    reversedMeaning:
      "Avarice, rétention excessive, incapacité à donner ou à laisser partir. Attachement maladif aux possessions matérielles.",
    judgeRole:
      "Comme Juge, Amissio annonce une perte. Quelque chose sera perdu — mais cette perte peut être libératrice si elle est acceptée avec grâce.",
    correspondences: {
      element: "Fire",
      planet: "Venus",
      hermeticPrinciple: "Polarity",
      direction: "South",
      dayOfWeek: "Friday",
      color: "Rose",
      tarotArcana: "The Empress (III)",
      yijingTrigram: "Li (☲ — Fire / Clinging)",
    },
  },
  7: {
    number: 7,
    nameArabic: "Al-Hamra (الحمراء)",
    nameLatin: "Rubeus",
    binarySignature: "0111",
    element: "Fire",
    planet: "Mars",
    zodiacSign: "Scorpio",
    meaning:
      "Le Rouge — passion, colère, danger, violence, impulsivité, sexualité. Rubeus est la figure martienne par excellence, teintée du rouge du sang et du désir. Seule la Tête est passive — la raison est absente, submergée par la passion brute des trois niveaux inférieurs actifs. Elle avertit de conflits violents, de passions destructrices, d'actes impulsifs aux conséquences graves. Figure profondément défavorable dans presque toutes les questions, sauf celles liées à la guerre, à la chirurgie, ou aux situations nécessitant une énergie brute et sans retenue. Rubeus est un signal d'alarme.",
    reversedMeaning:
      "Répression excessive des pulsions, colère rentrée, frustration sexuelle. L'énergie martienne, refoulée, se retourne contre le consultant sous forme de maladie ou d'amertume.",
    judgeRole:
      "Comme Juge, Rubeus est un très mauvais présage. La situation est empoisonnée par la colère, la violence ou la tromperie. Grande prudence requise.",
    correspondences: {
      element: "Fire",
      planet: "Mars",
      hermeticPrinciple: "Vibration",
      direction: "South",
      dayOfWeek: "Tuesday",
      color: "Red",
      tarotArcana: "The Tower (XVI)",
      yijingTrigram: "Dui (☱ — Lake / Joyous)",
    },
  },
  8: {
    number: 8,
    nameArabic: "Al-Bayda (البيضاء)",
    nameLatin: "Albus",
    binarySignature: "1000",
    element: "Water",
    planet: "Mercury",
    zodiacSign: "Gemini",
    meaning:
      "Le Blanc — pureté, sagesse, clarté mentale, réflexion, paix. Albus est l'antithèse de Rubeus : ici, seule la Tête est active, la raison domine les passions. Figure de Mercure dans son aspect intellectuel et aquatique, elle favorise la pensée claire, l'étude, la contemplation, la médecine, le conseil. Elle est excellente pour les questions intellectuelles et spirituelles, les études, les diagnostics. Défavorable pour l'action vigoureuse ou les entreprises nécessitant de la force. Albus illumine l'esprit mais ne meut pas le corps. La sagesse qu'elle apporte est celle du recul et de la patience.",
    reversedMeaning:
      "Froideur émotionnelle, intellectualisme excessif, paralysie par l'analyse. Le consultant pense trop et agit trop peu.",
    judgeRole:
      "Comme Juge, Albus est très favorable. La situation se résoudra par l'intelligence, la clarté et la sagesse. La vérité émergera.",
    correspondences: {
      element: "Water",
      planet: "Mercury",
      hermeticPrinciple: "Mentalism",
      direction: "West",
      dayOfWeek: "Wednesday",
      color: "White",
      tarotArcana: "The Hermit (IX)",
      yijingTrigram: "Kan (☵ — Water / Abysmal)",
    },
  },
  9: {
    number: 9,
    nameArabic: "Al-Qabda al-Kharija (القبضة الخارجة)",
    nameLatin: "Puella",
    binarySignature: "1001",
    element: "Water",
    planet: "Venus",
    zodiacSign: "Libra",
    meaning:
      "La Jeune Fille — beauté, grâce, harmonie, douceur, féminité, art. Puella incarne le principe féminin réceptif dans sa plénitude. La Tête et les Pieds sont actifs, encadrant un centre paisible — la beauté qui rayonne du visage au pas de danse. Figure de Vénus en Eau, elle gouverne l'amour, l'art, la beauté, la séduction, l'harmonie. Très favorable pour les questions sentimentales, les arts, l'esthétique, les plaisirs. Moins favorable pour la guerre ou les affaires demandant de la rigueur. Puella invite à cultiver la beauté et l'harmonie dans tous les domaines de la vie.",
    reversedMeaning:
      "Vanité, superficialité, coquetterie vide, séduction manipulatrice. Le consultant confond l'apparence avec l'essence.",
    judgeRole:
      "Comme Juge, Puella annonce une issue favorable par la douceur, l'harmonie et la beauté. L'amour et la grâce guident la résolution.",
    correspondences: {
      element: "Water",
      planet: "Venus",
      hermeticPrinciple: "Gender",
      direction: "West",
      dayOfWeek: "Friday",
      color: "Green-Blue",
      tarotArcana: "The Empress (III)",
      yijingTrigram: "Dui (☱ — Lake / Joyous)",
    },
  },
  10: {
    number: 10,
    nameArabic: "Al-Qabda ad-Dakhila (القبضة الداخلة)",
    nameLatin: "Puer",
    binarySignature: "1010",
    element: "Fire",
    planet: "Mars",
    zodiacSign: "Aries",
    meaning:
      "Le Garçon — audace, énergie, combativité, jeunesse, impétuosité. Puer est le complément masculin de Puella : l'énergie martienne dans sa forme juvénile et dynamique. Tête et Corps actifs — l'esprit et le corps sont en mouvement, le cou et les pieds passifs montrent un manque d'ancrage et de prudence. Favorable pour la guerre, la compétition, les sports, les actions nécessitant du courage et de l'énergie. Défavorable pour la patience, la diplomatie, les affaires délicates. Puer est l'archétype du guerrier jeune et fougueux, plein de vitalité mais manquant de sagesse.",
    reversedMeaning:
      "Agressivité gratuite, immaturité, témérité sans discernement. Le consultant fonce tête baissée dans une situation qui requiert de la subtilité.",
    judgeRole:
      "Comme Juge, Puer indique une issue par l'action directe et le courage. La situation demande de l'audace, mais aussi de la prudence.",
    correspondences: {
      element: "Fire",
      planet: "Mars",
      hermeticPrinciple: "Gender",
      direction: "South",
      dayOfWeek: "Tuesday",
      color: "Red",
      tarotArcana: "The Emperor (IV)",
      yijingTrigram: "Zhen (☳ — Thunder / Arousing)",
    },
  },
  11: {
    number: 11,
    nameArabic: "Al-Ataba al-Kharija (العتبة الخارجة)",
    nameLatin: "Acquisitio",
    binarySignature: "1011",
    element: "Air",
    planet: "Jupiter",
    zodiacSign: "Sagittarius",
    meaning:
      "Le Gain — acquisition, profit, succès matériel, abondance, récolte. Acquisitio est la figure la plus favorable pour les questions matérielles et financières. Trois niveaux actifs sur quatre, seul le Cou passif — l'énergie de Jupiter se déverse généreusement, le succès est presque assuré. Tout ce qui est entrepris sous Acquisitio prospère. Favorable pour les affaires, le commerce, les investissements, les examens, les promotions. L'exact opposé d'Amissio, elle promet le gain là où l'autre promettait la perte. Figure de l'abondance jupitérienne, elle attire la fortune et la prospérité.",
    reversedMeaning:
      "Avidité, cupidité, accumulation obsessionnelle. Le succès matériel devient une fin en soi, au détriment des valeurs humaines et spirituelles.",
    judgeRole:
      "Comme Juge, Acquisitio est un excellent présage. Gain assuré, succès matériel, issue très favorable aux affaires et aux entreprises.",
    correspondences: {
      element: "Air",
      planet: "Jupiter",
      hermeticPrinciple: "Cause and Effect",
      direction: "East",
      dayOfWeek: "Thursday",
      color: "Purple",
      tarotArcana: "Wheel of Fortune (X)",
      yijingTrigram: "Qian (☰ — Creative Heaven)",
    },
  },
  12: {
    number: 12,
    nameArabic: "An-Nusra ad-Dakhila (النصرة الداخلة)",
    nameLatin: "Fortuna Major",
    binarySignature: "1100",
    element: "Earth",
    planet: "Sun",
    zodiacSign: "Leo",
    meaning:
      "La Grande Fortune — succès éclatant, protection, victoire assurée, puissance solaire. Fortuna Major est l'une des deux figures les plus favorables de la géomancie. Les deux niveaux supérieurs (Tête et Cou) sont actifs tandis que les inférieurs sont passifs — l'énergie se concentre en haut, comme le soleil au zénith qui illumine tout ce qu'il surplombe. Figure solaire de Terre, elle combine la puissance rayonnante du Soleil avec la stabilité de la Terre. Favorable pour pratiquement toute question. Elle promet le succès durable, la protection, la reconnaissance. La fortune est acquise et consolidée.",
    reversedMeaning:
      "Orgueil, hubris, arrogance née du succès. Le consultant s'aveugle dans sa réussite et ne voit pas les dangers qui se profilent.",
    judgeRole:
      "Comme Juge, Fortuna Major promet un succès total et durable. L'issue est des plus favorables. La victoire est certaine et la protection assurée.",
    correspondences: {
      element: "Earth",
      planet: "Sun",
      hermeticPrinciple: "Mentalism",
      direction: "North",
      dayOfWeek: "Sunday",
      color: "Gold",
      tarotArcana: "The Sun (XIX)",
      yijingTrigram: "Qian (☰ — Creative Heaven)",
    },
  },
  13: {
    number: 13,
    nameArabic: "An-Nusra al-Kharija (النصرة الخارجة)",
    nameLatin: "Fortuna Minor",
    binarySignature: "1101",
    element: "Fire",
    planet: "Sun",
    zodiacSign: "Leo",
    meaning:
      "La Petite Fortune — succès rapide mais éphémère, aide extérieure, chance passagère. Fortuna Minor est le reflet inversé de Fortuna Major : trois niveaux actifs et un seul passif (le Corps), mais l'énergie se disperse vers le bas au lieu de se concentrer en haut. Le succès vient vite mais ne dure pas. Figure solaire de Feu, elle brûle intensément mais brièvement. Favorable pour les actions rapides, les coups d'éclat, les situations nécessitant de la vitesse. Défavorable pour les entreprises à long terme. Elle indique une aide providentielle ou une chance qui ne se présentera qu'une fois.",
    reversedMeaning:
      "Impatience, succès superficiel, gains éphémères dissipés aussi vite qu'acquis. Le consultant cherche le raccourci au lieu du chemin durable.",
    judgeRole:
      "Comme Juge, Fortuna Minor promet un succès, mais temporaire. L'issue est favorable à court terme. Agir vite pour en profiter.",
    correspondences: {
      element: "Fire",
      planet: "Sun",
      hermeticPrinciple: "Vibration",
      direction: "South",
      dayOfWeek: "Sunday",
      color: "Orange",
      tarotArcana: "The Sun (XIX)",
      yijingTrigram: "Li (☲ — Fire / Clinging)",
    },
  },
  14: {
    number: 14,
    nameArabic: "Al-Huzn (الحزن)",
    nameLatin: "Tristitia",
    binarySignature: "1110",
    element: "Earth",
    planet: "Saturn",
    zodiacSign: "Aquarius",
    meaning:
      "La Tristesse — mélancolie, déclin, solitude, intériorisation, deuil. Tristitia est la figure de Saturne dans son aspect le plus sombre. Trois niveaux supérieurs actifs et les Pieds passifs — comme un édifice dont les fondations s'effondrent, ou une flèche pointée vers le bas. Elle indique un repli, une contraction, une descente. L'énergie saturnienne invite au recueillement, à l'introspection, au dépouillement. Défavorable pour les entreprises joyeuses, les fêtes, les projets d'expansion. Favorable pour la méditation, le travail solitaire, la pénitence, le deuil conscient. La tristesse peut être un passage vers la profondeur.",
    reversedMeaning:
      "Dépression, désespoir, enfermement dans la souffrance. Le consultant s'enlise dans la mélancolie sans chercher d'issue.",
    judgeRole:
      "Comme Juge, Tristitia annonce une issue triste ou décevante. La situation connaît un déclin. Temps de repli et de patience.",
    correspondences: {
      element: "Earth",
      planet: "Saturn",
      hermeticPrinciple: "Rhythm",
      direction: "North",
      dayOfWeek: "Saturday",
      color: "Dark Gray",
      tarotArcana: "The Hermit (IX)",
      yijingTrigram: "Gen (☶ — Mountain / Stillness)",
    },
  },
  15: {
    number: 15,
    nameArabic: "Al-Farah (الفرح)",
    nameLatin: "Laetitia",
    binarySignature: "1111",
    element: "Air",
    planet: "Jupiter",
    zodiacSign: "Pisces",
    meaning:
      "La Joie — bonheur, expansion, célébration, optimisme, élévation. Laetitia est l'exact opposé de Tristitia et la figure la plus joyeuse de la géomancie. Quatre niveaux actifs — l'énergie déborde de partout, comme une fontaine jaillissante ou une flamme qui monte. Figure de Jupiter en Air, elle combine l'expansion jupitérienne avec la légèreté de l'Air. Tout est favorable sous Laetitia : les projets, les amours, la santé, les voyages. Elle promet le bonheur, la réussite, la joie de vivre. Comme Juge, elle est le meilleur présage possible, annonçant une issue heureuse et comblée.",
    reversedMeaning:
      "Euphorie excessive, déni de la réalité, optimisme irresponsable. Le consultant ignore les signaux d'alerte, enivré par sa propre joie.",
    judgeRole:
      "Comme Juge, Laetitia est le plus heureux des présages. Issue très favorable, bonheur, succès, joie. La situation évolue vers le meilleur.",
    correspondences: {
      element: "Air",
      planet: "Jupiter",
      hermeticPrinciple: "Vibration",
      direction: "East",
      dayOfWeek: "Thursday",
      color: "Sky Blue",
      tarotArcana: "The Star (XVII)",
      yijingTrigram: "Qian (☰ — Creative Heaven)",
    },
  },
} as const satisfies Record<number, GeomancyFigure>;

/**
 * Compute the Judge figure by XOR of two Mother figures.
 *
 * In GF(2)^4, XOR is the addition operation.
 * Judge = Mother1 ⊕ Mother2
 *
 * @param mother1 - number 0-15 (4-bit figure)
 * @param mother2 - number 0-15 (4-bit figure)
 * @returns number 0-15 representing the Judge figure
 */
export function calculateJudge(mother1: number, mother2: number): number {
  return (mother1 ^ mother2) & 0xf;
}

/**
 * Format a 4-bit geomantic figure as a visual pattern.
 *
 * Each level is represented as:
 *   "1" (active/odd)  → "●"      (single point)
 *   "0" (passive/even) → "● ●"   (double points)
 *
 * Returns an array of 4 strings (Head, Neck, Body, Feet).
 */
export function formatFigureVisual(figureNumber: number): string[] {
  const sig = GEOMANCY_FIGURES[figureNumber]?.binarySignature ?? "0000";
  return sig.split("").map((bit) => (bit === "1" ? "●" : "● ●"));
}
