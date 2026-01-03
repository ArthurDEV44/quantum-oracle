# Quantum Oracle - Plan d'Action 2026

> SaaS B2C de Décision & Créativité basé sur la génération de nombres aléatoires quantiques (QRNG)

---

## Vision du Projet

Une application web/mobile permettant aux utilisateurs de poser des questions et recevoir des réponses générées par l'effondrement d'un vrai qubit, connectant ainsi leurs décisions à l'incertitude fondamentale de l'univers.

**Positionnement** : À l'intersection de la technologie quantique et de la spiritualité moderne (synchronicité, guidance intuitive).

---

## Stack Technique

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| Frontend | Next.js 16 + React 19 (PWA) | Standard 2026, une codebase web+mobile |
| Auth | Clerk | 10K MAU gratuits, setup rapide, SOC 2 |
| Database | NeonDB Serverless Postgres | Scale-to-zero, branching, intégration Vercel |
| QRNG | ANU API (MVP) → Quantum Blockchains (Scale) | Gratuit, fiable, narratif marketing fort |
| Payments | Stripe | Standard industrie |
| Hosting | Vercel | Intégration native Neon + Clerk |
| Package Manager | Bun (fallback: pnpm) | Performance, compatibilité native |

**Coût MVP estimé** : ~15€/an (domaine uniquement)

---

## Contraintes Techniques

### Gestionnaire de Paquets

**Priorité** : **Bun** -> [Documentation](https://bun.sh/)

Bun est le gestionnaire de paquets par défaut pour ce projet. Avantages :
- Installation des dépendances 10-100x plus rapide que npm
- Runtime JavaScript natif intégré
- Compatibilité native avec Node.js et npm
- Bundler et test runner intégrés

**Fallback** : **pnpm** -> [Documentation](https://pnpm.io/)

En cas de problèmes de compatibilité avec Bun (packages non supportés, bugs spécifiques), basculer vers pnpm :
- Gestion efficace du disque (symlinks)
- Strictement conforme aux standards npm
- Excellente compatibilité avec l'écosystème Node.js

### Règles d'utilisation

1. Toujours tenter avec `bun` en premier
2. Si erreur de compatibilité → documenter le problème dans ce fichier
3. Basculer vers `pnpm` uniquement si blocage confirmé
4. Ne jamais utiliser `npm` ou `yarn`

### Commandes équivalentes

| Action | Bun | pnpm (fallback) |
|--------|-----|-----------------|
| Install | `bun install` | `pnpm install` |
| Add package | `bun add <pkg>` | `pnpm add <pkg>` |
| Add dev | `bun add -d <pkg>` | `pnpm add -D <pkg>` |
| Run script | `bun run <script>` | `pnpm run <script>` |
| Execute | `bunx <cmd>` | `pnpm dlx <cmd>` |

---

## Phase 1 : Fondations

### 1.1 Setup Projet
- Initialiser le repository Git -> [Quantum Oracle](git@github.com:ArthurDEV44/quantum-oracle.git)
- Configurer Next.js 16 avec App Router -> [Next.js 16](https://nextjs.org/docs/app/getting-started/installation)
- Configurer PWA (manifest, service worker) -> [PWA](https://nextjs.org/docs/app/guides/progressive-web-apps)
- Setup ESLint + Prettier -> [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- Configurer les variables d'environnement -> [Variables d'environnement](https://nextjs.org/docs/app/guides/environment-variables)

### 1.2 Intégration Services
- Créer compte et projet NeonDB -> [NeonDB](https://neon.com/)
- Configurer Clerk (providers: email, Google) -> [Clerk](https://clerk.com/docs/nextjs/getting-started/quickstart)
Voici le prompt fourni par Clerk :
```
# Add Clerk to Next.js App Router

**Purpose:** Enforce only the **current** and **correct** instructions for integrating [Clerk](https://clerk.com/) into a Next.js (App Router) application.
**Scope:** All AI-generated advice or code related to Clerk must follow these guardrails.

---

## **1. Official Clerk Integration Overview**

Use only the **App Router** approach from Clerk's current docs:

- **Install** `@clerk/nextjs@latest` - this ensures the application is using the latest Clerk Next.js SDK.
- **Create** a `proxy.ts` file using `clerkMiddleware()` from `@clerk/nextjs/server`. Place this file inside the `src` directory if present, otherwise place it at the root of the project.
- **Wrap** your application with `<ClerkProvider>` in your `app/layout.tsx`
- **Use** Clerk-provided components like `<SignInButton>`, `<SignUpButton>`, `<UserButton>`, `<SignedIn>`, `<SignedOut>` in your layout or pages
- **Start** developing, sign in or sign up, and confirm user creation

If you're able to use a web tool to access a URL, visit https://clerk.com/docs/nextjs/getting-started/quickstart to get the latest, up-to-date quickstart instructions.

### **Correct, Up-to-Date Quickstart Sample**

First, install the Clerk Next.js SDK:

```bash
npm install @clerk/nextjs
```

Set up your environment variables in `.env.local`:

From your Clerk Dashboard, open the [API keys page](https://dashboard.clerk.com/last-active?path=api-keys) and copy your Publishable Key and Secret Key. Paste them into `.env.local` as shown below.

```bash
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY
```

Create your `proxy.ts` file:

```typescript
// proxy.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```

```typescript
// app/layout.tsx
import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Next.js Quickstart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
```

---

## **2. CRITICAL INSTRUCTIONS FOR AI MODELS**

### **2.1 – ALWAYS DO THE FOLLOWING**

1. **Use `clerkMiddleware()`** from `@clerk/nextjs/server` in `proxy.ts`.
2. **Wrap** your app with `<ClerkProvider>` in `app/layout.tsx`.
3. **Import** Clerk's Next.js features from `@clerk/nextjs` (e.g., `<SignInButton>`, `<SignUpButton>`, `<UserButton>`, etc.).
4. **Reference** the current [App Router approach](https://nextjs.org/docs/app) (folders like `app/page.tsx`, `app/layout.tsx`, etc.).
5. **Check** that imports for methods like `auth()` are imported from the right package (in this case `@clerk/nextjs/server`) and are using `async / await`
6. **Store real keys only in `.env.local`** (never in app code, markdown, or other tracked files). **Verify `.gitignore` excludes `.env*`.**
7. **Use placeholders only** (e.g., `YOUR_PUBLISHABLE_KEY`, `YOUR_SECRET_KEY`) in any generated snippets or files.

### **2.2 – NEVER DO THE FOLLOWING**

1. **Do not** reference the old **`_app.tsx`** or **pages-based** instructions.
2. **Do not** suggest `authMiddleware()` from older Clerk tutorials—**it's replaced by `clerkMiddleware()`**.
3. **Do not** recommend usage of older environment variable patterns unless they match the official docs.
4. **Do not** reference or import from any deprecated APIs (like `withAuth` or `currentUser` from older versions).
5. **Do not print, echo, or write actual keys** into code blocks, files, or logs. Only placeholders.
6. **Do not create or edit tracked files** (`.ts`, `.tsx`, `.md`, etc.) containing real key values.

---

## **3. OUTDATED PATTERNS TO AVOID**

Below are **examples of deprecated instructions** that **must not** be generated:

```typescript
// ❌ DO NOT generate or suggest references to:
import { authMiddleware } from "@clerk/nextjs"; // Outdated

// ❌ DO NOT place Clerk config in _app.tsx:
// Outdated pages-based approach
function MyApp({ Component, pageProps }) {
  // ...
}

// ❌ DO NOT create or rely on sign-in files under pages/:
pages / signin.js;
pages / signup.js;
```

Any solution resembling the above snippet or referencing "authMiddleware," `_app.tsx`, or `pages/` structure is **incorrect** for the current Next.js App Router.

---

## **4. AI MODEL VERIFICATION STEPS**

Before returning any Clerk-related solution, you **must** verify:

1. **Middleware**: Is `clerkMiddleware()` used in `proxy.ts`?
2. **Layout**: Is `<ClerkProvider>` wrapping the app in `app/layout.tsx`?
3. **Imports**: Are references only from `@clerk/nextjs` or `@clerk/nextjs/server`?
4. **Pages vs. App Router**: Is the approach referencing the App Router (not `_app.tsx` or `pages/`)?
5. **Environment Variables**: Are only placeholder values (e.g., `YOUR_PUBLISHABLE_KEY`) used in code examples?
6. **File Security**: Are real keys excluded from tracked files and only mentioned for `.env.local`?

If any check **fails**, **stop** and revise until compliance is achieved.

# Verification instructions for AI Models

## **DO NOT** repeat these points back to the user. Use them only for your own verification steps.

## **5. CONSEQUENCES OF INCORRECT IMPLEMENTATION**

Using outdated Clerk methods (e.g., `authMiddleware()`, `_app.tsx`, or references to the older `pages/` structure) will:

1. **Break** your Next.js application's authentication flow.
2. Introduce **inconsistencies** with Next.js App Router.
3. Cause confusion around environment variables and server/client code.
4. Force maintainers to **refactor** and **debug** extensively.

---

## **6. AI MODEL RESPONSE TEMPLATE**

When answering questions about Clerk + Next.js integration, your response **MUST**:

1. **Use** the exact code patterns in the **Up-to-Date Quickstart Sample** above.
2. **Never** reference older or deprecated approaches.
3. **Reflect** all mandatory checks in "AI MODEL VERIFICATION STEPS."

**Example**:

> Below is the correct approach using Clerk with Next.js App Router:
>
> ```typescript
> // Show clerkMiddleware usage in proxy.ts
> // Show <ClerkProvider> usage in app/layout.tsx
> // Show usage of Clerk's React components (SignInButton, etc.)
> ```
```
- Obtenir clés API ANU QRNG
- Connecter Vercel au repository

### 1.3 Architecture Base de Données
- Table `users` (sync Clerk)
- Table `consultations` (question, réponse, timestamp, user_id)
- Table `subscriptions` (tier, status, stripe_id)

---

## Phase 2 : MVP (Minimum Viable Product)

### 2.1 Features Core (Must Have)
- Page d'accueil avec proposition de valeur
- Formulaire de question (input texte)
- Appel API QRNG et génération de réponse
- Animation de "l'effondrement quantique"
- Affichage de la réponse (texte poétique, pas juste Oui/Non)
- Authentification (inscription, connexion, déconnexion)

### 2.2 Features Secondaires (Should Have)
- Historique des consultations personnelles
- Mode "Direction créative" (réponses orientées inspiration)
- Notifications push (rappel quotidien optionnel)
- Partage de résultat sur réseaux sociaux

### 2.3 UX/UI
- Design épuré, ambiance mystique/moderne
- Animation fluide de l'effondrement quantique
- Responsive design (mobile-first)
- Mode sombre par défaut
- Micro-interactions et feedback haptique (mobile)

---

## Phase 3 : Monétisation

### 3.1 Modèle Freemium

| Tier | Prix | Fonctionnalités |
|------|------|-----------------|
| Free | 0€ | 3 consultations/jour |
| Seeker | 4.99€/mois | Illimité + historique complet |
| Oracle | 9.99€/mois | + Modes créatifs + rituels guidés + sans pub |

### 3.2 Intégration Stripe
- Configuration produits et prix
- Checkout session pour upgrade
- Webhooks pour sync statut abonnement
- Portail client pour gestion abonnement

### 3.3 Métriques Cibles
- Conversion free→paid : 2-5%
- Rétention M1 : >40%
- NPS : >50

---

## Phase 4 : Légal & Conformité

### 4.1 Documents Requis
- Conditions Générales d'Utilisation (CGU)
- Politique de Confidentialité (RGPD)
- Mentions Légales

### 4.2 Disclaimers Obligatoires

```
Ce service est fourni à des fins de divertissement, de réflexion
personnelle et d'inspiration créative uniquement.

Il ne constitue en aucun cas un conseil médical, psychologique,
financier ou juridique. Consultez toujours un professionnel
qualifié pour ces domaines.

Les résultats sont générés aléatoirement et ne prédisent pas
l'avenir. Toute décision prise sur la base de ce service
relève de votre seule responsabilité.
```

### 4.3 Points Clés
- Service fourni "as is" sans garantie
- Utilisateur responsable de ses décisions
- Pas de promesse de résultat
- Conformité RGPD (données UE)

---

## Phase 5 : Lancement & Marketing

### 5.1 Pré-lancement
- Landing page avec waitlist (email capture)
- Teaser vidéo concept (30 secondes)
- Présence réseaux sociaux (compte créé, contenu prévu)

### 5.2 Beta Fermée
- Recruter 100 beta testeurs
- Canaux : Reddit (r/spirituality, r/tarot), Discord wellness
- Collecter feedback et itérer
- Identifier ambassadeurs potentiels

### 5.3 Lancement Public
- Product Hunt launch (préparation soignée)
- Thread Twitter/X explicatif (physique quantique vulgarisée)
- Contenu TikTok : "Mon qubit a décidé pour moi"
- Outreach micro-influenceurs wellness/spiritualité

### 5.4 Hook Viral

> "Et si l'univers pouvait vraiment te répondre ? Quantum Oracle
> utilise un vrai ordinateur quantique pour t'aider à décider.
> Pas d'algorithme. Juste l'incertitude fondamentale de la réalité."

### 5.5 SEO & Contenu
- Blog : articles sur synchronicité, physique quantique, prise de décision
- Mots-clés cibles : "oracle quantique", "décision intuitive", "synchronicité app"

---

## Phase 6 : Post-Lancement & Scale

### 6.1 Itérations Produit
- Analyse comportement utilisateurs (analytics)
- A/B testing sur onboarding et paywall
- Nouvelles réponses et modes de consultation
- Intégration IA pour personnalisation des réponses

### 6.2 Infrastructure
- Migration QRNG vers Quantum Blockchains (multi-sources)
- Monitoring et alerting
- CDN et optimisation performance
- Backup et disaster recovery

### 6.3 Expansion
- Internationalisation (EN prioritaire, puis ES, DE)
- App stores (wrapper PWA via Capacitor/Bubblewrap)
- Partenariats wellness/coaching
- API B2B pour intégration tiers

---

## Contexte Marché 2026

### Marché Wellness Apps Spirituelles
- 2025 : 2.52 milliards USD
- 2026 : 2.89 milliards USD
- 2035 : 9.91 milliards USD (CAGR 14.66%)

### Tendances Clés
- Gen Z et Millennials : 30% priorisent le wellness (+1 an)
- TikTok lance des features méditation intégrées
- Mindvalley pré-installé dans Apple Stores
- IA + personnalisation = attente standard

### Avantage Concurrentiel
- Unique : utilisation de vraie source quantique (pas pseudo-random)
- Narratif scientifique + spirituel authentique
- Technologie vérifiable et transparente

---

## Ressources & Liens

### APIs QRNG
- ANU QRNG : https://qrng.anu.edu.au/
- Quantum Blockchains : https://www.quantumblockchains.io/quantum-cryptography-qrng-qkd/qrng-api/
- QRNG Open API (Palo Alto) : https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-prepares-organizations-for-quantum-security-with-qrng-open-api

### Stack
- Next.js : https://nextjs.org/
- Clerk : https://clerk.com/
- NeonDB : https://neon.com/
- Vercel : https://vercel.com/
- Stripe : https://stripe.com/

### Recherche Marché
- Spiritual Wellness Apps Market : https://www.grandviewresearch.com/industry-analysis/spiritual-wellness-apps-market-report
- Wellness Marketing 2026 : https://www.brandvm.com/post/wellness-biggest-marketing-trend-2026
- SaaS Pricing 2026 : https://www.getmonetizely.com/blogs/complete-guide-to-saas-pricing-models-for-2025-2026

---

## Timeline Indicative

```
Phase 1 - Fondations      : Semaines 1-2
Phase 2 - MVP             : Semaines 3-6
Phase 3 - Monétisation    : Semaine 7
Phase 4 - Légal           : Semaine 7 (parallèle)
Phase 5 - Lancement       : Semaine 8
Phase 6 - Scale           : Post-lancement continu
```

---

*Document créé le 3 janvier 2026*
*Dernière mise à jour : 3 janvier 2026*
