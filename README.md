# Quantum Oracle

> Connectez vos décisions à l'incertitude fondamentale de l'univers.

Quantum Oracle est une application web qui génère des réponses en utilisant de **vrais nombres aléatoires quantiques** — pas des algorithmes pseudo-aléatoires classiques.

---

## Comment ça fonctionne réellement ?

### La question clé : Est-ce un ordinateur quantique ?

**Non.** Quantum Oracle n'utilise pas un ordinateur quantique (comme ceux d'IBM ou Google).

Il utilise un **QRNG (Quantum Random Number Generator)** — un dispositif physique qui mesure des phénomènes quantiques réels pour générer des nombres véritablement aléatoires.

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
│  • Ex: ANU QRNG, LfD Hannover, ID Quantique                         │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Le voyage d'une consultation

```
┌──────────────┐     ┌─────────────────┐     ┌──────────────────┐
│  Ta question │────▶│  Quantum Oracle │────▶│  Ta réponse      │
│              │     │                 │     │                  │
│ "Dois-je..." │     │   ┌─────────┐   │     │ "L'univers..."   │
└──────────────┘     │   │  QRNG   │   │     └──────────────────┘
                     │   │   API   │   │
                     │   └────┬────┘   │
                     │        │        │
                     │   [47, 182,     │
                     │    91, 203...]  │
                     └────────┼────────┘
                              │
                     ┌────────▼────────┐
                     │ MESURE QUANTIQUE │
                     │ (Australie/ANU)  │
                     │                  │
                     │  Fluctuations    │
                     │  du vide         │
                     │  quantique       │
                     └──────────────────┘
```

### Étape par étape :

1. **Tu poses ta question** → L'app envoie une requête à l'API QRNG

2. **Mesure quantique réelle** → En Australie, un laser mesure les fluctuations du vide quantique (phénomène physique réel)

3. **Nombres générés** → Ces mesures produisent des nombres (ex: `[47, 182, 91, 203, 156, 88, 201, 127]`)

4. **Interprétation** → Un algorithme transforme ces nombres en réponse textuelle

5. **Ta réponse** → Tu reçois une guidance basée sur cette source d'aléatoire quantique

---

## La science derrière le QRNG

### Qu'est-ce que les "fluctuations du vide quantique" ?

Même le vide absolu n'est pas vraiment vide. Selon la mécanique quantique, des particules virtuelles apparaissent et disparaissent constamment — c'est le **principe d'incertitude de Heisenberg**.

```
    Le "vide" quantique

    ─────────────────────────────────
         ∿    ∿         ∿
      ∿     ∿    ∿   ∿     ∿
    ∿    ∿     ∿        ∿      ∿
         ∿        ∿   ∿     ∿
    ─────────────────────────────────

    Ces fluctuations sont FONDAMENTALEMENT
    imprévisibles — pas juste "difficiles
    à prévoir", mais IMPOSSIBLES à prévoir
    selon les lois de la physique.
```

### Comment l'ANU mesure ces fluctuations ?

L'Australian National University utilise un **laser** qui traverse un cristal optique. Les photons du laser subissent des fluctuations quantiques, et un détecteur mesure ces variations pour générer des nombres.

```
    ┌───────┐     ┌─────────┐     ┌──────────┐     ┌────────┐
    │ Laser │────▶│ Cristal │────▶│ Détecteur│────▶│ Nombre │
    └───────┘     └─────────┘     └──────────┘     └────────┘
                       │
                       ▼
                  Fluctuations
                  quantiques
                  (aléatoire pur)
```

---

## Partie algorithmique (ce que NOUS faisons)

### Comment les nombres deviennent une réponse ?

Les nombres quantiques sont **vraiment** aléatoires. Mais leur interprétation est **algorithmique** :

```
Nombres reçus: [47, 182, 91, 203, 156, 88, 201, 127]

1. Calcul de l'énergie
   ───────────────────
   Moyenne = (47+182+91+203+156+88+201+127) / 8 = 136.875
   Normalisée = 136.875 / 255 = 0.537 (échelle 0-1)

2. Classification
   ───────────────
   0.00 - 0.20 : Énergie basse    → Patience, introspection
   0.20 - 0.40 : Énergie prudente → Obstacles, préparation
   0.40 - 0.60 : Énergie neutre   → Équilibre, libre arbitre  ← 0.537 ici
   0.60 - 0.80 : Énergie positive → Avancer, opportunités
   0.80 - 1.00 : Énergie forte    → Feu vert, alignement

3. Sélection de la réponse
   ───────────────────────
   Index = premier nombre % 3 = 47 % 3 = 2
   → Sélectionne la 3ème réponse de la catégorie "neutre"
```

### Ce qui est quantique vs algorithmique

| Aspect | Source |
|--------|--------|
| Les nombres bruts (47, 182, 91...) | **Quantique** — Mesure physique réelle |
| L'interprétation en "énergie" | **Algorithmique** — Code que nous avons écrit |
| Les textes de réponse | **Humain** — Rédigés par nous |
| Le hasard de la sélection | **Quantique** — Basé sur les nombres reçus |

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
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND                                │
│  Next.js 16 + React 19 + Tailwind CSS                       │
│  PWA (Progressive Web App)                                   │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    BACKEND                                   │
│  Next.js API Routes (Edge Functions sur Vercel)             │
│  Clerk (Authentification)                                    │
└─────────────────────┬───────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
┌───────────┐  ┌───────────┐  ┌───────────┐
│  NeonDB   │  │  ANU QRNG │  │ LfD QRNG  │
│ (Postgres)│  │  (Primaire)│  │ (Fallback)│
│           │  │           │  │           │
│ Historique│  │  Australie │  │ Allemagne │
│ Utilisateurs│ │           │  │           │
└───────────┘  └───────────┘  └───────────┘
```

### Stack technique

| Composant | Technologie |
|-----------|-------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Auth | Clerk |
| Database | NeonDB (Serverless Postgres) |
| ORM | Drizzle |
| QRNG | ANU (primaire) → LfD Hannover (fallback) |
| Hosting | Vercel |
| Package Manager | Bun |

---

## Ce que Quantum Oracle N'EST PAS

- ❌ Un oracle divinatoire avec des pouvoirs surnaturels
- ❌ Un ordinateur quantique qui "calcule" ta destinée
- ❌ Une IA qui analyse ta question
- ❌ Une prédiction de l'avenir

## Ce que Quantum Oracle EST

- ✅ Une source d'aléatoire véritablement quantique
- ✅ Un outil de réflexion et d'introspection
- ✅ Une expérience qui connecte technologie et contemplation
- ✅ Un miroir qui te renvoie à toi-même

---

## La philosophie

> "L'univers quantique ne prédit pas ton avenir. Il te rappelle que le futur n'est pas écrit — que chaque moment contient une infinité de possibilités. La réponse que tu reçois n'est pas LA vérité, mais UN point de départ pour ta propre réflexion."

Les nombres sont quantiques. L'interprétation est humaine. La signification, tu la crées.

---

## Développement local

```bash
# Installation
bun install

# Variables d'environnement (.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...

# Lancer
bun dev

# Scripts disponibles
bun run dev        # Serveur de développement
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

*Les nombres sont quantiques. Les mots sont humains. La signification est tienne.*
