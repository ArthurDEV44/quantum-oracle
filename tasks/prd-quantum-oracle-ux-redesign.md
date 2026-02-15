[PRD]
# PRD: Quantum Oracle — Refonte Complète UX/UI Dark Mode + CossUI

## Overview

Refonte totale de l'interface de Quantum Oracle : passage d'un thème light blanc+serif à un design dark mode premium inspiré de Cosmos.so, Linear, Resend et Astral Frontier. Migration complète de tous les composants UI vers la bibliothèque CossUI (Base UI + Tailwind CSS). Nouveau design system avec palette warm gold + violet sur fond sombre, typographie mystique (Instrument Serif italic + Inter), et micro-interactions Tailwind-only.

**Périmètre :** Tout le site — Home (hero, form, résultats bento grid, HowItWorks), History (hero, liste, empty state), Navbar, Footer, composants UI partagés.

**Stack inchangé :** Next.js 16, React 19, Turbopack, Bun, Tailwind CSS v4, @base-ui/react, Clerk.

**Inspirations design (FontOfWeb) :**
- **Cosmos.so** (pin #713, #710, #715) — fond #0C0C0C, texte warm off-white #E6E5E0, accents dorés #A49B8B, typo GT Super Display + Favorit
- **Linear** (pin #4904) — fond #0F1012, UI ultra-clean, Inter, accents subtils
- **Resend** (pin #5162) — fond #020202, high contrast, accents violet/vert
- **Astral Frontier** (pin #630) — fond #101316, palette astrale bleu-deep/rose poudré
- **MDX.so** (pin #6341) — fond #000, typo Orlean serif + Times, minimal
- **Charlie Osborne** (pin #1192) — Inter + Instrument Serif italic, B&W contrasté

## Goals

- Passer l'ensemble du site en dark mode premium (fond #0C0C0C à #14151A)
- Migrer 100% des composants UI vers CossUI (Button, Card, Tooltip, Skeleton, Badge, Field, Textarea, Toast, Dialog, Tabs, Accordion, Progress, Separator, Empty, ScrollArea, Spinner, Meter)
- Adopter une typographie mystique : Instrument Serif (italic, headings) + Inter (body) + Geist Mono (code)
- Implémenter une palette warm gold (#D4A574, #C9A87C, #A49B8B) + violet (#7C3AED, #6D28D9, #4338CA) sur fond sombre
- Refondre les 2 pages (Home + History) + composants partagés (Navbar, Footer)
- Atteindre la conformité WCAG AA sur tous les textes en dark mode
- Conserver l'architecture Tailwind CSS-only pour les animations (zéro lib JS externe)
- Améliorer le score Lighthouse Performance et Accessibility

## Quality Gates

Ces commandes doivent passer pour chaque user story :
- `bun run typecheck` — TypeScript strict check (tsc --noEmit)
- `bun run lint` — ESLint
- `bun run build` — Next.js production build

## User Stories

---

### US-001: Installer CossUI et les tokens de couleur

**Description :** En tant que développeur, je veux installer la bibliothèque CossUI et ses tokens de couleur afin de disposer de tous les composants nécessaires à la refonte.

**Acceptance Criteria :**
- [x] Installer les composants CossUI nécessaires via la CLI shadcn : `@coss/button`, `@coss/card`, `@coss/badge`, `@coss/skeleton`, `@coss/spinner`, `@coss/tooltip`, `@coss/accordion`, `@coss/collapsible`, `@coss/tabs`, `@coss/field`, `@coss/textarea`, `@coss/toast`, `@coss/dialog`, `@coss/separator`, `@coss/scroll-area`, `@coss/progress`, `@coss/meter`, `@coss/empty`, `@coss/label`, `@coss/alert`
- [x] Installer les tokens de couleur : `@coss/colors-neutral`
- [x] Créer/mettre à jour le fichier `components.json` pour configurer le chemin `components/ui/` et les alias
- [x] Ajouter `isolation: isolate` au wrapper root dans `layout.tsx` (requis par Base UI pour les portals)
- [x] Ajouter `position: relative` au `<body>` pour iOS Safari 26+
- [x] Vérifier que tous les composants sont importables depuis `@/components/ui/*`
- [x] Ne PAS supprimer les anciens composants custom à cette étape (migration progressive)
- [x] Fichiers impactés : `package.json`, `components.json`, `src/app/layout.tsx`, `src/components/ui/*`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI installation setup Base UI shadcn CLI add components" pour la procédure d'installation et la config `components.json`
- **FontOfWeb** : Non nécessaire

---

### US-002: Implémenter le design system dark mode dans globals.css

**Description :** En tant qu'utilisateur, je veux un site avec un fond sombre premium et une palette warm gold + violet afin de vivre une expérience mystique et immersive.

**Acceptance Criteria :**
- [x] Remplacer toutes les CSS variables de couleur dans `globals.css` :
  - `--background: #0C0C0C` (near-black, Cosmos style)
  - `--foreground: #E6E5E0` (warm off-white)
  - `--text-secondary: #A49B8B` (warm muted)
  - `--text-tertiary: #8A857E` (warm dim — WCAG AA compliant 5.3:1 on body, 4.9:1 on cards)
  - `--accent: #D4A574` (warm gold)
  - `--accent-violet: #7C3AED` (violet)
  - `--card: #161618` (dark surface)
  - `--card-elevated: #1C1C1F` (slightly lighter surface)
  - `--card-border: rgba(255, 255, 255, 0.06)` (subtle white border)
  - `--surface-secondary: #111113` (inner surface)
  - `--surface-tertiary: #1A1A1D` (third-level surface)
- [x] Définir les gradients :
  - `--gradient-primary: linear-gradient(135deg, #D4A574 0%, #C9A87C 50%, #A49B8B 100%)` (warm gold)
  - `--gradient-cta: linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)` (violet)
  - `--gradient-esoteric: linear-gradient(135deg, #D4A574 0%, #7C3AED 100%)` (gold → violet)
- [x] Définir les shadows adaptées au dark mode :
  - `--card-shadow: 0 2px 12px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)`
  - `--card-shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)`
  - `--glow-gold: 0 0 40px rgba(212, 165, 116, 0.15)`
  - `--glow-violet: 0 0 40px rgba(124, 58, 237, 0.15)`
- [x] Mettre à jour le `.mesh-gradient` pour un fond ambiant dark (radial gradients subtils violet/gold sur #0C0C0C)
- [x] Mettre à jour le `.text-gradient` pour utiliser le gradient gold → violet
- [x] Ajouter les tokens CossUI pour les variantes sémantiques : `--destructive`, `--info`, `--success`, `--warning` en dark mode
- [x] Adapter les tokens de scrollbar (`.scrollbar-none` inchangé, ajuster couleur si thumb visible)
- [x] Le `<body>` utilise `bg-[#0C0C0C] text-[#E6E5E0]`
- [x] Fichier impacté : `src/app/globals.css`

**MCP Tools :**
- **Context7** : `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS v4 @theme custom properties CSS variables dark mode configuration" pour la syntaxe `@theme` en v4
- **FontOfWeb** : `display_pin` **#713** (Cosmos.so) et **#710** pour référence palette dark ; `batch_color_operations` avec `type: "contrast"` pour valider tout nouveau couple couleur/fond ajouté

---

### US-003: Migrer la typographie vers Instrument Serif + Inter

**Description :** En tant qu'utilisateur, je veux une typographie élégante et mystique afin de ressentir l'univers ésotérique dès la lecture.

**Acceptance Criteria :**
- [x] Remplacer `DM_Serif_Display` par `Instrument_Serif` (Google Fonts) dans `layout.tsx` :
  - `const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-heading", display: "swap" })`
- [x] Remplacer `Plus_Jakarta_Sans` par `Inter` dans `layout.tsx` :
  - `const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" })`
- [x] Conserver `Geist_Mono` pour le monospace (`--font-geist-mono`)
- [x] Mettre à jour les CSS variables : `--font-heading: "Instrument Serif", serif` et `--font-body: "Inter", sans-serif`
- [x] Dans `globals.css`, les headings h1-h6 utilisent `font-family: var(--font-heading)` avec `font-style: italic` par défaut
- [x] Headings en `font-normal` (Instrument Serif n'a que le weight 400)
- [x] Body text en Inter avec `letter-spacing: -0.011em` et `-webkit-font-smoothing: antialiased`
- [x] Ajuster les tailles de heading pour le dark mode : plus grand, plus aéré (`leading-[0.9]` au lieu de `0.85`)
- [x] Fichiers impactés : `src/app/layout.tsx`, `src/app/globals.css`

**MCP Tools :**
- **Context7** : `resolve-library-id` "next.js" → `query-docs` "next/font/google Instrument_Serif Inter font optimization variable fonts" pour l'API `next/font`
- **FontOfWeb** : `font_search` "Instrument Serif" pour vérifier la disponibilité et les poids ; `display_pin` **#1192** (Charlie Osborne) pour référence visuelle du pairing Inter + Instrument Serif italic

---

### US-004: Migrer le composant Card vers CossUI Card

**Description :** En tant que développeur, je veux un composant Card CossUI unifié en dark mode afin d'avoir un système de cards cohérent sur tout le site.

**Acceptance Criteria :**
- [x] Remplacer le composant `Card` custom actuel (`src/components/ui/card.tsx`) par le composant CossUI Card installé en US-001
- [x] Personnaliser le style du Card CossUI pour le dark mode :
  - Background : `bg-[#161618]`
  - Border : `border-white/[0.06]`
  - Radius : `rounded-2xl`
  - Shadow : `shadow-[0_2px_12px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)]`
  - Hover : `hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]`
- [x] Exporter les mêmes sous-composants : `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardPanel`, `CardFooter`
- [x] Conserver `CardFrame`, `CardFrameHeader`, `CardFrameTitle`, `CardFrameDescription`, `CardFrameFooter` si utilisés
- [x] Utiliser `cn()` (clsx + tailwind-merge) pour la composition de classes
- [x] Mettre à jour tous les imports dans les composants consommateurs (grep pour `from "@/components/ui/card"`)
- [x] Aucune régression fonctionnelle sur les cards existantes
- [x] Fichiers impactés : `src/components/ui/card.tsx`, tous les composants qui importent Card

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Card CardHeader CardPanel CardFooter CardTitle CardDescription render prop Base UI useRender mergeProps" pour l'API Card CossUI et le pattern `render`
- **FontOfWeb** : Non nécessaire

---

### US-005: Redesign du Navbar en dark mode + CossUI

**Description :** En tant qu'utilisateur, je veux une navbar dark immersive avec effet frosted glass sombre afin de naviguer sans quitter l'ambiance mystique.

**Acceptance Criteria :**
- [x] Fond par défaut : transparent (sur le hero)
- [x] Fond au scroll (> 20px) : `rgba(12, 12, 12, 0.72)` avec `backdrop-filter: blur(20px) saturate(180%)` (frosted glass dark)
- [x] Border au scroll : `border-b border-white/[0.06]`
- [x] Logo en `text-[#E6E5E0]` (warm off-white)
- [x] Liens de navigation en `text-[#A49B8B]` avec `hover:text-[#E6E5E0]`
- [x] CTA "Consulter" : CossUI `Button` avec `variant="default"` personnalisé avec le gradient violet `--gradient-cta`
- [x] CTA sticky (scroll > 600px) : même Button violet, transition `opacity` + `translate-y`
- [x] Remplacer les `<button>` et `<a>` inline par CossUI `Button` (variants: `default`, `outline`, `ghost`)
- [x] Bouton Clerk `UserButton` : adapter le thème Clerk au dark mode si possible
- [x] Focus rings : `ring-violet-600/40` sur fond dark
- [x] Mobile : le layout ne change pas structurellement, juste les couleurs dark
- [x] Fichier impacté : `src/components/Navbar.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Button variant outline ghost default size render prop" ; `resolve-library-id` "next.js" → `query-docs` "usePathname next/navigation client component"
- **FontOfWeb** : `display_pin` **#4904** (Linear) pour référence navbar dark ultra-clean ; `display_pin` **#5162** (Resend) pour frosted glass dark nav

---

### US-006: Redesign du Footer en dark mode + CossUI

**Description :** En tant qu'utilisateur, je veux un footer dark cohérent avec la nouvelle direction visuelle afin de conserver l'immersion jusqu'en bas de page.

**Acceptance Criteria :**
- [x] Fond : `bg-[#0A0A0A]` (plus sombre que le body, crée une séparation subtile)
- [x] Séparateur en haut : `border-t border-white/[0.06]`
- [x] Zone CTA : titre en Instrument Serif italic, sous-titre en `text-[#A49B8B]`, bouton CossUI `Button` avec gradient violet
- [x] Zone liens : 3 colonnes, titres en `text-[#E6E5E0] text-[13px] font-semibold uppercase tracking-wide`, liens en `text-[#8A857E]` avec `hover:text-[#A49B8B]`
- [x] Copyright : `text-white/20`
- [x] Utiliser CossUI `Separator` entre les zones CTA et liens
- [x] Remplacer les `<a>` inline par des liens stylisés cohérents
- [x] Fichier impacté : `src/components/Footer.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Separator Button" ; `resolve-library-id` "next.js" → `query-docs` "Next.js Link component"
- **FontOfWeb** : `display_pin` **#5162** (Resend) pour référence footer dark SaaS

---

### US-007: Redesign du HomeHeroSection en dark mode

**Description :** En tant qu'utilisateur, je veux un hero section sombre et mystique avec des accents gold qui captent immédiatement l'attention afin de comprendre la proposition de valeur.

**Acceptance Criteria :**
- [x] Supprimer le fond blanc, le hero vit directement sur le `#0C0C0C` du body
- [x] Overline "Entropie quantique" : texte en `text-[#D4A574]` (warm gold) avec un dot gradient gold
- [x] Titre "L'Oracle Quantique" :
  - Première ligne : `text-[#E6E5E0]` (warm off-white)
  - Deuxième ligne : gradient text gold → violet (`bg-gradient-to-r from-[#D4A574] via-[#C9A87C] to-[#7C3AED]`)
  - Typo : Instrument Serif italic, tailles `text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem]`
- [x] Subtitle : `text-[#A49B8B]` (warm muted), `font-light`
- [x] CTA primaire "Consulter l'Oracle" : CossUI `Button` avec gradient violet, shadow `--glow-violet`
- [x] CTA secondaire "Comment ça marche" : CossUI `Button variant="outline"` avec `border-white/[0.12]` et `text-[#A49B8B]`
- [x] Trust signals badges : CossUI `Badge variant="outline"` avec `border-white/[0.08] text-[#8A857E]`
  - "QRNG Hannover", "Mistral AI", "6+ Traditions"
- [x] Ambient glow : radial gradient subtil gold derrière le titre (`radial-gradient(ellipse at center, rgba(212,165,116,0.06) 0%, transparent 60%)`)
- [x] Conserver les animations staggered `hero-enter` mais adapter les keyframes pour le dark (pas de `translateY(20px)` → garder la même mécanique)
- [x] Fichier impacté : `src/components/home/HomeHeroSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS gradient text responsive typography bg-gradient-to-r" ; `resolve-library-id` "coss-ui" → `query-docs` "CossUI Button Badge variant outline"
- **FontOfWeb** : `display_pin` **#713** (Cosmos hero dark) et **#715** pour typo serif sur dark ; `display_pin` **#630** (Astral Frontier) pour palette astrale sur hero dark ; `search_design_inspiration` query "dark hero section serif typography premium landing" pour inspiration complémentaire

---

### US-008: Redesign du ConsultFormSection avec CossUI Field + Textarea

**Description :** En tant qu'utilisateur, je veux un formulaire de consultation élégant en dark mode avec des composants CossUI afin de poser ma question dans un cadre immersif.

**Acceptance Criteria :**
- [x] Envelopper le formulaire dans un CossUI `Card` dark (style `bg-[#161618] border-white/[0.06]`)
- [x] Utiliser CossUI `Field` + `FieldLabel` pour le label "Votre question"
- [x] Utiliser CossUI `Textarea` (size `lg`) pour le champ de saisie :
  - `bg-[#111113]` (surface secondaire)
  - `focus:bg-[#161618]` (légèrement plus clair au focus)
  - `focus:ring-2 focus:ring-violet-600/30`
  - `text-[#E6E5E0]` pour le texte saisi
  - `placeholder:text-[#8A857E]` pour le placeholder
  - `min-h-[130px]` desktop, `min-h-[100px]` mobile
- [x] Bouton submit : CossUI `Button` avec gradient violet `--gradient-cta`
  - État loading : CossUI `Spinner` + texte "Interrogation des flux..."
  - État disabled : `opacity-40 cursor-not-allowed`
- [x] Compteur de caractères (`maxLength={500}`) en `text-[#8A857E] text-[12px]`
- [x] Section id `consult-form` conservée pour le scroll-to
- [x] Fichier impacté : `src/components/home/ConsultFormSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Field FieldLabel Textarea size lg Spinner Button disabled" pour l'API form components
- **FontOfWeb** : Non nécessaire

---

### US-009: Redesign de la card Oracle Response (glassmorphic dark)

**Description :** En tant qu'utilisateur, je veux que la réponse de l'oracle se démarque comme l'élément le plus sacré de la page afin de la lire avec révérence.

**Acceptance Criteria :**
- [x] Style glassmorphic dark :
  - `bg-white/[0.03] backdrop-blur-2xl`
  - `border border-white/[0.08]`
  - `shadow-[0_8px_32px_rgba(212,165,116,0.06),0_1px_3px_rgba(0,0,0,0.3)]` (glow gold subtil)
- [x] Gradient ambient en arrière-plan : `bg-gradient-to-br from-[#D4A574]/[0.03] via-transparent to-[#7C3AED]/[0.03]`
- [x] Label "Réponse de l'Oracle" : `text-[11px] font-semibold tracking-[0.06em] uppercase text-[#D4A574]/70`
- [x] Texte de la réponse : `text-[17px] leading-relaxed text-[#E6E5E0]` avec `font-style: italic` (Instrument Serif)
- [x] La card est full-width dans le grid (pas de col-span, elle est au-dessus du grid)
- [x] CossUI `Card` comme base avec classes custom appliquées via `className`
- [x] Fichier impacté : `src/components/home/ConsultResultSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS backdrop-blur bg-gradient glassmorphism" pour les utilitaires glassmorphic
- **FontOfWeb** : `display_pin` **#713** (Cosmos) pour référence card glassmorphic dark ; `search_design_inspiration` query "glassmorphism dark card premium" pour inspiration additionnelle

---

### US-010: Redesign du bento grid des résultats en dark mode

**Description :** En tant qu'utilisateur, je veux voir les résultats de ma consultation dans un bento grid dark avec des cards tradition élégantes afin de visualiser toutes les traditions d'un coup d'oeil.

**Acceptance Criteria :**
- [x] Layout grid inchangé : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- [x] Chaque TraditionCard utilise CossUI `Card` en dark :
  - `bg-[#161618] border-white/[0.06] rounded-2xl`
  - Hover : `hover:border-white/[0.1] hover:-translate-y-1 transition-all duration-200`
- [x] Structure de chaque card :
  - Symbole emoji : `text-2xl`
  - Label tradition : `text-[11px] font-semibold tracking-[0.06em] uppercase text-[#A49B8B]`
  - Valeur principale : `text-[15px] font-medium text-[#E6E5E0]`
  - Bouton expand : CossUI `Button variant="ghost" size="icon-sm"` avec icône chevron, rotation 180° à l'expansion
- [x] Expansion inline : CossUI `Collapsible` + `CollapsiblePanel` pour le détail
  - Texte détail en `text-[13px] text-[#A49B8B] leading-relaxed`
  - Transition `max-height` + `opacity` via Tailwind
- [x] Traditions affichées : Yi Jing, Tarot, Kabbale, Hermétisme, Éléments, Géom. Sacrée + conditionnellement Ifá, Runes, Géomancie, Alchimie, Chakra, Gématria
- [x] Fichier impacté : `src/components/home/ConsultResultSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Collapsible CollapsibleTrigger CollapsiblePanel Button variant ghost size icon-sm" ; `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS grid cols responsive gap"
- **FontOfWeb** : `display_pin` **#4904** (Linear) pour référence grid/dashboard dark layout ; `search_design_inspiration` query "bento grid dark cards dashboard" pour layout inspiration

---

### US-011: Redesign des cards Synthèse + Signal Quantique en dark mode

**Description :** En tant qu'utilisateur, je veux des cards Synthèse et Signal Quantique visuellement distinctes en dark mode afin de comprendre les méta-analyses de ma consultation.

**Acceptance Criteria :**
- [x] Card Synthèse (`lg:col-span-2`) :
  - CossUI `Card` dark avec bordure gold subtile : `border-[#D4A574]/10`
  - Barre d'énergie : CossUI `Meter` ou `Progress` avec `ProgressIndicator` en gradient gold
  - Symbole de polarité (☯️, ☀️, ⚖️) en `text-[#D4A574]`
  - Labels (cosmic tone, phase, convergences) en `text-[#A49B8B]` uppercase
  - Valeurs en `text-[#E6E5E0] font-medium`
  - Convergences list : CossUI `Badge variant="outline"` pour chaque item
- [x] Card Signal Quantique (`lg:col-span-2`) :
  - CossUI `Card` dark
  - Grid de 8 hex bytes : `grid-cols-8 gap-1.5`
  - Chaque byte : `bg-[#111113] rounded-lg px-2 py-1.5 text-center font-mono text-[#E6E5E0] text-[13px]`
  - Fingerprint zone : `bg-[#0A0A0A] rounded-2xl p-4` avec le hash en `text-[#8A857E] font-mono text-[11px]`
  - Explication en `text-[#8A857E] text-[12px]`
  - Timestamp : CossUI `Badge variant="secondary"` avec date formatée
- [x] Fichier impacté : `src/components/home/ConsultResultSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Progress ProgressTrack ProgressIndicator Meter MeterTrack MeterIndicator Badge variant outline" pour les composants de la card Synthèse
- **FontOfWeb** : `batch_color_operations` avec `type: "contrast"` pour valider `#D4A574` (gold accent) sur `#161618` (card surface)

---

### US-012: Redesign du SkeletonLoader avec CossUI Skeleton

**Description :** En tant qu'utilisateur, je veux voir des placeholders animés dark pendant le chargement afin de comprendre ce qui va apparaître.

**Acceptance Criteria :**
- [x] Remplacer les divs `animate-pulse bg-[#F4F4F5]` par CossUI `Skeleton` components
- [x] Skeleton sur fond dark : customiser le Skeleton CossUI pour utiliser `bg-[#1A1A1D]` au lieu du gris par défaut
- [x] Structure du skeleton mime le layout réel : 1 card oracle (hauteur ~120px) + grid de 6 cards tradition + 2 wide cards
- [x] Les Skeleton respectent les mêmes `rounded-2xl` que les vrais cards
- [x] Animation pulse adaptée au dark (subtile, pas agressive)
- [x] Fichier impacté : `src/components/home/SkeletonLoader.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Skeleton className animated pulse" pour l'API Skeleton
- **FontOfWeb** : Non nécessaire

---

### US-013: Redesign du MobileCTA en dark mode

**Description :** En tant qu'utilisateur mobile, je veux un CTA sticky dark en bas d'écran afin de pouvoir agir à tout moment.

**Acceptance Criteria :**
- [x] Gradient overlay en bas : `linear-gradient(to top, rgba(12,12,12,0.98) 0%, rgba(12,12,12,0.95) 80%, transparent 100%)`
- [x] Bouton : CossUI `Button` full-width avec gradient violet `--gradient-cta`
- [x] Shadow : `--glow-violet` pour un effet lumineux
- [x] Apparition au scroll > 400px, disparition quand form visible (logique IntersectionObserver inchangée)
- [x] `md:hidden` pour mobile only
- [x] Fichier impacté : `src/components/home/MobileCTA.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Button variant default size" ; `resolve-library-id` "react" → `query-docs` "React IntersectionObserver useEffect useRef"
- **FontOfWeb** : Non nécessaire

---

### US-014: Redesign de la section HowItWorks en dark mode

**Description :** En tant qu'utilisateur, je veux une section "Comment ça marche" visuellement engageante en dark mode avec des accents gold afin de comprendre le processus.

**Acceptance Criteria :**
- [x] Fond : transparent sur `#0C0C0C` (body)
- [x] Titre section : Instrument Serif italic en `text-[#E6E5E0]`
- [x] Overline : `text-[#D4A574]` (warm gold)
- [x] 3 step cards dans CossUI `Card` dark :
  - Numéro : gradient text gold → violet, `text-5xl font-normal` (Instrument Serif)
  - Titre : `text-[#E6E5E0] font-medium`
  - Description : `text-[#A49B8B] text-[14px] leading-relaxed`
- [x] Ligne de connexion desktop (`hidden md:block`) : gradient `from-[#D4A574]/20 via-[#7C3AED]/20 to-[#D4A574]/20`
- [x] Grid : `grid-cols-1 md:grid-cols-3 gap-6`
- [x] Fichiers impactés : `src/components/home/how-it-works/HowItWorksSection.tsx`, `src/components/home/how-it-works/SimpleExplanation.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Card CardHeader CardPanel variant props" ; `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS v4 grid responsive columns gap"
- **FontOfWeb** : `display_pin` pin_id `"713"` (Cosmos.so step cards dark) pour l'inspiration visuelle des step cards

---

### US-015: Redesign du HistoryHeroSection en dark mode

**Description :** En tant qu'utilisateur, je veux un hero de la page History cohérent avec le nouveau design dark afin de conserver l'immersion entre les pages.

**Acceptance Criteria :**
- [x] Overline "Vos consultations" en `text-[#D4A574]` (warm gold)
- [x] Titre "Chroniques Quantiques" en Instrument Serif italic, `text-[#E6E5E0]`
- [x] Subtitle en `text-[#A49B8B]`
- [x] CTA "Nouvelle Consultation" : CossUI `Button` avec gradient violet
- [x] Ambient glow : radial gradient violet subtil derrière le titre
- [x] Fichier impacté : `src/components/history/HistoryHeroSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Button variant size gradient" ; `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS v4 radial-gradient background"
- **FontOfWeb** : `display_pin` pin_id `"713"` (Cosmos.so hero section dark) pour l'inspiration du hero dark avec glow

---

### US-016: Redesign du HistoryListSection en dark mode

**Description :** En tant qu'utilisateur, je veux voir mes consultations passées dans des cards dark élégantes afin de les relire confortablement.

**Acceptance Criteria :**
- [x] Chaque consultation dans un CossUI `Card` dark :
  - `bg-[#161618] border-white/[0.06] rounded-2xl`
  - Hover : `hover:border-white/[0.1]`
- [x] Label "QUESTION" : `text-[#D4A574] text-[10px] font-mono tracking-[0.2em] uppercase`
- [x] Texte question : `text-[#E6E5E0] text-base font-medium`
- [x] Divider gradient : `from-[#D4A574]/20 via-[#7C3AED]/20 to-transparent`
- [x] Label "L'ORACLE A RÉPONDU" : `text-[#7C3AED] text-[10px] font-mono tracking-[0.2em] uppercase`
- [x] Texte réponse : `text-[#A49B8B] text-sm`
- [x] Timestamp : CossUI `Badge variant="outline"` en `text-[#8A857E] font-mono text-[10px]`
- [x] Le layout flex responsive est conservé (`flex-col md:flex-row`)
- [x] Fichier impacté : `src/components/history/HistoryListSection.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Card CardHeader CardPanel Badge variant outline" ; `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS v4 divide gradient border opacity"
- **FontOfWeb** : `display_pin` pin_id `"4904"` (Linear dark list UI) pour l'inspiration des cards de liste dark

---

### US-017: Redesign du HistoryEmptyState avec CossUI Empty

**Description :** En tant qu'utilisateur sans consultations, je veux un empty state dark accueillant afin d'être motivé à faire ma première consultation.

**Acceptance Criteria :**
- [x] Utiliser CossUI `Empty` + `EmptyHeader` + `EmptyMedia` + `EmptyTitle` + `EmptyDescription` + `EmptyContent`
- [x] Icône : SVG clock en `text-[#D4A574]`
- [x] `EmptyMedia` avec `variant="icon"` et background glow gold : `radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)`
- [x] `EmptyTitle` : "Aucune consultation" en `text-[#E6E5E0]`
- [x] `EmptyDescription` : texte en `text-[#A49B8B]`
- [x] CTA : CossUI `Button` avec gradient gold → violet `--gradient-esoteric`
- [x] Fichier impacté : `src/components/history/HistoryEmptyState.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Empty EmptyHeader EmptyMedia EmptyTitle EmptyDescription EmptyContent variant icon" ; `resolve-library-id` "coss-ui" → `query-docs` "CossUI Button variant size gradient"
- **FontOfWeb** : Non nécessaire

---

### US-018: Redesign du HistorySkeleton avec CossUI Skeleton

**Description :** En tant qu'utilisateur, je veux des placeholders dark pendant le chargement de l'historique afin de savoir que les données arrivent.

**Acceptance Criteria :**
- [x] 3 skeleton cards utilisant CossUI `Skeleton`
- [x] Chaque card : `bg-[#161618] rounded-2xl border border-white/[0.06]`
- [x] Skeleton bars en `bg-[#1A1A1D]` avec `rounded-full`
- [x] Animation pulse subtile sur dark
- [x] Fichier impacté : `src/components/history/HistorySkeleton.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Skeleton className rounded animated pulse"
- **FontOfWeb** : Non nécessaire

---

### US-019: Migrer le Tooltip vers CossUI Tooltip

**Description :** En tant que développeur, je veux utiliser le CossUI Tooltip au lieu du composant custom afin d'avoir un comportement tooltip standardisé et accessible.

**Acceptance Criteria :**
- [x] Remplacer `src/components/ui/Tooltip.tsx` custom par le CossUI `Tooltip` + `TooltipTrigger` + `TooltipPopup`
- [x] Personnaliser le style dark : `bg-[#1C1C1F] text-[#E6E5E0] border border-white/[0.08]`
- [x] Conserver l'export du `HelpIcon` (SVG) si utilisé ailleurs
- [x] Mettre à jour tous les imports consommateurs
- [x] Fichier impacté : `src/components/ui/Tooltip.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI Tooltip TooltipTrigger TooltipPopup TooltipProvider className side align" ; `resolve-library-id` "react" → `query-docs` "React forwardRef children composition pattern"
- **FontOfWeb** : Non nécessaire

---

### US-020: Ajouter les notifications Toast avec CossUI Toast

**Description :** En tant qu'utilisateur, je veux recevoir des notifications visuelles élégantes pour les succès et erreurs afin d'avoir un retour immédiat sur mes actions.

**Acceptance Criteria :**
- [x] Installer et configurer CossUI `ToastProvider` dans `layout.tsx` (position `"bottom-right"`)
- [x] Personnaliser les styles Toast pour le dark mode :
  - Background : `bg-[#1C1C1F]`
  - Border : `border-white/[0.08]`
  - Text : `text-[#E6E5E0]`
- [x] Intégrer `toastManager.add()` dans `HomeClient.tsx` :
  - Succès de consultation : `type: "success"`, titre "Consultation terminée"
  - Erreur de consultation : `type: "error"`, titre avec message d'erreur
- [x] Remplacer le state `error` en card rouge par un toast d'erreur + éventuellement un inline alert
- [x] Fichier impacté : `src/app/layout.tsx`, `src/components/home/HomeClient.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "coss-ui" → `query-docs` "CossUI ToastProvider toastManager add type success error title description position" ; `resolve-library-id` "next.js" → `query-docs` "Next.js app layout.tsx root layout provider wrapping"
- **FontOfWeb** : Non nécessaire

---

### US-021: Enrichir les micro-interactions Tailwind CSS

**Description :** En tant qu'utilisateur, je veux des retours visuels subtils et cohérents sur mes interactions en dark mode afin de ressentir la qualité du produit.

**Acceptance Criteria :**
- [x] Cards bento grid : `hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200`
- [x] Boutons CossUI : `hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150`
- [x] Liens navigation : `hover:text-[#E6E5E0] transition-colors duration-150`
- [x] Focus visible : `focus-visible:ring-2 focus-visible:ring-violet-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]` (offset adapté au dark bg)
- [x] Textarea focus : `bg-[#111113]` → `bg-[#161618]` + `ring-violet-600/30`
- [x] TraditionCard expand : chevron `rotate-180` avec `transition-transform duration-300`
- [x] Tout en classes Tailwind CSS, aucune lib JS d'animation
- [x] Fichiers impactés : tous les composants interactifs

**MCP Tools :**
- **Context7** : `resolve-library-id` "tailwindcss" → `query-docs` "Tailwind CSS v4 transition duration hover active focus-visible ring translate scale"
- **FontOfWeb** : `search_design_inspiration` query `"dark mode micro-interactions hover effects"` pour inspiration des hover states sur dark ; `display_pin` pin_id `"5162"` (Resend dark SaaS) pour les micro-interactions élégantes

---

### US-022: Adapter le ScrollReveal au dark mode

**Description :** En tant qu'utilisateur, je veux que les sections apparaissent progressivement au scroll avec des animations adaptées au dark mode afin de vivre un parcours fluide.

**Acceptance Criteria :**
- [x] Le composant `ScrollReveal` reste fonctionnellement identique
- [x] État initial : `opacity-0 translate-y-4` (inchangé, fonctionne aussi bien en dark)
- [x] État visible : `opacity-100 translate-y-0`
- [x] Transition : `duration-700 ease-out`
- [x] `prefers-reduced-motion` respecté avec `motion-reduce:!opacity-100 motion-reduce:!translate-y-0`
- [x] Sections utilisant ScrollReveal : ConsultFormSection, résultats bento grid, HowItWorks, Footer CTA
- [x] Aucun changement structurel, juste vérifier la cohérence visuelle en dark
- [x] Fichier impacté : `src/components/ui/ScrollReveal.tsx` (vérification uniquement)

**MCP Tools :**
- **Context7** : `resolve-library-id` "react" → `query-docs` "React IntersectionObserver useEffect useRef cleanup"
- **FontOfWeb** : Non nécessaire

---

### US-023: Audit WCAG AA sur dark mode

**Description :** En tant qu'utilisateur, je veux que tous les textes soient lisibles en dark mode avec un contraste suffisant afin que le site soit accessible à tous.

**Acceptance Criteria :**
- [x] Vérifier les ratios de contraste (>= 4.5:1 texte normal, >= 3:1 grand texte) :
  - `#E6E5E0` sur `#0C0C0C` → ratio 15.5:1 ✓
  - `#A49B8B` sur `#0C0C0C` → ratio 7.11:1 ✓
  - `#8A857E` sur `#0C0C0C` → ratio 5.34:1 ✓ (tertiary, WCAG AA conforme)
  - `#D4A574` sur `#0C0C0C` → ratio 8.78:1 ✓ (accent gold)
  - `#E6E5E0` sur `#161618` → ratio 14.33:1 ✓ (texte sur card)
  - `#A49B8B` sur `#161618` → ratio 6.57:1 ✓ (secondaire sur card)
  - `#8A857E` sur `#161618` → ratio 4.94:1 ✓ (tertiary sur card)
  - `#D4A574` sur `#161618` → ratio 8.12:1 ✓ (gold accent sur card)
  - `#D4A574` sur `#111113` → ratio 8.47:1 ✓ (gold sur surface secondaire)
  - `#8A857E` sur `#111113` → ratio 5.15:1 ✓ (tertiary sur surface secondaire)
  - `#8A857E` sur `#0A0A0A` → ratio 5.41:1 ✓ (tertiary sur footer bg)
- [x] Tous les couples texte/fond atteignent WCAG AA (>= 4.5:1 normal, >= 3:1 grand texte)
  - Fix : `text-[#7C3AED]` (3.17:1 sur card, FAIL) → `text-[#A78BFA]` (6.64:1 sur card) dans HistoryListSection
  - Fix : `text-white/20` (~1.8:1, FAIL) → `text-[#8A857E]` (5.41:1 sur #0A0A0A) dans Footer
- [x] Vérifier que les focus rings sont visibles sur fond dark
  - Fix : `ring-violet-600/40` (effective ~1.5:1, FAIL SC 1.4.11) → `ring-violet-400/60` (effective ~3.1:1) dans tous les composants interactifs
  - Fix : `focus-within:ring-violet-600/30` → `focus-within:ring-violet-400/50` dans ConsultFormSection textarea
- [x] Vérifier les liens visitables : soulignement ou couleur distincte
  - Liens navigation (Navbar, Footer) : contexte structurel clair (nav, ul), couleur distincte + hover state → conforme
  - Aucun lien inline dans du texte paragraphe → pas de risque SC 1.4.1
- [x] Audit réalisé via FontOfWeb `batch_color_operations` (type: contrast + apcaContrast) sur tous les couples couleur/fond
- [x] Fichiers corrigés : `HistoryListSection.tsx`, `Footer.tsx`, `Navbar.tsx`, `HistoryEmptyState.tsx`, `HistoryHeroSection.tsx`, `ConsultFormSection.tsx`, `HomeHeroSection.tsx`, `MobileCTA.tsx`

**MCP Tools :**
- **Context7** : Non nécessaire
- **FontOfWeb** : `batch_color_operations` avec `type: "contrast"` pour re-valider tous les couples couleur texte/fond du design system. Couples à tester : `{color: "#E6E5E0", color2: "#0C0C0C"}`, `{color: "#A49B8B", color2: "#0C0C0C"}`, `{color: "#8A857E", color2: "#0C0C0C"}`, `{color: "#D4A574", color2: "#0C0C0C"}`, `{color: "#E6E5E0", color2: "#161618"}`, `{color: "#A49B8B", color2: "#161618"}`, `{color: "#8A857E", color2: "#161618"}`. Seuil WCAG AA : >= 4.5:1 texte normal, >= 3:1 grand texte

---

### US-024: Mettre à jour le Root Layout

**Description :** En tant que développeur, je veux un layout root propre avec les nouvelles fonts, le dark background, et l'isolation Base UI afin que tout le site hérite du nouveau design system.

**Acceptance Criteria :**
- [x] `<html>` : `lang="fr"` (inchangé), ajouter `class="dark"` si on veut supporter un futur toggle
- [x] `<body>` : classes `bg-[#0C0C0C] text-[#E6E5E0] antialiased min-h-screen flex flex-col`
- [x] Variables font : `${instrumentSerif.variable} ${inter.variable} ${geistMono.variable}`
- [x] Wrapper root `<div>` avec `style={{ isolation: "isolate" }}` (requis par Base UI portals)
- [x] `<body>` avec `style={{ position: "relative" }}` (iOS Safari 26+)
- [x] CossUI `ToastProvider` wrap autour du contenu (après ClerkProvider)
- [x] Metadata : mettre à jour `themeColor` à `#0C0C0C`
- [x] `<main>` garde `pt-20 flex-1` et `relative z-10`
- [x] Fichier impacté : `src/app/layout.tsx`

**MCP Tools :**
- **Context7** : `resolve-library-id` "next.js" → `query-docs` "Next.js app root layout metadata font loading next/font/google" ; `resolve-library-id` "coss-ui" → `query-docs` "CossUI ToastProvider setup layout root wrapper isolation"
- **FontOfWeb** : `font_search` query `"Instrument Serif"` pour confirmer l'ID de la font ; `font_search` query `"Inter"` pour confirmer l'ID

---

### US-025: Cleanup des fichiers obsolètes et anciens composants

**Description :** En tant que développeur, je veux supprimer tous les fichiers et styles devenus obsolètes après la migration afin de réduire la dette technique.

**Acceptance Criteria :**
- [x] Supprimer les anciennes tab files si encore présentes : `src/components/home/tabs/SynthesisTab.tsx`, `TraditionsTab.tsx`, `TechnicalTab.tsx`
- [x] Nettoyer `src/components/home/tabs/index.ts` (vérifier qu'il n'exporte plus rien d'utilisé)
- [x] Supprimer les classes CSS inutilisées dans `globals.css` : `.apple-card`, `.apple-card-interactive`, tout style light-mode-only orphelin
- [x] Supprimer les anciens tokens CSS light (les variables --background: #FFFFFF, etc.) — remplacées par US-002
- [x] Vérifier que `src/components/ui/Tooltip.tsx` ancien est bien remplacé par la version CossUI
- [x] Vérifier que le barrel export `src/components/index.ts` est à jour
- [x] Grep global pour détecter les imports cassés ou les références aux anciens composants
- [x] Fichiers impactés : `src/components/home/tabs/`, `src/app/globals.css`, `src/components/index.ts`

**MCP Tools :**
- **Context7** : Non nécessaire
- **FontOfWeb** : Non nécessaire

---

## Functional Requirements

- FR-1 : Le fond du site est `#0C0C0C` (dark mode) par défaut, sans toggle light/dark
- FR-2 : Tous les textes respectent un ratio de contraste WCAG AA >= 4.5:1 sur fond dark (ou >= 3:1 pour les grands textes `>= 18px` ou `>= 14px bold`)
- FR-3 : 100% des composants UI proviennent de CossUI (`@coss/*`) installés via la CLI shadcn
- FR-4 : La typographie utilise Instrument Serif (italic, headings) + Inter (body) + Geist Mono (code)
- FR-5 : La palette d'accents combine warm gold (#D4A574, #C9A87C) et violet (#7C3AED, #6D28D9, #4338CA)
- FR-6 : Le bento grid affiche toutes les traditions + synthèse + signal quantique en cards CossUI dark
- FR-7 : Le hero affiche 2 CTAs (gradient violet + outline) et des trust badges
- FR-8 : Les skeleton loaders utilisent CossUI `Skeleton` en dark
- FR-9 : Un système de toast (CossUI `Toast`) notifie succès et erreurs
- FR-10 : Les interactions (hover, focus, active) utilisent uniquement des classes Tailwind CSS
- FR-11 : Le site est entièrement navigable au clavier avec des focus rings visibles sur fond dark
- FR-12 : L'application ne charge aucune lib d'animation JS externe (Framer Motion, GSAP, etc.)
- FR-13 : Les 2 pages (Home + History) sont complètement redesignées en dark mode
- FR-14 : Le `<body>` a `isolation: isolate` et `position: relative` pour la compatibilité Base UI

## Non-Goals (Out of Scope)

- Toggle light/dark mode (dark-only pour cette itération)
- Animations via Framer Motion, GSAP, ou toute lib JS d'animation
- 3D elements (Three.js, Spline, React Three Fiber)
- AI personalization du contenu
- Multi-step form ou wizard de consultation
- Pricing page, About page, FAQ page (nouvelles pages)
- Internationalisation (i18n)
- PWA enhancements (service worker, offline)
- Tests automatisés (pas de framework de test configuré)
- Changement de framework CSS (rester sur Tailwind CSS v4)
- Migration de Clerk vers un autre auth provider
- Refonte de l'API route (`/api/consult`)
- Dark mode toggle UX (pas de bouton toggle, dark par défaut)

## Technical Considerations

- **Tailwind CSS v4** : `@import "tailwindcss"` dans globals.css, pas de `tailwind.config.ts`. Les custom values sont via `@theme` ou inline `text-[#E6E5E0]`.
- **CossUI + Base UI** : les composants CossUI utilisent `@base-ui/react`. Le `isolation: isolate` est requis pour les portals (Dialog, Toast, Popover). Le `render` prop remplace l'ancien `asChild` de Radix.
- **Instrument Serif** : disponible sur Google Fonts, poids 400 uniquement, styles normal + italic. Import via `next/font/google`.
- **Package manager** : Bun est primaire. CossUI s'installe via `pnpm dlx shadcn@latest add` — vérifier la compatibilité avec Bun ou utiliser `bunx`.
- **Performances** : le dark mode n'ajoute aucun CSS conditionnel (pas de `dark:` prefix). Les couleurs sont hardcodées dans les CSS variables. Pas de runtime theme switching = 0 overhead.
- **Types** : les types frontend dans `src/types/esoteric.ts` sont inchangés. Les composants CossUI apportent leurs propres types TypeScript.
- **Clerk** : le `UserButton` de Clerk supporte un thème dark via les props `appearance`. Voir la documentation Clerk pour `baseTheme: dark`.

## Success Metrics

- Score Lighthouse Accessibility >= 95 en dark mode
- Aucun warning de contraste dans l'audit Lighthouse
- Time to Interactive inchangé ou amélioré (pas de lib JS ajoutée)
- 0 composant UI custom restant (100% CossUI)
- Toutes les pages visuellement cohérentes en dark mode
- `bun run typecheck`, `bun run lint`, et `bun run build` passent sans erreur
- Layout fonctionnel et lisible sur viewport 320px à 2560px

## Open Questions

- CossUI s'installe-t-il correctement via `bunx shadcn@latest add` ou faut-il fallback sur `pnpm dlx` ?
- Le `UserButton` de Clerk nécessite-t-il un `appearance` theme dark custom, ou hérite-t-il du body background ?
- Faut-il adapter le JSON-LD (structured data) dans `page.tsx` pour refléter le redesign ?
- Les tokens CossUI (`@coss/colors-neutral`) sont-ils compatibles avec Tailwind CSS v4 sans `tailwind.config.ts` ?
- `#8A857E` (tertiary) a été validé WCAG AA (5.34:1 sur body, 4.94:1 sur cards). Confirmer que ce ton warm gray convient esthétiquement.

[/PRD]
