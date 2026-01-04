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

4. **Contraintes dérivées** → Les nombres quantiques déterminent :
   - **Énergie** : moyenne des octets (0-100%)
   - **Température** : variance des octets → créativité du LLM (0.3-0.9)
   - **Seed** : premier octet → reproductibilité

5. **Génération LLM** → Mistral-Trismegistus génère une réponse guidée par ces contraintes

6. **Ta réponse** → Tu reçois un conseil clair et pratique, unique à cet instant quantique

---

## La chaîne de fournisseurs QRNG

Le système implémente une chaîne de fournisseurs avec fallback automatique :

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. LfD QRNG (Leibniz Universität Hannover) ← PRIMAIRE              │
│     • Matériel ID Quantique mesurant le bruit de grenaille          │
│     • Endpoint: lfdr.de/qrng_api/qrng                               │
│     • Timeout: 8s, 2 tentatives avec backoff exponentiel            │
└─────────────────────────────────────────────────────────────────────┘
                              │ si échec
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2. NIST Beacon 2.0 ← SECONDAIRE                                    │
│     • Valeurs aléatoires signées cryptographiquement (512 bits)     │
│     • Mises à jour toutes les 60 secondes                           │
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

1. Calcul de l'énergie
   ───────────────────
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

4. Catégorie d'énergie
   ────────────────────
   0.00 - 0.20 : Très basse → "calme et réflexif"
   0.20 - 0.40 : Basse      → "mesuré et prudent"
   0.40 - 0.60 : Neutre     → "équilibré et objectif"  ← 0.537 ici
   0.60 - 0.80 : Haute      → "positif et encourageant"
   0.80 - 1.00 : Très haute → "confiant et direct"
```

### Prompt système

Le LLM reçoit un prompt strict pour des réponses concises :

```
Style: Clair, direct, utile. Donner une perspective actionnable.
Format: 1-2 phrases maximum, 30 mots max.
Jamais: vague, métaphores, poèmes, ou dépasser 2 phrases.
```

### Fallback si Ollama indisponible

Si le LLM n'est pas accessible, le système utilise des réponses pré-écrites sélectionnées selon la catégorie d'énergie quantique.

---

## Ce qui est quantique vs algorithmique vs IA

| Aspect | Source |
|--------|--------|
| Les 8 octets bruts (47, 182, 91...) | **Quantique** — Mesure physique réelle |
| L'énergie, variance, température | **Algorithmique** — Formules déterministes |
| Le texte de la réponse | **IA (LLM)** — Généré par Mistral-Trismegistus |
| Le "caractère" de la réponse | **Hybride** — LLM contraint par paramètres quantiques |

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
- Un LLM guidé par des contraintes dérivées de mesures quantiques
- Un outil de réflexion et d'introspection
- Une expérience qui connecte technologie et contemplation

---

## La philosophie

> "L'univers quantique ne prédit pas ton avenir. Il te rappelle que le futur n'est pas écrit — que chaque moment contient une infinité de possibilités. La réponse que tu reçois n'est pas LA vérité, mais UN point de départ pour ta propre réflexion."

Les nombres sont quantiques. La génération est IA. La signification, tu la crées.

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

*Les nombres sont quantiques. Les mots sont générés. La signification est tienne.*
