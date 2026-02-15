/**
 * Gematria — 22 Hebrew Letters
 *
 * The 22 letters of the Hebrew alphabet form the foundation of Kabbalistic
 * gematria, where each letter carries a numerical value and a rich symbolic
 * meaning. The Sefer Yetzirah (Book of Formation, ~3rd–6th c. CE) organizes
 * them into three categories:
 *
 *   3 Mother letters (Aleph, Mem, Shin) → Elements (Air, Water, Fire)
 *   7 Double letters (Beth, Gimel, Daleth, Kaph, Pe, Resh, Tav) → 7 Planets
 *   12 Simple letters → 12 Zodiac signs
 *
 * Standard gematria values: units (1-9), tens (10-90), hundreds (100-400).
 * The 5 final forms (Kaph, Mem, Nun, Pe, Tsade sofit) with values 500-900
 * are NOT used in standard gematria — only their medial forms apply.
 *
 * Path numbers (1-22) correspond to the 22 paths on the Tree of Life
 * as defined in kabbalah-paths.ts (Golden Dawn tradition).
 *
 * Notable gematria values in the 0-255 QRNG range:
 *   13 = Echad (אחד, Unity) / Ahavah (אהבה, Love)
 *   18 = Chai (חי, Life)
 *   26 = YHVH (יהוה, Tetragrammaton)
 *   36 = Tzaddik (double Chai, the righteous)
 *   42 = Name of 42 letters (Ana Bekoach)
 *   72 = Chesed (חסד, Mercy) / Shem HaMephorash (72-fold Name)
 *   86 = Elohim (אלהים)
 *   91 = Amen (אמן) / YHVH + Adonai unified
 *  137 = Kabbalah (קבלה, Reception)
 *  200 = Resh (ר, Head/Beginning)
 *  216 = Gevurah (גבורה, Might) — 6×6×6, the 216-letter Name of God
 *  232 = YHVH Elohim (יהוה אלהים, Mercy + Justice united)
 *
 * QRNG mapping: the raw byte value (0-255) is decomposed into a sum of
 * Hebrew letter values using greedy decomposition, forming a "sacred word".
 *
 * Special cases per Hebrew numeral tradition:
 *   15 → Tet (9) + Vav (6), NOT Yod (10) + He (5) — avoids spelling YH
 *   16 → Tet (9) + Zayin (7), NOT Yod (10) + Vav (6) — avoids spelling YV
 */

import type { HebrewLetter } from "./types";

// =============================================================================
// 22 HEBREW LETTERS
// =============================================================================

export const HEBREW_LETTERS: Record<number, HebrewLetter> = {
  1: {
    number: 1,
    letter: "\u05D0",
    name: "Aleph",
    phoneticValue: "silent / glottal stop",
    numericalValue: 1,
    meaning:
      "Aleph est la premiere lettre de l'alphabet hebreu et la premiere des trois lettres meres. Son glyphe represente un Vav diagonal separe par un Yod en haut et un Yod en bas — image du souffle divin qui unit le monde d'en haut et le monde d'en bas. Aleph est silencieuse : elle ne porte aucun son propre mais recoit la voyelle qu'on lui assigne, symbolisant la pure potentialite du souffle avant qu'il ne devienne parole. Sa valeur numerique (1) exprime l'Unite absolue — l'Ein Sof qui precede toute division. Le Sefer Yetzirah enseigne qu'Aleph engendre l'element Air, le milieu mediateur entre le Feu (Shin) et l'Eau (Mem). Le mot Aleph signifie aussi « boeuf » — la force primordiale domestiquee — et « enseigner » (alef), car toute connaissance commence par le silence receptif. La lettre Aleph est aussi la premiere lettre d'Emeth (verite) et d'Elohim (Dieu).",
    pathNumber: 1,
    category: "mother",
    elementOrPlanetOrZodiac: "Air",
    description:
      "Lettre mere associee a l'element Air. Relie Kether (Couronne) a Chokmah (Sagesse) sur l'Arbre de Vie (sentier 11 dans la numerotation traditionnelle). Correspond au Mat (arcane 0) du Tarot — le voyageur primordial qui traverse l'Abime avec l'innocence du souffle pur. L'Air d'Aleph est le mediateur universel, le Ruach (esprit/souffle) qui porte la vibration divine dans la creation. Le Zohar enseigne que le monde fut cree par le Beth (premiere lettre de Bereshit) mais concu dans le silence d'Aleph. Le mystique qui contemple Aleph decouvre le paradoxe de l'Unite qui contient la multiplicite sans se diviser.",
  },

  2: {
    number: 2,
    letter: "\u05D1",
    name: "Beth",
    phoneticValue: "b / v",
    numericalValue: 2,
    meaning:
      "Beth est la deuxieme lettre et la premiere des sept lettres doubles — elle se prononce « b » avec le dagesh (point dur) et « v » sans. Son nom signifie « maison », le premier receptacle, la premiere delimitation de l'espace. Beth est la premiere lettre de la Torah (Bereshit, « Au commencement ») : la creation commence par la construction d'une maison, un espace interieur distinct de l'infini exterieur. Le Midrash enseigne que Beth fut choisie pour ouvrir la Torah parce qu'elle est la lettre de la benediction (Berakha). Sa valeur numerique (2) introduit la dualite — interieur/exterieur, haut/bas, sacre/profane. Les deux extremites du Beth sont fermees a droite et ouvertes a gauche (sens de lecture hebreu), indiquant que la creation progresse vers l'avant sans retour possible. Beth enseigne que toute manifestation necessite un contenant, une forme, une structure — la Sagesse divine a besoin d'une Maison pour habiter.",
    pathNumber: 2,
    category: "double",
    elementOrPlanetOrZodiac: "Mercury",
    description:
      "Lettre double associee a Mercure. Relie Kether (Couronne) a Binah (Intelligence) sur l'Arbre de Vie. Correspond au Bateleur (arcane I) — le magicien qui organise les quatre elements sur sa table. En tant que lettre double, Beth oscille entre sagesse et folie, vie et mort. Mercure est le messager qui traduit l'infini en fini, le divin en humain. La dualite de Beth (b/v) exprime la double nature de toute creation : structure et mouvement, forme et flux, contenant et contenu.",
  },

  3: {
    number: 3,
    letter: "\u05D2",
    name: "Gimel",
    phoneticValue: "g / gh",
    numericalValue: 3,
    meaning:
      "Gimel est la troisieme lettre et la deuxieme des lettres doubles. Son nom signifie « chameau » — l'animal capable de traverser les deserts les plus arides en portant des reserves de vie. Gimel represente la generosite (Gemilut Chasadim, les actes de bonte gratuits) et le mouvement, la marche resolue a travers les etendues vides. Sa valeur numerique (3) introduit la dynamique : apres l'Unite (Aleph) et la Dualite (Beth), Gimel est le mouvement qui relie les deux poles. Le Talmud enseigne que le Gimel court apres le Daleth (la porte du pauvre) pour lui donner — l'etymologie populaire lie « gomel » (beneficier) a Gimel. Cette lettre enseigne que la richesse spirituelle doit circuler, comme le chameau traverse le desert pour porter l'eau d'une oasis a l'autre. La traversee du desert est aussi la metaphore de l'epreuve initiatique : il faut des reserves interieures pour survivre a la nuit obscure de l'ame.",
    pathNumber: 3,
    category: "double",
    elementOrPlanetOrZodiac: "Moon",
    description:
      "Lettre double associee a la Lune. Relie Kether (Couronne) a Tiphereth (Beaute) par le sentier le plus long de l'Arbre, traversant l'Abime (Daath). Correspond a la Papesse (arcane II) — la gardienne du voile entre visible et invisible. La Lune de Gimel reflete la lumiere de Kether vers Tiphereth comme un miroir celeste. En tant que lettre double, Gimel oscille entre richesse et pauvrete, paix et guerre.",
  },

  4: {
    number: 4,
    letter: "\u05D3",
    name: "Daleth",
    phoneticValue: "d / dh",
    numericalValue: 4,
    meaning:
      "Daleth est la quatrieme lettre et la troisieme des lettres doubles. Son nom signifie « porte » — le seuil entre deux espaces, le passage qui relie et separe simultanement. Daleth represente l'humilite du pauvre (dal) qui se tient a la porte et attend la generosite du Gimel. Sa valeur numerique (4) est celle de la materialite : les 4 elements, les 4 directions, les 4 lettres du Tetragramme. Le glyphe de Daleth ressemble a une porte avec un linteau et un montant — la structure minimale qui definit un passage. Le Sefer Yetzirah attribue a Daleth la domination sur la fecondite et la sterilite, la semence et la paix. Daleth enseigne que toute porte est un choix : franchir le seuil transforme irreversiblement celui qui passe. La porte de Daleth est celle du palais de la connaissance — il faut se faire humble et petit pour la franchir, comme l'enseigne la tradition de la Porte Basse des eglises medievales.",
    pathNumber: 4,
    category: "double",
    elementOrPlanetOrZodiac: "Venus",
    description:
      "Lettre double associee a Venus. Relie Chokmah (Sagesse) a Binah (Intelligence), unissant le Pere et la Mere cosmiques. Correspond a l'Imperatrice (arcane III) — la Grande Mere feconde. Venus est la force d'attraction qui unit les opposés, le desir cosmique qui engendre la creation. En tant que lettre double, Daleth oscille entre fecondite et sterilite, beaute et laideur, grace et disgrace.",
  },

  5: {
    number: 5,
    letter: "\u05D4",
    name: "He",
    phoneticValue: "h",
    numericalValue: 5,
    meaning:
      "He est la cinquieme lettre et la premiere des douze lettres simples. Son nom signifie « fenetre » — l'ouverture qui laisse entrer la lumiere et l'air dans la maison (Beth). He represente le souffle leger, la respiration, l'expiration de la vie divine dans la creation. Cette lettre apparait deux fois dans le Tetragramme (YHVH), formant les deux He — le He superieur (monde de Binah, la Mere) et le He inferieur (monde de Malkuth, la Fille). Sa valeur numerique (5) est celle de la vie manifestee : les 5 doigts, les 5 sens, les 5 livres de Moise. Le Talmud enseigne que le monde fut cree par le He — son glyphe est ouvert en bas a gauche, symbolisant la chute potentielle, mais le petit trait interieur en haut represente la possibilite de repentir (teshuva). He est aussi la lettre ajoutee aux noms d'Abraham et Sarah pour sceller l'alliance divine.",
    pathNumber: 5,
    category: "simple",
    elementOrPlanetOrZodiac: "Aries",
    description:
      "Lettre simple associee au Belier (Aries). Relie Chokmah (Sagesse) a Tiphereth (Beaute) sur l'Arbre de Vie. Correspond a l'Empereur (arcane IV) — l'autorite stabilisatrice qui structure le monde. Le Belier, premier signe du zodiaque, porte l'energie d'initiative et de creation qui penetre la forme. Le He de la fenetre laisse passer la lumiere de la Sagesse vers la Beaute.",
  },

  6: {
    number: 6,
    letter: "\u05D5",
    name: "Vav",
    phoneticValue: "v / o / u",
    numericalValue: 6,
    meaning:
      "Vav est la sixieme lettre et la deuxieme des lettres simples. Son nom signifie « crochet » ou « clou » — l'element de connexion qui relie deux choses separees. Vav est la conjonction « et » en hebreu (la lettre Vav prefixee), le lien universel qui unit toutes les parties de la creation. Sa valeur numerique (6) est celle de la creation accomplie (6 jours de la Genese), de la direction complete (haut, bas, nord, sud, est, ouest). Le glyphe de Vav est une ligne verticale — le pilier qui relie le ciel a la terre, la colonne vertebrale du monde. Dans le Tetragramme (YHVH), le Vav represente le Fils, Tiphereth, le principe masculin engendre qui relie le monde superieur au monde inferieur. Vav est aussi la lettre de la Ligne — le Kav, le premier rayon de lumiere divine qui penetre dans l'espace vide (Tzimtzum) pour initier la creation. Le Sefer Yetzirah attribue a Vav la domination sur la pensee.",
    pathNumber: 6,
    category: "simple",
    elementOrPlanetOrZodiac: "Taurus",
    description:
      "Lettre simple associee au Taureau (Taurus). Relie Chokmah (Sagesse) a Chesed (Misericorde) sur l'Arbre de Vie. Correspond au Hierophante (arcane V) — le pont entre le divin et l'humain. Le Taureau apporte la stabilite et l'endurance necessaires pour maintenir la connexion. Le crochet de Vav est le lien qui tient la structure du monde ensemble.",
  },

  7: {
    number: 7,
    letter: "\u05D6",
    name: "Zayin",
    phoneticValue: "z",
    numericalValue: 7,
    meaning:
      "Zayin est la septieme lettre et la troisieme des lettres simples. Son nom signifie « arme » ou « epee » — l'instrument de discernement qui tranche entre le vrai et le faux. Zayin represente la lutte spirituelle, le combat interieur pour la purete, mais aussi la nourriture (mezon) que le guerrier gagne par son effort. Sa valeur numerique (7) est le nombre sacre par excellence : 7 jours de la creation, 7 Sefirot de la construction, 7 planetes classiques, 7 couleurs de l'arc-en-ciel. Le glyphe de Zayin ressemble a un Vav couronne — le crochet qui recoit une tete, l'epee qui recoit une garde. Le Talmud enseigne que Zayin represente la femme couronnee (d'apres la forme de la lettre), la Shekhinah combattante qui defend la creation. Le Sefer Yetzirah attribue a Zayin la domination sur le mouvement et la marche. Cette lettre enseigne que la paix veritable ne s'obtient qu'apres le combat juste.",
    pathNumber: 7,
    category: "simple",
    elementOrPlanetOrZodiac: "Gemini",
    description:
      "Lettre simple associee aux Gemeaux (Gemini). Relie Binah (Intelligence) a Tiphereth (Beaute) sur l'Arbre de Vie. Correspond aux Amoureux (arcane VI) — le choix entre deux voies. Les Gemeaux incarnent la dualite et la communication, le jeu des contraires qui anime la vie mentale. L'epee de Zayin est celle du discernement qui tranche le noeud gordien de l'indecision.",
  },

  8: {
    number: 8,
    letter: "\u05D7",
    name: "Cheth",
    phoneticValue: "ch (guttural)",
    numericalValue: 8,
    meaning:
      "Cheth est la huitieme lettre et la quatrieme des lettres simples. Son nom signifie « cloture » ou « enclos » — la barriere protectrice qui delimite un espace sacre. Cheth represente la vie (Chai, Cheth-Yod = 18), la protection divine qui entoure et preserve. Sa valeur numerique (8) transcende le cycle naturel du 7 : c'est le surnaturel, le miracle, la circoncision au 8e jour qui scelle l'alliance avec le divin. Le glyphe de Cheth ressemble a une porte couverte ou un portique — deux montants relies par un linteau, formant un espace interieur protege. Le Sefer Yetzirah attribue a Cheth la domination sur la parole et la vue. La cloture de Cheth n'est pas une prison mais un jardin : elle protege le sacre de la profanation et le tendre de la brutalite. L'enclos de Cheth est aussi le Huppah (dais nuptial), l'espace intime ou s'accomplit l'union sacree.",
    pathNumber: 8,
    category: "simple",
    elementOrPlanetOrZodiac: "Cancer",
    description:
      "Lettre simple associee au Cancer. Relie Binah (Intelligence) a Geburah (Rigueur) sur l'Arbre de Vie. Correspond au Chariot (arcane VII) — la volonte qui triomphe en maintenant les opposés sous controle. Le Cancer, signe d'eau gouverne par la Lune, porte l'energie de la protection maternelle et de l'interiorite. La cloture de Cheth est le carapace du crabe qui protege la vie interieure.",
  },

  9: {
    number: 9,
    letter: "\u05D8",
    name: "Teth",
    phoneticValue: "t (emphatique)",
    numericalValue: 9,
    meaning:
      "Teth est la neuvieme lettre et la cinquieme des lettres simples. Son nom signifie « serpent » — la force vitale enroulee, la kundalini, le pouvoir primordial qui peut guerir ou detruire. Teth represente le bien cache dans le mal, la lumiere enfouie dans les tenebres. Sa valeur numerique (9) est le nombre de la gestation (9 mois), de l'accomplissement d'un cycle, de la verite cachee. Le glyphe de Teth represente un serpent love sur lui-meme — la puissance contenue, le potentiel non encore deploye. La premiere apparition de Teth dans la Torah est dans le mot « Tov » (bien, bon) au premier jour de la creation (« Et Dieu vit que la lumiere etait bonne »). Le Talmud enseigne que Teth est la lettre du bien (Tov) meme si le serpent est traditionnellement associe a la tentation. Teth enseigne l'integration du mal apparent, la transformation du poison en remede — le venin du serpent devient serum.",
    pathNumber: 9,
    category: "simple",
    elementOrPlanetOrZodiac: "Leo",
    description:
      "Lettre simple associee au Lion (Leo). Relie Chesed (Misericorde) a Geburah (Rigueur) sur l'Arbre de Vie. Correspond a la Force (arcane VIII/XI) — la maitrise douce du pouvoir instinctif. Le Lion, signe de feu gouverne par le Soleil, porte la puissance royale que le serpent de Teth canalise. La femme qui ouvre la gueule du lion dans l'arcane de la Force est le symbole de l'ame qui apprivoise la force vitale brute.",
  },

  10: {
    number: 10,
    letter: "\u05D9",
    name: "Yod",
    phoneticValue: "y",
    numericalValue: 10,
    meaning:
      "Yod est la dixieme lettre et la sixieme des lettres simples. C'est la plus petite lettre de l'alphabet hebreu — un simple point, une graine, le germe de toutes les autres lettres. Son nom signifie « main » — la main de Dieu qui faconne la creation. Toutes les lettres hebraiques commencent par un Yod, tout comme toute creation commence par un point initial. Sa valeur numerique (10) est celle de la totalite : les 10 Sefirot, les 10 commandements, les 10 paroles de la creation. Le Yod est la premiere lettre du Tetragramme (YHVH) et represente le Pere, Chokmah, le point de sagesse qui contient toute la creation en potentiel. Le Zohar enseigne que le Yod est le point primordial qui emerge du Neant — le premier acte de la creation est l'apparition d'un point dans le vide. Yod est aussi la lettre de l'humilite : la plus petite lettre porte la plus grande signification.",
    pathNumber: 10,
    category: "simple",
    elementOrPlanetOrZodiac: "Virgo",
    description:
      "Lettre simple associee a la Vierge (Virgo). Relie Chesed (Misericorde) a Tiphereth (Beaute) sur l'Arbre de Vie. Correspond a l'Hermite (arcane IX) — le sage solitaire qui porte la lanterne de la connaissance interieure. La Vierge, signe de terre gouverne par Mercure, porte le discernement analytique et le service desinteresse. Le point du Yod est la lampe de l'Hermite : minuscule mais suffisant pour eclairer le chemin.",
  },

  11: {
    number: 11,
    letter: "\u05DB",
    name: "Kaph",
    phoneticValue: "k / kh",
    numericalValue: 20,
    meaning:
      "Kaph est la onzieme lettre et la quatrieme des lettres doubles. Son nom signifie « paume de la main » — la coupe ouverte qui recoit et donne, le creux de la main qui contient et offre. Kaph represente le couronnement, le sacre, la capacite de recevoir la benediction divine. Sa valeur numerique (20) associe la dualite du 2 a la totalite du 10, suggerant une dualite accomplie, un equilibre dynamique. Le glyphe de Kaph est une coupe arrondie — la main ouverte qui se courbe pour recevoir, comme le disciple incline sa volonte pour accueillir l'enseignement. Le Sefer Yetzirah attribue a Kaph la domination sur la vie et la mort, la richesse et la pauvrete. Kaph est aussi la lettre du Kether (Couronne), l'initiale du sommet de l'Arbre de Vie. Le Zohar enseigne que Kaph est la couronne (Keter) en miniature — la capacite humaine de recevoir la lumiere divine dans la coupe de la conscience.",
    pathNumber: 11,
    category: "double",
    elementOrPlanetOrZodiac: "Jupiter",
    description:
      "Lettre double associee a Jupiter. Relie Chesed (Misericorde) a Netzach (Victoire) sur l'Arbre de Vie. Correspond a la Roue de Fortune (arcane X) — les cycles du destin qui elevent et abaissent. Jupiter, planete de l'expansion et de la chance, tourne la roue cosmique. En tant que lettre double, Kaph oscille entre vie et mort, richesse et pauvrete — les deux faces de la roue.",
  },

  12: {
    number: 12,
    letter: "\u05DC",
    name: "Lamed",
    phoneticValue: "l",
    numericalValue: 30,
    meaning:
      "Lamed est la douzieme lettre et la septieme des lettres simples. C'est la plus haute lettre de l'alphabet hebreu — elle s'eleve au-dessus de la ligne d'ecriture comme une tour ou un aiguillon. Son nom signifie « aiguillon a boeufs » et aussi « enseigner / apprendre » (lilmod). Lamed est la lettre de l'etude, de l'aspiration vers le haut, du desir insatiable de connaissance. Sa valeur numerique (30) relie la trinite (3) a la totalite (10). Le glyphe de Lamed est un Vav monte sur un Kaph — le crochet qui s'eleve depuis la paume, le baton de l'enseignant qui guide le disciple. Le Sefer Yetzirah attribue a Lamed la domination sur l'acte sexuel et le travail. Lamed est la lettre centrale de l'alphabet (entre les 11 premieres et les 11 dernieres), le coeur de la Torah. Le mot « lev » (coeur) commence par Lamed — l'etude est l'activite du coeur autant que de l'intellect.",
    pathNumber: 12,
    category: "simple",
    elementOrPlanetOrZodiac: "Libra",
    description:
      "Lettre simple associee a la Balance (Libra). Relie Geburah (Rigueur) a Tiphereth (Beaute) sur l'Arbre de Vie. Correspond a la Justice (arcane VIII/XI) — l'equilibre parfait entre misericorde et rigueur. La Balance pese les actes et les intentions avec l'impartialite de l'enseignant juste. L'aiguillon de Lamed stimule l'avancee tout en corrigeant la direction — l'etude est un processus d'ajustement perpetuel.",
  },

  13: {
    number: 13,
    letter: "\u05DE",
    name: "Mem",
    phoneticValue: "m",
    numericalValue: 40,
    meaning:
      "Mem est la treizieme lettre et la deuxieme des trois lettres meres. Son nom signifie « eau » (mayim) — l'element primordial de la receptivite, de la fluidite, de la vie. Mem represente les eaux d'en haut et les eaux d'en bas separees au deuxieme jour de la creation, la matrice aquatique ou toute forme prend naissance. Sa valeur numerique (40) est celle de la transformation : 40 jours du deluge, 40 ans dans le desert, 40 jours de Moise sur le Sinai, 40 semaines de gestation. Mem existe sous deux formes : le Mem ouvert (en milieu de mot) et le Mem ferme (en fin de mot, Mem sofit). Le Mem ouvert est la source qui coule, la question ouverte, le questionnement ; le Mem ferme est la reponse scellee, le mystere accompli. Le Sefer Yetzirah enseigne que Mem engendre l'element Eau, matrice de la vie. L'eau de Mem est aussi la Torah elle-meme, comparee a l'eau qui descend des hauteurs vers les lieux les plus bas.",
    pathNumber: 13,
    category: "mother",
    elementOrPlanetOrZodiac: "Water",
    description:
      "Lettre mere associee a l'element Eau. Relie Geburah (Rigueur) a Hod (Splendeur) sur l'Arbre de Vie. Correspond au Pendu (arcane XII) — l'inversion du regard, la suspension dans les eaux de l'inconscient. L'Eau de Mem est le miroir qui reflete la verite quand l'agitation de la surface cesse. Le Pendu qui se suspend volontairement recoit la sagesse des profondeurs — il faut se laisser immerger pour renaitre.",
  },

  14: {
    number: 14,
    letter: "\u05E0",
    name: "Nun",
    phoneticValue: "n",
    numericalValue: 50,
    meaning:
      "Nun est la quatorzieme lettre et la huitieme des lettres simples. Son nom signifie « poisson » — la creature qui vit dans les eaux (Mem), le principe de vie qui evolue dans les profondeurs de l'inconscient. Nun represente la fidelite, l'humilite et la chute necessaire qui precede l'elevation. Sa valeur numerique (50) est celle du Jubile (50e annee de liberation), des 50 portes de la comprehension (Binah). Le glyphe de Nun est courbe vers le bas comme un poisson qui plonge — l'ame qui descend dans la matiere pour accomplir sa mission. Le Nun est aussi la lettre du Mashiach (Messie) dans la tradition kabbalistique : le poisson qui emerge des profondeurs pour redimer le monde. Nun existe sous deux formes : le Nun courbe (en milieu de mot) et le Nun droit (en fin de mot, Nun sofit), qui descend sous la ligne comme un poisson plongeant dans les abysses. Le Psaume 119 « saute » le verset Nun (dans certaines versions), signe de la chute cachee.",
    pathNumber: 14,
    category: "simple",
    elementOrPlanetOrZodiac: "Scorpio",
    description:
      "Lettre simple associee au Scorpion (Scorpio). Relie Tiphereth (Beaute) a Netzach (Victoire) sur l'Arbre de Vie. Correspond a la Mort (arcane XIII) — la transformation radicale, la mort de l'ancien pour la naissance du nouveau. Le Scorpion, signe d'eau gouverne par Mars (et Pluton), porte l'energie de la transformation profonde. Le poisson de Nun meurt et renait dans les eaux de la metamorphose.",
  },

  15: {
    number: 15,
    letter: "\u05E1",
    name: "Samekh",
    phoneticValue: "s",
    numericalValue: 60,
    meaning:
      "Samekh est la quinzieme lettre et la neuvieme des lettres simples. Son nom signifie « soutien » ou « pilier » — la structure qui porte, l'appui sur lequel on s'adosse. Samekh represente la confiance, le soutien divin, la protection circulaire de la Providence. Sa valeur numerique (60) relie la perfection (6) a la totalite (10). Le glyphe de Samekh est un cercle ferme — la seule lettre entierement close, symbolisant l'infini sans commencement ni fin, la roue du cycle cosmique, la protection divine qui entoure l'ame de toutes parts. Le Sefer Yetzirah attribue a Samekh la domination sur le sommeil et la colere. Le cercle de Samekh est aussi le serpent Ouroboros qui se mord la queue — le cycle eternel de mort et renaissance. Cette lettre enseigne que le soutien veritable est interieur : l'ame qui s'appuie sur le divin ne peut tomber. Le cercle est aussi la Souka (tabernacle), l'abri temporaire qui rappelle la protection divine dans le desert.",
    pathNumber: 15,
    category: "simple",
    elementOrPlanetOrZodiac: "Sagittarius",
    description:
      "Lettre simple associee au Sagittaire (Sagittarius). Relie Tiphereth (Beaute) a Yesod (Fondement) sur l'Arbre de Vie. Correspond a la Temperance (arcane XIV) — l'ange qui verse l'eau de vie d'un recipient a l'autre. Le Sagittaire, signe de feu gouverne par Jupiter, porte l'aspiration vers les hauteurs et la quete de sens. Le cercle de Samekh est l'arc du Sagittaire tendu vers le ciel.",
  },

  16: {
    number: 16,
    letter: "\u05E2",
    name: "Ayin",
    phoneticValue: "silent / guttural",
    numericalValue: 70,
    meaning:
      "Ayin est la seizieme lettre et la dixieme des lettres simples. Son nom signifie « oeil » — l'organe de la perception qui voit au-dela des apparences. Ayin represente la vision interieure, la perspicacite, mais aussi l'illusion et la source (ayin = source d'eau). Sa valeur numerique (70) est celle de la completude des nations (70 nations, 70 langues, 70 faces de la Torah). Le glyphe d'Ayin est compose de deux traits lies — les deux yeux qui convergent vers un point unique, la vision binoculaire qui percoit la profondeur. Ayin est aussi le « Rien » (Ayin, le Neant divin) — le vide fecond dont tout emerge. Le paradoxe d'Ayin est que l'oeil voit tout sauf lui-meme : pour se connaitre, il faut se tourner vers l'interieur, vers le Ayin (Neant) qui est la source de toute existence. Le Sefer Yetzirah attribue a Ayin la domination sur le rire et la gaite. La vision d'Ayin distingue entre la realite (emet) et l'illusion (maya).",
    pathNumber: 16,
    category: "simple",
    elementOrPlanetOrZodiac: "Capricorn",
    description:
      "Lettre simple associee au Capricorne (Capricorn). Relie Tiphereth (Beaute) a Hod (Splendeur) sur l'Arbre de Vie. Correspond au Diable (arcane XV) — l'illusion de la materialite, les chaines que l'on porte volontairement. Le Capricorne, signe de terre gouverne par Saturne, porte l'ambition et la structure. L'oeil d'Ayin percoit la realite derriere l'illusion — le Diable n'a de pouvoir que sur ceux qui croient en ses chaines.",
  },

  17: {
    number: 17,
    letter: "\u05E4",
    name: "Pe",
    phoneticValue: "p / f",
    numericalValue: 80,
    meaning:
      "Pe est la dix-septieme lettre et la cinquieme des lettres doubles. Son nom signifie « bouche » — l'organe de la parole, le lieu ou le souffle (Aleph) devient verbe. Pe represente l'expression, la communication, le pouvoir createur de la parole. Sa valeur numerique (80) est celle de la fondation par la parole : Moise avait 80 ans quand il se presenta devant Pharaon. Le glyphe de Pe contient un Beth (une maison) a l'interieur — la bouche est la maison de la parole, le contenant dont le contenu est le logos. Le Sefer Yetzirah attribue a Pe la domination sur la domination et la servitude, la grace et la disgrace. En tant que lettre double, Pe se prononce « p » (dur, avec dagesh) et « f » (doux, sans dagesh) — la parole peut frapper comme un coup (p) ou caresser comme un souffle (f). La bouche de Pe cree et detruit : « La vie et la mort sont au pouvoir de la langue » (Proverbes 18:21).",
    pathNumber: 17,
    category: "double",
    elementOrPlanetOrZodiac: "Mars",
    description:
      "Lettre double associee a Mars. Relie Netzach (Victoire) a Hod (Splendeur) sur l'Arbre de Vie. Correspond a la Maison-Dieu / Tour (arcane XVI) — la destruction des structures artificielles par la foudre divine. Mars est la force explosive qui libere la parole emprisonnee. En tant que lettre double, Pe oscille entre domination et servitude — la parole peut liberer ou asservir.",
  },

  18: {
    number: 18,
    letter: "\u05E6",
    name: "Tsade",
    phoneticValue: "ts",
    numericalValue: 90,
    meaning:
      "Tsade est la dix-huitieme lettre et la onzieme des lettres simples. Son nom signifie « hamecon » ou « cote » — l'instrument qui capture, le chasseur juste. Tsade represente le Tsaddik, le juste, celui dont la rectitude morale est si parfaite qu'il devient un pilier du monde. Sa valeur numerique (90) est associee aux 90 ans de Sarah quand elle enfanta Isaac — la fertilite miraculeuse de la foi accomplie. Le glyphe de Tsade ressemble a un Nun courbe surmonte d'un Yod — le poisson (Nun) qui s'eleve par la main (Yod) de Dieu, l'ame humble qui est relevee par la grace. Le Sefer Yetzirah attribue a Tsade la domination sur la deglutition et le gout. Selon le Talmud, le monde se maintient grace au merite de 36 Tsaddikim (justes) caches dont l'identite reste inconnue. Tsade enseigne que la justice veritable n'est pas la rigidite morale mais la flexibilite du roseau — le Tsaddik plie mais ne rompt pas.",
    pathNumber: 18,
    category: "simple",
    elementOrPlanetOrZodiac: "Aquarius",
    description:
      "Lettre simple associee au Verseau (Aquarius). Relie Netzach (Victoire) a Yesod (Fondement) sur l'Arbre de Vie. Correspond a l'Etoile (arcane XVII) — l'esperance cosmique qui verse les eaux de la vie eternelle. Le Verseau, signe d'air gouverne par Saturne (et Uranus), porte l'ideal de la justice universelle et de la fraternite. L'hamecon de Tsade peche les ames dans les eaux du monde pour les elever vers la lumiere.",
  },

  19: {
    number: 19,
    letter: "\u05E7",
    name: "Qoph",
    phoneticValue: "q (guttural)",
    numericalValue: 100,
    meaning:
      "Qoph est la dix-neuvieme lettre et la douzieme (derniere) des lettres simples. Son nom signifie « oeil de l'aiguille » ou « nuque / arriere de la tete » — ce qui est derriere, cache, inconscient. Qoph represente le cycle cosmique, la saintete (Qadosh), mais aussi les profondeurs de l'inconscient ou resident les reves et les ombres. Sa valeur numerique (100) est le carre de 10, la totalite portee a la puissance — un nouveau niveau d'unite qui transcende le cycle des unites et des dizaines. Le glyphe de Qoph descend sous la ligne d'ecriture — c'est la lettre qui plonge dans les profondeurs, qui explore le monde souterrain. Le Sefer Yetzirah attribue a Qoph la domination sur le rire. Qoph est la lettre de la nuit et du reve, du monde sub-lunaire ou la lumiere divine est la plus occultee. C'est aussi la lettre de Qadosh (saint) — la saintete la plus haute se trouve paradoxalement dans la descente la plus profonde.",
    pathNumber: 19,
    category: "simple",
    elementOrPlanetOrZodiac: "Pisces",
    description:
      "Lettre simple associee aux Poissons (Pisces). Relie Netzach (Victoire) a Malkuth (Royaume) sur l'Arbre de Vie. Correspond a la Lune (arcane XVIII) — le monde des illusions, des reves, de l'inconscient collectif. Les Poissons, dernier signe du zodiaque, signe d'eau gouverne par Jupiter (et Neptune), portent la dissolution des frontieres entre le moi et l'ocean cosmique. Qoph plonge dans les profondeurs ou la nuit rejoint l'aube.",
  },

  20: {
    number: 20,
    letter: "\u05E8",
    name: "Resh",
    phoneticValue: "r",
    numericalValue: 200,
    meaning:
      "Resh est la vingtieme lettre et la sixieme des lettres doubles. Son nom signifie « tete » ou « commencement » — le sommet, le point de depart, la pensee qui precede l'action. Resh represente le renouveau, le nouveau commencement, la capacite de l'esprit a se reformer apres la destruction. Sa valeur numerique (200) est le double de 100 (Qoph), suggerant un redoublement de la totalite, une tete qui s'eleve au-dessus de la ronde des cycles. Le glyphe de Resh est une tete vue de profil — le visage tourne vers l'avant, l'orientation vers le futur. Le Sefer Yetzirah attribue a Resh la domination sur la paix et la guerre, la fertilite et la sterilite. Resh est la premiere lettre de Rosh Hashana (Tete de l'annee), le nouvel an juif qui est aussi le jour du jugement. En tant que lettre double, Resh oscille entre la sagesse du sage et la folie de l'insense — la tete peut etre couronnee ou tranchee.",
    pathNumber: 20,
    category: "double",
    elementOrPlanetOrZodiac: "Sun",
    description:
      "Lettre double associee au Soleil. Relie Hod (Splendeur) a Yesod (Fondement) sur l'Arbre de Vie. Correspond au Soleil (arcane XIX) — l'illumination radieuse, la conscience eveillée, la joie de la verite revelee. Le Soleil de Resh est la tete couronnee de lumiere, la conscience qui s'est purifiee et qui rayonne. En tant que lettre double, Resh oscille entre paix et guerre — le Soleil eclaire et brule, nourrit et desseche.",
  },

  21: {
    number: 21,
    letter: "\u05E9",
    name: "Shin",
    phoneticValue: "sh / s",
    numericalValue: 300,
    meaning:
      "Shin est la vingt-et-unieme lettre et la troisieme des trois lettres meres. Son nom signifie « dent » — l'instrument qui broie, transforme et assimile. Shin represente le Feu divin, l'Esprit Saint (Ruach HaKodesh), la flamme qui consume l'impur et illumine le pur. Sa valeur numerique (300) est trois fois 100 — la trinite portee a la perfection. Le glyphe de Shin a trois branches qui s'elevent comme trois flammes — les trois colonnes de l'Arbre de Vie, les trois lettres meres, les trois patriarches (Abraham, Isaac, Jacob). Le Sefer Yetzirah enseigne que Shin engendre l'element Feu, la puissance transformatrice par excellence. Shin est la lettre de Shaddai (Tout-Puissant), inscrite sur la Mezouza qui protege les maisons juives. La lettre Shin est aussi la premiere de Shalom (Paix), Shekinah (Presence divine) et Shema (« Ecoute Israel »). Le Feu de Shin n'est pas le feu destructeur mais le feu purificateur — le buisson ardent qui brule sans se consumer.",
    pathNumber: 21,
    category: "mother",
    elementOrPlanetOrZodiac: "Fire",
    description:
      "Lettre mere associee a l'element Feu. Relie Hod (Splendeur) a Malkuth (Royaume) sur l'Arbre de Vie. Correspond au Jugement (arcane XX) — le reveil des morts au son de la trompette, la resurrection par le Feu de l'Esprit. Le Feu de Shin descend des hauteurs spirituelles vers le monde materiel, animant la matiere de l'etincelle divine. Les trois flammes de Shin sont les trois piliers — Rigueur, Equilibre, Misericorde — qui structurent la realite.",
  },

  22: {
    number: 22,
    letter: "\u05EA",
    name: "Tav",
    phoneticValue: "t / th",
    numericalValue: 400,
    meaning:
      "Tav est la vingt-deuxieme et derniere lettre de l'alphabet hebreu, la septieme des lettres doubles. Son nom signifie « marque » ou « signe » — le sceau final, la signature qui authentifie l'oeuvre accomplie. Tav represente l'achevement, la perfection, la verite (Emeth — Aleph-Mem-Tav, premiere, mediane et derniere lettre). Sa valeur numerique (400) est le nombre le plus eleve de l'alphabet standard — le sommet de la manifestation, la totalite du monde materiel. Le Sefer Yetzirah attribue a Tav la domination sur la grace et la laideur, la beaute et la difformite. Le glyphe ancien de Tav etait une croix (X ou +), le signe que Dieu marqua sur le front de Cain pour le proteger, et le signe que l'ange marqua sur le front des justes dans la vision d'Ezechiel. Tav est la lettre de la Fin qui est aussi un Commencement — apres le Tav, on revient a l'Aleph, et le cycle recommence a un niveau superieur. Le Talmud enseigne que Tav est le sceau de la Verite (Emeth) et aussi le sceau de la Mort (Mavet).",
    pathNumber: 22,
    category: "double",
    elementOrPlanetOrZodiac: "Saturn",
    description:
      "Lettre double associee a Saturne. Relie Yesod (Fondement) a Malkuth (Royaume) — le dernier sentier de l'Arbre de Vie, celui qui ancre le monde spirituel dans la realite materielle. Correspond au Monde (arcane XXI) — la danse cosmique de l'accomplissement, la totalite revelee. Saturne est le gardien du seuil, la planete des limites et de la structure, celle qui cristallise l'esprit en matiere. En tant que lettre double, Tav oscille entre grace et laideur — le sceau final peut etre celui de la perfection ou de l'imperfection.",
  },
} as const satisfies Record<number, HebrewLetter>;
