[PRD]
# PRD: Quantum Oracle — UI Redesign Marketing Minimaliste 2026

## Overview

Refonte complète de l'interface utilisateur de Quantum Oracle pour adopter les meilleures pratiques du design marketing SaaS minimaliste 2026. L'UI actuelle souffre de hiérarchie visuelle confuse (4 niveaux de `<details>` imbriqués), d'absence de social proof, de problèmes d'accessibilité (contraste WCAG insuffisant), de loading states basiques, et d'un layout linéaire qui ne valorise pas le contenu riche des 6 traditions ésotériques.

Le redesign transforme l'expérience en un layout bento grid moderne, aplatit la hiérarchie de contenu, unifie le système de cards, corrige l'accessibilité, et ajoute des éléments de conversion (dual CTA, trust signals tech, sticky nav CTA, footer marketing).

**Contraintes techniques :**
- Tailwind CSS uniquement (pas de Framer Motion, GSAP, ni lib d'animation externe)
- Pas de dark mode (hors scope)
- Next.js 16 + Turbopack + Bun
- Tailwind CSS v4 (`@import "tailwindcss"` dans globals.css, pas de tailwind.config.ts)

## Goals

- Aplatir la hiérarchie des résultats de 4 niveaux à 2 niveaux max
- Atteindre la conformité WCAG AA sur tous les textes
- Remplacer le spinner de chargement par des skeleton loaders
- Implémenter un layout bento grid pour les résultats de consultation
- Unifier le système de cards sur le composant `Card` de base-ui (supprimer `.apple-card`)
- Ajouter des éléments de conversion : dual CTA, trust signals tech, sticky nav CTA, footer CTA
- Améliorer la responsivité mobile (hero, tabs, cards, sticky CTA)
- Moderniser les interactions via Tailwind CSS (transitions, hover states, focus states)

## Quality Gates

Ces commandes doivent passer pour chaque user story :
- `bun run typecheck` — TypeScript strict check (tsc --noEmit)
- `bun run lint` — ESLint
- `bun run build` — Next.js production build

## User Stories

---

### US-001: Corriger le contraste WCAG AA sur tous les textes

**Description :** En tant qu'utilisateur, je veux que tous les textes soient lisibles avec un contraste suffisant afin que le site soit accessible à tous.

**Acceptance Criteria :**
- [ ] Remplacer `#AEAEB2` par `#8E8E93` (ou plus foncé) pour les labels sur fond `#F5F5F7` et `#F2F2F7`
- [ ] Vérifier que tous les couples couleur texte/fond atteignent un ratio de contraste >= 4.5:1 (WCAG AA)
- [ ] Mettre à jour la variable CSS `--color-tertiary` dans `globals.css`
- [ ] Mettre à jour toutes les occurrences inline de `text-[#AEAEB2]` dans les composants
- [ ] Les textes `text-[#86868B]` sur fond blanc (#FFFFFF) restent conformes (ratio 4.6:1 — OK)
- [ ] Fichiers impactés : `src/app/globals.css`, tous les composants dans `src/components/home/tabs/cards/`, `src/components/home/ConsultFormSection.tsx`, `src/components/home/HomeHeroSection.tsx`, `src/components/home/ConsultResultSection.tsx`

---

### US-002: Supprimer le wrapper `<details>` et aplatir la hiérarchie des résultats

**Description :** En tant qu'utilisateur, je veux voir les résultats de ma consultation directement sans devoir ouvrir un élément `<details>` afin de ne pas manquer de contenu.

**Acceptance Criteria :**
- [ ] Supprimer l'élément `<details>` "Empreintes quantiques" dans `ConsultResultSection.tsx`
- [ ] La barre de tabs est visible directement sous la card de réponse oracle
- [ ] Le contenu des tabs est visible sans aucun clic supplémentaire après sélection d'un tab
- [ ] La hiérarchie est : Oracle Response Card → Tab Bar → Tab Content (2 niveaux max)
- [ ] L'animation `fadeIn` existante est conservée pour le switch de tabs
- [ ] Fichier impacté : `src/components/home/ConsultResultSection.tsx`

---

### US-003: Implémenter des skeleton loaders pour le chargement

**Description :** En tant qu'utilisateur, je veux voir des placeholders animés pendant le chargement de ma consultation afin de comprendre ce qui va apparaître.

**Acceptance Criteria :**
- [ ] Créer un composant `SkeletonLoader` réutilisable avec animation shimmer en Tailwind CSS (`animate-pulse` ou keyframe custom)
- [ ] Remplacer le spinner actuel dans `HomeClient.tsx` par un skeleton qui mime le layout des résultats
- [ ] Le skeleton affiche : une card oracle response placeholder + une barre de tabs placeholder + un grid de cards placeholder
- [ ] L'animation utilise uniquement Tailwind CSS (classes `animate-pulse` et/ou `bg-gradient-to-r` animé)
- [ ] Le skeleton disparaît et le contenu réel apparaît avec un fade-in
- [ ] Fichiers impactés : nouveau composant `src/components/home/SkeletonLoader.tsx`, `src/components/home/HomeClient.tsx`

---

### US-004: Refondre le hero avec dual CTA et trust signals tech

**Description :** En tant qu'utilisateur, je veux un hero section convaincant avec deux chemins d'action et des signaux de crédibilité technologique afin de comprendre la valeur et me sentir en confiance.

**Acceptance Criteria :**
- [ ] Le hero affiche deux CTAs côte à côte : un CTA primaire ("Consulter l'Oracle" — gradient, proéminent) et un CTA secondaire ("Comment ça marche" — ghost/outline, scroll vers HowItWorks)
- [ ] Sous les CTAs, une ligne de trust signals tech est affichée : badges "QRNG Hannover", "Mistral AI", "6 Traditions" (styled comme des tags `bg-[#F2F2F7] rounded-full px-3 py-1 text-[12px]`)
- [ ] Les trust signals sont affichés que l'utilisateur soit connecté ou non
- [ ] Le CTA secondaire utilise `scroll-behavior: smooth` pour scroller vers la section How It Works
- [ ] Le layout reste centré et ne casse pas sur mobile (CTAs en stack vertical sur mobile, horizontal sur desktop)
- [ ] Conserver l'animation d'entrée staggered existante (hero-enter classes)
- [ ] Fichier impacté : `src/components/home/HomeHeroSection.tsx`

---

### US-005: Implémenter le bento grid pour les résultats de consultation

**Description :** En tant qu'utilisateur, je veux voir les résultats de ma consultation dans un layout bento grid modulaire afin de visualiser toutes les traditions et analyses d'un coup d'oeil.

**Acceptance Criteria :**
- [ ] Après la card de réponse oracle, le contenu est organisé en bento grid au lieu de tabs
- [ ] Layout desktop : grid CSS responsive avec cards de taille variée
- [ ] La grille comprend : 6 cards tradition (I Ching, Tarot, Kabbale, Alchimie, Runes, Géomancie) + 1 card Synthèse (convergence, énergie, polarité) + 1 card Signal Quantique (empreinte hex)
- [ ] Chaque card tradition affiche : symbole, nom de la tradition, résultat clé, et un bouton discret pour voir les détails
- [ ] La card Synthèse et la card Signal Quantique sont plus larges (span 2 colonnes sur desktop)
- [ ] Sur mobile : les cards passent en single column stack
- [ ] Sur tablette (md) : grid 2 colonnes
- [ ] Sur desktop (lg+) : grid 3 colonnes avec les cards Synthèse et Signal en `col-span-2`
- [ ] Supprimer l'ancien système de tabs (TabBar + tab components) et le remplacer par le bento grid
- [ ] Fichiers impactés : `src/components/home/ConsultResultSection.tsx`, potentiellement nouveau composant `src/components/home/BentoGrid.tsx`

---

### US-006: Unifier le système de cards sur le composant Card base-ui

**Description :** En tant que développeur, je veux un système de cards unique et cohérent afin d'éliminer les incohérences visuelles entre `.apple-card` et le composant `Card`.

**Acceptance Criteria :**
- [ ] Supprimer toutes les occurrences de la classe `.apple-card` et `.apple-card-interactive` dans les composants
- [ ] Supprimer les définitions `.apple-card` et `.apple-card-interactive` dans `globals.css`
- [ ] Tous les éléments card utilisent le composant `Card` de `src/components/ui/card.tsx`
- [ ] Le composant `Card` est mis à jour avec les styles visuels Apple : `rounded-2xl`, shadow multi-layer (`0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)`), padding `p-6`
- [ ] Les cards tradition dans le bento grid utilisent `Card` + `CardHeader` + `CardPanel`
- [ ] La card oracle response utilise `Card` avec un style glassmorphic (`backdrop-blur-xl bg-white/72 border border-white/30`)
- [ ] Aucune régression visuelle sur les cards existantes
- [ ] Fichiers impactés : `src/components/ui/card.tsx`, `src/app/globals.css`, tous les composants dans `src/components/home/tabs/cards/`, `src/components/home/ConsultFormSection.tsx`, `src/components/home/ConsultResultSection.tsx`

---

### US-007: Refondre les tradition cards pour le bento grid

**Description :** En tant qu'utilisateur, je veux des cards tradition compactes et informatives dans le bento grid afin de voir l'essentiel de chaque tradition sans surcharge.

**Acceptance Criteria :**
- [ ] Chaque card tradition affiche en face avant : icône/symbole (taille `text-2xl`), nom de la tradition (label uppercase), résultat principal (titre `text-[15px] font-semibold`), et une description courte (1-2 lignes, `text-[13px] text-muted-foreground`)
- [ ] Un bouton discret "Détails" (icône info circle, `text-[#8E8E93]`) ouvre une expansion inline dans la card (pas un accordion imbriqué, pas un modal)
- [ ] L'expansion inline affiche les détails complets (calculs, interprétation) avec une transition `max-height` + `opacity` en Tailwind
- [ ] Supprimer le pattern "Voir le calcul" texte, remplacer par l'icône seule
- [ ] Les cards sont visuellement identiques en taille dans le grid (min-height cohérent)
- [ ] Supprimer les fichiers de cards spécialisées redondants si leur logique est fusionnée, ou les adapter au nouveau format
- [ ] Fichiers impactés : tous les fichiers dans `src/components/home/tabs/cards/`, potentiellement nouveau composant `src/components/home/TraditionCard.tsx`

---

### US-008: Ajouter un CTA sticky dans la navbar au scroll

**Description :** En tant qu'utilisateur, je veux voir un bouton d'action dans la navbar quand je scrolle afin de pouvoir consulter l'oracle à tout moment.

**Acceptance Criteria :**
- [ ] Un bouton "Consulter" compact apparaît dans la navbar après avoir scrollé au-delà du hero (> ~600px de scroll)
- [ ] Le bouton utilise le style gradient CTA existant (indigo → violet), `rounded-full`, `px-4 py-1.5`, `text-[13px] font-medium`
- [ ] Le bouton apparaît avec une transition `opacity` + `translate` en Tailwind (`transition-all duration-300`)
- [ ] Le bouton scrolle smooth vers la section ConsultForm, ou redirige vers sign-in si non connecté
- [ ] Le bouton n'est pas visible quand le hero est visible (pas de doublon CTA)
- [ ] Sur mobile, le bouton utilise un label plus court ("Consulter")
- [ ] Fichier impacté : `src/components/Navbar.tsx`

---

### US-009: Améliorer la responsivité mobile du hero et du layout

**Description :** En tant qu'utilisateur mobile, je veux une expérience de lecture confortable avec des tailles de texte et espacements adaptés afin de ne pas avoir à zoomer ou scroller horizontalement.

**Acceptance Criteria :**
- [ ] Hero title : `text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem]` (réduire les tailles mobile)
- [ ] Hero subtitle : `text-base sm:text-lg md:text-xl lg:text-2xl`
- [ ] Les dual CTAs du hero passent en stack vertical sur mobile (`flex-col` sur `< sm:`)
- [ ] Les trust signal badges passent en wrap multi-lignes sur mobile
- [ ] La section padding est réduite sur mobile : `py-20 md:py-36 lg:py-48`
- [ ] Les cards du bento grid sont en full-width stack sur mobile avec espacement `gap-4`
- [ ] Pas de scroll horizontal sur aucun breakpoint
- [ ] Le form textarea garde un `min-h-[100px]` sur mobile (au lieu de 130px)
- [ ] Fichiers impactés : `src/components/home/HomeHeroSection.tsx`, `src/components/home/ConsultResultSection.tsx`, `src/components/home/ConsultFormSection.tsx`

---

### US-010: Ajouter un CTA sticky mobile en bas d'écran

**Description :** En tant qu'utilisateur mobile, je veux un bouton d'action fixe en bas de mon écran quand je parcours le site afin de pouvoir agir à tout moment.

**Acceptance Criteria :**
- [ ] Un bouton CTA fixe (`fixed bottom-0`) apparaît sur mobile uniquement (`md:hidden`)
- [ ] Le bouton est pleine largeur avec padding safe area (`pb-safe` ou `pb-6`)
- [ ] Le bouton utilise le style gradient CTA (indigo → violet), `rounded-2xl mx-4 py-3.5`
- [ ] Le bouton n'apparaît que quand on a scrollé au-delà du hero (seuil ~400px)
- [ ] Le bouton disparaît quand la section ConsultForm est visible dans le viewport
- [ ] Transition d'apparition/disparition fluide en Tailwind (`transition-all duration-300 translate-y`)
- [ ] Le bouton utilise `z-40` (sous la navbar `z-50`)
- [ ] Fichier impacté : nouveau composant `src/components/home/MobileCTA.tsx`, intégré dans `HomeClient.tsx`

---

### US-011: Refondre la section How It Works en layout visuel

**Description :** En tant qu'utilisateur, je veux une section "Comment ça marche" visuellement engageante avec des étapes claires afin de comprendre le processus rapidement.

**Acceptance Criteria :**
- [ ] La section affiche 3 étapes dans un layout horizontal sur desktop (grid 3 colonnes) et vertical sur mobile
- [ ] Chaque étape comprend : un numéro stylisé (gradient text `text-5xl font-semibold`), un titre court, et une description de 1-2 lignes
- [ ] Les étapes sont : 1. "Posez votre question" → 2. "Génération quantique" → 3. "Lecture multi-traditions"
- [ ] Chaque étape est dans une `Card` avec le style unifié
- [ ] Des lignes de connexion visuelles (border ou trait Tailwind) relient les étapes sur desktop
- [ ] La section utilise le composant `Card` unifié
- [ ] Supprimer ou adapter les anciens composants `SimpleExplanation.tsx` et `HowItWorksSection.tsx`
- [ ] Fichiers impactés : `src/components/home/how-it-works/HowItWorksSection.tsx`, `src/components/home/how-it-works/SimpleExplanation.tsx`

---

### US-012: Créer un footer marketing avec CTA final

**Description :** En tant qu'utilisateur qui a scrollé toute la page, je veux un footer avec un dernier appel à l'action et des liens utiles afin d'avoir une dernière opportunité de conversion.

**Acceptance Criteria :**
- [ ] Le footer est structuré en deux zones : une zone CTA en haut et une zone liens en bas
- [ ] Zone CTA : titre accrocheur ("Prêt à interroger l'Oracle ?"), bouton CTA gradient, texte "Gratuit · Sans engagement"
- [ ] Zone liens : 3 colonnes — Produit (Consulter, Comment ça marche, Chroniques), Technologie (QRNG, Traditions, API), Légal (Mentions légales, Confidentialité, CGU)
- [ ] Ligne de copyright en bas avec le nom du projet et l'année
- [ ] Le footer utilise un fond `bg-[#1D1D1F]` (dark) avec texte clair (`text-white`, `text-white/60` pour les liens secondaires)
- [ ] Le footer est responsive : colonnes en stack sur mobile
- [ ] Fichier impacté : nouveau composant `src/components/Footer.tsx`, intégré dans `src/app/layout.tsx`

---

### US-013: Enrichir les micro-interactions avec Tailwind CSS

**Description :** En tant qu'utilisateur, je veux des retours visuels subtils et cohérents sur mes interactions afin de ressentir la qualité du produit.

**Acceptance Criteria :**
- [ ] Cards dans le bento grid : `hover:-translate-y-1 hover:shadow-lg transition-all duration-200`
- [ ] Boutons CTA : `hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.98] transition-all duration-150`
- [ ] Liens de navigation : `hover:text-[#1D1D1F] transition-colors duration-150` (déjà partiellement en place)
- [ ] Focus states : `focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:ring-offset-2` uniformisé sur tous les éléments interactifs
- [ ] Textarea focus : transition `bg-[#F2F2F7]` → `bg-white` + ring indigo (déjà en place, vérifier cohérence)
- [ ] Tab active : transition `background-color` + `shadow` fluide (`transition-all duration-200`)
- [ ] Aucune lib JS d'animation ajoutée — tout est en classes Tailwind
- [ ] Fichiers impactés : `src/components/ui/card.tsx`, `src/components/home/ConsultResultSection.tsx`, `src/components/home/HomeHeroSection.tsx`, `src/components/Navbar.tsx`

---

### US-014: Améliorer la card de réponse oracle avec style glassmorphic

**Description :** En tant qu'utilisateur, je veux que la réponse de l'oracle se démarque visuellement comme l'élément le plus important de la page afin de la distinguer immédiatement du reste.

**Acceptance Criteria :**
- [ ] La card de réponse oracle utilise un style glassmorphic : `bg-white/80 backdrop-blur-2xl border border-white/40`
- [ ] Shadow enrichie : `shadow-[0_8px_32px_rgba(99,102,241,0.08),0_1px_3px_rgba(0,0,0,0.04)]` (teinte indigo subtile)
- [ ] Un gradient subtil en arrière-plan de la card : `bg-gradient-to-br from-indigo-50/50 via-white/80 to-purple-50/30`
- [ ] Le texte de la réponse oracle utilise `text-[17px] leading-relaxed text-[#1D1D1F]` pour une lisibilité maximale
- [ ] Un label "Réponse de l'Oracle" en uppercase styled (`text-[11px] font-semibold tracking-[0.06em] uppercase text-indigo-500/70`) au-dessus du texte
- [ ] La card est visuellement la plus prominente de la page (hiérarchie visuelle n°1)
- [ ] Fichier impacté : `src/components/home/ConsultResultSection.tsx`

---

### US-015: Nettoyer les composants et fichiers obsolètes

**Description :** En tant que développeur, je veux supprimer les fichiers et styles obsolètes afin de réduire la dette technique et la confusion.

**Acceptance Criteria :**
- [ ] Supprimer les anciens tab components non utilisés : `SynthesisTab.tsx`, `TraditionsTab.tsx`, `TechnicalTab.tsx` (les fichiers old-style dans `src/components/home/tabs/`)
- [ ] Supprimer l'ancien `index.ts` des tabs et le remplacer par les exports du bento grid si nécessaire
- [ ] Supprimer les classes CSS inutilisées dans `globals.css` : `.apple-card`, `.apple-card-interactive`, et tout style orphelin
- [ ] Supprimer les imports et références aux anciens composants dans `ConsultResultSection.tsx`
- [ ] Vérifier qu'aucun fichier n'importe les anciens composants supprimés
- [ ] Fichiers impactés : `src/components/home/tabs/SynthesisTab.tsx`, `src/components/home/tabs/TraditionsTab.tsx`, `src/components/home/tabs/TechnicalTab.tsx`, `src/components/home/tabs/index.ts`, `src/app/globals.css`, `src/components/home/ConsultResultSection.tsx`

---

### US-016: Implémenter le scroll-reveal des sections avec Tailwind CSS

**Description :** En tant qu'utilisateur, je veux que les sections de la page apparaissent progressivement au scroll afin de ressentir un parcours fluide et premium.

**Acceptance Criteria :**
- [ ] Créer un composant utilitaire `ScrollReveal` qui utilise l'API `IntersectionObserver` native
- [ ] Le composant ajoute/retire des classes Tailwind (`opacity-0 translate-y-4` → `opacity-100 translate-y-0`) quand l'élément entre dans le viewport
- [ ] Transition CSS via `transition-all duration-700 ease-out`
- [ ] Les sections suivantes utilisent le scroll-reveal : ConsultFormSection, résultats bento grid, How It Works, Footer CTA
- [ ] Le hero garde son animation d'entrée staggered existante (pas de changement)
- [ ] Le composant respecte `prefers-reduced-motion` (pas de transition si activé)
- [ ] Fichier impacté : nouveau composant `src/components/ui/ScrollReveal.tsx`, intégration dans `HomeClient.tsx`

---

## Functional Requirements

- FR-1 : Tous les textes doivent respecter un ratio de contraste WCAG AA >= 4.5:1
- FR-2 : Les résultats de consultation sont visibles sans interaction de disclosure (`<details>`)
- FR-3 : Le bento grid affiche 6 cards tradition + 1 card synthèse + 1 card signal en layout responsive
- FR-4 : Le hero affiche 2 CTAs et des badges tech visibles pour tous les visiteurs
- FR-5 : Un skeleton loader est affiché pendant le chargement des résultats
- FR-6 : Un CTA sticky apparaît dans la navbar au scroll sur desktop
- FR-7 : Un CTA sticky apparaît en bas d'écran sur mobile au scroll
- FR-8 : Le footer contient un CTA marketing et des liens de navigation
- FR-9 : Toutes les cards utilisent le composant `Card` unifié (plus de `.apple-card`)
- FR-10 : Les interactions (hover, focus, active) utilisent uniquement des classes Tailwind CSS
- FR-11 : Les sections apparaissent progressivement au scroll via IntersectionObserver + Tailwind
- FR-12 : L'application ne charge aucune lib d'animation JS externe

## Non-Goals (Out of Scope)

- Dark mode / toggle de thème
- Animations via Framer Motion, GSAP, ou toute lib JS d'animation
- 3D elements (Three.js, Spline, React Three Fiber)
- AI personalization du contenu
- Refonte du formulaire au-delà du responsive (pas de multi-step form)
- Pricing page
- Internationalisation (i18n)
- Refonte de la page Chroniques (history)
- Intégration de social proof dynamique depuis la base de données
- Changement de framework CSS (rester sur Tailwind CSS v4)
- Tests automatisés (pas de framework de test configuré)

## Technical Considerations

- **Tailwind CSS v4** : utilise `@import "tailwindcss"` dans globals.css, pas de fichier `tailwind.config.ts`. Les custom values sont inline (`text-[#8E8E93]`, `rounded-[20px]`) ou via `@theme` dans globals.css.
- **Base UI** : le composant `Card` utilise `@base-ui/react`. Les modifications doivent rester compatibles avec les hooks `useRender` et `mergeProps`.
- **Composants existants** : les tab components actuels (SignalQuantiqueTab, TraditionsDivinatoiresTab, SagesseEsoteriqueTab, ResonancesTab, SyntheseOrdreImpliqueTab) contiennent de la logique de rendu des données qui devra être extraite et réutilisée dans les nouvelles cards bento.
- **Types** : les types frontend sont dans `src/types/esoteric.ts` (EsotericReading, QuantumData). Ne pas modifier les types engine dans `src/lib/esoteric.ts`.
- **Performance** : le bento grid doit render toutes les cards simultanément (pas de lazy mount comme les tabs). S'assurer que le nombre de DOM nodes reste raisonnable.
- **IntersectionObserver** : utiliser l'API native du navigateur, pas de polyfill nécessaire (support > 97%).

## Success Metrics

- Score Lighthouse Accessibility >= 95
- Aucun warning de contraste dans l'audit Lighthouse
- Time to Interactive inchangé ou amélioré (pas de lib JS ajoutée)
- Toutes les sections visibles sans interaction de disclosure
- Layout fonctionnel et lisible sur viewport 320px à 2560px
- `bun run typecheck`, `bun run lint`, et `bun run build` passent sans erreur

## Open Questions

- Faut-il conserver les 5 nouveaux tabs (SignalQuantique, TraditionsDivinatoires, SagesseEsotérique, Résonances, SynthèseOrdreImpliqué) comme structure interne des données, ou tout fusionner dans le bento grid ?
- Les cards tradition en expansion inline : quelle hauteur max avant de nécessiter un scroll interne ?
- Le footer dark (#1D1D1F) crée un contraste fort avec le reste du site en light mode — est-ce voulu ou faut-il un footer light ?
- Les liens du footer (Mentions légales, Confidentialité, CGU) pointent vers des pages existantes ou faut-il les créer ?

[/PRD]
