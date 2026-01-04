"use client";

import { useState } from "react";

type ViewMode = "simple" | "technical";

export function HowItWorksSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("simple");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Les Arcanes de l&apos;Oracle
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg italic">
            Bien plus qu&apos;une simple intelligence artificielle. Découvrez comment l&apos;entropie de l&apos;univers guide chaque mot.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-1.5 shadow-2xl">
            <button
              onClick={() => setViewMode("simple")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                viewMode === "simple"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              Vision Intuitive
            </button>
            <button
              onClick={() => setViewMode("technical")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                viewMode === "technical"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              Anatomie Technique
            </button>
          </div>
        </div>

        <div className="transition-all duration-500">
          {viewMode === "simple" ? <SimpleExplanation /> : <TechnicalExplanation />}
        </div>
      </div>
    </section>
  );
}

function SimpleExplanation() {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Visual Flow Diagram */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-4xl p-10 md:p-16 backdrop-blur-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-3xl rounded-full -mr-32 -mt-32" />
        
        <h3 className="text-xl font-semibold text-white mb-12 text-center tracking-wide uppercase">
          Le Voyage d&apos;une Consultation
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Step 1 */}
          <div className="group flex flex-col items-center text-center flex-1 space-y-4">
            <div className="w-20 h-20 rounded-4xl bg-violet-950/30 border border-violet-500/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl">🔮</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-bold tracking-tight">Votre Intention</p>
              <p className="text-neutral-500 text-xs">Posez votre question à l&apos;infini</p>
            </div>
          </div>

          <Arrow />

          {/* Step 2 */}
          <div className="group flex flex-col items-center text-center flex-1 space-y-4">
            <div className="w-20 h-20 rounded-4xl bg-indigo-950/30 border border-indigo-500/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl">⚛️</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-bold tracking-tight">Écho Quantique</p>
              <p className="text-neutral-500 text-xs">Extraction du hasard pur</p>
            </div>
          </div>

          <Arrow />

          {/* Step 3 */}
          <div className="group flex flex-col items-center text-center flex-1 space-y-4">
            <div className="w-20 h-20 rounded-4xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl">✨</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-bold tracking-tight">Transmutation</p>
              <p className="text-neutral-500 text-xs">L&apos;IA façonne la réponse</p>
            </div>
          </div>

          <Arrow />

          {/* Step 4 */}
          <div className="group flex flex-col items-center text-center flex-1 space-y-4">
            <div className="w-20 h-20 rounded-4xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl">🕯️</span>
            </div>
            <div className="space-y-1">
              <p className="text-white font-bold tracking-tight">Révélation</p>
              <p className="text-neutral-500 text-xs">Un conseil unique au monde</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Vrai Hasard vs Faux Hasard",
            desc: "Contrairement aux ordinateurs classiques qui calculent le hasard, nous mesurons l'imprévisibilité réelle des particules subatomiques.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            color: "violet",
          },
          {
            title: "Une IA Guidée, pas Automatisée",
            desc: "L'intelligence artificielle n'est qu'un scribe. Ses paramètres (ton, créativité) sont dictés par les fluctuations quantiques du moment.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ),
            color: "blue",
          },
          {
            title: "Sources Certifiées",
            desc: "Nous nous connectons aux laboratoires de l'Université de Hanovre et du NIST pour garantir l'origine physique de nos données.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            ),
            color: "amber",
          },
          {
            title: "Niveau d'Énergie",
            desc: "Chaque tirage définit une vibration : une énergie basse invite au calme, une énergie haute pousse à l'audace.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            color: "emerald",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group p-8 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 rounded-3xl transition-all duration-300 backdrop-blur-sm"
          >
            <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
              item.color === 'violet' ? 'bg-violet-500/10 text-violet-400' :
              item.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
              item.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
              'bg-emerald-500/10 text-emerald-400'
            }`}>
              {item.icon}
            </div>
            <h4 className="text-white font-bold mb-3 text-lg">{item.title}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalExplanation() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Architecture Diagram */}
      <div className="bg-neutral-900/50 rounded-4xl p-8 md:p-12 border border-neutral-800 overflow-x-auto">
        <h3 className="text-lg font-bold text-neutral-400 mb-8 tracking-widest uppercase">
          Architecture du Flux Quantique
        </h3>

        <div className="min-w-[700px]">
          <div className="font-mono text-xs">
            {/* Row 1: QRNG Providers */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="group relative border border-violet-500/30 bg-violet-500/5 rounded-2xl px-6 py-4 text-violet-300 text-center">
                <div className="font-bold text-sm mb-1">LfD QRNG</div>
                <div className="text-[10px] text-violet-400/50 italic">Shot Noise Measurement</div>
              </div>
              <div className="border border-indigo-500/30 bg-indigo-500/5 rounded-2xl px-6 py-4 text-indigo-300 text-center">
                <div className="font-bold text-sm mb-1">NIST Beacon</div>
                <div className="text-[10px] text-indigo-400/50 italic">Cryptographic Entropy</div>
              </div>
              <div className="border border-neutral-700 bg-neutral-800/30 rounded-2xl px-6 py-4 text-neutral-400 text-center opacity-50">
                <div className="font-bold text-sm mb-1">Web Crypto</div>
                <div className="text-[10px] text-neutral-500 italic">Security Fallback</div>
              </div>
            </div>

            {/* Path down */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="h-12 w-px bg-linear-to-b from-violet-500/50 to-amber-500/50" />
              <div className="bg-neutral-800 px-3 py-1 rounded-full text-[10px] text-neutral-400">
                8 Bytes Aléatoires (uint8)
              </div>
              <div className="h-12 w-px bg-linear-to-b from-amber-500/50 to-blue-500/50" />
            </div>

            {/* Row 2: Processing */}
            <div className="flex justify-center mb-8">
              <div className="relative border border-amber-500/30 bg-amber-500/5 rounded-4xl px-10 py-6 text-amber-200 text-center backdrop-blur-sm">
                <div className="font-bold text-sm mb-2 uppercase tracking-tighter">deriveQuantumConstraints()</div>
                <div className="grid grid-cols-3 gap-8 text-[10px] text-amber-400/70">
                  <div>Energy = Σ(B)/n</div>
                  <div>Temp = f(Var)</div>
                  <div>Seed = B[0]</div>
                </div>
              </div>
            </div>

            {/* Path down */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="h-12 w-px bg-linear-to-b from-blue-500/50 to-emerald-500/50" />
              <div className="bg-neutral-800 px-3 py-1 rounded-full text-[10px] text-neutral-400">
                Propriétés de l&apos;Oracle (Context)
              </div>
              <div className="h-12 w-px bg-linear-to-b from-emerald-500/50 to-white/50" />
            </div>

            {/* Row 3: LLM */}
            <div className="flex justify-center items-center gap-8">
              <div className="border border-blue-500/30 bg-blue-500/5 rounded-2xl px-6 py-4 text-blue-300 text-center">
                Question de l&apos;utilisateur
              </div>
              <div className="text-neutral-600 text-xl">+</div>
              <div className="relative border border-emerald-500/30 bg-emerald-500/5 rounded-2xl px-8 py-5 text-emerald-200 text-center shadow-xl shadow-emerald-900/10">
                <div className="font-bold text-sm mb-1">Ollama LLM</div>
                <div className="text-[10px] text-emerald-400/50">Mistral-Trismegistus-7B</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-black/40 border border-neutral-800 rounded-3xl space-y-4">
          <div className="flex items-center gap-3 text-violet-400">
            <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Sources d&apos;Entropie</h4>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-neutral-200">Leibniz Uni (LfD)</span>
                <code className="text-[10px] bg-violet-500/10 px-2 py-0.5 rounded text-violet-400">Primary</code>
              </div>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Utilise un générateur matériel basé sur le bruit de grenaille quantique. Le signal est capté par des photodiodes ultra-sensibles.
              </p>
            </div>
            <div className="p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-neutral-200">NIST Beacon</span>
                <code className="text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded text-indigo-400">Secondary</code>
              </div>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Fournit des valeurs de 512 bits certifiées. Les sources incluent des impulsions laser et des fluctuations thermiques.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-black/40 border border-neutral-800 rounded-3xl space-y-4">
          <div className="flex items-center gap-3 text-amber-400">
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Algorithme de Dérivation</h4>
          </div>
          <div className="bg-neutral-950/50 rounded-2xl p-6 font-mono text-[11px] border border-neutral-900">
            <div className="text-neutral-600 mb-4">{"// Conversion physique en métaphysique"}</div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-500">energy</span>
                <span className="text-neutral-400">avg(bytes) / 255</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-500">creativity</span>
                <span className="text-neutral-400">0.4 + (variance * 1.5)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-500">quantum_seed</span>
                <span className="text-neutral-400">uint32(bytes[0..3])</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-neutral-500 italic">
            La variance des octets définit la &ldquo;température&rdquo; du modèle LLM, influençant directement la divergence créative de l&apos;Oracle.
          </p>
        </div>
      </div>

      {/* API Example */}
      <div className="bg-neutral-900/30 border border-neutral-800 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-violet-600/50" />
        <h4 className="text-white font-bold mb-6 flex items-center gap-3 text-sm">
          <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          Structure de la Consultation (JSON)
        </h4>
        <pre className="text-[10px] md:text-xs text-neutral-400 bg-black/60 p-6 rounded-2xl border border-neutral-800 overflow-x-auto leading-relaxed">
          <code>{`{
  "id": "cons_7f8k2n...",
  "question": "Quel est le sens caché de mon rêve ?",
  "response": "L'univers murmure une transformation imminente...",
  "quantumData": {
    "source": "LfD Hannover",
    "energy": 0.782,
    "variance": 0.12,
    "raw": [142, 87, 203, 56, 178, 91, 224, 33],
    "model": "mistral-trismegistus:7b-q6_K"
  }
}`}</code>
        </pre>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-neutral-800 rotate-90 md:rotate-0 shrink-0">
      <svg className="w-8 h-8 md:w-10 md:h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
}
