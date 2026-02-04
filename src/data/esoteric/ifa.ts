/**
 * Ifa — 256 Odu
 *
 * Complete corpus of the 256 Odu of Ifa divination system.
 * The Ifa system uses 8 binary digits (2^8 = 256) — a perfect 1:1 mapping with a QRNG byte.
 * Each Odu has 4 marks on 2 legs (right + left), where single mark (I) = 1, double mark (II) = 0.
 *
 * The 16 Odu Meji (principal, doubled figures) have enriched corpus (5+ proverbs, 3+ Ese Ifa verses).
 * The 240 Odu Amulu (combinations) have standard corpus (2-3 proverbs, 1 Ese Ifa verse).
 *
 * Binary encoding: bits 7-4 = right leg (first parent), bits 3-0 = left leg (second parent)
 * Parent patterns: Ogbe=1111, Oyeku=0000, Iwori=0110, Odi=1001, Irosun=0101, Owonrin=1010,
 *   Obara=0111, Okanran=1000, Ogunda=0011, Osa=1100, Ika=0010, Oturupon=1101,
 *   Otura=0001, Irete=1110, Ose=0100, Ofun=1011
 *
 * Sources: Bascom (1969), Abimbola (1976, 1977), Fatunmbi (1992)
 * Content in French for the Quantum Oracle application.
 */

import type { Odu } from "./types";

export const ODU: Record<number, Odu> = {
  255: {
    number: 255,
    name: "Ogbe Meji",
    binarySignature: "11111111",
    meaning: "Eji Ogbe est le premier et le plus ancien de tous les Odu. Il represente la lumiere primordiale, la conscience supreme et la prosperite absolue. Ogbe incarne le principe yang pur — toutes les lignes sont ouvertes (simples), symbolisant la clarte sans obstruction. C'est l'Odu de la creation elle-meme, le souffle originel d'Olodumare qui mit l'univers en mouvement. Quand Eji Ogbe apparait, c'est un signe de benediction supreme, d'alignement parfait avec le destin (ori). Le consultant est soutenu par toutes les forces spirituelles. La victoire est assuree si l'on reste dans la droiture. Ogbe enseigne que la vraie puissance reside dans la transparence et la verite. Les ancetres sont presents et favorables. Le chemin est ouvert, sans obstacles.",
    proverbs: [
      "Ogbe rere, ola ni ojo — Ogbe est doux, demain sera un jour de richesse",
      "Eni ti Ogun ba da si, ohun gbogbo yoo da — Celui que Dieu soutient, tout lui reussira",
      "Igi gogoro nla ti o wuwo, ti ko sese, ohun ara re ni — Le grand arbre qui ne tombe pas se tient par sa propre force",
      "Iwa rere leso eniyan — Le bon caractere est le plus bel ornement de l'etre humain",
      "Otito ni ipa, iro ni abuku — La verite a la force, le mensonge porte la honte",
      "Ogbe lo da ile aye — C'est Ogbe qui fonda le monde terrestre"
    ],
    eseIfaVerses: [
      "Au commencement, quand le ciel et la terre n'etaient pas encore separes, Olodumare appela Ogbe pour porter la lumiere dans l'obscurite primordiale. Ogbe descendit avec seize noix de palme sacrees et les planta aux quatre coins du monde naissant. De chaque noix jaillit un palmier dont les racines ancrerent la terre et dont la cime toucha le ciel. Ainsi fut etabli Igba Iwa, le calebassier de l'existence, par la grace d'Ogbe. Les Irunmole celebrerent en chantant et Orunmila declara que quiconque marcherait dans la lumiere d'Ogbe ne connaitrait jamais les tenebres de l'oubli.",
      "Ogbe consulta Ifa avant de voyager vers la cite des immortels. On lui prescrivit d'offrir un coq blanc et de l'huile de palme au carrefour. Il obeit et sur son chemin il rencontra Eshu qui lui ouvrit la route. Dans la cite il recut le secret du destin et revint parmi les hommes pour enseigner la divination. Depuis ce jour, Ogbe est considere comme le pere de la sagesse divinatoire et le gardien de toute connaissance sacree. Les babalawo l'invoquent en premier lors de chaque consultation.",
      "Un roi orgueilleux refusa d'ecouter le conseil d'Ogbe et perdit son royaume en une nuit. Un paysan humble suivit les prescriptions d'Ogbe et devint le nouveau roi. Cet ese enseigne que la grandeur sans humilite est une citadelle batie sur le sable, tandis que l'humilite avec la sagesse est un rocher indestructible. Ogbe dit : « La couronne ne fait pas le roi — c'est le caractere qui fait le roi. »"
    ],
    orisha: "Orunmila",
    prescriptions: "Offrir un coq blanc, de l'huile de palme et du miel. Porter du blanc. Consulter regulierement Ifa. Pratiquer la generosite envers les aines.",
    interdictions: "Ne pas mentir. Eviter l'orgueil et l'arrogance. Ne pas manger de l'igname nouveau avant les ceremonies. Ne pas tourner le dos aux ancetres.",
    element: "Feu",
    correspondences: { rank: 1, hexagramYiJing: 64, geomancy: 15 },
  },
  240: {
    number: 240,
    name: "Ogbe-Oyeku",
    binarySignature: "11110000",
    meaning: "Ogbe-Oyeku est un Odu de rencontre entre la lumiere et la prosperite et les mysteres et la mort-renaissance. Quand Ogbe (la clarte) croise Oyeku (la profondeur), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ogbe l'invite a ouvrir les chemins, Oyeku le pousse a honorer les ancetres. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la benediction supreme et la protection ancestrale simultanement, a condition de ne ceder ni a l'orgueil spirituel ni a la peur de l'inconnu.",
    proverbs: [
      "Eni a bi ni ogbe, eni a gbe ni oyeku — Celui qui est ne dans la lumiere et la prosperite, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogbe ati oyeku, yoo mo aye — Celui qui connait la clarte et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Oyeku en consultation. On lui prescrivit de reconcilier la clarte avec la profondeur pour sauver son peuple. Il comprit que ouvrir les chemins sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Ouvrir les chemins en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Oyeku.",
    interdictions: "Eviter l'orgueil spirituel et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 17, hexagramYiJing: 61, geomancy: 15 },
  },
  246: {
    number: 246,
    name: "Ogbe-Iwori",
    binarySignature: "11110110",
    meaning: "Dans Ogbe-Iwori, le signal quantique revele l'intersection de la lumiere et la prosperite et la vision interieure. Cet Odu apparait quand le consultant a besoin de combiner la clarte et la lucidite pour resoudre une situation complexe. La jambe droite porte le message de Ogbe: ouvrir les chemins. La jambe gauche complete avec Iwori: mediter et observer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'orgueil spirituel si le consultant penche trop a droite, ou dans l'auto-illusion s'il penche trop a gauche. L'equilibre est la cle, et la benediction supreme s'unit a la clairvoyance pour guider le pas du consultant.",
    proverbs: [
      "Ogbe-Iwori: oju to ba ri, enu a wi — Ogbe-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogbe-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de la vision interieure. Le voyageur devait ouvrir les chemins tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Ouvrir les chemins en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Iwori.",
    interdictions: "Eviter l'orgueil spirituel et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 18, hexagramYiJing: 62, geomancy: 15 },
  },
  249: {
    number: 249,
    name: "Ogbe-Odi",
    binarySignature: "11111001",
    meaning: "Ogbe-Odi tisse ensemble les fils de la lumiere et la prosperite et la creation et la fertilite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la clarte est la force de la main droite, la receptivite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ouvrir les chemins avec conscience et de nourrir et creer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la benediction supreme rencontre l'abondance creatrice. Mais attention : l'orgueil spirituel et la sterilite emotionnelle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ogbe so fun Odi: \"Ise owo eni la fi n deni girigiri\" — Ogbe dit a Odi: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogbe, a ma ko odi — Quand on va vers la lumiere et la prosperite, on apprend la receptivite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Odi en consultation. On lui prescrivit de reconcilier la clarte avec la receptivite pour sauver son peuple. Il comprit que ouvrir les chemins sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Ouvrir les chemins en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Odi.",
    interdictions: "Eviter l'orgueil spirituel et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 19, hexagramYiJing: 63, geomancy: 15 },
  },
  245: {
    number: 245,
    name: "Ogbe-Irosun",
    binarySignature: "11110101",
    meaning: "L'apparition de Ogbe-Irosun dans une consultation d'Ifa signale un moment ou la lumiere et la prosperite et le sang et la lignee convergent dans la vie du consultant. Ogbe apporte la clarte et la capacite de ouvrir les chemins. Irosun complete avec la loyaute et l'imperatif de honorer sa lignee. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogbe seul ni Irosun seul, mais danser entre les deux comme l'equilibriste sur son fil. la benediction supreme et la continuite ancestrale sont les fruits de cette danse, tandis que l'orgueil spirituel et la trahison familiale sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni ogbe, eni a gbe ni irosun — Celui qui est ne dans la lumiere et la prosperite, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogbe ati irosun, yoo mo aye — Celui qui connait la clarte et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Ogbe-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de le sang et la lignee. Le voyageur devait ouvrir les chemins tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Ouvrir les chemins en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Irosun.",
    interdictions: "Eviter l'orgueil spirituel et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 20, hexagramYiJing: 62, geomancy: 15 },
  },
  250: {
    number: 250,
    name: "Ogbe-Owonrin",
    binarySignature: "11111010",
    meaning: "Ogbe-Owonrin combine l'energie de la lumiere et la prosperite avec celle de le chaos et le changement. Cet Odu revele une situation ou la clarte et l'adaptabilite doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogbe) apporte la benediction supreme, tandis que la jambe gauche (Owonrin) apporte la transformation positive. Le consultant est invite a ouvrir les chemins tout en sachant embrasser le changement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'orgueil spirituel ou de l'instabilite chronique. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ogbe-Owonrin: oju to ba ri, enu a wi — Ogbe-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Owonrin en consultation. On lui prescrivit de reconcilier la clarte avec l'adaptabilite pour sauver son peuple. Il comprit que ouvrir les chemins sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Ouvrir les chemins en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Owonrin.",
    interdictions: "Eviter l'orgueil spirituel et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 21, hexagramYiJing: 63, geomancy: 15 },
  },
  247: {
    number: 247,
    name: "Ogbe-Obara",
    binarySignature: "11110111",
    meaning: "Ogbe-Obara est un Odu de rencontre entre la lumiere et la prosperite et la parole et la richesse. Quand Ogbe (la clarte) croise Obara (l'eloquence), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ogbe l'invite a ouvrir les chemins, Obara le pousse a parler avec pouvoir. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la benediction supreme et la prosperite par la parole simultanement, a condition de ne ceder ni a l'orgueil spirituel ni a les paroles vaines.",
    proverbs: [
      "Ogbe so fun Obara: \"Ise owo eni la fi n deni girigiri\" — Ogbe dit a Obara: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogbe, a ma ko obara — Quand on va vers la lumiere et la prosperite, on apprend l'eloquence"
    ],
    eseIfaVerses: [
      "Ogbe-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de la parole et la richesse. Le voyageur devait ouvrir les chemins tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Ouvrir les chemins en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Obara.",
    interdictions: "Eviter l'orgueil spirituel et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 22, hexagramYiJing: 62, geomancy: 15 },
  },
  248: {
    number: 248,
    name: "Ogbe-Okanran",
    binarySignature: "11111000",
    meaning: "Dans Ogbe-Okanran, le signal quantique revele l'intersection de la lumiere et la prosperite et le courage et la verite. Cet Odu apparait quand le consultant a besoin de combiner la clarte et l'honnetete pour resoudre une situation complexe. La jambe droite porte le message de Ogbe: ouvrir les chemins. La jambe gauche complete avec Okanran: affronter la verite. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'orgueil spirituel si le consultant penche trop a droite, ou dans la brutalite inutile s'il penche trop a gauche. L'equilibre est la cle, et la benediction supreme s'unit a le courage du coeur pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni ogbe, eni a gbe ni okanran — Celui qui est ne dans la lumiere et la prosperite, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogbe ati okanran, yoo mo aye — Celui qui connait la clarte et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Okanran en consultation. On lui prescrivit de reconcilier la clarte avec l'honnetete pour sauver son peuple. Il comprit que ouvrir les chemins sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Ouvrir les chemins en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Okanran.",
    interdictions: "Eviter l'orgueil spirituel et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 23, hexagramYiJing: 63, geomancy: 15 },
  },
  243: {
    number: 243,
    name: "Ogbe-Ogunda",
    binarySignature: "11110011",
    meaning: "Ogbe-Ogunda tisse ensemble les fils de la lumiere et la prosperite et le fer et l'ouverture des chemins dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la clarte est la force de la main droite, la determination est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ouvrir les chemins avec conscience et de debroussailler et avancer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la benediction supreme rencontre la voie ouverte. Mais attention : l'orgueil spirituel et la violence destructrice guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ogbe-Ogunda: oju to ba ri, enu a wi — Ogbe-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogbe-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de le fer et l'ouverture des chemins. Le voyageur devait ouvrir les chemins tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Ouvrir les chemins en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Ogunda.",
    interdictions: "Eviter l'orgueil spirituel et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 24, hexagramYiJing: 61, geomancy: 15 },
  },
  252: {
    number: 252,
    name: "Ogbe-Osa",
    binarySignature: "11111100",
    meaning: "L'apparition de Ogbe-Osa dans une consultation d'Ifa signale un moment ou la lumiere et la prosperite et les forces occultes et les tempetes convergent dans la vie du consultant. Ogbe apporte la clarte et la capacite de ouvrir les chemins. Osa complete avec la vigilance et l'imperatif de se proteger spirituellement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogbe seul ni Osa seul, mais danser entre les deux comme l'equilibriste sur son fil. la benediction supreme et le pouvoir feminin sacre sont les fruits de cette danse, tandis que l'orgueil spirituel et la sorcellerie negligee sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ogbe so fun Osa: \"Ise owo eni la fi n deni girigiri\" — Ogbe dit a Osa: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogbe, a ma ko osa — Quand on va vers la lumiere et la prosperite, on apprend la vigilance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Osa en consultation. On lui prescrivit de reconcilier la clarte avec la vigilance pour sauver son peuple. Il comprit que ouvrir les chemins sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Ouvrir les chemins en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Osa.",
    interdictions: "Eviter l'orgueil spirituel et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 25, hexagramYiJing: 64, geomancy: 15 },
  },
  242: {
    number: 242,
    name: "Ogbe-Ika",
    binarySignature: "11110010",
    meaning: "Ogbe-Ika combine l'energie de la lumiere et la prosperite avec celle de la ruse et la medecine. Cet Odu revele une situation ou la clarte et la patience doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogbe) apporte la benediction supreme, tandis que la jambe gauche (Ika) apporte la guerison par la sagesse. Le consultant est invite a ouvrir les chemins tout en sachant observer et attendre. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'orgueil spirituel ou de la traitrise. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ogbe, eni a gbe ni ika — Celui qui est ne dans la lumiere et la prosperite, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogbe ati ika, yoo mo aye — Celui qui connait la clarte et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Ogbe-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de la ruse et la medecine. Le voyageur devait ouvrir les chemins tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Ouvrir les chemins en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Ika.",
    interdictions: "Eviter l'orgueil spirituel et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 26, hexagramYiJing: 61, geomancy: 15 },
  },
  253: {
    number: 253,
    name: "Ogbe-Oturupon",
    binarySignature: "11111101",
    meaning: "Ogbe-Oturupon est un Odu de rencontre entre la lumiere et la prosperite et la maladie et la guerison. Quand Ogbe (la clarte) croise Oturupon (la resilience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ogbe l'invite a ouvrir les chemins, Oturupon le pousse a soigner corps et ame. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la benediction supreme et la sante retrouvee simultanement, a condition de ne ceder ni a l'orgueil spirituel ni a la negligence sanitaire.",
    proverbs: [
      "Ogbe-Oturupon: oju to ba ri, enu a wi — Ogbe-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Oturupon en consultation. On lui prescrivit de reconcilier la clarte avec la resilience pour sauver son peuple. Il comprit que ouvrir les chemins sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Ouvrir les chemins en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Oturupon.",
    interdictions: "Eviter l'orgueil spirituel et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 27, hexagramYiJing: 64, geomancy: 15 },
  },
  241: {
    number: 241,
    name: "Ogbe-Otura",
    binarySignature: "11110001",
    meaning: "Dans Ogbe-Otura, le signal quantique revele l'intersection de la lumiere et la prosperite et la mystique et la divination. Cet Odu apparait quand le consultant a besoin de combiner la clarte et la spiritualite pour resoudre une situation complexe. La jambe droite porte le message de Ogbe: ouvrir les chemins. La jambe gauche complete avec Otura: ecouter les signes divins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'orgueil spirituel si le consultant penche trop a droite, ou dans le fanatisme religieux s'il penche trop a gauche. L'equilibre est la cle, et la benediction supreme s'unit a la revelation mystique pour guider le pas du consultant.",
    proverbs: [
      "Ogbe so fun Otura: \"Ise owo eni la fi n deni girigiri\" — Ogbe dit a Otura: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogbe, a ma ko otura — Quand on va vers la lumiere et la prosperite, on apprend la spiritualite"
    ],
    eseIfaVerses: [
      "Ogbe-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de la mystique et la divination. Le voyageur devait ouvrir les chemins tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Ouvrir les chemins en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Otura.",
    interdictions: "Eviter l'orgueil spirituel et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 28, hexagramYiJing: 61, geomancy: 15 },
  },
  254: {
    number: 254,
    name: "Ogbe-Irete",
    binarySignature: "11111110",
    meaning: "Ogbe-Irete tisse ensemble les fils de la lumiere et la prosperite et l'endurance et la pression dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la clarte est la force de la main droite, la perseverance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ouvrir les chemins avec conscience et de resister et perseverer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la benediction supreme rencontre la force interieure. Mais attention : l'orgueil spirituel et l'obstination aveugle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni ogbe, eni a gbe ni irete — Celui qui est ne dans la lumiere et la prosperite, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogbe ati irete, yoo mo aye — Celui qui connait la clarte et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Irete en consultation. On lui prescrivit de reconcilier la clarte avec la perseverance pour sauver son peuple. Il comprit que ouvrir les chemins sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Ouvrir les chemins en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Irete.",
    interdictions: "Eviter l'orgueil spirituel et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 29, hexagramYiJing: 64, geomancy: 15 },
  },
  244: {
    number: 244,
    name: "Ogbe-Ose",
    binarySignature: "11110100",
    meaning: "L'apparition de Ogbe-Ose dans une consultation d'Ifa signale un moment ou la lumiere et la prosperite et la beaute et l'enchantement convergent dans la vie du consultant. Ogbe apporte la clarte et la capacite de ouvrir les chemins. Ose complete avec la seduction et l'imperatif de cultiver la beaute. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogbe seul ni Ose seul, mais danser entre les deux comme l'equilibriste sur son fil. la benediction supreme et l'amour et l'harmonie sont les fruits de cette danse, tandis que l'orgueil spirituel et la vanite superficielle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ogbe-Ose: oju to ba ri, enu a wi — Ogbe-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogbe-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la lumiere et la prosperite croisait celle de la beaute et l'enchantement. Le voyageur devait ouvrir les chemins tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Ouvrir les chemins en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Ose.",
    interdictions: "Eviter l'orgueil spirituel et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 30, hexagramYiJing: 62, geomancy: 15 },
  },
  251: {
    number: 251,
    name: "Ogbe-Ofun",
    binarySignature: "11111011",
    meaning: "Ogbe-Ofun combine l'energie de la lumiere et la prosperite avec celle de la purete et le renouveau. Cet Odu revele une situation ou la clarte et la purete doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogbe) apporte la benediction supreme, tandis que la jambe gauche (Ofun) apporte la renaissance spirituelle. Le consultant est invite a ouvrir les chemins tout en sachant purifier et recommencer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'orgueil spirituel ou de le refus du changement. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ogbe so fun Ofun: \"Ise owo eni la fi n deni girigiri\" — Ogbe dit a Ofun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogbe, a ma ko ofun — Quand on va vers la lumiere et la prosperite, on apprend la purete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogbe-Ofun en consultation. On lui prescrivit de reconcilier la clarte avec la purete pour sauver son peuple. Il comprit que ouvrir les chemins sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogbe et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Ouvrir les chemins en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogbe et Ofun.",
    interdictions: "Eviter l'orgueil spirituel et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 31, hexagramYiJing: 63, geomancy: 15 },
  },
  15: {
    number: 15,
    name: "Oyeku-Ogbe",
    binarySignature: "00001111",
    meaning: "Oyeku-Ogbe est un Odu de rencontre entre les mysteres et la mort-renaissance et la lumiere et la prosperite. Quand Oyeku (la profondeur) croise Ogbe (la clarte), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oyeku l'invite a honorer les ancetres, Ogbe le pousse a ouvrir les chemins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la protection ancestrale et la benediction supreme simultanement, a condition de ne ceder ni a la peur de l'inconnu ni a l'orgueil spirituel.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni ogbe — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans la lumiere et la prosperite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati ogbe, yoo mo aye — Celui qui connait la profondeur et la clarte connait le monde"
    ],
    eseIfaVerses: [
      "Oyeku-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la lumiere et la prosperite. Le voyageur devait honorer les ancetres tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Honorer les ancetres en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Ogbe.",
    interdictions: "Eviter la peur de l'inconnu et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 32, hexagramYiJing: 4, geomancy: 0 },
  },
  0: {
    number: 0,
    name: "Oyeku Meji",
    binarySignature: "00000000",
    meaning: "Oyeku Meji est le deuxieme Odu, le complement parfait d'Ogbe. Il represente l'obscurite, la nuit, la mort et la renaissance. Toutes ses lignes sont fermees (doubles), incarnant le principe yin absolu, la receptivite totale et le mystere insondable. Oyeku est le gardien du passage entre les mondes, l'Odu des ancetres (Egungun) et de la memoire ancestrale. Il ne faut pas le craindre : la nuit precede toujours l'aube, et la mort est le seuil d'une nouvelle naissance. Oyeku enseigne que ce qui semble etre une fin est en realite un commencement. Le consultant traverse une periode de gestation spirituelle profonde. Les forces invisibles travaillent dans l'ombre pour preparer une transformation majeure.",
    proverbs: [
      "Oyeku dudu bi eru, sugbon ola wa ninu re — Oyeku est noir comme le charbon, mais la richesse est en lui",
      "Iku to pa baba re, iku naa yoo pa e — La mort qui a pris ton pere te prendra aussi un jour",
      "Ojo dudu ko ni ki a ma r'ojo — Le nuage noir n'empeche pas la pluie de tomber",
      "Eni to sunkun lana, yoo rerin loni — Celui qui pleurait hier rira aujourd'hui",
      "Oku orun ni o m'ale rin — C'est le defunt qui connait le chemin de la nuit",
      "Bi a ba ku a a tun bi — Quand on meurt, on renait"
    ],
    eseIfaVerses: [
      "Quand la mort fut envoyee sur terre par Olodumare, elle ne savait pas ou aller. Oyeku lui montra le chemin et lui enseigna le cycle eternel : naitre, vivre, mourir, renaitre. La mort pleura car elle comprit qu'elle n'etait pas une fin mais un passage. Oyeku lui dit : « Tu es la porte, pas le mur. Tu es le pont, pas l'abime. » Depuis ce jour, les Yoruba ne craignent pas la mort mais la respectent comme une messagere de transformation. Les ceremonies d'Egungun celebrent cette verite revealee par Oyeku.",
      "Un chasseur perdu dans la foret la nuit implora Oyeku. L'Odu lui envoya une luciole qui le guida vers un village. La le chasseur decouvrit une source d'eau sacree qui guerissait toutes les maladies. Il revint chez lui avec cette connaissance et devint le plus grand guerisseur de sa generation. Oyeku enseigne que c'est dans les moments les plus sombres que l'on trouve les tresors les plus precieux, a condition de ne pas ceder a la panique et de garder les yeux ouverts dans l'obscurite.",
      "La lune consulta Ifa et obtint Oyeku Meji. On lui dit qu'elle regnerait sur la nuit et qu'elle eclairrait le chemin des voyageurs nocturnes. Elle offrit les sacrifices prescrits et recut le pouvoir de controler les marees et les cycles feminins. Depuis ce jour, Oyeku et la lune sont lies dans la tradition d'Ifa, rappelant que meme dans la plus grande obscurite, une lumiere douce persiste pour guider ceux qui savent regarder."
    ],
    orisha: "Egungun",
    prescriptions: "Offrir un bouc noir, du gin et des noix de cola ameres. Honorer les ancetres avec des offrandes de nourriture. Mediter dans l'obscurite. Porter du noir ou du violet sombre.",
    interdictions: "Ne pas negliger les ceremonies funeraires. Eviter de sortir a minuit sans protection spirituelle. Ne pas manquer de respect aux personnes agees. Ne pas reveler les secrets des morts.",
    element: "Terre",
    correspondences: { rank: 2, hexagramYiJing: 1, geomancy: 0 },
  },
  6: {
    number: 6,
    name: "Oyeku-Iwori",
    binarySignature: "00000110",
    meaning: "Oyeku-Iwori tisse ensemble les fils de les mysteres et la mort-renaissance et la vision interieure dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la profondeur est la force de la main droite, la lucidite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de honorer les ancetres avec conscience et de mediter et observer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la protection ancestrale rencontre la clairvoyance. Mais attention : la peur de l'inconnu et l'auto-illusion guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Oyeku so fun Iwori: \"Ise owo eni la fi n deni girigiri\" — Oyeku dit a Iwori: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oyeku, a ma ko iwori — Quand on va vers les mysteres et la mort-renaissance, on apprend la lucidite"
    ],
    eseIfaVerses: [
      "Oyeku-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la vision interieure. Le voyageur devait honorer les ancetres tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Honorer les ancetres en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Iwori.",
    interdictions: "Eviter la peur de l'inconnu et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 33, hexagramYiJing: 2, geomancy: 0 },
  },
  9: {
    number: 9,
    name: "Oyeku-Odi",
    binarySignature: "00001001",
    meaning: "L'apparition de Oyeku-Odi dans une consultation d'Ifa signale un moment ou les mysteres et la mort-renaissance et la creation et la fertilite convergent dans la vie du consultant. Oyeku apporte la profondeur et la capacite de honorer les ancetres. Odi complete avec la receptivite et l'imperatif de nourrir et creer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oyeku seul ni Odi seul, mais danser entre les deux comme l'equilibriste sur son fil. la protection ancestrale et l'abondance creatrice sont les fruits de cette danse, tandis que la peur de l'inconnu et la sterilite emotionnelle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni odi — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans la creation et la fertilite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati odi, yoo mo aye — Celui qui connait la profondeur et la receptivite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Odi en consultation. On lui prescrivit de reconcilier la profondeur avec la receptivite pour sauver son peuple. Il comprit que honorer les ancetres sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Honorer les ancetres en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Odi.",
    interdictions: "Eviter la peur de l'inconnu et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 34, hexagramYiJing: 3, geomancy: 0 },
  },
  5: {
    number: 5,
    name: "Oyeku-Irosun",
    binarySignature: "00000101",
    meaning: "Oyeku-Irosun combine l'energie de les mysteres et la mort-renaissance avec celle de le sang et la lignee. Cet Odu revele une situation ou la profondeur et la loyaute doivent s'harmoniser pour que le consultant avance. La jambe droite (Oyeku) apporte la protection ancestrale, tandis que la jambe gauche (Irosun) apporte la continuite ancestrale. Le consultant est invite a honorer les ancetres tout en sachant honorer sa lignee. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la peur de l'inconnu ou de la trahison familiale. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Oyeku-Irosun: oju to ba ri, enu a wi — Oyeku-Irosun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Oyeku-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de le sang et la lignee. Le voyageur devait honorer les ancetres tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Honorer les ancetres en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Irosun.",
    interdictions: "Eviter la peur de l'inconnu et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 35, hexagramYiJing: 2, geomancy: 0 },
  },
  10: {
    number: 10,
    name: "Oyeku-Owonrin",
    binarySignature: "00001010",
    meaning: "Oyeku-Owonrin est un Odu de rencontre entre les mysteres et la mort-renaissance et le chaos et le changement. Quand Oyeku (la profondeur) croise Owonrin (l'adaptabilite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oyeku l'invite a honorer les ancetres, Owonrin le pousse a embrasser le changement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la protection ancestrale et la transformation positive simultanement, a condition de ne ceder ni a la peur de l'inconnu ni a l'instabilite chronique.",
    proverbs: [
      "Oyeku so fun Owonrin: \"Ise owo eni la fi n deni girigiri\" — Oyeku dit a Owonrin: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oyeku, a ma ko owonrin — Quand on va vers les mysteres et la mort-renaissance, on apprend l'adaptabilite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Owonrin en consultation. On lui prescrivit de reconcilier la profondeur avec l'adaptabilite pour sauver son peuple. Il comprit que honorer les ancetres sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Honorer les ancetres en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Owonrin.",
    interdictions: "Eviter la peur de l'inconnu et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 36, hexagramYiJing: 3, geomancy: 0 },
  },
  7: {
    number: 7,
    name: "Oyeku-Obara",
    binarySignature: "00000111",
    meaning: "Dans Oyeku-Obara, le signal quantique revele l'intersection de les mysteres et la mort-renaissance et la parole et la richesse. Cet Odu apparait quand le consultant a besoin de combiner la profondeur et l'eloquence pour resoudre une situation complexe. La jambe droite porte le message de Oyeku: honorer les ancetres. La jambe gauche complete avec Obara: parler avec pouvoir. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la peur de l'inconnu si le consultant penche trop a droite, ou dans les paroles vaines s'il penche trop a gauche. L'equilibre est la cle, et la protection ancestrale s'unit a la prosperite par la parole pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni obara — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans la parole et la richesse",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati obara, yoo mo aye — Celui qui connait la profondeur et l'eloquence connait le monde"
    ],
    eseIfaVerses: [
      "Oyeku-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la parole et la richesse. Le voyageur devait honorer les ancetres tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Honorer les ancetres en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Obara.",
    interdictions: "Eviter la peur de l'inconnu et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 37, hexagramYiJing: 2, geomancy: 0 },
  },
  8: {
    number: 8,
    name: "Oyeku-Okanran",
    binarySignature: "00001000",
    meaning: "Oyeku-Okanran tisse ensemble les fils de les mysteres et la mort-renaissance et le courage et la verite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la profondeur est la force de la main droite, l'honnetete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de honorer les ancetres avec conscience et de affronter la verite avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la protection ancestrale rencontre le courage du coeur. Mais attention : la peur de l'inconnu et la brutalite inutile guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Oyeku-Okanran: oju to ba ri, enu a wi — Oyeku-Okanran: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Okanran en consultation. On lui prescrivit de reconcilier la profondeur avec l'honnetete pour sauver son peuple. Il comprit que honorer les ancetres sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Honorer les ancetres en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Okanran.",
    interdictions: "Eviter la peur de l'inconnu et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 38, hexagramYiJing: 3, geomancy: 0 },
  },
  3: {
    number: 3,
    name: "Oyeku-Ogunda",
    binarySignature: "00000011",
    meaning: "L'apparition de Oyeku-Ogunda dans une consultation d'Ifa signale un moment ou les mysteres et la mort-renaissance et le fer et l'ouverture des chemins convergent dans la vie du consultant. Oyeku apporte la profondeur et la capacite de honorer les ancetres. Ogunda complete avec la determination et l'imperatif de debroussailler et avancer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oyeku seul ni Ogunda seul, mais danser entre les deux comme l'equilibriste sur son fil. la protection ancestrale et la voie ouverte sont les fruits de cette danse, tandis que la peur de l'inconnu et la violence destructrice sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Oyeku so fun Ogunda: \"Ise owo eni la fi n deni girigiri\" — Oyeku dit a Ogunda: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oyeku, a ma ko ogunda — Quand on va vers les mysteres et la mort-renaissance, on apprend la determination"
    ],
    eseIfaVerses: [
      "Oyeku-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de le fer et l'ouverture des chemins. Le voyageur devait honorer les ancetres tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Honorer les ancetres en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Ogunda.",
    interdictions: "Eviter la peur de l'inconnu et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 39, hexagramYiJing: 1, geomancy: 0 },
  },
  12: {
    number: 12,
    name: "Oyeku-Osa",
    binarySignature: "00001100",
    meaning: "Oyeku-Osa combine l'energie de les mysteres et la mort-renaissance avec celle de les forces occultes et les tempetes. Cet Odu revele une situation ou la profondeur et la vigilance doivent s'harmoniser pour que le consultant avance. La jambe droite (Oyeku) apporte la protection ancestrale, tandis que la jambe gauche (Osa) apporte le pouvoir feminin sacre. Le consultant est invite a honorer les ancetres tout en sachant se proteger spirituellement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la peur de l'inconnu ou de la sorcellerie negligee. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni osa — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans les forces occultes et les tempetes",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati osa, yoo mo aye — Celui qui connait la profondeur et la vigilance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Osa en consultation. On lui prescrivit de reconcilier la profondeur avec la vigilance pour sauver son peuple. Il comprit que honorer les ancetres sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Honorer les ancetres en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Osa.",
    interdictions: "Eviter la peur de l'inconnu et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 40, hexagramYiJing: 4, geomancy: 0 },
  },
  2: {
    number: 2,
    name: "Oyeku-Ika",
    binarySignature: "00000010",
    meaning: "Oyeku-Ika est un Odu de rencontre entre les mysteres et la mort-renaissance et la ruse et la medecine. Quand Oyeku (la profondeur) croise Ika (la patience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oyeku l'invite a honorer les ancetres, Ika le pousse a observer et attendre. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la protection ancestrale et la guerison par la sagesse simultanement, a condition de ne ceder ni a la peur de l'inconnu ni a la traitrise.",
    proverbs: [
      "Oyeku-Ika: oju to ba ri, enu a wi — Oyeku-Ika: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Oyeku-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la ruse et la medecine. Le voyageur devait honorer les ancetres tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Honorer les ancetres en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Ika.",
    interdictions: "Eviter la peur de l'inconnu et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 41, hexagramYiJing: 1, geomancy: 0 },
  },
  13: {
    number: 13,
    name: "Oyeku-Oturupon",
    binarySignature: "00001101",
    meaning: "Dans Oyeku-Oturupon, le signal quantique revele l'intersection de les mysteres et la mort-renaissance et la maladie et la guerison. Cet Odu apparait quand le consultant a besoin de combiner la profondeur et la resilience pour resoudre une situation complexe. La jambe droite porte le message de Oyeku: honorer les ancetres. La jambe gauche complete avec Oturupon: soigner corps et ame. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la peur de l'inconnu si le consultant penche trop a droite, ou dans la negligence sanitaire s'il penche trop a gauche. L'equilibre est la cle, et la protection ancestrale s'unit a la sante retrouvee pour guider le pas du consultant.",
    proverbs: [
      "Oyeku so fun Oturupon: \"Ise owo eni la fi n deni girigiri\" — Oyeku dit a Oturupon: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oyeku, a ma ko oturupon — Quand on va vers les mysteres et la mort-renaissance, on apprend la resilience"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Oturupon en consultation. On lui prescrivit de reconcilier la profondeur avec la resilience pour sauver son peuple. Il comprit que honorer les ancetres sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Honorer les ancetres en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Oturupon.",
    interdictions: "Eviter la peur de l'inconnu et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 42, hexagramYiJing: 4, geomancy: 0 },
  },
  1: {
    number: 1,
    name: "Oyeku-Otura",
    binarySignature: "00000001",
    meaning: "Oyeku-Otura tisse ensemble les fils de les mysteres et la mort-renaissance et la mystique et la divination dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la profondeur est la force de la main droite, la spiritualite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de honorer les ancetres avec conscience et de ecouter les signes divins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la protection ancestrale rencontre la revelation mystique. Mais attention : la peur de l'inconnu et le fanatisme religieux guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni otura — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans la mystique et la divination",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati otura, yoo mo aye — Celui qui connait la profondeur et la spiritualite connait le monde"
    ],
    eseIfaVerses: [
      "Oyeku-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la mystique et la divination. Le voyageur devait honorer les ancetres tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Honorer les ancetres en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Otura.",
    interdictions: "Eviter la peur de l'inconnu et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 43, hexagramYiJing: 1, geomancy: 0 },
  },
  14: {
    number: 14,
    name: "Oyeku-Irete",
    binarySignature: "00001110",
    meaning: "L'apparition de Oyeku-Irete dans une consultation d'Ifa signale un moment ou les mysteres et la mort-renaissance et l'endurance et la pression convergent dans la vie du consultant. Oyeku apporte la profondeur et la capacite de honorer les ancetres. Irete complete avec la perseverance et l'imperatif de resister et perseverer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oyeku seul ni Irete seul, mais danser entre les deux comme l'equilibriste sur son fil. la protection ancestrale et la force interieure sont les fruits de cette danse, tandis que la peur de l'inconnu et l'obstination aveugle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Oyeku-Irete: oju to ba ri, enu a wi — Oyeku-Irete: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Irete en consultation. On lui prescrivit de reconcilier la profondeur avec la perseverance pour sauver son peuple. Il comprit que honorer les ancetres sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Honorer les ancetres en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Irete.",
    interdictions: "Eviter la peur de l'inconnu et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 44, hexagramYiJing: 4, geomancy: 0 },
  },
  4: {
    number: 4,
    name: "Oyeku-Ose",
    binarySignature: "00000100",
    meaning: "Oyeku-Ose combine l'energie de les mysteres et la mort-renaissance avec celle de la beaute et l'enchantement. Cet Odu revele une situation ou la profondeur et la seduction doivent s'harmoniser pour que le consultant avance. La jambe droite (Oyeku) apporte la protection ancestrale, tandis que la jambe gauche (Ose) apporte l'amour et l'harmonie. Le consultant est invite a honorer les ancetres tout en sachant cultiver la beaute. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la peur de l'inconnu ou de la vanite superficielle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Oyeku so fun Ose: \"Ise owo eni la fi n deni girigiri\" — Oyeku dit a Ose: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oyeku, a ma ko ose — Quand on va vers les mysteres et la mort-renaissance, on apprend la seduction"
    ],
    eseIfaVerses: [
      "Oyeku-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les mysteres et la mort-renaissance croisait celle de la beaute et l'enchantement. Le voyageur devait honorer les ancetres tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Honorer les ancetres en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Ose.",
    interdictions: "Eviter la peur de l'inconnu et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 45, hexagramYiJing: 2, geomancy: 0 },
  },
  11: {
    number: 11,
    name: "Oyeku-Ofun",
    binarySignature: "00001011",
    meaning: "Oyeku-Ofun est un Odu de rencontre entre les mysteres et la mort-renaissance et la purete et le renouveau. Quand Oyeku (la profondeur) croise Ofun (la purete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oyeku l'invite a honorer les ancetres, Ofun le pousse a purifier et recommencer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la protection ancestrale et la renaissance spirituelle simultanement, a condition de ne ceder ni a la peur de l'inconnu ni a le refus du changement.",
    proverbs: [
      "Eni a bi ni oyeku, eni a gbe ni ofun — Celui qui est ne dans les mysteres et la mort-renaissance, celui qui vit dans la purete et le renouveau",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oyeku ati ofun, yoo mo aye — Celui qui connait la profondeur et la purete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oyeku-Ofun en consultation. On lui prescrivit de reconcilier la profondeur avec la purete pour sauver son peuple. Il comprit que honorer les ancetres sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oyeku et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Honorer les ancetres en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oyeku et Ofun.",
    interdictions: "Eviter la peur de l'inconnu et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 46, hexagramYiJing: 3, geomancy: 0 },
  },
  111: {
    number: 111,
    name: "Iwori-Ogbe",
    binarySignature: "01101111",
    meaning: "Dans Iwori-Ogbe, le signal quantique revele l'intersection de la vision interieure et la lumiere et la prosperite. Cet Odu apparait quand le consultant a besoin de combiner la lucidite et la clarte pour resoudre une situation complexe. La jambe droite porte le message de Iwori: mediter et observer. La jambe gauche complete avec Ogbe: ouvrir les chemins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'auto-illusion si le consultant penche trop a droite, ou dans l'orgueil spirituel s'il penche trop a gauche. L'equilibre est la cle, et la clairvoyance s'unit a la benediction supreme pour guider le pas du consultant.",
    proverbs: [
      "Iwori-Ogbe: oju to ba ri, enu a wi — Iwori-Ogbe: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Iwori-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de la lumiere et la prosperite. Le voyageur devait mediter et observer tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Mediter et observer en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Ogbe.",
    interdictions: "Eviter l'auto-illusion et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 47, hexagramYiJing: 28, geomancy: 6 },
  },
  96: {
    number: 96,
    name: "Iwori-Oyeku",
    binarySignature: "01100000",
    meaning: "Iwori-Oyeku tisse ensemble les fils de la vision interieure et les mysteres et la mort-renaissance dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la lucidite est la force de la main droite, la profondeur est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de mediter et observer avec conscience et de honorer les ancetres avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la clairvoyance rencontre la protection ancestrale. Mais attention : l'auto-illusion et la peur de l'inconnu guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Iwori so fun Oyeku: \"Ise owo eni la fi n deni girigiri\" — Iwori dit a Oyeku: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re iwori, a ma ko oyeku — Quand on va vers la vision interieure, on apprend la profondeur"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Oyeku en consultation. On lui prescrivit de reconcilier la lucidite avec la profondeur pour sauver son peuple. Il comprit que mediter et observer sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Mediter et observer en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Oyeku.",
    interdictions: "Eviter l'auto-illusion et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 48, hexagramYiJing: 25, geomancy: 6 },
  },
  102: {
    number: 102,
    name: "Iwori Meji",
    binarySignature: "01100110",
    meaning: "Iwori Meji est le troisieme Odu, gardien de la vision interieure et de la conscience profonde. Son motif binaire (0110-0110) evoque deux yeux ouverts au centre d'un visage ferme — la capacite de voir au-dela des apparences. Iwori est l'Odu de l'introspection, de la connaissance de soi et de la clairvoyance. Il revele les verites cachees et les motivations secretes. Quand il apparait, le consultant est invite a regarder en lui-meme plutot qu'a l'exterieur pour trouver les reponses. Iwori enseigne que la veritable sagesse commence par la connaissance de soi. Les illusions se dissipent, les masques tombent. C'est un temps de revelation ou la lucidite remplace la confusion.",
    proverbs: [
      "Iwori wo inu re — Iwori regarde en toi-meme",
      "Oju meji ni a fi n wo ohun kan — C'est avec deux yeux que l'on voit une chose",
      "Eni to mo ara re lo mo ohun gbogbo — Celui qui se connait connait toutes choses",
      "Oju to ba ri, enu a wi — Ce que l'oeil voit, la bouche le dit",
      "Aimo ara eni ni ota eni — L'ignorance de soi est son propre ennemi"
    ],
    eseIfaVerses: [
      "Iwori etait aveugle a la naissance mais voyait les choses invisibles. Les autres Odu se moquaient de lui jusqu'au jour ou il previt une grande inondation. Seuls ceux qui ecouterent Iwori survecurent. Depuis ce jour, les Yoruba savent que la vision interieure surpasse la vision exterieure. Iwori enseigna aux babalawo l'art de lire les signes subtils dans le plateau d'Ifa, ces marques invisibles a l'oeil profane mais eclatantes pour celui dont le troisieme oeil est ouvert.",
      "Une reine consulta Ifa et obtint Iwori Meji. On lui revela que son conseiller le plus fidele la trahissait. Elle refusa d'abord de le croire, mais quand elle regarda avec les yeux d'Iwori — les yeux de l'ame — elle vit la verite. Elle agit avec sagesse, ecarta le traitre sans violence et sauva son royaume. Iwori dit : « Ne juge pas sur les apparences, car le miel peut cacher le poison et l'amertume peut guerir le coeur malade. »",
      "Quand Orunmila descendit sur terre, il porta d'abord Iwori dans son coeur pour pouvoir distinguer les allies des adversaires. Iwori lui donna le pouvoir de voir l'ori (destin interieur) de chaque personne qu'il rencontrait. C'est grace a Iwori que la divination d'Ifa peut reveler le caractere profond du consultant et l'aligner avec son veritable chemin de vie."
    ],
    orisha: "Orunmila",
    prescriptions: "Offrir deux pigeons, du miel et un miroir. Pratiquer la meditation quotidienne. Developper l'intuition par le silence. Porter des vetements indigo.",
    interdictions: "Ne pas espionner autrui. Eviter l'hypocrisie. Ne pas ignorer ses reves. Ne pas juger les autres sur les apparences.",
    element: "Air",
    correspondences: { rank: 3, hexagramYiJing: 26, geomancy: 6 },
  },
  105: {
    number: 105,
    name: "Iwori-Odi",
    binarySignature: "01101001",
    meaning: "Iwori-Odi combine l'energie de la vision interieure avec celle de la creation et la fertilite. Cet Odu revele une situation ou la lucidite et la receptivite doivent s'harmoniser pour que le consultant avance. La jambe droite (Iwori) apporte la clairvoyance, tandis que la jambe gauche (Odi) apporte l'abondance creatrice. Le consultant est invite a mediter et observer tout en sachant nourrir et creer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'auto-illusion ou de la sterilite emotionnelle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Iwori-Odi: oju to ba ri, enu a wi — Iwori-Odi: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Odi en consultation. On lui prescrivit de reconcilier la lucidite avec la receptivite pour sauver son peuple. Il comprit que mediter et observer sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Mediter et observer en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Odi.",
    interdictions: "Eviter l'auto-illusion et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 49, hexagramYiJing: 27, geomancy: 6 },
  },
  101: {
    number: 101,
    name: "Iwori-Irosun",
    binarySignature: "01100101",
    meaning: "Iwori-Irosun est un Odu de rencontre entre la vision interieure et le sang et la lignee. Quand Iwori (la lucidite) croise Irosun (la loyaute), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Iwori l'invite a mediter et observer, Irosun le pousse a honorer sa lignee. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la clairvoyance et la continuite ancestrale simultanement, a condition de ne ceder ni a l'auto-illusion ni a la trahison familiale.",
    proverbs: [
      "Iwori so fun Irosun: \"Ise owo eni la fi n deni girigiri\" — Iwori dit a Irosun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re iwori, a ma ko irosun — Quand on va vers la vision interieure, on apprend la loyaute"
    ],
    eseIfaVerses: [
      "Iwori-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de le sang et la lignee. Le voyageur devait mediter et observer tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Mediter et observer en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Irosun.",
    interdictions: "Eviter l'auto-illusion et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 50, hexagramYiJing: 26, geomancy: 6 },
  },
  106: {
    number: 106,
    name: "Iwori-Owonrin",
    binarySignature: "01101010",
    meaning: "Dans Iwori-Owonrin, le signal quantique revele l'intersection de la vision interieure et le chaos et le changement. Cet Odu apparait quand le consultant a besoin de combiner la lucidite et l'adaptabilite pour resoudre une situation complexe. La jambe droite porte le message de Iwori: mediter et observer. La jambe gauche complete avec Owonrin: embrasser le changement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'auto-illusion si le consultant penche trop a droite, ou dans l'instabilite chronique s'il penche trop a gauche. L'equilibre est la cle, et la clairvoyance s'unit a la transformation positive pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni iwori, eni a gbe ni owonrin — Celui qui est ne dans la vision interieure, celui qui vit dans le chaos et le changement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo iwori ati owonrin, yoo mo aye — Celui qui connait la lucidite et l'adaptabilite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Owonrin en consultation. On lui prescrivit de reconcilier la lucidite avec l'adaptabilite pour sauver son peuple. Il comprit que mediter et observer sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Mediter et observer en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Owonrin.",
    interdictions: "Eviter l'auto-illusion et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 51, hexagramYiJing: 27, geomancy: 6 },
  },
  103: {
    number: 103,
    name: "Iwori-Obara",
    binarySignature: "01100111",
    meaning: "Iwori-Obara tisse ensemble les fils de la vision interieure et la parole et la richesse dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la lucidite est la force de la main droite, l'eloquence est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de mediter et observer avec conscience et de parler avec pouvoir avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la clairvoyance rencontre la prosperite par la parole. Mais attention : l'auto-illusion et les paroles vaines guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Iwori-Obara: oju to ba ri, enu a wi — Iwori-Obara: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Iwori-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de la parole et la richesse. Le voyageur devait mediter et observer tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Mediter et observer en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Obara.",
    interdictions: "Eviter l'auto-illusion et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 52, hexagramYiJing: 26, geomancy: 6 },
  },
  104: {
    number: 104,
    name: "Iwori-Okanran",
    binarySignature: "01101000",
    meaning: "L'apparition de Iwori-Okanran dans une consultation d'Ifa signale un moment ou la vision interieure et le courage et la verite convergent dans la vie du consultant. Iwori apporte la lucidite et la capacite de mediter et observer. Okanran complete avec l'honnetete et l'imperatif de affronter la verite. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Iwori seul ni Okanran seul, mais danser entre les deux comme l'equilibriste sur son fil. la clairvoyance et le courage du coeur sont les fruits de cette danse, tandis que l'auto-illusion et la brutalite inutile sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Iwori so fun Okanran: \"Ise owo eni la fi n deni girigiri\" — Iwori dit a Okanran: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re iwori, a ma ko okanran — Quand on va vers la vision interieure, on apprend l'honnetete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Okanran en consultation. On lui prescrivit de reconcilier la lucidite avec l'honnetete pour sauver son peuple. Il comprit que mediter et observer sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Mediter et observer en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Okanran.",
    interdictions: "Eviter l'auto-illusion et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 53, hexagramYiJing: 27, geomancy: 6 },
  },
  99: {
    number: 99,
    name: "Iwori-Ogunda",
    binarySignature: "01100011",
    meaning: "Iwori-Ogunda combine l'energie de la vision interieure avec celle de le fer et l'ouverture des chemins. Cet Odu revele une situation ou la lucidite et la determination doivent s'harmoniser pour que le consultant avance. La jambe droite (Iwori) apporte la clairvoyance, tandis que la jambe gauche (Ogunda) apporte la voie ouverte. Le consultant est invite a mediter et observer tout en sachant debroussailler et avancer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'auto-illusion ou de la violence destructrice. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni iwori, eni a gbe ni ogunda — Celui qui est ne dans la vision interieure, celui qui vit dans le fer et l'ouverture des chemins",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo iwori ati ogunda, yoo mo aye — Celui qui connait la lucidite et la determination connait le monde"
    ],
    eseIfaVerses: [
      "Iwori-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de le fer et l'ouverture des chemins. Le voyageur devait mediter et observer tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Mediter et observer en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Ogunda.",
    interdictions: "Eviter l'auto-illusion et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 54, hexagramYiJing: 25, geomancy: 6 },
  },
  108: {
    number: 108,
    name: "Iwori-Osa",
    binarySignature: "01101100",
    meaning: "Iwori-Osa est un Odu de rencontre entre la vision interieure et les forces occultes et les tempetes. Quand Iwori (la lucidite) croise Osa (la vigilance), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Iwori l'invite a mediter et observer, Osa le pousse a se proteger spirituellement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la clairvoyance et le pouvoir feminin sacre simultanement, a condition de ne ceder ni a l'auto-illusion ni a la sorcellerie negligee.",
    proverbs: [
      "Iwori-Osa: oju to ba ri, enu a wi — Iwori-Osa: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Osa en consultation. On lui prescrivit de reconcilier la lucidite avec la vigilance pour sauver son peuple. Il comprit que mediter et observer sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Mediter et observer en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Osa.",
    interdictions: "Eviter l'auto-illusion et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 55, hexagramYiJing: 28, geomancy: 6 },
  },
  98: {
    number: 98,
    name: "Iwori-Ika",
    binarySignature: "01100010",
    meaning: "Dans Iwori-Ika, le signal quantique revele l'intersection de la vision interieure et la ruse et la medecine. Cet Odu apparait quand le consultant a besoin de combiner la lucidite et la patience pour resoudre une situation complexe. La jambe droite porte le message de Iwori: mediter et observer. La jambe gauche complete avec Ika: observer et attendre. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'auto-illusion si le consultant penche trop a droite, ou dans la traitrise s'il penche trop a gauche. L'equilibre est la cle, et la clairvoyance s'unit a la guerison par la sagesse pour guider le pas du consultant.",
    proverbs: [
      "Iwori so fun Ika: \"Ise owo eni la fi n deni girigiri\" — Iwori dit a Ika: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re iwori, a ma ko ika — Quand on va vers la vision interieure, on apprend la patience"
    ],
    eseIfaVerses: [
      "Iwori-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de la ruse et la medecine. Le voyageur devait mediter et observer tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Mediter et observer en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Ika.",
    interdictions: "Eviter l'auto-illusion et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 56, hexagramYiJing: 25, geomancy: 6 },
  },
  109: {
    number: 109,
    name: "Iwori-Oturupon",
    binarySignature: "01101101",
    meaning: "Iwori-Oturupon tisse ensemble les fils de la vision interieure et la maladie et la guerison dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la lucidite est la force de la main droite, la resilience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de mediter et observer avec conscience et de soigner corps et ame avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la clairvoyance rencontre la sante retrouvee. Mais attention : l'auto-illusion et la negligence sanitaire guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni iwori, eni a gbe ni oturupon — Celui qui est ne dans la vision interieure, celui qui vit dans la maladie et la guerison",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo iwori ati oturupon, yoo mo aye — Celui qui connait la lucidite et la resilience connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Oturupon en consultation. On lui prescrivit de reconcilier la lucidite avec la resilience pour sauver son peuple. Il comprit que mediter et observer sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Mediter et observer en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Oturupon.",
    interdictions: "Eviter l'auto-illusion et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 57, hexagramYiJing: 28, geomancy: 6 },
  },
  97: {
    number: 97,
    name: "Iwori-Otura",
    binarySignature: "01100001",
    meaning: "L'apparition de Iwori-Otura dans une consultation d'Ifa signale un moment ou la vision interieure et la mystique et la divination convergent dans la vie du consultant. Iwori apporte la lucidite et la capacite de mediter et observer. Otura complete avec la spiritualite et l'imperatif de ecouter les signes divins. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Iwori seul ni Otura seul, mais danser entre les deux comme l'equilibriste sur son fil. la clairvoyance et la revelation mystique sont les fruits de cette danse, tandis que l'auto-illusion et le fanatisme religieux sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Iwori-Otura: oju to ba ri, enu a wi — Iwori-Otura: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Iwori-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de la mystique et la divination. Le voyageur devait mediter et observer tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Mediter et observer en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Otura.",
    interdictions: "Eviter l'auto-illusion et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 58, hexagramYiJing: 25, geomancy: 6 },
  },
  110: {
    number: 110,
    name: "Iwori-Irete",
    binarySignature: "01101110",
    meaning: "Iwori-Irete combine l'energie de la vision interieure avec celle de l'endurance et la pression. Cet Odu revele une situation ou la lucidite et la perseverance doivent s'harmoniser pour que le consultant avance. La jambe droite (Iwori) apporte la clairvoyance, tandis que la jambe gauche (Irete) apporte la force interieure. Le consultant est invite a mediter et observer tout en sachant resister et perseverer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'auto-illusion ou de l'obstination aveugle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Iwori so fun Irete: \"Ise owo eni la fi n deni girigiri\" — Iwori dit a Irete: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re iwori, a ma ko irete — Quand on va vers la vision interieure, on apprend la perseverance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Irete en consultation. On lui prescrivit de reconcilier la lucidite avec la perseverance pour sauver son peuple. Il comprit que mediter et observer sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Mediter et observer en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Irete.",
    interdictions: "Eviter l'auto-illusion et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 59, hexagramYiJing: 28, geomancy: 6 },
  },
  100: {
    number: 100,
    name: "Iwori-Ose",
    binarySignature: "01100100",
    meaning: "Iwori-Ose est un Odu de rencontre entre la vision interieure et la beaute et l'enchantement. Quand Iwori (la lucidite) croise Ose (la seduction), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Iwori l'invite a mediter et observer, Ose le pousse a cultiver la beaute. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la clairvoyance et l'amour et l'harmonie simultanement, a condition de ne ceder ni a l'auto-illusion ni a la vanite superficielle.",
    proverbs: [
      "Eni a bi ni iwori, eni a gbe ni ose — Celui qui est ne dans la vision interieure, celui qui vit dans la beaute et l'enchantement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo iwori ati ose, yoo mo aye — Celui qui connait la lucidite et la seduction connait le monde"
    ],
    eseIfaVerses: [
      "Iwori-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la vision interieure croisait celle de la beaute et l'enchantement. Le voyageur devait mediter et observer tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Mediter et observer en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Ose.",
    interdictions: "Eviter l'auto-illusion et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 60, hexagramYiJing: 26, geomancy: 6 },
  },
  107: {
    number: 107,
    name: "Iwori-Ofun",
    binarySignature: "01101011",
    meaning: "Dans Iwori-Ofun, le signal quantique revele l'intersection de la vision interieure et la purete et le renouveau. Cet Odu apparait quand le consultant a besoin de combiner la lucidite et la purete pour resoudre une situation complexe. La jambe droite porte le message de Iwori: mediter et observer. La jambe gauche complete avec Ofun: purifier et recommencer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'auto-illusion si le consultant penche trop a droite, ou dans le refus du changement s'il penche trop a gauche. L'equilibre est la cle, et la clairvoyance s'unit a la renaissance spirituelle pour guider le pas du consultant.",
    proverbs: [
      "Iwori-Ofun: oju to ba ri, enu a wi — Iwori-Ofun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Iwori-Ofun en consultation. On lui prescrivit de reconcilier la lucidite avec la purete pour sauver son peuple. Il comprit que mediter et observer sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Iwori et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Mediter et observer en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Iwori et Ofun.",
    interdictions: "Eviter l'auto-illusion et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 61, hexagramYiJing: 27, geomancy: 6 },
  },
  159: {
    number: 159,
    name: "Odi-Ogbe",
    binarySignature: "10011111",
    meaning: "Odi-Ogbe tisse ensemble les fils de la creation et la fertilite et la lumiere et la prosperite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la receptivite est la force de la main droite, la clarte est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de nourrir et creer avec conscience et de ouvrir les chemins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'abondance creatrice rencontre la benediction supreme. Mais attention : la sterilite emotionnelle et l'orgueil spirituel guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Odi so fun Ogbe: \"Ise owo eni la fi n deni girigiri\" — Odi dit a Ogbe: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re odi, a ma ko ogbe — Quand on va vers la creation et la fertilite, on apprend la clarte"
    ],
    eseIfaVerses: [
      "Odi-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la lumiere et la prosperite. Le voyageur devait nourrir et creer tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Nourrir et creer en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Ogbe.",
    interdictions: "Eviter la sterilite emotionnelle et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 62, hexagramYiJing: 40, geomancy: 9 },
  },
  144: {
    number: 144,
    name: "Odi-Oyeku",
    binarySignature: "10010000",
    meaning: "L'apparition de Odi-Oyeku dans une consultation d'Ifa signale un moment ou la creation et la fertilite et les mysteres et la mort-renaissance convergent dans la vie du consultant. Odi apporte la receptivite et la capacite de nourrir et creer. Oyeku complete avec la profondeur et l'imperatif de honorer les ancetres. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Odi seul ni Oyeku seul, mais danser entre les deux comme l'equilibriste sur son fil. l'abondance creatrice et la protection ancestrale sont les fruits de cette danse, tandis que la sterilite emotionnelle et la peur de l'inconnu sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni odi, eni a gbe ni oyeku — Celui qui est ne dans la creation et la fertilite, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo odi ati oyeku, yoo mo aye — Celui qui connait la receptivite et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Oyeku en consultation. On lui prescrivit de reconcilier la receptivite avec la profondeur pour sauver son peuple. Il comprit que nourrir et creer sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Nourrir et creer en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Oyeku.",
    interdictions: "Eviter la sterilite emotionnelle et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 63, hexagramYiJing: 37, geomancy: 9 },
  },
  150: {
    number: 150,
    name: "Odi-Iwori",
    binarySignature: "10010110",
    meaning: "Odi-Iwori combine l'energie de la creation et la fertilite avec celle de la vision interieure. Cet Odu revele une situation ou la receptivite et la lucidite doivent s'harmoniser pour que le consultant avance. La jambe droite (Odi) apporte l'abondance creatrice, tandis que la jambe gauche (Iwori) apporte la clairvoyance. Le consultant est invite a nourrir et creer tout en sachant mediter et observer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sterilite emotionnelle ou de l'auto-illusion. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Odi-Iwori: oju to ba ri, enu a wi — Odi-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Odi-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la vision interieure. Le voyageur devait nourrir et creer tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Nourrir et creer en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Iwori.",
    interdictions: "Eviter la sterilite emotionnelle et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 64, hexagramYiJing: 38, geomancy: 9 },
  },
  153: {
    number: 153,
    name: "Odi Meji",
    binarySignature: "10011001",
    meaning: "Odi Meji est le quatrieme Odu, gardien de la feminite sacree et de la creation. Son motif binaire (1001-1001) evoque l'ouverture au centre — l'uterus cosmique, le portail de la vie. Odi est l'Odu de la fertilite, de la sexualite sacree, de la naissance et de la recreation du monde. Il preside aux mysteres de la procreation et au pouvoir createur de la femme. Quand Odi apparait, il annonce une periode de grande creativite, de gestation de projets et de renouvellement. Le consultant est invite a honorer le principe feminin en lui et autour de lui. Odi enseigne que toute creation commence dans le ventre de l'obscurite avant d'emerger dans la lumiere.",
    proverbs: [
      "Odi ni o bi gbogbo aye — C'est Odi qui a enfante le monde entier",
      "Obinrin ni iya aye — La femme est la mere du monde",
      "Inu obinrin jin, ko si eni to mo ohun ti o wa nibe — Le ventre de la femme est profond, personne ne sait ce qu'il contient",
      "Omi tutu ni o mu igi dagba — C'est l'eau fraiche qui fait grandir l'arbre",
      "Eni ti ko ni iya, ko ni eni to n gba fun — Celui qui n'a pas de mere n'a personne pour prendre soin de lui"
    ],
    eseIfaVerses: [
      "Au temps ou la terre etait sterile, Odi Meji descendit avec le secret de la fertilite. Elle planta la premiere graine de mais et la premiere graine d'igname. De son corps naquirent les rivieres et les sources. Chaque femme qui porte un enfant porte en elle le pouvoir d'Odi, car c'est elle qui ouvrit le chemin entre le monde des esprits non-nes et le monde des vivants. Les Iyami Aje (les meres ancestrales) la reconnaissent comme leur soeur ainee.",
      "Un roi sterile consulta Ifa et recut Odi Meji. On lui prescrivit de faire des offrandes a Oshun au bord de la riviere et d'honorer toutes les femmes de son royaume. Il obeit, et dans l'annee sa reine donna naissance a des jumeaux. Odi enseigne que la fertilite — qu'elle soit biologique, creative ou materielle — vient quand on honore le principe feminin et qu'on cesse de forcer les choses pour les laisser murir naturellement.",
      "Odi et Ogbe se disputerent la premiere place dans l'ordre des Odu. Olodumare trancha : Ogbe irait en premier car il est la lumiere, mais Odi serait le plus puissant car sans elle, la lumiere n'aurait rien a eclairer. C'est pourquoi Odi est considere comme la matrice de toute existence, le ventre primordial d'ou emerge chaque Odu, chaque etre, chaque possibilite."
    ],
    orisha: "Oshun",
    prescriptions: "Offrir du miel, des oranges et un canard femelle a Oshun. Visiter une riviere. Honorer les femmes de sa famille. Porter du jaune ou de l'or.",
    interdictions: "Ne pas maltraiter les femmes. Ne pas avorter sans consultation spirituelle. Eviter la violence domestique. Ne pas denigrer la maternite.",
    element: "Eau",
    correspondences: { rank: 4, hexagramYiJing: 39, geomancy: 9 },
  },
  149: {
    number: 149,
    name: "Odi-Irosun",
    binarySignature: "10010101",
    meaning: "Dans Odi-Irosun, le signal quantique revele l'intersection de la creation et la fertilite et le sang et la lignee. Cet Odu apparait quand le consultant a besoin de combiner la receptivite et la loyaute pour resoudre une situation complexe. La jambe droite porte le message de Odi: nourrir et creer. La jambe gauche complete avec Irosun: honorer sa lignee. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sterilite emotionnelle si le consultant penche trop a droite, ou dans la trahison familiale s'il penche trop a gauche. L'equilibre est la cle, et l'abondance creatrice s'unit a la continuite ancestrale pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni odi, eni a gbe ni irosun — Celui qui est ne dans la creation et la fertilite, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo odi ati irosun, yoo mo aye — Celui qui connait la receptivite et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Odi-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de le sang et la lignee. Le voyageur devait nourrir et creer tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Nourrir et creer en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Irosun.",
    interdictions: "Eviter la sterilite emotionnelle et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 65, hexagramYiJing: 38, geomancy: 9 },
  },
  154: {
    number: 154,
    name: "Odi-Owonrin",
    binarySignature: "10011010",
    meaning: "Odi-Owonrin tisse ensemble les fils de la creation et la fertilite et le chaos et le changement dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la receptivite est la force de la main droite, l'adaptabilite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de nourrir et creer avec conscience et de embrasser le changement avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'abondance creatrice rencontre la transformation positive. Mais attention : la sterilite emotionnelle et l'instabilite chronique guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Odi-Owonrin: oju to ba ri, enu a wi — Odi-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Owonrin en consultation. On lui prescrivit de reconcilier la receptivite avec l'adaptabilite pour sauver son peuple. Il comprit que nourrir et creer sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Nourrir et creer en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Owonrin.",
    interdictions: "Eviter la sterilite emotionnelle et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 66, hexagramYiJing: 39, geomancy: 9 },
  },
  151: {
    number: 151,
    name: "Odi-Obara",
    binarySignature: "10010111",
    meaning: "L'apparition de Odi-Obara dans une consultation d'Ifa signale un moment ou la creation et la fertilite et la parole et la richesse convergent dans la vie du consultant. Odi apporte la receptivite et la capacite de nourrir et creer. Obara complete avec l'eloquence et l'imperatif de parler avec pouvoir. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Odi seul ni Obara seul, mais danser entre les deux comme l'equilibriste sur son fil. l'abondance creatrice et la prosperite par la parole sont les fruits de cette danse, tandis que la sterilite emotionnelle et les paroles vaines sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Odi so fun Obara: \"Ise owo eni la fi n deni girigiri\" — Odi dit a Obara: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re odi, a ma ko obara — Quand on va vers la creation et la fertilite, on apprend l'eloquence"
    ],
    eseIfaVerses: [
      "Odi-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la parole et la richesse. Le voyageur devait nourrir et creer tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Nourrir et creer en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Obara.",
    interdictions: "Eviter la sterilite emotionnelle et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 67, hexagramYiJing: 38, geomancy: 9 },
  },
  152: {
    number: 152,
    name: "Odi-Okanran",
    binarySignature: "10011000",
    meaning: "Odi-Okanran combine l'energie de la creation et la fertilite avec celle de le courage et la verite. Cet Odu revele une situation ou la receptivite et l'honnetete doivent s'harmoniser pour que le consultant avance. La jambe droite (Odi) apporte l'abondance creatrice, tandis que la jambe gauche (Okanran) apporte le courage du coeur. Le consultant est invite a nourrir et creer tout en sachant affronter la verite. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sterilite emotionnelle ou de la brutalite inutile. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni odi, eni a gbe ni okanran — Celui qui est ne dans la creation et la fertilite, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo odi ati okanran, yoo mo aye — Celui qui connait la receptivite et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Okanran en consultation. On lui prescrivit de reconcilier la receptivite avec l'honnetete pour sauver son peuple. Il comprit que nourrir et creer sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Nourrir et creer en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Okanran.",
    interdictions: "Eviter la sterilite emotionnelle et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 68, hexagramYiJing: 39, geomancy: 9 },
  },
  147: {
    number: 147,
    name: "Odi-Ogunda",
    binarySignature: "10010011",
    meaning: "Odi-Ogunda est un Odu de rencontre entre la creation et la fertilite et le fer et l'ouverture des chemins. Quand Odi (la receptivite) croise Ogunda (la determination), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Odi l'invite a nourrir et creer, Ogunda le pousse a debroussailler et avancer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui l'abondance creatrice et la voie ouverte simultanement, a condition de ne ceder ni a la sterilite emotionnelle ni a la violence destructrice.",
    proverbs: [
      "Odi-Ogunda: oju to ba ri, enu a wi — Odi-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Odi-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de le fer et l'ouverture des chemins. Le voyageur devait nourrir et creer tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Nourrir et creer en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Ogunda.",
    interdictions: "Eviter la sterilite emotionnelle et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 69, hexagramYiJing: 37, geomancy: 9 },
  },
  156: {
    number: 156,
    name: "Odi-Osa",
    binarySignature: "10011100",
    meaning: "Dans Odi-Osa, le signal quantique revele l'intersection de la creation et la fertilite et les forces occultes et les tempetes. Cet Odu apparait quand le consultant a besoin de combiner la receptivite et la vigilance pour resoudre une situation complexe. La jambe droite porte le message de Odi: nourrir et creer. La jambe gauche complete avec Osa: se proteger spirituellement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sterilite emotionnelle si le consultant penche trop a droite, ou dans la sorcellerie negligee s'il penche trop a gauche. L'equilibre est la cle, et l'abondance creatrice s'unit a le pouvoir feminin sacre pour guider le pas du consultant.",
    proverbs: [
      "Odi so fun Osa: \"Ise owo eni la fi n deni girigiri\" — Odi dit a Osa: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re odi, a ma ko osa — Quand on va vers la creation et la fertilite, on apprend la vigilance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Osa en consultation. On lui prescrivit de reconcilier la receptivite avec la vigilance pour sauver son peuple. Il comprit que nourrir et creer sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Nourrir et creer en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Osa.",
    interdictions: "Eviter la sterilite emotionnelle et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 70, hexagramYiJing: 40, geomancy: 9 },
  },
  146: {
    number: 146,
    name: "Odi-Ika",
    binarySignature: "10010010",
    meaning: "Odi-Ika tisse ensemble les fils de la creation et la fertilite et la ruse et la medecine dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la receptivite est la force de la main droite, la patience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de nourrir et creer avec conscience et de observer et attendre avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'abondance creatrice rencontre la guerison par la sagesse. Mais attention : la sterilite emotionnelle et la traitrise guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni odi, eni a gbe ni ika — Celui qui est ne dans la creation et la fertilite, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo odi ati ika, yoo mo aye — Celui qui connait la receptivite et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Odi-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la ruse et la medecine. Le voyageur devait nourrir et creer tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Nourrir et creer en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Ika.",
    interdictions: "Eviter la sterilite emotionnelle et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 71, hexagramYiJing: 37, geomancy: 9 },
  },
  157: {
    number: 157,
    name: "Odi-Oturupon",
    binarySignature: "10011101",
    meaning: "L'apparition de Odi-Oturupon dans une consultation d'Ifa signale un moment ou la creation et la fertilite et la maladie et la guerison convergent dans la vie du consultant. Odi apporte la receptivite et la capacite de nourrir et creer. Oturupon complete avec la resilience et l'imperatif de soigner corps et ame. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Odi seul ni Oturupon seul, mais danser entre les deux comme l'equilibriste sur son fil. l'abondance creatrice et la sante retrouvee sont les fruits de cette danse, tandis que la sterilite emotionnelle et la negligence sanitaire sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Odi-Oturupon: oju to ba ri, enu a wi — Odi-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Oturupon en consultation. On lui prescrivit de reconcilier la receptivite avec la resilience pour sauver son peuple. Il comprit que nourrir et creer sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Nourrir et creer en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Oturupon.",
    interdictions: "Eviter la sterilite emotionnelle et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 72, hexagramYiJing: 40, geomancy: 9 },
  },
  145: {
    number: 145,
    name: "Odi-Otura",
    binarySignature: "10010001",
    meaning: "Odi-Otura combine l'energie de la creation et la fertilite avec celle de la mystique et la divination. Cet Odu revele une situation ou la receptivite et la spiritualite doivent s'harmoniser pour que le consultant avance. La jambe droite (Odi) apporte l'abondance creatrice, tandis que la jambe gauche (Otura) apporte la revelation mystique. Le consultant est invite a nourrir et creer tout en sachant ecouter les signes divins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sterilite emotionnelle ou de le fanatisme religieux. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Odi so fun Otura: \"Ise owo eni la fi n deni girigiri\" — Odi dit a Otura: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re odi, a ma ko otura — Quand on va vers la creation et la fertilite, on apprend la spiritualite"
    ],
    eseIfaVerses: [
      "Odi-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la mystique et la divination. Le voyageur devait nourrir et creer tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Nourrir et creer en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Otura.",
    interdictions: "Eviter la sterilite emotionnelle et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 73, hexagramYiJing: 37, geomancy: 9 },
  },
  158: {
    number: 158,
    name: "Odi-Irete",
    binarySignature: "10011110",
    meaning: "Odi-Irete est un Odu de rencontre entre la creation et la fertilite et l'endurance et la pression. Quand Odi (la receptivite) croise Irete (la perseverance), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Odi l'invite a nourrir et creer, Irete le pousse a resister et perseverer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui l'abondance creatrice et la force interieure simultanement, a condition de ne ceder ni a la sterilite emotionnelle ni a l'obstination aveugle.",
    proverbs: [
      "Eni a bi ni odi, eni a gbe ni irete — Celui qui est ne dans la creation et la fertilite, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo odi ati irete, yoo mo aye — Celui qui connait la receptivite et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Irete en consultation. On lui prescrivit de reconcilier la receptivite avec la perseverance pour sauver son peuple. Il comprit que nourrir et creer sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Nourrir et creer en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Irete.",
    interdictions: "Eviter la sterilite emotionnelle et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 74, hexagramYiJing: 40, geomancy: 9 },
  },
  148: {
    number: 148,
    name: "Odi-Ose",
    binarySignature: "10010100",
    meaning: "Dans Odi-Ose, le signal quantique revele l'intersection de la creation et la fertilite et la beaute et l'enchantement. Cet Odu apparait quand le consultant a besoin de combiner la receptivite et la seduction pour resoudre une situation complexe. La jambe droite porte le message de Odi: nourrir et creer. La jambe gauche complete avec Ose: cultiver la beaute. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sterilite emotionnelle si le consultant penche trop a droite, ou dans la vanite superficielle s'il penche trop a gauche. L'equilibre est la cle, et l'abondance creatrice s'unit a l'amour et l'harmonie pour guider le pas du consultant.",
    proverbs: [
      "Odi-Ose: oju to ba ri, enu a wi — Odi-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Odi-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la creation et la fertilite croisait celle de la beaute et l'enchantement. Le voyageur devait nourrir et creer tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Nourrir et creer en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Ose.",
    interdictions: "Eviter la sterilite emotionnelle et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 75, hexagramYiJing: 38, geomancy: 9 },
  },
  155: {
    number: 155,
    name: "Odi-Ofun",
    binarySignature: "10011011",
    meaning: "Odi-Ofun tisse ensemble les fils de la creation et la fertilite et la purete et le renouveau dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la receptivite est la force de la main droite, la purete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de nourrir et creer avec conscience et de purifier et recommencer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'abondance creatrice rencontre la renaissance spirituelle. Mais attention : la sterilite emotionnelle et le refus du changement guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Odi so fun Ofun: \"Ise owo eni la fi n deni girigiri\" — Odi dit a Ofun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re odi, a ma ko ofun — Quand on va vers la creation et la fertilite, on apprend la purete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Odi-Ofun en consultation. On lui prescrivit de reconcilier la receptivite avec la purete pour sauver son peuple. Il comprit que nourrir et creer sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Odi et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Nourrir et creer en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Odi et Ofun.",
    interdictions: "Eviter la sterilite emotionnelle et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 76, hexagramYiJing: 39, geomancy: 9 },
  },
  95: {
    number: 95,
    name: "Irosun-Ogbe",
    binarySignature: "01011111",
    meaning: "L'apparition de Irosun-Ogbe dans une consultation d'Ifa signale un moment ou le sang et la lignee et la lumiere et la prosperite convergent dans la vie du consultant. Irosun apporte la loyaute et la capacite de honorer sa lignee. Ogbe complete avec la clarte et l'imperatif de ouvrir les chemins. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irosun seul ni Ogbe seul, mais danser entre les deux comme l'equilibriste sur son fil. la continuite ancestrale et la benediction supreme sont les fruits de cette danse, tandis que la trahison familiale et l'orgueil spirituel sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni ogbe — Celui qui est ne dans le sang et la lignee, celui qui vit dans la lumiere et la prosperite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati ogbe, yoo mo aye — Celui qui connait la loyaute et la clarte connait le monde"
    ],
    eseIfaVerses: [
      "Irosun-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la lumiere et la prosperite. Le voyageur devait honorer sa lignee tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Honorer sa lignee en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Ogbe.",
    interdictions: "Eviter la trahison familiale et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 77, hexagramYiJing: 24, geomancy: 5 },
  },
  80: {
    number: 80,
    name: "Irosun-Oyeku",
    binarySignature: "01010000",
    meaning: "Irosun-Oyeku combine l'energie de le sang et la lignee avec celle de les mysteres et la mort-renaissance. Cet Odu revele une situation ou la loyaute et la profondeur doivent s'harmoniser pour que le consultant avance. La jambe droite (Irosun) apporte la continuite ancestrale, tandis que la jambe gauche (Oyeku) apporte la protection ancestrale. Le consultant est invite a honorer sa lignee tout en sachant honorer les ancetres. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la trahison familiale ou de la peur de l'inconnu. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Irosun-Oyeku: oju to ba ri, enu a wi — Irosun-Oyeku: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Oyeku en consultation. On lui prescrivit de reconcilier la loyaute avec la profondeur pour sauver son peuple. Il comprit que honorer sa lignee sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Honorer sa lignee en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Oyeku.",
    interdictions: "Eviter la trahison familiale et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 78, hexagramYiJing: 21, geomancy: 5 },
  },
  86: {
    number: 86,
    name: "Irosun-Iwori",
    binarySignature: "01010110",
    meaning: "Irosun-Iwori est un Odu de rencontre entre le sang et la lignee et la vision interieure. Quand Irosun (la loyaute) croise Iwori (la lucidite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Irosun l'invite a honorer sa lignee, Iwori le pousse a mediter et observer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la continuite ancestrale et la clairvoyance simultanement, a condition de ne ceder ni a la trahison familiale ni a l'auto-illusion.",
    proverbs: [
      "Irosun so fun Iwori: \"Ise owo eni la fi n deni girigiri\" — Irosun dit a Iwori: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irosun, a ma ko iwori — Quand on va vers le sang et la lignee, on apprend la lucidite"
    ],
    eseIfaVerses: [
      "Irosun-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la vision interieure. Le voyageur devait honorer sa lignee tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Honorer sa lignee en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Iwori.",
    interdictions: "Eviter la trahison familiale et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 79, hexagramYiJing: 22, geomancy: 5 },
  },
  89: {
    number: 89,
    name: "Irosun-Odi",
    binarySignature: "01011001",
    meaning: "Dans Irosun-Odi, le signal quantique revele l'intersection de le sang et la lignee et la creation et la fertilite. Cet Odu apparait quand le consultant a besoin de combiner la loyaute et la receptivite pour resoudre une situation complexe. La jambe droite porte le message de Irosun: honorer sa lignee. La jambe gauche complete avec Odi: nourrir et creer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la trahison familiale si le consultant penche trop a droite, ou dans la sterilite emotionnelle s'il penche trop a gauche. L'equilibre est la cle, et la continuite ancestrale s'unit a l'abondance creatrice pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni odi — Celui qui est ne dans le sang et la lignee, celui qui vit dans la creation et la fertilite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati odi, yoo mo aye — Celui qui connait la loyaute et la receptivite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Odi en consultation. On lui prescrivit de reconcilier la loyaute avec la receptivite pour sauver son peuple. Il comprit que honorer sa lignee sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Honorer sa lignee en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Odi.",
    interdictions: "Eviter la trahison familiale et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 80, hexagramYiJing: 23, geomancy: 5 },
  },
  85: {
    number: 85,
    name: "Irosun Meji",
    binarySignature: "01010101",
    meaning: "Irosun Meji est le cinquieme Odu, gardien du sang sacre et de la lignee ancestrale. Son motif alterne (0101-0101) symbolise le flux et le reflux du sang dans les veines — le lien ininterrompu entre les generations. Irosun est l'Odu du sacrifice, de la devotion et de la continuite familiale. Il porte la memoire du sang verse pour proteger les descendants et du sang qui coule dans chaque naissance. Quand Irosun apparait, le consultant est appele a honorer sa lignee, a comprendre d'ou il vient pour savoir ou il va. Les questions d'heritage, de tradition familiale et de karma ancestral sont au premier plan. Irosun enseigne que nous sommes les maillons d'une chaine sacree qui relie les morts aux vivants et aux enfants a naitre.",
    proverbs: [
      "Eje ni ipa, eje ni agbara — Le sang est force, le sang est puissance",
      "Omo ti ko gbon, ti o ba ti bimo, yoo gbon — L'enfant qui n'est pas sage deviendra sage quand il aura ses propres enfants",
      "Idile eni ni ile eni — La famille de chacun est sa maison",
      "Ebi ko si, igberaga ko si — Sans famille, il n'y a pas de fierte",
      "Eje baba ati eje iya ni o n so omo di eniyan — C'est le sang du pere et le sang de la mere qui font de l'enfant un etre humain"
    ],
    eseIfaVerses: [
      "Irosun Meji revela aux premiers humains le mystere du sang. Il leur montra que le sang qui coule dans leurs veines porte la memoire de tous leurs ancetres, depuis le premier jour de la creation. Chaque goutte contient l'histoire, la sagesse et les erreurs de ceux qui sont venus avant. Les rituels de scarification furent institues pour que le sang puisse « parler » et transmettre ses messages aux generations futures. Irosun enseigne que le sacrifice — verser son sang symboliquement ou reellement — est l'acte le plus sacre car il renouvelle le pacte entre les vivants et les morts.",
      "Un guerrier consulta Ifa avant une grande bataille et obtint Irosun Meji. On lui dit de ne pas combattre mais de partager un repas de sang avec son ennemi. Il invita son adversaire a un festin rituel ou ils partagerent la kola et le vin de palme. La paix fut scellee et les deux clans fusionnerent, creant une lignee puissante qui regna pendant sept generations. Irosun rappelle que le sang peut unir aussi bien que diviser, et que le choix entre la guerre et la paix definit le destin d'une lignee.",
      "Quand Ogun, le dieu du fer, blessa accidentellement son fils, Irosun Meji intervint pour arreter le sang et guerir la plaie. Il enseigna aux humains les herbes qui coagulent le sang et celles qui le purifient. Depuis ce jour, Irosun est invoque dans toutes les ceremonies de guerison ou le sang est implique, et les herboristes le considerent comme leur patron spirituel aux cotes d'Osanyin."
    ],
    orisha: "Ogun",
    prescriptions: "Offrir un coq rouge, de l'huile de palme rouge et des noix de cola. Visiter la tombe des ancetres. Faire un arbre genealogique. Porter du rouge.",
    interdictions: "Ne pas verser le sang inutilement. Eviter de manger du porc. Ne pas rompre les serments de sang. Ne pas renier sa famille.",
    element: "Feu",
    correspondences: { rank: 5, hexagramYiJing: 22, geomancy: 5 },
  },
  90: {
    number: 90,
    name: "Irosun-Owonrin",
    binarySignature: "01011010",
    meaning: "L'apparition de Irosun-Owonrin dans une consultation d'Ifa signale un moment ou le sang et la lignee et le chaos et le changement convergent dans la vie du consultant. Irosun apporte la loyaute et la capacite de honorer sa lignee. Owonrin complete avec l'adaptabilite et l'imperatif de embrasser le changement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irosun seul ni Owonrin seul, mais danser entre les deux comme l'equilibriste sur son fil. la continuite ancestrale et la transformation positive sont les fruits de cette danse, tandis que la trahison familiale et l'instabilite chronique sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Irosun so fun Owonrin: \"Ise owo eni la fi n deni girigiri\" — Irosun dit a Owonrin: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irosun, a ma ko owonrin — Quand on va vers le sang et la lignee, on apprend l'adaptabilite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Owonrin en consultation. On lui prescrivit de reconcilier la loyaute avec l'adaptabilite pour sauver son peuple. Il comprit que honorer sa lignee sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Honorer sa lignee en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Owonrin.",
    interdictions: "Eviter la trahison familiale et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 81, hexagramYiJing: 23, geomancy: 5 },
  },
  87: {
    number: 87,
    name: "Irosun-Obara",
    binarySignature: "01010111",
    meaning: "Irosun-Obara combine l'energie de le sang et la lignee avec celle de la parole et la richesse. Cet Odu revele une situation ou la loyaute et l'eloquence doivent s'harmoniser pour que le consultant avance. La jambe droite (Irosun) apporte la continuite ancestrale, tandis que la jambe gauche (Obara) apporte la prosperite par la parole. Le consultant est invite a honorer sa lignee tout en sachant parler avec pouvoir. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la trahison familiale ou de les paroles vaines. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni obara — Celui qui est ne dans le sang et la lignee, celui qui vit dans la parole et la richesse",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati obara, yoo mo aye — Celui qui connait la loyaute et l'eloquence connait le monde"
    ],
    eseIfaVerses: [
      "Irosun-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la parole et la richesse. Le voyageur devait honorer sa lignee tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Honorer sa lignee en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Obara.",
    interdictions: "Eviter la trahison familiale et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 82, hexagramYiJing: 22, geomancy: 5 },
  },
  88: {
    number: 88,
    name: "Irosun-Okanran",
    binarySignature: "01011000",
    meaning: "Irosun-Okanran est un Odu de rencontre entre le sang et la lignee et le courage et la verite. Quand Irosun (la loyaute) croise Okanran (l'honnetete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Irosun l'invite a honorer sa lignee, Okanran le pousse a affronter la verite. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la continuite ancestrale et le courage du coeur simultanement, a condition de ne ceder ni a la trahison familiale ni a la brutalite inutile.",
    proverbs: [
      "Irosun-Okanran: oju to ba ri, enu a wi — Irosun-Okanran: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Okanran en consultation. On lui prescrivit de reconcilier la loyaute avec l'honnetete pour sauver son peuple. Il comprit que honorer sa lignee sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Honorer sa lignee en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Okanran.",
    interdictions: "Eviter la trahison familiale et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 83, hexagramYiJing: 23, geomancy: 5 },
  },
  83: {
    number: 83,
    name: "Irosun-Ogunda",
    binarySignature: "01010011",
    meaning: "Dans Irosun-Ogunda, le signal quantique revele l'intersection de le sang et la lignee et le fer et l'ouverture des chemins. Cet Odu apparait quand le consultant a besoin de combiner la loyaute et la determination pour resoudre une situation complexe. La jambe droite porte le message de Irosun: honorer sa lignee. La jambe gauche complete avec Ogunda: debroussailler et avancer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la trahison familiale si le consultant penche trop a droite, ou dans la violence destructrice s'il penche trop a gauche. L'equilibre est la cle, et la continuite ancestrale s'unit a la voie ouverte pour guider le pas du consultant.",
    proverbs: [
      "Irosun so fun Ogunda: \"Ise owo eni la fi n deni girigiri\" — Irosun dit a Ogunda: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irosun, a ma ko ogunda — Quand on va vers le sang et la lignee, on apprend la determination"
    ],
    eseIfaVerses: [
      "Irosun-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de le fer et l'ouverture des chemins. Le voyageur devait honorer sa lignee tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Honorer sa lignee en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Ogunda.",
    interdictions: "Eviter la trahison familiale et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 84, hexagramYiJing: 21, geomancy: 5 },
  },
  92: {
    number: 92,
    name: "Irosun-Osa",
    binarySignature: "01011100",
    meaning: "Irosun-Osa tisse ensemble les fils de le sang et la lignee et les forces occultes et les tempetes dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la loyaute est la force de la main droite, la vigilance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de honorer sa lignee avec conscience et de se proteger spirituellement avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la continuite ancestrale rencontre le pouvoir feminin sacre. Mais attention : la trahison familiale et la sorcellerie negligee guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni osa — Celui qui est ne dans le sang et la lignee, celui qui vit dans les forces occultes et les tempetes",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati osa, yoo mo aye — Celui qui connait la loyaute et la vigilance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Osa en consultation. On lui prescrivit de reconcilier la loyaute avec la vigilance pour sauver son peuple. Il comprit que honorer sa lignee sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Honorer sa lignee en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Osa.",
    interdictions: "Eviter la trahison familiale et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 85, hexagramYiJing: 24, geomancy: 5 },
  },
  82: {
    number: 82,
    name: "Irosun-Ika",
    binarySignature: "01010010",
    meaning: "L'apparition de Irosun-Ika dans une consultation d'Ifa signale un moment ou le sang et la lignee et la ruse et la medecine convergent dans la vie du consultant. Irosun apporte la loyaute et la capacite de honorer sa lignee. Ika complete avec la patience et l'imperatif de observer et attendre. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irosun seul ni Ika seul, mais danser entre les deux comme l'equilibriste sur son fil. la continuite ancestrale et la guerison par la sagesse sont les fruits de cette danse, tandis que la trahison familiale et la traitrise sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Irosun-Ika: oju to ba ri, enu a wi — Irosun-Ika: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Irosun-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la ruse et la medecine. Le voyageur devait honorer sa lignee tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Honorer sa lignee en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Ika.",
    interdictions: "Eviter la trahison familiale et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 86, hexagramYiJing: 21, geomancy: 5 },
  },
  93: {
    number: 93,
    name: "Irosun-Oturupon",
    binarySignature: "01011101",
    meaning: "Irosun-Oturupon combine l'energie de le sang et la lignee avec celle de la maladie et la guerison. Cet Odu revele une situation ou la loyaute et la resilience doivent s'harmoniser pour que le consultant avance. La jambe droite (Irosun) apporte la continuite ancestrale, tandis que la jambe gauche (Oturupon) apporte la sante retrouvee. Le consultant est invite a honorer sa lignee tout en sachant soigner corps et ame. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la trahison familiale ou de la negligence sanitaire. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Irosun so fun Oturupon: \"Ise owo eni la fi n deni girigiri\" — Irosun dit a Oturupon: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irosun, a ma ko oturupon — Quand on va vers le sang et la lignee, on apprend la resilience"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Oturupon en consultation. On lui prescrivit de reconcilier la loyaute avec la resilience pour sauver son peuple. Il comprit que honorer sa lignee sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Honorer sa lignee en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Oturupon.",
    interdictions: "Eviter la trahison familiale et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 87, hexagramYiJing: 24, geomancy: 5 },
  },
  81: {
    number: 81,
    name: "Irosun-Otura",
    binarySignature: "01010001",
    meaning: "Irosun-Otura est un Odu de rencontre entre le sang et la lignee et la mystique et la divination. Quand Irosun (la loyaute) croise Otura (la spiritualite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Irosun l'invite a honorer sa lignee, Otura le pousse a ecouter les signes divins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la continuite ancestrale et la revelation mystique simultanement, a condition de ne ceder ni a la trahison familiale ni a le fanatisme religieux.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni otura — Celui qui est ne dans le sang et la lignee, celui qui vit dans la mystique et la divination",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati otura, yoo mo aye — Celui qui connait la loyaute et la spiritualite connait le monde"
    ],
    eseIfaVerses: [
      "Irosun-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la mystique et la divination. Le voyageur devait honorer sa lignee tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Honorer sa lignee en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Otura.",
    interdictions: "Eviter la trahison familiale et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 88, hexagramYiJing: 21, geomancy: 5 },
  },
  94: {
    number: 94,
    name: "Irosun-Irete",
    binarySignature: "01011110",
    meaning: "Dans Irosun-Irete, le signal quantique revele l'intersection de le sang et la lignee et l'endurance et la pression. Cet Odu apparait quand le consultant a besoin de combiner la loyaute et la perseverance pour resoudre une situation complexe. La jambe droite porte le message de Irosun: honorer sa lignee. La jambe gauche complete avec Irete: resister et perseverer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la trahison familiale si le consultant penche trop a droite, ou dans l'obstination aveugle s'il penche trop a gauche. L'equilibre est la cle, et la continuite ancestrale s'unit a la force interieure pour guider le pas du consultant.",
    proverbs: [
      "Irosun-Irete: oju to ba ri, enu a wi — Irosun-Irete: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Irete en consultation. On lui prescrivit de reconcilier la loyaute avec la perseverance pour sauver son peuple. Il comprit que honorer sa lignee sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Honorer sa lignee en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Irete.",
    interdictions: "Eviter la trahison familiale et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 89, hexagramYiJing: 24, geomancy: 5 },
  },
  84: {
    number: 84,
    name: "Irosun-Ose",
    binarySignature: "01010100",
    meaning: "Irosun-Ose tisse ensemble les fils de le sang et la lignee et la beaute et l'enchantement dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la loyaute est la force de la main droite, la seduction est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de honorer sa lignee avec conscience et de cultiver la beaute avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la continuite ancestrale rencontre l'amour et l'harmonie. Mais attention : la trahison familiale et la vanite superficielle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Irosun so fun Ose: \"Ise owo eni la fi n deni girigiri\" — Irosun dit a Ose: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irosun, a ma ko ose — Quand on va vers le sang et la lignee, on apprend la seduction"
    ],
    eseIfaVerses: [
      "Irosun-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le sang et la lignee croisait celle de la beaute et l'enchantement. Le voyageur devait honorer sa lignee tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Honorer sa lignee en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Ose.",
    interdictions: "Eviter la trahison familiale et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 90, hexagramYiJing: 22, geomancy: 5 },
  },
  91: {
    number: 91,
    name: "Irosun-Ofun",
    binarySignature: "01011011",
    meaning: "L'apparition de Irosun-Ofun dans une consultation d'Ifa signale un moment ou le sang et la lignee et la purete et le renouveau convergent dans la vie du consultant. Irosun apporte la loyaute et la capacite de honorer sa lignee. Ofun complete avec la purete et l'imperatif de purifier et recommencer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irosun seul ni Ofun seul, mais danser entre les deux comme l'equilibriste sur son fil. la continuite ancestrale et la renaissance spirituelle sont les fruits de cette danse, tandis que la trahison familiale et le refus du changement sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni irosun, eni a gbe ni ofun — Celui qui est ne dans le sang et la lignee, celui qui vit dans la purete et le renouveau",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irosun ati ofun, yoo mo aye — Celui qui connait la loyaute et la purete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irosun-Ofun en consultation. On lui prescrivit de reconcilier la loyaute avec la purete pour sauver son peuple. Il comprit que honorer sa lignee sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irosun et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Honorer sa lignee en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irosun et Ofun.",
    interdictions: "Eviter la trahison familiale et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 91, hexagramYiJing: 23, geomancy: 5 },
  },
  175: {
    number: 175,
    name: "Owonrin-Ogbe",
    binarySignature: "10101111",
    meaning: "Owonrin-Ogbe combine l'energie de le chaos et le changement avec celle de la lumiere et la prosperite. Cet Odu revele une situation ou l'adaptabilite et la clarte doivent s'harmoniser pour que le consultant avance. La jambe droite (Owonrin) apporte la transformation positive, tandis que la jambe gauche (Ogbe) apporte la benediction supreme. Le consultant est invite a embrasser le changement tout en sachant ouvrir les chemins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'instabilite chronique ou de l'orgueil spirituel. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Owonrin-Ogbe: oju to ba ri, enu a wi — Owonrin-Ogbe: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Owonrin-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la lumiere et la prosperite. Le voyageur devait embrasser le changement tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Embrasser le changement en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Ogbe.",
    interdictions: "Eviter l'instabilite chronique et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 92, hexagramYiJing: 44, geomancy: 10 },
  },
  160: {
    number: 160,
    name: "Owonrin-Oyeku",
    binarySignature: "10100000",
    meaning: "Owonrin-Oyeku est un Odu de rencontre entre le chaos et le changement et les mysteres et la mort-renaissance. Quand Owonrin (l'adaptabilite) croise Oyeku (la profondeur), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Owonrin l'invite a embrasser le changement, Oyeku le pousse a honorer les ancetres. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la transformation positive et la protection ancestrale simultanement, a condition de ne ceder ni a l'instabilite chronique ni a la peur de l'inconnu.",
    proverbs: [
      "Owonrin so fun Oyeku: \"Ise owo eni la fi n deni girigiri\" — Owonrin dit a Oyeku: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re owonrin, a ma ko oyeku — Quand on va vers le chaos et le changement, on apprend la profondeur"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Oyeku en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la profondeur pour sauver son peuple. Il comprit que embrasser le changement sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Embrasser le changement en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Oyeku.",
    interdictions: "Eviter l'instabilite chronique et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 93, hexagramYiJing: 41, geomancy: 10 },
  },
  166: {
    number: 166,
    name: "Owonrin-Iwori",
    binarySignature: "10100110",
    meaning: "Dans Owonrin-Iwori, le signal quantique revele l'intersection de le chaos et le changement et la vision interieure. Cet Odu apparait quand le consultant a besoin de combiner l'adaptabilite et la lucidite pour resoudre une situation complexe. La jambe droite porte le message de Owonrin: embrasser le changement. La jambe gauche complete avec Iwori: mediter et observer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'instabilite chronique si le consultant penche trop a droite, ou dans l'auto-illusion s'il penche trop a gauche. L'equilibre est la cle, et la transformation positive s'unit a la clairvoyance pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni owonrin, eni a gbe ni iwori — Celui qui est ne dans le chaos et le changement, celui qui vit dans la vision interieure",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo owonrin ati iwori, yoo mo aye — Celui qui connait l'adaptabilite et la lucidite connait le monde"
    ],
    eseIfaVerses: [
      "Owonrin-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la vision interieure. Le voyageur devait embrasser le changement tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Embrasser le changement en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Iwori.",
    interdictions: "Eviter l'instabilite chronique et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 94, hexagramYiJing: 42, geomancy: 10 },
  },
  169: {
    number: 169,
    name: "Owonrin-Odi",
    binarySignature: "10101001",
    meaning: "Owonrin-Odi tisse ensemble les fils de le chaos et le changement et la creation et la fertilite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'adaptabilite est la force de la main droite, la receptivite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de embrasser le changement avec conscience et de nourrir et creer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la transformation positive rencontre l'abondance creatrice. Mais attention : l'instabilite chronique et la sterilite emotionnelle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Owonrin-Odi: oju to ba ri, enu a wi — Owonrin-Odi: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Odi en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la receptivite pour sauver son peuple. Il comprit que embrasser le changement sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Embrasser le changement en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Odi.",
    interdictions: "Eviter l'instabilite chronique et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 95, hexagramYiJing: 43, geomancy: 10 },
  },
  165: {
    number: 165,
    name: "Owonrin-Irosun",
    binarySignature: "10100101",
    meaning: "L'apparition de Owonrin-Irosun dans une consultation d'Ifa signale un moment ou le chaos et le changement et le sang et la lignee convergent dans la vie du consultant. Owonrin apporte l'adaptabilite et la capacite de embrasser le changement. Irosun complete avec la loyaute et l'imperatif de honorer sa lignee. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Owonrin seul ni Irosun seul, mais danser entre les deux comme l'equilibriste sur son fil. la transformation positive et la continuite ancestrale sont les fruits de cette danse, tandis que l'instabilite chronique et la trahison familiale sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Owonrin so fun Irosun: \"Ise owo eni la fi n deni girigiri\" — Owonrin dit a Irosun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re owonrin, a ma ko irosun — Quand on va vers le chaos et le changement, on apprend la loyaute"
    ],
    eseIfaVerses: [
      "Owonrin-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de le sang et la lignee. Le voyageur devait embrasser le changement tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Embrasser le changement en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Irosun.",
    interdictions: "Eviter l'instabilite chronique et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 96, hexagramYiJing: 42, geomancy: 10 },
  },
  170: {
    number: 170,
    name: "Owonrin Meji",
    binarySignature: "10101010",
    meaning: "Owonrin Meji est le sixieme Odu, porteur du chaos createur et du changement inattendu. Son motif alterne inverse (1010-1010) symbolise l'instabilite dynamique, le zigzag de la foudre et les revirements du destin. Owonrin est le trickster cosmique, le compagnon d'Eshu aux carrefours de l'existence. Rien n'est fixe, rien n'est definitif sous l'influence d'Owonrin — les situations se renversent, les certitudes s'effondrent, et de nouvelles possibilites emergent du chaos. Quand Owonrin apparait, le consultant doit s'attendre a l'inattendu et embrasser le changement plutot que le combattre. C'est un Odu de revolution personnelle et de transformation radicale. Owonrin enseigne que l'ordre nait du desordre et que le chaos est la matrice de toute creation nouvelle.",
    proverbs: [
      "Owonrin wo aye da ru — Owonrin a regarde le monde et l'a renverse",
      "Eni to ba da aye ru, yoo tun da aye se — Celui qui renverse le monde le reconstruira aussi",
      "Ojo ti a o ku, a ko mo — Le jour de notre mort, nous ne le connaissons pas",
      "Igi to ga ju, afefe ni o nfe — C'est le vent qui courbe l'arbre le plus haut",
      "Bi aye ba n yi, a yi pelu re — Quand le monde tourne, tourne avec lui",
      "Ija oni ko pe ka pe titi — La querelle d'aujourd'hui ne dure pas eternellement"
    ],
    eseIfaVerses: [
      "Owonrin descendit sur terre un jour de tempete. Il dansait dans la foudre et riait dans le tonnerre. Les autres Odu le prirent pour un fou jusqu'a ce que sa tempete balaye les decombres d'un ancien temple, revelant un tresor enterre depuis mille ans. Owonrin dit : « Ce que vous appelez destruction, je l'appelle renovation. Ce que vous appelez chaos, je l'appelle liberation. » Les babalawo comprirent que le changement, meme violent, est parfois la seule voie vers le renouveau.",
      "Eshu et Owonrin sont freres jumeaux dans la tradition d'Ifa. Ensemble ils gardent les carrefours ou se croisent toutes les possibilites. Un marchand qui refusa de sacrifier a Eshu sur le conseil d'Owonrin perdit toute sa fortune en une nuit. Un autre qui obeit devint roi d'une cite qu'il n'avait jamais visitee. Owonrin enseigne que le destin est un carrefour permanent et que chaque choix ouvre un monde et en ferme un autre.",
      "Quand les dieux se laisserent de l'ordre parfait du ciel, c'est Owonrin qui inventa le jeu, la danse et la musique pour briser la monotonie divine. Il apporta l'imprevisibilite dans un univers trop regulier, et les dieux l'en remercierent car sans surprise, l'existence perd sa saveur. Owonrin rappelle que la vie sans risque n'est pas la vie, et que le confort de la routine peut devenir la prison de l'ame."
    ],
    orisha: "Eshu",
    prescriptions: "Offrir un bouc, du gin et du piment a Eshu au carrefour. Accepter le changement. Voyager. Porter des couleurs vives et contrastees.",
    interdictions: "Ne pas resister au changement. Eviter la routine rigide. Ne pas ignorer les signes d'avertissement. Ne pas jouer avec le feu spirituel.",
    element: "Air",
    correspondences: { rank: 6, hexagramYiJing: 43, geomancy: 10 },
  },
  167: {
    number: 167,
    name: "Owonrin-Obara",
    binarySignature: "10100111",
    meaning: "Owonrin-Obara est un Odu de rencontre entre le chaos et le changement et la parole et la richesse. Quand Owonrin (l'adaptabilite) croise Obara (l'eloquence), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Owonrin l'invite a embrasser le changement, Obara le pousse a parler avec pouvoir. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la transformation positive et la prosperite par la parole simultanement, a condition de ne ceder ni a l'instabilite chronique ni a les paroles vaines.",
    proverbs: [
      "Owonrin-Obara: oju to ba ri, enu a wi — Owonrin-Obara: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Owonrin-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la parole et la richesse. Le voyageur devait embrasser le changement tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Embrasser le changement en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Obara.",
    interdictions: "Eviter l'instabilite chronique et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 97, hexagramYiJing: 42, geomancy: 10 },
  },
  168: {
    number: 168,
    name: "Owonrin-Okanran",
    binarySignature: "10101000",
    meaning: "Dans Owonrin-Okanran, le signal quantique revele l'intersection de le chaos et le changement et le courage et la verite. Cet Odu apparait quand le consultant a besoin de combiner l'adaptabilite et l'honnetete pour resoudre une situation complexe. La jambe droite porte le message de Owonrin: embrasser le changement. La jambe gauche complete avec Okanran: affronter la verite. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'instabilite chronique si le consultant penche trop a droite, ou dans la brutalite inutile s'il penche trop a gauche. L'equilibre est la cle, et la transformation positive s'unit a le courage du coeur pour guider le pas du consultant.",
    proverbs: [
      "Owonrin so fun Okanran: \"Ise owo eni la fi n deni girigiri\" — Owonrin dit a Okanran: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re owonrin, a ma ko okanran — Quand on va vers le chaos et le changement, on apprend l'honnetete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Okanran en consultation. On lui prescrivit de reconcilier l'adaptabilite avec l'honnetete pour sauver son peuple. Il comprit que embrasser le changement sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Embrasser le changement en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Okanran.",
    interdictions: "Eviter l'instabilite chronique et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 98, hexagramYiJing: 43, geomancy: 10 },
  },
  163: {
    number: 163,
    name: "Owonrin-Ogunda",
    binarySignature: "10100011",
    meaning: "Owonrin-Ogunda tisse ensemble les fils de le chaos et le changement et le fer et l'ouverture des chemins dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'adaptabilite est la force de la main droite, la determination est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de embrasser le changement avec conscience et de debroussailler et avancer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la transformation positive rencontre la voie ouverte. Mais attention : l'instabilite chronique et la violence destructrice guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni owonrin, eni a gbe ni ogunda — Celui qui est ne dans le chaos et le changement, celui qui vit dans le fer et l'ouverture des chemins",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo owonrin ati ogunda, yoo mo aye — Celui qui connait l'adaptabilite et la determination connait le monde"
    ],
    eseIfaVerses: [
      "Owonrin-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de le fer et l'ouverture des chemins. Le voyageur devait embrasser le changement tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Embrasser le changement en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Ogunda.",
    interdictions: "Eviter l'instabilite chronique et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 99, hexagramYiJing: 41, geomancy: 10 },
  },
  172: {
    number: 172,
    name: "Owonrin-Osa",
    binarySignature: "10101100",
    meaning: "L'apparition de Owonrin-Osa dans une consultation d'Ifa signale un moment ou le chaos et le changement et les forces occultes et les tempetes convergent dans la vie du consultant. Owonrin apporte l'adaptabilite et la capacite de embrasser le changement. Osa complete avec la vigilance et l'imperatif de se proteger spirituellement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Owonrin seul ni Osa seul, mais danser entre les deux comme l'equilibriste sur son fil. la transformation positive et le pouvoir feminin sacre sont les fruits de cette danse, tandis que l'instabilite chronique et la sorcellerie negligee sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Owonrin-Osa: oju to ba ri, enu a wi — Owonrin-Osa: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Osa en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la vigilance pour sauver son peuple. Il comprit que embrasser le changement sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Embrasser le changement en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Osa.",
    interdictions: "Eviter l'instabilite chronique et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 100, hexagramYiJing: 44, geomancy: 10 },
  },
  162: {
    number: 162,
    name: "Owonrin-Ika",
    binarySignature: "10100010",
    meaning: "Owonrin-Ika combine l'energie de le chaos et le changement avec celle de la ruse et la medecine. Cet Odu revele une situation ou l'adaptabilite et la patience doivent s'harmoniser pour que le consultant avance. La jambe droite (Owonrin) apporte la transformation positive, tandis que la jambe gauche (Ika) apporte la guerison par la sagesse. Le consultant est invite a embrasser le changement tout en sachant observer et attendre. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'instabilite chronique ou de la traitrise. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Owonrin so fun Ika: \"Ise owo eni la fi n deni girigiri\" — Owonrin dit a Ika: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re owonrin, a ma ko ika — Quand on va vers le chaos et le changement, on apprend la patience"
    ],
    eseIfaVerses: [
      "Owonrin-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la ruse et la medecine. Le voyageur devait embrasser le changement tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Embrasser le changement en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Ika.",
    interdictions: "Eviter l'instabilite chronique et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 101, hexagramYiJing: 41, geomancy: 10 },
  },
  173: {
    number: 173,
    name: "Owonrin-Oturupon",
    binarySignature: "10101101",
    meaning: "Owonrin-Oturupon est un Odu de rencontre entre le chaos et le changement et la maladie et la guerison. Quand Owonrin (l'adaptabilite) croise Oturupon (la resilience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Owonrin l'invite a embrasser le changement, Oturupon le pousse a soigner corps et ame. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la transformation positive et la sante retrouvee simultanement, a condition de ne ceder ni a l'instabilite chronique ni a la negligence sanitaire.",
    proverbs: [
      "Eni a bi ni owonrin, eni a gbe ni oturupon — Celui qui est ne dans le chaos et le changement, celui qui vit dans la maladie et la guerison",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo owonrin ati oturupon, yoo mo aye — Celui qui connait l'adaptabilite et la resilience connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Oturupon en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la resilience pour sauver son peuple. Il comprit que embrasser le changement sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Embrasser le changement en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Oturupon.",
    interdictions: "Eviter l'instabilite chronique et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 102, hexagramYiJing: 44, geomancy: 10 },
  },
  161: {
    number: 161,
    name: "Owonrin-Otura",
    binarySignature: "10100001",
    meaning: "Dans Owonrin-Otura, le signal quantique revele l'intersection de le chaos et le changement et la mystique et la divination. Cet Odu apparait quand le consultant a besoin de combiner l'adaptabilite et la spiritualite pour resoudre une situation complexe. La jambe droite porte le message de Owonrin: embrasser le changement. La jambe gauche complete avec Otura: ecouter les signes divins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'instabilite chronique si le consultant penche trop a droite, ou dans le fanatisme religieux s'il penche trop a gauche. L'equilibre est la cle, et la transformation positive s'unit a la revelation mystique pour guider le pas du consultant.",
    proverbs: [
      "Owonrin-Otura: oju to ba ri, enu a wi — Owonrin-Otura: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Owonrin-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la mystique et la divination. Le voyageur devait embrasser le changement tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Embrasser le changement en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Otura.",
    interdictions: "Eviter l'instabilite chronique et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 103, hexagramYiJing: 41, geomancy: 10 },
  },
  174: {
    number: 174,
    name: "Owonrin-Irete",
    binarySignature: "10101110",
    meaning: "Owonrin-Irete tisse ensemble les fils de le chaos et le changement et l'endurance et la pression dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'adaptabilite est la force de la main droite, la perseverance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de embrasser le changement avec conscience et de resister et perseverer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la transformation positive rencontre la force interieure. Mais attention : l'instabilite chronique et l'obstination aveugle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Owonrin so fun Irete: \"Ise owo eni la fi n deni girigiri\" — Owonrin dit a Irete: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re owonrin, a ma ko irete — Quand on va vers le chaos et le changement, on apprend la perseverance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Irete en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la perseverance pour sauver son peuple. Il comprit que embrasser le changement sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Embrasser le changement en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Irete.",
    interdictions: "Eviter l'instabilite chronique et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 104, hexagramYiJing: 44, geomancy: 10 },
  },
  164: {
    number: 164,
    name: "Owonrin-Ose",
    binarySignature: "10100100",
    meaning: "L'apparition de Owonrin-Ose dans une consultation d'Ifa signale un moment ou le chaos et le changement et la beaute et l'enchantement convergent dans la vie du consultant. Owonrin apporte l'adaptabilite et la capacite de embrasser le changement. Ose complete avec la seduction et l'imperatif de cultiver la beaute. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Owonrin seul ni Ose seul, mais danser entre les deux comme l'equilibriste sur son fil. la transformation positive et l'amour et l'harmonie sont les fruits de cette danse, tandis que l'instabilite chronique et la vanite superficielle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni owonrin, eni a gbe ni ose — Celui qui est ne dans le chaos et le changement, celui qui vit dans la beaute et l'enchantement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo owonrin ati ose, yoo mo aye — Celui qui connait l'adaptabilite et la seduction connait le monde"
    ],
    eseIfaVerses: [
      "Owonrin-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le chaos et le changement croisait celle de la beaute et l'enchantement. Le voyageur devait embrasser le changement tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Embrasser le changement en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Ose.",
    interdictions: "Eviter l'instabilite chronique et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 105, hexagramYiJing: 42, geomancy: 10 },
  },
  171: {
    number: 171,
    name: "Owonrin-Ofun",
    binarySignature: "10101011",
    meaning: "Owonrin-Ofun combine l'energie de le chaos et le changement avec celle de la purete et le renouveau. Cet Odu revele une situation ou l'adaptabilite et la purete doivent s'harmoniser pour que le consultant avance. La jambe droite (Owonrin) apporte la transformation positive, tandis que la jambe gauche (Ofun) apporte la renaissance spirituelle. Le consultant est invite a embrasser le changement tout en sachant purifier et recommencer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'instabilite chronique ou de le refus du changement. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Owonrin-Ofun: oju to ba ri, enu a wi — Owonrin-Ofun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Owonrin-Ofun en consultation. On lui prescrivit de reconcilier l'adaptabilite avec la purete pour sauver son peuple. Il comprit que embrasser le changement sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Owonrin et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Embrasser le changement en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Owonrin et Ofun.",
    interdictions: "Eviter l'instabilite chronique et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 106, hexagramYiJing: 43, geomancy: 10 },
  },
  127: {
    number: 127,
    name: "Obara-Ogbe",
    binarySignature: "01111111",
    meaning: "Obara-Ogbe est un Odu de rencontre entre la parole et la richesse et la lumiere et la prosperite. Quand Obara (l'eloquence) croise Ogbe (la clarte), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Obara l'invite a parler avec pouvoir, Ogbe le pousse a ouvrir les chemins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la prosperite par la parole et la benediction supreme simultanement, a condition de ne ceder ni a les paroles vaines ni a l'orgueil spirituel.",
    proverbs: [
      "Obara so fun Ogbe: \"Ise owo eni la fi n deni girigiri\" — Obara dit a Ogbe: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re obara, a ma ko ogbe — Quand on va vers la parole et la richesse, on apprend la clarte"
    ],
    eseIfaVerses: [
      "Obara-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de la lumiere et la prosperite. Le voyageur devait parler avec pouvoir tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Parler avec pouvoir en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Ogbe.",
    interdictions: "Eviter les paroles vaines et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 107, hexagramYiJing: 32, geomancy: 7 },
  },
  112: {
    number: 112,
    name: "Obara-Oyeku",
    binarySignature: "01110000",
    meaning: "Dans Obara-Oyeku, le signal quantique revele l'intersection de la parole et la richesse et les mysteres et la mort-renaissance. Cet Odu apparait quand le consultant a besoin de combiner l'eloquence et la profondeur pour resoudre une situation complexe. La jambe droite porte le message de Obara: parler avec pouvoir. La jambe gauche complete avec Oyeku: honorer les ancetres. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans les paroles vaines si le consultant penche trop a droite, ou dans la peur de l'inconnu s'il penche trop a gauche. L'equilibre est la cle, et la prosperite par la parole s'unit a la protection ancestrale pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni obara, eni a gbe ni oyeku — Celui qui est ne dans la parole et la richesse, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo obara ati oyeku, yoo mo aye — Celui qui connait l'eloquence et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Oyeku en consultation. On lui prescrivit de reconcilier l'eloquence avec la profondeur pour sauver son peuple. Il comprit que parler avec pouvoir sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Parler avec pouvoir en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Oyeku.",
    interdictions: "Eviter les paroles vaines et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 108, hexagramYiJing: 29, geomancy: 7 },
  },
  118: {
    number: 118,
    name: "Obara-Iwori",
    binarySignature: "01110110",
    meaning: "Obara-Iwori tisse ensemble les fils de la parole et la richesse et la vision interieure dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'eloquence est la force de la main droite, la lucidite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de parler avec pouvoir avec conscience et de mediter et observer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la prosperite par la parole rencontre la clairvoyance. Mais attention : les paroles vaines et l'auto-illusion guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Obara-Iwori: oju to ba ri, enu a wi — Obara-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Obara-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de la vision interieure. Le voyageur devait parler avec pouvoir tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Parler avec pouvoir en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Iwori.",
    interdictions: "Eviter les paroles vaines et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 109, hexagramYiJing: 30, geomancy: 7 },
  },
  121: {
    number: 121,
    name: "Obara-Odi",
    binarySignature: "01111001",
    meaning: "L'apparition de Obara-Odi dans une consultation d'Ifa signale un moment ou la parole et la richesse et la creation et la fertilite convergent dans la vie du consultant. Obara apporte l'eloquence et la capacite de parler avec pouvoir. Odi complete avec la receptivite et l'imperatif de nourrir et creer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Obara seul ni Odi seul, mais danser entre les deux comme l'equilibriste sur son fil. la prosperite par la parole et l'abondance creatrice sont les fruits de cette danse, tandis que les paroles vaines et la sterilite emotionnelle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Obara so fun Odi: \"Ise owo eni la fi n deni girigiri\" — Obara dit a Odi: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re obara, a ma ko odi — Quand on va vers la parole et la richesse, on apprend la receptivite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Odi en consultation. On lui prescrivit de reconcilier l'eloquence avec la receptivite pour sauver son peuple. Il comprit que parler avec pouvoir sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Parler avec pouvoir en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Odi.",
    interdictions: "Eviter les paroles vaines et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 110, hexagramYiJing: 31, geomancy: 7 },
  },
  117: {
    number: 117,
    name: "Obara-Irosun",
    binarySignature: "01110101",
    meaning: "Obara-Irosun combine l'energie de la parole et la richesse avec celle de le sang et la lignee. Cet Odu revele une situation ou l'eloquence et la loyaute doivent s'harmoniser pour que le consultant avance. La jambe droite (Obara) apporte la prosperite par la parole, tandis que la jambe gauche (Irosun) apporte la continuite ancestrale. Le consultant est invite a parler avec pouvoir tout en sachant honorer sa lignee. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de les paroles vaines ou de la trahison familiale. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni obara, eni a gbe ni irosun — Celui qui est ne dans la parole et la richesse, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo obara ati irosun, yoo mo aye — Celui qui connait l'eloquence et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Obara-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de le sang et la lignee. Le voyageur devait parler avec pouvoir tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Parler avec pouvoir en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Irosun.",
    interdictions: "Eviter les paroles vaines et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 111, hexagramYiJing: 30, geomancy: 7 },
  },
  122: {
    number: 122,
    name: "Obara-Owonrin",
    binarySignature: "01111010",
    meaning: "Obara-Owonrin est un Odu de rencontre entre la parole et la richesse et le chaos et le changement. Quand Obara (l'eloquence) croise Owonrin (l'adaptabilite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Obara l'invite a parler avec pouvoir, Owonrin le pousse a embrasser le changement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la prosperite par la parole et la transformation positive simultanement, a condition de ne ceder ni a les paroles vaines ni a l'instabilite chronique.",
    proverbs: [
      "Obara-Owonrin: oju to ba ri, enu a wi — Obara-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Owonrin en consultation. On lui prescrivit de reconcilier l'eloquence avec l'adaptabilite pour sauver son peuple. Il comprit que parler avec pouvoir sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Parler avec pouvoir en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Owonrin.",
    interdictions: "Eviter les paroles vaines et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 112, hexagramYiJing: 31, geomancy: 7 },
  },
  119: {
    number: 119,
    name: "Obara Meji",
    binarySignature: "01110111",
    meaning: "Obara Meji est le septieme Odu, maitre de la parole, de l'eloquence et de la richesse. Son motif (0111-0111) represente une bouche ouverte avec trois souffles de parole — le pouvoir de la voix qui cree et transforme la realite. Obara est l'Odu des orateurs, des commercants et de ceux qui vivent par la parole. La richesse materielle et la prosperite commerciale sont ses domaines privilegies. Quand Obara apparait, le consultant possede un don de persuasion exceptionnel qu'il doit utiliser avec integrite. La parole peut construire des empires ou les detruire. Obara enseigne que la langue est l'organe le plus puissant du corps humain — plus tranchante que l'epee d'Ogun, plus douce que le miel d'Oshun. La cle est de parler vrai.",
    proverbs: [
      "Obara ta, owo de — Obara a parle, l'argent est arrive",
      "Enu eni ni o n pa eni — C'est la bouche de chacun qui le tue",
      "Oro kan soso le n be lenu awo — Un seul mot sacre reside dans la bouche de l'initie",
      "Owo ni e fi n se aye — C'est avec l'argent que l'on fait tourner le monde",
      "Ohun ti a ba wi, a gbodo wi daadaa — Ce que l'on dit, on doit le dire bien"
    ],
    eseIfaVerses: [
      "Obara etait pauvre mais sa voix etait d'or. Quand il parlait, les oiseaux s'arretaient de chanter pour l'ecouter, les arbres se penchaient et meme les pierres semblaient emu. Un jour, un roi entendit sa voix et l'invita a son palais. Obara chanta l'histoire de ses ancetres avec une telle beaute que le roi pleura et lui offrit la moitie de son royaume. Depuis ce jour, Obara enseigne que la vraie richesse est dans la maitrise de la parole, car celui qui sait parler transforme le plomb des mots en or de la sagesse.",
      "Un marchand avare refusa de partager sa richesse malgre les avertissements d'Obara Meji. Sa langue se lia — il ne pouvait plus negocier, plus convaincre, plus vendre. Il perdit tout en un mois. Quand il revint implorer Ifa, on lui prescrivit de donner la moitie de ce qui lui restait aux pauvres. Il obeit et sa langue se delia. Il devint le plus grand marchand de son epoque, mais cette fois genereux et juste. Obara dit : « La richesse qui ne circule pas pourrit comme l'eau stagnante. »",
      "Obara Meji enseigna a Orunmila l'art du chant sacre (ofo ase), ces paroles de pouvoir qui activent la force spirituelle (ase) contenue dans les mots. Chaque syllabe correctement prononcee est un acte de creation. Les incantations d'Ifa puisent leur efficacite dans cet enseignement d'Obara : la voix humaine, quand elle est alignee avec la verite, peut modifier la trame meme de la realite."
    ],
    orisha: "Shango",
    prescriptions: "Offrir un coq et six noix de cola. Developper l'art oratoire. Faire du commerce. Porter du rouge et blanc. Honorer les marchands et les artistes.",
    interdictions: "Ne pas mentir. Eviter les ragots et la calomnie. Ne pas gaspiller sa richesse. Ne pas utiliser la parole pour manipuler.",
    element: "Feu",
    correspondences: { rank: 7, hexagramYiJing: 30, geomancy: 7 },
  },
  120: {
    number: 120,
    name: "Obara-Okanran",
    binarySignature: "01111000",
    meaning: "Obara-Okanran tisse ensemble les fils de la parole et la richesse et le courage et la verite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'eloquence est la force de la main droite, l'honnetete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de parler avec pouvoir avec conscience et de affronter la verite avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la prosperite par la parole rencontre le courage du coeur. Mais attention : les paroles vaines et la brutalite inutile guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni obara, eni a gbe ni okanran — Celui qui est ne dans la parole et la richesse, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo obara ati okanran, yoo mo aye — Celui qui connait l'eloquence et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Okanran en consultation. On lui prescrivit de reconcilier l'eloquence avec l'honnetete pour sauver son peuple. Il comprit que parler avec pouvoir sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Parler avec pouvoir en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Okanran.",
    interdictions: "Eviter les paroles vaines et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 113, hexagramYiJing: 31, geomancy: 7 },
  },
  115: {
    number: 115,
    name: "Obara-Ogunda",
    binarySignature: "01110011",
    meaning: "L'apparition de Obara-Ogunda dans une consultation d'Ifa signale un moment ou la parole et la richesse et le fer et l'ouverture des chemins convergent dans la vie du consultant. Obara apporte l'eloquence et la capacite de parler avec pouvoir. Ogunda complete avec la determination et l'imperatif de debroussailler et avancer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Obara seul ni Ogunda seul, mais danser entre les deux comme l'equilibriste sur son fil. la prosperite par la parole et la voie ouverte sont les fruits de cette danse, tandis que les paroles vaines et la violence destructrice sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Obara-Ogunda: oju to ba ri, enu a wi — Obara-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Obara-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de le fer et l'ouverture des chemins. Le voyageur devait parler avec pouvoir tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Parler avec pouvoir en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Ogunda.",
    interdictions: "Eviter les paroles vaines et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 114, hexagramYiJing: 29, geomancy: 7 },
  },
  124: {
    number: 124,
    name: "Obara-Osa",
    binarySignature: "01111100",
    meaning: "Obara-Osa combine l'energie de la parole et la richesse avec celle de les forces occultes et les tempetes. Cet Odu revele une situation ou l'eloquence et la vigilance doivent s'harmoniser pour que le consultant avance. La jambe droite (Obara) apporte la prosperite par la parole, tandis que la jambe gauche (Osa) apporte le pouvoir feminin sacre. Le consultant est invite a parler avec pouvoir tout en sachant se proteger spirituellement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de les paroles vaines ou de la sorcellerie negligee. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Obara so fun Osa: \"Ise owo eni la fi n deni girigiri\" — Obara dit a Osa: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re obara, a ma ko osa — Quand on va vers la parole et la richesse, on apprend la vigilance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Osa en consultation. On lui prescrivit de reconcilier l'eloquence avec la vigilance pour sauver son peuple. Il comprit que parler avec pouvoir sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Parler avec pouvoir en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Osa.",
    interdictions: "Eviter les paroles vaines et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 115, hexagramYiJing: 32, geomancy: 7 },
  },
  114: {
    number: 114,
    name: "Obara-Ika",
    binarySignature: "01110010",
    meaning: "Obara-Ika est un Odu de rencontre entre la parole et la richesse et la ruse et la medecine. Quand Obara (l'eloquence) croise Ika (la patience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Obara l'invite a parler avec pouvoir, Ika le pousse a observer et attendre. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la prosperite par la parole et la guerison par la sagesse simultanement, a condition de ne ceder ni a les paroles vaines ni a la traitrise.",
    proverbs: [
      "Eni a bi ni obara, eni a gbe ni ika — Celui qui est ne dans la parole et la richesse, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo obara ati ika, yoo mo aye — Celui qui connait l'eloquence et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Obara-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de la ruse et la medecine. Le voyageur devait parler avec pouvoir tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Parler avec pouvoir en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Ika.",
    interdictions: "Eviter les paroles vaines et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 116, hexagramYiJing: 29, geomancy: 7 },
  },
  125: {
    number: 125,
    name: "Obara-Oturupon",
    binarySignature: "01111101",
    meaning: "Dans Obara-Oturupon, le signal quantique revele l'intersection de la parole et la richesse et la maladie et la guerison. Cet Odu apparait quand le consultant a besoin de combiner l'eloquence et la resilience pour resoudre une situation complexe. La jambe droite porte le message de Obara: parler avec pouvoir. La jambe gauche complete avec Oturupon: soigner corps et ame. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans les paroles vaines si le consultant penche trop a droite, ou dans la negligence sanitaire s'il penche trop a gauche. L'equilibre est la cle, et la prosperite par la parole s'unit a la sante retrouvee pour guider le pas du consultant.",
    proverbs: [
      "Obara-Oturupon: oju to ba ri, enu a wi — Obara-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Oturupon en consultation. On lui prescrivit de reconcilier l'eloquence avec la resilience pour sauver son peuple. Il comprit que parler avec pouvoir sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Parler avec pouvoir en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Oturupon.",
    interdictions: "Eviter les paroles vaines et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 117, hexagramYiJing: 32, geomancy: 7 },
  },
  113: {
    number: 113,
    name: "Obara-Otura",
    binarySignature: "01110001",
    meaning: "Obara-Otura tisse ensemble les fils de la parole et la richesse et la mystique et la divination dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'eloquence est la force de la main droite, la spiritualite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de parler avec pouvoir avec conscience et de ecouter les signes divins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la prosperite par la parole rencontre la revelation mystique. Mais attention : les paroles vaines et le fanatisme religieux guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Obara so fun Otura: \"Ise owo eni la fi n deni girigiri\" — Obara dit a Otura: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re obara, a ma ko otura — Quand on va vers la parole et la richesse, on apprend la spiritualite"
    ],
    eseIfaVerses: [
      "Obara-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de la mystique et la divination. Le voyageur devait parler avec pouvoir tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Parler avec pouvoir en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Otura.",
    interdictions: "Eviter les paroles vaines et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 118, hexagramYiJing: 29, geomancy: 7 },
  },
  126: {
    number: 126,
    name: "Obara-Irete",
    binarySignature: "01111110",
    meaning: "L'apparition de Obara-Irete dans une consultation d'Ifa signale un moment ou la parole et la richesse et l'endurance et la pression convergent dans la vie du consultant. Obara apporte l'eloquence et la capacite de parler avec pouvoir. Irete complete avec la perseverance et l'imperatif de resister et perseverer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Obara seul ni Irete seul, mais danser entre les deux comme l'equilibriste sur son fil. la prosperite par la parole et la force interieure sont les fruits de cette danse, tandis que les paroles vaines et l'obstination aveugle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni obara, eni a gbe ni irete — Celui qui est ne dans la parole et la richesse, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo obara ati irete, yoo mo aye — Celui qui connait l'eloquence et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Irete en consultation. On lui prescrivit de reconcilier l'eloquence avec la perseverance pour sauver son peuple. Il comprit que parler avec pouvoir sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Parler avec pouvoir en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Irete.",
    interdictions: "Eviter les paroles vaines et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 119, hexagramYiJing: 32, geomancy: 7 },
  },
  116: {
    number: 116,
    name: "Obara-Ose",
    binarySignature: "01110100",
    meaning: "Obara-Ose combine l'energie de la parole et la richesse avec celle de la beaute et l'enchantement. Cet Odu revele une situation ou l'eloquence et la seduction doivent s'harmoniser pour que le consultant avance. La jambe droite (Obara) apporte la prosperite par la parole, tandis que la jambe gauche (Ose) apporte l'amour et l'harmonie. Le consultant est invite a parler avec pouvoir tout en sachant cultiver la beaute. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de les paroles vaines ou de la vanite superficielle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Obara-Ose: oju to ba ri, enu a wi — Obara-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Obara-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la parole et la richesse croisait celle de la beaute et l'enchantement. Le voyageur devait parler avec pouvoir tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Parler avec pouvoir en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Ose.",
    interdictions: "Eviter les paroles vaines et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 120, hexagramYiJing: 30, geomancy: 7 },
  },
  123: {
    number: 123,
    name: "Obara-Ofun",
    binarySignature: "01111011",
    meaning: "Obara-Ofun est un Odu de rencontre entre la parole et la richesse et la purete et le renouveau. Quand Obara (l'eloquence) croise Ofun (la purete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Obara l'invite a parler avec pouvoir, Ofun le pousse a purifier et recommencer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la prosperite par la parole et la renaissance spirituelle simultanement, a condition de ne ceder ni a les paroles vaines ni a le refus du changement.",
    proverbs: [
      "Obara so fun Ofun: \"Ise owo eni la fi n deni girigiri\" — Obara dit a Ofun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re obara, a ma ko ofun — Quand on va vers la parole et la richesse, on apprend la purete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Obara-Ofun en consultation. On lui prescrivit de reconcilier l'eloquence avec la purete pour sauver son peuple. Il comprit que parler avec pouvoir sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Obara et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Parler avec pouvoir en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Obara et Ofun.",
    interdictions: "Eviter les paroles vaines et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 121, hexagramYiJing: 31, geomancy: 7 },
  },
  143: {
    number: 143,
    name: "Okanran-Ogbe",
    binarySignature: "10001111",
    meaning: "Dans Okanran-Ogbe, le signal quantique revele l'intersection de le courage et la verite et la lumiere et la prosperite. Cet Odu apparait quand le consultant a besoin de combiner l'honnetete et la clarte pour resoudre une situation complexe. La jambe droite porte le message de Okanran: affronter la verite. La jambe gauche complete avec Ogbe: ouvrir les chemins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la brutalite inutile si le consultant penche trop a droite, ou dans l'orgueil spirituel s'il penche trop a gauche. L'equilibre est la cle, et le courage du coeur s'unit a la benediction supreme pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni ogbe — Celui qui est ne dans le courage et la verite, celui qui vit dans la lumiere et la prosperite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati ogbe, yoo mo aye — Celui qui connait l'honnetete et la clarte connait le monde"
    ],
    eseIfaVerses: [
      "Okanran-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la lumiere et la prosperite. Le voyageur devait affronter la verite tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Affronter la verite en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Ogbe.",
    interdictions: "Eviter la brutalite inutile et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 122, hexagramYiJing: 36, geomancy: 8 },
  },
  128: {
    number: 128,
    name: "Okanran-Oyeku",
    binarySignature: "10000000",
    meaning: "Okanran-Oyeku tisse ensemble les fils de le courage et la verite et les mysteres et la mort-renaissance dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'honnetete est la force de la main droite, la profondeur est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de affronter la verite avec conscience et de honorer les ancetres avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou le courage du coeur rencontre la protection ancestrale. Mais attention : la brutalite inutile et la peur de l'inconnu guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Okanran-Oyeku: oju to ba ri, enu a wi — Okanran-Oyeku: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Oyeku en consultation. On lui prescrivit de reconcilier l'honnetete avec la profondeur pour sauver son peuple. Il comprit que affronter la verite sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Affronter la verite en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Oyeku.",
    interdictions: "Eviter la brutalite inutile et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 123, hexagramYiJing: 33, geomancy: 8 },
  },
  134: {
    number: 134,
    name: "Okanran-Iwori",
    binarySignature: "10000110",
    meaning: "L'apparition de Okanran-Iwori dans une consultation d'Ifa signale un moment ou le courage et la verite et la vision interieure convergent dans la vie du consultant. Okanran apporte l'honnetete et la capacite de affronter la verite. Iwori complete avec la lucidite et l'imperatif de mediter et observer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Okanran seul ni Iwori seul, mais danser entre les deux comme l'equilibriste sur son fil. le courage du coeur et la clairvoyance sont les fruits de cette danse, tandis que la brutalite inutile et l'auto-illusion sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Okanran so fun Iwori: \"Ise owo eni la fi n deni girigiri\" — Okanran dit a Iwori: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re okanran, a ma ko iwori — Quand on va vers le courage et la verite, on apprend la lucidite"
    ],
    eseIfaVerses: [
      "Okanran-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la vision interieure. Le voyageur devait affronter la verite tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Affronter la verite en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Iwori.",
    interdictions: "Eviter la brutalite inutile et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 124, hexagramYiJing: 34, geomancy: 8 },
  },
  137: {
    number: 137,
    name: "Okanran-Odi",
    binarySignature: "10001001",
    meaning: "Okanran-Odi combine l'energie de le courage et la verite avec celle de la creation et la fertilite. Cet Odu revele une situation ou l'honnetete et la receptivite doivent s'harmoniser pour que le consultant avance. La jambe droite (Okanran) apporte le courage du coeur, tandis que la jambe gauche (Odi) apporte l'abondance creatrice. Le consultant est invite a affronter la verite tout en sachant nourrir et creer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la brutalite inutile ou de la sterilite emotionnelle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni odi — Celui qui est ne dans le courage et la verite, celui qui vit dans la creation et la fertilite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati odi, yoo mo aye — Celui qui connait l'honnetete et la receptivite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Odi en consultation. On lui prescrivit de reconcilier l'honnetete avec la receptivite pour sauver son peuple. Il comprit que affronter la verite sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Affronter la verite en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Odi.",
    interdictions: "Eviter la brutalite inutile et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 125, hexagramYiJing: 35, geomancy: 8 },
  },
  133: {
    number: 133,
    name: "Okanran-Irosun",
    binarySignature: "10000101",
    meaning: "Okanran-Irosun est un Odu de rencontre entre le courage et la verite et le sang et la lignee. Quand Okanran (l'honnetete) croise Irosun (la loyaute), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Okanran l'invite a affronter la verite, Irosun le pousse a honorer sa lignee. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le courage du coeur et la continuite ancestrale simultanement, a condition de ne ceder ni a la brutalite inutile ni a la trahison familiale.",
    proverbs: [
      "Okanran-Irosun: oju to ba ri, enu a wi — Okanran-Irosun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Okanran-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de le sang et la lignee. Le voyageur devait affronter la verite tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Affronter la verite en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Irosun.",
    interdictions: "Eviter la brutalite inutile et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 126, hexagramYiJing: 34, geomancy: 8 },
  },
  138: {
    number: 138,
    name: "Okanran-Owonrin",
    binarySignature: "10001010",
    meaning: "Dans Okanran-Owonrin, le signal quantique revele l'intersection de le courage et la verite et le chaos et le changement. Cet Odu apparait quand le consultant a besoin de combiner l'honnetete et l'adaptabilite pour resoudre une situation complexe. La jambe droite porte le message de Okanran: affronter la verite. La jambe gauche complete avec Owonrin: embrasser le changement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la brutalite inutile si le consultant penche trop a droite, ou dans l'instabilite chronique s'il penche trop a gauche. L'equilibre est la cle, et le courage du coeur s'unit a la transformation positive pour guider le pas du consultant.",
    proverbs: [
      "Okanran so fun Owonrin: \"Ise owo eni la fi n deni girigiri\" — Okanran dit a Owonrin: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re okanran, a ma ko owonrin — Quand on va vers le courage et la verite, on apprend l'adaptabilite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Owonrin en consultation. On lui prescrivit de reconcilier l'honnetete avec l'adaptabilite pour sauver son peuple. Il comprit que affronter la verite sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Affronter la verite en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Owonrin.",
    interdictions: "Eviter la brutalite inutile et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 127, hexagramYiJing: 35, geomancy: 8 },
  },
  135: {
    number: 135,
    name: "Okanran-Obara",
    binarySignature: "10000111",
    meaning: "Okanran-Obara tisse ensemble les fils de le courage et la verite et la parole et la richesse dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'honnetete est la force de la main droite, l'eloquence est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de affronter la verite avec conscience et de parler avec pouvoir avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou le courage du coeur rencontre la prosperite par la parole. Mais attention : la brutalite inutile et les paroles vaines guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni obara — Celui qui est ne dans le courage et la verite, celui qui vit dans la parole et la richesse",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati obara, yoo mo aye — Celui qui connait l'honnetete et l'eloquence connait le monde"
    ],
    eseIfaVerses: [
      "Okanran-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la parole et la richesse. Le voyageur devait affronter la verite tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Affronter la verite en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Obara.",
    interdictions: "Eviter la brutalite inutile et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 128, hexagramYiJing: 34, geomancy: 8 },
  },
  136: {
    number: 136,
    name: "Okanran Meji",
    binarySignature: "10001000",
    meaning: "Okanran Meji est le huitieme Odu, gardien du coeur, du courage et de la verite interieure. Son motif (1000-1000) montre un seul trait plein au sommet suivi de vide — le battement solitaire du coeur, un coup puissant suivi de silence. Okanran est l'Odu de la bravoure, de l'honnetete brutale et de la confrontation avec la verite. Il refuse les compromis et les demi-mesures. Quand Okanran apparait, le consultant est appele a etre courageux, a dire ce qui doit etre dit et a faire ce qui doit etre fait, meme si cela deplait. Okanran enseigne que le coeur ne ment jamais et que suivre sa voix interieure, meme contre l'opinion de tous, est le chemin de l'honneur veritable.",
    proverbs: [
      "Okan kan soso ni o mo otito — Seul le coeur connait la verite",
      "Akoni ko ku meji — Le brave ne meurt pas deux fois",
      "Eni to beru, ko ni ri nkan se — Celui qui a peur ne fera jamais rien",
      "Otito duro sinsin bi igi ope — La verite se tient droite comme le palmier",
      "Okan eniyan ni ile eniyan — Le coeur de l'homme est sa maison"
    ],
    eseIfaVerses: [
      "Okanran etait un guerrier solitaire qui marchait toujours seul. Les autres guerriers le meprisaient pour son manque de troupes, mais quand l'ennemi attaqua, c'est Okanran qui tint le pont seul pendant trois jours, donnant le temps aux villageois de fuir. Blesse mais invaincu, il devint le symbole du courage veritable : non pas l'absence de peur, mais la decision d'agir malgre la peur. Les societes guerrieres yoruba invoquent Okanran avant chaque bataille.",
      "Un fils consulta Ifa car il ne savait pas s'il devait denoncer la corruption de son pere. Okanran Meji apparut et dit : « Le coeur qui voit l'injustice et se tait est complice. » Le fils parla et son pere fut juge. La communaute le respecta pour son courage, et son pere, une fois puni, reconnut que l'honnetete de son fils l'avait sauve d'une chute plus grave. Okanran enseigne que la verite peut blesser mais qu'elle guerit toujours a long terme.",
      "Okanran et Obara se disputerent un jour. Obara dit : « La parole douce convainc. » Okanran repondit : « La verite directe libere. » Orunmila trancha : « Les deux sont necessaires, mais sans le courage d'Okanran, les belles paroles d'Obara ne sont que du vent. » C'est pourquoi dans la tradition d'Ifa, le courage est considere comme la vertu premiere, le fondement sur lequel toutes les autres vertus s'appuient."
    ],
    orisha: "Ogun",
    prescriptions: "Offrir un coq et des ignames a Ogun. Dire la verite en toutes circonstances. Pratiquer un art martial. Porter du vert et noir.",
    interdictions: "Ne pas mentir par omission. Eviter la lachete. Ne pas trahir ses convictions. Ne pas fuir les conflits necessaires.",
    element: "Feu",
    correspondences: { rank: 8, hexagramYiJing: 35, geomancy: 8 },
  },
  131: {
    number: 131,
    name: "Okanran-Ogunda",
    binarySignature: "10000011",
    meaning: "Okanran-Ogunda combine l'energie de le courage et la verite avec celle de le fer et l'ouverture des chemins. Cet Odu revele une situation ou l'honnetete et la determination doivent s'harmoniser pour que le consultant avance. La jambe droite (Okanran) apporte le courage du coeur, tandis que la jambe gauche (Ogunda) apporte la voie ouverte. Le consultant est invite a affronter la verite tout en sachant debroussailler et avancer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la brutalite inutile ou de la violence destructrice. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Okanran so fun Ogunda: \"Ise owo eni la fi n deni girigiri\" — Okanran dit a Ogunda: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re okanran, a ma ko ogunda — Quand on va vers le courage et la verite, on apprend la determination"
    ],
    eseIfaVerses: [
      "Okanran-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de le fer et l'ouverture des chemins. Le voyageur devait affronter la verite tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Affronter la verite en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Ogunda.",
    interdictions: "Eviter la brutalite inutile et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 129, hexagramYiJing: 33, geomancy: 8 },
  },
  140: {
    number: 140,
    name: "Okanran-Osa",
    binarySignature: "10001100",
    meaning: "Okanran-Osa est un Odu de rencontre entre le courage et la verite et les forces occultes et les tempetes. Quand Okanran (l'honnetete) croise Osa (la vigilance), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Okanran l'invite a affronter la verite, Osa le pousse a se proteger spirituellement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le courage du coeur et le pouvoir feminin sacre simultanement, a condition de ne ceder ni a la brutalite inutile ni a la sorcellerie negligee.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni osa — Celui qui est ne dans le courage et la verite, celui qui vit dans les forces occultes et les tempetes",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati osa, yoo mo aye — Celui qui connait l'honnetete et la vigilance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Osa en consultation. On lui prescrivit de reconcilier l'honnetete avec la vigilance pour sauver son peuple. Il comprit que affronter la verite sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Affronter la verite en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Osa.",
    interdictions: "Eviter la brutalite inutile et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 130, hexagramYiJing: 36, geomancy: 8 },
  },
  130: {
    number: 130,
    name: "Okanran-Ika",
    binarySignature: "10000010",
    meaning: "Dans Okanran-Ika, le signal quantique revele l'intersection de le courage et la verite et la ruse et la medecine. Cet Odu apparait quand le consultant a besoin de combiner l'honnetete et la patience pour resoudre une situation complexe. La jambe droite porte le message de Okanran: affronter la verite. La jambe gauche complete avec Ika: observer et attendre. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la brutalite inutile si le consultant penche trop a droite, ou dans la traitrise s'il penche trop a gauche. L'equilibre est la cle, et le courage du coeur s'unit a la guerison par la sagesse pour guider le pas du consultant.",
    proverbs: [
      "Okanran-Ika: oju to ba ri, enu a wi — Okanran-Ika: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Okanran-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la ruse et la medecine. Le voyageur devait affronter la verite tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Affronter la verite en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Ika.",
    interdictions: "Eviter la brutalite inutile et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 131, hexagramYiJing: 33, geomancy: 8 },
  },
  141: {
    number: 141,
    name: "Okanran-Oturupon",
    binarySignature: "10001101",
    meaning: "Okanran-Oturupon tisse ensemble les fils de le courage et la verite et la maladie et la guerison dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. l'honnetete est la force de la main droite, la resilience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de affronter la verite avec conscience et de soigner corps et ame avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou le courage du coeur rencontre la sante retrouvee. Mais attention : la brutalite inutile et la negligence sanitaire guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Okanran so fun Oturupon: \"Ise owo eni la fi n deni girigiri\" — Okanran dit a Oturupon: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re okanran, a ma ko oturupon — Quand on va vers le courage et la verite, on apprend la resilience"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Oturupon en consultation. On lui prescrivit de reconcilier l'honnetete avec la resilience pour sauver son peuple. Il comprit que affronter la verite sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Affronter la verite en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Oturupon.",
    interdictions: "Eviter la brutalite inutile et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 132, hexagramYiJing: 36, geomancy: 8 },
  },
  129: {
    number: 129,
    name: "Okanran-Otura",
    binarySignature: "10000001",
    meaning: "L'apparition de Okanran-Otura dans une consultation d'Ifa signale un moment ou le courage et la verite et la mystique et la divination convergent dans la vie du consultant. Okanran apporte l'honnetete et la capacite de affronter la verite. Otura complete avec la spiritualite et l'imperatif de ecouter les signes divins. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Okanran seul ni Otura seul, mais danser entre les deux comme l'equilibriste sur son fil. le courage du coeur et la revelation mystique sont les fruits de cette danse, tandis que la brutalite inutile et le fanatisme religieux sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni otura — Celui qui est ne dans le courage et la verite, celui qui vit dans la mystique et la divination",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati otura, yoo mo aye — Celui qui connait l'honnetete et la spiritualite connait le monde"
    ],
    eseIfaVerses: [
      "Okanran-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la mystique et la divination. Le voyageur devait affronter la verite tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Affronter la verite en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Otura.",
    interdictions: "Eviter la brutalite inutile et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 133, hexagramYiJing: 33, geomancy: 8 },
  },
  142: {
    number: 142,
    name: "Okanran-Irete",
    binarySignature: "10001110",
    meaning: "Okanran-Irete combine l'energie de le courage et la verite avec celle de l'endurance et la pression. Cet Odu revele une situation ou l'honnetete et la perseverance doivent s'harmoniser pour que le consultant avance. La jambe droite (Okanran) apporte le courage du coeur, tandis que la jambe gauche (Irete) apporte la force interieure. Le consultant est invite a affronter la verite tout en sachant resister et perseverer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la brutalite inutile ou de l'obstination aveugle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Okanran-Irete: oju to ba ri, enu a wi — Okanran-Irete: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Irete en consultation. On lui prescrivit de reconcilier l'honnetete avec la perseverance pour sauver son peuple. Il comprit que affronter la verite sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Affronter la verite en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Irete.",
    interdictions: "Eviter la brutalite inutile et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 134, hexagramYiJing: 36, geomancy: 8 },
  },
  132: {
    number: 132,
    name: "Okanran-Ose",
    binarySignature: "10000100",
    meaning: "Okanran-Ose est un Odu de rencontre entre le courage et la verite et la beaute et l'enchantement. Quand Okanran (l'honnetete) croise Ose (la seduction), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Okanran l'invite a affronter la verite, Ose le pousse a cultiver la beaute. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le courage du coeur et l'amour et l'harmonie simultanement, a condition de ne ceder ni a la brutalite inutile ni a la vanite superficielle.",
    proverbs: [
      "Okanran so fun Ose: \"Ise owo eni la fi n deni girigiri\" — Okanran dit a Ose: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re okanran, a ma ko ose — Quand on va vers le courage et la verite, on apprend la seduction"
    ],
    eseIfaVerses: [
      "Okanran-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le courage et la verite croisait celle de la beaute et l'enchantement. Le voyageur devait affronter la verite tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Affronter la verite en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Ose.",
    interdictions: "Eviter la brutalite inutile et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 135, hexagramYiJing: 34, geomancy: 8 },
  },
  139: {
    number: 139,
    name: "Okanran-Ofun",
    binarySignature: "10001011",
    meaning: "Dans Okanran-Ofun, le signal quantique revele l'intersection de le courage et la verite et la purete et le renouveau. Cet Odu apparait quand le consultant a besoin de combiner l'honnetete et la purete pour resoudre une situation complexe. La jambe droite porte le message de Okanran: affronter la verite. La jambe gauche complete avec Ofun: purifier et recommencer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la brutalite inutile si le consultant penche trop a droite, ou dans le refus du changement s'il penche trop a gauche. L'equilibre est la cle, et le courage du coeur s'unit a la renaissance spirituelle pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni okanran, eni a gbe ni ofun — Celui qui est ne dans le courage et la verite, celui qui vit dans la purete et le renouveau",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo okanran ati ofun, yoo mo aye — Celui qui connait l'honnetete et la purete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Okanran-Ofun en consultation. On lui prescrivit de reconcilier l'honnetete avec la purete pour sauver son peuple. Il comprit que affronter la verite sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Okanran et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Affronter la verite en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Okanran et Ofun.",
    interdictions: "Eviter la brutalite inutile et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 136, hexagramYiJing: 35, geomancy: 8 },
  },
  63: {
    number: 63,
    name: "Ogunda-Ogbe",
    binarySignature: "00111111",
    meaning: "Ogunda-Ogbe tisse ensemble les fils de le fer et l'ouverture des chemins et la lumiere et la prosperite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la determination est la force de la main droite, la clarte est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de debroussailler et avancer avec conscience et de ouvrir les chemins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la voie ouverte rencontre la benediction supreme. Mais attention : la violence destructrice et l'orgueil spirituel guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ogunda-Ogbe: oju to ba ri, enu a wi — Ogunda-Ogbe: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogunda-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la lumiere et la prosperite. Le voyageur devait debroussailler et avancer tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Debroussailler et avancer en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Ogbe.",
    interdictions: "Eviter la violence destructrice et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 137, hexagramYiJing: 16, geomancy: 3 },
  },
  48: {
    number: 48,
    name: "Ogunda-Oyeku",
    binarySignature: "00110000",
    meaning: "L'apparition de Ogunda-Oyeku dans une consultation d'Ifa signale un moment ou le fer et l'ouverture des chemins et les mysteres et la mort-renaissance convergent dans la vie du consultant. Ogunda apporte la determination et la capacite de debroussailler et avancer. Oyeku complete avec la profondeur et l'imperatif de honorer les ancetres. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogunda seul ni Oyeku seul, mais danser entre les deux comme l'equilibriste sur son fil. la voie ouverte et la protection ancestrale sont les fruits de cette danse, tandis que la violence destructrice et la peur de l'inconnu sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ogunda so fun Oyeku: \"Ise owo eni la fi n deni girigiri\" — Ogunda dit a Oyeku: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogunda, a ma ko oyeku — Quand on va vers le fer et l'ouverture des chemins, on apprend la profondeur"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Oyeku en consultation. On lui prescrivit de reconcilier la determination avec la profondeur pour sauver son peuple. Il comprit que debroussailler et avancer sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Debroussailler et avancer en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Oyeku.",
    interdictions: "Eviter la violence destructrice et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 138, hexagramYiJing: 13, geomancy: 3 },
  },
  54: {
    number: 54,
    name: "Ogunda-Iwori",
    binarySignature: "00110110",
    meaning: "Ogunda-Iwori combine l'energie de le fer et l'ouverture des chemins avec celle de la vision interieure. Cet Odu revele une situation ou la determination et la lucidite doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogunda) apporte la voie ouverte, tandis que la jambe gauche (Iwori) apporte la clairvoyance. Le consultant est invite a debroussailler et avancer tout en sachant mediter et observer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la violence destructrice ou de l'auto-illusion. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ogunda, eni a gbe ni iwori — Celui qui est ne dans le fer et l'ouverture des chemins, celui qui vit dans la vision interieure",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogunda ati iwori, yoo mo aye — Celui qui connait la determination et la lucidite connait le monde"
    ],
    eseIfaVerses: [
      "Ogunda-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la vision interieure. Le voyageur devait debroussailler et avancer tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Debroussailler et avancer en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Iwori.",
    interdictions: "Eviter la violence destructrice et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 139, hexagramYiJing: 14, geomancy: 3 },
  },
  57: {
    number: 57,
    name: "Ogunda-Odi",
    binarySignature: "00111001",
    meaning: "Ogunda-Odi est un Odu de rencontre entre le fer et l'ouverture des chemins et la creation et la fertilite. Quand Ogunda (la determination) croise Odi (la receptivite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ogunda l'invite a debroussailler et avancer, Odi le pousse a nourrir et creer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la voie ouverte et l'abondance creatrice simultanement, a condition de ne ceder ni a la violence destructrice ni a la sterilite emotionnelle.",
    proverbs: [
      "Ogunda-Odi: oju to ba ri, enu a wi — Ogunda-Odi: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Odi en consultation. On lui prescrivit de reconcilier la determination avec la receptivite pour sauver son peuple. Il comprit que debroussailler et avancer sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Debroussailler et avancer en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Odi.",
    interdictions: "Eviter la violence destructrice et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 140, hexagramYiJing: 15, geomancy: 3 },
  },
  53: {
    number: 53,
    name: "Ogunda-Irosun",
    binarySignature: "00110101",
    meaning: "Dans Ogunda-Irosun, le signal quantique revele l'intersection de le fer et l'ouverture des chemins et le sang et la lignee. Cet Odu apparait quand le consultant a besoin de combiner la determination et la loyaute pour resoudre une situation complexe. La jambe droite porte le message de Ogunda: debroussailler et avancer. La jambe gauche complete avec Irosun: honorer sa lignee. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la violence destructrice si le consultant penche trop a droite, ou dans la trahison familiale s'il penche trop a gauche. L'equilibre est la cle, et la voie ouverte s'unit a la continuite ancestrale pour guider le pas du consultant.",
    proverbs: [
      "Ogunda so fun Irosun: \"Ise owo eni la fi n deni girigiri\" — Ogunda dit a Irosun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogunda, a ma ko irosun — Quand on va vers le fer et l'ouverture des chemins, on apprend la loyaute"
    ],
    eseIfaVerses: [
      "Ogunda-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de le sang et la lignee. Le voyageur devait debroussailler et avancer tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Debroussailler et avancer en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Irosun.",
    interdictions: "Eviter la violence destructrice et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 141, hexagramYiJing: 14, geomancy: 3 },
  },
  58: {
    number: 58,
    name: "Ogunda-Owonrin",
    binarySignature: "00111010",
    meaning: "Ogunda-Owonrin tisse ensemble les fils de le fer et l'ouverture des chemins et le chaos et le changement dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la determination est la force de la main droite, l'adaptabilite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de debroussailler et avancer avec conscience et de embrasser le changement avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la voie ouverte rencontre la transformation positive. Mais attention : la violence destructrice et l'instabilite chronique guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni ogunda, eni a gbe ni owonrin — Celui qui est ne dans le fer et l'ouverture des chemins, celui qui vit dans le chaos et le changement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogunda ati owonrin, yoo mo aye — Celui qui connait la determination et l'adaptabilite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Owonrin en consultation. On lui prescrivit de reconcilier la determination avec l'adaptabilite pour sauver son peuple. Il comprit que debroussailler et avancer sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Debroussailler et avancer en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Owonrin.",
    interdictions: "Eviter la violence destructrice et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 142, hexagramYiJing: 15, geomancy: 3 },
  },
  55: {
    number: 55,
    name: "Ogunda-Obara",
    binarySignature: "00110111",
    meaning: "L'apparition de Ogunda-Obara dans une consultation d'Ifa signale un moment ou le fer et l'ouverture des chemins et la parole et la richesse convergent dans la vie du consultant. Ogunda apporte la determination et la capacite de debroussailler et avancer. Obara complete avec l'eloquence et l'imperatif de parler avec pouvoir. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogunda seul ni Obara seul, mais danser entre les deux comme l'equilibriste sur son fil. la voie ouverte et la prosperite par la parole sont les fruits de cette danse, tandis que la violence destructrice et les paroles vaines sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ogunda-Obara: oju to ba ri, enu a wi — Ogunda-Obara: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogunda-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la parole et la richesse. Le voyageur devait debroussailler et avancer tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Debroussailler et avancer en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Obara.",
    interdictions: "Eviter la violence destructrice et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 143, hexagramYiJing: 14, geomancy: 3 },
  },
  56: {
    number: 56,
    name: "Ogunda-Okanran",
    binarySignature: "00111000",
    meaning: "Ogunda-Okanran combine l'energie de le fer et l'ouverture des chemins avec celle de le courage et la verite. Cet Odu revele une situation ou la determination et l'honnetete doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogunda) apporte la voie ouverte, tandis que la jambe gauche (Okanran) apporte le courage du coeur. Le consultant est invite a debroussailler et avancer tout en sachant affronter la verite. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la violence destructrice ou de la brutalite inutile. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ogunda so fun Okanran: \"Ise owo eni la fi n deni girigiri\" — Ogunda dit a Okanran: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogunda, a ma ko okanran — Quand on va vers le fer et l'ouverture des chemins, on apprend l'honnetete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Okanran en consultation. On lui prescrivit de reconcilier la determination avec l'honnetete pour sauver son peuple. Il comprit que debroussailler et avancer sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Debroussailler et avancer en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Okanran.",
    interdictions: "Eviter la violence destructrice et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 144, hexagramYiJing: 15, geomancy: 3 },
  },
  51: {
    number: 51,
    name: "Ogunda Meji",
    binarySignature: "00110011",
    meaning: "Ogunda Meji est le neuvieme Odu, lie au fer, a la guerre, au debroussaillage et a l'ouverture des chemins. Son motif (0011-0011) evoque une lance pointee vers le haut — l'outil qui fend la brousse pour creer un passage. Ogunda est l'Odu d'Ogun par excellence, le maitre du fer qui forge les outils de la civilisation. Il represente la determination inflexible, la capacite de se frayer un chemin meme dans les situations les plus hostiles. Quand Ogunda apparait, le consultant doit agir avec decision et determination. Les obstacles seront surmontes par la force de la volonte et l'action directe. Ogunda enseigne que chaque chemin dans la foret a ete ouvert par quelqu'un qui a eu le courage de manier la machette.",
    proverbs: [
      "Ogunda meji, ogun nla n bo — Ogunda Meji, une grande guerre approche",
      "Ada ori igi, igba ni o n be lara igi — La hache frappe l'arbre, mais l'arbre a deux cents branches",
      "Ija to gun ni o lese — Le combat qui dure a un prix",
      "Irin ni baba ohun gbogbo — Le fer est le pere de toutes choses",
      "Ona ti a ko mo, eni to mo ona lo n to — Le chemin qu'on ne connait pas, c'est celui qui le connait qui guide"
    ],
    eseIfaVerses: [
      "Quand la terre etait couverte d'une foret impenetrable et que les humains vivaient comme des animaux, Ogun descendit avec sa machette de fer. Il coupa les arbres, ouvrit les chemins, et crea les premieres routes entre les villages. Ogunda Meji etait a ses cotes, guidant chaque coup de machette. C'est pourquoi Ogunda est l'Odu des pionniers, de ceux qui ouvrent la voie pour les autres. Sans Ogunda, la civilisation n'aurait jamais pu s'etendre au-dela de la clairiere originelle.",
      "Un jeune homme se trouva face a un mur infranchissable sur son chemin de vie. Il consulta Ifa et obtint Ogunda Meji. Le babalawo lui dit : « Le mur n'existe que dans ta tete. Prends ta machette — ta volonte — et frappe. » Le jeune homme agit avec determination et decouvrit que le mur n'etait qu'un rideau d'illusions. Derriere se trouvait le chemin de sa destinee. Ogunda enseigne que la plupart des obstacles sont interieurs, et que la volonte est la machette de l'ame.",
      "Ogunda revela aux forgerons le secret du fer : pour transformer le minerai brut en outil utile, il faut le soumettre au feu, le frapper avec force et le tremper dans l'eau. Ce processus est une metaphore de la transformation humaine : l'epreuve du feu (souffrance), le martelage (discipline) et la trempe (sagesse acquise) sont necessaires pour forger un caractere d'acier."
    ],
    orisha: "Ogun",
    prescriptions: "Offrir un chien, de l'huile de palme et des outils en fer a Ogun. Se lancer dans de nouveaux projets avec determination. Porter du vert fonce.",
    interdictions: "Ne pas reculer devant les obstacles. Eviter la violence gratuite. Ne pas abuser des armes. Ne pas detruire sans reconstruire.",
    element: "Feu",
    correspondences: { rank: 9, hexagramYiJing: 13, geomancy: 3 },
  },
  60: {
    number: 60,
    name: "Ogunda-Osa",
    binarySignature: "00111100",
    meaning: "Dans Ogunda-Osa, le signal quantique revele l'intersection de le fer et l'ouverture des chemins et les forces occultes et les tempetes. Cet Odu apparait quand le consultant a besoin de combiner la determination et la vigilance pour resoudre une situation complexe. La jambe droite porte le message de Ogunda: debroussailler et avancer. La jambe gauche complete avec Osa: se proteger spirituellement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la violence destructrice si le consultant penche trop a droite, ou dans la sorcellerie negligee s'il penche trop a gauche. L'equilibre est la cle, et la voie ouverte s'unit a le pouvoir feminin sacre pour guider le pas du consultant.",
    proverbs: [
      "Ogunda-Osa: oju to ba ri, enu a wi — Ogunda-Osa: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Osa en consultation. On lui prescrivit de reconcilier la determination avec la vigilance pour sauver son peuple. Il comprit que debroussailler et avancer sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Debroussailler et avancer en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Osa.",
    interdictions: "Eviter la violence destructrice et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 145, hexagramYiJing: 16, geomancy: 3 },
  },
  50: {
    number: 50,
    name: "Ogunda-Ika",
    binarySignature: "00110010",
    meaning: "Ogunda-Ika tisse ensemble les fils de le fer et l'ouverture des chemins et la ruse et la medecine dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la determination est la force de la main droite, la patience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de debroussailler et avancer avec conscience et de observer et attendre avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la voie ouverte rencontre la guerison par la sagesse. Mais attention : la violence destructrice et la traitrise guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ogunda so fun Ika: \"Ise owo eni la fi n deni girigiri\" — Ogunda dit a Ika: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogunda, a ma ko ika — Quand on va vers le fer et l'ouverture des chemins, on apprend la patience"
    ],
    eseIfaVerses: [
      "Ogunda-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la ruse et la medecine. Le voyageur devait debroussailler et avancer tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Debroussailler et avancer en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Ika.",
    interdictions: "Eviter la violence destructrice et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 146, hexagramYiJing: 13, geomancy: 3 },
  },
  61: {
    number: 61,
    name: "Ogunda-Oturupon",
    binarySignature: "00111101",
    meaning: "L'apparition de Ogunda-Oturupon dans une consultation d'Ifa signale un moment ou le fer et l'ouverture des chemins et la maladie et la guerison convergent dans la vie du consultant. Ogunda apporte la determination et la capacite de debroussailler et avancer. Oturupon complete avec la resilience et l'imperatif de soigner corps et ame. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ogunda seul ni Oturupon seul, mais danser entre les deux comme l'equilibriste sur son fil. la voie ouverte et la sante retrouvee sont les fruits de cette danse, tandis que la violence destructrice et la negligence sanitaire sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni ogunda, eni a gbe ni oturupon — Celui qui est ne dans le fer et l'ouverture des chemins, celui qui vit dans la maladie et la guerison",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogunda ati oturupon, yoo mo aye — Celui qui connait la determination et la resilience connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Oturupon en consultation. On lui prescrivit de reconcilier la determination avec la resilience pour sauver son peuple. Il comprit que debroussailler et avancer sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Debroussailler et avancer en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Oturupon.",
    interdictions: "Eviter la violence destructrice et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 147, hexagramYiJing: 16, geomancy: 3 },
  },
  49: {
    number: 49,
    name: "Ogunda-Otura",
    binarySignature: "00110001",
    meaning: "Ogunda-Otura combine l'energie de le fer et l'ouverture des chemins avec celle de la mystique et la divination. Cet Odu revele une situation ou la determination et la spiritualite doivent s'harmoniser pour que le consultant avance. La jambe droite (Ogunda) apporte la voie ouverte, tandis que la jambe gauche (Otura) apporte la revelation mystique. Le consultant est invite a debroussailler et avancer tout en sachant ecouter les signes divins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la violence destructrice ou de le fanatisme religieux. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ogunda-Otura: oju to ba ri, enu a wi — Ogunda-Otura: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ogunda-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la mystique et la divination. Le voyageur devait debroussailler et avancer tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Debroussailler et avancer en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Otura.",
    interdictions: "Eviter la violence destructrice et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 148, hexagramYiJing: 13, geomancy: 3 },
  },
  62: {
    number: 62,
    name: "Ogunda-Irete",
    binarySignature: "00111110",
    meaning: "Ogunda-Irete est un Odu de rencontre entre le fer et l'ouverture des chemins et l'endurance et la pression. Quand Ogunda (la determination) croise Irete (la perseverance), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ogunda l'invite a debroussailler et avancer, Irete le pousse a resister et perseverer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la voie ouverte et la force interieure simultanement, a condition de ne ceder ni a la violence destructrice ni a l'obstination aveugle.",
    proverbs: [
      "Ogunda so fun Irete: \"Ise owo eni la fi n deni girigiri\" — Ogunda dit a Irete: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ogunda, a ma ko irete — Quand on va vers le fer et l'ouverture des chemins, on apprend la perseverance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Irete en consultation. On lui prescrivit de reconcilier la determination avec la perseverance pour sauver son peuple. Il comprit que debroussailler et avancer sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Debroussailler et avancer en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Irete.",
    interdictions: "Eviter la violence destructrice et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 149, hexagramYiJing: 16, geomancy: 3 },
  },
  52: {
    number: 52,
    name: "Ogunda-Ose",
    binarySignature: "00110100",
    meaning: "Dans Ogunda-Ose, le signal quantique revele l'intersection de le fer et l'ouverture des chemins et la beaute et l'enchantement. Cet Odu apparait quand le consultant a besoin de combiner la determination et la seduction pour resoudre une situation complexe. La jambe droite porte le message de Ogunda: debroussailler et avancer. La jambe gauche complete avec Ose: cultiver la beaute. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la violence destructrice si le consultant penche trop a droite, ou dans la vanite superficielle s'il penche trop a gauche. L'equilibre est la cle, et la voie ouverte s'unit a l'amour et l'harmonie pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni ogunda, eni a gbe ni ose — Celui qui est ne dans le fer et l'ouverture des chemins, celui qui vit dans la beaute et l'enchantement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ogunda ati ose, yoo mo aye — Celui qui connait la determination et la seduction connait le monde"
    ],
    eseIfaVerses: [
      "Ogunda-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de le fer et l'ouverture des chemins croisait celle de la beaute et l'enchantement. Le voyageur devait debroussailler et avancer tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Debroussailler et avancer en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Ose.",
    interdictions: "Eviter la violence destructrice et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 150, hexagramYiJing: 14, geomancy: 3 },
  },
  59: {
    number: 59,
    name: "Ogunda-Ofun",
    binarySignature: "00111011",
    meaning: "Ogunda-Ofun tisse ensemble les fils de le fer et l'ouverture des chemins et la purete et le renouveau dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la determination est la force de la main droite, la purete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de debroussailler et avancer avec conscience et de purifier et recommencer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la voie ouverte rencontre la renaissance spirituelle. Mais attention : la violence destructrice et le refus du changement guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ogunda-Ofun: oju to ba ri, enu a wi — Ogunda-Ofun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ogunda-Ofun en consultation. On lui prescrivit de reconcilier la determination avec la purete pour sauver son peuple. Il comprit que debroussailler et avancer sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ogunda et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Debroussailler et avancer en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ogunda et Ofun.",
    interdictions: "Eviter la violence destructrice et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 151, hexagramYiJing: 15, geomancy: 3 },
  },
  207: {
    number: 207,
    name: "Osa-Ogbe",
    binarySignature: "11001111",
    meaning: "L'apparition de Osa-Ogbe dans une consultation d'Ifa signale un moment ou les forces occultes et les tempetes et la lumiere et la prosperite convergent dans la vie du consultant. Osa apporte la vigilance et la capacite de se proteger spirituellement. Ogbe complete avec la clarte et l'imperatif de ouvrir les chemins. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Osa seul ni Ogbe seul, mais danser entre les deux comme l'equilibriste sur son fil. le pouvoir feminin sacre et la benediction supreme sont les fruits de cette danse, tandis que la sorcellerie negligee et l'orgueil spirituel sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Osa so fun Ogbe: \"Ise owo eni la fi n deni girigiri\" — Osa dit a Ogbe: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re osa, a ma ko ogbe — Quand on va vers les forces occultes et les tempetes, on apprend la clarte"
    ],
    eseIfaVerses: [
      "Osa-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la lumiere et la prosperite. Le voyageur devait se proteger spirituellement tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Se proteger spirituellement en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Ogbe.",
    interdictions: "Eviter la sorcellerie negligee et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 152, hexagramYiJing: 52, geomancy: 12 },
  },
  192: {
    number: 192,
    name: "Osa-Oyeku",
    binarySignature: "11000000",
    meaning: "Osa-Oyeku combine l'energie de les forces occultes et les tempetes avec celle de les mysteres et la mort-renaissance. Cet Odu revele une situation ou la vigilance et la profondeur doivent s'harmoniser pour que le consultant avance. La jambe droite (Osa) apporte le pouvoir feminin sacre, tandis que la jambe gauche (Oyeku) apporte la protection ancestrale. Le consultant est invite a se proteger spirituellement tout en sachant honorer les ancetres. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sorcellerie negligee ou de la peur de l'inconnu. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni osa, eni a gbe ni oyeku — Celui qui est ne dans les forces occultes et les tempetes, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo osa ati oyeku, yoo mo aye — Celui qui connait la vigilance et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Oyeku en consultation. On lui prescrivit de reconcilier la vigilance avec la profondeur pour sauver son peuple. Il comprit que se proteger spirituellement sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Se proteger spirituellement en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Oyeku.",
    interdictions: "Eviter la sorcellerie negligee et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 153, hexagramYiJing: 49, geomancy: 12 },
  },
  198: {
    number: 198,
    name: "Osa-Iwori",
    binarySignature: "11000110",
    meaning: "Osa-Iwori est un Odu de rencontre entre les forces occultes et les tempetes et la vision interieure. Quand Osa (la vigilance) croise Iwori (la lucidite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Osa l'invite a se proteger spirituellement, Iwori le pousse a mediter et observer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le pouvoir feminin sacre et la clairvoyance simultanement, a condition de ne ceder ni a la sorcellerie negligee ni a l'auto-illusion.",
    proverbs: [
      "Osa-Iwori: oju to ba ri, enu a wi — Osa-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Osa-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la vision interieure. Le voyageur devait se proteger spirituellement tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Se proteger spirituellement en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Iwori.",
    interdictions: "Eviter la sorcellerie negligee et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 154, hexagramYiJing: 50, geomancy: 12 },
  },
  201: {
    number: 201,
    name: "Osa-Odi",
    binarySignature: "11001001",
    meaning: "Dans Osa-Odi, le signal quantique revele l'intersection de les forces occultes et les tempetes et la creation et la fertilite. Cet Odu apparait quand le consultant a besoin de combiner la vigilance et la receptivite pour resoudre une situation complexe. La jambe droite porte le message de Osa: se proteger spirituellement. La jambe gauche complete avec Odi: nourrir et creer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sorcellerie negligee si le consultant penche trop a droite, ou dans la sterilite emotionnelle s'il penche trop a gauche. L'equilibre est la cle, et le pouvoir feminin sacre s'unit a l'abondance creatrice pour guider le pas du consultant.",
    proverbs: [
      "Osa so fun Odi: \"Ise owo eni la fi n deni girigiri\" — Osa dit a Odi: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re osa, a ma ko odi — Quand on va vers les forces occultes et les tempetes, on apprend la receptivite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Odi en consultation. On lui prescrivit de reconcilier la vigilance avec la receptivite pour sauver son peuple. Il comprit que se proteger spirituellement sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Se proteger spirituellement en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Odi.",
    interdictions: "Eviter la sorcellerie negligee et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 155, hexagramYiJing: 51, geomancy: 12 },
  },
  197: {
    number: 197,
    name: "Osa-Irosun",
    binarySignature: "11000101",
    meaning: "Osa-Irosun tisse ensemble les fils de les forces occultes et les tempetes et le sang et la lignee dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la vigilance est la force de la main droite, la loyaute est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de se proteger spirituellement avec conscience et de honorer sa lignee avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou le pouvoir feminin sacre rencontre la continuite ancestrale. Mais attention : la sorcellerie negligee et la trahison familiale guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni osa, eni a gbe ni irosun — Celui qui est ne dans les forces occultes et les tempetes, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo osa ati irosun, yoo mo aye — Celui qui connait la vigilance et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Osa-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de le sang et la lignee. Le voyageur devait se proteger spirituellement tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Se proteger spirituellement en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Irosun.",
    interdictions: "Eviter la sorcellerie negligee et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 156, hexagramYiJing: 50, geomancy: 12 },
  },
  202: {
    number: 202,
    name: "Osa-Owonrin",
    binarySignature: "11001010",
    meaning: "L'apparition de Osa-Owonrin dans une consultation d'Ifa signale un moment ou les forces occultes et les tempetes et le chaos et le changement convergent dans la vie du consultant. Osa apporte la vigilance et la capacite de se proteger spirituellement. Owonrin complete avec l'adaptabilite et l'imperatif de embrasser le changement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Osa seul ni Owonrin seul, mais danser entre les deux comme l'equilibriste sur son fil. le pouvoir feminin sacre et la transformation positive sont les fruits de cette danse, tandis que la sorcellerie negligee et l'instabilite chronique sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Osa-Owonrin: oju to ba ri, enu a wi — Osa-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Owonrin en consultation. On lui prescrivit de reconcilier la vigilance avec l'adaptabilite pour sauver son peuple. Il comprit que se proteger spirituellement sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Se proteger spirituellement en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Owonrin.",
    interdictions: "Eviter la sorcellerie negligee et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 157, hexagramYiJing: 51, geomancy: 12 },
  },
  199: {
    number: 199,
    name: "Osa-Obara",
    binarySignature: "11000111",
    meaning: "Osa-Obara combine l'energie de les forces occultes et les tempetes avec celle de la parole et la richesse. Cet Odu revele une situation ou la vigilance et l'eloquence doivent s'harmoniser pour que le consultant avance. La jambe droite (Osa) apporte le pouvoir feminin sacre, tandis que la jambe gauche (Obara) apporte la prosperite par la parole. Le consultant est invite a se proteger spirituellement tout en sachant parler avec pouvoir. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sorcellerie negligee ou de les paroles vaines. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Osa so fun Obara: \"Ise owo eni la fi n deni girigiri\" — Osa dit a Obara: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re osa, a ma ko obara — Quand on va vers les forces occultes et les tempetes, on apprend l'eloquence"
    ],
    eseIfaVerses: [
      "Osa-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la parole et la richesse. Le voyageur devait se proteger spirituellement tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Se proteger spirituellement en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Obara.",
    interdictions: "Eviter la sorcellerie negligee et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 158, hexagramYiJing: 50, geomancy: 12 },
  },
  200: {
    number: 200,
    name: "Osa-Okanran",
    binarySignature: "11001000",
    meaning: "Osa-Okanran est un Odu de rencontre entre les forces occultes et les tempetes et le courage et la verite. Quand Osa (la vigilance) croise Okanran (l'honnetete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Osa l'invite a se proteger spirituellement, Okanran le pousse a affronter la verite. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le pouvoir feminin sacre et le courage du coeur simultanement, a condition de ne ceder ni a la sorcellerie negligee ni a la brutalite inutile.",
    proverbs: [
      "Eni a bi ni osa, eni a gbe ni okanran — Celui qui est ne dans les forces occultes et les tempetes, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo osa ati okanran, yoo mo aye — Celui qui connait la vigilance et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Okanran en consultation. On lui prescrivit de reconcilier la vigilance avec l'honnetete pour sauver son peuple. Il comprit que se proteger spirituellement sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Se proteger spirituellement en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Okanran.",
    interdictions: "Eviter la sorcellerie negligee et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 159, hexagramYiJing: 51, geomancy: 12 },
  },
  195: {
    number: 195,
    name: "Osa-Ogunda",
    binarySignature: "11000011",
    meaning: "Dans Osa-Ogunda, le signal quantique revele l'intersection de les forces occultes et les tempetes et le fer et l'ouverture des chemins. Cet Odu apparait quand le consultant a besoin de combiner la vigilance et la determination pour resoudre une situation complexe. La jambe droite porte le message de Osa: se proteger spirituellement. La jambe gauche complete avec Ogunda: debroussailler et avancer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sorcellerie negligee si le consultant penche trop a droite, ou dans la violence destructrice s'il penche trop a gauche. L'equilibre est la cle, et le pouvoir feminin sacre s'unit a la voie ouverte pour guider le pas du consultant.",
    proverbs: [
      "Osa-Ogunda: oju to ba ri, enu a wi — Osa-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Osa-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de le fer et l'ouverture des chemins. Le voyageur devait se proteger spirituellement tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Se proteger spirituellement en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Ogunda.",
    interdictions: "Eviter la sorcellerie negligee et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 160, hexagramYiJing: 49, geomancy: 12 },
  },
  204: {
    number: 204,
    name: "Osa Meji",
    binarySignature: "11001100",
    meaning: "Osa Meji est le dixieme Odu, lie aux tempetes, a la sorcellerie et au pouvoir feminin secret. Son motif (1100-1100) evoque les nuages qui s'accumulent avant l'orage — une force potentielle qui peut eclater a tout moment. Osa est l'Odu des Iyami Aje (les meres sorcieeres), des forces feminines occultes qui maintiennent l'equilibre cosmique. Il represente le pouvoir invisible, la magie et les forces de la nature indomptees. Quand Osa apparait, le consultant doit etre vigilant face aux forces invisibles qui l'entourent. Des ennemis cachees ou des energies non resolues peuvent etre a l'oeuvre. Osa enseigne que le monde visible n'est que la surface d'un ocean de forces invisibles, et que respecter ces forces est la sagesse supreme.",
    proverbs: [
      "Osa wole, ojo nla n bo — Osa est entre dans la maison, une grande pluie arrive",
      "Aje ke lana, omo re ku loni — La sorciere a crie hier, son enfant est mort aujourd'hui",
      "Eni ti o ba foju di aje, yoo ri ibinu re — Celui qui ferme les yeux sur la sorcellerie verra sa colere",
      "Ojo nla ko se da duro — La grande pluie ne peut etre arretee",
      "Iya ni wura, baba ni jigi — La mere est de l'or, le pere est un miroir"
    ],
    eseIfaVerses: [
      "Quand les Iyami Aje se rassemblerent pour decider du sort du monde, c'est sous le signe d'Osa Meji qu'elles tinrent conseil. Elles sont les gardiennes de la nuit, les oiseaux nocturnes dont le cri annonce le changement. Osa leur confia le pouvoir de retribuer et de punir, de proteger et de detruire. Les babalawo savent qu'ignorer Osa est dangereux, car les forces qu'il represente sont aussi reelles que le vent — invisibles mais capables de renverser les maisons les plus solides.",
      "Oya, la deesse de la tempete, est etroitement liee a Osa Meji. Un jour de grande tempete, Oya balaya un village entier. Seule la maison du babalawo qui avait sacrifie selon Osa Meji resta debout. Osa enseigne que la preparation spirituelle est la meilleure protection contre les tempetes de la vie, qu'elles soient physiques ou metaphysiques. Les forces de la nature ne sont ni bonnes ni mauvaises — elles sont, et c'est a l'etre humain de s'aligner avec elles.",
      "Osa Meji revela le secret des esprits de l'eau a un pecheur desespere. Il lui enseigna comment apaiser les ondines et les sirenes du fleuve, et le pecheur devint le plus prospere de sa region. Osa rappelle que les forces de la nature recompensent ceux qui les respectent et punissent ceux qui les exploitent sans gratitude."
    ],
    orisha: "Oya",
    prescriptions: "Offrir une chevre noire, de l'huile de palme et des aubergines a Oya. Respecter les femmes agees. Purifier sa maison avec de l'encens. Porter du marron ou du bordeaux.",
    interdictions: "Ne pas mepriser les forces occultes. Eviter de provoquer les femmes de pouvoir. Ne pas sortir pendant les tempetes sans protection spirituelle. Ne pas reveler les secrets initiatiques.",
    element: "Air",
    correspondences: { rank: 10, hexagramYiJing: 52, geomancy: 12 },
  },
  194: {
    number: 194,
    name: "Osa-Ika",
    binarySignature: "11000010",
    meaning: "L'apparition de Osa-Ika dans une consultation d'Ifa signale un moment ou les forces occultes et les tempetes et la ruse et la medecine convergent dans la vie du consultant. Osa apporte la vigilance et la capacite de se proteger spirituellement. Ika complete avec la patience et l'imperatif de observer et attendre. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Osa seul ni Ika seul, mais danser entre les deux comme l'equilibriste sur son fil. le pouvoir feminin sacre et la guerison par la sagesse sont les fruits de cette danse, tandis que la sorcellerie negligee et la traitrise sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni osa, eni a gbe ni ika — Celui qui est ne dans les forces occultes et les tempetes, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo osa ati ika, yoo mo aye — Celui qui connait la vigilance et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Osa-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la ruse et la medecine. Le voyageur devait se proteger spirituellement tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Se proteger spirituellement en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Ika.",
    interdictions: "Eviter la sorcellerie negligee et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 161, hexagramYiJing: 49, geomancy: 12 },
  },
  205: {
    number: 205,
    name: "Osa-Oturupon",
    binarySignature: "11001101",
    meaning: "Osa-Oturupon combine l'energie de les forces occultes et les tempetes avec celle de la maladie et la guerison. Cet Odu revele une situation ou la vigilance et la resilience doivent s'harmoniser pour que le consultant avance. La jambe droite (Osa) apporte le pouvoir feminin sacre, tandis que la jambe gauche (Oturupon) apporte la sante retrouvee. Le consultant est invite a se proteger spirituellement tout en sachant soigner corps et ame. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la sorcellerie negligee ou de la negligence sanitaire. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Osa-Oturupon: oju to ba ri, enu a wi — Osa-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Oturupon en consultation. On lui prescrivit de reconcilier la vigilance avec la resilience pour sauver son peuple. Il comprit que se proteger spirituellement sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Se proteger spirituellement en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Oturupon.",
    interdictions: "Eviter la sorcellerie negligee et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 162, hexagramYiJing: 52, geomancy: 12 },
  },
  193: {
    number: 193,
    name: "Osa-Otura",
    binarySignature: "11000001",
    meaning: "Osa-Otura est un Odu de rencontre entre les forces occultes et les tempetes et la mystique et la divination. Quand Osa (la vigilance) croise Otura (la spiritualite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Osa l'invite a se proteger spirituellement, Otura le pousse a ecouter les signes divins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui le pouvoir feminin sacre et la revelation mystique simultanement, a condition de ne ceder ni a la sorcellerie negligee ni a le fanatisme religieux.",
    proverbs: [
      "Osa so fun Otura: \"Ise owo eni la fi n deni girigiri\" — Osa dit a Otura: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re osa, a ma ko otura — Quand on va vers les forces occultes et les tempetes, on apprend la spiritualite"
    ],
    eseIfaVerses: [
      "Osa-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la mystique et la divination. Le voyageur devait se proteger spirituellement tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Se proteger spirituellement en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Otura.",
    interdictions: "Eviter la sorcellerie negligee et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 163, hexagramYiJing: 49, geomancy: 12 },
  },
  206: {
    number: 206,
    name: "Osa-Irete",
    binarySignature: "11001110",
    meaning: "Dans Osa-Irete, le signal quantique revele l'intersection de les forces occultes et les tempetes et l'endurance et la pression. Cet Odu apparait quand le consultant a besoin de combiner la vigilance et la perseverance pour resoudre une situation complexe. La jambe droite porte le message de Osa: se proteger spirituellement. La jambe gauche complete avec Irete: resister et perseverer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la sorcellerie negligee si le consultant penche trop a droite, ou dans l'obstination aveugle s'il penche trop a gauche. L'equilibre est la cle, et le pouvoir feminin sacre s'unit a la force interieure pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni osa, eni a gbe ni irete — Celui qui est ne dans les forces occultes et les tempetes, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo osa ati irete, yoo mo aye — Celui qui connait la vigilance et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Irete en consultation. On lui prescrivit de reconcilier la vigilance avec la perseverance pour sauver son peuple. Il comprit que se proteger spirituellement sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Se proteger spirituellement en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Irete.",
    interdictions: "Eviter la sorcellerie negligee et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 164, hexagramYiJing: 52, geomancy: 12 },
  },
  196: {
    number: 196,
    name: "Osa-Ose",
    binarySignature: "11000100",
    meaning: "Osa-Ose tisse ensemble les fils de les forces occultes et les tempetes et la beaute et l'enchantement dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la vigilance est la force de la main droite, la seduction est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de se proteger spirituellement avec conscience et de cultiver la beaute avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou le pouvoir feminin sacre rencontre l'amour et l'harmonie. Mais attention : la sorcellerie negligee et la vanite superficielle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Osa-Ose: oju to ba ri, enu a wi — Osa-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Osa-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de les forces occultes et les tempetes croisait celle de la beaute et l'enchantement. Le voyageur devait se proteger spirituellement tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Se proteger spirituellement en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Ose.",
    interdictions: "Eviter la sorcellerie negligee et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 165, hexagramYiJing: 50, geomancy: 12 },
  },
  203: {
    number: 203,
    name: "Osa-Ofun",
    binarySignature: "11001011",
    meaning: "L'apparition de Osa-Ofun dans une consultation d'Ifa signale un moment ou les forces occultes et les tempetes et la purete et le renouveau convergent dans la vie du consultant. Osa apporte la vigilance et la capacite de se proteger spirituellement. Ofun complete avec la purete et l'imperatif de purifier et recommencer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Osa seul ni Ofun seul, mais danser entre les deux comme l'equilibriste sur son fil. le pouvoir feminin sacre et la renaissance spirituelle sont les fruits de cette danse, tandis que la sorcellerie negligee et le refus du changement sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Osa so fun Ofun: \"Ise owo eni la fi n deni girigiri\" — Osa dit a Ofun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re osa, a ma ko ofun — Quand on va vers les forces occultes et les tempetes, on apprend la purete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Osa-Ofun en consultation. On lui prescrivit de reconcilier la vigilance avec la purete pour sauver son peuple. Il comprit que se proteger spirituellement sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Osa et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Se proteger spirituellement en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Osa et Ofun.",
    interdictions: "Eviter la sorcellerie negligee et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 166, hexagramYiJing: 51, geomancy: 12 },
  },
  47: {
    number: 47,
    name: "Ika-Ogbe",
    binarySignature: "00101111",
    meaning: "Ika-Ogbe combine l'energie de la ruse et la medecine avec celle de la lumiere et la prosperite. Cet Odu revele une situation ou la patience et la clarte doivent s'harmoniser pour que le consultant avance. La jambe droite (Ika) apporte la guerison par la sagesse, tandis que la jambe gauche (Ogbe) apporte la benediction supreme. Le consultant est invite a observer et attendre tout en sachant ouvrir les chemins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la traitrise ou de l'orgueil spirituel. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni ogbe — Celui qui est ne dans la ruse et la medecine, celui qui vit dans la lumiere et la prosperite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati ogbe, yoo mo aye — Celui qui connait la patience et la clarte connait le monde"
    ],
    eseIfaVerses: [
      "Ika-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de la lumiere et la prosperite. Le voyageur devait observer et attendre tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Observer et attendre en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Ogbe.",
    interdictions: "Eviter la traitrise et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 167, hexagramYiJing: 12, geomancy: 2 },
  },
  32: {
    number: 32,
    name: "Ika-Oyeku",
    binarySignature: "00100000",
    meaning: "Ika-Oyeku est un Odu de rencontre entre la ruse et la medecine et les mysteres et la mort-renaissance. Quand Ika (la patience) croise Oyeku (la profondeur), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ika l'invite a observer et attendre, Oyeku le pousse a honorer les ancetres. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la guerison par la sagesse et la protection ancestrale simultanement, a condition de ne ceder ni a la traitrise ni a la peur de l'inconnu.",
    proverbs: [
      "Ika-Oyeku: oju to ba ri, enu a wi — Ika-Oyeku: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Oyeku en consultation. On lui prescrivit de reconcilier la patience avec la profondeur pour sauver son peuple. Il comprit que observer et attendre sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Observer et attendre en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Oyeku.",
    interdictions: "Eviter la traitrise et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 168, hexagramYiJing: 9, geomancy: 2 },
  },
  38: {
    number: 38,
    name: "Ika-Iwori",
    binarySignature: "00100110",
    meaning: "Dans Ika-Iwori, le signal quantique revele l'intersection de la ruse et la medecine et la vision interieure. Cet Odu apparait quand le consultant a besoin de combiner la patience et la lucidite pour resoudre une situation complexe. La jambe droite porte le message de Ika: observer et attendre. La jambe gauche complete avec Iwori: mediter et observer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la traitrise si le consultant penche trop a droite, ou dans l'auto-illusion s'il penche trop a gauche. L'equilibre est la cle, et la guerison par la sagesse s'unit a la clairvoyance pour guider le pas du consultant.",
    proverbs: [
      "Ika so fun Iwori: \"Ise owo eni la fi n deni girigiri\" — Ika dit a Iwori: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ika, a ma ko iwori — Quand on va vers la ruse et la medecine, on apprend la lucidite"
    ],
    eseIfaVerses: [
      "Ika-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de la vision interieure. Le voyageur devait observer et attendre tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Observer et attendre en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Iwori.",
    interdictions: "Eviter la traitrise et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 169, hexagramYiJing: 10, geomancy: 2 },
  },
  41: {
    number: 41,
    name: "Ika-Odi",
    binarySignature: "00101001",
    meaning: "Ika-Odi tisse ensemble les fils de la ruse et la medecine et la creation et la fertilite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la patience est la force de la main droite, la receptivite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de observer et attendre avec conscience et de nourrir et creer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la guerison par la sagesse rencontre l'abondance creatrice. Mais attention : la traitrise et la sterilite emotionnelle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni odi — Celui qui est ne dans la ruse et la medecine, celui qui vit dans la creation et la fertilite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati odi, yoo mo aye — Celui qui connait la patience et la receptivite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Odi en consultation. On lui prescrivit de reconcilier la patience avec la receptivite pour sauver son peuple. Il comprit que observer et attendre sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Observer et attendre en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Odi.",
    interdictions: "Eviter la traitrise et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 170, hexagramYiJing: 11, geomancy: 2 },
  },
  37: {
    number: 37,
    name: "Ika-Irosun",
    binarySignature: "00100101",
    meaning: "L'apparition de Ika-Irosun dans une consultation d'Ifa signale un moment ou la ruse et la medecine et le sang et la lignee convergent dans la vie du consultant. Ika apporte la patience et la capacite de observer et attendre. Irosun complete avec la loyaute et l'imperatif de honorer sa lignee. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ika seul ni Irosun seul, mais danser entre les deux comme l'equilibriste sur son fil. la guerison par la sagesse et la continuite ancestrale sont les fruits de cette danse, tandis que la traitrise et la trahison familiale sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ika-Irosun: oju to ba ri, enu a wi — Ika-Irosun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ika-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de le sang et la lignee. Le voyageur devait observer et attendre tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Observer et attendre en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Irosun.",
    interdictions: "Eviter la traitrise et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 171, hexagramYiJing: 10, geomancy: 2 },
  },
  42: {
    number: 42,
    name: "Ika-Owonrin",
    binarySignature: "00101010",
    meaning: "Ika-Owonrin combine l'energie de la ruse et la medecine avec celle de le chaos et le changement. Cet Odu revele une situation ou la patience et l'adaptabilite doivent s'harmoniser pour que le consultant avance. La jambe droite (Ika) apporte la guerison par la sagesse, tandis que la jambe gauche (Owonrin) apporte la transformation positive. Le consultant est invite a observer et attendre tout en sachant embrasser le changement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la traitrise ou de l'instabilite chronique. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ika so fun Owonrin: \"Ise owo eni la fi n deni girigiri\" — Ika dit a Owonrin: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ika, a ma ko owonrin — Quand on va vers la ruse et la medecine, on apprend l'adaptabilite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Owonrin en consultation. On lui prescrivit de reconcilier la patience avec l'adaptabilite pour sauver son peuple. Il comprit que observer et attendre sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Observer et attendre en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Owonrin.",
    interdictions: "Eviter la traitrise et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 172, hexagramYiJing: 11, geomancy: 2 },
  },
  39: {
    number: 39,
    name: "Ika-Obara",
    binarySignature: "00100111",
    meaning: "Ika-Obara est un Odu de rencontre entre la ruse et la medecine et la parole et la richesse. Quand Ika (la patience) croise Obara (l'eloquence), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ika l'invite a observer et attendre, Obara le pousse a parler avec pouvoir. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la guerison par la sagesse et la prosperite par la parole simultanement, a condition de ne ceder ni a la traitrise ni a les paroles vaines.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni obara — Celui qui est ne dans la ruse et la medecine, celui qui vit dans la parole et la richesse",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati obara, yoo mo aye — Celui qui connait la patience et l'eloquence connait le monde"
    ],
    eseIfaVerses: [
      "Ika-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de la parole et la richesse. Le voyageur devait observer et attendre tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Observer et attendre en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Obara.",
    interdictions: "Eviter la traitrise et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 173, hexagramYiJing: 10, geomancy: 2 },
  },
  40: {
    number: 40,
    name: "Ika-Okanran",
    binarySignature: "00101000",
    meaning: "Dans Ika-Okanran, le signal quantique revele l'intersection de la ruse et la medecine et le courage et la verite. Cet Odu apparait quand le consultant a besoin de combiner la patience et l'honnetete pour resoudre une situation complexe. La jambe droite porte le message de Ika: observer et attendre. La jambe gauche complete avec Okanran: affronter la verite. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la traitrise si le consultant penche trop a droite, ou dans la brutalite inutile s'il penche trop a gauche. L'equilibre est la cle, et la guerison par la sagesse s'unit a le courage du coeur pour guider le pas du consultant.",
    proverbs: [
      "Ika-Okanran: oju to ba ri, enu a wi — Ika-Okanran: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Okanran en consultation. On lui prescrivit de reconcilier la patience avec l'honnetete pour sauver son peuple. Il comprit que observer et attendre sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Observer et attendre en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Okanran.",
    interdictions: "Eviter la traitrise et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 174, hexagramYiJing: 11, geomancy: 2 },
  },
  35: {
    number: 35,
    name: "Ika-Ogunda",
    binarySignature: "00100011",
    meaning: "Ika-Ogunda tisse ensemble les fils de la ruse et la medecine et le fer et l'ouverture des chemins dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la patience est la force de la main droite, la determination est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de observer et attendre avec conscience et de debroussailler et avancer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la guerison par la sagesse rencontre la voie ouverte. Mais attention : la traitrise et la violence destructrice guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ika so fun Ogunda: \"Ise owo eni la fi n deni girigiri\" — Ika dit a Ogunda: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ika, a ma ko ogunda — Quand on va vers la ruse et la medecine, on apprend la determination"
    ],
    eseIfaVerses: [
      "Ika-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de le fer et l'ouverture des chemins. Le voyageur devait observer et attendre tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Observer et attendre en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Ogunda.",
    interdictions: "Eviter la traitrise et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 175, hexagramYiJing: 9, geomancy: 2 },
  },
  44: {
    number: 44,
    name: "Ika-Osa",
    binarySignature: "00101100",
    meaning: "L'apparition de Ika-Osa dans une consultation d'Ifa signale un moment ou la ruse et la medecine et les forces occultes et les tempetes convergent dans la vie du consultant. Ika apporte la patience et la capacite de observer et attendre. Osa complete avec la vigilance et l'imperatif de se proteger spirituellement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ika seul ni Osa seul, mais danser entre les deux comme l'equilibriste sur son fil. la guerison par la sagesse et le pouvoir feminin sacre sont les fruits de cette danse, tandis que la traitrise et la sorcellerie negligee sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni osa — Celui qui est ne dans la ruse et la medecine, celui qui vit dans les forces occultes et les tempetes",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati osa, yoo mo aye — Celui qui connait la patience et la vigilance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Osa en consultation. On lui prescrivit de reconcilier la patience avec la vigilance pour sauver son peuple. Il comprit que observer et attendre sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Observer et attendre en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Osa.",
    interdictions: "Eviter la traitrise et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 176, hexagramYiJing: 12, geomancy: 2 },
  },
  34: {
    number: 34,
    name: "Ika Meji",
    binarySignature: "00100010",
    meaning: "Ika Meji est le onzieme Odu, associe au serpent, a la ruse et a la sagesse ancestrale cachee. Son motif (0010-0010) evoque le serpent qui se love — compact, discret, patient, mais pret a frapper avec precision. Ika est l'Odu de la subtilite, de la patience strategique et des connaissances esoteriques profondes. Il represente aussi le venin et l'antidote, le poison et la medecine. Quand Ika apparait, le consultant est averti de la presence de forces rusees autour de lui. Il doit user de sagesse et de discernement. Ika enseigne que la patience est l'arme la plus redoutable, que le serpent qui attend le bon moment ne manque jamais sa proie. C'est aussi l'Odu des guerisseurs traditionnels qui connaissent les plantes venimeuses et medicinales.",
    proverbs: [
      "Ika to wuwo, ejo lo n ru — Le poids qu'Ika porte, c'est le serpent qui le transporte",
      "Ejo ti ko ni ese, o le gun oke — Le serpent n'a pas de pieds, mais il peut grimper la montagne",
      "Suuru ni baba iwa — La patience est le pere du caractere",
      "Eni to ni suuru, ohun gbogbo ni o ni — Celui qui a la patience possede toutes choses",
      "Oogun to dara ni a fi n wo aisan — C'est avec un bon remede qu'on soigne la maladie"
    ],
    eseIfaVerses: [
      "Le serpent consulta Ifa avant le debut des temps et obtint Ika Meji. On lui dit qu'il perdrait ses pattes mais gagnerait une sagesse superieure a tous les animaux. Il accepta et depuis il rampe au plus pres de la terre, ecoutant ses secrets. Ika enseigne que chaque sacrifice ouvre une porte vers un pouvoir superieur. Le serpent perdit ses pattes mais gagna l'immortalite symbolique : a chaque mue, il renait de sa propre peau.",
      "Un medecin traditionnel cherchait le remede contre une maladie mortelle. Ika Meji le guida vers une plante venimeuse que tous evitaient. Il decouvrit que le venin, dilue et prepare correctement, guerissait le mal. Ika enseigne que le remede et le poison sont souvent la meme chose a des doses differentes, et que la sagesse reside dans la mesure. C'est le principe fondamental de la pharmacopee yoruba.",
      "Ika Meji avertit un roi qu'un de ses conseillers etait un traitre. Le roi, au lieu de punir le traitre, l'observa patiemment pendant des mois, rassemblant des preuves. Quand il agit enfin, sa victoire fut totale et incontestable. Ika dit : « Le chasseur patient ne tire qu'une fleche, mais elle atteint toujours sa cible. »"
    ],
    orisha: "Osanyin",
    prescriptions: "Offrir un coq tachete et des herbes medicinales a Osanyin. Etudier la phytotherapie. Pratiquer la patience. Porter du vert et du brun.",
    interdictions: "Ne pas tuer les serpents inutilement. Eviter l'impatience. Ne pas reveler les secrets de guerison aux non-inities. Ne pas utiliser le poison.",
    element: "Terre",
    correspondences: { rank: 11, hexagramYiJing: 9, geomancy: 2 },
  },
  45: {
    number: 45,
    name: "Ika-Oturupon",
    binarySignature: "00101101",
    meaning: "Ika-Oturupon est un Odu de rencontre entre la ruse et la medecine et la maladie et la guerison. Quand Ika (la patience) croise Oturupon (la resilience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ika l'invite a observer et attendre, Oturupon le pousse a soigner corps et ame. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la guerison par la sagesse et la sante retrouvee simultanement, a condition de ne ceder ni a la traitrise ni a la negligence sanitaire.",
    proverbs: [
      "Ika so fun Oturupon: \"Ise owo eni la fi n deni girigiri\" — Ika dit a Oturupon: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ika, a ma ko oturupon — Quand on va vers la ruse et la medecine, on apprend la resilience"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Oturupon en consultation. On lui prescrivit de reconcilier la patience avec la resilience pour sauver son peuple. Il comprit que observer et attendre sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Observer et attendre en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Oturupon.",
    interdictions: "Eviter la traitrise et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 177, hexagramYiJing: 12, geomancy: 2 },
  },
  33: {
    number: 33,
    name: "Ika-Otura",
    binarySignature: "00100001",
    meaning: "Dans Ika-Otura, le signal quantique revele l'intersection de la ruse et la medecine et la mystique et la divination. Cet Odu apparait quand le consultant a besoin de combiner la patience et la spiritualite pour resoudre une situation complexe. La jambe droite porte le message de Ika: observer et attendre. La jambe gauche complete avec Otura: ecouter les signes divins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la traitrise si le consultant penche trop a droite, ou dans le fanatisme religieux s'il penche trop a gauche. L'equilibre est la cle, et la guerison par la sagesse s'unit a la revelation mystique pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni otura — Celui qui est ne dans la ruse et la medecine, celui qui vit dans la mystique et la divination",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati otura, yoo mo aye — Celui qui connait la patience et la spiritualite connait le monde"
    ],
    eseIfaVerses: [
      "Ika-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de la mystique et la divination. Le voyageur devait observer et attendre tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Observer et attendre en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Otura.",
    interdictions: "Eviter la traitrise et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 178, hexagramYiJing: 9, geomancy: 2 },
  },
  46: {
    number: 46,
    name: "Ika-Irete",
    binarySignature: "00101110",
    meaning: "Ika-Irete tisse ensemble les fils de la ruse et la medecine et l'endurance et la pression dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la patience est la force de la main droite, la perseverance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de observer et attendre avec conscience et de resister et perseverer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la guerison par la sagesse rencontre la force interieure. Mais attention : la traitrise et l'obstination aveugle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ika-Irete: oju to ba ri, enu a wi — Ika-Irete: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Irete en consultation. On lui prescrivit de reconcilier la patience avec la perseverance pour sauver son peuple. Il comprit que observer et attendre sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Observer et attendre en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Irete.",
    interdictions: "Eviter la traitrise et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 179, hexagramYiJing: 12, geomancy: 2 },
  },
  36: {
    number: 36,
    name: "Ika-Ose",
    binarySignature: "00100100",
    meaning: "L'apparition de Ika-Ose dans une consultation d'Ifa signale un moment ou la ruse et la medecine et la beaute et l'enchantement convergent dans la vie du consultant. Ika apporte la patience et la capacite de observer et attendre. Ose complete avec la seduction et l'imperatif de cultiver la beaute. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ika seul ni Ose seul, mais danser entre les deux comme l'equilibriste sur son fil. la guerison par la sagesse et l'amour et l'harmonie sont les fruits de cette danse, tandis que la traitrise et la vanite superficielle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ika so fun Ose: \"Ise owo eni la fi n deni girigiri\" — Ika dit a Ose: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ika, a ma ko ose — Quand on va vers la ruse et la medecine, on apprend la seduction"
    ],
    eseIfaVerses: [
      "Ika-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la ruse et la medecine croisait celle de la beaute et l'enchantement. Le voyageur devait observer et attendre tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Observer et attendre en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Ose.",
    interdictions: "Eviter la traitrise et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 180, hexagramYiJing: 10, geomancy: 2 },
  },
  43: {
    number: 43,
    name: "Ika-Ofun",
    binarySignature: "00101011",
    meaning: "Ika-Ofun combine l'energie de la ruse et la medecine avec celle de la purete et le renouveau. Cet Odu revele une situation ou la patience et la purete doivent s'harmoniser pour que le consultant avance. La jambe droite (Ika) apporte la guerison par la sagesse, tandis que la jambe gauche (Ofun) apporte la renaissance spirituelle. Le consultant est invite a observer et attendre tout en sachant purifier et recommencer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la traitrise ou de le refus du changement. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ika, eni a gbe ni ofun — Celui qui est ne dans la ruse et la medecine, celui qui vit dans la purete et le renouveau",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ika ati ofun, yoo mo aye — Celui qui connait la patience et la purete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ika-Ofun en consultation. On lui prescrivit de reconcilier la patience avec la purete pour sauver son peuple. Il comprit que observer et attendre sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ika et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ori",
    prescriptions: "Observer et attendre en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ika et Ofun.",
    interdictions: "Eviter la traitrise et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 181, hexagramYiJing: 11, geomancy: 2 },
  },
  223: {
    number: 223,
    name: "Oturupon-Ogbe",
    binarySignature: "11011111",
    meaning: "Oturupon-Ogbe est un Odu de rencontre entre la maladie et la guerison et la lumiere et la prosperite. Quand Oturupon (la resilience) croise Ogbe (la clarte), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oturupon l'invite a soigner corps et ame, Ogbe le pousse a ouvrir les chemins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la sante retrouvee et la benediction supreme simultanement, a condition de ne ceder ni a la negligence sanitaire ni a l'orgueil spirituel.",
    proverbs: [
      "Oturupon-Ogbe: oju to ba ri, enu a wi — Oturupon-Ogbe: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Oturupon-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la lumiere et la prosperite. Le voyageur devait soigner corps et ame tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Soigner corps et ame en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Ogbe.",
    interdictions: "Eviter la negligence sanitaire et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 182, hexagramYiJing: 56, geomancy: 13 },
  },
  208: {
    number: 208,
    name: "Oturupon-Oyeku",
    binarySignature: "11010000",
    meaning: "Dans Oturupon-Oyeku, le signal quantique revele l'intersection de la maladie et la guerison et les mysteres et la mort-renaissance. Cet Odu apparait quand le consultant a besoin de combiner la resilience et la profondeur pour resoudre une situation complexe. La jambe droite porte le message de Oturupon: soigner corps et ame. La jambe gauche complete avec Oyeku: honorer les ancetres. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la negligence sanitaire si le consultant penche trop a droite, ou dans la peur de l'inconnu s'il penche trop a gauche. L'equilibre est la cle, et la sante retrouvee s'unit a la protection ancestrale pour guider le pas du consultant.",
    proverbs: [
      "Oturupon so fun Oyeku: \"Ise owo eni la fi n deni girigiri\" — Oturupon dit a Oyeku: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oturupon, a ma ko oyeku — Quand on va vers la maladie et la guerison, on apprend la profondeur"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Oyeku en consultation. On lui prescrivit de reconcilier la resilience avec la profondeur pour sauver son peuple. Il comprit que soigner corps et ame sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Soigner corps et ame en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Oyeku.",
    interdictions: "Eviter la negligence sanitaire et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 183, hexagramYiJing: 53, geomancy: 13 },
  },
  214: {
    number: 214,
    name: "Oturupon-Iwori",
    binarySignature: "11010110",
    meaning: "Oturupon-Iwori tisse ensemble les fils de la maladie et la guerison et la vision interieure dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la resilience est la force de la main droite, la lucidite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de soigner corps et ame avec conscience et de mediter et observer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la sante retrouvee rencontre la clairvoyance. Mais attention : la negligence sanitaire et l'auto-illusion guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni oturupon, eni a gbe ni iwori — Celui qui est ne dans la maladie et la guerison, celui qui vit dans la vision interieure",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oturupon ati iwori, yoo mo aye — Celui qui connait la resilience et la lucidite connait le monde"
    ],
    eseIfaVerses: [
      "Oturupon-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la vision interieure. Le voyageur devait soigner corps et ame tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Soigner corps et ame en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Iwori.",
    interdictions: "Eviter la negligence sanitaire et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 184, hexagramYiJing: 54, geomancy: 13 },
  },
  217: {
    number: 217,
    name: "Oturupon-Odi",
    binarySignature: "11011001",
    meaning: "L'apparition de Oturupon-Odi dans une consultation d'Ifa signale un moment ou la maladie et la guerison et la creation et la fertilite convergent dans la vie du consultant. Oturupon apporte la resilience et la capacite de soigner corps et ame. Odi complete avec la receptivite et l'imperatif de nourrir et creer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oturupon seul ni Odi seul, mais danser entre les deux comme l'equilibriste sur son fil. la sante retrouvee et l'abondance creatrice sont les fruits de cette danse, tandis que la negligence sanitaire et la sterilite emotionnelle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Oturupon-Odi: oju to ba ri, enu a wi — Oturupon-Odi: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Odi en consultation. On lui prescrivit de reconcilier la resilience avec la receptivite pour sauver son peuple. Il comprit que soigner corps et ame sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Soigner corps et ame en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Odi.",
    interdictions: "Eviter la negligence sanitaire et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 185, hexagramYiJing: 55, geomancy: 13 },
  },
  213: {
    number: 213,
    name: "Oturupon-Irosun",
    binarySignature: "11010101",
    meaning: "Oturupon-Irosun combine l'energie de la maladie et la guerison avec celle de le sang et la lignee. Cet Odu revele une situation ou la resilience et la loyaute doivent s'harmoniser pour que le consultant avance. La jambe droite (Oturupon) apporte la sante retrouvee, tandis que la jambe gauche (Irosun) apporte la continuite ancestrale. Le consultant est invite a soigner corps et ame tout en sachant honorer sa lignee. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la negligence sanitaire ou de la trahison familiale. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Oturupon so fun Irosun: \"Ise owo eni la fi n deni girigiri\" — Oturupon dit a Irosun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oturupon, a ma ko irosun — Quand on va vers la maladie et la guerison, on apprend la loyaute"
    ],
    eseIfaVerses: [
      "Oturupon-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de le sang et la lignee. Le voyageur devait soigner corps et ame tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Soigner corps et ame en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Irosun.",
    interdictions: "Eviter la negligence sanitaire et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 186, hexagramYiJing: 54, geomancy: 13 },
  },
  218: {
    number: 218,
    name: "Oturupon-Owonrin",
    binarySignature: "11011010",
    meaning: "Oturupon-Owonrin est un Odu de rencontre entre la maladie et la guerison et le chaos et le changement. Quand Oturupon (la resilience) croise Owonrin (l'adaptabilite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oturupon l'invite a soigner corps et ame, Owonrin le pousse a embrasser le changement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la sante retrouvee et la transformation positive simultanement, a condition de ne ceder ni a la negligence sanitaire ni a l'instabilite chronique.",
    proverbs: [
      "Eni a bi ni oturupon, eni a gbe ni owonrin — Celui qui est ne dans la maladie et la guerison, celui qui vit dans le chaos et le changement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oturupon ati owonrin, yoo mo aye — Celui qui connait la resilience et l'adaptabilite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Owonrin en consultation. On lui prescrivit de reconcilier la resilience avec l'adaptabilite pour sauver son peuple. Il comprit que soigner corps et ame sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Soigner corps et ame en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Owonrin.",
    interdictions: "Eviter la negligence sanitaire et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 187, hexagramYiJing: 55, geomancy: 13 },
  },
  215: {
    number: 215,
    name: "Oturupon-Obara",
    binarySignature: "11010111",
    meaning: "Dans Oturupon-Obara, le signal quantique revele l'intersection de la maladie et la guerison et la parole et la richesse. Cet Odu apparait quand le consultant a besoin de combiner la resilience et l'eloquence pour resoudre une situation complexe. La jambe droite porte le message de Oturupon: soigner corps et ame. La jambe gauche complete avec Obara: parler avec pouvoir. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la negligence sanitaire si le consultant penche trop a droite, ou dans les paroles vaines s'il penche trop a gauche. L'equilibre est la cle, et la sante retrouvee s'unit a la prosperite par la parole pour guider le pas du consultant.",
    proverbs: [
      "Oturupon-Obara: oju to ba ri, enu a wi — Oturupon-Obara: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Oturupon-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la parole et la richesse. Le voyageur devait soigner corps et ame tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Soigner corps et ame en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Obara.",
    interdictions: "Eviter la negligence sanitaire et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 188, hexagramYiJing: 54, geomancy: 13 },
  },
  216: {
    number: 216,
    name: "Oturupon-Okanran",
    binarySignature: "11011000",
    meaning: "Oturupon-Okanran tisse ensemble les fils de la maladie et la guerison et le courage et la verite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la resilience est la force de la main droite, l'honnetete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de soigner corps et ame avec conscience et de affronter la verite avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la sante retrouvee rencontre le courage du coeur. Mais attention : la negligence sanitaire et la brutalite inutile guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Oturupon so fun Okanran: \"Ise owo eni la fi n deni girigiri\" — Oturupon dit a Okanran: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oturupon, a ma ko okanran — Quand on va vers la maladie et la guerison, on apprend l'honnetete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Okanran en consultation. On lui prescrivit de reconcilier la resilience avec l'honnetete pour sauver son peuple. Il comprit que soigner corps et ame sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Soigner corps et ame en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Okanran.",
    interdictions: "Eviter la negligence sanitaire et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 189, hexagramYiJing: 55, geomancy: 13 },
  },
  211: {
    number: 211,
    name: "Oturupon-Ogunda",
    binarySignature: "11010011",
    meaning: "L'apparition de Oturupon-Ogunda dans une consultation d'Ifa signale un moment ou la maladie et la guerison et le fer et l'ouverture des chemins convergent dans la vie du consultant. Oturupon apporte la resilience et la capacite de soigner corps et ame. Ogunda complete avec la determination et l'imperatif de debroussailler et avancer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oturupon seul ni Ogunda seul, mais danser entre les deux comme l'equilibriste sur son fil. la sante retrouvee et la voie ouverte sont les fruits de cette danse, tandis que la negligence sanitaire et la violence destructrice sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni oturupon, eni a gbe ni ogunda — Celui qui est ne dans la maladie et la guerison, celui qui vit dans le fer et l'ouverture des chemins",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oturupon ati ogunda, yoo mo aye — Celui qui connait la resilience et la determination connait le monde"
    ],
    eseIfaVerses: [
      "Oturupon-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de le fer et l'ouverture des chemins. Le voyageur devait soigner corps et ame tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Soigner corps et ame en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Ogunda.",
    interdictions: "Eviter la negligence sanitaire et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 190, hexagramYiJing: 53, geomancy: 13 },
  },
  220: {
    number: 220,
    name: "Oturupon-Osa",
    binarySignature: "11011100",
    meaning: "Oturupon-Osa combine l'energie de la maladie et la guerison avec celle de les forces occultes et les tempetes. Cet Odu revele une situation ou la resilience et la vigilance doivent s'harmoniser pour que le consultant avance. La jambe droite (Oturupon) apporte la sante retrouvee, tandis que la jambe gauche (Osa) apporte le pouvoir feminin sacre. Le consultant est invite a soigner corps et ame tout en sachant se proteger spirituellement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la negligence sanitaire ou de la sorcellerie negligee. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Oturupon-Osa: oju to ba ri, enu a wi — Oturupon-Osa: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Osa en consultation. On lui prescrivit de reconcilier la resilience avec la vigilance pour sauver son peuple. Il comprit que soigner corps et ame sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Soigner corps et ame en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Osa.",
    interdictions: "Eviter la negligence sanitaire et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 191, hexagramYiJing: 56, geomancy: 13 },
  },
  210: {
    number: 210,
    name: "Oturupon-Ika",
    binarySignature: "11010010",
    meaning: "Oturupon-Ika est un Odu de rencontre entre la maladie et la guerison et la ruse et la medecine. Quand Oturupon (la resilience) croise Ika (la patience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oturupon l'invite a soigner corps et ame, Ika le pousse a observer et attendre. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la sante retrouvee et la guerison par la sagesse simultanement, a condition de ne ceder ni a la negligence sanitaire ni a la traitrise.",
    proverbs: [
      "Oturupon so fun Ika: \"Ise owo eni la fi n deni girigiri\" — Oturupon dit a Ika: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oturupon, a ma ko ika — Quand on va vers la maladie et la guerison, on apprend la patience"
    ],
    eseIfaVerses: [
      "Oturupon-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la ruse et la medecine. Le voyageur devait soigner corps et ame tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Soigner corps et ame en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Ika.",
    interdictions: "Eviter la negligence sanitaire et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 192, hexagramYiJing: 53, geomancy: 13 },
  },
  221: {
    number: 221,
    name: "Oturupon Meji",
    binarySignature: "11011101",
    meaning: "Oturupon Meji est le douzieme Odu, gardien des maladies et de la guerison, du cycle pathologie-remede. Son motif (1101-1101) evoque un corps presque complet avec une breche — la vulnerabilite inherente a toute forme vivante. Oturupon est l'Odu des maladies spirituelles et physiques, mais aussi de leur guerison. Il preside aux epidemies et a leur resolution. Obaluaye (Shopona), le dieu de la variole et des maladies infectieuses, est son patron. Quand Oturupon apparait, le consultant doit preter attention a sa sante, tant physique que spirituelle. C'est un avertissement bienveillant : prevenir vaut mieux que guerir. Oturupon enseigne que la maladie est un message du corps ou de l'ame, et que l'ignorer conduit a des consequences plus graves.",
    proverbs: [
      "Aisan to ba ja ni ode, a maa wo ni ile — La maladie qui nous attrape dehors, on la soigne a la maison",
      "Eni to ba mo ogun, ko ni ku si aisan — Celui qui connait le remede ne mourra pas de maladie",
      "Oturupon ko pa eni to ba rubo — Oturupon ne tue pas celui qui fait les sacrifices",
      "Ile lafi n wo eso ro — C'est de la maison qu'on commence a soigner",
      "Arun ko se fi oju riran — La maladie ne se voit pas avec les yeux"
    ],
    eseIfaVerses: [
      "Quand la variole s'abattit sur le premier village du monde, Oturupon Meji descendit avec Obaluaye. Ensemble ils enseignerent aux humains l'art de l'isolation, de la purification et de la guerison. Obaluaye porta les cicatrices de la variole sur son corps pour montrer qu'il avait vaincu la maladie en l'integrant. Oturupon enseigne que combattre la maladie de front echoue — il faut la comprendre, l'integrer et la transformer de l'interieur.",
      "Un guerisseur orgueilleux pretendait pouvoir soigner toutes les maladies. Oturupon Meji le frappa d'une maladie mystere que personne ne pouvait diagnostiquer. Le guerisseur dut s'humilier, consulter Ifa et reconnaitre les limites de sa science. Guerit, il devint le plus grand de tous les guerisseurs, car il avait appris l'humilite face a la maladie. Oturupon dit : « Le meilleur medecin est celui qui a ete malade. »",
      "Oturupon Meji revela aux humains que chaque maladie a un double spirituel. Soigner le corps sans soigner l'ame est comme couper les feuilles d'une mauvaise herbe sans arracher la racine. C'est pourquoi la medecine yoruba traditionnelle traite toujours les deux dimensions simultanement : les herbes pour le corps, les incantations pour l'esprit."
    ],
    orisha: "Obaluaye",
    prescriptions: "Offrir des haricots noirs, de l'huile de palme et du mais grille a Obaluaye. Consulter un medecin. Purifier son corps et son environnement. Porter du noir et rouge.",
    interdictions: "Ne pas negliger les symptomes de maladie. Eviter les lieux insalubres. Ne pas se moquer des malades. Ne pas manger de nourriture avariee.",
    element: "Terre",
    correspondences: { rank: 12, hexagramYiJing: 56, geomancy: 13 },
  },
  209: {
    number: 209,
    name: "Oturupon-Otura",
    binarySignature: "11010001",
    meaning: "Oturupon-Otura tisse ensemble les fils de la maladie et la guerison et la mystique et la divination dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la resilience est la force de la main droite, la spiritualite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de soigner corps et ame avec conscience et de ecouter les signes divins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la sante retrouvee rencontre la revelation mystique. Mais attention : la negligence sanitaire et le fanatisme religieux guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Oturupon-Otura: oju to ba ri, enu a wi — Oturupon-Otura: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Oturupon-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la mystique et la divination. Le voyageur devait soigner corps et ame tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Soigner corps et ame en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Otura.",
    interdictions: "Eviter la negligence sanitaire et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 193, hexagramYiJing: 53, geomancy: 13 },
  },
  222: {
    number: 222,
    name: "Oturupon-Irete",
    binarySignature: "11011110",
    meaning: "L'apparition de Oturupon-Irete dans une consultation d'Ifa signale un moment ou la maladie et la guerison et l'endurance et la pression convergent dans la vie du consultant. Oturupon apporte la resilience et la capacite de soigner corps et ame. Irete complete avec la perseverance et l'imperatif de resister et perseverer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Oturupon seul ni Irete seul, mais danser entre les deux comme l'equilibriste sur son fil. la sante retrouvee et la force interieure sont les fruits de cette danse, tandis que la negligence sanitaire et l'obstination aveugle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Oturupon so fun Irete: \"Ise owo eni la fi n deni girigiri\" — Oturupon dit a Irete: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re oturupon, a ma ko irete — Quand on va vers la maladie et la guerison, on apprend la perseverance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Irete en consultation. On lui prescrivit de reconcilier la resilience avec la perseverance pour sauver son peuple. Il comprit que soigner corps et ame sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Soigner corps et ame en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Irete.",
    interdictions: "Eviter la negligence sanitaire et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 194, hexagramYiJing: 56, geomancy: 13 },
  },
  212: {
    number: 212,
    name: "Oturupon-Ose",
    binarySignature: "11010100",
    meaning: "Oturupon-Ose combine l'energie de la maladie et la guerison avec celle de la beaute et l'enchantement. Cet Odu revele une situation ou la resilience et la seduction doivent s'harmoniser pour que le consultant avance. La jambe droite (Oturupon) apporte la sante retrouvee, tandis que la jambe gauche (Ose) apporte l'amour et l'harmonie. Le consultant est invite a soigner corps et ame tout en sachant cultiver la beaute. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la negligence sanitaire ou de la vanite superficielle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni oturupon, eni a gbe ni ose — Celui qui est ne dans la maladie et la guerison, celui qui vit dans la beaute et l'enchantement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo oturupon ati ose, yoo mo aye — Celui qui connait la resilience et la seduction connait le monde"
    ],
    eseIfaVerses: [
      "Oturupon-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la maladie et la guerison croisait celle de la beaute et l'enchantement. Le voyageur devait soigner corps et ame tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Olokun",
    prescriptions: "Soigner corps et ame en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Ose.",
    interdictions: "Eviter la negligence sanitaire et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 195, hexagramYiJing: 54, geomancy: 13 },
  },
  219: {
    number: 219,
    name: "Oturupon-Ofun",
    binarySignature: "11011011",
    meaning: "Oturupon-Ofun est un Odu de rencontre entre la maladie et la guerison et la purete et le renouveau. Quand Oturupon (la resilience) croise Ofun (la purete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Oturupon l'invite a soigner corps et ame, Ofun le pousse a purifier et recommencer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la sante retrouvee et la renaissance spirituelle simultanement, a condition de ne ceder ni a la negligence sanitaire ni a le refus du changement.",
    proverbs: [
      "Oturupon-Ofun: oju to ba ri, enu a wi — Oturupon-Ofun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Oturupon-Ofun en consultation. On lui prescrivit de reconcilier la resilience avec la purete pour sauver son peuple. Il comprit que soigner corps et ame sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Oturupon et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Osanyin",
    prescriptions: "Soigner corps et ame en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Oturupon et Ofun.",
    interdictions: "Eviter la negligence sanitaire et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 196, hexagramYiJing: 55, geomancy: 13 },
  },
  31: {
    number: 31,
    name: "Otura-Ogbe",
    binarySignature: "00011111",
    meaning: "Dans Otura-Ogbe, le signal quantique revele l'intersection de la mystique et la divination et la lumiere et la prosperite. Cet Odu apparait quand le consultant a besoin de combiner la spiritualite et la clarte pour resoudre une situation complexe. La jambe droite porte le message de Otura: ecouter les signes divins. La jambe gauche complete avec Ogbe: ouvrir les chemins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le fanatisme religieux si le consultant penche trop a droite, ou dans l'orgueil spirituel s'il penche trop a gauche. L'equilibre est la cle, et la revelation mystique s'unit a la benediction supreme pour guider le pas du consultant.",
    proverbs: [
      "Otura so fun Ogbe: \"Ise owo eni la fi n deni girigiri\" — Otura dit a Ogbe: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re otura, a ma ko ogbe — Quand on va vers la mystique et la divination, on apprend la clarte"
    ],
    eseIfaVerses: [
      "Otura-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de la lumiere et la prosperite. Le voyageur devait ecouter les signes divins tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Ecouter les signes divins en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Ogbe.",
    interdictions: "Eviter le fanatisme religieux et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 197, hexagramYiJing: 8, geomancy: 1 },
  },
  16: {
    number: 16,
    name: "Otura-Oyeku",
    binarySignature: "00010000",
    meaning: "Otura-Oyeku tisse ensemble les fils de la mystique et la divination et les mysteres et la mort-renaissance dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la spiritualite est la force de la main droite, la profondeur est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ecouter les signes divins avec conscience et de honorer les ancetres avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la revelation mystique rencontre la protection ancestrale. Mais attention : le fanatisme religieux et la peur de l'inconnu guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni otura, eni a gbe ni oyeku — Celui qui est ne dans la mystique et la divination, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo otura ati oyeku, yoo mo aye — Celui qui connait la spiritualite et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Oyeku en consultation. On lui prescrivit de reconcilier la spiritualite avec la profondeur pour sauver son peuple. Il comprit que ecouter les signes divins sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Ecouter les signes divins en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Oyeku.",
    interdictions: "Eviter le fanatisme religieux et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 198, hexagramYiJing: 5, geomancy: 1 },
  },
  22: {
    number: 22,
    name: "Otura-Iwori",
    binarySignature: "00010110",
    meaning: "L'apparition de Otura-Iwori dans une consultation d'Ifa signale un moment ou la mystique et la divination et la vision interieure convergent dans la vie du consultant. Otura apporte la spiritualite et la capacite de ecouter les signes divins. Iwori complete avec la lucidite et l'imperatif de mediter et observer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Otura seul ni Iwori seul, mais danser entre les deux comme l'equilibriste sur son fil. la revelation mystique et la clairvoyance sont les fruits de cette danse, tandis que le fanatisme religieux et l'auto-illusion sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Otura-Iwori: oju to ba ri, enu a wi — Otura-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Otura-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de la vision interieure. Le voyageur devait ecouter les signes divins tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Ecouter les signes divins en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Iwori.",
    interdictions: "Eviter le fanatisme religieux et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 199, hexagramYiJing: 6, geomancy: 1 },
  },
  25: {
    number: 25,
    name: "Otura-Odi",
    binarySignature: "00011001",
    meaning: "Otura-Odi combine l'energie de la mystique et la divination avec celle de la creation et la fertilite. Cet Odu revele une situation ou la spiritualite et la receptivite doivent s'harmoniser pour que le consultant avance. La jambe droite (Otura) apporte la revelation mystique, tandis que la jambe gauche (Odi) apporte l'abondance creatrice. Le consultant est invite a ecouter les signes divins tout en sachant nourrir et creer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le fanatisme religieux ou de la sterilite emotionnelle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Otura so fun Odi: \"Ise owo eni la fi n deni girigiri\" — Otura dit a Odi: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re otura, a ma ko odi — Quand on va vers la mystique et la divination, on apprend la receptivite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Odi en consultation. On lui prescrivit de reconcilier la spiritualite avec la receptivite pour sauver son peuple. Il comprit que ecouter les signes divins sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Ecouter les signes divins en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Odi.",
    interdictions: "Eviter le fanatisme religieux et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 200, hexagramYiJing: 7, geomancy: 1 },
  },
  21: {
    number: 21,
    name: "Otura-Irosun",
    binarySignature: "00010101",
    meaning: "Otura-Irosun est un Odu de rencontre entre la mystique et la divination et le sang et la lignee. Quand Otura (la spiritualite) croise Irosun (la loyaute), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Otura l'invite a ecouter les signes divins, Irosun le pousse a honorer sa lignee. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la revelation mystique et la continuite ancestrale simultanement, a condition de ne ceder ni a le fanatisme religieux ni a la trahison familiale.",
    proverbs: [
      "Eni a bi ni otura, eni a gbe ni irosun — Celui qui est ne dans la mystique et la divination, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo otura ati irosun, yoo mo aye — Celui qui connait la spiritualite et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Otura-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de le sang et la lignee. Le voyageur devait ecouter les signes divins tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Ecouter les signes divins en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Irosun.",
    interdictions: "Eviter le fanatisme religieux et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 201, hexagramYiJing: 6, geomancy: 1 },
  },
  26: {
    number: 26,
    name: "Otura-Owonrin",
    binarySignature: "00011010",
    meaning: "Dans Otura-Owonrin, le signal quantique revele l'intersection de la mystique et la divination et le chaos et le changement. Cet Odu apparait quand le consultant a besoin de combiner la spiritualite et l'adaptabilite pour resoudre une situation complexe. La jambe droite porte le message de Otura: ecouter les signes divins. La jambe gauche complete avec Owonrin: embrasser le changement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le fanatisme religieux si le consultant penche trop a droite, ou dans l'instabilite chronique s'il penche trop a gauche. L'equilibre est la cle, et la revelation mystique s'unit a la transformation positive pour guider le pas du consultant.",
    proverbs: [
      "Otura-Owonrin: oju to ba ri, enu a wi — Otura-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Owonrin en consultation. On lui prescrivit de reconcilier la spiritualite avec l'adaptabilite pour sauver son peuple. Il comprit que ecouter les signes divins sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Ecouter les signes divins en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Owonrin.",
    interdictions: "Eviter le fanatisme religieux et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 202, hexagramYiJing: 7, geomancy: 1 },
  },
  23: {
    number: 23,
    name: "Otura-Obara",
    binarySignature: "00010111",
    meaning: "Otura-Obara tisse ensemble les fils de la mystique et la divination et la parole et la richesse dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la spiritualite est la force de la main droite, l'eloquence est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ecouter les signes divins avec conscience et de parler avec pouvoir avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la revelation mystique rencontre la prosperite par la parole. Mais attention : le fanatisme religieux et les paroles vaines guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Otura so fun Obara: \"Ise owo eni la fi n deni girigiri\" — Otura dit a Obara: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re otura, a ma ko obara — Quand on va vers la mystique et la divination, on apprend l'eloquence"
    ],
    eseIfaVerses: [
      "Otura-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de la parole et la richesse. Le voyageur devait ecouter les signes divins tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Ecouter les signes divins en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Obara.",
    interdictions: "Eviter le fanatisme religieux et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 203, hexagramYiJing: 6, geomancy: 1 },
  },
  24: {
    number: 24,
    name: "Otura-Okanran",
    binarySignature: "00011000",
    meaning: "L'apparition de Otura-Okanran dans une consultation d'Ifa signale un moment ou la mystique et la divination et le courage et la verite convergent dans la vie du consultant. Otura apporte la spiritualite et la capacite de ecouter les signes divins. Okanran complete avec l'honnetete et l'imperatif de affronter la verite. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Otura seul ni Okanran seul, mais danser entre les deux comme l'equilibriste sur son fil. la revelation mystique et le courage du coeur sont les fruits de cette danse, tandis que le fanatisme religieux et la brutalite inutile sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni otura, eni a gbe ni okanran — Celui qui est ne dans la mystique et la divination, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo otura ati okanran, yoo mo aye — Celui qui connait la spiritualite et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Okanran en consultation. On lui prescrivit de reconcilier la spiritualite avec l'honnetete pour sauver son peuple. Il comprit que ecouter les signes divins sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Ecouter les signes divins en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Okanran.",
    interdictions: "Eviter le fanatisme religieux et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 204, hexagramYiJing: 7, geomancy: 1 },
  },
  19: {
    number: 19,
    name: "Otura-Ogunda",
    binarySignature: "00010011",
    meaning: "Otura-Ogunda combine l'energie de la mystique et la divination avec celle de le fer et l'ouverture des chemins. Cet Odu revele une situation ou la spiritualite et la determination doivent s'harmoniser pour que le consultant avance. La jambe droite (Otura) apporte la revelation mystique, tandis que la jambe gauche (Ogunda) apporte la voie ouverte. Le consultant est invite a ecouter les signes divins tout en sachant debroussailler et avancer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le fanatisme religieux ou de la violence destructrice. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Otura-Ogunda: oju to ba ri, enu a wi — Otura-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Otura-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de le fer et l'ouverture des chemins. Le voyageur devait ecouter les signes divins tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Ecouter les signes divins en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Ogunda.",
    interdictions: "Eviter le fanatisme religieux et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 205, hexagramYiJing: 5, geomancy: 1 },
  },
  28: {
    number: 28,
    name: "Otura-Osa",
    binarySignature: "00011100",
    meaning: "Otura-Osa est un Odu de rencontre entre la mystique et la divination et les forces occultes et les tempetes. Quand Otura (la spiritualite) croise Osa (la vigilance), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Otura l'invite a ecouter les signes divins, Osa le pousse a se proteger spirituellement. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la revelation mystique et le pouvoir feminin sacre simultanement, a condition de ne ceder ni a le fanatisme religieux ni a la sorcellerie negligee.",
    proverbs: [
      "Otura so fun Osa: \"Ise owo eni la fi n deni girigiri\" — Otura dit a Osa: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re otura, a ma ko osa — Quand on va vers la mystique et la divination, on apprend la vigilance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Osa en consultation. On lui prescrivit de reconcilier la spiritualite avec la vigilance pour sauver son peuple. Il comprit que ecouter les signes divins sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Ecouter les signes divins en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Osa.",
    interdictions: "Eviter le fanatisme religieux et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 206, hexagramYiJing: 8, geomancy: 1 },
  },
  18: {
    number: 18,
    name: "Otura-Ika",
    binarySignature: "00010010",
    meaning: "Dans Otura-Ika, le signal quantique revele l'intersection de la mystique et la divination et la ruse et la medecine. Cet Odu apparait quand le consultant a besoin de combiner la spiritualite et la patience pour resoudre une situation complexe. La jambe droite porte le message de Otura: ecouter les signes divins. La jambe gauche complete avec Ika: observer et attendre. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le fanatisme religieux si le consultant penche trop a droite, ou dans la traitrise s'il penche trop a gauche. L'equilibre est la cle, et la revelation mystique s'unit a la guerison par la sagesse pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni otura, eni a gbe ni ika — Celui qui est ne dans la mystique et la divination, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo otura ati ika, yoo mo aye — Celui qui connait la spiritualite et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Otura-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de la ruse et la medecine. Le voyageur devait ecouter les signes divins tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Ecouter les signes divins en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Ika.",
    interdictions: "Eviter le fanatisme religieux et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 207, hexagramYiJing: 5, geomancy: 1 },
  },
  29: {
    number: 29,
    name: "Otura-Oturupon",
    binarySignature: "00011101",
    meaning: "Otura-Oturupon tisse ensemble les fils de la mystique et la divination et la maladie et la guerison dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la spiritualite est la force de la main droite, la resilience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de ecouter les signes divins avec conscience et de soigner corps et ame avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la revelation mystique rencontre la sante retrouvee. Mais attention : le fanatisme religieux et la negligence sanitaire guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Otura-Oturupon: oju to ba ri, enu a wi — Otura-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Oturupon en consultation. On lui prescrivit de reconcilier la spiritualite avec la resilience pour sauver son peuple. Il comprit que ecouter les signes divins sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Ecouter les signes divins en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Oturupon.",
    interdictions: "Eviter le fanatisme religieux et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 208, hexagramYiJing: 8, geomancy: 1 },
  },
  17: {
    number: 17,
    name: "Otura Meji",
    binarySignature: "00010001",
    meaning: "Otura Meji est le treizieme Odu, porteur de la sagesse mystique, de la divination et de la connexion avec le divin. Son motif (0001-0001) evoque un point de lumiere dans l'obscurite — l'etoile qui guide le voyageur la nuit. Otura est l'Odu de la spiritualite pure, de l'eveil mystique et de la revelation. Il est etroitement lie a Orunmila, le dieu de la sagesse et de la divination. Quand Otura apparait, le consultant est au seuil d'une revelation spirituelle importante. Les reves sont significatifs, les intuitions sont justes, les synchronicites se multiplient. Otura enseigne que le divin parle a travers mille canaux — reves, signes, coincidences, oiseaux, vent — et que l'etre humain eveille percoit ces messages avec clarte.",
    proverbs: [
      "Otura Meji, awo ni gbogbo aye — Otura Meji, le mystere de tout le monde",
      "Eni ti Orunmila ba yan, ko le sonu — Celui qu'Orunmila a choisi ne peut se perdre",
      "Ala ni a fi n mo ojo ola — C'est par le reve que l'on connait le lendemain",
      "Iwa ni a fi n mo eniyan, kii se oju — C'est par le caractere qu'on connait quelqu'un, pas par le visage",
      "Orunmila lo mo ojo ti a o ku, Orunmila lo mo ojo ti a o da — Orunmila connait le jour de la mort et le jour du jugement"
    ],
    eseIfaVerses: [
      "Otura Meji etait le premier Odu a recevoir le don de la voyance. Olodumare lui placa une etoile dans le front et lui dit : « Tu seras la lumiere qui guide les ames perdues. » Depuis, chaque babalawo porte invisiblement cette etoile d'Otura au centre de son front — le troisieme oeil qui voit l'invisible. Les consultations les plus profondes et les revelations les plus importantes sont celles qui viennent sous le signe d'Otura.",
      "Un berger eut un reve ou Otura Meji lui montrait un tresor cache sous un arbre mort. Il consulta le babalawo qui confirma la vision. Le berger trouva le tresor et fonda un temple dedie a Orunmila. Otura enseigne que les reves ne sont pas des illusions mais des messages du monde spirituel, et que les ignorer est aussi imprudent que d'ignorer une carte au tresor.",
      "Otura Meji enseigna aux premiers babalawo les seize codes fondamentaux de la divination d'Ifa. Il leur revela comment lire les traces sur le plateau sacre, comment interpreter la chute des noix de palme et comment ecouter la voix d'Orunmila dans le silence entre les mots. Sans Otura, il n'y aurait pas de divination d'Ifa, car c'est lui qui ouvrit le canal entre le monde des hommes et le monde des dieux."
    ],
    orisha: "Orunmila",
    prescriptions: "Offrir deux poules, du miel et de la craie blanche. Mediter au lever du soleil. Tenir un journal de reves. Porter du blanc et de l'or.",
    interdictions: "Ne pas ignorer ses reves. Eviter le scepticisme envers le spirituel. Ne pas consulter de faux devins. Ne pas profaner les objets sacres.",
    element: "Air",
    correspondences: { rank: 13, hexagramYiJing: 5, geomancy: 1 },
  },
  30: {
    number: 30,
    name: "Otura-Irete",
    binarySignature: "00011110",
    meaning: "Otura-Irete combine l'energie de la mystique et la divination avec celle de l'endurance et la pression. Cet Odu revele une situation ou la spiritualite et la perseverance doivent s'harmoniser pour que le consultant avance. La jambe droite (Otura) apporte la revelation mystique, tandis que la jambe gauche (Irete) apporte la force interieure. Le consultant est invite a ecouter les signes divins tout en sachant resister et perseverer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le fanatisme religieux ou de l'obstination aveugle. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni otura, eni a gbe ni irete — Celui qui est ne dans la mystique et la divination, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo otura ati irete, yoo mo aye — Celui qui connait la spiritualite et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Irete en consultation. On lui prescrivit de reconcilier la spiritualite avec la perseverance pour sauver son peuple. Il comprit que ecouter les signes divins sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Ecouter les signes divins en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Irete.",
    interdictions: "Eviter le fanatisme religieux et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 209, hexagramYiJing: 8, geomancy: 1 },
  },
  20: {
    number: 20,
    name: "Otura-Ose",
    binarySignature: "00010100",
    meaning: "Otura-Ose est un Odu de rencontre entre la mystique et la divination et la beaute et l'enchantement. Quand Otura (la spiritualite) croise Ose (la seduction), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Otura l'invite a ecouter les signes divins, Ose le pousse a cultiver la beaute. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la revelation mystique et l'amour et l'harmonie simultanement, a condition de ne ceder ni a le fanatisme religieux ni a la vanite superficielle.",
    proverbs: [
      "Otura-Ose: oju to ba ri, enu a wi — Otura-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Otura-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la mystique et la divination croisait celle de la beaute et l'enchantement. Le voyageur devait ecouter les signes divins tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Egungun",
    prescriptions: "Ecouter les signes divins en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Ose.",
    interdictions: "Eviter le fanatisme religieux et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 210, hexagramYiJing: 6, geomancy: 1 },
  },
  27: {
    number: 27,
    name: "Otura-Ofun",
    binarySignature: "00011011",
    meaning: "Dans Otura-Ofun, le signal quantique revele l'intersection de la mystique et la divination et la purete et le renouveau. Cet Odu apparait quand le consultant a besoin de combiner la spiritualite et la purete pour resoudre une situation complexe. La jambe droite porte le message de Otura: ecouter les signes divins. La jambe gauche complete avec Ofun: purifier et recommencer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le fanatisme religieux si le consultant penche trop a droite, ou dans le refus du changement s'il penche trop a gauche. L'equilibre est la cle, et la revelation mystique s'unit a la renaissance spirituelle pour guider le pas du consultant.",
    proverbs: [
      "Otura so fun Ofun: \"Ise owo eni la fi n deni girigiri\" — Otura dit a Ofun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re otura, a ma ko ofun — Quand on va vers la mystique et la divination, on apprend la purete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Otura-Ofun en consultation. On lui prescrivit de reconcilier la spiritualite avec la purete pour sauver son peuple. Il comprit que ecouter les signes divins sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Otura et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obatala",
    prescriptions: "Ecouter les signes divins en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Otura et Ofun.",
    interdictions: "Eviter le fanatisme religieux et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 211, hexagramYiJing: 7, geomancy: 1 },
  },
  239: {
    number: 239,
    name: "Irete-Ogbe",
    binarySignature: "11101111",
    meaning: "Irete-Ogbe tisse ensemble les fils de l'endurance et la pression et la lumiere et la prosperite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la perseverance est la force de la main droite, la clarte est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de resister et perseverer avec conscience et de ouvrir les chemins avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la force interieure rencontre la benediction supreme. Mais attention : l'obstination aveugle et l'orgueil spirituel guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni ogbe — Celui qui est ne dans l'endurance et la pression, celui qui vit dans la lumiere et la prosperite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati ogbe, yoo mo aye — Celui qui connait la perseverance et la clarte connait le monde"
    ],
    eseIfaVerses: [
      "Irete-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la lumiere et la prosperite. Le voyageur devait resister et perseverer tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Resister et perseverer en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Ogbe.",
    interdictions: "Eviter l'obstination aveugle et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 212, hexagramYiJing: 60, geomancy: 14 },
  },
  224: {
    number: 224,
    name: "Irete-Oyeku",
    binarySignature: "11100000",
    meaning: "L'apparition de Irete-Oyeku dans une consultation d'Ifa signale un moment ou l'endurance et la pression et les mysteres et la mort-renaissance convergent dans la vie du consultant. Irete apporte la perseverance et la capacite de resister et perseverer. Oyeku complete avec la profondeur et l'imperatif de honorer les ancetres. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irete seul ni Oyeku seul, mais danser entre les deux comme l'equilibriste sur son fil. la force interieure et la protection ancestrale sont les fruits de cette danse, tandis que l'obstination aveugle et la peur de l'inconnu sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Irete-Oyeku: oju to ba ri, enu a wi — Irete-Oyeku: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Oyeku en consultation. On lui prescrivit de reconcilier la perseverance avec la profondeur pour sauver son peuple. Il comprit que resister et perseverer sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Resister et perseverer en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Oyeku.",
    interdictions: "Eviter l'obstination aveugle et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 213, hexagramYiJing: 57, geomancy: 14 },
  },
  230: {
    number: 230,
    name: "Irete-Iwori",
    binarySignature: "11100110",
    meaning: "Irete-Iwori combine l'energie de l'endurance et la pression avec celle de la vision interieure. Cet Odu revele une situation ou la perseverance et la lucidite doivent s'harmoniser pour que le consultant avance. La jambe droite (Irete) apporte la force interieure, tandis que la jambe gauche (Iwori) apporte la clairvoyance. Le consultant est invite a resister et perseverer tout en sachant mediter et observer. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'obstination aveugle ou de l'auto-illusion. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Irete so fun Iwori: \"Ise owo eni la fi n deni girigiri\" — Irete dit a Iwori: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irete, a ma ko iwori — Quand on va vers l'endurance et la pression, on apprend la lucidite"
    ],
    eseIfaVerses: [
      "Irete-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la vision interieure. Le voyageur devait resister et perseverer tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Resister et perseverer en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Iwori.",
    interdictions: "Eviter l'obstination aveugle et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 214, hexagramYiJing: 58, geomancy: 14 },
  },
  233: {
    number: 233,
    name: "Irete-Odi",
    binarySignature: "11101001",
    meaning: "Irete-Odi est un Odu de rencontre entre l'endurance et la pression et la creation et la fertilite. Quand Irete (la perseverance) croise Odi (la receptivite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Irete l'invite a resister et perseverer, Odi le pousse a nourrir et creer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la force interieure et l'abondance creatrice simultanement, a condition de ne ceder ni a l'obstination aveugle ni a la sterilite emotionnelle.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni odi — Celui qui est ne dans l'endurance et la pression, celui qui vit dans la creation et la fertilite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati odi, yoo mo aye — Celui qui connait la perseverance et la receptivite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Odi en consultation. On lui prescrivit de reconcilier la perseverance avec la receptivite pour sauver son peuple. Il comprit que resister et perseverer sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Resister et perseverer en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Odi.",
    interdictions: "Eviter l'obstination aveugle et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 215, hexagramYiJing: 59, geomancy: 14 },
  },
  229: {
    number: 229,
    name: "Irete-Irosun",
    binarySignature: "11100101",
    meaning: "Dans Irete-Irosun, le signal quantique revele l'intersection de l'endurance et la pression et le sang et la lignee. Cet Odu apparait quand le consultant a besoin de combiner la perseverance et la loyaute pour resoudre une situation complexe. La jambe droite porte le message de Irete: resister et perseverer. La jambe gauche complete avec Irosun: honorer sa lignee. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'obstination aveugle si le consultant penche trop a droite, ou dans la trahison familiale s'il penche trop a gauche. L'equilibre est la cle, et la force interieure s'unit a la continuite ancestrale pour guider le pas du consultant.",
    proverbs: [
      "Irete-Irosun: oju to ba ri, enu a wi — Irete-Irosun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Irete-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de le sang et la lignee. Le voyageur devait resister et perseverer tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Resister et perseverer en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Irosun.",
    interdictions: "Eviter l'obstination aveugle et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 216, hexagramYiJing: 58, geomancy: 14 },
  },
  234: {
    number: 234,
    name: "Irete-Owonrin",
    binarySignature: "11101010",
    meaning: "Irete-Owonrin tisse ensemble les fils de l'endurance et la pression et le chaos et le changement dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la perseverance est la force de la main droite, l'adaptabilite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de resister et perseverer avec conscience et de embrasser le changement avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la force interieure rencontre la transformation positive. Mais attention : l'obstination aveugle et l'instabilite chronique guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Irete so fun Owonrin: \"Ise owo eni la fi n deni girigiri\" — Irete dit a Owonrin: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irete, a ma ko owonrin — Quand on va vers l'endurance et la pression, on apprend l'adaptabilite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Owonrin en consultation. On lui prescrivit de reconcilier la perseverance avec l'adaptabilite pour sauver son peuple. Il comprit que resister et perseverer sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Resister et perseverer en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Owonrin.",
    interdictions: "Eviter l'obstination aveugle et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 217, hexagramYiJing: 59, geomancy: 14 },
  },
  231: {
    number: 231,
    name: "Irete-Obara",
    binarySignature: "11100111",
    meaning: "L'apparition de Irete-Obara dans une consultation d'Ifa signale un moment ou l'endurance et la pression et la parole et la richesse convergent dans la vie du consultant. Irete apporte la perseverance et la capacite de resister et perseverer. Obara complete avec l'eloquence et l'imperatif de parler avec pouvoir. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irete seul ni Obara seul, mais danser entre les deux comme l'equilibriste sur son fil. la force interieure et la prosperite par la parole sont les fruits de cette danse, tandis que l'obstination aveugle et les paroles vaines sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni obara — Celui qui est ne dans l'endurance et la pression, celui qui vit dans la parole et la richesse",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati obara, yoo mo aye — Celui qui connait la perseverance et l'eloquence connait le monde"
    ],
    eseIfaVerses: [
      "Irete-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la parole et la richesse. Le voyageur devait resister et perseverer tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Resister et perseverer en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Obara.",
    interdictions: "Eviter l'obstination aveugle et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 218, hexagramYiJing: 58, geomancy: 14 },
  },
  232: {
    number: 232,
    name: "Irete-Okanran",
    binarySignature: "11101000",
    meaning: "Irete-Okanran combine l'energie de l'endurance et la pression avec celle de le courage et la verite. Cet Odu revele une situation ou la perseverance et l'honnetete doivent s'harmoniser pour que le consultant avance. La jambe droite (Irete) apporte la force interieure, tandis que la jambe gauche (Okanran) apporte le courage du coeur. Le consultant est invite a resister et perseverer tout en sachant affronter la verite. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'obstination aveugle ou de la brutalite inutile. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Irete-Okanran: oju to ba ri, enu a wi — Irete-Okanran: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Okanran en consultation. On lui prescrivit de reconcilier la perseverance avec l'honnetete pour sauver son peuple. Il comprit que resister et perseverer sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Resister et perseverer en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Okanran.",
    interdictions: "Eviter l'obstination aveugle et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 219, hexagramYiJing: 59, geomancy: 14 },
  },
  227: {
    number: 227,
    name: "Irete-Ogunda",
    binarySignature: "11100011",
    meaning: "Irete-Ogunda est un Odu de rencontre entre l'endurance et la pression et le fer et l'ouverture des chemins. Quand Irete (la perseverance) croise Ogunda (la determination), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Irete l'invite a resister et perseverer, Ogunda le pousse a debroussailler et avancer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la force interieure et la voie ouverte simultanement, a condition de ne ceder ni a l'obstination aveugle ni a la violence destructrice.",
    proverbs: [
      "Irete so fun Ogunda: \"Ise owo eni la fi n deni girigiri\" — Irete dit a Ogunda: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irete, a ma ko ogunda — Quand on va vers l'endurance et la pression, on apprend la determination"
    ],
    eseIfaVerses: [
      "Irete-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de le fer et l'ouverture des chemins. Le voyageur devait resister et perseverer tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Resister et perseverer en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Ogunda.",
    interdictions: "Eviter l'obstination aveugle et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 220, hexagramYiJing: 57, geomancy: 14 },
  },
  236: {
    number: 236,
    name: "Irete-Osa",
    binarySignature: "11101100",
    meaning: "Dans Irete-Osa, le signal quantique revele l'intersection de l'endurance et la pression et les forces occultes et les tempetes. Cet Odu apparait quand le consultant a besoin de combiner la perseverance et la vigilance pour resoudre une situation complexe. La jambe droite porte le message de Irete: resister et perseverer. La jambe gauche complete avec Osa: se proteger spirituellement. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'obstination aveugle si le consultant penche trop a droite, ou dans la sorcellerie negligee s'il penche trop a gauche. L'equilibre est la cle, et la force interieure s'unit a le pouvoir feminin sacre pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni osa — Celui qui est ne dans l'endurance et la pression, celui qui vit dans les forces occultes et les tempetes",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati osa, yoo mo aye — Celui qui connait la perseverance et la vigilance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Osa en consultation. On lui prescrivit de reconcilier la perseverance avec la vigilance pour sauver son peuple. Il comprit que resister et perseverer sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Resister et perseverer en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Osa.",
    interdictions: "Eviter l'obstination aveugle et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 221, hexagramYiJing: 60, geomancy: 14 },
  },
  226: {
    number: 226,
    name: "Irete-Ika",
    binarySignature: "11100010",
    meaning: "Irete-Ika tisse ensemble les fils de l'endurance et la pression et la ruse et la medecine dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la perseverance est la force de la main droite, la patience est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de resister et perseverer avec conscience et de observer et attendre avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la force interieure rencontre la guerison par la sagesse. Mais attention : l'obstination aveugle et la traitrise guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Irete-Ika: oju to ba ri, enu a wi — Irete-Ika: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Irete-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la ruse et la medecine. Le voyageur devait resister et perseverer tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Resister et perseverer en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Ika.",
    interdictions: "Eviter l'obstination aveugle et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 222, hexagramYiJing: 57, geomancy: 14 },
  },
  237: {
    number: 237,
    name: "Irete-Oturupon",
    binarySignature: "11101101",
    meaning: "L'apparition de Irete-Oturupon dans une consultation d'Ifa signale un moment ou l'endurance et la pression et la maladie et la guerison convergent dans la vie du consultant. Irete apporte la perseverance et la capacite de resister et perseverer. Oturupon complete avec la resilience et l'imperatif de soigner corps et ame. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Irete seul ni Oturupon seul, mais danser entre les deux comme l'equilibriste sur son fil. la force interieure et la sante retrouvee sont les fruits de cette danse, tandis que l'obstination aveugle et la negligence sanitaire sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Irete so fun Oturupon: \"Ise owo eni la fi n deni girigiri\" — Irete dit a Oturupon: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irete, a ma ko oturupon — Quand on va vers l'endurance et la pression, on apprend la resilience"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Oturupon en consultation. On lui prescrivit de reconcilier la perseverance avec la resilience pour sauver son peuple. Il comprit que resister et perseverer sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Resister et perseverer en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Oturupon.",
    interdictions: "Eviter l'obstination aveugle et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 223, hexagramYiJing: 60, geomancy: 14 },
  },
  225: {
    number: 225,
    name: "Irete-Otura",
    binarySignature: "11100001",
    meaning: "Irete-Otura combine l'energie de l'endurance et la pression avec celle de la mystique et la divination. Cet Odu revele une situation ou la perseverance et la spiritualite doivent s'harmoniser pour que le consultant avance. La jambe droite (Irete) apporte la force interieure, tandis que la jambe gauche (Otura) apporte la revelation mystique. Le consultant est invite a resister et perseverer tout en sachant ecouter les signes divins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de l'obstination aveugle ou de le fanatisme religieux. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni otura — Celui qui est ne dans l'endurance et la pression, celui qui vit dans la mystique et la divination",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati otura, yoo mo aye — Celui qui connait la perseverance et la spiritualite connait le monde"
    ],
    eseIfaVerses: [
      "Irete-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la mystique et la divination. Le voyageur devait resister et perseverer tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Resister et perseverer en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Otura.",
    interdictions: "Eviter l'obstination aveugle et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 224, hexagramYiJing: 57, geomancy: 14 },
  },
  238: {
    number: 238,
    name: "Irete Meji",
    binarySignature: "11101110",
    meaning: "Irete Meji est le quatorzieme Odu, lie a la pression, a l'endurance et a la force qui vient de la resistance. Son motif (1110-1110) evoque un poing ferme avec un seul doigt relache — la tension extreme qui precede l'action decisive. Irete est l'Odu de la perseverance sous pression, de la capacite a maintenir le cap quand tout semble s'effondrer. Il est associe aux epreuves initiatiques et aux defis qui forgent le caractere. Quand Irete apparait, le consultant traverse ou va traverser une periode d'intense pression. Ce n'est pas une maledicition mais une initiation : la pression transforme le charbon en diamant. Irete enseigne que la grandeur nait de la resistance et que chaque epreuve surmontee ajoute une couche de force a l'ame.",
    proverbs: [
      "Irete meji, ipa ni ase — Irete Meji, la force est dans la resistance",
      "Eni to ba le farada, yoo ri ayo — Celui qui peut endurer connaitra la joie",
      "Okuta to wa ninu odo, ko beru omi — La pierre dans la riviere ne craint pas l'eau",
      "Agbara ko ni lori suuru — La force ne surpasse pas la patience",
      "Eni to ba gun ori oke, yoo ri isale — Celui qui gravit le sommet verra la vallee"
    ],
    eseIfaVerses: [
      "Irete Meji fut soumis a seize epreuves par Olodumare avant de recevoir son rang parmi les Odu. Chaque epreuve etait plus dure que la precedente. Les autres Odu abandonnerent, mais Irete tint bon. A la seizieme epreuve, Olodumare lui revela que les epreuves elles-memes etaient la recompense — car elles avaient forge en lui une force que rien ne pourrait jamais briser. Irete enseigne que le processus est le prix, et que le diamant ne se plaint pas de la pression qui l'a cree.",
      "Un apprenti babalawo voulut abandonner sa formation apres sept ans d'epreuves. Irete Meji apparut dans sa consultation et lui montra que la huitieme annee serait celle de la revelation. Il persevera et devint le plus grand babalawo de sa generation. Irete dit : « L'abandon est la seule defaite veritable. Tant que tu continues a marcher, tu es en chemin vers la victoire. »",
      "Quand la terre tremblait et que les montagnes s'effrondraient, Irete Meji tint le ciel avec ses epaules pour empecher qu'il ne tombe. Les hommes le prirent pour un fou car ils ne voyaient pas le ciel tomber. Mais quand la crise passa, ils comprirent que c'etait grace a Irete que le monde avait survecu. Irete enseigne que les vrais heros sont souvent invisibles et incompris de leur vivant."
    ],
    orisha: "Obatala",
    prescriptions: "Offrir un escargot, du beurre de karite et de la craie blanche. Perseverer dans les epreuves. Faire de l'exercice physique. Porter du blanc.",
    interdictions: "Ne pas abandonner face aux difficultes. Eviter la plainte constante. Ne pas boire d'alcool en exces. Ne pas fuir ses responsabilites.",
    element: "Terre",
    correspondences: { rank: 14, hexagramYiJing: 60, geomancy: 14 },
  },
  228: {
    number: 228,
    name: "Irete-Ose",
    binarySignature: "11100100",
    meaning: "Dans Irete-Ose, le signal quantique revele l'intersection de l'endurance et la pression et la beaute et l'enchantement. Cet Odu apparait quand le consultant a besoin de combiner la perseverance et la seduction pour resoudre une situation complexe. La jambe droite porte le message de Irete: resister et perseverer. La jambe gauche complete avec Ose: cultiver la beaute. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans l'obstination aveugle si le consultant penche trop a droite, ou dans la vanite superficielle s'il penche trop a gauche. L'equilibre est la cle, et la force interieure s'unit a l'amour et l'harmonie pour guider le pas du consultant.",
    proverbs: [
      "Irete so fun Ose: \"Ise owo eni la fi n deni girigiri\" — Irete dit a Ose: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re irete, a ma ko ose — Quand on va vers l'endurance et la pression, on apprend la seduction"
    ],
    eseIfaVerses: [
      "Irete-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de l'endurance et la pression croisait celle de la beaute et l'enchantement. Le voyageur devait resister et perseverer tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Nana Buruku",
    prescriptions: "Resister et perseverer en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Ose.",
    interdictions: "Eviter l'obstination aveugle et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 225, hexagramYiJing: 58, geomancy: 14 },
  },
  235: {
    number: 235,
    name: "Irete-Ofun",
    binarySignature: "11101011",
    meaning: "Irete-Ofun tisse ensemble les fils de l'endurance et la pression et la purete et le renouveau dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la perseverance est la force de la main droite, la purete est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de resister et perseverer avec conscience et de purifier et recommencer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la force interieure rencontre la renaissance spirituelle. Mais attention : l'obstination aveugle et le refus du changement guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni irete, eni a gbe ni ofun — Celui qui est ne dans l'endurance et la pression, celui qui vit dans la purete et le renouveau",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo irete ati ofun, yoo mo aye — Celui qui connait la perseverance et la purete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Irete-Ofun en consultation. On lui prescrivit de reconcilier la perseverance avec la purete pour sauver son peuple. Il comprit que resister et perseverer sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Irete et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Shango",
    prescriptions: "Resister et perseverer en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Irete et Ofun.",
    interdictions: "Eviter l'obstination aveugle et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 226, hexagramYiJing: 59, geomancy: 14 },
  },
  79: {
    number: 79,
    name: "Ose-Ogbe",
    binarySignature: "01001111",
    meaning: "L'apparition de Ose-Ogbe dans une consultation d'Ifa signale un moment ou la beaute et l'enchantement et la lumiere et la prosperite convergent dans la vie du consultant. Ose apporte la seduction et la capacite de cultiver la beaute. Ogbe complete avec la clarte et l'imperatif de ouvrir les chemins. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ose seul ni Ogbe seul, mais danser entre les deux comme l'equilibriste sur son fil. l'amour et l'harmonie et la benediction supreme sont les fruits de cette danse, tandis que la vanite superficielle et l'orgueil spirituel sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ose-Ogbe: oju to ba ri, enu a wi — Ose-Ogbe: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ose-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de la lumiere et la prosperite. Le voyageur devait cultiver la beaute tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Yemoja",
    prescriptions: "Cultiver la beaute en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Ogbe.",
    interdictions: "Eviter la vanite superficielle et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 227, hexagramYiJing: 20, geomancy: 4 },
  },
  64: {
    number: 64,
    name: "Ose-Oyeku",
    binarySignature: "01000000",
    meaning: "Ose-Oyeku combine l'energie de la beaute et l'enchantement avec celle de les mysteres et la mort-renaissance. Cet Odu revele une situation ou la seduction et la profondeur doivent s'harmoniser pour que le consultant avance. La jambe droite (Ose) apporte l'amour et l'harmonie, tandis que la jambe gauche (Oyeku) apporte la protection ancestrale. Le consultant est invite a cultiver la beaute tout en sachant honorer les ancetres. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la vanite superficielle ou de la peur de l'inconnu. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ose so fun Oyeku: \"Ise owo eni la fi n deni girigiri\" — Ose dit a Oyeku: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ose, a ma ko oyeku — Quand on va vers la beaute et l'enchantement, on apprend la profondeur"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Oyeku en consultation. On lui prescrivit de reconcilier la seduction avec la profondeur pour sauver son peuple. Il comprit que cultiver la beaute sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oko",
    prescriptions: "Cultiver la beaute en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Oyeku.",
    interdictions: "Eviter la vanite superficielle et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 228, hexagramYiJing: 17, geomancy: 4 },
  },
  70: {
    number: 70,
    name: "Ose-Iwori",
    binarySignature: "01000110",
    meaning: "Ose-Iwori est un Odu de rencontre entre la beaute et l'enchantement et la vision interieure. Quand Ose (la seduction) croise Iwori (la lucidite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ose l'invite a cultiver la beaute, Iwori le pousse a mediter et observer. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui l'amour et l'harmonie et la clairvoyance simultanement, a condition de ne ceder ni a la vanite superficielle ni a l'auto-illusion.",
    proverbs: [
      "Eni a bi ni ose, eni a gbe ni iwori — Celui qui est ne dans la beaute et l'enchantement, celui qui vit dans la vision interieure",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ose ati iwori, yoo mo aye — Celui qui connait la seduction et la lucidite connait le monde"
    ],
    eseIfaVerses: [
      "Ose-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de la vision interieure. Le voyageur devait cultiver la beaute tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Aje",
    prescriptions: "Cultiver la beaute en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Iwori.",
    interdictions: "Eviter la vanite superficielle et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 229, hexagramYiJing: 18, geomancy: 4 },
  },
  73: {
    number: 73,
    name: "Ose-Odi",
    binarySignature: "01001001",
    meaning: "Dans Ose-Odi, le signal quantique revele l'intersection de la beaute et l'enchantement et la creation et la fertilite. Cet Odu apparait quand le consultant a besoin de combiner la seduction et la receptivite pour resoudre une situation complexe. La jambe droite porte le message de Ose: cultiver la beaute. La jambe gauche complete avec Odi: nourrir et creer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la vanite superficielle si le consultant penche trop a droite, ou dans la sterilite emotionnelle s'il penche trop a gauche. L'equilibre est la cle, et l'amour et l'harmonie s'unit a l'abondance creatrice pour guider le pas du consultant.",
    proverbs: [
      "Ose-Odi: oju to ba ri, enu a wi — Ose-Odi: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Odi en consultation. On lui prescrivit de reconcilier la seduction avec la receptivite pour sauver son peuple. Il comprit que cultiver la beaute sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshun",
    prescriptions: "Cultiver la beaute en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Odi.",
    interdictions: "Eviter la vanite superficielle et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 230, hexagramYiJing: 19, geomancy: 4 },
  },
  69: {
    number: 69,
    name: "Ose-Irosun",
    binarySignature: "01000101",
    meaning: "Ose-Irosun tisse ensemble les fils de la beaute et l'enchantement et le sang et la lignee dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la seduction est la force de la main droite, la loyaute est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de cultiver la beaute avec conscience et de honorer sa lignee avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'amour et l'harmonie rencontre la continuite ancestrale. Mais attention : la vanite superficielle et la trahison familiale guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ose so fun Irosun: \"Ise owo eni la fi n deni girigiri\" — Ose dit a Irosun: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ose, a ma ko irosun — Quand on va vers la beaute et l'enchantement, on apprend la loyaute"
    ],
    eseIfaVerses: [
      "Ose-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de le sang et la lignee. Le voyageur devait cultiver la beaute tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oduduwa",
    prescriptions: "Cultiver la beaute en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Irosun.",
    interdictions: "Eviter la vanite superficielle et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 231, hexagramYiJing: 18, geomancy: 4 },
  },
  74: {
    number: 74,
    name: "Ose-Owonrin",
    binarySignature: "01001010",
    meaning: "L'apparition de Ose-Owonrin dans une consultation d'Ifa signale un moment ou la beaute et l'enchantement et le chaos et le changement convergent dans la vie du consultant. Ose apporte la seduction et la capacite de cultiver la beaute. Owonrin complete avec l'adaptabilite et l'imperatif de embrasser le changement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ose seul ni Owonrin seul, mais danser entre les deux comme l'equilibriste sur son fil. l'amour et l'harmonie et la transformation positive sont les fruits de cette danse, tandis que la vanite superficielle et l'instabilite chronique sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni ose, eni a gbe ni owonrin — Celui qui est ne dans la beaute et l'enchantement, celui qui vit dans le chaos et le changement",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ose ati owonrin, yoo mo aye — Celui qui connait la seduction et l'adaptabilite connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Owonrin en consultation. On lui prescrivit de reconcilier la seduction avec l'adaptabilite pour sauver son peuple. Il comprit que cultiver la beaute sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Nana Buruku",
    prescriptions: "Cultiver la beaute en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Owonrin.",
    interdictions: "Eviter la vanite superficielle et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 232, hexagramYiJing: 19, geomancy: 4 },
  },
  71: {
    number: 71,
    name: "Ose-Obara",
    binarySignature: "01000111",
    meaning: "Ose-Obara combine l'energie de la beaute et l'enchantement avec celle de la parole et la richesse. Cet Odu revele une situation ou la seduction et l'eloquence doivent s'harmoniser pour que le consultant avance. La jambe droite (Ose) apporte l'amour et l'harmonie, tandis que la jambe gauche (Obara) apporte la prosperite par la parole. Le consultant est invite a cultiver la beaute tout en sachant parler avec pouvoir. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la vanite superficielle ou de les paroles vaines. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ose-Obara: oju to ba ri, enu a wi — Ose-Obara: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ose-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de la parole et la richesse. Le voyageur devait cultiver la beaute tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Shango",
    prescriptions: "Cultiver la beaute en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Obara.",
    interdictions: "Eviter la vanite superficielle et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 233, hexagramYiJing: 18, geomancy: 4 },
  },
  72: {
    number: 72,
    name: "Ose-Okanran",
    binarySignature: "01001000",
    meaning: "Ose-Okanran est un Odu de rencontre entre la beaute et l'enchantement et le courage et la verite. Quand Ose (la seduction) croise Okanran (l'honnetete), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ose l'invite a cultiver la beaute, Okanran le pousse a affronter la verite. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui l'amour et l'harmonie et le courage du coeur simultanement, a condition de ne ceder ni a la vanite superficielle ni a la brutalite inutile.",
    proverbs: [
      "Ose so fun Okanran: \"Ise owo eni la fi n deni girigiri\" — Ose dit a Okanran: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ose, a ma ko okanran — Quand on va vers la beaute et l'enchantement, on apprend l'honnetete"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Okanran en consultation. On lui prescrivit de reconcilier la seduction avec l'honnetete pour sauver son peuple. Il comprit que cultiver la beaute sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Olokun",
    prescriptions: "Cultiver la beaute en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Okanran.",
    interdictions: "Eviter la vanite superficielle et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 234, hexagramYiJing: 19, geomancy: 4 },
  },
  67: {
    number: 67,
    name: "Ose-Ogunda",
    binarySignature: "01000011",
    meaning: "Dans Ose-Ogunda, le signal quantique revele l'intersection de la beaute et l'enchantement et le fer et l'ouverture des chemins. Cet Odu apparait quand le consultant a besoin de combiner la seduction et la determination pour resoudre une situation complexe. La jambe droite porte le message de Ose: cultiver la beaute. La jambe gauche complete avec Ogunda: debroussailler et avancer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la vanite superficielle si le consultant penche trop a droite, ou dans la violence destructrice s'il penche trop a gauche. L'equilibre est la cle, et l'amour et l'harmonie s'unit a la voie ouverte pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni ose, eni a gbe ni ogunda — Celui qui est ne dans la beaute et l'enchantement, celui qui vit dans le fer et l'ouverture des chemins",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ose ati ogunda, yoo mo aye — Celui qui connait la seduction et la determination connait le monde"
    ],
    eseIfaVerses: [
      "Ose-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de le fer et l'ouverture des chemins. Le voyageur devait cultiver la beaute tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Osanyin",
    prescriptions: "Cultiver la beaute en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Ogunda.",
    interdictions: "Eviter la vanite superficielle et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 235, hexagramYiJing: 17, geomancy: 4 },
  },
  76: {
    number: 76,
    name: "Ose-Osa",
    binarySignature: "01001100",
    meaning: "Ose-Osa tisse ensemble les fils de la beaute et l'enchantement et les forces occultes et les tempetes dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la seduction est la force de la main droite, la vigilance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de cultiver la beaute avec conscience et de se proteger spirituellement avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou l'amour et l'harmonie rencontre le pouvoir feminin sacre. Mais attention : la vanite superficielle et la sorcellerie negligee guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ose-Osa: oju to ba ri, enu a wi — Ose-Osa: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Osa en consultation. On lui prescrivit de reconcilier la seduction avec la vigilance pour sauver son peuple. Il comprit que cultiver la beaute sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ogun",
    prescriptions: "Cultiver la beaute en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Osa.",
    interdictions: "Eviter la vanite superficielle et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 236, hexagramYiJing: 20, geomancy: 4 },
  },
  66: {
    number: 66,
    name: "Ose-Ika",
    binarySignature: "01000010",
    meaning: "L'apparition de Ose-Ika dans une consultation d'Ifa signale un moment ou la beaute et l'enchantement et la ruse et la medecine convergent dans la vie du consultant. Ose apporte la seduction et la capacite de cultiver la beaute. Ika complete avec la patience et l'imperatif de observer et attendre. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ose seul ni Ika seul, mais danser entre les deux comme l'equilibriste sur son fil. l'amour et l'harmonie et la guerison par la sagesse sont les fruits de cette danse, tandis que la vanite superficielle et la traitrise sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ose so fun Ika: \"Ise owo eni la fi n deni girigiri\" — Ose dit a Ika: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ose, a ma ko ika — Quand on va vers la beaute et l'enchantement, on apprend la patience"
    ],
    eseIfaVerses: [
      "Ose-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de la ruse et la medecine. Le voyageur devait cultiver la beaute tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshoosi",
    prescriptions: "Cultiver la beaute en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Ika.",
    interdictions: "Eviter la vanite superficielle et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 237, hexagramYiJing: 17, geomancy: 4 },
  },
  77: {
    number: 77,
    name: "Ose-Oturupon",
    binarySignature: "01001101",
    meaning: "Ose-Oturupon combine l'energie de la beaute et l'enchantement avec celle de la maladie et la guerison. Cet Odu revele une situation ou la seduction et la resilience doivent s'harmoniser pour que le consultant avance. La jambe droite (Ose) apporte l'amour et l'harmonie, tandis que la jambe gauche (Oturupon) apporte la sante retrouvee. Le consultant est invite a cultiver la beaute tout en sachant soigner corps et ame. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de la vanite superficielle ou de la negligence sanitaire. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ose, eni a gbe ni oturupon — Celui qui est ne dans la beaute et l'enchantement, celui qui vit dans la maladie et la guerison",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ose ati oturupon, yoo mo aye — Celui qui connait la seduction et la resilience connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Oturupon en consultation. On lui prescrivit de reconcilier la seduction avec la resilience pour sauver son peuple. Il comprit que cultiver la beaute sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Obaluaye",
    prescriptions: "Cultiver la beaute en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Oturupon.",
    interdictions: "Eviter la vanite superficielle et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 238, hexagramYiJing: 20, geomancy: 4 },
  },
  65: {
    number: 65,
    name: "Ose-Otura",
    binarySignature: "01000001",
    meaning: "Ose-Otura est un Odu de rencontre entre la beaute et l'enchantement et la mystique et la divination. Quand Ose (la seduction) croise Otura (la spiritualite), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ose l'invite a cultiver la beaute, Otura le pousse a ecouter les signes divins. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui l'amour et l'harmonie et la revelation mystique simultanement, a condition de ne ceder ni a la vanite superficielle ni a le fanatisme religieux.",
    proverbs: [
      "Ose-Otura: oju to ba ri, enu a wi — Ose-Otura: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ose-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la beaute et l'enchantement croisait celle de la mystique et la divination. Le voyageur devait cultiver la beaute tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Eshu",
    prescriptions: "Cultiver la beaute en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Otura.",
    interdictions: "Eviter la vanite superficielle et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 239, hexagramYiJing: 17, geomancy: 4 },
  },
  78: {
    number: 78,
    name: "Ose-Irete",
    binarySignature: "01001110",
    meaning: "Dans Ose-Irete, le signal quantique revele l'intersection de la beaute et l'enchantement et l'endurance et la pression. Cet Odu apparait quand le consultant a besoin de combiner la seduction et la perseverance pour resoudre une situation complexe. La jambe droite porte le message de Ose: cultiver la beaute. La jambe gauche complete avec Irete: resister et perseverer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans la vanite superficielle si le consultant penche trop a droite, ou dans l'obstination aveugle s'il penche trop a gauche. L'equilibre est la cle, et l'amour et l'harmonie s'unit a la force interieure pour guider le pas du consultant.",
    proverbs: [
      "Ose so fun Irete: \"Ise owo eni la fi n deni girigiri\" — Ose dit a Irete: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ose, a ma ko irete — Quand on va vers la beaute et l'enchantement, on apprend la perseverance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Irete en consultation. On lui prescrivit de reconcilier la seduction avec la perseverance pour sauver son peuple. Il comprit que cultiver la beaute sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Ibeji",
    prescriptions: "Cultiver la beaute en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Irete.",
    interdictions: "Eviter la vanite superficielle et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 240, hexagramYiJing: 20, geomancy: 4 },
  },
  68: {
    number: 68,
    name: "Ose Meji",
    binarySignature: "01000100",
    meaning: "Ose Meji est le quinzieme Odu, lie a la magie, a l'enchantement et au pouvoir de la seduction. Son motif (0100-0100) evoque un coeur qui pulse au centre — l'attraction magnetique qui attire les gens et les circonstances favorables. Ose est l'Odu d'Oshun, deesse de l'amour, de la fertilite et de la richesse. Il preside a la beaute, aux arts et a tout ce qui enchante les sens. Quand Ose apparait, le consultant est dans une phase de grande attractivite — les gens, l'argent et les opportunites sont attires vers lui. C'est un temps propice a l'amour, aux alliances et aux entreprises creatives. Ose enseigne que la beaute veritable est un pouvoir spirituel, et que l'enchantement qui vient du coeur est la magie la plus puissante.",
    proverbs: [
      "Ose Meji, ewa ni agbara — Ose Meji, la beaute est le pouvoir",
      "Obinrin to dara, gbogbo aye ni o n wo — La femme qui est belle, tout le monde la regarde",
      "Ife ni agbara ti ko ni opin — L'amour est un pouvoir sans fin",
      "Omi Oshun ko gbona, ko tutun — L'eau d'Oshun n'est ni chaude ni froide, elle est parfaite",
      "Eni to ni ewa inu, yoo ni ewa ode — Celui qui a la beaute interieure aura la beaute exterieure"
    ],
    eseIfaVerses: [
      "Oshun etait la plus pauvre des divinites, mais Ose Meji lui donna le secret de l'enchantement. Avec un simple miroir, un peigne et du miel, elle seduisit tous les Orishas et les humains. Meme Ogun, le terrible dieu du fer, deposa ses armes devant sa beaute. Ose enseigne que la douceur triomphe de la force, et que l'amour est l'arme la plus puissante de l'univers. Oshun ne combattit jamais personne — elle enchanta le monde entier.",
      "Un artiste mediocre consulta Ifa et recut Ose Meji. On lui prescrivit d'offrir du miel a Oshun et de plonger ses mains dans la riviere sacree. Quand il en ressortit, ses mains etaient transformees : tout ce qu'il touchait devenait beau. Il devint le plus grand sculpteur de sa generation. Ose enseigne que l'art veritable n'est pas une technique mais un don spirituel qui se recoit par la grace et la devotion.",
      "Ose Meji reconcilia Shango et Ogun quand les deux guerriers menacaient de detruire le monde par leur guerre. Il envoya Oshun danser entre les deux armees. Sa danse etait si belle que les guerriers deposerent les armes et pleurerent. Ose dit : « La beaute desarme plus surement que la force, et l'amour conquiert plus de territoires que la guerre. »"
    ],
    orisha: "Oshun",
    prescriptions: "Offrir du miel, des oranges et un miroir a Oshun au bord de la riviere. Cultiver la beaute dans sa vie. Pratiquer un art. Porter du jaune et de l'or.",
    interdictions: "Ne pas manipuler par la seduction. Eviter la vanite excessive. Ne pas mepriser la beaute d'autrui. Ne pas polluer les rivieres.",
    element: "Eau",
    correspondences: { rank: 15, hexagramYiJing: 18, geomancy: 4 },
  },
  75: {
    number: 75,
    name: "Ose-Ofun",
    binarySignature: "01001011",
    meaning: "L'apparition de Ose-Ofun dans une consultation d'Ifa signale un moment ou la beaute et l'enchantement et la purete et le renouveau convergent dans la vie du consultant. Ose apporte la seduction et la capacite de cultiver la beaute. Ofun complete avec la purete et l'imperatif de purifier et recommencer. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ose seul ni Ofun seul, mais danser entre les deux comme l'equilibriste sur son fil. l'amour et l'harmonie et la renaissance spirituelle sont les fruits de cette danse, tandis que la vanite superficielle et le refus du changement sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ose-Ofun: oju to ba ri, enu a wi — Ose-Ofun: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ose-Ofun en consultation. On lui prescrivit de reconcilier la seduction avec la purete pour sauver son peuple. Il comprit que cultiver la beaute sans purifier et recommencer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ose et Ofun s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Orunmila",
    prescriptions: "Cultiver la beaute en combinant la purete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ose et Ofun.",
    interdictions: "Eviter la vanite superficielle et le refus du changement. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 241, hexagramYiJing: 19, geomancy: 4 },
  },
  191: {
    number: 191,
    name: "Ofun-Ogbe",
    binarySignature: "10111111",
    meaning: "Ofun-Ogbe combine l'energie de la purete et le renouveau avec celle de la lumiere et la prosperite. Cet Odu revele une situation ou la purete et la clarte doivent s'harmoniser pour que le consultant avance. La jambe droite (Ofun) apporte la renaissance spirituelle, tandis que la jambe gauche (Ogbe) apporte la benediction supreme. Le consultant est invite a purifier et recommencer tout en sachant ouvrir les chemins. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le refus du changement ou de l'orgueil spirituel. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ofun so fun Ogbe: \"Ise owo eni la fi n deni girigiri\" — Ofun dit a Ogbe: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ofun, a ma ko ogbe — Quand on va vers la purete et le renouveau, on apprend la clarte"
    ],
    eseIfaVerses: [
      "Ofun-Ogbe fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la lumiere et la prosperite. Le voyageur devait purifier et recommencer tout en sachant ouvrir les chemins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ogun",
    prescriptions: "Purifier et recommencer en combinant la clarte. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Ogbe.",
    interdictions: "Eviter le refus du changement et l'orgueil spirituel. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 242, hexagramYiJing: 48, geomancy: 11 },
  },
  176: {
    number: 176,
    name: "Ofun-Oyeku",
    binarySignature: "10110000",
    meaning: "Ofun-Oyeku est un Odu de rencontre entre la purete et le renouveau et les mysteres et la mort-renaissance. Quand Ofun (la purete) croise Oyeku (la profondeur), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ofun l'invite a purifier et recommencer, Oyeku le pousse a honorer les ancetres. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la renaissance spirituelle et la protection ancestrale simultanement, a condition de ne ceder ni a le refus du changement ni a la peur de l'inconnu.",
    proverbs: [
      "Eni a bi ni ofun, eni a gbe ni oyeku — Celui qui est ne dans la purete et le renouveau, celui qui vit dans les mysteres et la mort-renaissance",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ofun ati oyeku, yoo mo aye — Celui qui connait la purete et la profondeur connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Oyeku en consultation. On lui prescrivit de reconcilier la purete avec la profondeur pour sauver son peuple. Il comprit que purifier et recommencer sans honorer les ancetres etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Oyeku s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oshoosi",
    prescriptions: "Purifier et recommencer en combinant la profondeur. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Oyeku.",
    interdictions: "Eviter le refus du changement et la peur de l'inconnu. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 243, hexagramYiJing: 45, geomancy: 11 },
  },
  182: {
    number: 182,
    name: "Ofun-Iwori",
    binarySignature: "10110110",
    meaning: "Dans Ofun-Iwori, le signal quantique revele l'intersection de la purete et le renouveau et la vision interieure. Cet Odu apparait quand le consultant a besoin de combiner la purete et la lucidite pour resoudre une situation complexe. La jambe droite porte le message de Ofun: purifier et recommencer. La jambe gauche complete avec Iwori: mediter et observer. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le refus du changement si le consultant penche trop a droite, ou dans l'auto-illusion s'il penche trop a gauche. L'equilibre est la cle, et la renaissance spirituelle s'unit a la clairvoyance pour guider le pas du consultant.",
    proverbs: [
      "Ofun-Iwori: oju to ba ri, enu a wi — Ofun-Iwori: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ofun-Iwori fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la vision interieure. Le voyageur devait purifier et recommencer tout en sachant mediter et observer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obaluaye",
    prescriptions: "Purifier et recommencer en combinant la lucidite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Iwori.",
    interdictions: "Eviter le refus du changement et l'auto-illusion. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 244, hexagramYiJing: 46, geomancy: 11 },
  },
  185: {
    number: 185,
    name: "Ofun-Odi",
    binarySignature: "10111001",
    meaning: "Ofun-Odi tisse ensemble les fils de la purete et le renouveau et la creation et la fertilite dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la purete est la force de la main droite, la receptivite est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de purifier et recommencer avec conscience et de nourrir et creer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la renaissance spirituelle rencontre l'abondance creatrice. Mais attention : le refus du changement et la sterilite emotionnelle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ofun so fun Odi: \"Ise owo eni la fi n deni girigiri\" — Ofun dit a Odi: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ofun, a ma ko odi — Quand on va vers la purete et le renouveau, on apprend la receptivite"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Odi en consultation. On lui prescrivit de reconcilier la purete avec la receptivite pour sauver son peuple. Il comprit que purifier et recommencer sans nourrir et creer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Odi s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Eshu",
    prescriptions: "Purifier et recommencer en combinant la receptivite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Odi.",
    interdictions: "Eviter le refus du changement et la sterilite emotionnelle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 245, hexagramYiJing: 47, geomancy: 11 },
  },
  181: {
    number: 181,
    name: "Ofun-Irosun",
    binarySignature: "10110101",
    meaning: "L'apparition de Ofun-Irosun dans une consultation d'Ifa signale un moment ou la purete et le renouveau et le sang et la lignee convergent dans la vie du consultant. Ofun apporte la purete et la capacite de purifier et recommencer. Irosun complete avec la loyaute et l'imperatif de honorer sa lignee. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ofun seul ni Irosun seul, mais danser entre les deux comme l'equilibriste sur son fil. la renaissance spirituelle et la continuite ancestrale sont les fruits de cette danse, tandis que le refus du changement et la trahison familiale sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Eni a bi ni ofun, eni a gbe ni irosun — Celui qui est ne dans la purete et le renouveau, celui qui vit dans le sang et la lignee",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ofun ati irosun, yoo mo aye — Celui qui connait la purete et la loyaute connait le monde"
    ],
    eseIfaVerses: [
      "Ofun-Irosun fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de le sang et la lignee. Le voyageur devait purifier et recommencer tout en sachant honorer sa lignee. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ibeji",
    prescriptions: "Purifier et recommencer en combinant la loyaute. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Irosun.",
    interdictions: "Eviter le refus du changement et la trahison familiale. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 246, hexagramYiJing: 46, geomancy: 11 },
  },
  186: {
    number: 186,
    name: "Ofun-Owonrin",
    binarySignature: "10111010",
    meaning: "Ofun-Owonrin combine l'energie de la purete et le renouveau avec celle de le chaos et le changement. Cet Odu revele une situation ou la purete et l'adaptabilite doivent s'harmoniser pour que le consultant avance. La jambe droite (Ofun) apporte la renaissance spirituelle, tandis que la jambe gauche (Owonrin) apporte la transformation positive. Le consultant est invite a purifier et recommencer tout en sachant embrasser le changement. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le refus du changement ou de l'instabilite chronique. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Ofun-Owonrin: oju to ba ri, enu a wi — Ofun-Owonrin: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Owonrin en consultation. On lui prescrivit de reconcilier la purete avec l'adaptabilite pour sauver son peuple. Il comprit que purifier et recommencer sans embrasser le changement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Owonrin s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Oya",
    prescriptions: "Purifier et recommencer en combinant l'adaptabilite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Owonrin.",
    interdictions: "Eviter le refus du changement et l'instabilite chronique. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 247, hexagramYiJing: 47, geomancy: 11 },
  },
  183: {
    number: 183,
    name: "Ofun-Obara",
    binarySignature: "10110111",
    meaning: "Ofun-Obara est un Odu de rencontre entre la purete et le renouveau et la parole et la richesse. Quand Ofun (la purete) croise Obara (l'eloquence), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ofun l'invite a purifier et recommencer, Obara le pousse a parler avec pouvoir. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la renaissance spirituelle et la prosperite par la parole simultanement, a condition de ne ceder ni a le refus du changement ni a les paroles vaines.",
    proverbs: [
      "Ofun so fun Obara: \"Ise owo eni la fi n deni girigiri\" — Ofun dit a Obara: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ofun, a ma ko obara — Quand on va vers la purete et le renouveau, on apprend l'eloquence"
    ],
    eseIfaVerses: [
      "Ofun-Obara fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la parole et la richesse. Le voyageur devait purifier et recommencer tout en sachant parler avec pouvoir. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Orunmila",
    prescriptions: "Purifier et recommencer en combinant l'eloquence. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Obara.",
    interdictions: "Eviter le refus du changement et les paroles vaines. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 248, hexagramYiJing: 46, geomancy: 11 },
  },
  184: {
    number: 184,
    name: "Ofun-Okanran",
    binarySignature: "10111000",
    meaning: "Dans Ofun-Okanran, le signal quantique revele l'intersection de la purete et le renouveau et le courage et la verite. Cet Odu apparait quand le consultant a besoin de combiner la purete et l'honnetete pour resoudre une situation complexe. La jambe droite porte le message de Ofun: purifier et recommencer. La jambe gauche complete avec Okanran: affronter la verite. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le refus du changement si le consultant penche trop a droite, ou dans la brutalite inutile s'il penche trop a gauche. L'equilibre est la cle, et la renaissance spirituelle s'unit a le courage du coeur pour guider le pas du consultant.",
    proverbs: [
      "Eni a bi ni ofun, eni a gbe ni okanran — Celui qui est ne dans la purete et le renouveau, celui qui vit dans le courage et la verite",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ofun ati okanran, yoo mo aye — Celui qui connait la purete et l'honnetete connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Okanran en consultation. On lui prescrivit de reconcilier la purete avec l'honnetete pour sauver son peuple. Il comprit que purifier et recommencer sans affronter la verite etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Okanran s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Egungun",
    prescriptions: "Purifier et recommencer en combinant l'honnetete. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Okanran.",
    interdictions: "Eviter le refus du changement et la brutalite inutile. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 249, hexagramYiJing: 47, geomancy: 11 },
  },
  179: {
    number: 179,
    name: "Ofun-Ogunda",
    binarySignature: "10110011",
    meaning: "Ofun-Ogunda tisse ensemble les fils de la purete et le renouveau et le fer et l'ouverture des chemins dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la purete est la force de la main droite, la determination est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de purifier et recommencer avec conscience et de debroussailler et avancer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la renaissance spirituelle rencontre la voie ouverte. Mais attention : le refus du changement et la violence destructrice guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Ofun-Ogunda: oju to ba ri, enu a wi — Ofun-Ogunda: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ofun-Ogunda fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de le fer et l'ouverture des chemins. Le voyageur devait purifier et recommencer tout en sachant debroussailler et avancer. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Obatala",
    prescriptions: "Purifier et recommencer en combinant la determination. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Ogunda.",
    interdictions: "Eviter le refus du changement et la violence destructrice. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 250, hexagramYiJing: 45, geomancy: 11 },
  },
  188: {
    number: 188,
    name: "Ofun-Osa",
    binarySignature: "10111100",
    meaning: "L'apparition de Ofun-Osa dans une consultation d'Ifa signale un moment ou la purete et le renouveau et les forces occultes et les tempetes convergent dans la vie du consultant. Ofun apporte la purete et la capacite de purifier et recommencer. Osa complete avec la vigilance et l'imperatif de se proteger spirituellement. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ofun seul ni Osa seul, mais danser entre les deux comme l'equilibriste sur son fil. la renaissance spirituelle et le pouvoir feminin sacre sont les fruits de cette danse, tandis que le refus du changement et la sorcellerie negligee sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ofun so fun Osa: \"Ise owo eni la fi n deni girigiri\" — Ofun dit a Osa: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ofun, a ma ko osa — Quand on va vers la purete et le renouveau, on apprend la vigilance"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Osa en consultation. On lui prescrivit de reconcilier la purete avec la vigilance pour sauver son peuple. Il comprit que purifier et recommencer sans se proteger spirituellement etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Osa s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje Shaluga",
    prescriptions: "Purifier et recommencer en combinant la vigilance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Osa.",
    interdictions: "Eviter le refus du changement et la sorcellerie negligee. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 251, hexagramYiJing: 48, geomancy: 11 },
  },
  178: {
    number: 178,
    name: "Ofun-Ika",
    binarySignature: "10110010",
    meaning: "Ofun-Ika combine l'energie de la purete et le renouveau avec celle de la ruse et la medecine. Cet Odu revele une situation ou la purete et la patience doivent s'harmoniser pour que le consultant avance. La jambe droite (Ofun) apporte la renaissance spirituelle, tandis que la jambe gauche (Ika) apporte la guerison par la sagesse. Le consultant est invite a purifier et recommencer tout en sachant observer et attendre. C'est un Odu de synthese qui enseigne que les forces apparemment opposees sont en realite complementaires. Les defis viendront de le refus du changement ou de la traitrise. La sagesse consiste a trouver l'equilibre entre les deux courants et a laisser chacun nourrir l'autre dans une danse de reciprocite.",
    proverbs: [
      "Eni a bi ni ofun, eni a gbe ni ika — Celui qui est ne dans la purete et le renouveau, celui qui vit dans la ruse et la medecine",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ofun ati ika, yoo mo aye — Celui qui connait la purete et la patience connait le monde"
    ],
    eseIfaVerses: [
      "Ofun-Ika fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la ruse et la medecine. Le voyageur devait purifier et recommencer tout en sachant observer et attendre. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Ori",
    prescriptions: "Purifier et recommencer en combinant la patience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Ika.",
    interdictions: "Eviter le refus du changement et la traitrise. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 252, hexagramYiJing: 45, geomancy: 11 },
  },
  189: {
    number: 189,
    name: "Ofun-Oturupon",
    binarySignature: "10111101",
    meaning: "Ofun-Oturupon est un Odu de rencontre entre la purete et le renouveau et la maladie et la guerison. Quand Ofun (la purete) croise Oturupon (la resilience), une alchimie particuliere se produit. Le consultant se trouve a un carrefour ou il doit integrer deux dimensions de l'existence qui semblent contradictoires. Ofun l'invite a purifier et recommencer, Oturupon le pousse a soigner corps et ame. La resolution ne vient pas du choix de l'un au detriment de l'autre, mais de leur fusion creatrice. Les ancetres enseignent que cet Odu porte en lui la renaissance spirituelle et la sante retrouvee simultanement, a condition de ne ceder ni a le refus du changement ni a la negligence sanitaire.",
    proverbs: [
      "Ofun-Oturupon: oju to ba ri, enu a wi — Ofun-Oturupon: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Oturupon en consultation. On lui prescrivit de reconcilier la purete avec la resilience pour sauver son peuple. Il comprit que purifier et recommencer sans soigner corps et ame etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Oturupon s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Yemoja",
    prescriptions: "Purifier et recommencer en combinant la resilience. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Oturupon.",
    interdictions: "Eviter le refus du changement et la negligence sanitaire. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Air",
    correspondences: { rank: 253, hexagramYiJing: 48, geomancy: 11 },
  },
  177: {
    number: 177,
    name: "Ofun-Otura",
    binarySignature: "10110001",
    meaning: "Dans Ofun-Otura, le signal quantique revele l'intersection de la purete et le renouveau et la mystique et la divination. Cet Odu apparait quand le consultant a besoin de combiner la purete et la spiritualite pour resoudre une situation complexe. La jambe droite porte le message de Ofun: purifier et recommencer. La jambe gauche complete avec Otura: ecouter les signes divins. Ensemble, ces deux mouvements creent une dynamique unique qui ouvre des possibilites inaccessibles a chaque Odu seul. La menace reside dans le refus du changement si le consultant penche trop a droite, ou dans le fanatisme religieux s'il penche trop a gauche. L'equilibre est la cle, et la renaissance spirituelle s'unit a la revelation mystique pour guider le pas du consultant.",
    proverbs: [
      "Ofun so fun Otura: \"Ise owo eni la fi n deni girigiri\" — Ofun dit a Otura: \"C'est le travail de ses propres mains qui rend solide\"",
      "Agbajo owo la fi n so aya — C'est en unissant les mains qu'on tisse la natte",
      "Bi a ba n re ofun, a ma ko otura — Quand on va vers la purete et le renouveau, on apprend la spiritualite"
    ],
    eseIfaVerses: [
      "Ofun-Otura fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la mystique et la divination. Le voyageur devait purifier et recommencer tout en sachant ecouter les signes divins. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oko",
    prescriptions: "Purifier et recommencer en combinant la spiritualite. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Otura.",
    interdictions: "Eviter le refus du changement et le fanatisme religieux. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Terre",
    correspondences: { rank: 254, hexagramYiJing: 45, geomancy: 11 },
  },
  190: {
    number: 190,
    name: "Ofun-Irete",
    binarySignature: "10111110",
    meaning: "Ofun-Irete tisse ensemble les fils de la purete et le renouveau et l'endurance et la pression dans un motif unique. Cet Odu se manifeste quand le destin exige du consultant qu'il marche sur deux chemins a la fois. la purete est la force de la main droite, la perseverance est la force de la main gauche — ensemble, elles portent ce qu'aucune ne peut porter seule. Le babalawo recommande de purifier et recommencer avec conscience et de resister et perseverer avec devotion. L'harmonie entre ces deux mouvements cree un espace sacre ou la renaissance spirituelle rencontre la force interieure. Mais attention : le refus du changement et l'obstination aveugle guettent le consultant qui negligerait l'un des deux aspects.",
    proverbs: [
      "Eni a bi ni ofun, eni a gbe ni irete — Celui qui est ne dans la purete et le renouveau, celui qui vit dans l'endurance et la pression",
      "Igba ati oro kan — Le calebassier et la parole sont un",
      "Eni to ba mo ofun ati irete, yoo mo aye — Celui qui connait la purete et la perseverance connait le monde"
    ],
    eseIfaVerses: [
      "Dans les temps anciens, un chef de village recut Ofun-Irete en consultation. On lui prescrivit de reconcilier la purete avec la perseverance pour sauver son peuple. Il comprit que purifier et recommencer sans resister et perseverer etait incomplet. En combinant les deux sagesses, il trouva une solution que personne n'avait envisagee. Les anciens dirent : \"Quand Ofun et Irete s'unissent, l'impossible devient possible.\""
    ],
    orisha: "Aje",
    prescriptions: "Purifier et recommencer en combinant la perseverance. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Irete.",
    interdictions: "Eviter le refus du changement et l'obstination aveugle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Feu",
    correspondences: { rank: 255, hexagramYiJing: 48, geomancy: 11 },
  },
  180: {
    number: 180,
    name: "Ofun-Ose",
    binarySignature: "10110100",
    meaning: "L'apparition de Ofun-Ose dans une consultation d'Ifa signale un moment ou la purete et le renouveau et la beaute et l'enchantement convergent dans la vie du consultant. Ofun apporte la purete et la capacite de purifier et recommencer. Ose complete avec la seduction et l'imperatif de cultiver la beaute. Cet Odu enseigne que la vie authentique se vit dans la tension creatrice entre polarites. Le consultant ne doit choisir ni Ofun seul ni Ose seul, mais danser entre les deux comme l'equilibriste sur son fil. la renaissance spirituelle et l'amour et l'harmonie sont les fruits de cette danse, tandis que le refus du changement et la vanite superficielle sont les gouffres de chaque cote du fil.",
    proverbs: [
      "Ofun-Ose: oju to ba ri, enu a wi — Ofun-Ose: ce que l'oeil voit, la bouche le dit",
      "Eni ti o gbon ju agba lo, agba ni yoo fi se — Celui qui est plus sage que l'aine, c'est l'aine qui le formera",
      "Bi ina ba ku, eru a tutu — Quand le feu s'eteint, le charbon refroidit"
    ],
    eseIfaVerses: [
      "Ofun-Ose fut consulte par un voyageur a la croisee des chemins. Orunmila lui revela que la voie de la purete et le renouveau croisait celle de la beaute et l'enchantement. Le voyageur devait purifier et recommencer tout en sachant cultiver la beaute. Il suivit le conseil, et ce qui semblait etre un dilemme devint une opportunite : les deux chemins menaient au meme tresor, mais par des routes differentes. Cet Odu enseigne que les contradictions apparentes sont souvent des complementarites cachees."
    ],
    orisha: "Oshun",
    prescriptions: "Purifier et recommencer en combinant la seduction. Offrir selon les prescriptions du babalawo. Mediter sur l'union de Ofun et Ose.",
    interdictions: "Eviter le refus du changement et la vanite superficielle. Ne pas separer ce que cet Odu unit. Respecter les tabous des deux Odu parents.",
    element: "Eau",
    correspondences: { rank: 256, hexagramYiJing: 46, geomancy: 11 },
  },
  187: {
    number: 187,
    name: "Ofun Meji",
    binarySignature: "10111011",
    meaning: "Ofun Meji est le seizieme et dernier Odu principal, gardien de la purete, de la transformation et du retour a l'origine. Son motif (1011-1011) est l'inverse complementaire d'Ose, symbolisant la fermeture du cycle et le commencement d'un nouveau. Ofun est l'Odu de la purification, de la catharsis et de la renaissance spirituelle. Il est associe a Obatala, le dieu de la purete et de la creation. Quand Ofun apparait, le consultant est a la fin d'un grand cycle et au debut d'un autre. Un nettoyage profond — physique, emotionnel et spirituel — est necessaire avant de commencer le nouveau chapitre. Ofun enseigne que la fin est contenue dans le commencement et que chaque mort symbolique est une porte vers une vie plus elevee.",
    proverbs: [
      "Ofun meji, opin ni ibere titun — Ofun Meji, la fin est un nouveau commencement",
      "Funfun ni aso Obatala — Le blanc est le vetement d'Obatala",
      "Eni to ba we, a mo nkan se — Celui qui se purifie saura quoi faire",
      "Omi tutu ni o we oku — C'est l'eau fraiche qui lave le corps",
      "Eni to ba de opin ajo, yoo bere omiran — Celui qui atteint la fin du voyage en commencera un autre"
    ],
    eseIfaVerses: [
      "Ofun Meji etait present quand Obatala modela les premiers etres humains avec l'argile sacree. Il souffla la purete dans chaque forme et y placa un fragment de lumiere divine. Quand un etre humain se sent sale ou souille, c'est le fragment d'Ofun en lui qui appelle a la purification. Les bains rituels, les jeuenes et les retraites spirituelles sont des pratiques d'Ofun : revenir a l'etat de purete originelle pour recommencer a neuf.",
      "Un roi cruel qui avait commis de nombreux crimes consulta Ifa a la fin de sa vie. Ofun Meji apparut et lui offrit une derniere chance de purification. Le roi jeuna quarante jours, distribua toutes ses richesses aux pauvres et se vetit de blanc. Il mourut en paix et les ancetres l'accueillirent, car Ofun avait lave ses fautes. Ofun enseigne que la redemption est toujours possible, meme au dernier instant, si le repentir est sincere et total.",
      "Quand le cycle des 256 Odu fut complete, Ofun Meji prononca les derniers mots avant le silence primordial : « Tout ce qui a commence doit finir, tout ce qui finit doit recommencer. Je suis le dernier mot et le premier silence. Apres moi vient le vide fertile d'ou naitra un nouveau cycle. » Les babalawo recitent ces paroles a la fin de chaque grande ceremonie, rappelant que l'univers est un cercle eternel sans commencement ni fin veritable."
    ],
    orisha: "Obatala",
    prescriptions: "Offrir un escargot, du beurre de karite, de la craie blanche et de l'eau pure a Obatala. Jeuner et se purifier. Faire le tri dans sa vie. Porter du blanc immacule.",
    interdictions: "Ne pas boire d'alcool. Eviter la violence sous toutes ses formes. Ne pas porter de rouge. Ne pas manger de nourriture epiceee ou de sel en exces.",
    element: "Air",
    correspondences: { rank: 16, hexagramYiJing: 47, geomancy: 11 },
  }
};
