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
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Raw Quantum Data */}
      <div className="p-6 bg-black/40 border border-neutral-800 rounded-2xl space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-white font-medium">Données Quantiques Brutes</h3>
          <span className="text-[10px] text-neutral-500 font-mono">
            {new Date(quantumData.timestamp).toLocaleString("fr-FR")}
          </span>
        </div>

        <div className="p-3 bg-neutral-900/50 rounded-lg">
          <div className="text-[10px] text-neutral-500 mb-2">Source</div>
          <div className="text-sm text-violet-400 font-mono">{quantumData.source}</div>
        </div>

        {/* Bytes Grid with explanations */}
        <div>
          <div className="text-[10px] text-neutral-500 mb-2">8 Bytes (0-255)</div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {quantumData.numbers.map((n, i) => (
              <div
                key={i}
                className="p-2 bg-neutral-800/50 rounded-lg border border-neutral-700/50 text-center"
              >
                <div className="text-xs font-mono text-violet-300">
                  {n.toString(16).toUpperCase().padStart(2, "0")}
                </div>
                <div className="text-[9px] text-neutral-600 mt-1">
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
            <div className="text-[10px] text-neutral-500">Somme</div>
            <div className="text-sm text-white font-mono">{sum}</div>
          </div>
          <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
            <div className="text-[10px] text-neutral-500">Moyenne</div>
            <div className="text-sm text-white font-mono">{average.toFixed(1)}</div>
          </div>
          <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
            <div className="text-[10px] text-neutral-500">Énergie</div>
            <div className="text-sm text-white font-mono">{(average / 255 * 100).toFixed(1)}%</div>
          </div>
        </div>

        <p className="text-[10px] text-neutral-600 text-center leading-relaxed">
          Ces nombres proviennent d&apos;une mesure physique réelle de fluctuations quantiques du vide.
          Ils sont véritablement aléatoires et non-déterministes, contrairement aux générateurs pseudo-aléatoires classiques.
        </p>
      </div>

      {/* Math Explainer Section */}
      <div className="p-5 bg-blue-950/30 border border-blue-800/30 rounded-xl">
        <h3 className="text-sm text-blue-300 font-medium mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Comprendre les calculs (transparence totale)
        </h3>

        {/* What is Modulo */}
        <div className="mb-4 p-4 bg-neutral-900/50 rounded-lg">
          <h4 className="text-xs text-white font-medium mb-2">Qu&apos;est-ce que &quot;mod&quot; (modulo) ?</h4>
          <p className="text-xs text-neutral-400 leading-relaxed mb-3">
            Le modulo est le <strong className="text-white">reste de la division entière</strong>.
            Il permet de transformer un grand nombre en un nombre plus petit dans une plage définie.
          </p>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs">
            <div className="text-neutral-500 mb-2">Exemple avec la somme {sum} et 22 arcanes du Tarot :</div>
            <div className="space-y-1">
              <div><span className="text-neutral-400">{sum} ÷ 22 = </span><span className="text-white">{Math.floor(sum / 22)}</span><span className="text-neutral-600"> (partie entière)</span></div>
              <div><span className="text-neutral-400">{Math.floor(sum / 22)} × 22 = </span><span className="text-white">{Math.floor(sum / 22) * 22}</span></div>
              <div><span className="text-neutral-400">{sum} - {Math.floor(sum / 22) * 22} = </span><span className="text-emerald-400 font-bold">{sum % 22}</span><span className="text-neutral-600"> (le reste = résultat)</span></div>
            </div>
            <div className="mt-3 pt-3 border-t border-neutral-800 text-neutral-500">
              Vérification : ({Math.floor(sum / 22)} × 22) + {sum % 22} = {Math.floor(sum / 22) * 22 + sum % 22} ✓
            </div>
          </div>
        </div>

        {/* Why these numbers */}
        <div className="mb-4 p-4 bg-neutral-900/50 rounded-lg">
          <h4 className="text-xs text-white font-medium mb-2">Pourquoi ces nombres spécifiques ?</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-violet-400 font-mono w-8">22</span>
              <span className="text-neutral-400">= nombre d&apos;arcanes majeurs du Tarot (Le Mat à Le Monde)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 font-mono w-8">10</span>
              <span className="text-neutral-400">= nombre de Sefirot dans l&apos;Arbre de Vie kabbalistique</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono w-8">7</span>
              <span className="text-neutral-400">= nombre de principes hermétiques du Kybalion</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-mono w-8">64</span>
              <span className="text-neutral-400">= nombre d&apos;hexagrammes du I Ching (8 trigrammes × 8)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono w-8">255</span>
              <span className="text-neutral-400">= valeur maximale d&apos;un byte (0-255), pour normaliser en %</span>
            </div>
          </div>
        </div>

        {/* Step by step for each */}
        <div className="p-4 bg-neutral-900/50 rounded-lg">
          <h4 className="text-xs text-white font-medium mb-3">Calculs détaillés pour cette lecture</h4>
          <div className="space-y-3 text-[11px]">

            {/* Tarot */}
            <div className="p-2 bg-black/40 rounded border-l-2 border-violet-500">
              <div className="text-violet-400 font-medium mb-1">Tarot</div>
              <div className="font-mono text-neutral-400">
                {sum} mod 22 = {sum % 22} → Arcane #{sum % 22}
              </div>
            </div>

            {/* Kabbalah */}
            <div className="p-2 bg-black/40 rounded border-l-2 border-blue-500">
              <div className="text-blue-400 font-medium mb-1">Kabbalah</div>
              <div className="font-mono text-neutral-400">
                ({sum} mod 10) + 1 = {sum % 10} + 1 = {(sum % 10) + 1} → Sefirah #{(sum % 10) + 1}
              </div>
              <div className="text-neutral-600 mt-1">(+1 car les Sefirot vont de 1 à 10, pas de 0 à 9)</div>
            </div>

            {/* Hermetic */}
            <div className="p-2 bg-black/40 rounded border-l-2 border-emerald-500">
              <div className="text-emerald-400 font-medium mb-1">Hermétique</div>
              <div className="font-mono text-neutral-400">
                ({sum} mod 7) + 1 = {sum % 7} + 1 = {(sum % 7) + 1} → Principe #{(sum % 7) + 1}
              </div>
            </div>

            {/* Energy */}
            <div className="p-2 bg-black/40 rounded border-l-2 border-cyan-500">
              <div className="text-cyan-400 font-medium mb-1">Énergie</div>
              <div className="font-mono text-neutral-400">
                moyenne({quantumData.numbers.join(" + ")}) / 8 = {average.toFixed(1)}
              </div>
              <div className="font-mono text-neutral-400">
                {average.toFixed(1)} / 255 = {(average / 255).toFixed(3)} = {(average / 255 * 100).toFixed(1)}%
              </div>
            </div>

            {/* I Ching */}
            <div className="p-2 bg-black/40 rounded border-l-2 border-amber-500">
              <div className="text-amber-400 font-medium mb-1">I Ching</div>
              <div className="font-mono text-neutral-400 mb-1">
                6 premiers bytes : [{quantumData.numbers.slice(0, 6).join(", ")}]
              </div>
              <div className="font-mono text-neutral-400 mb-1">
                Bit de poids faible (pair=0, impair=1) : [{quantumData.numbers.slice(0, 6).map(b => b % 2).join(", ")}]
              </div>
              <div className="text-neutral-600">
                Ces 6 bits forment 2 trigrammes (3 bits chacun) qui déterminent l&apos;hexagramme
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-neutral-500 mt-4 text-center">
          Aucune magie ici : ce sont des formules mathématiques déterministes.
          Les mêmes bytes donneront toujours les mêmes résultats.
        </p>
      </div>
    </div>
  );
};
