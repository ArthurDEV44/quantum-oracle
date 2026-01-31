"use client";

import type { QuantumData } from "@/types/esoteric";

interface TechnicalTabProps {
  quantumData: QuantumData;
  sum: number;
  average: number;
}

export const TechnicalTab = ({
  quantumData,
  sum,
  average,
}: TechnicalTabProps) => {
  return (
    <div className="space-y-4">
      {/* Raw Quantum Data */}
      <div className="p-6 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-slate-800 font-medium">
            Données Quantiques Brutes
          </h3>
          <span className="text-[10px] text-slate-400 font-mono">
            {new Date(quantumData.timestamp).toLocaleString("fr-FR")}
          </span>
        </div>

        <div className="p-3 bg-white/50 rounded-lg border border-slate-100/60">
          <div className="text-[10px] text-slate-400 font-mono mb-1">
            Source
          </div>
          <div className="text-sm text-orange-500 font-mono">
            {quantumData.source}
          </div>
        </div>

        {/* Bytes Grid */}
        <div>
          <div className="text-[10px] text-slate-400 font-mono mb-2">
            8 Bytes (0-255)
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {quantumData.numbers.map((n, i) => (
              <div
                key={i}
                className="p-2 bg-white/50 rounded-lg border border-slate-100/60 text-center"
              >
                <div className="text-xs font-mono text-violet-500">
                  {n.toString(16).toUpperCase().padStart(2, "0")}
                </div>
                <div className="text-[9px] text-slate-400 mt-1 font-mono">
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-white/50 rounded-lg text-center border border-slate-100/60">
            <div className="text-[10px] text-slate-400 font-mono">Somme</div>
            <div className="text-sm text-slate-800 font-mono">{sum}</div>
          </div>
          <div className="p-3 bg-white/50 rounded-lg text-center border border-slate-100/60">
            <div className="text-[10px] text-slate-400 font-mono">
              Moyenne
            </div>
            <div className="text-sm text-slate-800 font-mono">
              {average.toFixed(1)}
            </div>
          </div>
          <div className="p-3 bg-white/50 rounded-lg text-center border border-slate-100/60">
            <div className="text-[10px] text-slate-400 font-mono">
              Énergie
            </div>
            <div className="text-sm text-slate-800 font-mono">
              {((average / 255) * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 text-center leading-relaxed font-light">
          Ces nombres proviennent d&apos;une mesure physique réelle de
          fluctuations quantiques du vide. Ils sont véritablement aléatoires
          et non-déterministes.
        </p>
      </div>

      {/* Math Explainer */}
      <div
        className="p-5 rounded-2xl border border-white/60"
        style={{
          background:
            "linear-gradient(135deg, hsla(220, 80%, 62%, 0.06), hsla(270, 70%, 60%, 0.04))",
        }}
      >
        <h3 className="text-[11px] text-slate-600 font-mono uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
          <svg
            className="w-3.5 h-3.5 text-violet-400/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          Comprendre les calculs
        </h3>

        {/* Modulo explanation */}
        <div className="mb-4 p-4 bg-white/50 rounded-lg border border-slate-100/40">
          <h4 className="text-xs text-slate-800 font-medium mb-2">
            Qu&apos;est-ce que &quot;mod&quot; (modulo) ?
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-3 font-light">
            Le modulo est le{" "}
            <strong className="text-slate-700 font-medium">
              reste de la division entière
            </strong>
            . Il transforme un grand nombre en un nombre plus petit dans une
            plage définie.
          </p>
          <div className="bg-slate-900 p-3 rounded-lg font-mono text-[10px] border border-slate-800">
            <div className="text-slate-500 mb-2">
              Exemple avec la somme {sum} et 22 arcanes du Tarot :
            </div>
            <div className="space-y-1">
              <div>
                <span className="text-slate-500">
                  {sum} ÷ 22 ={" "}
                </span>
                <span className="text-slate-300">
                  {Math.floor(sum / 22)}
                </span>
                <span className="text-slate-600"> (partie entière)</span>
              </div>
              <div>
                <span className="text-slate-500">
                  {Math.floor(sum / 22)} × 22 ={" "}
                </span>
                <span className="text-slate-300">
                  {Math.floor(sum / 22) * 22}
                </span>
              </div>
              <div>
                <span className="text-slate-500">
                  {sum} - {Math.floor(sum / 22) * 22} ={" "}
                </span>
                <span className="text-orange-400 font-semibold">
                  {sum % 22}
                </span>
                <span className="text-slate-600"> (le reste)</span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-800 text-slate-600">
              Vérification : ({Math.floor(sum / 22)} × 22) + {sum % 22} ={" "}
              {Math.floor(sum / 22) * 22 + (sum % 22)} ✓
            </div>
          </div>
        </div>

        {/* Why these numbers */}
        <div className="mb-4 p-4 bg-white/50 rounded-lg border border-slate-100/40">
          <h4 className="text-xs text-slate-800 font-medium mb-2">
            Pourquoi ces nombres ?
          </h4>
          <div className="space-y-2 text-[11px]">
            {[
              ["22", "text-violet-500", "arcanes majeurs du Tarot"],
              ["10", "text-blue-500", "Sefirot dans l'Arbre de Vie"],
              ["7", "text-emerald-500", "principes hermétiques du Kybalion"],
              ["64", "text-amber-500", "hexagrammes du I Ching"],
              [
                "255",
                "text-orange-500",
                "valeur max d'un byte, pour normaliser",
              ],
            ].map(([num, color, desc]) => (
              <div key={num} className="flex items-start gap-2">
                <span className={`${color} font-mono w-8`}>{num}</span>
                <span className="text-slate-500">= {desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step by step */}
        <div className="p-4 bg-white/50 rounded-lg border border-slate-100/40">
          <h4 className="text-xs text-slate-800 font-medium mb-3">
            Calculs détaillés
          </h4>
          <div className="space-y-3 text-[10px]">
            <div className="p-2.5 bg-white/60 rounded-lg border-l-2 border-violet-400/60">
              <div className="text-violet-600 font-mono font-medium mb-1">
                Tarot
              </div>
              <div className="font-mono text-slate-500">
                {sum} mod 22 = {sum % 22} → Arcane #{sum % 22}
              </div>
            </div>

            <div className="p-2.5 bg-white/60 rounded-lg border-l-2 border-blue-400/60">
              <div className="text-blue-600 font-mono font-medium mb-1">
                Kabbalah
              </div>
              <div className="font-mono text-slate-500">
                ({sum} mod 10) + 1 = {sum % 10} + 1 = {(sum % 10) + 1} →
                Sefirah #{(sum % 10) + 1}
              </div>
              <div className="text-slate-400 mt-1">
                (+1 car les Sefirot vont de 1 à 10)
              </div>
            </div>

            <div className="p-2.5 bg-white/60 rounded-lg border-l-2 border-emerald-400/60">
              <div className="text-emerald-600 font-mono font-medium mb-1">
                Hermétique
              </div>
              <div className="font-mono text-slate-500">
                ({sum} mod 7) + 1 = {sum % 7} + 1 = {(sum % 7) + 1} →
                Principe #{(sum % 7) + 1}
              </div>
            </div>

            <div className="p-2.5 bg-white/60 rounded-lg border-l-2 border-orange-400/60">
              <div className="text-orange-600 font-mono font-medium mb-1">
                Énergie
              </div>
              <div className="font-mono text-slate-500">
                moyenne({quantumData.numbers.join(" + ")}) / 8 ={" "}
                {average.toFixed(1)}
              </div>
              <div className="font-mono text-slate-500">
                {average.toFixed(1)} / 255 = {(average / 255).toFixed(3)} ={" "}
                {((average / 255) * 100).toFixed(1)}%
              </div>
            </div>

            <div className="p-2.5 bg-white/60 rounded-lg border-l-2 border-amber-400/60">
              <div className="text-amber-600 font-mono font-medium mb-1">
                I Ching
              </div>
              <div className="font-mono text-slate-500 mb-1">
                6 premiers bytes : [
                {quantumData.numbers.slice(0, 6).join(", ")}]
              </div>
              <div className="font-mono text-slate-500 mb-1">
                Bit de poids faible : [
                {quantumData.numbers
                  .slice(0, 6)
                  .map((b) => b % 2)
                  .join(", ")}
                ]
              </div>
              <div className="text-slate-400">
                6 bits → 2 trigrammes → 1 hexagramme
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 mt-4 text-center font-light">
          Aucune magie ici : ce sont des formules mathématiques
          déterministes. Les mêmes bytes donneront toujours les mêmes
          résultats.
        </p>
      </div>
    </div>
  );
};
