/**
 * Elder Futhark — 24 Runes
 *
 * The Elder Futhark is the oldest runic alphabet, used by Germanic peoples
 * from the 2nd to the 8th century CE. Its 24 runes are divided into three
 * groups of eight called Aettir (singular: Aett):
 *
 *   Aett 1 — Freya's Aett (runes 0-7):   Fehu through Wunjo
 *   Aett 2 — Heimdall's Aett (runes 8-15): Hagalaz through Sowilo
 *   Aett 3 — Tyr's Aett (runes 16-23):    Tiwaz through Othala
 *
 * Each rune has an upright (meaning) and reversed/merkstave meaning.
 * Nine runes are non-reversible (symmetric glyphs): Gebo, Hagalaz,
 * Nauthiz, Isa, Jera, Eihwaz, Sowilo, Ingwaz, Dagaz. When drawn
 * non-reversible, the merkstave meaning applies to blocked or excessive
 * manifestations of the rune's energy rather than a literal inversion.
 *
 * Rune poem references in descriptions draw from three historical sources:
 *   - Norwegian Rune Poem (Norsk Runerim, ~13th c.)
 *   - Icelandic Rune Poem (Islenzk Runaljod, ~15th c.)
 *   - Anglo-Saxon Rune Poem (Old English, ~10th c.)
 *
 * QRNG mapping: 5 bits address runes 0-23 (with scaling from 0-31),
 * plus 1 additional bit for orientation (upright/reversed).
 */

import type { Rune } from "./types";

export const ELDER_FUTHARK: Record<number, Rune> = {
  // =========================================================================
  // AETT 1 — FREYA'S AETT (runes 0-7)
  // =========================================================================

  0: {
    number: 0,
    name: "Fehu",
    glyph: "\u16A0",
    phoneticValue: "f",
    aettNumber: 1,
    meaning:
      "Richesse mobile, betail, abondance primordiale. Fehu est la rune de la richesse sous sa forme dynamique — non pas le tresor enfoui, mais le betail vivant qui se multiplie, la fortune qui circule et engendre. Dans les societes germaniques anciennes, la richesse se mesurait en tetes de betail, symbole de fecondite et de pouvoir social. Fehu enseigne que la veritable richesse reside dans le mouvement : l'argent qui stagne se corrompt, la generosite engendre l'abondance. Cette rune inaugure le Futhark car toute manifestation commence par l'energie creatrice brute, le feu primordial qui met la matiere en mouvement. Fehu indique un temps de prosperite, de realisations materielles et de recompenses meritees. Elle invite a jouir de ses acquis tout en les faisant fructifier par le partage et l'investissement judicieux.",
    merkstaveMeaning:
      "Perte financiere, avarice, esclavage aux possessions materielles. L'energie de Fehu inversee se manifeste par l'attachement obsessionnel a l'argent, la peur de la pauvrete qui paralyse, ou la dilapidation irresponsable des ressources. Le betail meurt, la fortune s'evapore. Le consultant est averti d'une periode de difficultes materielles ou d'une relation toxique avec l'argent, qu'il s'agisse d'accumulation compulsive ou de depenses excessives.",
    isReversible: true,
    element: "Fire",
    deity: "Freya",
    description:
      "Le poeme runique norvegien dit : « La richesse est source de discorde parmi les proches ; le loup grandit dans la foret. » Le poeme islandais ajoute : « La richesse est feu du serpent et chemin du poisson. » Le poeme anglo-saxon celebre : « La richesse est un reconfort pour tous, mais chacun doit la distribuer librement s'il veut obtenir honneur devant le Seigneur. » Ces trois poemes soulignent la dualite de la richesse : source de conflits quand elle est accaparee, source d'honneur quand elle circule. Le feu du serpent (or) et le chemin du poisson (mer) evoquent les routes commerciales nordiques.",
    correspondences: {
      element: "Fire",
      season: "Spring",
      color: "Red-Gold",
      planet: "Venus",
      tarotArcana: "The Empress (III)",
      tree: "Elder (Sureau)",
      herb: "Nettle (Ortie)",
      gemstone: "Amber",
    },
  },

  1: {
    number: 1,
    name: "Uruz",
    glyph: "\u16A2",
    phoneticValue: "u",
    aettNumber: 1,
    meaning:
      "Force brute, vitalite, aurochs, sante, endurance. Uruz est la rune de l'aurochs (Bos primigenius), le taureau sauvage aujourd'hui eteint dont la puissance physique etait legendaire dans le monde germanique. Chasser l'aurochs etait un rite de passage pour les jeunes guerriers — affronter la bete prouvait le courage et la force vitale. Uruz represente l'energie physique non domestiquee, la force de vie a l'etat brut, la sante robuste. Elle indique un temps de vitalite accrue, de guerison, de force interieure qui se manifeste dans le monde. Cette rune invite a se connecter a sa nature instinctive, a puiser dans les reserves profondes de l'organisme. Uruz signale aussi les transitions radicales : l'aurochs ne se laisse pas apprivoiser, il faut se transformer soi-meme pour acceder a cette puissance.",
    merkstaveMeaning:
      "Faiblesse, maladie, brutalite sans direction, force mal canalisee. L'aurochs inverse pietine tout sur son passage ou s'effondre, epuise. Le consultant peut souffrir de problemes de sante, d'un manque d'energie vital, ou au contraire d'une violence physique ou emotionnelle qui detruit au lieu de construire. La force brute sans sagesse devient destructrice. L'impuissance face aux circonstances et le refus d'accepter sa propre vulnerabilite.",
    isReversible: true,
    element: "Earth",
    deity: "Thor",
    description:
      "Le poeme norvegien dit : « Les scories viennent du mauvais fer ; le renne court souvent sur la neige durcie. » Le poeme islandais : « La bruine est larme des nuages et ruine de la recolte, et abomination du berger. » Le poeme anglo-saxon, plus direct : « L'aurochs est fier et possede de grandes cornes ; bete tres sauvage, il combat avec ses cornes ; grand rodeur des landes, c'est une creature de courage. » Ce dernier poeme capture le mieux l'essence d'Uruz : la rencontre avec la force primordiale de la nature qui exige respect et courage.",
    correspondences: {
      element: "Earth",
      season: "Winter-Spring",
      color: "Dark Green",
      planet: "Mars",
      tarotArcana: "The Chariot (VII)",
      tree: "Birch (Bouleau)",
      herb: "Sphagnum (Sphaigne)",
      gemstone: "Carbuncle (Escarboucle)",
    },
  },

  2: {
    number: 2,
    name: "Thurisaz",
    glyph: "\u16A6",
    phoneticValue: "th",
    aettNumber: 1,
    meaning:
      "Geant, epine, force de protection, porte, seuil. Thurisaz est la rune du Thurs (geant du givre), force primordiale du chaos qui menace l'ordre cosmique. Mais elle est aussi l'epine qui protege la rose — la force defensive, le marteau de Thor qui defend Midgard contre les geants. Thurisaz est la rune du seuil, de la porte entre deux mondes. Elle represente une force reactive, une puissance qui se dechaine en reponse a une menace. Le consultant fait face a un obstacle puissant ou a une force qui exige confrontation. Thurisaz indique qu'il faut agir avec la precision du chirurgien et la puissance du tonnerre. Cette rune invite a la reflexion avant l'action : l'epine protege, mais elle blesse aussi celui qui la saisit sans precaution. C'est la pause strategique avant la frappe decisive.",
    merkstaveMeaning:
      "Danger, agression, vulnerabilite, forces destructrices non maitrisees. Le geant se retourne contre celui qui croyait le controler. Le consultant est expose a des menaces exterieures ou a ses propres tendances destructrices. Obstination aveugle, refus d'ecouter les avertissements. L'epine qui devrait proteger blesse son porteur. Colere mal dirigee, conflit evitable qui degenerera si la prudence n'est pas exercee immediatement.",
    isReversible: true,
    element: "Fire",
    deity: "Thor",
    description:
      "Le poeme norvegien dit : « Le geant cause la souffrance des femmes ; peu se rejouissent du malheur. » Le poeme islandais : « Le geant est tourment des femmes et habitant des rochers et mari de la geante Vardhruna. » Le poeme anglo-saxon offre une perspective plus nuancee : « L'epine est extremement pointue ; pour tout guerrier qui la saisit elle est mauvaise, excessivement severe pour tout homme qui repose parmi elles. » Les trois poemes insistent sur l'aspect dangereux et douloureux de cette force, tout en reconnaissant implicitement son role necessaire dans l'equilibre cosmique.",
    correspondences: {
      element: "Fire",
      season: "Summer",
      color: "Bright Red",
      planet: "Mars",
      tarotArcana: "The Tower (XVI)",
      tree: "Hawthorn (Aubepine)",
      herb: "Houseleek (Joubarbe)",
      gemstone: "Sapphire (Saphir)",
    },
  },

  3: {
    number: 3,
    name: "Ansuz",
    glyph: "\u16A8",
    phoneticValue: "a",
    aettNumber: 1,
    meaning:
      "Dieu, souffle divin, parole, sagesse, communication, Odin. Ansuz est la rune d'Odin lui-meme, le dieu qui decouvrit les runes en se pendant a Yggdrasil pendant neuf nuits. Elle represente le souffle divin (ond) insuffle aux premiers humains, la parole creatrice, la communication inspiree. Ansuz gouverne toutes les formes de transmission : eloquence, poesie, enseignement, chant, incantation. Elle indique un temps de revelation, de messages importants, de paroles qui changent le cours des evenements. Le consultant recevra une communication cruciale ou sera appele a s'exprimer avec autorite et inspiration. Ansuz est aussi la rune de la lignee ancestrale divine (les Ases), reliant l'individu a la sagesse de ses ancetres. Elle invite a ecouter les signes, a preter attention aux reves et aux intuitions qui portent la voix du sacre.",
    merkstaveMeaning:
      "Tromperie, malentendu, paroles vaines, manipulation par le langage. La sagesse d'Odin devient ruse et fourberie. Le consultant est victime de mensonges ou se ment a lui-meme. Les communications echouent, les messages importants sont perdus ou deformes. Vanite intellectuelle, abus de pouvoir par la parole. Les ancetres sont coupes, la lignee spirituelle interrompue. Le souffle divin est etouffe par le bruit du monde.",
    isReversible: true,
    element: "Air",
    deity: "Odin",
    description:
      "Le poeme norvegien dit : « L'embouchure du fleuve ouvre la plupart des voyages ; mais le fourreau contient l'epee. » Le poeme islandais : « Le dieu Ase est le prince ancien d'Asgard et seigneur du Valhalla. » Le poeme anglo-saxon : « La bouche est la source de toute parole, le soutien de la sagesse et le reconfort des sages, et la benediction et la joie de tout homme noble. » Le poeme anglo-saxon capture la dimension orale et sapientiale d'Ansuz : la parole comme vehicule de la sagesse ancestrale.",
    correspondences: {
      element: "Air",
      season: "Spring",
      color: "Dark Blue",
      planet: "Mercury",
      tarotArcana: "The Magician (I)",
      tree: "Ash (Frene)",
      herb: "Fly Agaric (Amanite tue-mouches)",
      gemstone: "Lapis Lazuli",
    },
  },

  4: {
    number: 4,
    name: "Raidho",
    glyph: "\u16B1",
    phoneticValue: "r",
    aettNumber: 1,
    meaning:
      "Chevauchee, voyage, rythme, mouvement ordonne, quete. Raidho est la rune du voyage, non pas la simple errance mais le deplacement avec un but, la chevauchee du guerrier ou du pelerin qui suit un chemin trace. Elle represente le rythme cosmique, le mouvement ordonne des astres, le cycle des saisons — tout ce qui suit une trajectoire harmonieuse. Raidho indique un voyage physique ou interieur, une progression vers un objectif. Le consultant est appele a prendre la route, a suivre son chemin de vie avec determination. Cette rune gouverne aussi la justice et l'ordre moral (le « droit chemin ») ainsi que les rituels et les ceremonies qui suivent un protocole precis. Raidho enseigne que le voyage importe autant que la destination — c'est dans le mouvement que la transformation s'opere.",
    merkstaveMeaning:
      "Stagnation, voyage perturbe, injustice, desordre. Le cavalier est jete a bas de sa monture, le voyageur s'egare. Plans de voyage aneantis, deplacements retardes ou dangereux. Perte du rythme interieur, desynchronisation avec les cycles naturels. Le consultant est bloque, incapable d'avancer, ou court dans la mauvaise direction. Rupture de routine, chaos dans l'organisation, sentiment de tourner en rond.",
    isReversible: true,
    element: "Air",
    deity: "Odin",
    description:
      "Le poeme norvegien dit : « Chevaucher, dit-on, est la pire chose pour les chevaux ; Reginn forgea la meilleure epee. » Le poeme islandais : « Chevaucher est joie assise et voyage rapide et labeur du cheval. » Le poeme anglo-saxon : « Chevaucher semble facile a tout guerrier dans la salle, et tres courageux a celui qui est assis sur un puissant cheval par les chemins des miles. » Les trois poemes evoquent la chevauchee comme metaphore du voyage et de l'action — le contraste entre le confort du foyer et l'effort de la route.",
    correspondences: {
      element: "Air",
      season: "Summer",
      color: "Bright Red",
      planet: "Mercury",
      tarotArcana: "The Chariot (VII)",
      tree: "Oak (Chene)",
      herb: "Mugwort (Armoise)",
      gemstone: "Chrysoprase",
    },
  },

  5: {
    number: 5,
    name: "Kenaz",
    glyph: "\u16B2",
    phoneticValue: "k",
    aettNumber: 1,
    meaning:
      "Torche, feu controle, connaissance, creativite, illumination. Kenaz est la rune de la torche, le feu domestique par opposition au feu sauvage de Thurisaz. Elle represente la connaissance acquise par l'experience (le mot « ken » signifie « connaitre » en vieil anglais), l'illumination interieure, la creativite artisanale. Kenaz est le feu du forgeron qui transforme le minerai brut en oeuvre d'art, l'etincelle de l'inspiration qui eclaire les tenebres de l'ignorance. Elle gouverne les arts, l'artisanat, la technique, toute transformation consciente de la matiere par l'esprit. Le consultant est appele a exercer ses talents creatifs, a mettre en lumiere ce qui etait cache. Kenaz indique un temps de clarte mentale, de comprehension soudaine, de passion creatrice. La torche eclaire le chemin dans l'obscurite — la connaissance dissipe la peur.",
    merkstaveMeaning:
      "Obscurite, ignorance, creativite bloquee, aveuglement. La torche s'eteint, laissant le consultant dans les tenebres. Perte d'inspiration, blocage creatif, incapacite a voir clair dans une situation. Maladie (la torche eteinte etait aussi un symbole de maladie dans la tradition nordique). Fausse illumination, illusions prises pour des revelations. Le feu interieur meurt, remplace par la froideur de l'incomprehension.",
    isReversible: true,
    element: "Fire",
    deity: "Heimdall",
    description:
      "Le poeme norvegien dit : « L'ulcere est fatal aux enfants ; la mort rend le cadavre pale. » (Le mot « kaun » signifie « ulcere » en vieux norrois, une lecture alternative a « torche ».) Le poeme islandais : « L'ulcere est maladie fatale et residence de la plaie et la torture de la chair. » Le poeme anglo-saxon offre la lecture lumineuse : « La torche est connue de tout etre vivant par sa flamme ; elle est pale et brillante ; elle brule le plus souvent ou les nobles se reposent a l'interieur. » Le contraste entre les lectures norroise (ulcere/transformation) et anglo-saxonne (torche/illumination) revele la dualite du feu : il guerit et il consume.",
    correspondences: {
      element: "Fire",
      season: "Autumn",
      color: "Light Red-Orange",
      planet: "Venus",
      tarotArcana: "The Star (XVII)",
      tree: "Pine (Pin)",
      herb: "Cowslip (Primevere)",
      gemstone: "Bloodstone (Heliotrope)",
    },
  },

  6: {
    number: 6,
    name: "Gebo",
    glyph: "\u16B7",
    phoneticValue: "g",
    aettNumber: 1,
    meaning:
      "Don, echange, generosite, partenariat, equilibre sacre. Gebo est la rune du don, l'un des concepts les plus sacres de la culture germanique. Dans la societe nordique, le don creait un lien d'honneur et d'obligation reciproque entre le donneur et le receveur — il n'existait pas de don sans retour. Gebo represente cet echange sacre, l'equilibre entre donner et recevoir, le partenariat fonde sur la reciprocite. Sa forme en X symbolise le croisement de deux forces, la rencontre de deux destins. Gebo indique un temps de partenariat, de contrats equitables, de dons significatifs. Le consultant est invite a donner sans compter mais aussi a accepter avec grace. Cette rune gouverne les relations d'egal a egal, les alliances, les echanges de serments. L'equilibre parfait du don est aussi l'equilibre cosmique entre les forces.",
    merkstaveMeaning:
      "Desequilibre dans les echanges, dette, sacrifice disproportionne, dependance. Le don devient obligation etouffante, la generosite se transforme en manipulation. Le consultant donne trop sans recevoir, ou recoit sans donner — dans les deux cas, l'equilibre sacre est rompu. Relations parasitaires, contrats iniquitables, sentiment de devoir que rien ne peut satisfaire. Solitude nee de l'incapacite a creer des liens de reciprocite authentique.",
    isReversible: false,
    element: "Air",
    deity: "Odin",
    description:
      "Gebo n'apparait pas dans les poemes runiques norvegien et islandais. Le poeme anglo-saxon dit : « La generosite est un ornement de dignite pour tout homme ; un soutien et un embellissement, et un don de grace et de misericorde ; elle est assistance et substance pour tout miserable qui en est depourvu. » Ce poeme souligne la dimension sociale et spirituelle du don : il eleve celui qui donne et soutient celui qui recoit. L'absence dans les poemes norrois pourrait s'expliquer par le fait que le don, etant si fondamental a la culture nordique, transcendait la necessite d'explication poetique.",
    correspondences: {
      element: "Air",
      season: "Spring-Summer",
      color: "Deep Blue",
      planet: "Venus",
      tarotArcana: "The Lovers (VI)",
      tree: "Elm (Orme)",
      herb: "Heartsease (Pensee sauvage)",
      gemstone: "Opal",
    },
  },

  7: {
    number: 7,
    name: "Wunjo",
    glyph: "\u16B9",
    phoneticValue: "w",
    aettNumber: 1,
    meaning:
      "Joie, bonheur, harmonie, accomplissement, perfection. Wunjo est la rune de la joie veritable, celle qui nait de l'harmonie interieure et de la communion avec les autres. Elle cloture le premier Aett en couronnant le chemin initiatique par la joie — apres la richesse (Fehu), la force (Uruz), l'epreuve (Thurisaz), l'inspiration (Ansuz), le voyage (Raidho), la connaissance (Kenaz) et le don (Gebo), vient enfin la joie de l'accomplissement. Wunjo represente le bonheur qui nait de l'alignement entre la volonte individuelle et l'ordre cosmique. Elle indique un temps de joie sincere, de realisations heureuses, de relations harmonieuses. Le consultant est invite a savourer le moment present et a reconnaitre les benedictions dans sa vie. Wunjo est aussi la rune de la compagnie des proches, la chaleur du foyer partage.",
    merkstaveMeaning:
      "Tristesse, alienation, deception, desarroi. La joie se retire, laissant un vide douloureux. Le consultant traverse une periode de melancolie, de desillusion ou de crise existentielle. Les relations se deteriorent, l'harmonie se brise, l'accomplissement semble hors d'atteinte. Wunjo inversee avertit de ne pas s'accrocher aux plaisirs ephemeres ni de chercher le bonheur dans les mauvaises directions. La joie veritable requiert un travail interieur que le consultant evite.",
    isReversible: true,
    element: "Earth",
    deity: "Freyr",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Wunjo. Le poeme islandais non plus. Le poeme anglo-saxon dit : « La joie est goutee par celui qui ne connait que peu de malheur, de douleur et de chagrin, et qui possede lui-meme la prosperite et la felicite, et aussi la suffisance de la demeure. » Ce poeme lie la joie a la securite materielle et emotionnelle — non pas l'extase passagere mais le contentement profond ne d'une vie bien vecue. Le silence des poemes scandinaves sur cette rune contraste avec l'emphase anglo-saxonne sur le bonheur domestique.",
    correspondences: {
      element: "Earth",
      season: "Summer",
      color: "Yellow-Gold",
      planet: "Venus",
      tarotArcana: "The Sun (XIX)",
      tree: "Ash (Frene)",
      herb: "Flax (Lin)",
      gemstone: "Diamond (Diamant)",
    },
  },

  // =========================================================================
  // AETT 2 — HEIMDALL'S AETT (runes 8-15)
  // =========================================================================

  8: {
    number: 8,
    name: "Hagalaz",
    glyph: "\u16BA",
    phoneticValue: "h",
    aettNumber: 2,
    meaning:
      "Grele, destruction creatrice, forces de la nature, transformation radicale. Hagalaz ouvre le second Aett avec la violence de la grele qui detruit les recoltes — mais aussi les fertilise par l'eau qu'elle apporte. C'est la rune des forces naturelles implacables, au-dela du controle humain. Hagalaz represente la destruction necessaire a la transformation, le chaos qui precede un nouvel ordre. Dans la cosmogonie nordique, le monde nait de la rencontre entre le feu de Muspelheim et la glace de Niflheim — Hagalaz est ce moment de collision creatrice. Elle indique un temps de bouleversements, d'evenements imprevisibles, de crises qui, bien qu'eprouvantes, portent en germe un renouveau. Le consultant est appele a accepter ce qui ne peut etre controle et a trouver l'opportunite dans la destruction. Le grain de grele est aussi un cristal parfait — l'ordre cache dans le chaos apparent.",
    merkstaveMeaning:
      "Catastrophe naturelle, destruction sans renouveau, stagnation dans les ruines. Les forces destructrices se dechainent sans perspective de reconstruction. Le consultant refuse de lacher prise sur ce que la tempete emporte, prolongeant la souffrance. Crises repetees sans apprentissage, victimisation face aux circonstances. Le chaos n'est plus createur mais simplement destructeur quand la lecon est refusee. Perte de foi dans l'ordre cosmique.",
    isReversible: false,
    element: "Water",
    deity: "Urd",
    description:
      "Le poeme norvegien dit : « La grele est le plus froid des grains ; le Christ a cree le monde ancien. » Le poeme islandais : « La grele est grain froid et averse de gresil et maladie des serpents. » Le poeme anglo-saxon : « La grele est le plus blanc des grains ; elle est agitee du tourbillon des cieux et lancee par les rafales du vent, et ensuite elle se dissout en eau. » Les trois poemes convergent sur l'aspect destructeur mais transitoire de la grele — elle tombe durement mais fond en eau nourriciere. La mention du Christ dans le poeme norvegien temoigne de la christianisation du corpus.",
    correspondences: {
      element: "Water",
      season: "Winter",
      color: "White-Blue",
      planet: "Saturn",
      tarotArcana: "The Tower (XVI)",
      tree: "Yew (If) / Ash (Frene)",
      herb: "Lily of the Valley (Muguet)",
      gemstone: "Onyx",
    },
  },

  9: {
    number: 9,
    name: "Nauthiz",
    glyph: "\u16BE",
    phoneticValue: "n",
    aettNumber: 2,
    meaning:
      "Besoin, necessite, contrainte, resistance, feu de la necessite. Nauthiz est la rune du besoin imperieux, de la contrainte qui forge le caractere. Son nom evoque le naudh-fyr, le « feu de necessite » que les anciens Germains allumaient par friction en temps de crise — un feu obtenu par l'effort pur, sans silex ni amadou. Nauthiz represente les difficultes qui, par leur pression meme, font emerger des capacites insoupconnees. Elle est liee aux Nornes, les fileuses du destin, qui tissent les contraintes de chaque existence. Nauthiz indique un temps d'epreuve, de manque, de restriction — mais aussi d'innovation nee de la necessite. Le consultant est appele a accepter ses limites actuelles et a trouver en elles la matiere de sa croissance. La faim aiguise l'esprit ; la privation revele l'essentiel.",
    merkstaveMeaning:
      "Privation extreme, desespoir, contrainte ecrasante, misere. Le besoin depasse la capacite d'adaptation du consultant. Le feu de necessite ne s'allume pas — les ressources interieures sont epuisees. Poverty thinking : le manque devient une prison mentale qui empeche de voir les solutions. Apitoiement sur soi-meme, impuissance apprise. La contrainte ne forge plus, elle brise. Le consultant doit chercher de l'aide exterieure.",
    isReversible: false,
    element: "Fire",
    deity: "Skuld",
    description:
      "Le poeme norvegien dit : « La contrainte laisse peu de choix ; l'homme nu gele dans le givre. » Le poeme islandais : « La contrainte est le chagrin de la servante et condition difficile et travail penible. » Le poeme anglo-saxon : « La necessite est oppressante pour la poitrine ; pourtant elle devient souvent une aide et un salut pour les enfants des hommes, si on lui prete attention a temps. » Le contraste est saisissant : les poemes scandinaves ne voient que la souffrance, tandis que le poeme anglo-saxon reconnait le potentiel redempteur de la contrainte — la necessite comme maitre severe mais efficace.",
    correspondences: {
      element: "Fire",
      season: "Winter",
      color: "Black",
      planet: "Saturn",
      tarotArcana: "The Devil (XV)",
      tree: "Beech (Hetre)",
      herb: "Bistort (Renouee)",
      gemstone: "Obsidian (Obsidienne)",
    },
  },

  10: {
    number: 10,
    name: "Isa",
    glyph: "\u16C1",
    phoneticValue: "i",
    aettNumber: 2,
    meaning:
      "Glace, immobilite, stase, concentration, ego. Isa est la rune de la glace primordiale, le gel de Niflheim qui fige toute chose. Graphiquement la plus simple du Futhark — un simple trait vertical — elle represente la concentration absolue, l'unite indivisible, le point d'immobilite au centre de la tempete. Isa est la force centripete qui contracte, cristallise et preserve. Elle indique un temps de pause forcee, d'immobilite, d'attente. Rien ne bouge, rien ne progresse, mais cette stagnation n'est pas sterile : comme le lac gele qui protege la vie sous sa surface, Isa preserve ce qui est en gestation. Le consultant est invite a ne rien forcer, a accepter le gel comme une protection temporaire. Isa est aussi la rune du soi (le « je » qui dit I), l'affirmation de l'identite individuelle, le noyau dur de la personnalite qui resiste a la dissolution.",
    merkstaveMeaning:
      "Paralysie, ego surdimensionne, froideur emotionnelle, isolement. La glace ne protege plus, elle emprisonne. Le consultant est fige dans ses habitudes, incapable de s'adapter, coupe de ses emotions par une armure de glace. Narcissisme, egocentrisme, refus obstiné de tout mouvement. La stase se prolonge au-dela du necessaire, devenant pathologique. La vie sous la glace suffoque. L'attente se transforme en resignation definitive.",
    isReversible: false,
    element: "Water",
    deity: "Verdandi",
    description:
      "Le poeme norvegien dit : « La glace, nous l'appelons le pont large ; l'aveugle doit etre guide. » Le poeme islandais : « La glace est ecorce du fleuve et toit de la vague et danger pour les hommes condamnes. » Le poeme anglo-saxon : « La glace est tres froide et immensement glissante ; elle scintille aussi claire que le verre, tres semblable aux gemmes ; c'est un sol fait de givre, beau a voir. » Les trois poemes capturent la dualite de la glace : dangereuse et trompeusement belle, elle offre un passage (pont) mais aussi un piege mortel. La beaute cristalline masque le danger.",
    correspondences: {
      element: "Water",
      season: "Winter",
      color: "White",
      planet: "Moon",
      tarotArcana: "The Hermit (IX)",
      tree: "Alder (Aulne)",
      herb: "Henbane (Jusquiame)",
      gemstone: "Clear Quartz (Cristal de roche)",
    },
  },

  11: {
    number: 11,
    name: "Jera",
    glyph: "\u16C3",
    phoneticValue: "j",
    aettNumber: 2,
    meaning:
      "Annee, recolte, cycle, saison, recompense juste. Jera est la rune de l'annee et de la recolte — le temps cyclique qui ramene les saisons et assure que tout effort porte fruit en temps voulu. C'est la rune de la patience recompensee, de la loi naturelle de cause a effet appliquee aux cycles longs. Jera enseigne que chaque graine semee germera, que chaque action aura sa consequence, mais seulement quand le temps sera mur. Elle represente les 12 mois de l'annee, la rotation des saisons, le cycle eternel mort-renaissance. Jera indique un temps de recolte apres un long labeur, un temps ou les efforts passes portent enfin leurs fruits. Le consultant est invite a la patience et a la confiance dans les processus naturels. Le paysan ne tire pas sur les tiges pour les faire pousser plus vite — il attend, et la terre fait son oeuvre.",
    merkstaveMeaning:
      "Recolte manquee, mauvais timing, repetition sterile, impatience. Les cycles naturels sont perturbes, les saisons internes desynchronisees. Le consultant recolte ce qu'il n'a pas seme — ou ne recolte rien malgre ses efforts, parce qu'il a plante au mauvais moment. Repetition obsessionnelle des memes erreurs sans apprentissage. Le cycle tourne a vide, la roue des saisons grince. Epuisement face a l'attente interminable d'une recompense qui ne vient pas.",
    isReversible: false,
    element: "Earth",
    deity: "Freyr",
    description:
      "Le poeme norvegien dit : « La recolte est un bienfait pour les hommes ; je dis que Frodhi etait genereux. » Le poeme islandais : « La recolte est profit des hommes et bon ete et champ mur. » Le poeme anglo-saxon : « L'ete est une joie pour les hommes, quand Dieu, le roi saint du ciel, fait que la terre donne des fruits brillants pour les riches et les pauvres. » Les trois poemes celebrent la recolte comme bienfait universel, soulignant la generosite de la terre qui nourrit tous les hommes sans distinction. La reference a Frodhi dans le poeme norvegien evoque le roi mythique sous le regne duquel regnait la paix.",
    correspondences: {
      element: "Earth",
      season: "Autumn",
      color: "Brown-Gold",
      planet: "Sun",
      tarotArcana: "Wheel of Fortune (X)",
      tree: "Oak (Chene)",
      herb: "Rosemary (Romarin)",
      gemstone: "Carnelian (Cornaline)",
    },
  },

  12: {
    number: 12,
    name: "Eihwaz",
    glyph: "\u16C7",
    phoneticValue: "ei",
    aettNumber: 2,
    meaning:
      "If, arbre du monde, axe cosmique, mort et renaissance, endurance. Eihwaz est la rune de l'if (Taxus), l'arbre a feuilles persistantes qui vit des millenaires, symbole d'eternite et de connexion entre les mondes. L'if est lie a Yggdrasil, l'arbre cosmique dont les racines plongent dans le royaume des morts et la cime touche le ciel. Le bois d'if servait a fabriquer les arcs les plus puissants — la mort jaillit de l'arbre de vie. Eihwaz represente l'axe vertical qui relie les mondes, la colonne vertebrale de l'univers. Elle indique une transformation profonde, une mort symbolique qui precede la renaissance. Le consultant traverse un passage initiatique, une epreuve de transformation qui le changera fondamentalement. Eihwaz assure aussi la protection et la perseverance — l'if resiste a tout, meme au feu qui consume la foret.",
    merkstaveMeaning:
      "Peur de la mort, resistance au changement necessaire, deconnexion de l'axe spirituel. Le consultant refuse la transformation initiatique, s'accroche a une identite caduque. Confusion entre les plans d'existence, desorientation spirituelle. L'arbre cosmique est coupe — le consultant perd son ancrage entre ciel et terre. Stagnation spirituelle par peur de l'inconnu. Endurance qui se transforme en obstination aveugle, refus de mourir a l'ancien soi.",
    isReversible: false,
    element: "Earth",
    deity: "Odin",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Eihwaz. Le poeme islandais non plus. Le poeme anglo-saxon dit : « L'if est un arbre a l'ecorce rude, dur et ancre fermement dans la terre, gardien du feu, soutenu par ses racines, une joie sur le domaine. » Ce poeme souligne la resilience de l'if — dur, ancre, gardien du feu (son bois est excellent combustible). L'absence dans les poemes scandinaves peut refleter un tabou lie au caractere sacre et mortuaire de cet arbre, plante dans les cimetieres nordiques.",
    correspondences: {
      element: "Earth",
      season: "Winter-Spring",
      color: "Dark Green",
      planet: "Saturn",
      tarotArcana: "Death (XIII)",
      tree: "Yew (If)",
      herb: "Mandrake (Mandragore)",
      gemstone: "Smoky Quartz (Quartz fume)",
    },
  },

  13: {
    number: 13,
    name: "Perthro",
    glyph: "\u16C8",
    phoneticValue: "p",
    aettNumber: 2,
    meaning:
      "Coupe a des, mystere, hasard, destin, matrice, secret. Perthro est la rune la plus enigmatique du Futhark — sa signification exacte est debattue. L'interpretation la plus repandue est celle de la coupe a des (peorth), le contenant d'ou jaillissent les lots du destin. Elle represente le mystere fondamental de l'existence, la part d'inconnaissable qui persiste au coeur de toute chose. Perthro est liee aux Nornes et au Wyrd (destin), a la matrice cosmique d'ou emerge la realite. Elle gouverne les jeux de hasard, les mysteres occultes, les secrets enfouis, la memoire ancestrale. Le consultant fait face a un mystere qui se devoile, a un secret sur le point d'etre revele, ou a une situation dont l'issue depend de forces cachees. Perthro invite a embrasser l'inconnu plutot qu'a le craindre — le des est deja lance, le sort est jete.",
    merkstaveMeaning:
      "Secret dangereux, addiction au jeu, refus d'affronter les mysteres, stagnation spirituelle. Le contenant est vide — les lots du destin refusent de tomber. Le consultant s'accroche a des certitudes face a l'inconnu, ou se perd dans l'obsession des mysteres sans en tirer d'enseignement. Addiction aux jeux de hasard, prises de risques inconsiderees. Les secrets reveles sont douloureux ou destructeurs. Le passe non resolu empoisonne le present.",
    isReversible: true,
    element: "Water",
    deity: "Frigg",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Perthro. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Le peorth est toujours jeu et rire parmi les audacieux, la ou les guerriers sont assis dans la salle de la biere, joyeusement ensemble. » Ce poeme associe Perthro au jeu dans l'ambiance chaleureuse de la salle des fetes — les guerriers lancent les des, boivent et rient. Le jeu est ici un acte social qui celebre le hasard comme force cosmique. L'absence totale dans les poemes scandinaves renforce le mystere de cette rune.",
    correspondences: {
      element: "Water",
      season: "Autumn-Winter",
      color: "Black",
      planet: "Saturn",
      tarotArcana: "The High Priestess (II)",
      tree: "Beech (Hetre)",
      herb: "Aconite (Aconit)",
      gemstone: "Aquamarine (Aigue-marine)",
    },
  },

  14: {
    number: 14,
    name: "Algiz",
    glyph: "\u16C9",
    phoneticValue: "z",
    aettNumber: 2,
    meaning:
      "Protection, defense, sanctuaire, connexion divine, elk-sedge. Algiz est la rune de la protection supreme, le bouclier divin contre les forces hostiles. Son nom fait reference au elk-sedge (carex), une herbe coupante qui protege naturellement son territoire, ou au elk (elan) dont les bois evoquent la forme de la rune dressee vers le ciel. Algiz represente la connexion entre l'humain et le divin, les bras leves en priere ou en invocation. Elle est associee a Heimdall, le gardien du pont Bifrost qui veille sur Asgard. Algiz indique un temps de protection, de securite, de connexion spirituelle renforcee. Le consultant est protege par des forces superieures — ou est appele a devenir lui-meme protecteur. Cette rune invite a developper l'instinct de vigilance, la capacite a sentir le danger avant qu'il ne se manifeste, comme Heimdall qui entend l'herbe pousser.",
    merkstaveMeaning:
      "Vulnerabilite, protection defaillante, faux sentiment de securite, deconnexion du divin. Le bouclier est brise, les defenses tombent. Le consultant est expose a des dangers qu'il ne percoit pas, ou se sent abandonne par les forces protectrices. Danger de manipulation par ceux qui pretendent offrir protection. Perte de la connexion spirituelle, sentiment d'abandon cosmique. La vigilance se transforme en paranoia ou, au contraire, en insouciance dangereuse.",
    isReversible: true,
    element: "Air",
    deity: "Heimdall",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Algiz. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Le elk-sedge a sa demeure le plus souvent dans les marais ; il croit dans l'eau et blesse grievement, tachant de sang tout guerrier qui le saisit. » Ce poeme decrit la plante protectrice par sa nature meme — elle n'a pas besoin d'etre brandie, sa seule existence repousse les intrus. La protection d'Algiz est ainsi : naturelle, inherente, automatique. L'herbe dans les marais est un gardien silencieux.",
    correspondences: {
      element: "Air",
      season: "Spring",
      color: "Gold",
      planet: "Moon",
      tarotArcana: "The Moon (XVIII)",
      tree: "Yew (If)",
      herb: "Sedge (Carex)",
      gemstone: "Amethyst (Amethyste)",
    },
  },

  15: {
    number: 15,
    name: "Sowilo",
    glyph: "\u16CA",
    phoneticValue: "s",
    aettNumber: 2,
    meaning:
      "Soleil, victoire, integrite, force vitale, lumiere supreme. Sowilo est la rune du soleil, la force lumineuse qui triomphe de toutes les tenebres. Elle cloture le second Aett par la victoire de la lumiere sur les forces chaotiques rencontrees depuis Hagalaz. Sowilo represente le soleil invincible (Sol Invictus), la roue solaire qui tourne sans jamais s'arreter, la force vitale qui anime tout ce qui vit. Elle est la rune de la volonte solaire, de la victoire certaine, de l'integrite du soi. Sowilo indique un temps de succes, de clarte, de sante rayonnante. Le consultant est aligne avec sa nature veritable, sa lumiere interieure brille sans obstacle. Cette rune est le guide (le soleil des navigateurs nordiques), la boussole interieure qui ne trompe jamais. Sowilo enseigne que la lumiere du soi veritable dissipe toute obscurite.",
    merkstaveMeaning:
      "Faux orgueil, eclat destructeur, epuisement vital, perte de direction. Le soleil brule au lieu d'eclairer — l'exces de lumiere aveugle autant que l'obscurite. Le consultant est consume par son propre feu, victime de son orgueil ou de son perfectionnisme. Perte du guide interieur, deconnexion de sa nature solaire. L'integrite est compromise par des compromissions successives. Retrait de la victoire, sentiment d'echec malgre les apparences de succes.",
    isReversible: false,
    element: "Fire",
    deity: "Sunna",
    description:
      "Le poeme norvegien dit : « Le soleil est la lumiere du monde ; je m'incline devant le decret divin. » Le poeme islandais : « Le soleil est le bouclier des nuages et rayon eclatant et destructeur de la glace. » Le poeme anglo-saxon : « Le soleil est toujours une joie dans les espoirs des marins, quand ils voyagent sur le bain des poissons, jusqu'a ce que le coursier des flots les mene a terre. » Les trois poemes celebrent le soleil comme guide et source de joie — la lumiere du monde (norvegien), le destructeur de la glace (islandais), l'espoir des navigateurs (anglo-saxon). Sowilo est la rune de l'orientation et de la certitude.",
    correspondences: {
      element: "Fire",
      season: "Summer",
      color: "Gold-White",
      planet: "Sun",
      tarotArcana: "The Sun (XIX)",
      tree: "Juniper (Genevrier)",
      herb: "Mistletoe (Gui)",
      gemstone: "Ruby (Rubis)",
    },
  },

  // =========================================================================
  // AETT 3 — TYR'S AETT (runes 16-23)
  // =========================================================================

  16: {
    number: 16,
    name: "Tiwaz",
    glyph: "\u16CF",
    phoneticValue: "t",
    aettNumber: 3,
    meaning:
      "Tyr, justice, honneur, sacrifice, loi, victoire par le droit. Tiwaz est la rune de Tyr, le dieu de la justice et du combat honorable, celui qui sacrifia sa main droite dans la gueule du loup Fenrir pour que les dieux puissent l'enchainer. Ce sacrifice volontaire pour le bien commun est le coeur de Tiwaz : la justice qui exige un sacrifice personnel, l'honneur qui coute mais qui eleve. Tiwaz represente la loi cosmique, l'ordre juste qui doit etre maintenu meme au prix du sang. Sa forme — une fleche pointee vers le ciel — symbolise la direction, la determination, le but. Tiwaz indique un temps ou la justice prevaut, ou les sacrifices necessaires doivent etre consentis, ou l'honneur exige des actes courageux. Le consultant est appele a agir avec rectitude, a defendre ce qui est juste meme si cela coute cher.",
    merkstaveMeaning:
      "Injustice, lachete, sacrifice inutile, defaite. La lance de Tyr est brisee, la justice est corrompue. Le consultant subit une injustice ou commet lui-meme une injustice par faiblesse. Les sacrifices consentis ne menent a rien, l'honneur est bafoue. Perte de conviction, abandon des principes sous la pression. Batailles perdues non par manque de force mais par manque de conviction. La loi du plus fort remplace la loi du plus juste.",
    isReversible: true,
    element: "Air",
    deity: "Tyr",
    description:
      "Le poeme norvegien dit : « Tyr est le dieu manchot ; le forgeron doit souvent souffler sur les braises. » Le poeme islandais : « Tyr est le dieu manchot et loup laisse du combat et roi du temple. » Le poeme anglo-saxon : « Tyr est une etoile guide ; elle garde bien la foi avec les princes ; elle est toujours en route au-dessus des brumes de la nuit et ne trompe jamais. » Les poemes scandinaves rappellent le sacrifice de Tyr (sa main donnee au loup), tandis que le poeme anglo-saxon transcende le mythe pour faire de Tyr une etoile polaire — un guide moral infaillible dans l'obscurite.",
    correspondences: {
      element: "Air",
      season: "Spring",
      color: "Bright Red",
      planet: "Mars",
      tarotArcana: "Justice (XI)",
      tree: "Oak (Chene)",
      herb: "Sage (Sauge)",
      gemstone: "Coral (Corail)",
    },
  },

  17: {
    number: 17,
    name: "Berkano",
    glyph: "\u16D2",
    phoneticValue: "b",
    aettNumber: 3,
    meaning:
      "Bouleau, naissance, croissance, fertilite, renouveau, maternite. Berkano est la rune du bouleau, le premier arbre a coloniser les terres apres le retrait des glaciers — l'arbre pionnier par excellence, symbole de renouveau et de commencement. Le bouleau est aussi associe aux rites de purification et de naissance dans toute l'Europe du Nord. Berkano represente la Grande Mere, le principe feminin nourrissier, la fertilite sous toutes ses formes : physique (grossesse, naissance), creative (projets naissants) et spirituelle (renaissance interieure). Elle indique un temps de commencement doux, de croissance progressive, de soins maternels. Le consultant vit une eclosion, quelque chose de neuf et de fragile qui demande de la tendresse et de la patience pour grandir. Berkano invite a cultiver avec amour, a proteger ce qui est encore tendre, a faire confiance au processus naturel de la croissance.",
    merkstaveMeaning:
      "Sterilite, croissance bloquee, problemes familiaux, negligence. Le bouleau ne bourgeonne pas — le printemps refuse de venir. Le consultant fait face a des difficultes de fertilite (au sens large), des projets qui ne germent pas, des relations familiales toxiques. La maternite est source de souffrance plutot que de joie. Refus de grandir, regression infantile. La terre est trop dure ou trop seche pour que la graine prenne racine.",
    isReversible: true,
    element: "Earth",
    deity: "Frigg",
    description:
      "Le poeme norvegien dit : « Le bouleau a les feuilles les plus vertes de toutes les branches ; Loki eut la chance de la tromperie. » Le poeme islandais : « Le bouleau est branche feuillue et petit arbre et bois jeune. » Le poeme anglo-saxon : « Le peuplier (beorc) ne porte pas de fruit ; pourtant sans semence il produit des rejets, car il est genere par ses feuilles. Belles sont ses branches et glorieusement parees, chargees haut, touchant le ciel. » Le poeme anglo-saxon offre la vision la plus riche : l'arbre qui se reproduit sans semence evoque la generation spontanee, le miracle de la vie qui surgit d'elle-meme.",
    correspondences: {
      element: "Earth",
      season: "Spring",
      color: "Green",
      planet: "Moon",
      tarotArcana: "The Empress (III)",
      tree: "Birch (Bouleau)",
      herb: "Lady's Mantle (Alchemille)",
      gemstone: "Moonstone (Pierre de lune)",
    },
  },

  18: {
    number: 18,
    name: "Ehwaz",
    glyph: "\u16D6",
    phoneticValue: "e",
    aettNumber: 3,
    meaning:
      "Cheval, mouvement, partenariat, confiance mutuelle, loyaute, voyage. Ehwaz est la rune du cheval, compagnon sacre du guerrier nordique. Le cheval dans la culture germanique n'est pas un simple moyen de transport — c'est un partenaire de combat, un confident, un reflet de l'ame de son cavalier. Le cheval d'Odin, Sleipnir aux huit jambes, voyage entre les mondes. Ehwaz represente le partenariat fonde sur la confiance absolue, le mouvement harmonieux de deux etres qui ne font qu'un. Elle indique un temps de progression rapide, de partenariat efficace, de voyages (physiques ou spirituels). Le consultant est appele a faire confiance a son partenaire, a avancer ensemble vers un objectif commun. Ehwaz enseigne que le mouvement veritable nait de la confiance mutuelle — le cavalier qui ne fait pas confiance a sa monture ne chevauche pas, il s'accroche.",
    merkstaveMeaning:
      "Trahison, partenariat brise, stagnation, voyage dangereux. Le cheval se cabre, le cavalier est jete a terre. La confiance est trahie, le partenariat se desintegre. Le consultant est bloque dans un mouvement qu'il ne peut plus controler ou prive du partenaire dont il a besoin. Voyages perturbes, deplacements retardes ou dangereux. La relation cavalier-cheval est rompue — independance forcee, solitude dans l'action.",
    isReversible: true,
    element: "Earth",
    deity: "Freyr",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Ehwaz. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Le cheval est une joie pour les princes devant les guerriers, un coursier fier de ses sabots, quand les heros riches en paroles echangent a son sujet, et il est toujours un reconfort pour les agites. » Ce poeme place le cheval au centre de la vie aristocratique : sujet de conversation entre nobles, source de fierte et de reconfort. Le cheval n'est pas un outil, c'est un etre de prestige qui eleve celui qui le monte.",
    correspondences: {
      element: "Earth",
      season: "Spring-Summer",
      color: "White",
      planet: "Mercury",
      tarotArcana: "The Lovers (VI)",
      tree: "Oak (Chene) / Ash (Frene)",
      herb: "Ragwort (Senecon)",
      gemstone: "Turquoise",
    },
  },

  19: {
    number: 19,
    name: "Mannaz",
    glyph: "\u16D7",
    phoneticValue: "m",
    aettNumber: 3,
    meaning:
      "Humanite, etre humain, intelligence, conscience de soi, interdependance. Mannaz est la rune de l'humanite — non pas un individu isole mais l'etre humain dans sa dimension sociale et cosmique. Son nom est apparente a l'allemand « Mensch » et au vieil anglais « mann » (etre humain, sans distinction de genre). Mannaz represente la conscience qui se reconnait elle-meme, l'intelligence qui observe et analyse, la capacite proprement humaine de se situer entre les dieux et les betes. Elle est liee a Heimdall sous son aspect d'ancetre de l'humanite (dans le Rigsthula, Heimdall engendre les trois classes sociales). Mannaz indique un temps de reflexion sur soi-meme, sur sa place dans la societe et dans le cosmos. Le consultant est invite a developper la conscience de soi, a reconnaitre son humanite avec ses forces et ses limites, et a cultiver les liens qui l'unissent a la communaute humaine.",
    merkstaveMeaning:
      "Isolement, misanthropie, aveuglement sur soi-meme, depression. L'humain se coupe de l'humanite, se replie sur un ego souffrant. Le consultant refuse de se voir tel qu'il est, projette ses ombres sur les autres, ou se retire du monde par desespoir ou dedain. Intelligence mise au service de la destruction ou de la manipulation. Crise identitaire profonde, perte du sens d'appartenance a la communaute humaine.",
    isReversible: true,
    element: "Air",
    deity: "Heimdall",
    description:
      "Le poeme norvegien dit : « L'homme est un accroissement de la poussiere ; grande est la griffe du faucon. » Le poeme islandais : « L'homme est joie de l'homme et accroissement de la terre et ornement des navires. » Le poeme anglo-saxon : « L'homme dans sa joie est cher a ses proches ; pourtant chacun doit trahir l'autre, car le Seigneur par son jugement confiera la pauvre chair a la terre. » Les poemes oscillent entre celebration de l'humanite (joie, ornement) et rappel de la mortalite. Le poeme anglo-saxon est le plus sombre : meme dans la joie, la mort attend.",
    correspondences: {
      element: "Air",
      season: "Autumn",
      color: "Deep Red",
      planet: "Jupiter",
      tarotArcana: "The Magician (I)",
      tree: "Holly (Houx)",
      herb: "Madder (Garance)",
      gemstone: "Garnet (Grenat)",
    },
  },

  20: {
    number: 20,
    name: "Laguz",
    glyph: "\u16DA",
    phoneticValue: "l",
    aettNumber: 3,
    meaning:
      "Eau, lac, mer, inconscient, intuition, flux vital. Laguz est la rune de l'eau sous toutes ses formes — le lac paisible, la riviere qui s'ecoule, la mer immense et redoutable. L'eau est l'element de l'inconscient, des emotions profondes, de l'intuition qui connait sans raisonner. Dans la mythologie nordique, la source d'Urd au pied d'Yggdrasil contient la sagesse du destin, et la mer est le domaine de Njord et d'Aegir. Laguz represente le flux vital qui traverse toute chose, le courant emotionnel qui porte ou submerge. Elle indique un temps d'immersion dans les emotions, de voyage interieur, de connexion avec l'intuition. Le consultant est invite a se laisser porter par le courant plutot qu'a lutter contre lui, a faire confiance a ses instincts, a plonger dans les profondeurs de son etre pour y trouver des reponses que la raison seule ne peut fournir.",
    merkstaveMeaning:
      "Submersion emotionnelle, peur, confusion, flux incontrolable. L'eau deborde, le lac se dechaine, la mer avale. Le consultant est submerge par ses emotions, incapable de distinguer l'intuition de l'illusion. Peurs irrationnelles, angoisses profondes, cauchemars. Le courant emporte au lieu de porter — le consultant n'a plus de prise sur le flux de sa vie. Addiction, dependance, dissolution des frontieres du soi dans l'emotion brute.",
    isReversible: true,
    element: "Water",
    deity: "Njord",
    description:
      "Le poeme norvegien dit : « Un torrent tombe d'un flanc de montagne ; mais les ornements sont en or. » Le poeme islandais : « L'eau est jaillissement du lac et grand geyser et terre des poissons. » Le poeme anglo-saxon : « L'eau semble interminable aux gens, si ils doivent s'aventurer sur un navire instable et les vagues de la mer les effraient grandement et le coursier de la mer ne repond pas a la bride. » Les trois poemes evoquent la puissance indomptable de l'eau — torrent, geyser, mer qui ne repond pas a la bride. Laguz enseigne le respect face aux forces qui nous depassent.",
    correspondences: {
      element: "Water",
      season: "Spring",
      color: "Deep Green-Blue",
      planet: "Moon",
      tarotArcana: "The Moon (XVIII)",
      tree: "Willow (Saule)",
      herb: "Leek (Poireau)",
      gemstone: "Pearl (Perle)",
    },
  },

  21: {
    number: 21,
    name: "Ingwaz",
    glyph: "\u16DC",
    phoneticValue: "ng",
    aettNumber: 3,
    meaning:
      "Ing, fertilite, gestation, potentiel, semence, accomplissement interne. Ingwaz est la rune d'Ing (Yngvi-Freyr), le dieu de la fertilite, de la paix et de la prosperite. Sa forme — un losange ou un noeud ferme — evoque le germe enferme dans la graine, le potentiel total contenu dans un espace clos. Ingwaz represente le moment sacre entre la conception et la naissance, la gestation silencieuse ou tout se prepare dans l'invisible. C'est la rune de l'energie potentielle accumulee avant la liberation. Le consultant est dans un temps de gestation : un projet, une relation, une transformation interieure murit en silence. Rien n'est encore visible exterieurement, mais le travail se fait dans les profondeurs. Ingwaz invite a la patience et a la confiance — la graine germe dans l'obscurite de la terre avant de percer vers la lumiere. Tout est en place, il suffit d'attendre le moment juste.",
    merkstaveMeaning:
      "Impuissance, sterilite, potentiel non realise, gestation interminable. La graine refuse de germer, le potentiel reste latent indefiniment. Le consultant est paralyse par l'attente, incapable de donner naissance a ce qui est en gestation. Sterilite creative, projets qui n'aboutissent jamais, energie accumulee qui stagne et se corrompt. L'accomplissement interne ne trouve pas de voie vers l'expression exterieure. Frustration profonde face a l'ecart entre ce qui est ressenti et ce qui est manifeste.",
    isReversible: false,
    element: "Earth",
    deity: "Freyr",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Ingwaz. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Ing fut d'abord vu par les hommes parmi les Danes de l'Est, jusqu'a ce qu'il s'en aille ensuite vers l'est sur les vagues ; son char le suivit ; ainsi les guerriers nommerent le heros. » Ce poeme evoque le depart mythique d'Ing vers l'Est (le retour du dieu de la fertilite vers sa terre d'origine). Le char qui le suit rappelle les processions rituelles du culte de Freyr, attestees par Tacite des le Ier siecle.",
    correspondences: {
      element: "Earth",
      season: "Spring",
      color: "Yellow-Green",
      planet: "Venus",
      tarotArcana: "Judgement (XX)",
      tree: "Apple (Pommier)",
      herb: "Self-Heal (Brunelle)",
      gemstone: "Amber (Ambre)",
    },
  },

  22: {
    number: 22,
    name: "Dagaz",
    glyph: "\u16DE",
    phoneticValue: "d",
    aettNumber: 3,
    meaning:
      "Jour, aube, percee, transformation, eveil, equilibre des oppositions. Dagaz est la rune de l'aube, le moment precis ou la nuit cede la place au jour — la percee de la lumiere a travers l'obscurite. Sa forme de sablier ou de papillon symbolise la transformation complete, le point de basculement ou les contraires se rencontrent et se transcendent. Dagaz represente l'eveil, la prise de conscience soudaine, le moment « eureka » ou tout devient clair. Elle est la rune de la synthese des oppositions : nuit et jour, ombre et lumiere, yin et yang se rejoignent dans l'instant de l'aube. Dagaz indique un temps de percee, de transformation radicale mais harmonieuse, de passage d'un etat a un autre. Le consultant vit un eveil, une illumination, une comprehension soudaine qui change tout. Dagaz est la rune de l'espoir — aussi sombre que soit la nuit, l'aube viendra.",
    merkstaveMeaning:
      "Aveuglement, fin d'un cycle sans renouveau, crepuscule, confusion entre fin et commencement. L'aube ne vient pas — la nuit se prolonge. Le consultant est dans le crepuscule plutot qu'a l'aube, un cycle s'acheve sans que le suivant commence. Confusion, perte de reperes temporels, incapacite a distinguer le debut de la fin. La transformation echoue, le papillon reste chrysalide. L'eveil est repousse par la peur de ce qu'il revelera.",
    isReversible: false,
    element: "Fire",
    deity: "Odin",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Dagaz. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Le jour est l'envoi du Seigneur, cher aux hommes, la lumiere glorieuse du Createur, source de joie et d'esperance pour les riches et les pauvres, utile a tous. » Ce poeme celebre le jour comme don divin universel — la lumiere qui ne fait pas de distinction sociale. L'absence dans les poemes scandinaves est surprenante pour une rune aussi fondamentale, et peut refleter des variations regionales dans l'ordre du Futhark.",
    correspondences: {
      element: "Fire",
      season: "Summer",
      color: "Light Yellow",
      planet: "Sun",
      tarotArcana: "Temperance (XIV)",
      tree: "Spruce (Epicea)",
      herb: "Clary Sage (Sauge sclaree)",
      gemstone: "Chrysolite (Chrysolithe)",
    },
  },

  23: {
    number: 23,
    name: "Othala",
    glyph: "\u16DF",
    phoneticValue: "o",
    aettNumber: 3,
    meaning:
      "Heritage, terre ancestrale, propriete, lignee, tradition, patrie. Othala est la rune de l'heritage ancestral, la terre des ancetres transmise de generation en generation. Le concept d'odal (propriete allodiale) dans le droit germanique designait la terre possedee de plein droit, libre de toute suzerainete, par une famille depuis des temps immmemoriaux. Othala represente tout ce qui est herite — non seulement la terre et les biens, mais aussi les traits de caractere, la sagesse, les traditions, le sang, l'identite profonde forgee par la lignee. Elle cloture le Futhark en ramenant le consultant a ses racines, en bouclant le cycle qui avait commence avec Fehu (richesse mobile) par la richesse enracinee. Othala indique un temps de connexion aux ancetres, de retour aux sources, de consolidation de l'heritage familial. Le consultant est invite a honorer ses racines et a transmettre ce qu'il a recu.",
    merkstaveMeaning:
      "Deracinement, exil, perte d'heritage, rupture avec la lignee. La terre ancestrale est perdue, les racines arrachees. Le consultant est coupe de ses origines, prive de son heritage materiel ou spirituel. Conflits d'heritage, querelles familiales autour des biens. Sentiment de ne pas appartenir, d'etre un etranger partout. Les traditions familiales sont rompues, la transmission interrompue. Le consultant doit reconstruire son identite sans le soutien de ses racines.",
    isReversible: true,
    element: "Earth",
    deity: "Odin",
    description:
      "Le poeme norvegien ne contient pas d'entree pour Othala. Le poeme islandais non plus. Le poeme anglo-saxon dit : « Le domaine est tres cher a tout homme, s'il peut y jouir dans sa maison de ce qui est juste et convenable, en prosperite continue. » Ce poeme celebre la possession paisible de la terre et du foyer — le bonheur simple de vivre sur sa propre terre en paix. Othala est la rune de l'enracinement, du sentiment d'etre chez soi dans le monde. L'absence dans les poemes scandinaves peut refleter la suppression de cette rune dans les Futharks scandinaves posterieurs (le Younger Futhark n'a que 16 runes).",
    correspondences: {
      element: "Earth",
      season: "Winter",
      color: "Deep Yellow-Brown",
      planet: "Moon",
      tarotArcana: "The Moon (XVIII)",
      tree: "Hawthorn (Aubepine)",
      herb: "Clover (Trefle)",
      gemstone: "Diamond (Diamant)",
    },
  },
} as const satisfies Record<number, Rune>;
