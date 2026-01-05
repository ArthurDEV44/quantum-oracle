/**
 * Technical Explanation View
 */

export function TechnicalExplanation() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Architecture Diagram */}
      <div className="bg-white rounded-4xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-x-auto">
        <h3 className="text-lg font-bold text-slate-400 mb-8 tracking-widest uppercase text-center">
          Architecture du Flux Quantique
        </h3>

        <div className="min-w-[700px]">
          <div className="font-mono text-xs">
            {/* Row 1: QRNG Providers */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="group relative border border-indigo-100 bg-indigo-50/50 rounded-2xl px-6 py-4 text-indigo-700 text-center shadow-sm">
                <div className="font-bold text-sm mb-1">LfD QRNG</div>
                <div className="text-[10px] text-indigo-400 italic">Shot Noise Measurement</div>
              </div>
              <div className="border border-blue-100 bg-blue-50/50 rounded-2xl px-6 py-4 text-blue-700 text-center shadow-sm">
                <div className="font-bold text-sm mb-1">NIST Beacon</div>
                <div className="text-[10px] text-blue-400 italic">Cryptographic Entropy</div>
              </div>
              <div className="border border-slate-200 bg-slate-50/50 rounded-2xl px-6 py-4 text-slate-400 text-center opacity-50 shadow-sm">
                <div className="font-bold text-sm mb-1">Web Crypto</div>
                <div className="text-[10px] text-slate-400 italic">Security Fallback</div>
              </div>
            </div>

            {/* Path down */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="h-12 w-px bg-linear-to-b from-indigo-500/50 to-amber-500/50" />
              <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-500">
                8 Bytes Aléatoires (uint8)
              </div>
              <div className="h-12 w-px bg-linear-to-b from-amber-500/50 to-blue-500/50" />
            </div>

            {/* Row 2: Processing */}
            <div className="flex justify-center mb-8">
              <div className="relative border border-amber-100 bg-amber-50/50 rounded-4xl px-10 py-6 text-amber-900 text-center shadow-sm">
                <div className="font-bold text-sm mb-2 uppercase tracking-tighter">deriveQuantumConstraints()</div>
                <div className="grid grid-cols-3 gap-8 text-[10px] text-amber-700">
                  <div>Energy = Σ(B)/n</div>
                  <div>Temp = f(Var)</div>
                  <div>Seed = B[0]</div>
                </div>
              </div>
            </div>

            {/* Path down */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="h-12 w-px bg-linear-to-b from-blue-500/50 to-emerald-500/50" />
              <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-500">
                Propriétés de l&apos;Oracle (Context)
              </div>
              <div className="h-12 w-px bg-linear-to-b from-emerald-500/50 to-slate-200" />
            </div>

            {/* Row 3: LLM */}
            <div className="flex justify-center items-center gap-8">
              <div className="border border-blue-100 bg-blue-50 rounded-2xl px-6 py-4 text-blue-700 text-center shadow-sm">
                Question de l&apos;utilisateur
              </div>
              <div className="text-slate-300 text-xl">+</div>
              <div className="relative border border-emerald-100 bg-emerald-50 rounded-2xl px-8 py-5 text-emerald-800 text-center shadow-lg shadow-emerald-100">
                <div className="font-bold text-sm mb-1">Ollama LLM</div>
                <div className="text-[10px] text-emerald-600">Mistral-Trismegistus-7B</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <EntropySourcesCard />
        <DerivationAlgorithmCard />
      </div>

      {/* API Example */}
      <ApiExampleCard />
    </div>
  );
}

function EntropySourcesCard() {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl space-y-4 shadow-sm">
      <div className="flex items-center gap-3 text-indigo-600">
        <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.3)]" />
        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Sources d&apos;Entropie</h4>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-800">Leibniz Uni (LfD)</span>
            <code className="text-[10px] bg-indigo-100 px-2 py-0.5 rounded text-indigo-700">Primary</code>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Utilise un générateur matériel basé sur le bruit de grenaille quantique. Le signal est capté par des photodiodes ultra-sensibles.
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-800">NIST Beacon</span>
            <code className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-blue-700">Secondary</code>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Fournit des valeurs de 512 bits certifiées. Les sources incluent des impulsions laser et des fluctuations thermiques.
          </p>
        </div>
      </div>
    </div>
  );
}

function DerivationAlgorithmCard() {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl space-y-4 shadow-sm">
      <div className="flex items-center gap-3 text-amber-600">
        <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Algorithme de Dérivation</h4>
      </div>
      <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[11px] border border-slate-800 shadow-inner">
        <div className="text-slate-500 mb-4">{"// Conversion physique en métaphysique"}</div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-amber-400">energy</span>
            <span className="text-slate-400">avg(bytes) / 255</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-400">creativity</span>
            <span className="text-slate-400">0.4 + (variance * 1.5)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-amber-400">quantum_seed</span>
            <span className="text-slate-400">uint32(bytes[0..3])</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-500 italic">
        La variance des octets définit la &ldquo;température&rdquo; du modèle LLM, influençant directement la divergence créative de l&apos;Oracle.
      </p>
    </div>
  );
}

function ApiExampleCard() {
  return (
    <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600/50" />
      <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-3 text-sm">
        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        Structure de la Consultation (JSON)
      </h4>
      <pre className="text-[10px] md:text-xs text-slate-500 bg-slate-900 p-6 rounded-2xl border border-slate-800 overflow-x-auto leading-relaxed shadow-inner">
        <code className="text-slate-300">{`{
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
  );
}
