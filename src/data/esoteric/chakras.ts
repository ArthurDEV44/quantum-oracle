/**
 * Chakras (7) & Solfege Frequencies (9)
 *
 * The 7 major chakras are energy centers described in Hindu and Buddhist
 * tantric traditions, systematized in texts such as the Sat-Cakra-Nirupana
 * (16th c. CE, Purnananda Svami) and the Padaka-Pancaka. The word "chakra"
 * (Sanskrit: चक्र) means "wheel" or "circle." Each chakra corresponds to
 * a location along the spine, an element, a color, a seed mantra (bija),
 * and a domain of consciousness.
 *
 * The 9 Solfege frequencies (174–963 Hz) are a modern system of sound
 * healing (1970s–1990s, Dr. Joseph Puleo, then Dr. Leonard Horowitz).
 * Only 6 are "original" (396–852 Hz), the other 3 (174, 285, 963) were
 * added by extending the numerical pattern. The mathematical pattern of
 * digital roots following 3-6-9 is verified:
 *   174→3, 285→6, 396→9, 417→3, 528→6, 639→9, 741→3, 852→6, 963→9
 *
 * The quote attributed to Tesla ("the magnificence of 3, 6 and 9") has no
 * verified primary source. These frequencies have no demonstrated ancient
 * origin nor scientific validation of their healing properties. They are
 * presented here as a modern system of numerical correspondences, not as
 * an ancient tradition.
 *
 * QRNG mapping:
 *   - Chakra: 3 bits → 0-6 on 0-7 (scaling from 3-bit value)
 *   - Solfege: digital root of byte (iterated digit sum → 1-9) → frequency
 *
 * Cross-correspondences:
 *   7 Chakras ↔ 7 Planets (Vedic) ↔ 7 Hermetic Principles ↔ 7 Alchemy Operations
 *   7 Chakras ↔ 4+1 Elements (Earth, Water, Fire, Air, Ether)
 *   7 Chakras ↔ 7 Colors of the spectrum ↔ 7 Musical notes (C–B)
 */

import type { Chakra, SolfegeFrequency } from "./types";

// =============================================================================
// 7 MAJOR CHAKRAS
// =============================================================================

export const CHAKRAS: Record<number, Chakra> = {
  0: {
    number: 0,
    nameSanskrit: "Muladhara",
    nameFrench: "Chakra Racine",
    location: "Base de la colonne vertebrale, perinee",
    color: "Rouge",
    element: "Earth",
    mantra: "LAM",
    solfegeFrequency: 396,
    functionDesc:
      "Survie, enracinement, securite materielle, connexion a la terre et au corps physique. Muladhara gouverne les besoins fondamentaux : nourriture, abri, securite physique, sens d'appartenance au monde materiel.",
    description:
      "Muladhara (मूलाधार, « support de la racine ») est le premier chakra, situe a la base de la colonne vertebrale au niveau du perinee. Il est le fondement de tout le systeme energetique, le point d'ancrage qui relie l'etre humain a la terre et au monde physique. Dans la tradition tantrique, Muladhara est represente par un lotus a quatre petales de couleur rouge cramoisi, contenant un carre jaune (yantra de l'element Terre) et le bija mantra LAM. La Kundalini — l'energie cosmique lovee comme un serpent — sommeille en Muladhara, enroulee trois fois et demie autour du lingam de Shiva. L'eveil spirituel commence ici, par l'enracinement dans la matiere avant de s'elever vers le ciel. Un Muladhara equilibre confere stabilite, confiance, vitalite physique et sentiment de securite. Bloque, il engendre peur, anxiete, insecurite materielle, deconnexion du corps et problemes aux jambes, pieds et systeme osseux. Le travail sur ce chakra passe par le contact avec la nature, l'exercice physique, la marche pieds nus sur la terre, et la meditation sur l'element Terre.",
    correspondences: {
      planet: "Saturn",
      musicalNote: "C (Do)",
      day: "Saturday",
      metal: "Lead (Plomb)",
      gemstone: "Ruby (Rubis), Garnet (Grenat), Hematite",
      incense: "Cedar (Cedre), Patchouli",
      deity: "Brahma, Dakini",
      animal: "Elephant (Airavata a 7 trompes)",
      gland: "Surrenales",
      plexus: "Plexus coccygien",
      alchemyStage: "Nigredo",
      hermeticPrinciple: "Cause and Effect (7)",
      sefirah: "Malkuth (10)",
      tarotArcana: "The World (XXI)",
      zodiac: "Capricorn, Aquarius",
    },
  },

  1: {
    number: 1,
    nameSanskrit: "Svadhisthana",
    nameFrench: "Chakra Sacre",
    location: "Sous le nombril, region sacree",
    color: "Orange",
    element: "Water",
    mantra: "VAM",
    solfegeFrequency: 417,
    functionDesc:
      "Creativite, sexualite, emotions, plaisir, desir, fluidite. Svadhisthana gouverne la capacite a ressentir, a creer, a s'abandonner au flux de la vie et aux relations intimes.",
    description:
      "Svadhisthana (स्वाधिष्ठान, « sa propre demeure ») est le deuxieme chakra, situe quatre doigts sous le nombril dans la region sacree. Il est le centre de la creativite, de la sexualite et des emotions — tout ce qui coule, se transforme et engendre. Represente par un lotus a six petales de couleur orange vermillon, il contient un croissant de lune blanc (yantra de l'element Eau) et le bija mantra VAM. Svadhisthana est le siege du desir (kama), la force motrice qui pousse l'etre a creer, a proceder, a s'unir. La fluidite de l'eau est son essence : il gouverne l'adaptabilite, la capacite a changer, a lacher prise sur les formes figees. Dans la tradition tantrique, c'est ici que resident les samskaras (impressions inconscientes) et les vasanas (desirs latents) accumules au cours des existences. Un Svadhisthana equilibre se manifeste par la joie de vivre, la creativite debordante, une sexualite epanouie et des emotions fluides. Bloque, il produit culpabilite, frigidite ou obsession sexuelle, blocages creatifs, dependance emotionnelle et problemes urinaires ou reproductifs. Le travail sur ce chakra passe par la danse, le contact avec l'eau, l'expression artistique et la meditation sur le flux et le changement.",
    correspondences: {
      planet: "Moon",
      musicalNote: "D (Re)",
      day: "Monday",
      metal: "Silver (Argent)",
      gemstone: "Carnelian (Cornaline), Moonstone (Pierre de lune)",
      incense: "Sandalwood (Santal), Ylang-Ylang",
      deity: "Vishnu, Rakini",
      animal: "Makara (crocodile mythique)",
      gland: "Gonades",
      plexus: "Plexus sacre",
      alchemyStage: "Albedo",
      hermeticPrinciple: "Rhythm (5)",
      sefirah: "Yesod (9)",
      tarotArcana: "The High Priestess (II)",
      zodiac: "Cancer, Scorpio",
    },
  },

  2: {
    number: 2,
    nameSanskrit: "Manipura",
    nameFrench: "Chakra du Plexus Solaire",
    location: "Plexus solaire, region de l'estomac",
    color: "Jaune",
    element: "Fire",
    mantra: "RAM",
    solfegeFrequency: 528,
    functionDesc:
      "Volonte, pouvoir personnel, confiance en soi, transformation, digestion physique et psychique. Manipura gouverne l'affirmation de soi, la capacite a agir dans le monde et a transformer les experiences en sagesse.",
    description:
      "Manipura (मणिपूर, « cite des joyaux ») est le troisieme chakra, situe au niveau du plexus solaire entre le nombril et le sternum. Il est le centre du pouvoir personnel, de la volonte et de la transformation — le feu interieur qui digere les experiences et les transmute en force. Represente par un lotus a dix petales de couleur jaune eclatant, il contient un triangle rouge pointe vers le bas (yantra de l'element Feu) et le bija mantra RAM. Manipura est le soleil interieur de l'etre humain, le foyer de l'agni (feu digestif) qui consume les impuretes physiques et psychiques. La tradition tantrique situe ici le centre de la volonte individuelle (iccha shakti), la capacite a dire « je suis » et a affirmer son existence dans le monde. C'est le chakra du guerrier spirituel, celui qui transforme la peur en courage et l'inertie en action. Un Manipura equilibre se manifeste par la confiance en soi, la determination, le charisme naturel et une digestion forte. Bloque, il engendre passivite, peur de l'echec, problemes digestifs, colere explosive ou, au contraire, soumission chronique. Le travail sur ce chakra passe par les exercices de respiration du feu (kapalabhati), les arts martiaux, l'exposition au soleil et la meditation sur la flamme interieure.",
    correspondences: {
      planet: "Sun",
      musicalNote: "E (Mi)",
      day: "Sunday",
      metal: "Gold (Or)",
      gemstone: "Citrine, Tiger's Eye (OEil de tigre), Amber (Ambre)",
      incense: "Cinnamon (Cannelle), Ginger (Gingembre)",
      deity: "Rudra, Lakini",
      animal: "Ram (Belier)",
      gland: "Pancreas",
      plexus: "Plexus solaire",
      alchemyStage: "Citrinitas",
      hermeticPrinciple: "Polarity (4)",
      sefirah: "Tiferet (6) / Hod (8) / Netzach (7)",
      tarotArcana: "The Sun (XIX)",
      zodiac: "Aries, Leo",
    },
  },

  3: {
    number: 3,
    nameSanskrit: "Anahata",
    nameFrench: "Chakra du Coeur",
    location: "Centre de la poitrine, coeur",
    color: "Vert",
    element: "Air",
    mantra: "YAM",
    solfegeFrequency: 639,
    functionDesc:
      "Amour inconditionnel, compassion, pardon, guerison, equilibre entre les mondes inferieur et superieur. Anahata est le pont entre la matiere et l'esprit, le lieu ou l'amour humain devient amour universel.",
    description:
      "Anahata (अनाहत, « son non frappe ») est le quatrieme chakra, situe au centre de la poitrine au niveau du coeur. Son nom fait reference au son primordial qui resonne sans qu'aucun objet n'ait ete frappe — le son du silence, la vibration fondamentale de l'univers que seul le coeur ouvert peut percevoir. Represente par un lotus a douze petales de couleur vert emeraude, il contient deux triangles entrelaces formant une etoile a six branches (yantra de l'element Air) et le bija mantra YAM. Anahata est le pivot central du systeme des chakras, reliant les trois chakras inferieurs (matiere) aux trois superieurs (esprit). Il est le siege de l'amour inconditionnel, de la compassion, du pardon et de la guerison. Dans la tradition tantrique, Anahata abrite le Jivatman — l'ame individuelle, la flamme eternelle qui brule sans combustible. C'est ici que s'opere l'alchimie du coeur : les blessures deviennent sagesse, la douleur devient compassion, l'attachement devient amour libre. Un Anahata equilibre rayonne d'amour, de generosite, d'empathie et de joie spontanee. Bloque, il se manifeste par la froideur emotionnelle, l'incapacite a aimer ou a se laisser aimer, la jalousie, le ressentiment, et les problemes cardiaques ou pulmonaires. Le travail sur ce chakra passe par les pranayamas (exercices respiratoires), le service desinteresse (seva), le pardon et la meditation sur l'amour universel.",
    correspondences: {
      planet: "Venus",
      musicalNote: "F (Fa)",
      day: "Friday",
      metal: "Copper (Cuivre)",
      gemstone: "Emerald (Emeraude), Rose Quartz (Quartz rose), Jade",
      incense: "Rose, Jasmine (Jasmin)",
      deity: "Ishana-Rudra-Shiva, Kakini",
      animal: "Antelope (Antilope noire)",
      gland: "Thymus",
      plexus: "Plexus cardiaque",
      alchemyStage: "Conjunction of Albedo and Citrinitas",
      hermeticPrinciple: "Correspondence (2)",
      sefirah: "Tiferet (6)",
      tarotArcana: "The Lovers (VI) / The Empress (III)",
      zodiac: "Libra, Taurus",
    },
  },

  4: {
    number: 4,
    nameSanskrit: "Vishuddha",
    nameFrench: "Chakra de la Gorge",
    location: "Gorge, region cervicale",
    color: "Bleu",
    element: "Ether",
    mantra: "HAM",
    solfegeFrequency: 741,
    functionDesc:
      "Communication, expression de soi, verite, purification, creativite verbale. Vishuddha gouverne la capacite a exprimer sa verite interieure, a communiquer avec clarte et authenticite.",
    description:
      "Vishuddha (विशुद्ध, « purification ») est le cinquieme chakra, situe au niveau de la gorge dans la region cervicale. Il est le centre de la communication, de l'expression et de la verite — le lieu ou la pensee devient parole, ou l'interieur se revele a l'exterieur. Represente par un lotus a seize petales de couleur bleu turquoise, il contient un cercle blanc (yantra de l'element Ether/Akasha) et le bija mantra HAM. Vishuddha est le premier des chakras superieurs, lie a l'element Ether (Akasha), le substrat subtil de l'espace qui contient et transmet le son. L'ether est l'element le plus raffine, celui qui precede et engendre les quatre autres (Air, Feu, Eau, Terre). Dans la tradition tantrique, Vishuddha est le siege de la purification supreme : c'est ici que le nectar d'immortalite (amrita) descendant de Sahasrara peut etre soit consume par le feu de Manipura (mort), soit purifie et conserve (immortalite). Un Vishuddha equilibre confere eloquence, creativite verbale, ecoute attentive et capacite a exprimer sa verite sans peur. Bloque, il engendre timidite, mensonge, peur du jugement, problemes de thyroide, maux de gorge chroniques et incapacite a exprimer ses emotions. Le travail sur ce chakra passe par le chant, le mantra, le journaling, la pratique de la verite (satya) et la meditation sur le silence qui precede le son.",
    correspondences: {
      planet: "Mercury",
      musicalNote: "G (Sol)",
      day: "Wednesday",
      metal: "Mercury (Mercure/Vif-argent)",
      gemstone: "Turquoise, Lapis Lazuli, Aquamarine (Aigue-marine)",
      incense: "Frankincense (Encens oliban), Eucalyptus",
      deity: "Sadashiva, Shakini",
      animal: "White Elephant (Elephant blanc)",
      gland: "Thyroide",
      plexus: "Plexus pharyngien",
      alchemyOperation: "Distillation",
      hermeticPrinciple: "Vibration (3)",
      sefirah: "Daat (connaissance) / Chesed (4) / Geburah (5)",
      tarotArcana: "The Magician (I) / The Hierophant (V)",
      zodiac: "Gemini, Virgo",
    },
  },

  5: {
    number: 5,
    nameSanskrit: "Ajna",
    nameFrench: "Chakra du Troisieme OEil",
    location: "Entre les sourcils, centre du front",
    color: "Indigo",
    element: "Light",
    mantra: "OM",
    solfegeFrequency: 852,
    functionDesc:
      "Intuition, clairvoyance, sagesse, vision interieure, imagination. Ajna gouverne la perception au-dela des cinq sens, la capacite a voir l'invisible et a acceder a la connaissance directe.",
    description:
      "Ajna (आज्ञा, « commandement » ou « perception ») est le sixieme chakra, situe entre les sourcils au centre du front — le celebre « troisieme oeil ». Il est le centre de l'intuition, de la vision interieure et du commandement spirituel. Represente par un lotus a deux grands petales de couleur indigo profond, il contient un triangle pointe vers le bas (symbole de la Shakti) et le bija mantra OM, la vibration primordiale de l'univers. Ajna transcende les cinq elements grossiers — son element est la Lumiere pure, l'intelligence cosmique qui eclaire toute chose. C'est ici que convergent les trois principaux nadis (canaux energetiques) : Ida (lunaire, gauche), Pingala (solaire, droit) et Sushumna (central). Leur union en Ajna produit l'eveil de la conscience superieure. Dans la tradition tantrique, Ajna est le siege du guru interieur — le maitre qui reside en chacun et guide sans parole. Un Ajna ouvert confere clairvoyance, intuition aiguisee, vision globale, capacite a percevoir les realites subtiles et acces aux dimensions superieures de la conscience. Bloque, il se manifeste par confusion mentale, manque d'imagination, rationalisme excessif, maux de tete, problemes oculaires et incapacite a discerner le vrai du faux. Le travail sur ce chakra passe par la meditation sur le point entre les sourcils (trataka), la visualisation, les pratiques de yoga nidra et la contemplation de la lumiere interieure.",
    correspondences: {
      planet: "Jupiter",
      musicalNote: "A (La)",
      day: "Thursday",
      metal: "Tin (Etain)",
      gemstone: "Amethyst (Amethyste), Sapphire (Saphir), Sodalite",
      incense: "Camphor (Camphre), Star Anise (Anis etoile)",
      deity: "Paramashiva, Hakini",
      animal: "None (beyond animal realm)",
      gland: "Hypophyse (glande pituitaire)",
      plexus: "Plexus caverneux",
      alchemyOperation: "Fermentation / Distillation",
      hermeticPrinciple: "Mentalism (1)",
      sefirah: "Chokmah (2) / Binah (3)",
      tarotArcana: "The High Priestess (II) / The Hermit (IX)",
      zodiac: "Sagittarius, Pisces",
    },
  },

  6: {
    number: 6,
    nameSanskrit: "Sahasrara",
    nameFrench: "Chakra Couronne",
    location: "Sommet du crane, fontanelle",
    color: "Violet / Blanc",
    element: "Consciousness",
    mantra: "AUM (silence)",
    solfegeFrequency: 963,
    functionDesc:
      "Conscience cosmique, union divine, illumination, transcendance, liberation. Sahasrara est le point de connexion avec l'Absolu, le lieu ou la conscience individuelle se fond dans la conscience universelle.",
    description:
      "Sahasrara (सहस्रार, « lotus aux mille petales ») est le septieme et dernier chakra majeur, situe au sommet du crane au niveau de la fontanelle. Il n'est pas un chakra au sens strict mais le point de transcendance ou le systeme energetique s'ouvre vers l'infini. Represente par un lotus aux mille petales de couleur violet lumineux virant au blanc pur, il contient la pleine lune (symbole de la conscience illuminee) et le bindu (point) au-dela de tout mantra. Sahasrara transcende tous les elements, tous les sens, toutes les categories — il est la pure conscience (chit), l'etre absolu (sat), la beatitude infinie (ananda). C'est ici que la Kundalini, montee depuis Muladhara a travers tous les chakras, s'unit a Shiva — le mariage cosmique de l'energie (Shakti) et de la conscience (Shiva), la fin de toute dualite. Dans la tradition tantrique, l'ouverture de Sahasrara est l'illumination (moksha, nirvana, samadhi) — la liberation finale du cycle des renaissances. Un Sahasrara equilibre se manifeste par la sagesse profonde, la paix interieure inalterable, le sentiment d'unite avec le cosmos et la compassion universelle qui en decoule. Bloque, il engendre un sentiment de separation, de vide existentiel, de deconnexion spirituelle, une tendance au materialisme pur ou, paradoxalement, un mysticisme deconnecte de la realite. Le travail sur ce chakra ne peut etre force — il s'ouvre naturellement quand les six autres chakras sont en equilibre, par la grace (anugraha) de la pratique sincere et perseverante.",
    correspondences: {
      planet: "Saturn (transcendence) / Uranus (modern)",
      musicalNote: "B (Si)",
      day: "Saturday",
      metal: "Gold (Or) — perfected",
      gemstone: "Clear Quartz (Cristal de roche), Diamond (Diamant), Amethyst",
      incense: "Lotus, Myrrh (Myrrhe)",
      deity: "Shiva (pure consciousness), beyond all deities",
      animal: "None (pure consciousness)",
      gland: "Epiphyse (glande pineale)",
      plexus: "Plexus cerebral",
      alchemyStage: "Rubedo",
      hermeticPrinciple: "Gender (6) — union of opposites",
      sefirah: "Keter (1)",
      tarotArcana: "The Fool (0) / The World (XXI)",
      zodiac: "Capricorn, Aquarius (transcending zodiac)",
    },
  },
} as const satisfies Record<number, Chakra>;

// =============================================================================
// 9 SOLFEGE FREQUENCIES
// =============================================================================
//
// Modern system (1970s–1990s). The frequencies are keyed 1-9 to match the
// digital root of the QRNG byte (iterated digit sum of the decimal value
// until a single digit is obtained). Digital root 0 (only for byte value 0)
// is mapped to 9 by convention (as in standard digital root arithmetic).
//
// Digital root pattern: 3-6-9-3-6-9-3-6-9
//   Key 1 → 174 Hz (root 3)    Key 4 → 417 Hz (root 3)    Key 7 → 741 Hz (root 3)
//   Key 2 → 285 Hz (root 6)    Key 5 → 528 Hz (root 6)    Key 8 → 852 Hz (root 6)
//   Key 3 → 396 Hz (root 9)    Key 6 → 639 Hz (root 9)    Key 9 → 963 Hz (root 9)
//

export const SOLFEGE_FREQUENCIES: Record<number, SolfegeFrequency> = {
  1: {
    frequencyHz: 174,
    name: "Ut — Fondation de la conscience",
    digitalRoot: 3,
    description:
      "174 Hz est la plus basse des 9 frequences solfege, ajoutee par extension du patron numerique (non « originale »). Elle est associee aux fondations de la conscience, a la connexion avec la terre et les structures physiques du corps. Cette frequence est decrite dans la litterature du Solfege comme agissant sur les organes et les tissus les plus denses, favorisant un sentiment de securite et de stabilite. Sa racine numerique 3 relie cette frequence au premier cycle du patron 3-6-9, le cycle de la manifestation physique.",
    healingProperty:
      "Reduction de la douleur physique, ancrage energetique, stabilisation des fondations corporelles",
  },

  2: {
    frequencyHz: 285,
    name: "Re — Regeneration des tissus",
    digitalRoot: 6,
    description:
      "285 Hz est la deuxieme frequence solfege, egalement ajoutee par extension. Elle est associee a la regeneration cellulaire et a la guerison des tissus. Dans le systeme du Solfege, cette frequence est decrite comme stimulant les champs energetiques du corps pour promouvoir la guerison et la restructuration des organes endommages. Sa racine numerique 6 la place dans le cycle de l'harmonisation — le nombre de l'equilibre, de la beaute et de la responsabilite. 285 Hz est souvent utilisee en complement de 174 Hz pour le travail sur les structures physiques.",
    healingProperty:
      "Regeneration cellulaire, guerison des tissus, restauration de l'integrite energetique du corps",
  },

  3: {
    frequencyHz: 396,
    name: "Mi — Liberation de la peur et de la culpabilite",
    digitalRoot: 9,
    description:
      "396 Hz est la premiere des 6 frequences « originales » du Solfege. Elle est associee a la liberation des peurs profondes et du sentiment de culpabilite. Dans le systeme de correspondance avec les chakras, 396 Hz resonne avec Muladhara (chakra racine), le centre energetique lie a la survie, a la securite et a l'enracinement. Sa racine numerique 9 la relie au cycle de la transmutation — le 9 est le nombre de l'achevement et de la liberation dans la numerologie. Cette frequence est decrite comme aidant a transformer le chagrin en joie et a dissoudre les schémas de peur enracines dans l'inconscient.",
    healingProperty:
      "Liberation des peurs, dissolution de la culpabilite, transformation du chagrin en joie",
  },

  4: {
    frequencyHz: 417,
    name: "Fa — Facilitation du changement",
    digitalRoot: 3,
    description:
      "417 Hz est la deuxieme des frequences originales du Solfege. Elle est associee a la facilitation du changement, a la dissolution des situations cristallisees et a la defaite des influences negatives. Dans le systeme de correspondance, 417 Hz resonne avec Svadhisthana (chakra sacre), le centre de la creativite, de la fluidite et du changement. Sa racine numerique 3 la relie au cycle de la creation — le 3 est le nombre de l'expression, de la synthese et de la manifestation. Cette frequence est decrite comme nettoyant les experiences traumatiques et les influences destructrices du passe pour permettre un renouveau.",
    healingProperty:
      "Defaire les situations negatives, faciliter le changement, nettoyer les influences traumatiques",
  },

  5: {
    frequencyHz: 528,
    name: "Sol — Transformation et Amour (Frequence Miracle)",
    digitalRoot: 6,
    description:
      "528 Hz est la plus celebre des frequences solfege, souvent appelee « frequence de l'Amour » ou « frequence Miracle ». Elle occupe la position centrale des 9 frequences et est associee a la transformation, a la reparation et a l'amour. Le Dr. Leonard Horowitz l'a popularisee en affirmant qu'elle resonnait avec la structure de l'ADN. Dans le systeme de correspondance, 528 Hz resonne avec Manipura (plexus solaire), le centre de la transformation et du pouvoir personnel. Sa racine numerique 6 la place dans le cycle de l'harmonisation — le 6 est le nombre de l'amour, de la responsabilite et de l'equilibre. 528 Hz est la note « Mi » de l'echelle originale de Solfege medieval, derivee de la phrase « MIra gestorum » (miracles).",
    healingProperty:
      "Reparation de l'ADN (revendiquee), transformation, amour inconditionnel, retour a l'equilibre originel",
  },

  6: {
    frequencyHz: 639,
    name: "La — Connexion et relations harmonieuses",
    digitalRoot: 9,
    description:
      "639 Hz est associee a la connexion interpersonnelle, a la communication harmonieuse et a la reconciliation. Elle est decrite comme favorisant les relations equilibrees, la comprehension mutuelle et la tolerance. Dans le systeme de correspondance, 639 Hz resonne avec Anahata (chakra du coeur), le centre de l'amour inconditionnel, de la compassion et des liens affectifs. Sa racine numerique 9 la relie au cycle de la transmutation — le 9 dissout les barrieres entre les etres pour reveler l'unite sous-jacente. Cette frequence est souvent utilisee pour le travail de guerison relationnelle et pour ameliorer la communication dans les communautes.",
    healingProperty:
      "Harmonisation des relations, amelioration de la communication, reconnexion et reconciliation",
  },

  7: {
    frequencyHz: 741,
    name: "Si — Expression et solutions",
    digitalRoot: 3,
    description:
      "741 Hz est associee a l'expression de soi, a la resolution de problemes et au nettoyage cellulaire. Elle est decrite comme eveillant l'intuition et la capacite a trouver des solutions creatives. Dans le systeme de correspondance, 741 Hz resonne avec Vishuddha (chakra de la gorge), le centre de l'expression, de la verite et de la communication authentique. Sa racine numerique 3 la relie au cycle de la creation — l'expression est l'acte createur par excellence, le passage de l'invisible au visible par la parole. Cette frequence est souvent associee au « nettoyage » des cellules exposees aux toxines et aux radiations electromagnetiques.",
    healingProperty:
      "Eveil de l'intuition, expression de soi, nettoyage cellulaire, resolution de problemes",
  },

  8: {
    frequencyHz: 852,
    name: "Do (octave) — Retour a l'ordre spirituel",
    digitalRoot: 6,
    description:
      "852 Hz est associee a l'eveil de l'intuition et au retour a l'ordre spirituel. Elle est decrite comme operant sur le plan de la conscience pure, dissolvant les stagnations mentales et emotionnelles pour restaurer la clarte interieure. Dans le systeme de correspondance, 852 Hz resonne avec Ajna (troisieme oeil), le centre de l'intuition, de la clairvoyance et de la sagesse interieure. Sa racine numerique 6 la place dans le cycle de l'harmonisation — a ce niveau, l'harmonisation opere sur le plan spirituel plutot que physique. Cette frequence est utilisee pour la meditation profonde et le developpement des capacites extrasensorielles.",
    healingProperty:
      "Eveil de l'intuition profonde, retour a l'ordre spirituel, clairvoyance, dissolution des illusions",
  },

  9: {
    frequencyHz: 963,
    name: "Re (octave) — Frequence de la Conscience Divine",
    digitalRoot: 9,
    description:
      "963 Hz est la plus haute des 9 frequences solfege, ajoutee par extension du patron numerique. Elle est associee a la connexion avec la conscience divine, a l'illumination et a l'activation de la glande pineale. Souvent appelee « frequence de Dieu », elle est decrite comme ouvrant la porte aux etats de conscience les plus eleves. Dans le systeme de correspondance, 963 Hz resonne avec Sahasrara (chakra couronne), le point de transcendance ou la conscience individuelle rejoint la conscience cosmique. Sa racine numerique 9 — le nombre de l'achevement supreme — cloture le cycle complet 3-6-9, ou le 9 final represente le retour a la Source apres la traversee de toutes les dimensions de l'experience.",
    healingProperty:
      "Activation de la glande pineale, connexion a la conscience divine, illumination, unite cosmique",
  },
} as const satisfies Record<number, SolfegeFrequency>;
