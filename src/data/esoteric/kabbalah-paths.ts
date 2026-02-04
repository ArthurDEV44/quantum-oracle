/**
 * Kabbalah — 22 Paths on the Tree of Life
 *
 * Each path connects two Sefirot and corresponds to one of the 22 Hebrew
 * letters and one of the 22 Major Arcana of the Tarot (Golden Dawn tradition).
 * The Sefer Yetzirah categorizes the 22 letters into:
 *   - 3 Mother letters (Aleph, Mem, Shin) → Elements (Air, Water, Fire)
 *   - 7 Double letters (Beth, Gimel, Daleth, Kaph, Pe, Resh, Tav) → Planets
 *   - 12 Simple letters → Zodiac signs
 *
 * Path numbers 1-22 correspond to traditional paths 11-32.
 * Content in French for the Quantum Oracle application.
 */

import type { KabbalahPath } from "./types";

// =============================================================================
// 22 PATHS — Golden Dawn / Sefer Yetzirah tradition
// =============================================================================

export const KABBALAH_PATHS: Record<number, KabbalahPath> = {
  1: {
    number: 1,
    hebrewLetter: "\u05D0",
    letterName: "Aleph",
    fromSefirahNumber: 1,
    toSefirahNumber: 2,
    tarotArcanaNumber: 0,
    meaning: "Le Souffle — Premiere lettre mere, l'air primordial qui precede toute parole",
    zodiacOrPlanet: "Air",
    element: "Air",
    category: "mother",
    description:
      "Le premier sentier relie Kether (Couronne) a Chokmah (Sagesse), portant l'impulsion primordiale du Non-Manifeste vers la premiere polarisation. Aleph, premiere lettre de l'alphabet hebreu, est le souffle silencieux qui precede toute parole, l'air qui porte le son mais n'est pas le son. C'est la lettre du Fou (Le Mat, arcane 0), le voyageur eternel qui traverse l'Abime avec l'innocence de celui qui ne sait pas encore qu'il devrait avoir peur. Lettre mere associee a l'element Air, Aleph est la respiration cosmique, l'oscillation entre le plein et le vide qui anime l'univers. Sa valeur numerique (1) exprime l'unite fondamentale — le Un qui contient deja le Tout sans encore se diviser. Le Sefer Yetzirah enseigne qu'Aleph engendre l'air, d'ou naissent le souffle et la parole. Ce sentier est celui de la pure potentialite, du saut de foi, de l'abandon confiant a la grace divine qui soutient le monde. Le mystique qui l'emprunte quitte les certitudes de l'intellect pour entrer dans l'espace de la sagesse non-conceptuelle.",
  },
  2: {
    number: 2,
    hebrewLetter: "\u05D1",
    letterName: "Beth",
    fromSefirahNumber: 1,
    toSefirahNumber: 3,
    tarotArcanaNumber: 1,
    meaning: "La Maison — Premiere lettre double, le receptacle qui donne forme a l'infini",
    zodiacOrPlanet: "Mercure",
    element: "Air",
    category: "double",
    description:
      "Le deuxieme sentier relie Kether (Couronne) a Binah (Intelligence), portant l'emanation divine vers la premiere forme. Beth (la Maison) est la premiere lettre de la Genese (Bereshit) — c'est par une maison, un receptacle, que la creation commence. Lettre double associee a Mercure, Beth oscille entre sagesse et folie, vie et mort, paix et guerre. C'est la lettre du Bateleur (arcane I), le magicien qui canalise la force divine dans la matiere en utilisant les quatre instruments elementaires. Ce sentier trace le chemin de l'intelligence creatrice qui organise le chaos primordial en cosmos ordonne. Mercure, le messager des dieux, transmet le Verbe divin de la Couronne vers la Comprehension. La maison de Beth est le premier espace clos, la premiere distinction entre interieur et exterieur, sacre et profane. Le Zohar enseigne que Beth fut choisie pour commencer la Torah parce qu'elle est la lettre de la benediction (Berakha). Le mystique qui emprunte ce sentier apprend a devenir un canal pur entre les mondes, un transformateur qui traduit l'incomprehensible en comprehensible, le divin en humain.",
  },
  3: {
    number: 3,
    hebrewLetter: "\u05D2",
    letterName: "Gimel",
    fromSefirahNumber: 1,
    toSefirahNumber: 6,
    tarotArcanaNumber: 2,
    meaning: "Le Chameau — Porteur qui traverse le desert de l'Abime entre la Couronne et la Beaute",
    zodiacOrPlanet: "Lune",
    element: "Eau",
    category: "double",
    description:
      "Le troisieme sentier est le plus long de l'Arbre : il relie directement Kether (Couronne) a Tiphereth (Beaute), traversant tout le grand Abime (Daath) qui separe les Sefirot supernales du reste de l'Arbre. Gimel (le Chameau) est l'animal du desert par excellence — celui qui peut traverser les etendues arides en portant ses reserves de vie. C'est la lettre de La Papesse (arcane II), la gardienne du voile entre le monde visible et le monde invisible, celle qui porte le livre de la connaissance sacree. Lettre double associee a la Lune, Gimel reflete la lumiere de Kether vers Tiphereth comme la Lune reflete la lumiere du Soleil. Ce sentier est celui de la connaissance intuitive, de la receptivite mystique, du flux silencieux de la grasse divine qui descend a travers l'inconscient. La Lune gouverne les marees de l'ame, les cycles de revelation et d'occultation, le voile de Maya qui cache autant qu'il revele. Le Chameau represente aussi la generosite (Gemilut Chassadim, les actes de bonte), car il nourrit autrui de ses reserves. Traverser ce sentier, c'est accepter la traversee du desert interieur, la nuit obscure de l'ame ou toutes les certitudes intellectuelles s'effondrent pour laisser place a la pure lumiere de la foi.",
  },
  4: {
    number: 4,
    hebrewLetter: "\u05D3",
    letterName: "Daleth",
    fromSefirahNumber: 2,
    toSefirahNumber: 3,
    tarotArcanaNumber: 3,
    meaning: "La Porte — Passage entre Sagesse et Intelligence, union des polarites supremes",
    zodiacOrPlanet: "Venus",
    element: "Terre",
    category: "double",
    description:
      "Le quatrieme sentier relie Chokmah (Sagesse) a Binah (Intelligence), unissant le Pere et la Mere cosmiques au sommet de l'Arbre. Daleth (la Porte) est le seuil entre le masculin et le feminin primordiaux, le passage par lequel la force active de Chokmah penetre dans la matrice receptive de Binah pour engendrer toute la creation. C'est la lettre de L'Imperatrice (arcane III), la Grande Mere feconde, deesse de l'amour et de la nature. Lettre double associee a Venus, Daleth gouverne la polarite richesse-pauvrete, fertilite-sterilite, beaute-laideur. Venus est ici la force d'attraction cosmique qui unit les opposes — l'amour au sens le plus vaste, la force qui fait que l'univers tient ensemble. Le Sefer Yetzirah attribue a Daleth la domination sur la semence et la paix. Ce sentier est celui de la creation par l'union, du mariage sacre (Hieros Gamos) entre les principes cosmiques. La Porte de Daleth s'ouvre dans les deux sens : vers la fecondite quand les polarites s'unissent harmonieusement, vers la desolation quand elles se separent. Le mystique qui contemple ce sentier decouvre que la dualite est le moteur de la creation et que l'amour est la force qui reconcilie tous les contraires.",
  },
  5: {
    number: 5,
    hebrewLetter: "\u05D4",
    letterName: "He",
    fromSefirahNumber: 2,
    toSefirahNumber: 6,
    tarotArcanaNumber: 4,
    meaning: "La Fenetre — Ouverture par laquelle la lumiere de la Sagesse illumine le coeur",
    zodiacOrPlanet: "Belier",
    element: "Feu",
    category: "simple",
    description:
      "Le cinquieme sentier relie Chokmah (Sagesse) a Tiphereth (Beaute), canalisant l'impulsion creative primordiale directement vers le centre harmonisateur de l'Arbre. He (la Fenetre) est l'ouverture par laquelle la lumiere divine entre dans l'edifice de la creation — la vision qui illumine sans que l'observateur ait besoin de sortir de sa demeure. C'est la lettre de L'Empereur (arcane IV), le souverain qui gouverne par la force de la vision et de l'autorite legitime. Lettre simple associee au Belier, premier signe du Zodiaque, He porte l'energie du commencement, de l'initiative et du leadership. Le Belier est le signe de l'equinoxe de printemps, le moment ou la force vitale triomphe de l'inertie hivernale. Le Sefer Yetzirah attribue a He la domination sur la vue — la vision est la premiere des fonctions perceptives, celle qui organise le monde en formes intelligibles. Ce sentier est celui de l'autorite fondee sur la sagesse, du pouvoir qui decoule naturellement de la clarte de vision. L'Empereur ne domine pas par la force brute mais par la capacite de voir l'ordre sous-jacent et de l'incarner. Le mystique qui emprunte ce sentier apprend que la veritable autorite est un service — le gardien de la vision divine dans le monde de la forme.",
  },
  6: {
    number: 6,
    hebrewLetter: "\u05D5",
    letterName: "Vav",
    fromSefirahNumber: 2,
    toSefirahNumber: 4,
    tarotArcanaNumber: 5,
    meaning: "Le Clou — Liaison qui fixe la Sagesse dans la Grace, pilier de la Misericorde",
    zodiacOrPlanet: "Taureau",
    element: "Terre",
    category: "simple",
    description:
      "Le sixieme sentier relie Chokmah (Sagesse) a Chesed (Grace), faisant descendre la sagesse divine dans le premier receptacle sous l'Abime sur le Pilier de la Misericorde. Vav (le Clou) est la conjonction, le lien qui attache deux choses ensemble — le « et » de la langue hebraique, le trait d'union entre le Ciel et la Terre. C'est la lettre du Hierophante (arcane V), le grand pretre qui transmet la tradition sacree, le pont entre l'institution divine et la communaute humaine. Lettre simple associee au Taureau, Vav porte l'energie de la stabilite, de la perseverance et de la construction durable. Le Taureau est le signe de la materialisation de l'idee, de l'enracinement de la vision dans le reel. Le Sefer Yetzirah attribue a Vav la domination sur l'ouie — la capacite d'ecouter la voix interieure, de recevoir l'enseignement traditionnel. Ce sentier est celui de la transmission initiatique, de la chaine ininterrompue qui relie chaque generation de chercheurs a la source de la sagesse. Le Hierophante est le gardien des mysteres, non pas comme un gardien qui interdit l'acces mais comme un guide qui ouvre les portes dans le bon ordre. Le mystique qui emprunte ce sentier apprend l'humilite de l'eleve et la responsabilite du maitre.",
  },
  7: {
    number: 7,
    hebrewLetter: "\u05D6",
    letterName: "Zayin",
    fromSefirahNumber: 3,
    toSefirahNumber: 6,
    tarotArcanaNumber: 6,
    meaning: "L'Epee — Discernement qui tranche entre les possibles, choix fondamental",
    zodiacOrPlanet: "Gemeaux",
    element: "Air",
    category: "simple",
    description:
      "Le septieme sentier relie Binah (Intelligence) a Tiphereth (Beaute), portant la puissance de comprehension analytique vers le centre d'harmonie. Zayin (l'Epee) est l'instrument de separation et de discernement — l'arme de l'esprit qui distingue le vrai du faux, l'essentiel de l'accessoire. C'est la lettre des Amoureux (arcane VI), la carte du choix fondamental entre deux voies, de l'engagement qui determine toute la suite du parcours. Lettre simple associee aux Gemeaux, Zayin porte l'energie de la dualite, de la communication entre les opposes, du dialogue interieur qui precede toute decision. Les Gemeaux sont le signe de la multiplicite, du miroir et du double — le moment ou la conscience se dedouble pour se regarder elle-meme. Le Sefer Yetzirah attribue a Zayin la domination sur la marche — le mouvement delibere, le choix de direction. Ce sentier est celui du libre arbitre, de la decision qui engage l'etre entier. L'epee de Zayin ne tue pas — elle separe, clarifie, distingue. Le mystique qui emprunte ce sentier fait face au choix supreme entre la voie de la lumiere et celle de l'ombre, entre l'amour divin et l'amour humain, sachant que choisir l'un n'est pas rejeter l'autre mais les hierarchiser.",
  },
  8: {
    number: 8,
    hebrewLetter: "\u05D7",
    letterName: "Cheth",
    fromSefirahNumber: 3,
    toSefirahNumber: 5,
    tarotArcanaNumber: 7,
    meaning: "La Cloture — Protection qui delimite l'espace sacre, vehicule de la volonte",
    zodiacOrPlanet: "Cancer",
    element: "Eau",
    category: "simple",
    description:
      "Le huitieme sentier relie Binah (Intelligence) a Gevurah (Force), portant la comprehension maternelle vers la discipline guerriere sur le Pilier de la Rigueur. Cheth (la Cloture ou Barriere) delimite un espace protege — l'enclos sacre a l'interieur duquel la vie peut se developper a l'abri des forces destructrices. C'est la lettre du Chariot (arcane VII), le vehicule de triomphe qui porte le heros a travers les epreuves par la seule force de sa volonte disciplinee. Lettre simple associee au Cancer, Cheth porte l'energie de la protection, du foyer, de la membrane qui separe l'interieur nourricier de l'exterieur hostile. Le Cancer est le signe de la carapace, du refuge maternel, de la sensibilite protegee par une armure. Le Sefer Yetzirah attribue a Cheth la domination sur la parole — la capacite de creer des limites par la nomination, de definir le sacre en le separant du profane. Ce sentier est celui de la volonte triomphante qui avance a travers les obstacles non pas en les detruisant mais en les transcendant. Le Chariot ne combat pas ses adversaires — il les depasse. Le mystique qui emprunte ce sentier apprend que la veritable force n'est pas l'absence de vulnerabilite mais la protection de la vulnerabilite par une volonte indomptable.",
  },
  9: {
    number: 9,
    hebrewLetter: "\u05D8",
    letterName: "Teth",
    fromSefirahNumber: 4,
    toSefirahNumber: 5,
    tarotArcanaNumber: 8,
    meaning: "Le Serpent — Force vitale apprivoisee, maitrise de l'instinct par la douceur",
    zodiacOrPlanet: "Lion",
    element: "Feu",
    category: "simple",
    description:
      "Le neuvieme sentier relie Chesed (Grace) a Gevurah (Force), creant un pont horizontal entre la misericorde et la rigueur, l'amour et la discipline. Teth (le Serpent) est la force vitale primordiale — la kundalini des traditions orientales, l'energie brute qui peut detruire ou illuminer selon qu'elle est sauvage ou maitrisee. C'est la lettre de la Force (arcane VIII), la femme qui ouvre la gueule du lion non par la violence mais par la douceur et la persuasion interieure. Lettre simple associee au Lion, Teth porte l'energie royale de la maitrise de soi, du courage solaire et de la noblesse d'ame. Le Lion est le signe de la volonte creatrice, de la generosite du coeur, de la force qui se sait assez puissante pour etre douce. Le Sefer Yetzirah attribue a Teth la domination sur le gout — la capacite de discerner ce qui nourrit de ce qui empoisonne, le raffinement du jugement interieur. Ce sentier est celui de l'equilibre entre l'expansion (Chesed) et la contraction (Gevurah), le moment ou l'ame apprend que la misericorde sans limites et la rigueur sans compassion sont egalement destructrices. Le serpent de Teth est aussi le Nehushtan, le serpent d'airain de Moise qui guerissait ceux qui le regardaient — la transmutation du poison en remede, de l'instinct en intuition.",
  },
  10: {
    number: 10,
    hebrewLetter: "\u05D9",
    letterName: "Yod",
    fromSefirahNumber: 4,
    toSefirahNumber: 6,
    tarotArcanaNumber: 9,
    meaning: "La Main — Geste createur, semence divine, l'etincelle dans la matiere",
    zodiacOrPlanet: "Vierge",
    element: "Terre",
    category: "simple",
    description:
      "Le dixieme sentier relie Chesed (Grace) a Tiphereth (Beaute), portant l'abondance de la misericorde divine vers le centre harmonisateur de l'Arbre. Yod (la Main) est la plus petite lettre de l'alphabet hebreu, et pourtant toutes les autres lettres commencent par un Yod — c'est la semence, le point primordial, l'etincelle divine cachee dans chaque parcelle de creation. C'est la lettre de L'Hermite (arcane IX), le sage solitaire qui eclaire les tenebres avec la lanterne de sa sagesse interieure. Lettre simple associee a la Vierge, Yod porte l'energie de l'analyse, de la purification, du service humble et du discernement pratique. La Vierge est le signe de la moisson, le moment ou le travail patient porte ses fruits. Le Sefer Yetzirah attribue a Yod la domination sur l'action (le travail des mains) — la capacite de manifester l'intention dans le geste, de transformer la pensee en oeuvre concrete. Ce sentier est celui du retrait contemplatif qui precede l'action juste. L'Hermite ne fuit pas le monde — il s'en retire temporairement pour mieux comprendre sa mission. La lanterne qu'il porte n'eclaire pas le chemin des foules mais le sien propre, un pas a la fois. Le mystique qui emprunte ce sentier apprend que la plus grande sagesse commence par le plus petit geste — la main ouverte, le point de lumiere dans l'obscurite.",
  },
  11: {
    number: 11,
    hebrewLetter: "\u05DB",
    letterName: "Kaph",
    fromSefirahNumber: 4,
    toSefirahNumber: 7,
    tarotArcanaNumber: 10,
    meaning: "La Paume — Receptacle du destin, le cycle de la fortune qui tourne sans cesse",
    zodiacOrPlanet: "Jupiter",
    element: "Feu",
    category: "double",
    description:
      "Le onzieme sentier relie Chesed (Grace) a Netzach (Victoire), portant la bienveillance jupiterienne vers la sphere des emotions et de la nature. Kaph (la Paume de la main) est le creux qui recoit — le receptacle du destin, la main ouverte qui accueille ce que le ciel envoie. C'est la lettre de la Roue de Fortune (arcane X), la grande roue cosmique qui eleve et abaisse, distribue et reprend, dans un cycle eternel que nul ne peut arreter. Lettre double associee a Jupiter, Kaph oscille entre richesse et pauvrete, expansion et contraction, bonne fortune et adversite. Jupiter est la grande benefique, le dispensateur des graces et des epreuves qui sont elles-memes des graces deguisees. Le Sefer Yetzirah attribue a Kaph la domination sur la vie — le souffle vital qui entre et sort comme la roue qui monte et descend. Ce sentier est celui de l'acceptation du changement comme loi fondamentale de l'existence. La Roue de Fortune enseigne que rien n'est permanent — ni la joie, ni la souffrance — et que la sagesse consiste a rester centre au moyeu de la roue plutot que d'etre emporte par sa peripherie. Le mystique qui emprunte ce sentier apprend le detachement non pas comme indifference mais comme liberte interieure face aux fluctuations du destin.",
  },
  12: {
    number: 12,
    hebrewLetter: "\u05DC",
    letterName: "Lamed",
    fromSefirahNumber: 5,
    toSefirahNumber: 6,
    tarotArcanaNumber: 11,
    meaning: "L'Aiguillon — Impulsion qui corrige et enseigne, la justice equilibrante",
    zodiacOrPlanet: "Balance",
    element: "Air",
    category: "simple",
    description:
      "Le douzieme sentier relie Gevurah (Force) a Tiphereth (Beaute), portant la rigueur du jugement vers le centre d'harmonie. Lamed (l'Aiguillon a boeufs) est l'instrument d'enseignement et de correction — la piqure qui remet dans le droit chemin, la discipline qui eleve l'eleve au-dessus de sa condition. C'est la plus haute lettre de l'alphabet hebreu (elle depasse la ligne superieure), symbole de l'aspiration vers le haut, du desir d'apprendre qui transcende toutes les limites. C'est la lettre de la Justice (arcane XI), la pesee des ames, l'equilibre implacable entre l'action et sa consequence. Lettre simple associee a la Balance, Lamed porte l'energie de l'equilibre, de l'equite, de la relation juste entre toutes choses. La Balance est le signe de l'equinoxe d'automne, le moment d'egal partage entre le jour et la nuit. Le Sefer Yetzirah attribue a Lamed la domination sur l'union — la capacite de lier harmonieusement les opposes, de creer la justice par l'equilibre. Ce sentier est celui de l'ajustement perpetuel, du karma dans son sens le plus precis — non pas la punition mais la restauration de l'equilibre. Le mystique qui emprunte ce sentier apprend que la justice divine n'est pas la vengeance mais la pedagogie, que chaque epreuve est un aiguillon qui pousse l'ame vers sa perfection.",
  },
  13: {
    number: 13,
    hebrewLetter: "\u05DE",
    letterName: "Mem",
    fromSefirahNumber: 5,
    toSefirahNumber: 8,
    tarotArcanaNumber: 12,
    meaning: "Les Eaux — Deuxieme lettre mere, les eaux primordiales de la dissolution et du renouveau",
    zodiacOrPlanet: "Eau",
    element: "Eau",
    category: "mother",
    description:
      "Le treizieme sentier relie Gevurah (Force) a Hod (Splendeur), portant la rigueur de la discipline vers l'intellect analytique sur le Pilier de la Rigueur. Mem (les Eaux) est la deuxieme lettre mere, associee a l'element Eau — la substance primordiale de dissolution et de regeneration, le liquide amniotique de la creation. C'est la lettre du Pendu (arcane XII), l'homme suspendu la tete en bas qui voit le monde a l'envers et decouvre ainsi une perspective radicalement nouvelle. Mem existe sous deux formes : ouverte (en milieu de mot) et fermee (en fin de mot), symbolisant les eaux manifestees et les eaux cachees. Le Sefer Yetzirah enseigne que de Mem furent creees les eaux, d'ou naquit la terre. Ce sentier est celui du sacrifice volontaire, de l'inversion des valeurs, de l'abandon de l'ego qui permet l'emergence d'une conscience plus vaste. Le Pendu ne souffre pas — il contemple. Sa suspension est un acte delibere de renoncement qui transforme la gravite en grace. L'eau de Mem est aussi l'eau du bapteme, la purification qui precede la renaissance. Le mystique qui emprunte ce sentier apprend que pour recevoir la lumiere d'en haut, il faut d'abord vider le vase des certitudes d'en bas — que le vrai pouvoir nait de l'abandon du pouvoir.",
  },
  14: {
    number: 14,
    hebrewLetter: "\u05E0",
    letterName: "Nun",
    fromSefirahNumber: 6,
    toSefirahNumber: 7,
    tarotArcanaNumber: 13,
    meaning: "Le Poisson — Vie qui prolifere dans les profondeurs, transformation radicale",
    zodiacOrPlanet: "Scorpion",
    element: "Eau",
    category: "simple",
    description:
      "Le quatorzieme sentier relie Tiphereth (Beaute) a Netzach (Victoire), portant l'harmonie du centre vers la sphere des emotions et du desir. Nun (le Poisson) est la creature des profondeurs — la vie qui se multiplie dans l'obscurite des eaux, invisible mais indestructible. C'est la lettre de la Mort (arcane XIII), la grande faucheuse qui n'est pas une fin mais une transformation, le passage obligatoire entre une forme d'existence et une autre. Lettre simple associee au Scorpion, Nun porte l'energie de la regeneration, de la metamorphose, de la mort initiatique qui precede la renaissance. Le Scorpion est le signe des profondeurs de l'ame, des passions qui transforment, du phoenix qui renait de ses cendres. Le Sefer Yetzirah attribue a Nun la domination sur l'odorat — le sens le plus primitif, celui qui detecte la vie et la mort avant que les yeux ne les voient. Ce sentier est celui de la transformation irrevocable, du passage du seuil apres lequel on ne peut plus revenir. La Mort de l'arcane XIII ne porte pas de nom parce qu'elle transcende toute designation — elle est le processus universel de dissolution et de recomposition qui fait que l'univers ne cesse jamais de se renouveler. Le mystique qui emprunte ce sentier meurt a ce qu'il etait pour renaitre a ce qu'il doit devenir.",
  },
  15: {
    number: 15,
    hebrewLetter: "\u05E1",
    letterName: "Samekh",
    fromSefirahNumber: 6,
    toSefirahNumber: 9,
    tarotArcanaNumber: 14,
    meaning: "Le Soutien — Pilier central qui relie le Soi au Fondement, temperance et equilibre",
    zodiacOrPlanet: "Sagittaire",
    element: "Feu",
    category: "simple",
    description:
      "Le quinzieme sentier relie Tiphereth (Beaute) a Yesod (Fondation) sur le Pilier du Milieu, creant l'axe vertical central qui porte la lumiere du Soi superieur vers le plan astral. Samekh (le Soutien ou Pilier) est la structure portante qui maintient l'edifice debout, le squelette invisible de la creation. C'est la lettre de la Temperance (arcane XIV), l'ange qui melange les eaux de deux coupes dans un va-et-vient eternel, alchimiste celeste qui transmute les opposes en harmonie. Lettre simple associee au Sagittaire, Samekh porte l'energie de la fleche dirigee vers le haut, de l'aspiration qui vise juste, de la quete de sens qui traverse toutes les epreuves. Le Sagittaire est le signe du centaure — moitie animal, moitie humain — qui unit l'instinct a la raison dans une seule trajectoire ascendante. Le Sefer Yetzirah attribue a Samekh la domination sur le sommeil — l'etat de conscience ou l'ame quitte le corps pour voyager dans les plans subtils. Ce sentier est celui de l'integration, de la temperance au sens alchimique (le melange savant des teintures), de la patience qui laisse le Grand OEuvre s'accomplir en son temps. Le mystique qui emprunte ce sentier apprend l'art de la mesure — ni trop, ni trop peu — et la confiance dans le processus de transformation interieure.",
  },
  16: {
    number: 16,
    hebrewLetter: "\u05E2",
    letterName: "Ayin",
    fromSefirahNumber: 6,
    toSefirahNumber: 8,
    tarotArcanaNumber: 15,
    meaning: "L'OEil — Vision qui penetre les illusions, confrontation avec l'ombre",
    zodiacOrPlanet: "Capricorne",
    element: "Terre",
    category: "simple",
    description:
      "Le seizieme sentier relie Tiphereth (Beaute) a Hod (Splendeur), portant la lumiere du Soi vers l'intellect analytique. Ayin (l'OEil) est l'organe de la vision — non pas la vision ordinaire mais le regard penetrant qui voit a travers les apparences, qui discerne la lumiere dans les tenebres et les tenebres dans la lumiere. C'est la lettre du Diable (arcane XV), le gardien du seuil qui confronte le voyageur avec ses chaines, ses illusions et ses attachements. Lettre simple associee au Capricorne, Ayin porte l'energie de l'ambition terrestre, de la structure materielle, des lois implacables de la necessita. Le Capricorne est le signe du solstice d'hiver, le moment de la plus grande obscurite ou commence pourtant le retour de la lumiere. Le Sefer Yetzirah attribue a Ayin la domination sur la colere — l'emotion qui revele les attachements et les frustrations de l'ego. Ce sentier est celui de la confrontation avec l'Ombre (au sens jungien), avec les forces liees de la psyche qui maintiennent l'individu dans la repetition et la servitude. Le Diable de l'arcane XV n'est pas le mal absolu mais le miroir deformant de nos propres chaines — des chaines assez laches pour etre retirees si seulement nous le decidons. Le mystique qui emprunte ce sentier affronte ses demons interieurs et decouvre que le pouvoir qu'il leur attribuait etait le sien depuis toujours.",
  },
  17: {
    number: 17,
    hebrewLetter: "\u05E4",
    letterName: "Pe",
    fromSefirahNumber: 7,
    toSefirahNumber: 8,
    tarotArcanaNumber: 16,
    meaning: "La Bouche — Parole qui cree et detruit, effondrement des structures illusoires",
    zodiacOrPlanet: "Mars",
    element: "Feu",
    category: "double",
    description:
      "Le dix-septieme sentier relie Netzach (Victoire) a Hod (Splendeur), creant un pont horizontal entre l'emotion et l'intellect dans la partie basse de l'Arbre. Pe (la Bouche) est l'organe de la parole — le verbe createur qui peut edifier des mondes ou les detruire d'un seul mot. C'est la lettre de la Tour (arcane XVI), la tour d'orgueil frappee par la foudre divine, l'effondrement soudain de toutes les structures baties sur l'illusion. Lettre double associee a Mars, Pe oscille entre grace et peche, domination et servitude, construction et destruction. Mars est la force brute qui brise ce qui doit etre brise pour que le nouveau puisse emerger. Le Sefer Yetzirah attribue a Pe la domination sur la domination — le pouvoir de commander par la parole, mais aussi le danger de l'arrogance verbale. Ce sentier est celui de la revelation soudaine, de l'eclair d'insight qui detruit les fausses certitudes en un instant. La Tour qui s'effondre n'etait pas un vrai refuge — elle etait une prison deguisee en forteresse. L'eclair qui la frappe est la lumiere de la verite que les murs ne pouvaient plus contenir. Le mystique qui emprunte ce sentier decouvre que les catastrophes les plus devastatrices sont souvent les liberations les plus profondes — que la destruction du faux est la condition prealable de la construction du vrai.",
  },
  18: {
    number: 18,
    hebrewLetter: "\u05E6",
    letterName: "Tzaddi",
    fromSefirahNumber: 7,
    toSefirahNumber: 9,
    tarotArcanaNumber: 17,
    meaning: "L'Hamecon — Peche dans les eaux de l'inconscient, esperance et revelation",
    zodiacOrPlanet: "Verseau",
    element: "Air",
    category: "simple",
    description:
      "Le dix-huitieme sentier relie Netzach (Victoire) a Yesod (Fondation), portant la force emotionnelle vers le plan astral et l'imagination. Tzaddi (l'Hamecon) est l'instrument du pecheur — celui qui plonge dans les profondeurs pour en ramener la nourriture, qui extrait le tresor cache du fond de l'ocean inconscient. C'est la lettre de l'Etoile (arcane XVII), la figure nue qui verse l'eau de la vie dans le fleuve cosmique sous les etoiles eternelles, image de l'esperance pure et de la regeneration apres la catastrophe de la Tour. Lettre simple associee au Verseau, Tzaddi porte l'energie de l'humanisme, de l'innovation, du partage universel des eaux de la connaissance. Le Verseau est le porteur d'eau qui verse sa sagesse pour tous sans distinction. Le Sefer Yetzirah attribue a Tzaddi la domination sur l'imagination — la faculte creatrice qui perce les voiles du reel pour entrevoir les possibles. Ce sentier est celui de la meditation, de la contemplation des archeypes eternels qui brillent dans le ciel nocturne de l'ame comme autant d'etoiles guides. L'Etoile de l'arcane XVII est l'esperance indestructible qui survit a toutes les destructions — la lumiere qui brille d'autant plus fort que la nuit est profonde. Le mystique qui emprunte ce sentier apprend a pecher dans les eaux de son propre inconscient et a en ramener des perles de sagesse.",
  },
  19: {
    number: 19,
    hebrewLetter: "\u05E7",
    letterName: "Qoph",
    fromSefirahNumber: 7,
    toSefirahNumber: 10,
    tarotArcanaNumber: 18,
    meaning: "L'Occiput — Face cachee de la conscience, traversee des illusions nocturnes",
    zodiacOrPlanet: "Poissons",
    element: "Eau",
    category: "simple",
    description:
      "Le dix-neuvieme sentier relie Netzach (Victoire) a Malkuth (Royaume), portant la force emotionnelle et naturelle directement dans le monde physique. Qoph (l'Occiput, l'arriere de la tete) est la partie du crane que l'on ne voit pas — le siege des fonctions inconscientes, des reflexes, des reves et des terreurs primitives. C'est la lettre de la Lune (arcane XVIII), le paysage nocturne ou un chemin serpente entre deux tours sous l'oeil d'une lune troublee, tandis qu'un chien et un loup hurlent et qu'une ecrevisse emerge des eaux sombres. Lettre simple associee aux Poissons, Qoph porte l'energie de la dissolution des frontieres, de l'immersion dans l'inconscient collectif, du reve eveille et de la confusion feconde. Les Poissons sont le dernier signe du Zodiaque, la fin du cycle ou tout se dissout avant de renaitre. Le Sefer Yetzirah attribue a Qoph la domination sur le rire — non pas la joie mais le rire nerveux face a l'absurde, l'humour qui est la derniere defense de l'esprit face au chaos. Ce sentier est celui de la traversee de la nuit obscure de l'ame, du passage a travers les illusions et les peurs primordiales pour atteindre la lumiere de l'aube. Le mystique qui emprunte ce sentier marche dans les tenebres avec pour seule guide la foi que le soleil se levera.",
  },
  20: {
    number: 20,
    hebrewLetter: "\u05E8",
    letterName: "Resh",
    fromSefirahNumber: 8,
    toSefirahNumber: 9,
    tarotArcanaNumber: 19,
    meaning: "La Tete — Conscience solaire, illumination de l'intellect par la lumiere divine",
    zodiacOrPlanet: "Soleil",
    element: "Feu",
    category: "double",
    description:
      "Le vingtieme sentier relie Hod (Splendeur) a Yesod (Fondation), portant la clarte intellectuelle vers le plan astral et l'imagination creatrice. Resh (la Tete) est le siege de la conscience — le sommet du corps humain ou la lumiere entre et ou la pensee nait. C'est la lettre du Soleil (arcane XIX), la carte la plus lumineuse du Tarot, ou deux enfants dansent nus sous un soleil radieux dans un jardin fleuri — l'innocence retrouvee, la joie pure de l'existence, l'illumination qui dissipe toutes les ombres. Lettre double associee au Soleil, Resh oscille entre paix et guerre, fertilite et sterilite, grace et disgrace. Le Soleil est l'astre-roi, source de toute vie sur terre, symbole de la conscience divine qui illumine l'intellect humain. Le Sefer Yetzirah attribue a Resh la domination sur la paix — la serenite du sage illumine qui a traverse la nuit et retrouve la lumiere. Ce sentier est celui de l'illumination solaire, du moment ou l'intellect (Hod) et l'intuition (Yesod) s'unissent sous la lumiere de la verite. Apres la nuit de la Lune (Qoph), le Soleil de Resh ramene la clarte, la certitude et la joie. Le mystique qui emprunte ce sentier sort de la caverne de Platon et voit le monde tel qu'il est reellement — baigne de lumiere divine.",
  },
  21: {
    number: 21,
    hebrewLetter: "\u05E9",
    letterName: "Shin",
    fromSefirahNumber: 8,
    toSefirahNumber: 10,
    tarotArcanaNumber: 20,
    meaning: "La Dent — Troisieme lettre mere, le feu transformateur, le Jugement dernier",
    zodiacOrPlanet: "Feu",
    element: "Feu",
    category: "mother",
    description:
      "Le vingt-et-unieme sentier relie Hod (Splendeur) a Malkuth (Royaume), portant l'intellect analytique vers la realite physique par la puissance du feu. Shin (la Dent) est la troisieme lettre mere, associee a l'element Feu — le feu createur et destructeur, la flamme de la Shekinah, la langue de feu de l'Esprit Saint. C'est la lettre du Jugement (arcane XX), l'ange soufflant dans sa trompette pour reveiller les morts de leurs tombeaux — l'appel irresistible de la conscience superieure qui exige la resurrection et le renouveau. Shin a trois branches, representant les trois piliers de l'Arbre de Vie, les trois lettres meres, et la triple flamme divine. Le Sefer Yetzirah enseigne que de Shin furent crees les cieux — le feu primordial qui separa le haut du bas et donna forme a l'espace. Ce sentier est celui de la transformation radicale, du reveil spirituel qui transcende la mort physique. Le Jugement de l'arcane XX n'est pas la condamnation mais la liberation finale — l'ame qui repond a l'appel de sa destinee veritable et s'eleve au-dessus de ses limitations. C'est le feu alchimique de la rubedo, la phase finale du Grand OEuvre ou le plomb de l'ego se transmute en or de la conscience christique. Le mystique qui emprunte ce sentier entend la trompette interieure qui appelle a la vie veritable.",
  },
  22: {
    number: 22,
    hebrewLetter: "\u05EA",
    letterName: "Tav",
    fromSefirahNumber: 9,
    toSefirahNumber: 10,
    tarotArcanaNumber: 21,
    meaning: "La Croix / Le Sceau — Derniere lettre, accomplissement du cycle, danse cosmique",
    zodiacOrPlanet: "Saturne",
    element: "Terre",
    category: "double",
    description:
      "Le vingt-deuxieme et dernier sentier relie Yesod (Fondation) a Malkuth (Royaume), completant la descente de la lumiere divine dans le monde physique. Tav (la Croix ou le Sceau) est la derniere lettre de l'alphabet hebreu — le sceau final appose sur la creation, la marque d'accomplissement qui signe l'oeuvre achevee. C'est la lettre du Monde (arcane XXI), la danseuse cosmique entouree de la couronne de laurier, les quatre creatures vivantes aux quatre coins — la danse de la creation accomplie, l'extase de la matiere pleinement habitee par l'esprit. Lettre double associee a Saturne, Tav oscille entre beaute et laideur, grace et condamnation, accomplissement et inacheve. Saturne est le gardien du seuil, le Kronos qui devore ses enfants mais qui est aussi le Saturnales — la liberation finale du temps lui-meme. Le Sefer Yetzirah attribue a Tav la domination sur la beaute — non pas la beaute de Venus mais la beaute de la totalite, la perfection du cycle complet. Ce sentier est celui de l'accomplissement, de l'integration de tous les sentiers precedents dans une danse unique ou le haut et le bas, le debut et la fin, la matiere et l'esprit ne font plus qu'un. Le Monde est la derniere carte du Tarot mais aussi le premier pas du prochain cycle — car Tav est suivi d'Aleph, la fin est un commencement. Le mystique qui emprunte ce sentier celebre la sacralite de l'existence incarnee.",
  },
};
