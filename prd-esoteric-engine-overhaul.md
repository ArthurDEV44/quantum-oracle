[PRD]
# PRD: Refonte du Moteur Esoterique — Traduction Directe du Signal Quantique

## Overview

Quantum Oracle interprete actuellement les octets QRNG via des operations `sum % N` (modulo arithmetique) qui detruisent la structure binaire du signal quantique. Seul le Yi Jing exploite reellement les bits (extraction du LSB). Les donnees esoteriques sont legeres (30-60 mots par entree) et sans correspondances croisees entre traditions.

Ce PRD decrit la refonte complete du systeme d'interpretation esoterique :

1. **Enrichissement des fichiers TypeScript statiques** — Toutes les traditions (existantes et nouvelles) dans `src/data/esoteric/` avec des donnees profondes (contexte historique, textes sources, correspondances), type-safe et a 0ms d'acces
2. **Mapping bit-par-bit natif** — Chaque tradition est adressee par une tranche de bits a son echelle native (8 bits → 256 Odu Ifa, 6 bits → 64 hexagrammes, 4 bits → 16 figures geomantiques), sans modulo destructeur
3. **6 nouvelles traditions** — Ifa (256 Odu), Geomancie arabe, Elder Futhark, Alchimie, Chakras/Solfege, Gematria hebraique
4. **16 octets QRNG** — Passage de 8 a 16 octets pour adresser 13 traditions sans chevauchement
5. **Prompts LLM adaptatifs** — Prompt builder avec convergences croisees priorisees, optimise pour Mistral Small API
6. **Reorganisation complete de l'UI** — Nouveaux onglets refletant l'architecture en couches de lecture

### Choix architectural : TypeScript statique (pas de migration en base)

Les donnees esoteriques restent dans des fichiers TypeScript (`src/data/esoteric/`) plutot que d'etre migrees en base PostgreSQL. Justification :
- **Performance** : import TS = 0ms vs query Neon HTTP = 5-20ms (warm) a 500ms-2s (cold start apres scale-to-zero)
- **Fiabilite** : aucune dependance reseau, pas de cold start, pas d'epuisement de pool de connexions
- **Type safety** : verification au compile-time via `as const` et types `Record<>`, autocompletion IDE
- **Simplicite** : pas de migrations, pas de scripts de seed, pas de cache LRU a gerer en environnement serverless (chaque instance Vercel a son propre cache isole, purge a chaque deploiement)
- **Co-location** : les fonctions de calcul (`calculateHexagram`, etc.) vivent a cote des donnees qu'elles utilisent
- **Volume** : ~500 entrees (256 Odu + ~250 autres) = quelques centaines de Ko de JS — negligeable

Les donnees esoteriques sont veritablement statiques (les 64 hexagrammes du Yi Jing n'ont pas change depuis 3000 ans). La base PostgreSQL Neon reste utilisee pour les donnees transactionnelles (users, consultations, subscriptions, daily_usage).

### Cadre philosophique

Le QRNG ne genere pas du hasard — il deplie (*unfolds*) un fragment de l'ordre implique (David Bohm) dans l'ordre explicite. Chaque bit est un effondrement de superposition quantique. L'ensemble des 16 octets forme un instantane de l'etat de l'univers au moment precis ou le consultant pose sa question. C'est l'univers participatif de Wheeler : *"It from Bit"*.

Les systemes de divination binaire existent depuis des millenaires et correspondent exactement aux puissances de 2 :
- Geomancie arabe (IXe-Xe s.) : 4 bits → 16 figures
- Yi Jing (~1000 av. J.-C.) : 6 bits → 64 hexagrammes
- Ifa Yoruba (~500 av. J.-C.) : 8 bits → 256 Odu

Ces trois systemes comptent parmi les plus anciens systemes de divination binaire connus. Le QRNG ne simule pas la divination — il **est** la divination a l'echelle fondamentale de la realite.

---

## Phases de livraison

Le PRD est decoupe en 3 phases pour reduire le risque :

### Phase 1 : Moteur + Traditions existantes enrichies
US-001, US-002, US-003, US-004, US-005, US-006, US-013, US-014
- Architecture TypeScript des types et fichiers de donnees
- Module de lookup pour toutes les traditions
- Enrichissement des 7 traditions existantes (Yi Jing, Tarot, Kabbale, Hermetisme, Elements, Geometrie Sacree, Synthese)
- Passage a 16 octets QRNG
- Nouveau moteur bit-par-bit natif

### Phase 2 : Nouvelles traditions + Correspondances + Prompts
US-007, US-008, US-009, US-010, US-011, US-012, US-015, US-016
- 6 nouvelles traditions (Ifa, Geomancie, Runes, Alchimie, Chakras/Solfege, Gematria)
- Systeme de correspondances croisees
- Prompts LLM adaptatifs pour Mistral Small API

### Phase 3 : UI
US-017, US-018, US-019, US-020
- Route API enrichie
- 5 nouveaux onglets UI
- Composants visuels des nouvelles traditions
- Script de validation des donnees

---

## Goals

- Etablir un mapping structurellement motive entre bits quantiques et traditions esoteriques (pas de modulo arbitraire)
- Enrichir les 7 traditions existantes avec des descriptions profondes (150-300 mots), contexte historique/mythologique, textes sources et correspondances croisees
- Integrer 6 nouvelles traditions a mappings binaires natifs (Ifa, Geomancie, Runes, Alchimie, Chakras/Solfege, Gematria)
- Enrichir les fichiers TypeScript dans `src/data/esoteric/` avec des types stricts, correspondances croisees et donnees profondes
- Passer de 8 a 16 octets QRNG pour adresser 13 traditions sans chevauchement de bits
- Mettre a jour les prompts LLM (Mistral Small API) avec un prompt builder exploitant la richesse des nouvelles donnees
- Reorganiser l'UI en onglets refletant la nouvelle architecture en couches de lecture

---

## Quality Gates

Ces commandes doivent passer pour chaque user story :
- `bun run typecheck` — Verification des types TypeScript
- `bun run lint` — Linting ESLint
- `bun run build` — Build Next.js complet

---

## User Stories

### US-001: Concevoir l'architecture TypeScript des types et fichiers de donnees esoteriques

**Description:** En tant que developpeur, je veux une architecture de types TypeScript stricte pour les 13 traditions esoteriques afin que toutes les donnees soient type-safe, a 0ms d'acces, et co-localisees avec les fonctions de calcul dans `src/data/esoteric/`.

**Acceptance Criteria:**
- [x] Type `Trigram` enrichi (8 entrees) : index (0-7), name, symbol, element, attribute, binaryRepr, description, correspondences
- [x] Type `Hexagram` enrichi (64 entrees) : number (1-64), name, symbol, upperTrigramIndex, lowerTrigramIndex, meaning, judgmentText, imageText, mutatingLines (array de 6 textes de ligne), correspondences
- [x] Type `TarotArcana` enrichi (22 entrees) : number (0-21), name, symbol, meaning, keywords (string[]), uprightMeaning, reversedMeaning, astrologicalSign, element, hebrewLetter, pathOnTree, description, symbolism
- [x] Type `Sefirah` enrichi (10 entrees) : number (1-10), name, hebrew, meaning, attribute, divineName, archangel, planet, color, element, description, correspondences
- [x] Type `KabbalahPath` cree (22 entrees) : number (1-22), hebrewLetter, letterName, fromSefirahNumber, toSefirahNumber, tarotArcanaNumber, meaning, zodiacOrPlanet, element, category (3 meres / 7 doubles / 12 simples), description
- [x] Type `HermeticPrinciple` enrichi (7 entrees) : number (1-7), name, axiom, meaning, deepCommentary, historicalContext, correspondences
- [x] Type `Element` enrichi (4 entrees) : name, symbol, qualities, direction, season, temperament, zodiacSigns (string[]), correspondences
- [x] Type `Odu` cree (256 entrees) : number (0-255), name, binarySignature (8 chars), meaning, proverbs (string[]), eseIfaVerses (string[]), orisha, prescriptions, interdictions, element, correspondences
- [x] Type `GeomancyFigure` cree (16 entrees) : number (0-15), nameArabic, nameLatin, binarySignature (4 chars), element, planet, zodiacSign, meaning, reversedMeaning, judgeRole, correspondences
- [x] Type `Rune` cree (24 entrees) : number (0-23), name, glyph, phoneticValue, aettNumber (1-3), meaning, merkstaveMeaning, isReversible (boolean), element, deity, description, correspondences
- [x] Type `AlchemyStage` cree (4 entrees) : number (0-3), name, latinName, color, planet, description, symbolism, correspondences
- [x] Type `AlchemyOperation` cree (7 entrees) : number (0-6), name, latinName, planet, description, stageNumber
- [x] Type `Chakra` cree (7 entrees) : number (0-6), nameSanskrit, nameFrench, location, color, element, mantra, solfegeFrequency, functionDesc, description, correspondences
- [x] Type `SolfegeFrequency` cree (9 entrees) : frequencyHz, name, digitalRoot, description, healingProperty
- [x] Type `HebrewLetter` cree (22 entrees) : number (1-22), letter, name, phoneticValue, numericalValue, meaning, pathNumber, category (mere / double / simple), elementOrPlanetOrZodiac, description
- [x] Tous les types exportes depuis `src/data/esoteric/types.ts`
- [ ] Toutes les donnees utilisent `as const satisfies Record<number, Type>` pour un maximum de type narrowing
- [x] Fichier index `src/data/esoteric/index.ts` re-exporte tous les types et donnees

---

### US-002: Creer le module de lookup pour les traditions esoteriques

**Description:** En tant que developpeur, je veux un module de lookup TypeScript qui fournit des fonctions d'acces aux donnees pour chaque tradition via imports statiques, afin que le moteur d'interpretation ait une API propre et typee pour lire les donnees a 0ms.

**Acceptance Criteria:**
- [x] Module `src/lib/esoteric-lookup.ts` cree
- [x] Fonction `getTrigramByIndex(index: number): Trigram` — lookup dans `TRIGRAMS[index]`
- [x] Fonction `getHexagramByNumber(number: number): Hexagram` — lookup dans `HEXAGRAMS[number]`
- [x] Fonction `getTarotArcana(number: number): TarotArcana` — lookup dans `MAJOR_ARCANA[number]`
- [x] Fonction `getSefirah(number: number): Sefirah` — lookup dans `SEFIROT[number]`
- [x] Fonction `getKabbalahPath(number: number): KabbalahPath` — lookup dans `KABBALAH_PATHS[number]`
- [x] Fonction `getHermeticPrinciple(number: number): HermeticPrinciple` — lookup dans `HERMETIC_PRINCIPLES[number]`
- [x] Fonction `getElement(name: string): Element` — lookup dans `ELEMENTS[name]`
- [x] Fonction `getOdu(number: number): Odu` — lookup dans `ODU[number]`
- [x] Fonction `getGeomancyFigure(number: number): GeomancyFigure` — lookup dans `GEOMANCY_FIGURES[number]`
- [x] Fonction `getRune(number: number): Rune` — lookup dans `ELDER_FUTHARK[number]`
- [x] Fonction `getAlchemyStage(number: number): AlchemyStage` — lookup dans `ALCHEMY_STAGES[number]`
- [x] Fonction `getAlchemyOperation(number: number): AlchemyOperation` — lookup dans `ALCHEMY_OPERATIONS[number]`
- [x] Fonction `getChakra(number: number): Chakra` — lookup dans `CHAKRAS[number]`
- [x] Fonction `getSolfegeFrequency(digitalRoot: number): SolfegeFrequency` — lookup par racine numerique
- [x] Fonction `getHebrewLetter(number: number): HebrewLetter` — lookup dans `HEBREW_LETTERS[number]`
- [x] Fonction `decomposeGematria(value: number): HebrewLetter[]` — decomposition gourmande d'un nombre (0-255) en somme de lettres hebraiques
- [x] Fonction `getReadingCorrespondences(reading: QuantumEsotericReading): Correspondences` — extrait les correspondances croisees et detecte les convergences
- [x] Toutes les fonctions sont synchrones (pas d'async, pas de DB, pas de cache)

---

### US-003: Enrichir les donnees Yi Jing

**Description:** En tant qu'utilisateur, je veux que les hexagrammes et trigrammes du Yi Jing contiennent des descriptions profondes, des textes du Jugement et de l'Image, et les 6 lignes mutantes pour chaque hexagramme, afin que l'interpretation soit riche et fidele a la tradition.

**Acceptance Criteria:**
- [x] 8 trigrammes dans `src/data/esoteric/iching.ts` enrichis avec : nom chinois + francais, symbole Unicode, element, attribut, direction, saison, partie du corps, animal, description detaillee (100+ mots)
- [x] 64 hexagrammes enrichis avec : nom chinois + francais, symbole Unicode, texte du Jugement (Tuan), texte de l'Image (Xiang), signification generale (150-200 mots)
- [x] Chaque hexagramme a 6 lignes mutantes (texte par ligne), chacune avec son sens propre quand elle mute
- [x] Les correspondances croisees sont renseignees : hexagramme → arcane du Tarot (via King Wen), hexagramme → element
- [x] Les donnees utilisent `as const satisfies Record<number, Hexagram>` pour le type checking

---

### US-004: Enrichir les donnees Tarot des Arcanes Majeurs

**Description:** En tant qu'utilisateur, je veux que les 22 arcanes majeurs contiennent une symbolique riche (sens droit/inverse, correspondances astrologiques, lettres hebraiques, chemins sur l'Arbre de Vie) afin que chaque arcane soit un portail de sagesse complet.

**Acceptance Criteria:**
- [x] 22 arcanes dans `src/data/esoteric/tarot.ts` enrichis avec : nom, symbole/emoji, sens droit (150-200 mots), sens inverse (100-150 mots), 5-7 mots-cles
- [x] Correspondances astrologiques renseignees pour chaque arcane (planete ou signe zodiacal)
- [x] Correspondance avec la lettre hebraique du chemin kabbalistique (tradition du Golden Dawn)
- [x] Element associe renseigne (Feu, Eau, Air, Terre ou combinaison)
- [x] Chemin sur l'Arbre de Vie reference (numero du chemin kabbalistique)
- [x] Description du symbolisme visuel de la carte (150+ mots, basee sur le Rider-Waite-Smith)
- [x] Les donnees utilisent `as const satisfies Record<number, TarotArcana>`

---

### US-005: Enrichir les donnees Kabbale (Sefirot + 22 Chemins)

**Description:** En tant qu'utilisateur, je veux que l'Arbre de Vie contienne les 10 Sefirot avec leurs attributs divins complets et les 22 chemins avec les correspondances du Sefer Yetzirah (lettres hebraiques, planetes, zodiac, elements), afin de pouvoir naviguer l'Arbre dans toute sa profondeur.

**Acceptance Criteria:**
- [x] 10 Sefirot dans `src/data/esoteric/kabbalah.ts` enrichis avec : nom hebreu + translitteration + francais, attribut divin, nom de Dieu associe, archange, planete/astre, couleur, element, position sur l'Arbre (pilier, monde), description detaillee (200+ mots)
- [x] 22 chemins dans `src/data/esoteric/kabbalah-paths.ts` avec : numero, lettre hebraique, nom de la lettre, numeros des sefirot de depart et d'arrivee, numero de l'arcane du Tarot associe, signe zodiacal / planete / element (selon le Sefer Yetzirah), categorie (3 meres, 7 doubles, 12 simples), description (150+ mots)
- [x] Les correspondances croisees Sefirot ↔ Planetes ↔ Arcanes sont coherentes avec la tradition du Golden Dawn

---

### US-006: Enrichir Hermetisme, Elements, Geometrie Sacree et Synthese

**Description:** En tant qu'utilisateur, je veux que les principes hermetiques, les elements classiques, la geometrie sacree et la synthese cosmique soient enrichis avec un contexte historique profond et des correspondances, afin de depasser les descriptions superficielles actuelles.

**Acceptance Criteria:**
- [x] 7 principes hermetiques dans `src/data/esoteric/hermetic.ts` enrichis avec : nom, axiome du Kybalion, signification (200+ mots), commentaire historique (reference au Corpus Hermeticum, Tabula Smaragdina), application pratique, correspondances (planete, metal, jour de la semaine)
- [x] 4 elements dans `src/data/esoteric/elements.ts` enrichis avec : nom, symbole (Unicode alchimique), qualites (chaud/froid, sec/humide), direction cardinale, saison, temperament (sanguin/colerique/melancolique/flegmatique), signes zodiacaux associes (3 par element), correspondances avec chakras, Sefirot et planetes
- [x] Constantes de geometrie sacree dans `src/data/esoteric/sacred-geometry.ts` enrichies : Phi, Fibonacci, Pi, racine de 2, nombre d'argent, avec signification mathematique et symbolique pour chaque constante
- [x] 12 tons cosmiques dans `src/data/esoteric/synthesis.ts` enrichis avec correspondance astrologique (12 signes), element, modalite (cardinal/fixe/mutable)

---

### US-007: Creer les 256 Odu d'Ifa (corpus complet)

**Description:** En tant qu'utilisateur, je veux que le systeme Ifa soit integre avec ses 256 Odu et leur corpus academique complet (versets Ese Ifa, proverbes, Orisha, prescriptions/interdictions), car c'est l'un des plus anciens systemes de divination binaire et le seul qui utilise exactement 8 bits — un mapping 1:1 parfait avec un octet QRNG.

**Note historique:** La datation standard place Ifa vers ~500 av. J.-C. (sources : Bascom, Abimbola). Le Yi Jing (~1000 av. J.-C.) est plus ancien par les datations conventionnelles. Ifa est neanmoins le systeme le plus complet en mapping 1:1 avec un octet (256 Odu = 2^8).

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/ifa.ts` cree avec 256 Odu : numero (0-255), nom Yoruba, signature binaire (8 caracteres, ex: "11111111" pour Eji Ogbe), rang hierarchique
- [x] Chaque Odu a une signification generale (150-200 mots)
- [x] Au minimum 2-3 proverbes Yoruba par Odu (avec traduction francaise)
- [x] Au minimum 1-2 versets Ese Ifa par Odu (resume narratif en francais, 100-200 mots chacun)
- [x] Orisha (divinite) patron associe a chaque Odu
- [x] Prescriptions (actions recommandees) et interdictions (tabous) pour chaque Odu
- [x] Element (Feu, Eau, Air, Terre) et correspondances croisees avec Yi Jing et Geomancie
- [x] Les 16 Odu Meji (principaux) ont un corpus plus fourni (5+ proverbes, 3+ versets)
- [ ] Les donnees utilisent `as const satisfies Record<number, Odu>`
- [x] Generation assistee par LLM a partir de sources de reference (Bascom, Abimbola, Fatunmbi), avec revue manuelle des 16 Odu Meji principaux

---

### US-008: Creer la Geomancie arabe (16 figures)

**Description:** En tant qu'utilisateur, je veux que les 16 figures de la geomancie arabe (Ilm al-Raml, systematisee aux IXe-Xe siecles) soient integrees avec leurs correspondances planetaires, zodiacales et elementaires, y compris la logique de combinaison par XOR pour calculer le Juge, afin d'exploiter naturellement les 4 bits (nibble) de chaque octet.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/geomancy.ts` cree avec 16 figures : numero (0-15), nom arabe original, nom latin medieval, signature binaire (4 caracteres, representant les 4 niveaux Tete/Cou/Corps/Pieds)
- [x] Chaque figure a : element, planete, signe zodiacal, signification generale (100-150 mots), signification inversee
- [x] Role dans les maisons (Juge, Temoin Droit, Temoin Gauche, Sentence) documente
- [x] La logique de combinaison XOR (GF(2)^4) est decrite : Figure Mere 1 XOR Figure Mere 2 = Figure Fille, etc.
- [x] Correspondances croisees avec les 4 Elements et les principes hermetiques
- [x] Les donnees utilisent `as const satisfies Record<number, GeomancyFigure>`

---

### US-009: Creer les Runes Elder Futhark (24 runes)

**Description:** En tant qu'utilisateur, je veux que les 24 runes de l'Elder Futhark soient integrees avec leurs 3 Aettir, signification droite et inversee (merkstave), correspondances elementaires et divines, afin d'exploiter 5 bits QRNG pour adresser les 24 runes plus un bit d'orientation.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/runes.ts` cree avec 24 runes : numero (0-23), nom proto-germanique, glyphe Unicode (si disponible, sinon ASCII), valeur phonetique, numero d'Aett (1 = Freya, 2 = Heimdall, 3 = Tyr)
- [x] Chaque rune a : signification droite (150+ mots), signification merkstave/inversee (100+ mots), element, divinite associee
- [x] Correspondances elementaires et saisonnieres renseignees
- [x] Les 9 runes non-reversibles sont identifiees (champ boolean `isReversible`) : Gebo, Hagalaz, Nauthiz, Isa, Jera, Eihwaz, Sowilo, Ingwaz, Dagaz
- [x] Description du poeme runique associe (reference aux 3 poemes : norvegien, islandais, anglo-saxon)
- [x] Les donnees utilisent `as const satisfies Record<number, Rune>`

---

### US-010: Creer l'Alchimie (4 stades + 7 operations)

**Description:** En tant qu'utilisateur, je veux que les 4 stades du Grand OEuvre (Nigredo → Albedo → Citrinitas → Rubedo) et les 7 operations alchimiques (classification hermetique de Basil Valentine) soient integres avec leurs correspondances planetaires et symboliques, afin d'exploiter 2 bits pour le stade et 3 bits pour l'operation.

**Note historique:** Le modele a 4 stades est le plus ancien (Ier s., Zosime de Panopolis). Les 7 operations sont une classification parmi d'autres (Ripley en comptait 12). On suit la tradition hermetique la plus repandue. Les correspondances planetaires utilisent les attributions classiques (pas Pluton, decouvert en 1930) : Calcination/Mars, Dissolution/Lune, Separation/Scorpion-Mars, Conjunction/Venus, Fermentation/Saturne, Distillation/Mercure, Coagulation/Jupiter.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/alchemy.ts` cree avec 4 stades : nom francais, nom latin, couleur, planete/astre, symbolisme (150+ mots), correspondance psychologique (Jung), matiere premiere associee
- [x] 7 operations dans le meme fichier : nom francais, nom latin, planete (attributions classiques, pas Pluton), description du processus (150+ mots), numero du stade parent, correspondance avec le principe hermetique
- [x] Correspondances croisees avec les 7 principes hermetiques (1 operation = 1 principe)
- [x] Correspondances avec les 7 metaux traditionnels (Plomb, Etain, Fer, Or, Cuivre, Mercure, Argent)
- [x] Les donnees utilisent `as const satisfies Record<number, AlchemyStage>` et `Record<number, AlchemyOperation>`

---

### US-011: Creer Chakras et Frequences Solfege

**Description:** En tant qu'utilisateur, je veux que les 7 chakras principaux et les 9 frequences du Solfege soient integres avec leurs correspondances energetiques, afin que la racine numerique de l'octet QRNG adresse directement un chakra et une frequence.

**Note historique:** Les 9 frequences Solfege (174-963 Hz) sont une creation moderne (1970s-1990s, Dr. Joseph Puleo puis Dr. Leonard Horowitz). Seules 6 sont "originales" (396-852 Hz), les 3 autres (174, 285, 963) ont ete ajoutees par extension du patron numerique. Le patron mathematique 3-6-9 des racines numeriques est verifie. La citation attribuee a Tesla ("la magnificence du 3, 6 et 9") n'a pas de source primaire verifiee. Ces frequences n'ont pas d'origine ancienne demontree ni de validation scientifique de leurs proprietes curatives. Les presenter comme un systeme de correspondances numeriques modernes, pas comme une tradition ancienne.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/chakras.ts` cree avec 7 chakras : nom sanskrit, nom francais, localisation corporelle, couleur, element, mantra (bija), frequence solfege associee, fonction (physique + spirituelle), description (150+ mots), symptomes de blocage/ouverture
- [x] 9 frequences solfege (174, 285, 396, 417, 528, 639, 741, 852, 963 Hz) avec : nom, racine numerique (3, 6 ou 9), description de l'effet, propriete associee. Presentees comme systeme de correspondances numeriques modernes
- [x] Correspondances croisees chakra ↔ element ↔ planete ↔ couleur ↔ note musicale
- [x] La logique de mapping est documentee : racine numerique de l'octet (somme iteree des chiffres jusqu'a 1 chiffre) → frequence solfege, puis octet % 7 → chakra
- [x] Les donnees utilisent `as const satisfies Record<number, Chakra>` et `Record<number, SolfegeFrequency>`

---

### US-012: Creer la Gematria hebraique (22 lettres + algorithme de decomposition)

**Description:** En tant qu'utilisateur, je veux que les 22 lettres hebraiques soient integrees avec leurs valeurs numeriques et que tout octet (0-255) puisse etre decompose en une somme de lettres hebraiques formant un "nom sacre", afin de reveler la dimension gematrique du signal quantique.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/gematria.ts` cree avec 22 lettres hebraiques : numero (1-22), glyphe hebreu, nom (Aleph, Beth...), valeur phonetique, valeur numerique standard (1-400), signification symbolique (100+ mots), categorie (3 meres / 7 doubles / 12 simples), numero du chemin sur l'Arbre de Vie
- [x] Algorithme `decomposeGematria(value: number): HebrewLetter[]` implemente dans le module de lookup
- [x] L'algorithme utilise la decomposition gourmande (greedy) : prend la plus grande valeur de lettre possible en descendant (400, 300, 200, 100, 90, 80... 1)
- [x] **Cas speciaux geres** : 15 s'ecrit Tet+Vav (9+6) au lieu de Yod+He (10+5), et 16 s'ecrit Tet+Zayin (9+7) au lieu de Yod+Vav (10+6), pour eviter d'epeler des noms divins (tradition standard des numeros hebraiques)
- [x] Chaque decomposition produit un "mot sacre" lisible (concatenation des glyphes)
- [x] La somme des valeurs des lettres retournees egale exactement la valeur d'entree
- [x] Valeurs speciales documentees (26 = YHVH, 72 = Shem HaMephorash, etc.)
- [x] Les donnees utilisent `as const satisfies Record<number, HebrewLetter>`

---

### US-013: Mettre a jour le QRNG pour demander 16 octets

**Description:** En tant que developpeur, je veux que le systeme QRNG demande 16 octets au lieu de 8 afin de disposer de 128 bits pour adresser les 13 traditions sans chevauchement ni reutilisation de bits.

**Acceptance Criteria:**
- [x] La constante `CONFIG.quantumBytes` dans `src/app/api/consult/route.ts` passe de 8 a 16
- [x] Le provider LfD demande correctement 16 octets (parametre `length=16`)
- [x] Le provider NIST retourne suffisamment de donnees (son beacon fournit 64 octets, pas de changement necessaire)
- [x] Le fallback Web Crypto genere 16 octets
- [x] La grille d'affichage des octets dans le TechnicalTab est adaptee (grid-cols-8 sur 2 lignes au lieu d'1)
- [x] Le texte "8 Bytes" est mis a jour en "16 Bytes" dans l'UI
- [x] La validation dans `calculateEsotericReading` accepte un minimum de 16 octets
- [x] Les tests existants (s'il y en a) sont mis a jour
- [x] La deduplication de requetes (`pendingRequests`) fonctionne toujours correctement

---

### US-014: Refondre le moteur d'interpretation en mapping bit-par-bit natif

**Description:** En tant que developpeur, je veux remplacer le moteur `calculateEsotericReading` actuel (base sur `sum % N`) par un moteur qui lit directement les bits des 16 octets QRNG pour adresser chaque tradition a son echelle native, afin que la structure binaire du signal quantique soit preservee et que chaque tradition recoive ses bits dedies.

**Acceptance Criteria:**
- [x] Le fichier `src/lib/esoteric.ts` est refactore avec le nouveau moteur
- [x] Plan d'allocation des bits documente dans un commentaire en tete de fichier, par exemple :
  - Octet 0 (8 bits) : Ifa Odu (256 signes, mapping 1:1)
  - Octet 1 bits 0-5 (6 bits) : Yi Jing hexagramme (64, via 2 trigrammes de 3 bits)
  - Octet 1 bits 6-7 + Octet 2 bits 0-3 (6 bits) : Yi Jing lignes mutantes
  - Octet 2 bits 4-7 (4 bits) : Geomancie figure mere 1
  - Octet 3 bits 0-3 (4 bits) : Geomancie figure mere 2
  - Octet 3 bits 4-7 + Octet 4 bit 0 (5 bits) : Tarot arcane majeur (0-21 sur 0-31)
  - Octet 4 bits 1-5 (5 bits) : Kabbale (10 Sefirot + 22 chemins sur 0-31)
  - Octet 4 bits 6-7 + Octet 5 bit 0 (3 bits) : Hermetisme principe (0-6 sur 0-7)
  - Octet 5 bits 1-5 (5 bits) : Elder Futhark rune (0-23 sur 0-31) + Octet 5 bit 6 : orientation
  - Octet 5 bit 7 + Octet 6 bits 0-1 (2+1=2 bits effectifs) : Alchimie stade (0-3)
  - Octet 6 bits 2-4 (3 bits) : Alchimie operation (0-6 sur 0-7)
  - Octet 6 bits 5-7 (3 bits) : Chakra (0-6 sur 0-7)
  - Octet 7 (8 bits) : Gematria — valeur brute decomposee en lettres hebraiques
  - Octets 8-11 (4 octets) : Elements — 1 octet par element, distribution proportionnelle
  - Octets 12-13 (2 octets) : Geometrie sacree — ratios consecutifs vs Phi
  - Octets 14-15 (2 octets) : Synthese — energie, polarite, phase, ton cosmique
- [x] Pour les traditions a cardinalite non-puissance-de-2 (Tarot 22, Runes 24, Hermetisme 7, Alchimie operation 7, Chakra 7), le mapping utilise un scaling ou rejection plutot qu'un modulo biaise
- [x] Fonctions utilitaires d'extraction de bits : `extractBits(bytes, startBit, numBits): number`
- [x] Le moteur utilise le module de lookup (US-002) qui importe les constantes TypeScript
- [x] L'interface `QuantumEsotericReading` est etendue avec les 6 nouvelles traditions
- [x] La fonction `generateEsotericContext` est mise a jour pour inclure toutes les traditions dans le texte envoye au LLM
- [x] Chaque tradition recoit des bits dedies — aucun bit n'est utilise par deux traditions (sauf Elements/Geometrie/Synthese qui utilisent des octets entiers)

---

### US-015: Implementer le systeme de correspondances croisees entre traditions

**Description:** En tant qu'utilisateur, je veux que les traditions soient liees entre elles par des correspondances authentiques (ex: Arcane du Tarot ↔ Chemin kabbalistique ↔ Lettre hebraique ↔ Signe zodiacal), afin de reveler la coherence profonde entre les differents systemes.

**Acceptance Criteria:**
- [x] Fichier `src/data/esoteric/correspondences.ts` cree avec les correspondances canoniques encodees en TypeScript :
  - 22 Arcanes ↔ 22 Chemins ↔ 22 Lettres hebraiques (tradition Golden Dawn)
  - 7 Principes hermetiques ↔ 7 Operations alchimiques ↔ 7 Planetes ↔ 7 Metaux ↔ 7 Chakras
  - 4 Elements ↔ 4 Stades alchimiques ↔ 4 directions ↔ 4 saisons
  - 12 Signes zodiacaux ↔ 12 Lettres simples ↔ Elements
  - Odu Ifa ↔ Hexagramme Yi Jing (correspondances via la signature binaire partagee pour les 6 premiers bits)
  - Figures geomantiques ↔ Elements ↔ Planetes
  - Runes ↔ Elements ↔ Saisons
- [x] Fonction `getReadingCorrespondences(reading: QuantumEsotericReading)` dans le module de lookup qui, a partir d'une lecture complete, extrait toutes les correspondances croisees entre les traditions obtenues
- [x] Le resultat met en evidence les "resonances" : quand plusieurs traditions pointent vers le meme element, la meme planete ou le meme archetype, c'est signale comme une convergence significative
- [x] Type `Correspondences` avec champs `convergences` (archetypes partages) et `links` (relations directes entre traditions)

---

### US-016: Mettre a jour les prompts LLM (Mistral Small API) avec prompt builder enrichi

**Description:** En tant qu'utilisateur, je veux que les prompts envoyes au LLM incluent la richesse des 13 traditions et les correspondances croisees, avec un prompt builder qui exploite le large contexte de Mistral Small API (128K tokens).

**Recherche "Lost in the Middle" :** Les LLM pretent plus attention au debut et a la fin du prompt, moins au milieu. Placer les convergences croisees en debut de contexte et la question du consultant en fin.

**Acceptance Criteria:**
- [x] Le system prompt Mistral (`src/lib/mistral/prompts.ts`) est mis a jour :
  - Mentionne les 13 traditions (pas seulement 4)
  - Ajoute le cadre philosophique (Ordre Implique, "It from Bit")
  - Augmente la limite de mots si necessaire pour integrer la richesse (evaluer 50 → 80-100 mots)
  - Conserve le ton mystique mais accessible et la reponse en francais
- [x] Le `buildUserPrompt` est mis a jour pour inclure dans le contexte esoterique :
  - Ifa Odu (nom + signification + proverbe)
  - Geomancie (figure + element + planete)
  - Rune (nom + signification + orientation)
  - Alchimie (stade + operation)
  - Chakra (nom + frequence solfege)
  - Gematria (mot sacre + valeur)
  - Les convergences croisees detectees
- [x] La `generateEsotericContext` dans `src/lib/esoteric.ts` accepte un parametre de niveau (`rich` | `condensed`) et produit un texte structure adapte. Le niveau riche (~2500 tokens, ~100 mots par tradition) est utilise par defaut pour Mistral Small API
- [x] **Hierarchisation du contexte** : convergences croisees en premier (debut du prompt), puis traditions individuelles, puis question du consultant en dernier (fin du prompt) — exploite la courbe d'attention en U des LLM
- [x] Le format du contexte reste en Markdown/plain-text avec labels clairs (pas de JSON ni XML dans le prompt — token-inefficace et degrade la qualite des modeles)

---

### US-017: Mettre a jour la route API `/api/consult`

**Description:** En tant que developpeur, je veux que la route API retourne la lecture enrichie avec les 13 traditions et les correspondances, afin que le frontend ait toutes les donnees necessaires pour la nouvelle UI.

**Acceptance Criteria:**
- [x] `CONFIG.quantumBytes` est a 16
- [x] L'objet `esotericReading` dans la reponse JSON inclut les 6 nouvelles traditions :
  - `ifa: { odu, name, meaning, proverb, orisha }`
  - `geomancy: { figure1, figure2, judge, element, planet }`
  - `runes: { rune, name, glyph, meaning, orientation, aett }`
  - `alchemy: { stage, operation, planet }`
  - `chakras: { chakra, name, frequency, mantra }`
  - `gematria: { value, sacredWord, letters[] }`
- [x] Les correspondances croisees sont incluses : `correspondences: { convergences: [], links: [] }`
- [x] Le champ `quantumData.numbers` retourne un tableau de 16 elements
- [x] La retrocompatibilite est maintenue pour les consultations existantes en base (les anciennes lectures a 8 octets restent lisibles)
- [x] Le type `ResponseData` est mis a jour

---

### US-018: Reorganiser l'architecture des onglets UI

**Description:** En tant qu'utilisateur, je veux que l'affichage des resultats soit reorganise en onglets refletant la nouvelle architecture en couches de lecture (signal brut → traditions divinatoires → sagesse esoterique → resonances → synthese), afin de naviguer intuitivement dans la richesse de l'interpretation.

**Acceptance Criteria:**
- [x] L'ancien systeme a 3 onglets (Synthesis, Technical, Traditions) est remplace par une nouvelle architecture
- [x] Nouvel onglet **"Signal Quantique"** : octets bruts (hex + decimal), visualisation binaire bit-par-bit montrant quel bit alimente quelle tradition, statistiques (somme, moyenne, variance), source QRNG
- [x] Nouvel onglet **"Traditions Divinatoires"** : Yi Jing (hexagramme + trigrammes + lignes mutantes), Ifa (Odu + proverbe + Orisha), Geomancie (figures + juge), Elder Futhark (rune + orientation + Aett)
- [x] Nouvel onglet **"Sagesse Esoterique"** : Tarot (arcane + symbolisme), Kabbale (Sefirah + chemin), Hermetisme (principe + axiome), Alchimie (stade + operation)
- [x] Nouvel onglet **"Resonances"** : Elements (distribution + dominant), Chakras (chakra + frequence solfege + mantra), Geometrie Sacree (Phi resonance + Fibonacci), Gematria (mot sacre + decomposition)
- [x] Nouvel onglet **"Synthese de l'Ordre Implique"** : energie cosmique, polarite, phase, ton cosmique, carte des convergences croisees entre traditions (quand plusieurs traditions pointent vers le meme archetype/element/planete)
- [x] Chaque tradition affiche un lien "Voir le calcul" (details) montrant les bits extraits et le mapping
- [x] Navigation fluide entre onglets (animation de transition)
- [x] Responsive : onglets scrollables horizontalement sur mobile
- [x] Les types `EsotericReading` et `QuantumData` dans `src/types/esoteric.ts` sont mis a jour pour refletent les 13 traditions

---

### US-019: Implementer les composants UI des nouvelles traditions

**Description:** En tant qu'utilisateur, je veux des composants visuels dedies pour chaque nouvelle tradition (Ifa, Geomancie, Runes, Alchimie, Chakras, Gematria), coherents avec le design system existant (cards blanches, backdrop-blur, border-slate, typographie mono).

**Acceptance Criteria:**
- [x] Composant `IfaCard` : affiche le nom de l'Odu, la signature binaire (8 points), l'Orisha patron, un proverbe Yoruba en italique, la signification. Design avec border-amber
- [x] Composant `GeomancyCard` : affiche les 2 figures meres (representation visuelle des 4 niveaux en points : * ou * *), la figure Juge (XOR), element + planete. Design avec border-rose
- [x] Composant `RuneCard` : affiche le glyphe de la rune (grande taille), nom + Aett, signification (droite ou merkstave selon bit d'orientation), element + divinite. Design avec border-cyan
- [x] Composant `AlchemyCard` : affiche le stade (avec couleur : noir/blanc/jaune/rouge) + l'operation, planete + metal, symbolisme. Design avec border-yellow
- [x] Composant `ChakraCard` : affiche le chakra (nom sanskrit + couleur), localisation, mantra, frequence solfege (Hz), barre de frequence coloree. Design avec border-indigo
- [x] Composant `GematriaCard` : affiche la valeur numerique, le mot sacre en hebreu (grande taille), la decomposition lettre par lettre avec valeurs. Design avec border-sky
- [x] Composant `ConvergenceMap` : affiche les correspondances croisees entre traditions obtenues dans la lecture actuelle, met en evidence les convergences (meme element, planete, archetype). Design special avec gradient
- [x] Tous les composants suivent le pattern existant : card avec `bg-white/40 backdrop-blur-sm border rounded-2xl`, titres en `font-mono uppercase tracking-[0.15em]`, details collapsibles pour les calculs
- [x] Chaque composant est dans `src/components/home/tabs/cards/`

---

### US-020: Creer le script de validation des donnees et la documentation

**Description:** En tant que developpeur, je veux un script de validation qui verifie l'integrite et la completude de toutes les donnees esoteriques TypeScript, et une documentation decrivant le plan d'allocation des bits.

**Acceptance Criteria:**
- [x] Script `scripts/validate-esoteric-data.ts` qui verifie :
  1. Toutes les traditions ont le bon nombre d'entrees (8 trigrams, 64 hexagrams, 22 arcanes, 10 sefirot, 22 chemins, 7 principes, 4 elements, 256 odu, 16 figures, 24 runes, 4 stades, 7 operations, 7 chakras, 9 frequences, 22 lettres)
  2. Les references croisees sont coherentes (ex: chaque chemin reference un numero de sefirah valide, chaque arcane reference un chemin valide)
  3. Les signatures binaires Ifa couvrent tous les 256 patterns (0-255)
  4. Les signatures binaires Geomancie couvrent les 16 patterns (0-15)
  5. Les correspondances croisees n'ont pas de references orphelines
  6. Chaque description a la longueur minimale requise
- [x] Commande `bun run validate:data` ajoutee dans `package.json`
- [x] Le script affiche un rapport de validation (OK/ERREUR par tradition, nombre d'entrees, references manquantes)
- [x] Commentaire detaille en tete de `src/lib/esoteric.ts` documentant le plan d'allocation des 128 bits (16 octets) avec les traditions adressees

---

## Functional Requirements

- **FR-1:** Les donnees esoteriques (13 traditions) doivent etre stockees dans des fichiers TypeScript type-safe dans `src/data/esoteric/`, avec acces synchrone a 0ms via imports statiques
- **FR-2:** Le QRNG doit fournir exactement 16 octets (128 bits) de hasard quantique par consultation
- **FR-3:** Chaque tradition doit etre adressee par une tranche de bits dediee, a son echelle native (ex: 8 bits pour 256 Odu, 6 bits pour 64 hexagrammes, 4 bits pour 16 figures geomantiques)
- **FR-4:** Aucun bit ne doit etre partage entre deux traditions de l'allocation discrete (Ifa, Yi Jing, Tarot, etc.), sauf pour les traditions continues (Elements, Geometrie, Synthese) qui utilisent des octets entiers
- **FR-5:** Pour les traditions dont la cardinalite n'est pas une puissance de 2 (Tarot 22, Runes 24, Hermetisme 7, etc.), le mapping doit utiliser un scaling uniforme `Math.floor(value * N / 2^bits)` — jamais un simple modulo biaise. Le biais residuel (<3%) doit etre documente
- **FR-6:** Le Yi Jing doit inclure les lignes mutantes : 6 bits supplementaires indiquant quelles lignes mutent, permettant de calculer l'hexagramme de transformation
- **FR-7:** La Geomancie doit inclure le calcul du Juge via XOR de 2 figures meres issues de 2 nibbles distincts
- **FR-8:** La Gematria doit decomposer tout octet (0-255) en une somme de lettres hebraiques formant un mot sacre lisible, avec gestion des cas speciaux 15 (Tet+Vav) et 16 (Tet+Zayin)
- **FR-9:** Le systeme de correspondances croisees doit detecter et signaler les convergences : quand plusieurs traditions pointent vers le meme element, planete ou archetype
- **FR-10:** Les prompts LLM doivent inclure les 13 traditions via un prompt builder enrichi pour Mistral Small API, avec convergences croisees priorisees en debut de prompt
- **FR-11:** L'UI doit etre reorganisee en 5 onglets thematiques refletant les couches de lecture
- **FR-12:** La retrocompatibilite doit etre maintenue pour les consultations existantes en base (lectures a 8 octets)
- **FR-13:** Un script de validation doit verifier l'integrite et la completude de toutes les donnees esoteriques TypeScript

---

## Non-Goals (Out of Scope)

- **Arcanes mineurs du Tarot** (56 cartes) — seuls les 22 arcanes majeurs sont traites dans cette version
- **Astrologie computationnelle** — pas de calcul de theme natal ou de positions planetaires en temps reel
- **Numerologie pythagoricienne** — en tant que tradition distincte (la racine numerique est utilisee pour le mapping Solfege, mais pas de systeme numerologique complet)
- **Audio/Son** — les frequences Solfege sont affichees mais pas jouees
- **Visualisation de l'Arbre de Vie** en SVG interactif — hors scope (les donnees sont presentes mais pas le rendu graphique)
- **Internationalisation** — les donnees sont en francais, pas de support multi-langue
- **Migration des consultations historiques** — les anciennes consultations (8 octets) restent lisibles mais ne sont pas recalculees avec le nouveau moteur
- **Tests unitaires du corpus esoterique** — la validation des 256 Odu et autres donnees est couverte par le script de validation (US-020), pas par un framework de test
- **Migration en base de donnees** — les donnees esoteriques restent en TypeScript statique (0ms, type-safe, pas de latence reseau ni cold start). La base Neon est reservee aux donnees transactionnelles

---

## Technical Considerations

### Donnees esoteriques en TypeScript statique
- Les donnees restent dans `src/data/esoteric/` comme constantes TypeScript — pas de migration en base
- Chaque tradition dans son propre fichier : `iching.ts`, `tarot.ts`, `kabbalah.ts`, `kabbalah-paths.ts`, `hermetic.ts`, `elements.ts`, `sacred-geometry.ts`, `synthesis.ts`, `ifa.ts`, `geomancy.ts`, `runes.ts`, `alchemy.ts`, `chakras.ts`, `gematria.ts`, `correspondences.ts`
- Types centralises dans `src/data/esoteric/types.ts`, re-exports dans `index.ts`
- Pattern `as const satisfies Record<number, Type>` pour un maximum de type narrowing et autocompletion IDE
- Acces O(1) via lookup dans des `Record<>` — aucun cache necessaire (les imports sont en memoire)
- Volume estime : ~500 entrees, quelques centaines de Ko de JS apres compilation — negligeable pour le bundle

### Extraction de bits
- Fonction utilitaire `extractBits(bytes: number[], startBit: number, numBits: number): number` qui traverse les frontieres d'octets
- Les bits sont numerotes en big-endian au niveau octet (bit 0 = MSB de l'octet 0, bit 7 = LSB de l'octet 0, bit 8 = MSB de l'octet 1, etc.)

### Contraintes LLM
- **Mistral Small API** (128K contexte) : budget prompt genereux, ~2500 tokens de contexte esoterique safe
- **Effet "Lost in the Middle"** : les LLM pretent plus attention au debut et a la fin du contexte. Placer convergences croisees en premier, question du consultant en dernier
- **Format** : Markdown/plain-text avec labels clairs (pas JSON/XML — token-inefficace). Le format actuel avec `→` et `[]` est proche de l'optimum

### Retrocompatibilite
- L'interface `QuantumEsotericReading` est etendue (pas remplacee) — les champs existants restent, les nouveaux sont ajoutes
- Le type `EsotericReading` dans `src/types/esoteric.ts` (type frontend) rend les nouvelles traditions optionnelles (`?`) pour que les anciennes consultations soient affichables

### Dependances
- Aucune nouvelle dependance npm n'est requise

---

## Success Metrics

- Les 13 traditions sont adressees par des tranches de bits dediees, sans modulo arbitraire
- Le build complet (`bun run build`) passe sans erreur
- Le script de validation (`bun run validate:data`) passe sans erreur sur les 13 traditions
- Une consultation complete retourne les 13 traditions dans la reponse JSON
- Le prompt LLM genere un contexte riche (<2500 tokens) pour Mistral Small API
- Le prompt LLM inclut les convergences croisees quand elles existent, placees en debut de contexte
- L'UI affiche les 5 nouveaux onglets avec les composants de toutes les traditions
- Les consultations historiques (8 octets) restent affichables sans erreur

---

## Resolved Questions

1. **Scaling vs Rejection Sampling** — **Decision : scaling.** Pour le Tarot (22 sur 5 bits = 32 possibilites), utiliser `Math.floor(value * 22 / 32)`. Le rejection sampling est impossible car les bits sont fixes (pas de re-tirage). Le biais residuel est <3% et doit etre documente dans un commentaire.
2. **Ordre d'affichage des traditions dans le prompt LLM** — **Decision : convergences d'abord, puis ordre fixe.** Exploite l'effet "Lost in the Middle" (attention maximale au debut et a la fin du prompt). Les convergences croisees sont placees en premier, la question du consultant en dernier.
3. **Stockage des donnees** — **Decision : TypeScript statique.** Pas de migration en base PostgreSQL. Les donnees esoteriques sont veritablement statiques, le volume est faible (~500 entrees), et l'acces a 0ms sans dependance reseau est superieur en tout point pour ce cas d'usage.

## Open Questions

1. **Lignes mutantes du Yi Jing** — L'hexagramme de transformation (apres mutation) doit-il etre calcule et affiche, ou seulement les lignes qui mutent ? Proposition : calculer et afficher l'hexagramme de transformation comme "hexagramme futur"
2. **Densite du corpus Ifa** — Les 256 Odu avec corpus complet representent un gros volume de donnees (~50-60K mots). Proposition : generation assistee par LLM a partir de sources de reference (Bascom, Abimbola, Fatunmbi), avec revue manuelle des 16 Odu Meji principaux
[/PRD]
