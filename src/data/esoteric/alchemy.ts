/**
 * Alchemy — 4 Stages of the Great Work + 7 Operations
 *
 * The Great Work (Magnum Opus) is the alchemical process of spiritual and
 * material transformation, systematized since antiquity. The 4-stage model
 * (Nigredo → Albedo → Citrinitas → Rubedo) is the oldest, dating to
 * Zosimos of Panopolis (3rd–4th c. CE) and the Alexandrian alchemists.
 *
 * The 7 operations follow the Hermetic classification most commonly
 * attributed to Basil Valentine (15th c.), though the number varies by
 * author (Ripley counted 12). Each operation corresponds to one of the
 * 7 classical planets, one of the 7 traditional metals, and one of the
 * 7 Hermetic principles — following the attributions already established
 * in hermetic.ts.
 *
 * Planetary attributions for operations (Hermetic scheme):
 *   Calcination → Sun      Dissolution → Moon      Separation → Mars
 *   Conjunction → Venus     Fermentation → Jupiter   Distillation → Mercury
 *   Coagulation → Saturn
 *
 * C.G. Jung (Psychology and Alchemy, 1944) interpreted the Great Work as
 * a projection of the individuation process: Nigredo = confrontation with
 * the Shadow, Albedo = anima/animus integration, Citrinitas = emergence of
 * solar consciousness, Rubedo = realization of the Self.
 *
 * QRNG mapping: 2 bits for stage (0-3), 3 bits for operation (0-6 on 0-7).
 */

import type { AlchemyStage, AlchemyOperation } from "./types";

// =============================================================================
// 4 STAGES OF THE GREAT WORK
// =============================================================================

export const ALCHEMY_STAGES: Record<number, AlchemyStage> = {
  0: {
    number: 0,
    name: "Nigredo",
    latinName: "Nigredo",
    color: "Noir",
    planet: "Saturn",
    description:
      "Le Nigredo (noircissement) est la premiere etape du Grand OEuvre, la descente dans la matiere noire, la putrefaction necessaire a toute transformation. L'alchimiste commence par detruire la forme existante de la matiere premiere (Prima Materia) en la soumettant au feu et a la decomposition. C'est la phase de la Mortificatio — la mort symbolique sans laquelle aucune renaissance n'est possible. Le Nigredo correspond a l'hiver de l'ame, a la nuit obscure des mystiques, au moment ou tout semble perdu. La matiere noircit dans le creuset, degageant des vapeurs putrides — signe que la transformation a commence. Zosime de Panopolis (IIIe s.) decrivait cette phase comme le « tombeau d'Osiris », le dieu demembre dont les morceaux doivent etre rassembles. Sans ce passage par la mort et la decomposition, les elements purifies ne peuvent etre liberes. Le Nigredo est gouverne par Saturne, planete du temps, des limites et de la destruction necessaire — le vieil homme a la faux qui moissonne ce qui a fait son temps.",
    symbolism:
      "Le corbeau noir (corvus niger) est le symbole premier du Nigredo — l'oiseau qui se nourrit de charogne, transformant la mort en vie. Le crane (caput mortuum), la terre noire, le fumier, le plomb saturnien sont autant de figures de cette phase. Dans les manuscrits alchimiques, le Nigredo est souvent represente par un roi mourant, un soleil eclipse, ou un cadavre en decomposition dans un cercueil de verre. La couleur noire n'est pas celle du mal mais celle de la terre fertile — l'humus dont naitra la nouvelle vie. Le feu du Nigredo est le feu secret (ignis secretus), un feu philosophique qui ne brule pas les mains mais consume les impuretes de l'ame. Les alchimistes arabes (Jabir ibn Hayyan, VIIIe s.) appelaient cette phase « l'oeuvre au noir » et la consideraient comme la plus longue et la plus eprouvante. C.G. Jung y voyait la confrontation avec l'Ombre — la part refoulee de la psyche qui doit etre integree pour que la transformation commence.",
    correspondences: {
      element: "Earth",
      season: "Winter",
      direction: "North",
      metal: "Lead (Plomb)",
      planet: "Saturn",
      jungianProcess: "Confrontation with the Shadow",
      primaMateriaState: "Prima Materia — raw, undifferentiated chaos",
      operations: ["Calcination", "Dissolution"],
      sefirah: "Binah",
      chakra: "Muladhara (Root)",
      tarotArcana: "Death (XIII) / The Tower (XVI)",
    },
  },

  1: {
    number: 1,
    name: "Albedo",
    latinName: "Albedo",
    color: "Blanc",
    planet: "Moon",
    description:
      "L'Albedo (blanchissement) est la deuxieme etape du Grand OEuvre, la purification qui suit la destruction du Nigredo. Apres que la matiere premiere a ete decomposee et noircie, les elements purifies commencent a se separer et a se recombiner dans un ordre nouveau. La matiere blanchit dans le creuset — c'est l'aube qui suit la nuit obscure, le premier signe que la transformation est en marche. L'Albedo est gouverne par la Lune, astre de la reflexion, de la purification et du principe feminin receptif. C'est la phase du lavage (ablutio), ou les impuretes sont eliminees par la dissolution dans les eaux mercurielles. Les alchimistes decrivaient cette phase comme la « resurrection de la matiere » — ce qui etait mort renaait sous une forme purifiee. Le blanc du Albedo n'est pas la couleur de l'accomplissement final mais celle de la purete reconquise, de l'innocence retrouvee apres le passage par les tenebres. C'est le moment ou l'alchimiste percoit pour la premiere fois la lumiere dans son athanor — la promesse que l'OEuvre aboutira.",
    symbolism:
      "Le cygne blanc (cygnus) succede au corbeau noir comme symbole de l'Albedo — la purete qui emerge de la noirceur. La rosee celeste (ros coelestis), la lune pleine, la colombe blanche, le lys, l'argent lunaire sont les emblemes de cette phase. Dans les manuscrits, l'Albedo est souvent representee par une reine blanche, un bain purificateur, ou un jardin enneige ou perce la premiere fleur. Le miroir est un symbole essentiel — la conscience purifiee qui peut enfin se refleter sans distorsion. Les alchimistes arabes appelaient l'Albedo « la blancheur parfaite » (al-bayadh) et la consideraient comme un stade intermediaire crucial. C.G. Jung interpretait l'Albedo comme l'integration de l'anima (principe feminin inconscient chez l'homme) ou de l'animus (principe masculin inconscient chez la femme). La conscience s'ouvre a sa dimension complementaire, acceptant ce qu'elle avait projete sur l'autre.",
    correspondences: {
      element: "Water",
      season: "Spring",
      direction: "West",
      metal: "Silver (Argent)",
      planet: "Moon",
      jungianProcess: "Anima/Animus integration",
      primaMateriaState: "Mercurius — the purified volatile spirit",
      operations: ["Separation", "Conjunction"],
      sefirah: "Yesod",
      chakra: "Svadhisthana (Sacral)",
      tarotArcana: "The High Priestess (II) / The Star (XVII)",
    },
  },

  2: {
    number: 2,
    name: "Citrinitas",
    latinName: "Citrinitas",
    color: "Jaune",
    planet: "Sun",
    description:
      "Le Citrinitas (jaunissement) est la troisieme etape du Grand OEuvre, souvent omise dans les textes tardifs qui passent directement du blanc au rouge. Pourtant, cette phase intermediaire est attestee chez les plus anciens alchimistes et represente un moment crucial : l'eveil de la conscience solaire. Apres la purification lunaire de l'Albedo, la matiere commence a jaunir — le soleil se leve dans l'athanor. C'est la phase de l'illumination (illuminatio), ou la lumiere interieure s'intensifie jusqu'a devenir doree. Le Citrinitas est gouverne par le Soleil, principe de conscience, de volonte et d'integration. La matiere purifiee recoit la teinture solaire qui la prepare a la perfection finale. Les alchimistes grecs et arabes accordaient une grande importance a cette phase, la considerant comme le moment ou la Pierre Blanche (capable de transmuter en argent) commence sa transformation vers la Pierre Rouge (capable de transmuter en or). C'est le passage de la reflexion passive a la creation active, de la receptivite lunaire a la radiance solaire.",
    symbolism:
      "L'aurore, le soleil levant, le phoenix renaissant de ses cendres sont les symboles du Citrinitas. Le paon (cauda pavonis), avec sa queue aux mille couleurs irisees, represente le moment ou les couleurs de l'arc-en-ciel traversent la matiere avant de se fixer en jaune dore. Le soufre philosophique (sulfur), principe actif et masculin, commence a dominer le mercure passif et feminin. Les manuscrits montrent souvent un roi et une reine unis dans un bain dore, ou un soleil qui perce les nuages. Le Citrinitas est aussi appele Xanthosis dans la tradition grecque. C.G. Jung voyait dans cette phase l'emergence du Soi (Selbst) — le centre organisateur de la psyche qui transcende l'ego conscient. La conscience solaire n'est plus le petit moi mais la totalite psychique qui commence a rayonner. L'or interieur devient visible, meme s'il n'est pas encore fixe en une forme definitive.",
    correspondences: {
      element: "Air",
      season: "Summer",
      direction: "East",
      metal: "Gold (Or)",
      planet: "Sun",
      jungianProcess: "Emergence of solar consciousness / Self",
      primaMateriaState: "Sulfur — the active solar principle",
      operations: ["Fermentation"],
      sefirah: "Tiferet",
      chakra: "Manipura (Solar Plexus)",
      tarotArcana: "The Sun (XIX) / Temperance (XIV)",
    },
  },

  3: {
    number: 3,
    name: "Rubedo",
    latinName: "Rubedo",
    color: "Rouge",
    planet: "Mars",
    description:
      "Le Rubedo (rougissement) est la quatrieme et derniere etape du Grand OEuvre, le couronnement de tout le processus alchimique. La matiere atteint sa perfection ultime en virant au rouge — la couleur du sang, du feu et de la vie dans sa plenitude. Le Rubedo est l'accomplissement de la Pierre Philosophale (Lapis Philosophorum), capable de transmuter le plomb en or et de conferer l'immortalite. C'est la phase de la Coagulation finale (fixatio), ou tous les elements purifies et reunis se fixent en une unite indissoluble. Le rouge du Rubedo est le rouge royal — la pourpre des empereurs, le cinabre des alchimistes chinois, le sang du phoenix. C'est la Conjunctio Oppositorum accomplie : le masculin et le feminin, le soleil et la lune, le soufre et le mercure sont unis de facon irreversible. L'alchimiste qui atteint le Rubedo a realise l'union des contraires en lui-meme — il est devenu l'or vivant, le microcosme perfectionne qui reflette la totalite du macrocosme. Le Grand OEuvre est accompli.",
    symbolism:
      "Le phoenix rouge, le lion rouge (leo rubeus), la rose vermeille, le sang du pelican qui nourrit ses petits sont les symboles du Rubedo. La Pierre Philosophale est souvent representee comme un rubis, un grenat ou une escarboucle — la pierre precieuse qui brille de sa propre lumiere. Les manuscrits montrent un roi couronne en rouge, un soleil rouge triomphant, ou les noces chimiques du Roi et de la Reine dans une chambre pourpre. L'elixir de longue vie (elixir vitae) est le versant liquide de la Pierre — le sang de la matiere perfectionne qui guerit toute maladie et prolonge la vie. Le Rebis (l'etre double), figure androyne couronnee, represente l'union finale des opposés. C.G. Jung interpretait le Rubedo comme l'aboutissement de l'individuation — la realisation du Soi, l'integration complete de tous les aspects de la psyche en une personnalite unifiee. L'individu est devenu ce qu'il etait destine a etre depuis toujours.",
    correspondences: {
      element: "Fire",
      season: "Autumn",
      direction: "South",
      metal: "Gold (Or) — perfected",
      planet: "Mars",
      jungianProcess: "Individuation complete — realization of the Self",
      primaMateriaState: "Philosopher's Stone — the perfected unity",
      operations: ["Distillation", "Coagulation"],
      sefirah: "Keter",
      chakra: "Sahasrara (Crown)",
      tarotArcana: "The World (XXI) / Judgement (XX)",
    },
  },
} as const satisfies Record<number, AlchemyStage>;

// =============================================================================
// 7 OPERATIONS OF THE GREAT WORK
// =============================================================================

export const ALCHEMY_OPERATIONS: Record<number, AlchemyOperation> = {
  0: {
    number: 0,
    name: "Calcination",
    latinName: "Calcinatio",
    planet: "Sun",
    description:
      "La Calcination est la premiere operation du Grand OEuvre — la destruction par le feu. La matiere premiere est soumise a une chaleur intense qui consume ses impuretes, la reduisant en cendres blanches (calx). C'est l'operation la plus violente, le feu qui devore tout ce qui est superficiel et corruptible pour ne laisser que l'essentiel incombustible. Dans la pratique chimique, la calcination est la combustion d'un metal ou d'un minerai ; dans la pratique interieure, c'est la confrontation avec les illusions de l'ego, la destruction des faux-semblants et des attachements. Le feu de la Calcination est le feu solaire — la lumiere de la verite qui brule les mensonges. Associee au Soleil et au principe hermetique de Vibration, elle eleve la frequence vibratoire de la matiere en eliminant ce qui est lourd et opaque. L'alchimiste apprend que ce que le feu detruit n'avait pas de realite veritable — seul ce qui survit a la Calcination merite d'etre conserve.",
    stageNumber: 0,
  },

  1: {
    number: 1,
    name: "Dissolution",
    latinName: "Dissolutio",
    planet: "Moon",
    description:
      "La Dissolution est la deuxieme operation — l'immersion dans les eaux. Ce qui a survecu a la Calcination est maintenant dissous dans le solvant universel (menstruum universale), l'eau mercurielle qui dissout toute forme fixe. Si la Calcination est le feu qui detruit par le haut, la Dissolution est l'eau qui dissout par le bas, emportant les dernieres rigidites de la matiere. Dans la pratique chimique, c'est la dissolution d'un sel ou d'un oxide dans un acide ; dans la pratique interieure, c'est l'ouverture a l'inconscient, la dissolution des barrieres entre le conscient et l'inconscient, le lacher-prise emotionnel. Associee a la Lune et au principe hermetique de Correspondance, elle revele que « ce qui est en haut est comme ce qui est en bas » — les structures du conscient se refletent dans les profondeurs de l'inconscient. L'alchimiste apprend a se laisser porter par les eaux sans se noyer, a accepter la dissolution de ses certitudes.",
    stageNumber: 0,
  },

  2: {
    number: 2,
    name: "Separation",
    latinName: "Separatio",
    planet: "Mars",
    description:
      "La Separation est la troisieme operation — le tri des elements purifies. Apres la destruction par le feu (Calcination) et la dissolution par l'eau (Dissolution), la matiere est un melange informe dont les composants doivent etre isoles. La Separation utilise la force de Mars — le tranchant de l'epee, le discernement qui separe le pur de l'impur, l'essentiel de l'accessoire. Dans la pratique chimique, c'est la filtration, la decantation, la distillation fractionnee ; dans la pratique interieure, c'est le discernement moral et psychologique, la capacite a distinguer ce qui appartient au Soi veritable de ce qui est projection, imitation ou conditionnement. Le principe hermetique de Polarite gouverne cette operation : les opposes sont separes pour etre reconnus comme tels avant d'etre reunis consciemment. L'alchimiste apprend a nommer chaque element, a reconnaitre sa nature propre, a etablir des frontieres claires entre le vrai et le faux, le sien et l'etranger.",
    stageNumber: 1,
  },

  3: {
    number: 3,
    name: "Conjonction",
    latinName: "Conjunctio",
    planet: "Venus",
    description:
      "La Conjonction est la quatrieme operation — l'union sacree des opposés purifies. Ce qui a ete separe est maintenant reuni dans une synthese nouvelle et superieure. C'est le mariage alchimique (coniunctio oppositorum), l'union du Soufre et du Mercure, du Roi et de la Reine, du masculin et du feminin. Associee a Venus, planete de l'amour et de l'harmonie, la Conjonction est gouvernee par le principe hermetique de Genre. Dans la pratique chimique, c'est la combinaison de deux substances pour former un compose nouveau aux proprietes inedites ; dans la pratique interieure, c'est l'integration des polarites psychiques — raison et intuition, pensee et sentiment, action et contemplation. La Conjonction ne revient pas a l'etat initial d'avant la Separation : les elements reunis ont ete purifies et se combinent a un niveau superieur. C'est la difference entre la confusion primitive (avant le Nigredo) et l'integration consciente (apres la Separation).",
    stageNumber: 1,
  },

  4: {
    number: 4,
    name: "Fermentation",
    latinName: "Fermentatio",
    planet: "Jupiter",
    description:
      "La Fermentation est la cinquieme operation — l'insufflation de la vie dans la matiere purifiee et reunifiee. Comme le levain qui fait lever la pate, un ferment (fermentum) est introduit dans la substance conjointe pour provoquer une transformation qualitative radicale. La matiere morte devient vivante, l'inorganique devient organique. Associee a Jupiter, planete de l'expansion, de la croissance et de l'abondance, la Fermentation est gouvernee par le principe hermetique de Rythme — le cycle naturel de croissance et de declin qui anime toute vie. Dans la pratique chimique, c'est le processus de fermentation biologique (vin, biere, pain) ou les micro-organismes transforment les sucres ; dans la pratique interieure, c'est l'inspiration spirituelle, le moment ou une force superieure anime de l'interieur ce qui n'etait qu'une construction intellectuelle. L'alchimiste reconnait que l'OEuvre ne peut etre acheve par la seule volonte humaine — un element transcendant doit intervenir.",
    stageNumber: 2,
  },

  5: {
    number: 5,
    name: "Distillation",
    latinName: "Distillatio",
    planet: "Mercury",
    description:
      "La Distillation est la sixieme operation — la purification par cycles repetes d'evaporation et de condensation. La substance fermentee est chauffee jusqu'a l'evaporation, puis la vapeur est recueillie et condensee, separant l'esprit subtil du corps grossier. Ce processus est repete plusieurs fois (cohobation) pour atteindre une purete toujours plus grande. Associee a Mercure, planete de la communication, de l'intelligence et de la transformation, la Distillation est gouvernee par le principe hermetique du Mentalisme — l'esprit qui s'eleve au-dessus de la matiere. Dans la pratique chimique, c'est la distillation classique (alambic) ; dans la pratique interieure, c'est la meditation iterative, la contemplation qui purifie la conscience en la degageant des attachements materiels, couche apres couche. L'alchimiste apprend que la purete n'est pas atteinte en un seul passage mais par la repetition patiente du meme processus a des niveaux de plus en plus subtils.",
    stageNumber: 3,
  },

  6: {
    number: 6,
    name: "Coagulation",
    latinName: "Coagulatio",
    planet: "Saturn",
    description:
      "La Coagulation est la septieme et derniere operation — la fixation finale de l'esprit dans une forme permanente. Apres avoir ete volatilisee (Distillation), la substance purifiee est fixee (fixatio) en un corps solide, stable et incorruptible : la Pierre Philosophale. Le volatil devient fixe, l'esprit s'incarne, le ciel descend sur la terre. C'est l'accomplissement de la formule hermetique Solve et Coagula — « dissous et coagule ». Associee a Saturne, planete de la structure, de la cristallisation et de l'achevement, la Coagulation est gouvernee par le principe hermetique de Cause et Effet — chaque operation precedente etait une cause dont la Coagulation est l'effet final et necessaire. Dans la pratique chimique, c'est la cristallisation, la precipitation d'un solide a partir d'une solution ; dans la pratique interieure, c'est la realisation concrete de la transformation spirituelle, le moment ou l'illumination cesse d'etre une experience passagere pour devenir un etat permanent. L'OEuvre est accompli : le plomb est devenu or.",
    stageNumber: 3,
  },
} as const satisfies Record<number, AlchemyOperation>;
