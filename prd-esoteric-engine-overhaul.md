[PRD]
# PRD: Refonte du Moteur Esoterique — Traduction Directe du Signal Quantique

## Overview

Quantum Oracle interprte actuellement les octets QRNG via des operations `sum % N` (modulo arithmetique) qui detruisent la structure binaire du signal quantique. Seul le Yi Jing exploite reellement les bits (extraction du LSB). Les donnees esoteriques sont legeres (30-60 mots par entree) et sans correspondances croisees entre traditions.

Ce PRD decrit la refonte complete du systeme d'interpretation esoterique :

1. **Migration des donnees en base Neon** — Toutes les traditions (existantes et nouvelles) stockees en PostgreSQL via Drizzle ORM, avec des donnees profondes (contexte historique, textes sources, correspondances)
2. **Mapping bit-par-bit natif** — Chaque tradition est adressee par une tranche de bits a son echelle native (8 bits → 256 Odu Ifa, 6 bits → 64 hexagrammes, 4 bits → 16 figures geomantiques), sans modulo destructeur
3. **6 nouvelles traditions** — Ifa (256 Odu), Geomancie arabe, Elder Futhark, Alchimie, Chakras/Solfege, Gematria hebraique
4. **16 octets QRNG** — Passage de 8 a 16 octets pour adresser 13 traditions sans chevauchement
5. **Reorganisation complete de l'UI** — Nouveaux onglets refletant l'architecture en couches de lecture

### Cadre philosophique

Le QRNG ne genere pas du hasard — il deplie (*unfolds*) un fragment de l'ordre implique (David Bohm) dans l'ordre explicite. Chaque bit est un effondrement de superposition quantique. L'ensemble des 16 octets forme un instantane de l'etat de l'univers au moment precis ou le consultant pose sa question. C'est l'univers participatif de Wheeler : *"It from Bit"*.

Les systemes de divination binaire existent depuis des millenaires et correspondent exactement aux puissances de 2 :
- Geomancie arabe (IXe s.) : 4 bits → 16 figures
- Yi Jing (~1000 av. J.-C.) : 6 bits → 64 hexagrammes
- Ifa Yoruba : 8 bits → 256 Odu

Le QRNG ne simule pas la divination — il **est** la divination a l'echelle fondamentale de la realite.

---

## Goals

- Etablir un mapping structurellement motive entre bits quantiques et traditions esoteriques (pas de modulo arbitraire)
- Enrichir les 7 traditions existantes avec des descriptions profondes (150-300 mots), contexte historique/mythologique, textes sources et correspondances croisees
- Integrer 6 nouvelles traditions a mappings binaires natifs (Ifa, Geomancie, Runes, Alchimie, Chakras/Solfege, Gematria)
- Migrer toutes les donnees esoteriques de fichiers TypeScript statiques vers la base Neon PostgreSQL
- Passer de 8 a 16 octets QRNG pour adresser 13 traditions sans chevauchement de bits
- Mettre a jour les prompts LLM (Mistral + Ollama) pour exploiter la richesse des nouvelles donnees
- Reorganiser l'UI en onglets refletant la nouvelle architecture en couches de lecture

---

## Quality Gates

Ces commandes doivent passer pour chaque user story :
- `bun run typecheck` — Verification des types TypeScript
- `bun run lint` — Linting ESLint
- `bun run build` — Build Next.js complet

---

## User Stories

### US-001: Concevoir et creer le schema Drizzle pour les traditions esoteriques

**Description:** En tant que developpeur, je veux un schema de base de donnees complet pour toutes les traditions esoteriques afin de remplacer les fichiers TypeScript statiques par des donnees en base Neon.

**Acceptance Criteria:**
- [ ] Table `iching_trigrams` creee (8 entrees) : id, index (0-7), name, symbol, element, attribute, binary_repr, description, correspondences (JSONB)
- [ ] Table `iching_hexagrams` creee (64 entrees) : id, number (1-64), name, symbol, upper_trigram_id (FK), lower_trigram_id (FK), meaning, judgment_text, image_text, mutating_lines (JSONB array de 6 lignes), correspondences (JSONB)
- [ ] Table `tarot_major_arcana` creee (22 entrees) : id, number (0-21), name, symbol, meaning, keywords (JSONB array), upright_meaning, reversed_meaning, astrological_sign, element, hebrew_letter, path_on_tree, description, symbolism
- [ ] Table `kabbalah_sefirot` creee (10 entrees) : id, number (1-10), name, hebrew, meaning, attribute, divine_name, archangel, planet, color, element, description, correspondences (JSONB)
- [ ] Table `kabbalah_paths` creee (22 entrees) : id, number (1-22), hebrew_letter, letter_name, from_sefirah_id (FK), to_sefirah_id (FK), tarot_arcana_id (FK), meaning, zodiac_or_planet, element, description
- [ ] Table `hermetic_principles` creee (7 entrees) : id, number (1-7), name, axiom, meaning, deep_commentary, historical_context, correspondences (JSONB)
- [ ] Table `elements` creee (4 entrees) : id, name, symbol, qualities, direction, season, temperament, zodiac_signs (JSONB), correspondences (JSONB)
- [ ] Table `ifa_odu` creee (256 entrees) : id, number (0-255), name, binary_signature (8 chars), meaning, proverbs (JSONB array), ese_ifa_verses (JSONB array), orisha, prescriptions, interdictions, element, correspondences (JSONB)
- [ ] Table `geomancy_figures` creee (16 entrees) : id, number (0-15), name_arabic, name_latin, binary_signature (4 chars), element, planet, zodiac_sign, meaning, reversed_meaning, judge_role, correspondences (JSONB)
- [ ] Table `elder_futhark_runes` creee (24 entrees) : id, number (0-23), name, glyph, phonetic_value, aett_number (1-3), meaning, merkstave_meaning, element, deity, description, correspondences (JSONB)
- [ ] Table `alchemy_stages` creee (4 entrees) : id, number (0-3), name, latin_name, color, planet, description, symbolism, correspondences (JSONB)
- [ ] Table `alchemy_operations` creee (7 entrees) : id, number (0-6), name, latin_name, planet, description, stage_id (FK)
- [ ] Table `chakras` creee (7 entrees) : id, number (0-6), name_sanskrit, name_french, location, color, element, mantra, solfege_frequency, function_desc, description, correspondences (JSONB)
- [ ] Table `solfege_frequencies` creee (9 entrees) : id, frequency_hz, name, digital_root, description, healing_property
- [ ] Table `hebrew_letters` creee (22 entrees) : id, number (1-22), letter, name, phonetic_value, numerical_value, meaning, path_id (FK kabbalah_paths), mother_double_simple (enum), element_or_planet_or_zodiac, description
- [ ] Table `tradition_correspondences` creee : id, source_tradition, source_id, target_tradition, target_id, relationship_type, description (table de jointure pour les correspondances croisees)
- [ ] Toutes les FK et index necessaires sont definis
- [ ] Les types TypeScript sont inferes via `$inferSelect` / `$inferInsert`
- [ ] Le fichier schema est dans `src/db/schema.ts` (extension de l'existant)

---

### US-002: Creer le Data Access Layer (DAL) pour les traditions esoteriques

**Description:** En tant que developpeur, je veux une couche d'acces aux donnees qui abstrait les requetes DB pour chaque tradition, avec cache en memoire, afin que le moteur d'interpretation puisse lire les donnees sans connaitre Drizzle.

**Acceptance Criteria:**
- [ ] Module `src/lib/esoteric-dal.ts` cree
- [ ] Fonction `getTrigramByIndex(index: number)` — retourne un trigram par son index binaire (0-7)
- [ ] Fonction `getHexagramByNumber(number: number)` — retourne un hexagramme avec ses trigrammes joints
- [ ] Fonction `getTarotArcana(number: number)` — retourne un arcane avec ses correspondances
- [ ] Fonction `getSefirah(number: number)` — retourne une sefirah avec ses chemins adjacents
- [ ] Fonction `getKabbalahPath(number: number)` — retourne un chemin avec ses sefirot et arcane lies
- [ ] Fonction `getHermeticPrinciple(number: number)` — retourne un principe avec commentaire profond
- [ ] Fonction `getElement(name: string)` — retourne un element avec correspondances
- [ ] Fonction `getOdu(number: number)` — retourne un Odu avec versets et correspondances
- [ ] Fonction `getGeomancyFigure(number: number)` — retourne une figure geomantique
- [ ] Fonction `getRune(number: number)` — retourne une rune avec merkstave
- [ ] Fonction `getAlchemyStage(number: number)` — retourne un stade alchimique
- [ ] Fonction `getAlchemyOperation(number: number)` — retourne une operation alchimique
- [ ] Fonction `getChakra(number: number)` — retourne un chakra avec frequence solfege
- [ ] Fonction `getSolfegeFrequency(digitalRoot: number)` — retourne une frequence par racine numerique
- [ ] Fonction `getHebrewLetter(number: number)` — retourne une lettre hebraique
- [ ] Fonction `decomposeGematria(value: number)` — decompose un nombre (0-255) en somme de lettres hebraiques
- [ ] Fonction `getCorrespondences(tradition: string, id: number)` — retourne les correspondances croisees
- [ ] Cache LRU en memoire avec TTL configurable pour eviter des requetes repetees
- [ ] Toutes les fonctions sont typees avec les types inferes du schema Drizzle

---

### US-003: Enrichir et seeder les donnees Yi Jing

**Description:** En tant qu'utilisateur, je veux que les hexagrammes et trigrammes du Yi Jing contiennent des descriptions profondes, des textes du Jugement et de l'Image, et les 6 lignes mutantes pour chaque hexagramme, afin que l'interpretation soit riche et fidele a la tradition.

**Acceptance Criteria:**
- [ ] 8 trigrammes seedes avec : nom chinois + francais, symbole Unicode, element, attribut, direction, saison, partie du corps, animal, description detaillee (100+ mots)
- [ ] 64 hexagrammes seedes avec : nom chinois + francais, symbole Unicode, texte du Jugement (Tuan), texte de l'Image (Xiang), signification generale (150-200 mots)
- [ ] Chaque hexagramme a 6 lignes mutantes (texte par ligne), chacune avec son sens propre quand elle mute
- [ ] Les correspondances croisees sont renseignees : hexagramme → arcane du Tarot (via King Wen), hexagramme → element
- [ ] Script de seed : `src/db/seeds/seed-iching.ts`
- [ ] Le seed est idempotent (upsert, pas d'erreur si execute plusieurs fois)

---

### US-004: Enrichir et seeder les donnees Tarot des Arcanes Majeurs

**Description:** En tant qu'utilisateur, je veux que les 22 arcanes majeurs contiennent une symbolique riche (sens droit/inverse, correspondances astrologiques, lettres hebraiques, chemins sur l'Arbre de Vie) afin que chaque arcane soit un portail de sagesse complet.

**Acceptance Criteria:**
- [ ] 22 arcanes seedes avec : nom, symbole/emoji, sens droit (150-200 mots), sens inverse (100-150 mots), 5-7 mots-cles
- [ ] Correspondances astrologiques renseignees pour chaque arcane (planete ou signe zodiacal)
- [ ] Correspondance avec la lettre hebraique du chemin kabbalistique (tradition du Golden Dawn)
- [ ] Element associe renseigne (Feu, Eau, Air, Terre ou combinaison)
- [ ] Chemin sur l'Arbre de Vie reference (lie a `kabbalah_paths`)
- [ ] Description du symbolisme visuel de la carte (150+ mots, basee sur le Rider-Waite-Smith)
- [ ] Script de seed : `src/db/seeds/seed-tarot.ts`
- [ ] Le seed est idempotent

---

### US-005: Enrichir et seeder les donnees Kabbale (Sefirot + 22 Chemins)

**Description:** En tant qu'utilisateur, je veux que l'Arbre de Vie contienne les 10 Sefirot avec leurs attributs divins complets et les 22 chemins avec les correspondances du Sefer Yetzirah (lettres hebraiques, planetes, zodiac, elements), afin de pouvoir naviguer l'Arbre dans toute sa profondeur.

**Acceptance Criteria:**
- [ ] 10 Sefirot seedes avec : nom hebreu + translitteration + francais, attribut divin, nom de Dieu associe, archange, planete/astre, couleur, element, position sur l'Arbre (pilier, monde), description detaillee (200+ mots)
- [ ] 22 chemins seedes avec : numero, lettre hebraique, nom de la lettre, sefirot de depart et d'arrivee (FK), arcane du Tarot associe (FK), signe zodiacal / planete / element (selon le Sefer Yetzirah), categorie (3 meres, 7 doubles, 12 simples), description (150+ mots)
- [ ] Les correspondances croisees Sefirot ↔ Planetes ↔ Arcanes sont coherentes avec la tradition du Golden Dawn
- [ ] Script de seed : `src/db/seeds/seed-kabbalah.ts`
- [ ] Le seed est idempotent

---

### US-006: Enrichir et seeder Hermetisme, Elements, Geometrie Sacree et Synthese

**Description:** En tant qu'utilisateur, je veux que les principes hermetiques, les elements classiques, la geometrie sacree et la synthese cosmique soient enrichis avec un contexte historique profond et des correspondances, afin de depasser les descriptions superficielles actuelles.

**Acceptance Criteria:**
- [ ] 7 principes hermetiques seedes avec : nom, axiome du Kybalion, signification (200+ mots), commentaire historique (reference au Corpus Hermeticum, Tabula Smaragdina), application pratique, correspondances (planete, metal, jour de la semaine)
- [ ] 4 elements seedes avec : nom, symbole (Unicode alchimique), qualites (chaud/froid, sec/humide), direction cardinale, saison, temperament (sanguin/colerique/melancolique/flegmatique), signes zodiacaux associes (3 par element), correspondances avec chakras, Sefirot et planetes
- [ ] Constantes de geometrie sacree enrichies : Phi, Fibonacci, Pi, racine de 2, nombre d'argent, avec signification mathematique et symbolique pour chaque constante
- [ ] 12 tons cosmiques enrichis avec correspondance astrologique (12 signes), element, modalite (cardinal/fixe/mutable)
- [ ] Scripts de seed : `src/db/seeds/seed-hermetic.ts`, `src/db/seeds/seed-elements.ts`, `src/db/seeds/seed-sacred-geometry.ts`, `src/db/seeds/seed-synthesis.ts`
- [ ] Tous les seeds sont idempotents

---

### US-007: Creer et seeder les 256 Odu d'Ifa (corpus complet)

**Description:** En tant qu'utilisateur, je veux que le systeme Ifa soit integre avec ses 256 Odu et leur corpus academique complet (versets Ese Ifa, proverbes, Orisha, prescriptions/interdictions), car c'est le systeme de divination binaire le plus ancien qui utilise exactement 8 bits — un mapping 1:1 parfait avec un octet QRNG.

**Acceptance Criteria:**
- [ ] 256 Odu seedes avec : numero (0-255), nom Yoruba, signature binaire (8 caracteres, ex: "11111111" pour Eji Ogbe), rang hierarchique
- [ ] Chaque Odu a une signification generale (150-200 mots)
- [ ] Au minimum 2-3 proverbes Yoruba par Odu (avec traduction francaise)
- [ ] Au minimum 1-2 versets Ese Ifa par Odu (resume narratif en francais, 100-200 mots chacun)
- [ ] Orisha (divinite) patron associe a chaque Odu
- [ ] Prescriptions (actions recommandees) et interdictions (tabous) pour chaque Odu
- [ ] Element (Feu, Eau, Air, Terre) et correspondances croisees avec Yi Jing et Geomancie
- [ ] Les 16 Odu Meji (principaux) ont un corpus plus fourni (5+ proverbes, 3+ versets)
- [ ] Script de seed : `src/db/seeds/seed-ifa.ts`
- [ ] Le seed est idempotent

---

### US-008: Creer et seeder la Geomancie arabe (16 figures)

**Description:** En tant qu'utilisateur, je veux que les 16 figures de la geomancie arabe (Ilm al-Raml) soient integrees avec leurs correspondances planetaires, zodiacales et elementaires, y compris la logique de combinaison par XOR pour calculer le Juge, afin d'exploiter naturellement les 4 bits (nibble) de chaque octet.

**Acceptance Criteria:**
- [ ] 16 figures seedes avec : numero (0-15), nom arabe original, nom latin medieval, signature binaire (4 caracteres, representant les 4 niveaux Tete/Cou/Corps/Pieds)
- [ ] Chaque figure a : element, planete, signe zodiacal, signification generale (100-150 mots), signification inversee
- [ ] Role dans les maisons (Juge, Temoin Droit, Temoin Gauche, Sentence) documente
- [ ] La logique de combinaison XOR (GF(2)^4) est decrite : Figure Mere 1 XOR Figure Mere 2 = Figure Fille, etc.
- [ ] Correspondances croisees avec les 4 Elements et les principes hermetiques
- [ ] Script de seed : `src/db/seeds/seed-geomancy.ts`
- [ ] Le seed est idempotent

---

### US-009: Creer et seeder les Runes Elder Futhark (24 runes)

**Description:** En tant qu'utilisateur, je veux que les 24 runes de l'Elder Futhark soient integrees avec leurs 3 Aettir, signification droite et inversee (merkstave), correspondances elementaires et divines, afin d'exploiter 5 bits QRNG pour adresser les 24 runes plus un bit d'orientation.

**Acceptance Criteria:**
- [ ] 24 runes seedes avec : numero (0-23), nom proto-germanique, glyphe Unicode (si disponible, sinon ASCII), valeur phonetique, numero d'Aett (1 = Freya, 2 = Heimdall, 3 = Tyr)
- [ ] Chaque rune a : signification droite (150+ mots), signification merkstave/inversee (100+ mots), element, divinite associee
- [ ] Correspondances elementaires et saisonnieres renseignees
- [ ] Les 9 runes non-reversibles sont identifiees (champ boolean `is_reversible`)
- [ ] Description du poeme runique associe (reference aux 3 poemes : norvegien, islandais, anglo-saxon)
- [ ] Script de seed : `src/db/seeds/seed-runes.ts`
- [ ] Le seed est idempotent

---

### US-010: Creer et seeder l'Alchimie (4 stades + 7 operations)

**Description:** En tant qu'utilisateur, je veux que les 4 stades du Grand OEuvre (Nigredo → Albedo → Citrinitas → Rubedo) et les 7 operations alchimiques soient integres avec leurs correspondances planetaires et symboliques, afin d'exploiter 2 bits pour le stade et 3 bits pour l'operation.

**Acceptance Criteria:**
- [ ] 4 stades seedes avec : nom francais, nom latin, couleur, planete/astre, symbolisme (150+ mots), correspondance psychologique (Jung), matiere premiere associee
- [ ] 7 operations seedes avec : nom francais, nom latin, planete, description du processus (150+ mots), stade parent (FK), correspondance avec le principe hermetique
- [ ] Correspondances croisees avec les 7 principes hermetiques (1 operation = 1 principe)
- [ ] Correspondances avec les 7 metaux traditionnels (Plomb, Etain, Fer, Or, Cuivre, Mercure, Argent)
- [ ] Script de seed : `src/db/seeds/seed-alchemy.ts`
- [ ] Le seed est idempotent

---

### US-011: Creer et seeder Chakras et Frequences Solfege

**Description:** En tant qu'utilisateur, je veux que les 7 chakras principaux et les 9 frequences sacrees du Solfege soient integres avec leurs correspondances energetiques, afin que la racine numerique de l'octet QRNG adresse directement un chakra et une frequence.

**Acceptance Criteria:**
- [ ] 7 chakras seedes avec : nom sanskrit, nom francais, localisation corporelle, couleur, element, mantra (bija), frequence solfege associee, fonction (physique + spirituelle), description (150+ mots), symptomes de blocage/ouverture
- [ ] 9 frequences solfege seedes (174, 285, 396, 417, 528, 639, 741, 852, 963 Hz) avec : nom, racine numerique (3, 6 ou 9 — la triade de Tesla), description de l'effet, propriete de guerison/harmonisation
- [ ] Correspondances croisees chakra ↔ element ↔ planete ↔ couleur ↔ note musicale
- [ ] La logique de mapping est documentee : racine numerique de l'octet (somme iteree des chiffres jusqu'a 1 chiffre) → frequence solfege, puis octet % 7 → chakra
- [ ] Script de seed : `src/db/seeds/seed-chakras.ts`
- [ ] Le seed est idempotent

---

### US-012: Creer et seeder la Gematria hebraique (22 lettres + algorithme de decomposition)

**Description:** En tant qu'utilisateur, je veux que les 22 lettres hebraiques soient integrees avec leurs valeurs numeriques et que tout octet (0-255) puisse etre decompose en une somme de lettres hebraiques formant un "nom sacre", afin de reveler la dimension gematrique du signal quantique.

**Acceptance Criteria:**
- [ ] 22 lettres hebraiques seedes avec : numero (1-22), glyphe hebreu, nom (Aleph, Beth...), valeur phonetique, valeur numerique standard (1-400), signification symbolique (100+ mots), categorie (3 meres / 7 doubles / 12 simples), chemin sur l'Arbre de Vie (FK vers kabbalah_paths)
- [ ] Algorithme `decomposeGematria(value: number): HebrewLetter[]` implemente dans le DAL
- [ ] L'algorithme utilise la decomposition gourmande (greedy) : prend la plus grande valeur de lettre possible en descendant (400, 300, 200, 100, 90, 80... 1)
- [ ] Chaque decomposition produit un "mot sacre" lisible (concatenation des glyphes)
- [ ] La somme des valeurs des lettres retournees egale exactement la valeur d'entree
- [ ] Valeurs speciales documentees (26 = YHVH, 72 = Shem HaMephorash, etc.)
- [ ] Script de seed : `src/db/seeds/seed-gematria.ts`
- [ ] Le seed est idempotent

---

### US-013: Mettre a jour le QRNG pour demander 16 octets

**Description:** En tant que developpeur, je veux que le systeme QRNG demande 16 octets au lieu de 8 afin de disposer de 128 bits pour adresser les 13 traditions sans chevauchement ni reutilisation de bits.

**Acceptance Criteria:**
- [ ] La constante `CONFIG.quantumBytes` dans `src/app/api/consult/route.ts` passe de 8 a 16
- [ ] Le provider LfD demande correctement 16 octets (parametre `length=16`)
- [ ] Le provider NIST retourne suffisamment de donnees (son beacon fournit 64 octets, pas de changement necessaire)
- [ ] Le fallback Web Crypto genere 16 octets
- [ ] La grille d'affichage des octets dans le TechnicalTab est adaptee (grid-cols-8 sur 2 lignes au lieu d'1)
- [ ] Le texte "8 Bytes" est mis a jour en "16 Bytes" dans l'UI
- [ ] La validation dans `calculateEsotericReading` accepte un minimum de 16 octets
- [ ] Les tests existants (s'il y en a) sont mis a jour
- [ ] La deduplication de requetes (`pendingRequests`) fonctionne toujours correctement

---

### US-014: Refondre le moteur d'interpretation en mapping bit-par-bit natif

**Description:** En tant que developpeur, je veux remplacer le moteur `calculateEsotericReading` actuel (base sur `sum % N`) par un moteur qui lit directement les bits des 16 octets QRNG pour adresser chaque tradition a son echelle native, afin que la structure binaire du signal quantique soit preservee et que chaque tradition recoive ses bits dedies.

**Acceptance Criteria:**
- [ ] Le fichier `src/lib/esoteric.ts` est refactore avec le nouveau moteur
- [ ] Plan d'allocation des bits documente dans un commentaire en tete de fichier, par exemple :
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
- [ ] Pour les traditions a cardinalite non-puissance-de-2 (Tarot 22, Runes 24, Hermetisme 7, Alchimie operation 7, Chakra 7), le mapping utilise un scaling ou rejection plutot qu'un modulo biaise
- [ ] Fonctions utilitaires d'extraction de bits : `extractBits(bytes, startBit, numBits): number`
- [ ] Le moteur lit les donnees depuis le DAL (US-002) au lieu des constantes TypeScript
- [ ] L'interface `QuantumEsotericReading` est etendue avec les 6 nouvelles traditions
- [ ] La fonction `generateEsotericContext` est mise a jour pour inclure toutes les traditions dans le texte envoye au LLM
- [ ] Chaque tradition recoit des bits dedies — aucun bit n'est utilise par deux traditions (sauf Elements/Geometrie/Synthese qui utilisent des octets entiers)

---

### US-015: Implementer le systeme de correspondances croisees entre traditions

**Description:** En tant qu'utilisateur, je veux que les traditions soient liees entre elles par des correspondances authentiques (ex: Arcane du Tarot ↔ Chemin kabbalistique ↔ Lettre hebraique ↔ Signe zodiacal), afin de reveler la coherence profonde entre les differents systemes.

**Acceptance Criteria:**
- [ ] La table `tradition_correspondences` est peuplee avec les correspondances canoniques :
  - 22 Arcanes ↔ 22 Chemins ↔ 22 Lettres hebraiques (tradition Golden Dawn)
  - 7 Principes hermetiques ↔ 7 Operations alchimiques ↔ 7 Planetes ↔ 7 Metaux ↔ 7 Chakras
  - 4 Elements ↔ 4 Stades alchimiques ↔ 4 directions ↔ 4 saisons
  - 12 Signes zodiacaux ↔ 12 Lettres simples ↔ Elements
  - Odu Ifa ↔ Hexagramme Yi Jing (correspondances via la signature binaire partagee pour les 6 premiers bits)
  - Figures geomantiques ↔ Elements ↔ Planetes
  - Runes ↔ Elements ↔ Saisons
- [ ] Fonction `getReadingCorrespondences(reading: QuantumEsotericReading)` qui, a partir d'une lecture complete, extrait toutes les correspondances croisees entre les traditions obtenues
- [ ] Le resultat met en evidence les "resonances" : quand plusieurs traditions pointent vers le meme element, la meme planete ou le meme archetype, c'est signale comme une convergence significative
- [ ] Script de seed : `src/db/seeds/seed-correspondences.ts`
- [ ] Le seed est idempotent

---

### US-016: Mettre a jour les prompts LLM (Mistral + Ollama)

**Description:** En tant qu'utilisateur, je veux que les prompts envoyes au LLM incluent la richesse des 13 traditions et les correspondances croisees, afin que la reponse oraculaire soit profonde, multidimensionnelle et ancree dans les symboles reveles.

**Acceptance Criteria:**
- [ ] Le system prompt Mistral (`src/lib/mistral/prompts.ts`) est mis a jour :
  - Mentionne les 13 traditions (pas seulement 4)
  - Ajoute le cadre philosophique (Ordre Implique, "It from Bit")
  - Augmente la limite de mots si necessaire pour integrer la richesse (evaluer 50 → 80-100 mots)
  - Conserve le ton mystique mais accessible et la reponse en francais
- [ ] Le `buildUserPrompt` est mis a jour pour inclure dans le contexte esoterique :
  - Ifa Odu (nom + signification + proverbe)
  - Geomancie (figure + element + planete)
  - Rune (nom + signification + orientation)
  - Alchimie (stade + operation)
  - Chakra (nom + frequence solfege)
  - Gematria (mot sacre + valeur)
  - Les convergences croisees detectees
- [ ] Le system prompt Ollama (`src/lib/ollama/prompts.ts`) est mis a jour de maniere symetrique
- [ ] La `generateEsotericContext` dans `src/lib/esoteric.ts` produit un texte structure incluant les 13 traditions
- [ ] Le prompt reste efficace (pas de surcharge qui noierait le LLM) — les informations sont hierarchisees avec les convergences en premier

---

### US-017: Mettre a jour la route API `/api/consult`

**Description:** En tant que developpeur, je veux que la route API retourne la lecture enrichie avec les 13 traditions et les correspondances, afin que le frontend ait toutes les donnees necessaires pour la nouvelle UI.

**Acceptance Criteria:**
- [ ] `CONFIG.quantumBytes` est a 16
- [ ] L'objet `esotericReading` dans la reponse JSON inclut les 6 nouvelles traditions :
  - `ifa: { odu, name, meaning, proverb, orisha }`
  - `geomancy: { figure1, figure2, judge, element, planet }`
  - `runes: { rune, name, glyph, meaning, orientation, aett }`
  - `alchemy: { stage, operation, planet }`
  - `chakras: { chakra, name, frequency, mantra }`
  - `gematria: { value, sacredWord, letters[] }`
- [ ] Les correspondances croisees sont incluses : `correspondences: { convergences: [], links: [] }`
- [ ] Le champ `quantumData.numbers` retourne un tableau de 16 elements
- [ ] La retrocompatibilite est maintenue pour les consultations existantes en base (les anciennes lectures a 8 octets restent lisibles)
- [ ] Le type `ResponseData` est mis a jour

---

### US-018: Reorganiser l'architecture des onglets UI

**Description:** En tant qu'utilisateur, je veux que l'affichage des resultats soit reorganise en onglets refletant la nouvelle architecture en couches de lecture (signal brut → traditions divinatoires → sagesse esoterique → resonances → synthese), afin de naviguer intuitivement dans la richesse de l'interpretation.

**Acceptance Criteria:**
- [ ] L'ancien systeme a 3 onglets (Synthesis, Technical, Traditions) est remplace par une nouvelle architecture
- [ ] Nouvel onglet **"Signal Quantique"** : octets bruts (hex + decimal), visualisation binaire bit-par-bit montrant quel bit alimente quelle tradition, statistiques (somme, moyenne, variance), source QRNG
- [ ] Nouvel onglet **"Traditions Divinatoires"** : Yi Jing (hexagramme + trigrammes + lignes mutantes), Ifa (Odu + proverbe + Orisha), Geomancie (figures + juge), Elder Futhark (rune + orientation + Aett)
- [ ] Nouvel onglet **"Sagesse Esoterique"** : Tarot (arcane + symbolisme), Kabbale (Sefirah + chemin), Hermetisme (principe + axiome), Alchimie (stade + operation)
- [ ] Nouvel onglet **"Resonances"** : Elements (distribution + dominant), Chakras (chakra + frequence solfege + mantra), Geometrie Sacree (Phi resonance + Fibonacci), Gematria (mot sacre + decomposition)
- [ ] Nouvel onglet **"Synthese de l'Ordre Implique"** : energie cosmique, polarite, phase, ton cosmique, carte des convergences croisees entre traditions (quand plusieurs traditions pointent vers le meme archetype/element/planete)
- [ ] Chaque tradition affiche un lien "Voir le calcul" (details) montrant les bits extraits et le mapping
- [ ] Navigation fluide entre onglets (animation de transition)
- [ ] Responsive : onglets scrollables horizontalement sur mobile
- [ ] Les types `EsotericReading` et `QuantumData` dans `src/types/esoteric.ts` sont mis a jour pour refletent les 13 traditions

---

### US-019: Implementer les composants UI des nouvelles traditions

**Description:** En tant qu'utilisateur, je veux des composants visuels dedies pour chaque nouvelle tradition (Ifa, Geomancie, Runes, Alchimie, Chakras, Gematria), coherents avec le design system existant (cards blanches, backdrop-blur, border-slate, typographie mono).

**Acceptance Criteria:**
- [ ] Composant `IfaCard` : affiche le nom de l'Odu, la signature binaire (8 points), l'Orisha patron, un proverbe Yoruba en italique, la signification. Design avec border-amber
- [ ] Composant `GeomancyCard` : affiche les 2 figures meres (representation visuelle des 4 niveaux en points : * ou * *), la figure Juge (XOR), element + planete. Design avec border-rose
- [ ] Composant `RuneCard` : affiche le glyphe de la rune (grande taille), nom + Aett, signification (droite ou merkstave selon bit d'orientation), element + divinite. Design avec border-cyan
- [ ] Composant `AlchemyCard` : affiche le stade (avec couleur : noir/blanc/jaune/rouge) + l'operation, planete + metal, symbolisme. Design avec border-yellow
- [ ] Composant `ChakraCard` : affiche le chakra (nom sanskrit + couleur), localisation, mantra, frequence solfege (Hz), barre de frequence coloree. Design avec border-indigo
- [ ] Composant `GematriaCard` : affiche la valeur numerique, le mot sacre en hebreu (grande taille), la decomposition lettre par lettre avec valeurs. Design avec border-sky
- [ ] Composant `ConvergenceMap` : affiche les correspondances croisees entre traditions obtenues dans la lecture actuelle, met en evidence les convergences (meme element, planete, archetype). Design special avec gradient
- [ ] Tous les composants suivent le pattern existant : card avec `bg-white/40 backdrop-blur-sm border rounded-2xl`, titres en `font-mono uppercase tracking-[0.15em]`, details collapsibles pour les calculs
- [ ] Chaque composant est dans `src/components/home/tabs/cards/`

---

### US-020: Creer le runner de seed global et la documentation

**Description:** En tant que developpeur, je veux un script unique pour seeder toutes les tables esoteriques et une documentation decrivant le plan d'allocation des bits, afin de pouvoir initialiser la base en une commande et comprendre l'architecture.

**Acceptance Criteria:**
- [ ] Script `src/db/seeds/index.ts` qui execute tous les seeds dans l'ordre correct (respect des FK) :
  1. Elements
  2. Hermetic Principles
  3. Kabbalah Sefirot
  4. Kabbalah Paths
  5. Tarot Major Arcana (apres Paths pour FK)
  6. I Ching Trigrams, puis Hexagrams
  7. Ifa Odu
  8. Geomancy Figures
  9. Elder Futhark Runes
  10. Alchemy Stages, puis Operations
  11. Chakras + Solfege Frequencies
  12. Hebrew Letters (apres Paths pour FK)
  13. Tradition Correspondences (en dernier, reference toutes les autres tables)
- [ ] Commande `bun run db:seed` ajoutee dans `package.json`
- [ ] Le runner affiche la progression (table par table) et le nombre d'entrees inseres
- [ ] Tous les seeds sont transactionnels (rollback si erreur)
- [ ] Commentaire detaille en tete de `src/lib/esoteric.ts` documentant le plan d'allocation des 128 bits (16 octets) avec les traditions adressees

---

## Functional Requirements

- **FR-1:** Le systeme doit stocker toutes les donnees esoteriques (13 traditions) en base PostgreSQL Neon via Drizzle ORM, et non plus dans des fichiers TypeScript statiques
- **FR-2:** Le QRNG doit fournir exactement 16 octets (128 bits) de hasard quantique par consultation
- **FR-3:** Chaque tradition doit etre adressee par une tranche de bits dediee, a son echelle native (ex: 8 bits pour 256 Odu, 6 bits pour 64 hexagrammes, 4 bits pour 16 figures geomantiques)
- **FR-4:** Aucun bit ne doit etre partage entre deux traditions de l'allocation discrete (Ifa, Yi Jing, Tarot, etc.), sauf pour les traditions continues (Elements, Geometrie, Synthese) qui utilisent des octets entiers
- **FR-5:** Pour les traditions dont la cardinalite n'est pas une puissance de 2 (Tarot 22, Runes 24, Hermetisme 7, etc.), le mapping doit utiliser un scaling uniforme ou rejection sampling — jamais un simple modulo biaise
- **FR-6:** Le Yi Jing doit inclure les lignes mutantes : 6 bits supplementaires indiquant quelles lignes mutent, permettant de calculer l'hexagramme de transformation
- **FR-7:** La Geomancie doit inclure le calcul du Juge via XOR de 2 figures meres issues de 2 nibbles distincts
- **FR-8:** La Gematria doit decomposer tout octet (0-255) en une somme de lettres hebraiques formant un mot sacre lisible
- **FR-9:** Le systeme de correspondances croisees doit detecter et signaler les convergences : quand plusieurs traditions pointent vers le meme element, planete ou archetype
- **FR-10:** Les prompts LLM doivent inclure les 13 traditions et prioriser les convergences croisees detectees
- **FR-11:** L'UI doit etre reorganisee en 5 onglets thematiques refletant les couches de lecture
- **FR-12:** La retrocompatibilite doit etre maintenue pour les consultations existantes en base (lectures a 8 octets)
- **FR-13:** Le DAL doit implementer un cache LRU en memoire avec TTL pour eviter les requetes repetees aux memes donnees statiques
- **FR-14:** Tous les scripts de seed doivent etre idempotents (upsert) et executables dans un runner global unique

---

## Non-Goals (Out of Scope)

- **Arcanes mineurs du Tarot** (56 cartes) — seuls les 22 arcanes majeurs sont traites dans cette version
- **Astrologie computationnelle** — pas de calcul de theme natal ou de positions planetaires en temps reel
- **Numerologie pythagoricienne** — en tant que tradition distincte (la racine numerique est utilisee pour le mapping Solfege, mais pas de systeme numerologique complet)
- **Audio/Son** — les frequences Solfege sont affichees mais pas jouees
- **Visualisation de l'Arbre de Vie** en SVG interactif — hors scope (les donnees sont presentes mais pas le rendu graphique)
- **Internationalisation** — les donnees sont en francais, pas de support multi-langue
- **Migration des consultations historiques** — les anciennes consultations (8 octets) restent lisibles mais ne sont pas recalculees avec le nouveau moteur
- **Tests unitaires du corpus esoterique** — la validation des 256 Odu et autres donnees est hors scope (seul le seed idempotent est requis)
- **Mode hors-ligne** — les donnees restent en base, pas de pre-chargement local

---

## Technical Considerations

### Base de donnees
- **Drizzle ORM** est deja utilise (`src/db/schema.ts`) — les nouvelles tables etendent le schema existant
- **Neon PostgreSQL** — les colonnes JSONB sont adaptees pour les donnees semi-structurees (correspondances, versets, mots-cles)
- **Volume estimatif** : ~300 Ko pour les traditions legeres, 1-3 Mo pour le corpus Ifa complet — largement dans les limites de Neon Free/Pro
- **Index** : index sur les colonnes `number` de chaque table de tradition pour les lookups O(1) par le moteur

### Extraction de bits
- Fonction utilitaire `extractBits(bytes: number[], startBit: number, numBits: number): number` qui traverse les frontieres d'octets
- Les bits sont numerotes en big-endian au niveau octet (bit 0 = MSB de l'octet 0, bit 7 = LSB de l'octet 0, bit 8 = MSB de l'octet 1, etc.)

### Performance
- Le cache LRU du DAL est critique : les donnees esoteriques sont statiques et ne changent qu'au seed — un TTL de 1h ou plus est acceptable
- L'appel DB supplementaire (vs import statique) ajoute ~5-10ms — negligeable compare aux 1-3s du QRNG + LLM

### Retrocompatibilite
- L'interface `QuantumEsotericReading` est etendue (pas remplacee) — les champs existants restent, les nouveaux sont ajoutes
- Le type `EsotericReading` dans `src/types/esoteric.ts` (type frontend) rend les nouvelles traditions optionnelles (`?`) pour que les anciennes consultations soient affichables

### Dependances
- Aucune nouvelle dependance npm n'est requise
- Drizzle est deja installe pour les migrations

---

## Success Metrics

- Les 13 traditions sont adressees par des tranches de bits dediees, sans modulo arbitraire
- Le build complet (`bun run build`) passe sans erreur
- Le seed global remplit toutes les tables sans erreur et est re-executable (idempotent)
- Une consultation complete retourne les 13 traditions dans la reponse JSON
- Le prompt LLM inclut les convergences croisees quand elles existent
- L'UI affiche les 5 nouveaux onglets avec les composants de toutes les traditions
- Les consultations historiques (8 octets) restent affichables sans erreur

---

## Open Questions

1. **Scaling vs Rejection Sampling** — Pour le Tarot (22 sur 5 bits = 32 possibilites), faut-il utiliser un scaling `Math.floor(value * 22 / 32)` (leger biais) ou un rejection sampling (redemander des bits si > 21, impossible car les bits sont fixes) ? Proposition : scaling avec documentation du biais residuel (< 3%)
2. **Ordre d'affichage des traditions dans le prompt LLM** — Faut-il prioriser les traditions a convergence forte ou garder un ordre fixe ? Proposition : convergences d'abord, puis ordre fixe
3. **Lignes mutantes du Yi Jing** — L'hexagramme de transformation (apres mutation) doit-il etre calcule et affiche, ou seulement les lignes qui mutent ? Proposition : calculer et afficher l'hexagramme de transformation comme "hexagramme futur"
4. **Densité du corpus Ifá** — Les 256 Odu avec corpus complet representent un gros volume de seed. Faut-il generer ces donnees par un LLM specialise avec validation humaine, ou les compiler manuellement depuis des sources academiques ? Proposition : generation assistee par LLM a partir de sources de reference (Bascom, Abimbola, Fatunmbi), avec revue manuelle des 16 Odu Meji principaux
[/PRD]
