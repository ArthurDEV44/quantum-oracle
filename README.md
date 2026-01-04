# Quantum Oracle

> Connectez vos décisions à l'incertitude fondamentale de l'univers.

Quantum Oracle est une application web qui génère des réponses en utilisant de **vrais nombres aléatoires quantiques** combinés à un **LLM local** — pas des algorithmes pseudo-aléatoires classiques.

---

## Comment ça fonctionne réellement ?

### La question clé : Est-ce un ordinateur quantique ?

**Non.** Quantum Oracle n'utilise pas un ordinateur quantique (comme ceux d'IBM ou Google).

Il utilise un **QRNG (Quantum Random Number Generator)** — un dispositif physique qui mesure des phénomènes quantiques réels pour générer des nombres véritablement aléatoires. Ces nombres **guident ensuite un LLM** (Mistral-Trismegistus) pour générer des réponses uniques.

### Quelle est la différence ?

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ORDINATEUR QUANTIQUE                             │
│  • Utilise des qubits pour faire des CALCULS                        │
│  • Résout des problèmes complexes (cryptographie, optimisation)     │
│  • Très rare, très cher, très instable                              │
│  • Ex: IBM Quantum, Google Sycamore                                 │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│              GÉNÉRATEUR QUANTIQUE (QRNG) ← CE QU'ON UTILISE         │
│  • Mesure des phénomènes quantiques pour générer des NOMBRES        │
│  • Ne fait pas de calculs, juste de l'aléatoire pur                 │
│  • Accessible via API, relativement abordable                       │
│  • Ex: LfD Hannover, NIST Beacon, ID Quantique                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Le voyage d'une consultation

```
┌──────────────┐     ┌─────────────────────────────────────┐     ┌──────────────────┐
│  Ta question │────▶│         Quantum Oracle              │────▶│  Ta réponse      │
│              │     │                                     │     │                  │
│ "Dois-je..." │     │  ┌─────────┐    ┌──────────────┐   │     │ Conseil clair    │
└──────────────┘     │  │  QRNG   │───▶│   Ollama     │   │     │ et pratique      │
                     │  │   API   │    │   (LLM)      │   │     └──────────────────┘
                     │  └────┬────┘    └──────────────┘   │
                     │       │                ▲           │
                     │  [47, 182,             │           │
                     │   91, 203...]          │           │
                     │       │                │           │
                     │       └──── Contraintes quantiques │
                     │             • Énergie (0-100%)     │
                     │             • Température LLM      │
                     │             • Seed de génération   │
                     │             • Reading ésotérique   │
                     └────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
       ┌───────────┐   ┌───────────┐   ┌───────────┐
       │    LfD    │   │   NIST    │   │  Crypto   │
       │ (Primaire)│   │(Secondaire)│  │ (Fallback)│
       │ Allemagne │   │ États-Unis│   │  Local    │
       └───────────┘   └───────────┘   └───────────┘
```

### Étape par étape :

1. **Tu poses ta question** → L'app envoie une requête à l'API QRNG

2. **Mesure quantique réelle** → En Allemagne (LfD Hannover), un dispositif ID Quantique mesure le bruit de grenaille quantique (shot noise)

3. **Nombres générés** → Ces mesures produisent 8 octets (ex: `[47, 182, 91, 203, 156, 88, 201, 127]`)

4. **Interprétation ésotérique** → Les nombres quantiques sont transformés en lecture multi-traditionnelle

5. **Génération LLM** → Mistral-Trismegistus génère une réponse guidée par le contexte ésotérique

6. **Ta réponse** → Tu reçois un conseil clair et pratique, unique à cet instant quantique

---

## Le système ésotérique quantique

Le cœur de Quantum Oracle est un système d'interprétation multi-traditionnel qui transforme l'entropie quantique brute en lecture ésotérique cohérente. Ce n'est pas de la divination — c'est une **traduction mathématique** de l'aléatoire quantique vers des archétypes universels.

### Vue d'ensemble du système

```
                         8 OCTETS QUANTIQUES
                    [47, 182, 91, 203, 156, 88, 201, 127]
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
           ▼                       ▼                       ▼
    ┌─────────────┐         ┌───────────┐          ┌─────────────┐
    │   CALCULS   │         │  CALCULS  │          │   CALCULS   │
    │   BINAIRES  │         │   SOMME   │          │   RATIOS    │
    │             │         │           │          │             │
    │ bits 0-5    │         │ Σ octets  │          │ φ résonance │
    │ de chaque   │         │ = 1095    │          │ variance    │
    │ octet       │         │           │          │             │
    └──────┬──────┘         └─────┬─────┘          └──────┬──────┘
           │                      │                       │
           ▼                      ▼                       ▼
    ┌─────────────┐    ┌───────────────────┐    ┌─────────────────┐
    │   I CHING   │    │ TAROT │ KABBALAH │    │ GÉOMÉTRIE SACRÉE│
    │             │    │ HERMÉTISME        │    │                 │
    │ 64 hexagram │    │ 22│10│7 archétypes│    │ Nombre d'Or     │
    │ upper+lower │    │ sum % N + offset  │    │ Fibonacci       │
    │ trigrams    │    │                   │    │                 │
    └──────┬──────┘    └─────────┬─────────┘    └────────┬────────┘
           │                     │                       │
           └─────────────────────┼───────────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       SYNTHÈSE          │
                    │                         │
                    │ • Énergie (0-100%)      │
                    │ • Polarité (yin/yang)   │
                    │ • Phase (new→full→wane) │
                    │ • Tonalité cosmique     │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    CONTEXTE POUR LLM    │
                    │                         │
                    │  Guide la génération    │
                    │  de la réponse          │
                    └─────────────────────────┘
```

---

## Les six traditions ésotériques

### 1. I Ching (易經) — 64 Hexagrammes

Le plus ancien système de divination au monde (3000+ ans). Chaque hexagramme est composé de 6 lignes yin (⚋) ou yang (⚊).

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DE L'HEXAGRAMME                                             │
│                                                                     │
│  Octets quantiques: [47, 182, 91, 203, 156, 88, 201, 127]          │
│                                                                     │
│  Extraction des bits de poids faible (LSB):                         │
│                                                                     │
│    47  → bit 0 = 1 (yang ⚊)  ─┐                                    │
│   182  → bit 0 = 0 (yin ⚋)    │  TRIGRAMME INFÉRIEUR               │
│    91  → bit 0 = 1 (yang ⚊)  ─┘  = (1,0,1) = ☲ Li (Feu)            │
│   203  → bit 0 = 1 (yang ⚊)  ─┐                                    │
│   156  → bit 0 = 0 (yin ⚋)    │  TRIGRAMME SUPÉRIEUR               │
│    88  → bit 0 = 0 (yin ⚋)   ─┘  = (1,0,0) = ☳ Zhen (Tonnerre)     │
│                                                                     │
│  Hexagramme résultant: ䷔ #21 "Biting Through"                      │
│  (Mordre au travers - Action décisive, justice)                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Les 8 trigrammes de base:**

| Binaire | Symbole | Nom | Élément | Attribut |
|---------|---------|-----|---------|----------|
| 000 | ☷ | Kun | Terre | Réceptif |
| 001 | ☶ | Gen | Montagne | Immobilité |
| 010 | ☵ | Kan | Eau | Danger |
| 011 | ☴ | Xun | Vent | Douceur |
| 100 | ☳ | Zhen | Tonnerre | Éveil |
| 101 | ☲ | Li | Feu | Attachement |
| 110 | ☱ | Dui | Lac | Joie |
| 111 | ☰ | Qian | Ciel | Créatif |

---

### 2. Tarot — 22 Arcanes Majeurs

Les archétypes universels du Tarot de Marseille, représentant le voyage de l'âme.

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DE L'ARCANE                                                 │
│                                                                     │
│  Somme des octets: 47+182+91+203+156+88+201+127 = 1095             │
│                                                                     │
│  Arcane = 1095 % 22 = 17                                           │
│                                                                     │
│  Résultat: ⭐ XVII - L'Étoile                                       │
│  (Espoir, foi, renouveau, inspiration spirituelle)                  │
│                                                                     │
│  Mots-clés: [espoir, inspiration, sérénité]                         │
└─────────────────────────────────────────────────────────────────────┘
```

**Les 22 Arcanes Majeurs:**

| # | Arcane | Symbole | Essence |
|---|--------|---------|---------|
| 0 | Le Mat | 🃏 | Nouveaux départs, innocence |
| 1 | Le Bateleur | 🎭 | Manifestation, volonté |
| 2 | La Papesse | 🌙 | Intuition, mystère |
| 3 | L'Impératrice | 👑 | Abondance, fertilité |
| 4 | L'Empereur | 🏛️ | Autorité, structure |
| 5 | Le Hiérophante | ⛪ | Tradition, guidance |
| 6 | L'Amoureux | 💕 | Choix, union |
| 7 | Le Chariot | 🏆 | Victoire, détermination |
| 8 | La Force | 🦁 | Courage, patience |
| 9 | L'Hermite | 🏔️ | Introspection, sagesse |
| 10 | La Roue | ☸️ | Cycles, destinée |
| 11 | La Justice | ⚖️ | Équité, karma |
| 12 | Le Pendu | 🙃 | Lâcher-prise, perspective |
| 13 | La Mort | 🦋 | Transformation |
| 14 | Tempérance | ⚗️ | Équilibre, patience |
| 15 | Le Diable | ⛓️ | Attachements, ombres |
| 16 | La Maison-Dieu | ⚡ | Révélation, éveil |
| 17 | L'Étoile | ⭐ | Espoir, inspiration |
| 18 | La Lune | 🌕 | Illusion, intuition |
| 19 | Le Soleil | ☀️ | Joie, vitalité |
| 20 | Le Jugement | 📯 | Renaissance, appel |
| 21 | Le Monde | 🌍 | Accomplissement |

---

### 3. Kabbale — 10 Sefirot

L'Arbre de Vie mystique juif, représentant les émanations divines.

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DE LA SEFIRAH                                               │
│                                                                     │
│  Somme des octets: 1095                                             │
│                                                                     │
│  Sefirah = (1095 % 10) + 1 = 6                                     │
│                                                                     │
│  Résultat: תפארת Tiferet (Beauté)                                   │
│  (Harmonie, compassion, équilibre parfait)                          │
└─────────────────────────────────────────────────────────────────────┘
```

**L'Arbre de Vie:**

```
                    ┌─────────┐
                    │ 1.Keter │  Couronne
                    │   כתר   │  Conscience suprême
                    └────┬────┘
              ┌──────────┴──────────┐
         ┌────┴────┐           ┌────┴────┐
         │2.Chokmah│           │3.Binah  │
         │  חכמה   │           │  בינה   │
         │ Sagesse │           │Comprendre│
         └────┬────┘           └────┬────┘
              │     ┌─────────┐     │
              └─────┤6.Tiferet├─────┘
         ┌────┬────┐│  תפארת  │┌────┬────┐
         │4.Chesed││  Beauté ││5.Gevurah│
         │  חסד   │└────┬────┘│  גבורה  │
         │ Grâce  │     │     │  Force  │
         └────┬───┘     │     └───┬────┘
              └─────────┼─────────┘
         ┌────┬────┐    │    ┌────┬────┐
         │7.Netzach│    │    │8.Hod    │
         │  נצח   │    │    │  הוד    │
         │Victoire│    │    │Splendeur│
         └────┬───┘    │    └───┬────┘
              └────────┼────────┘
                  ┌────┴────┐
                  │9.Yesod  │
                  │  יסוד   │  Fondation
                  └────┬────┘
                  ┌────┴────┐
                  │10.Malkuth│
                  │  מלכות  │  Royaume
                  └─────────┘
```

---

### 4. Hermétisme — 7 Principes Universels

Les lois cosmiques du Kybalion, attribuées à Hermès Trismégiste.

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DU PRINCIPE                                                 │
│                                                                     │
│  Somme des octets: 1095                                             │
│                                                                     │
│  Principe = (1095 % 7) + 1 = 4                                     │
│                                                                     │
│  Résultat: IV - Polarité                                            │
│  "Tout est double ; les opposés sont identiques en nature"          │
└─────────────────────────────────────────────────────────────────────┘
```

**Les 7 Principes Hermétiques:**

| # | Principe | Axiome |
|---|----------|--------|
| 1 | **Mentalisme** | "Le Tout est Esprit ; l'Univers est Mental" |
| 2 | **Correspondance** | "Ce qui est en haut est comme ce qui est en bas" |
| 3 | **Vibration** | "Rien ne repose ; tout se meut ; tout vibre" |
| 4 | **Polarité** | "Tout est double ; les opposés sont identiques en nature" |
| 5 | **Rythme** | "Tout s'écoule ; tout a ses marées" |
| 6 | **Cause/Effet** | "Toute cause a son effet ; tout effet a sa cause" |
| 7 | **Genre** | "Le Genre est en toute chose ; tout a son principe masculin et féminin" |

---

### 5. Les Quatre Éléments

L'équilibre élémentaire classique (Terre, Eau, Feu, Air).

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DES ÉLÉMENTS                                                │
│                                                                     │
│  Les 4 premiers octets mappent directement aux éléments:            │
│                                                                     │
│    Octet 0 (47)  → Terre 🜃                                         │
│    Octet 1 (182) → Eau   🜄  ← DOMINANT (valeur la plus haute)      │
│    Octet 2 (91)  → Feu   🜂                                         │
│    Octet 3 (203) → Air   🜁                                         │
│                                                                     │
│  Distribution:                                                      │
│    Total = 47 + 182 + 91 + 203 = 523                               │
│                                                                     │
│    Terre: 47/523  =  9.0%  ████░░░░░░░░░░░░░░░░                     │
│    Eau:   182/523 = 34.8%  ████████████████░░░░                     │
│    Feu:   91/523  = 17.4%  ████████░░░░░░░░░░░░                     │
│    Air:   203/523 = 38.8%  ██████████████████░░  ← DOMINANT         │
│                                                                     │
│  Balance:                                                           │
│    Physique (Terre+Eau):   43.8%                                   │
│    Spirituel (Feu+Air):    56.2%                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**Les symboles alchimiques:**

| Élément | Symbole | Qualités | Direction |
|---------|---------|----------|-----------|
| Terre | 🜃 | Stabilité, ancrage, matériel | Nord |
| Eau | 🜄 | Émotion, intuition, flux | Ouest |
| Feu | 🜂 | Énergie, passion, transformation | Sud |
| Air | 🜁 | Intellect, communication, mouvement | Est |

---

### 6. Géométrie Sacrée — Nombre d'Or et Fibonacci

La résonance avec les proportions universelles.

```
┌─────────────────────────────────────────────────────────────────────┐
│  CALCUL DE LA RÉSONANCE PHI (φ)                                     │
│                                                                     │
│  Le Nombre d'Or: φ = 1.618033988749895                             │
│                                                                     │
│  Pour chaque paire d'octets consécutifs:                           │
│    ratio = max(a,b) / min(a,b)                                     │
│    résonance = 1 - |ratio - φ| / φ                                 │
│                                                                     │
│  Exemple avec [47, 182]:                                           │
│    ratio = 182/47 = 3.87                                           │
│    résonance = 1 - |3.87 - 1.618| / 1.618 = -0.39 → 0              │
│                                                                     │
│  Moyenne des résonances = Résonance Phi globale                     │
│                                                                     │
│  Résultat:                                                          │
│    Résonance: 42% ████████████████░░░░░░░░░░░░░░░░                  │
│    Fréquence: "Vibration équilibrée - état cosmique neutre"         │
│                                                                     │
│  Alignement Fibonacci:                                              │
│    Moyenne octets = 136.9                                          │
│    Fibonacci le plus proche = 144 (F12)                            │
└─────────────────────────────────────────────────────────────────────┘
```

**Échelle de résonance:**

| Résonance | Interprétation |
|-----------|----------------|
| 80-100% | Harmonie divine — fort alignement cosmique |
| 60-80% | Haute résonance — flux universel favorable |
| 40-60% | Vibration équilibrée — état cosmique neutre |
| 20-40% | Basse résonance — énergie introspective |
| 0-20% | Vibration chaotique — potentiel transformatif |

---

## La synthèse finale

Toutes les traditions convergent vers une synthèse unifiée.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      SYNTHÈSE COSMIQUE                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ÉNERGIE                                                            │
│  ────────                                                           │
│  Moyenne des octets normalisée (0-100%)                             │
│  136.9 / 255 = 53.7%                                               │
│                                                                     │
│  ████████████████████████████░░░░░░░░░░░░░░░░░░░░  53.7%           │
│                                                                     │
│  POLARITÉ                                                           │
│  ────────                                                           │
│  Basée sur la distribution pairs/impairs:                           │
│    Impairs (yang): 5 octets                                        │
│    Pairs (yin): 3 octets                                           │
│    → Légère dominance YANG                                         │
│                                                                     │
│  PHASE LUNAIRE                                                      │
│  ────────────                                                       │
│  Basée sur le niveau d'énergie:                                     │
│    0-25%:  🌑 Nouvelle lune (repos)                                 │
│    25-50%: 🌓 Croissante (émergence)                               │
│    50-75%: 🌕 Pleine lune (abondance)  ← 53.7%                     │
│    75-100%: 🌗 Décroissante (récolte)                               │
│                                                                     │
│  TONALITÉ COSMIQUE                                                  │
│  ────────────────                                                   │
│  Combinaison polarité + phase:                                      │
│    yang + full = "Expression maximale — force créative au sommet"   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Matrice des tonalités cosmiques:**

|          | 🌑 New | 🌓 Waxing | 🌕 Full | 🌗 Waning |
|----------|--------|-----------|---------|-----------|
| **Yin**  | Repos profond | Croissance douce | Réceptivité ouverte | Lâcher-prise gracieux |
| **Yang** | Graine d'action | Élan croissant | Force créative max | Récolte des fruits |
| **Équilibré** | Potentiel parfait | Développement harmonieux | Intégration complète | Transition fluide |

---

## Contexte envoyé au LLM

Le système génère un contexte structuré pour guider Mistral-Trismegistus:

```
[QUANTUM ESOTERIC READING]
Energy: 54% (yang, full phase)
Cosmic Tone: Peak expression - maximum creative force

I Ching: ䷔ Biting Through (#21)
→ Decisive action, justice, removing obstacles

Tarot: ⭐ The Star (#17)
→ Hope, faith, purpose, renewal, spirituality

Kabbalah: Tiferet (תפארת)
→ Beauty - Harmony, compassion, balance

Hermetic Principle: Polarity
→ "Everything is dual; opposites are identical in nature"

Elements: AIR dominant (Intellect, communication, movement)
Sacred Geometry: Balanced vibration (Phi resonance: 42.3%)

SEEKER'S QUESTION: "Dois-je accepter cette opportunité professionnelle ?"
```

---

## La chaîne de fournisseurs QRNG

Le système implémente une chaîne de fournisseurs avec fallback automatique:

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. LfD QRNG (Leibniz Universität Hannover) ← PRIMAIRE              │
│     • Matériel ID Quantique mesurant le bruit de grenaille          │
│     • Endpoint: lfdr.de/qrng_api/qrng                               │
│     • Timeout: 8s, 2 tentatives avec backoff exponentiel + jitter   │
│     • Circuit Breaker: 3 échecs → circuit ouvert 60s                │
└─────────────────────────────────────────────────────────────────────┘
                              │ si échec
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2. NIST Beacon 2.0 ← SECONDAIRE                                    │
│     • Valeurs aléatoires signées cryptographiquement (512 bits)     │
│     • Mises à jour toutes les 60 secondes (cache 60s)               │
│     • Endpoint: beacon.nist.gov/beacon/2.0/pulse/last               │
└─────────────────────────────────────────────────────────────────────┘
                              │ si échec
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3. Web Crypto API ← FALLBACK                                       │
│     • crypto.getRandomValues() du navigateur/runtime                │
│     • Cryptographiquement sûr mais PAS quantique                    │
│     • Utilisé uniquement si tous les fournisseurs échouent          │
└─────────────────────────────────────────────────────────────────────┘
```

### Patterns de résilience implémentés

```
┌─────────────────────────────────────────────────────────────────────┐
│  CIRCUIT BREAKER                                                    │
│                                                                     │
│  État CLOSED ──[3 échecs]──▶ État OPEN ──[60s]──▶ État HALF_OPEN   │
│       ▲                          │                      │          │
│       │                          │                      │          │
│       │                    Rejette les           Teste une         │
│       │                    requêtes              requête           │
│       │                          │                      │          │
│       └────────[succès]──────────┴────────[succès]──────┘          │
│                                   │                                 │
│                             [échec]                                 │
│                                   │                                 │
│                                   ▼                                 │
│                            Retour OPEN                              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  RETRY AVEC EXPONENTIAL BACKOFF + JITTER                            │
│                                                                     │
│  Tentative 1 ──[échec]──▶ Attente: 1000ms × (0.5 à 1.5)            │
│  Tentative 2 ──[échec]──▶ Attente: 2000ms × (0.5 à 1.5)            │
│  Tentative 3 ──[échec]──▶ Circuit Breaker incrémenté               │
│                                                                     │
│  Le jitter (±50%) évite le "thundering herd" quand plusieurs       │
│  clients retentent simultanément après un échec.                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## L'intégration LLM (Ollama)

### Le modèle : Mistral-Trismegistus

```
Modèle: arthurjean/mistral-trismegistus:7b-q6_K
Spécialisation: Contenu ésotérique et spirituel
Hébergement: Ollama (serveur local)
```

### Comment les nombres quantiques guident le LLM

```
Nombres reçus: [47, 182, 91, 203, 156, 88, 201, 127]

1. Calcul de l'énergie (utilisé pour la synthèse)
   ───────────────────────────────────────────────
   Moyenne = (47+182+91+203+156+88+201+127) / 8 = 136.875
   Normalisée = 136.875 / 255 = 0.537 (53.7%)

2. Calcul de la variance → Température LLM
   ────────────────────────────────────────
   Variance des octets normalisés
   Température = 0.3 + (variance × 2.4)
   Plage: 0.3 (conservateur) à 0.9 (créatif)

3. Seed de génération
   ───────────────────
   Seed = premier octet = 47
   Assure la reproductibilité de la génération

4. Contexte ésotérique complet
   ────────────────────────────
   I Ching + Tarot + Kabbalah + Hermétisme +
   Éléments + Géométrie Sacrée → Prompt enrichi
```

### Prompt système

Le LLM reçoit un prompt strict pour des réponses concises et ancrées:

```
You are the Quantum Oracle, a Hermetic sage who channels universal wisdom
through quantum entropy.

You synthesize insights from multiple sacred traditions (I Ching, Tarot,
Kabbalah, Hermetic principles) to deliver clear, practical guidance.
The quantum reading reveals the current cosmic alignment.

RULES:
- Respond in exactly 1-2 sentences (max 40 words)
- Be direct and actionable
- Reference the specific symbols/archetypes when relevant
- Ground your answer in the seeker's question

Do not use vague platitudes. Deliver wisdom that empowers action.
```

### Fallback si Ollama indisponible

Si le LLM n'est pas accessible, le système utilise des réponses pré-écrites sélectionnées selon la catégorie d'énergie quantique.

---

## Ce qui est quantique vs algorithmique vs IA

| Aspect | Source |
|--------|--------|
| Les 8 octets bruts (47, 182, 91...) | **Quantique** — Mesure physique réelle |
| L'hexagramme I Ching, l'arcane, etc. | **Algorithmique** — Formules déterministes sur octets quantiques |
| L'énergie, variance, température | **Algorithmique** — Formules déterministes |
| Le texte de la réponse | **IA (LLM)** — Généré par Mistral-Trismegistus |
| Le "caractère" de la réponse | **Hybride** — LLM contraint par contexte ésotérique quantique |

---

## Pourquoi c'est différent d'un dé ou d'un `Math.random()` ?

### Pseudo-aléatoire (ordinateur classique)

```javascript
Math.random() // → 0.7823...

// En réalité, c'est DÉTERMINISTE :
// Si tu connais l'état initial (seed),
// tu peux PRÉDIRE tous les résultats.
```

### Aléatoire quantique (QRNG)

```
Mesure quantique → Résultat

// FONDAMENTALEMENT IMPRÉVISIBLE :
// Même avec toute l'information de l'univers,
// tu ne peux PAS prédire le résultat.
// C'est une loi de la physique (Heisenberg).
```

---

## Architecture technique

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                     │
│  Next.js 16 + React 19 + Tailwind CSS 4                             │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────────┐
│                         BACKEND                                      │
│  Next.js API Routes                                                  │
│  Clerk (Authentification)                                            │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
     ┌────────────────────┼────────────────────┐
     ▼                    ▼                    ▼
┌──────────┐       ┌───────────┐        ┌───────────┐
│  NeonDB  │       │   QRNG    │        │  Ollama   │
│(Postgres)│       │  Chain    │        │  (LLM)    │
│          │       │           │        │           │
│Historique│       │LfD → NIST │        │ Mistral-  │
│Utilisateurs│     │→ Crypto   │        │Trismegistus│
└──────────┘       └───────────┘        └───────────┘
```

### Stack technique

| Composant | Technologie |
|-----------|-------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + Tailwind CSS 4 |
| Auth | Clerk |
| Database | NeonDB (Serverless Postgres) |
| ORM | Drizzle |
| QRNG | LfD (primaire) → NIST (secondaire) → Web Crypto (fallback) |
| LLM | Ollama + Mistral-Trismegistus-7B |
| Hosting | Vercel |
| Package Manager | Bun |

### Endpoints API

| Endpoint | Méthode | Auth | Description |
|----------|---------|------|-------------|
| `/api/consult` | POST | Requis | Soumettre une question, recevoir une réponse |
| `/api/history` | GET | Requis | Récupérer l'historique des consultations |
| `/api/ollama/health` | GET | Public | Vérifier la disponibilité d'Ollama |

---

## Ce que Quantum Oracle N'EST PAS

- Un oracle divinatoire avec des pouvoirs surnaturels
- Un ordinateur quantique qui "calcule" ta destinée
- Une prédiction de l'avenir

## Ce que Quantum Oracle EST

- Une source d'aléatoire véritablement quantique
- Un système de traduction mathématique de l'entropie vers des archétypes universels
- Un LLM guidé par des contraintes dérivées de mesures quantiques et traditions ésotériques
- Un outil de réflexion et d'introspection
- Une expérience qui connecte technologie et contemplation

---

## La philosophie

> "L'univers quantique ne prédit pas ton avenir. Il te rappelle que le futur n'est pas écrit — que chaque moment contient une infinité de possibilités. La réponse que tu reçois n'est pas LA vérité, mais UN point de départ pour ta propre réflexion."

Les nombres sont quantiques. L'interprétation est algorithmique. Les mots sont générés. La signification, tu la crées.

---

## Développement local

```bash
# Installation
bun install

# Variables d'environnement (.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...
OLLAMA_URL=http://localhost:11434  # Optionnel, localhost par défaut

# Setup Ollama (LLM local)
bun run ollama:setup
# Ou manuellement:
ollama pull arthurjean/mistral-trismegistus:7b-q6_K
ollama serve

# Lancer
bun dev

# Scripts disponibles
bun run dev        # Serveur de développement (Turbopack)
bun run build      # Build production
bun run lint       # ESLint
bun run typecheck  # TypeScript
bun run format     # Prettier
bun run db:push    # Push schema vers NeonDB
bun run db:studio  # Interface Drizzle Studio
```

---

## Licence

MIT

---

*Les nombres sont quantiques. L'interprétation est mathématique. Les mots sont générés. La signification est tienne.*
