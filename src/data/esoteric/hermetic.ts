/**
 * Hermetic Principles — 7 Universal Laws
 *
 * Based on The Kybalion (1908, "Three Initiates"), with deep commentary
 * drawing from the Corpus Hermeticum (1st–3rd c. CE), the Tabula
 * Smaragdina, and the broader Western esoteric tradition.
 *
 * Each principle is mapped to a classical planet, its associated metal,
 * and the corresponding day of the week — following the traditional
 * planetary order of Chaldean astrology.
 */

import type { HermeticPrinciple } from "./types";

export const HERMETIC_PRINCIPLES: Record<number, HermeticPrinciple> = {
  1: {
    number: 1,
    name: "Mentalism",
    axiom: "The All is Mind; the Universe is Mental",
    meaning:
      "Le Principe du Mentalisme etablit que la realite sous-jacente de l'univers est de nature mentale. Le Tout — la realite infinie, eternelle et inconnaissable qui sous-tend toute manifestation — est Esprit. L'univers est une creation mentale du Tout, maintenue dans l'Esprit du Tout. Ce principe explique la veritable nature de l'energie, du pouvoir et de la matiere, montrant qu'ils sont tous subordonnes a l'Esprit. A travers la comprehension de ce principe, l'adepte apprend que l'univers peut etre compris et influence par l'usage de l'Esprit. Tous les phenomenes du monde materiel sont des pensees au sein de l'esprit infini. La conscience n'est pas une propriete emergente de la matiere mais le substrat fondamental dont la matiere nait. Le monde physique est une projection de l'Esprit, tout comme un reve est projete par la conscience endormie. Cela ne signifie pas que l'univers est illusoire — il est bien reel en tant que creation mentale — mais sa nature ultime est mentale, non materielle. L'adepte qui saisit ce principe possede la cle maitresse de la philosophie hermetique.",
    deepCommentary:
      "Dans le Corpus Hermeticum (Tractate I, Poimandres), Hermes Trismegiste recoit la revelation que « toutes choses sont Une, et cette Unite est Esprit ». Le Nous (Esprit Divin) cree par la pensee, et le cosmos est la pensee vivante de Dieu. La Tabula Smaragdina ouvre sur « Ce qui est en haut est comme ce qui est en bas » mais implique que le medium fondamental par lequel le haut et le bas communiquent est l'Esprit lui-meme. L'Asclepius (Tractate XVI) decrit le cosmos comme « l'Esprit du Createur manifeste ». Ce concept anticipe la philosophie idealiste (Berkeley, Hegel) et resonne avec les interpretations modernes de la mecanique quantique — l'univers participatif de Wheeler : « It from Bit ».",
    historicalContext:
      "Le concept d'esprit cosmique apparait dans les plus anciens textes hermetiques attribues a Hermes Trismegiste (Ier-IIIe siecle, Alexandrie). Le Kybalion (1908, attribue aux « Trois Inities », probablement William Walker Atkinson) codifia cette idee comme premier des sept principes. L'idee trouve des paralleles dans la philosophie hindoue (Brahman comme conscience cosmique), l'idealisme bouddhiste (ecole Yogacara), et le neoplatonisme (emanation de l'Un/Nous chez Plotin). Dans la tradition esoterique occidentale, elle fut transmise par les traductions latines de Marsilio Ficin (1463) du Corpus Hermeticum pour Cosme de Medicis, qui declencherent la renaissance hermetique.",
    correspondences: {
      planet: "Mercury",
      metal: "Quicksilver",
      dayOfWeek: "Wednesday",
      alchemicalOperation: "Distillation",
      color: "Orange",
      chakra: "Vishuddha (Throat)",
      sefirah: "Hod",
    },
  },
  2: {
    number: 2,
    name: "Correspondence",
    axiom: "As above, so below; as below, so above",
    meaning:
      "Le Principe de Correspondance revele que les memes lois et motifs operent a tous les niveaux de l'existence — du plan physique au plan mental, du microcosme au macrocosme. Cette maxime, la plus celebre de la tradition hermetique, affirme qu'il existe une harmonie, un accord et une correspondance entre les differents plans de manifestation. Comprendre ce principe permet a l'adepte de resoudre de nombreux paradoxes et secrets caches de la Nature. En observant le connu, on peut inferer l'inconnu. La structure de l'atome reflette celle du systeme solaire ; les cycles de la respiration refletent les marees oceaniques ; les motifs de la croissance d'un arbre refletent le reseau des rivières. Chaque niveau de realite est un miroir de tous les autres. Ce principe est le fondement de l'astrologie (les astres refletent les evenements terrestres), de la lecture divinatoire (le microcosme du tirage reflette le macrocosme de la situation), et de toute science des correspondances. L'adepte apprend a naviguer entre les plans en reconnaissant les motifs recurrents qui relient le tout.",
    deepCommentary:
      "La formule « Ce qui est en haut est comme ce qui est en bas, et ce qui est en bas est comme ce qui est en haut, pour accomplir les miracles de la Chose Unique » est la deuxieme ligne de la Tabula Smaragdina, le texte fondateur de l'alchimie attribue a Hermes Trismegiste. Dans le Corpus Hermeticum (Tractate XI, « Mind unto Hermes »), la correspondance entre macrocosme et microcosme est explicitee : l'homme est un petit monde qui reflette le grand monde, et vice versa. Ce principe est la base theorique de toute magie sympathique et de la doctrine des signatures (Paracelse, XVIe s.), selon laquelle l'apparence des plantes revele leurs vertus medicinales par correspondance avec les organes qu'elles soignent.",
    historicalContext:
      "La Tabula Smaragdina (Table d'Emeraude) est un texte court, probablement compose en arabe au VIe-VIIIe siecle, traduit en latin au XIIe siecle par Hugo de Santalla. La formule « As above, so below » traversa toute la tradition alchimique medievale, fut reprise par les Rose-Croix (XVIIe s.), la Golden Dawn (XIXe s.) et demeure le principe le plus universellement cite de l'hermetisme. Robert Fludd (1574-1637) developpa une cosmologie complete basee sur ce principe, illustrant les correspondances entre musique, anatomie, astrologie et alchimie dans son Utriusque Cosmi Historia.",
    correspondences: {
      planet: "Moon",
      metal: "Silver",
      dayOfWeek: "Monday",
      alchemicalOperation: "Dissolution",
      color: "Violet",
      chakra: "Ajna (Third Eye)",
      sefirah: "Yesod",
    },
  },
  3: {
    number: 3,
    name: "Vibration",
    axiom: "Nothing rests; everything moves; everything vibrates",
    meaning:
      "Le Principe de Vibration revele que rien dans l'univers n'est immobile — tout est en mouvement perpetuel, tout vibre. Depuis la plus haute manifestation de l'Esprit pur jusqu'a la forme la plus dense de matiere, tout vibre a des frequences differentes. Plus la vibration est elevee, plus la manifestation est proche de l'Esprit ; plus elle est basse, plus elle se rapproche de la matiere grossiere. L'Esprit vibre a une frequence si infinie qu'il semble en repos absolu, de meme qu'une roue tournant a vitesse extreme semble immobile. La matiere, a l'autre extremite, vibre si lentement qu'elle parait inerte. Entre ces deux poles existe une echelle infinie de vibrations. Ce principe explique les differences entre les manifestations de matiere, d'energie, de mental et d'esprit — elles ne different que par leur taux vibratoire. Celui qui comprend ce principe peut modifier son propre etat vibratoire et celui de son environnement, elevant sa conscience vers des plans superieurs par la maitrise de la vibration mentale.",
    deepCommentary:
      "Dans le Corpus Hermeticum (Tractate III, « The Sacred Sermon »), la creation est decrite comme un acte vibratoire — la Parole divine qui met l'univers en mouvement. La Tabula Smaragdina evoque « la force forte de toute force » qui « penetre toute chose subtile et traverse toute chose solide », decrivant implicitement la vibration comme force creative universelle. Le concept hermetique de vibration anticipe remarquablement la physique moderne : la theorie quantique des champs decrit toute matiere comme des excitations vibratoires de champs fondamentaux. La theorie des cordes pousse cette analogie plus loin, proposant que les particules fondamentales sont des modes vibratoires de cordes unidimensionnelles — l'univers est litteralement fait de vibrations.",
    historicalContext:
      "L'idee que le son et la vibration sont a l'origine de la creation se retrouve dans de nombreuses traditions : le Verbe (Logos) chretien, le Om hindou, le Hu soufi. Pythagore (VIe s. av. J.-C.) decouvrit les rapports mathematiques de l'harmonie musicale et postula une « musique des spheres » — les planetes emettant des frequences en proportions harmoniques. Robert Fludd et Athanasius Kircher (XVIIe s.) developperent cette idee en systemes de correspondances vibratoires entre musique, couleurs et planetes. Ernst Chladni (1787) demontra experimentalement que la vibration cree des motifs geometriques ordonnes (figures de Chladni), confirmant le lien hermetique entre vibration et forme.",
    correspondences: {
      planet: "Sun",
      metal: "Gold",
      dayOfWeek: "Sunday",
      alchemicalOperation: "Calcination",
      color: "Yellow",
      chakra: "Manipura (Solar Plexus)",
      sefirah: "Tiferet",
    },
  },
  4: {
    number: 4,
    name: "Polarity",
    axiom: "Everything is dual; opposites are identical in nature, but different in degree",
    meaning:
      "Le Principe de Polarite revele que tout est double, que les opposes sont de meme nature mais different en degre. Le chaud et le froid ne sont que deux extremites de la meme chose — la temperature — avec de nombreux degres entre eux. La lumiere et l'obscurite sont les poles d'un meme phenomene. Le grand et le petit, le dur et le mou, le positif et le negatif, l'amour et la haine — tous sont identiques en nature, ne differant que par le degre de leur manifestation. Ou finit l'obscurite et ou commence la lumiere ? La difference entre les opposes n'est jamais absolue mais toujours relative. Ce principe explique les paradoxes apparents qui ont deconcerte les penseurs de tous les temps. L'adepte hermetique comprend l'art de transmuter la polarite — transformer la haine en amour, la peur en courage, non pas en supprimant un pole mais en deplacant la conscience le long de l'echelle des degres. C'est le fondement de l'alchimie mentale : on ne detruit pas un etat negatif, on eleve sa vibration vers le pole positif de la meme qualite.",
    deepCommentary:
      "Dans le Corpus Hermeticum (Tractate XI), la nature polaire de la manifestation est enseignee : « Dans l'univers il n'y a ni mort ni destruction ; la vie est changement, le changement est dualite. » La Tabula Smaragdina exprime ce principe dans sa structure meme : les operations ascendantes et descendantes (« Il monte de la Terre au Ciel et redescend en Terre ») decrivent le mouvement perpetuel entre les poles. Le symbole du caducee d'Hermes — deux serpents enroules autour d'un axe central — represente la polarite reconciliee par la conscience. En alchimie, la Conjunctio Oppositorum (union des opposes) est l'operation centrale du Grand OEuvre : Soufre (actif, masculin) et Mercure (passif, feminin) doivent etre unis pour produire la Pierre Philosophale.",
    historicalContext:
      "La dualite fondamentale est au coeur de presque toutes les traditions : Yin-Yang taoiste, Purusha-Prakriti dans le Samkhya hindou, les colonnes Jakin et Boaz du Temple de Salomon dans la Kabbale. Heraclite (VIe s. av. J.-C.) enseignait l'unite des opposes (enantiodromia). Dans la tradition hermetique, Giordano Bruno (1548-1600) developpa une philosophie de la coincidentia oppositorum (coincidence des contraires), s'appuyant sur Nicolas de Cuse et les textes hermetiques. C.G. Jung reprit ce concept au XXe siecle comme fondement de son processus d'individuation — l'integration des opposes psychiques (ombre/persona, anima/animus).",
    correspondences: {
      planet: "Mars",
      metal: "Iron",
      dayOfWeek: "Tuesday",
      alchemicalOperation: "Separation",
      color: "Red",
      chakra: "Svadhisthana (Sacral)",
      sefirah: "Geburah",
    },
  },
  5: {
    number: 5,
    name: "Rhythm",
    axiom: "Everything flows, out and in; everything has its tides; all things rise and fall",
    meaning:
      "Le Principe de Rythme revele que dans tout il y a un mouvement mesure, un flux et un reflux, un balancement pendulaire. Ce principe se manifeste dans la creation et la destruction des mondes, dans l'essor et le declin des nations, dans la vie de toutes choses, et dans les etats mentaux de l'etre humain. L'univers entier pulse selon des rythmes cosmiques. Le pendule oscille toujours : ce qui se balance a droite se balancera a gauche ; ce qui monte doit redescendre. Les saisons suivent un cycle immuable ; les marees montent et descendent ; les civilisations naissent, prosperent et declinent. Dans la vie humaine, les periodes d'enthousiasme sont suivies de periodes de depression, la joie fait place a la tristesse. L'adepte hermetique ne peut annuler ce principe mais apprend a l'utiliser plutot que d'en etre l'esclave. Par la loi de Neutralisation, l'adepte s'eleve au-dessus du plan du pendule en se polarisant au point desire et en refusant de participer au balancement contraire. Il ne supprime pas le rythme — celui-ci continue d'operer — mais il se place au centre, au point d'equilibre, laissant le pendule passer sous lui.",
    deepCommentary:
      "Le Corpus Hermeticum (Tractate XII, « On the Common Mind ») enseigne que le mouvement de l'univers suit un ordre cyclique voulu par le Createur : « Les mouvements des corps celestes sont des retours ; le retour est un mouvement circulaire ; le mouvement circulaire est eternel. » La Tabula Smaragdina evoque le rythme par les operations alternees : « Il monte de la Terre au Ciel et redescend en Terre, recevant la force des choses superieures et inferieures. » En alchimie, la Solve et Coagula — dissoudre et coaguler — est l'expression operatoire du rythme : la matiere est alternativement dissoute et recristallisee, chaque cycle la purifiant davantage. Le Grand OEuvre entier est rythme par les quatre couleurs successives (Nigredo, Albedo, Citrinitas, Rubedo).",
    historicalContext:
      "Le concept de rythme cosmique est central dans la pensee stoicienne (l'Ekpyrosis — conflagration et renaissance cyclique du monde), dans le Kalpa hindou (les cycles cosmiques de Brahma), et dans la tradition maya (les cycles du calendrier long). Pythagore enseignait que les nombres et les proportions gouvernent les rythmes de l'univers. Dans la tradition hermetique medievale, les astrologues calculaient les « grandes conjonctions » planetaires comme marqueurs des cycles historiques — Ibn Khaldun (XIVe s.) et Abu Ma'shar (IXe s.) integrerent ces cycles dans leurs theories de l'histoire. Le concept moderne de biorhythmes, bien que scientifiquement controverse, derive de cette intuition hermetique du rythme universel.",
    correspondences: {
      planet: "Jupiter",
      metal: "Tin",
      dayOfWeek: "Thursday",
      alchemicalOperation: "Fermentation",
      color: "Blue",
      chakra: "Anahata (Heart)",
      sefirah: "Chesed",
    },
  },
  6: {
    number: 6,
    name: "Cause and Effect",
    axiom: "Every cause has its effect; every effect has its cause; everything happens according to Law",
    meaning:
      "Le Principe de Cause et Effet affirme que rien n'arrive par hasard, que le hasard n'est qu'un nom donne a une loi non reconnue. Chaque cause a son effet ; chaque effet a sa cause. Il existe de nombreux plans de causalite, mais rien n'echappe a la Loi. Le vulgaire est joue par la causalite, portant le poids des causes qu'il a mises en mouvement sans le savoir. Le sage, en revanche, apprend a se placer sur un plan causal superieur, devenant cause plutot qu'effet. L'adepte n'echappe pas a la causalite — c'est impossible — mais il apprend a jouer le jeu de la vie sur un echiquier superieur, dirigeant les causes plutot que de subir les effets. Ce principe est lie au concept de karma dans les traditions orientales, mais la tradition hermetique insiste sur la possibilite de s'elever au-dessus des plans causaux inferieurs par l'exercice de la volonte consciente. La causalite opere sur chaque plan — physique, mental, spirituel — et celui qui maitrise les causes sur le plan mental gouverne les effets sur le plan physique.",
    deepCommentary:
      "Le Corpus Hermeticum (Tractate XII) enseigne que la Providence divine est la cause premiere de toute chose, et que l'ordre cosmique est maintenu par la Necessite (Ananke) et le Destin (Heimarmene). Cependant, le Nous (l'Esprit divin en l'homme) peut s'elever au-dessus de l'Heimarmene — c'est la promesse de la gnose hermetique. La Tabula Smaragdina decrit une chaine causale descendante : le Soleil est le pere (cause active), la Lune la mere (cause receptive), le Vent porte l'oeuvre dans son ventre (medium causal), la Terre est sa nourrice (manifestation finale). Cette sequence decrit les niveaux de causalite du spirituel au materiel. En alchimie, la comprehension de la causalite est essentielle : chaque operation doit etre effectuee dans l'ordre correct, car les causes mal ordonnees produisent des effets corrompus.",
    historicalContext:
      "Le determinisme causal hermetique s'inscrit dans la continuite de la philosophie stoicienne (la chaine causale cosmique, le Logos ordonnateur). Le concept de « sympathie universelle » — l'idee que tout dans le cosmos est lie par des chaines causales invisibles — est formule par Posidonius (Ier s. av. J.-C.) et repris par toute la tradition hermetique. Proclus (Ve s.) developpa une hierarchie causale neoplatonicienne que Ficin intégra dans son hermetisme renaissance. Le concept de causalite hermetique influenca Leibniz (harmonie preetablie) et, par l'intermediaire de Swedenborg, le transcendantalisme americain (Emerson, Thoreau), formant la toile de fond intellectuelle du Kybalion.",
    correspondences: {
      planet: "Saturn",
      metal: "Lead",
      dayOfWeek: "Saturday",
      alchemicalOperation: "Coagulation",
      color: "Indigo",
      chakra: "Muladhara (Root)",
      sefirah: "Binah",
    },
  },
  7: {
    number: 7,
    name: "Gender",
    axiom: "Gender is in everything; everything has its Masculine and Feminine Principles",
    meaning:
      "Le Principe de Genre revele que le genre se manifeste sur tous les plans — physique, mental et spirituel. Sur le plan physique, il se manifeste comme sexe ; sur les plans superieurs, il prend des formes plus subtiles mais le principe reste le meme. Aucune creation, physique, mentale ou spirituelle, n'est possible sans ce principe. Le masculin et le feminin ne sont pas des categories biologiques mais des forces cosmiques complementaires. Le principe masculin correspond a la volonte directive, la force active, l'impulsion creatrice. Le principe feminin correspond a l'imagination receptive, la force generatrice, la capacite de faire naitre les formes. Ni l'un ni l'autre n'est superieur ; les deux sont necessaires a toute creation. L'adepte apprend a equilibrer ces deux principes en lui-meme. Quand le masculin et le feminin cooperent harmonieusement, la creation est parfaite. Ce principe se manifeste dans la relation entre la volonte consciente (masculin) et l'imagination subconsciente (feminin), entre l'analyse (masculin) et l'intuition (feminin), entre le yang et le yin. L'union sacree des deux principes est le secret du Grand OEuvre alchimique.",
    deepCommentary:
      "Dans le Corpus Hermeticum (Tractate I, Poimandres), l'Anthropos originel est androgyne — unissant masculin et feminin avant la chute dans la matiere. La separation des genres est presentee comme un eloignement de l'unite divine, et le retour a l'androgynie spirituelle comme le but de l'initiation hermetique. La Tabula Smaragdina encode ce principe dans la relation Soleil (pere, masculin) / Lune (mere, feminin), dont l'union produit la Pierre Philosophale. En alchimie, le Rebis (l'etre double) ou l'Androgyne alchimique est l'image ultime du Grand OEuvre accompli : Soufre et Mercure, Roi et Reine, Sol et Luna reunis dans la Conjunctio. L'Asclepius (Tractate XVII) affirme que Dieu lui-meme est bisexue, etant a la fois pere et mere de toutes choses.",
    historicalContext:
      "Le concept de polarite masculine-feminine cosmique traverse toutes les traditions : Shiva-Shakti dans le tantrisme hindou, Yin-Yang dans le taoisme, les Syzygies gnostiques (couples d'eons), Jakin-Boaz dans la Kabbale. Dans la tradition hermetique, le concept est explicite des le Poimandres (Ier s.) et se developpe a travers l'alchimie medievale avec les noces chimiques du Roi Rouge et de la Reine Blanche. L'Ars Magna de Raymond Lulle (XIIIe s.) utilise les principes masculin et feminin comme categories fondamentales de sa combinatoire. Jakob Boehme (XVIIe s.) developpa une theosophie entiere basee sur la polarite genree du divin (la Sophia feminine). C.G. Jung reconnut dans l'alchimie la projection du processus d'individuation, avec l'anima/animus comme manifestation psychique de ce principe hermetique.",
    correspondences: {
      planet: "Venus",
      metal: "Copper",
      dayOfWeek: "Friday",
      alchemicalOperation: "Conjunction",
      color: "Green",
      chakra: "Sahasrara (Crown)",
      sefirah: "Chokmah",
    },
  },
} as const satisfies Record<number, HermeticPrinciple>;
