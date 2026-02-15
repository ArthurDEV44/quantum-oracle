"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardPanel, CardFooter } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "@/components/ui/collapsible";
import { Meter, MeterTrack, MeterIndicator, MeterLabel, MeterValue } from "@/components/ui/meter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { QuantumData, EsotericReading } from "@/types/esoteric";

interface ConsultResultSectionProps {
  response: string;
  quantumData: QuantumData;
  esotericReading?: EsotericReading;
}

interface TraditionCardData {
  symbol: string;
  label: string;
  value: string;
  detail?: string;
}

const ELEMENT_SYMBOLS: Record<string, string> = {
  fire: "🜂",
  water: "🜄",
  air: "🜁",
  earth: "🜃",
};

function TraditionCard({ symbol, label, value, detail }: TraditionCardData) {
  const card = (
    <Card className="overflow-hidden hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200">
      <CardPanel className="p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl shrink-0 mt-0.5 select-none">{symbol}</span>
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#A49B8B]">{label}</span>
            <p className="text-[15px] font-medium text-[#E6E5E0] mt-0.5">{value}</p>
          </div>
          {detail && (
            <CollapsibleTrigger
              render={<Button variant="ghost" size="icon-sm" />}
              className="shrink-0 text-[#A49B8B]"
              aria-label="Voir les détails"
            >
              <svg className="w-4 h-4 transition-transform duration-300 [[data-panel-open]_&]:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </CollapsibleTrigger>
          )}
        </div>
        {detail && (
          <CollapsiblePanel className="pl-9">
            <p className="text-[13px] text-[#A49B8B] leading-relaxed pt-3">{detail}</p>
          </CollapsiblePanel>
        )}
      </CardPanel>
    </Card>
  );

  return detail ? <Collapsible>{card}</Collapsible> : card;
}

function buildTraditions(r: EsotericReading): TraditionCardData[] {
  const rows: TraditionCardData[] = [
    { symbol: r.iChing.symbol, label: "Yi Jing", value: `${r.iChing.name} — Hexagramme #${r.iChing.hexagram}`, detail: r.iChing.meaning },
    { symbol: r.tarot.symbol, label: "Tarot", value: `${r.tarot.name} — Arcane #${r.tarot.arcana}`, detail: r.tarot.meaning },
    { symbol: r.kabbalah.hebrew, label: "Kabbale", value: `${r.kabbalah.name} — ${r.kabbalah.attribute}`, detail: r.kabbalah.meaning },
    { symbol: "⚗️", label: "Hermétisme", value: r.hermetic.name, detail: r.hermetic.axiom },
  ];

  if (r.ifa) rows.push({ symbol: "🔮", label: "Ifá", value: r.ifa.name, detail: r.ifa.meaning });
  if (r.runes) rows.push({ symbol: r.runes.glyph, label: "Runes", value: `${r.runes.name}${r.runes.orientation !== "upright" ? " (inversée)" : ""}`, detail: r.runes.meaning });
  if (r.geomancy) rows.push({ symbol: "⚄", label: "Géomancie", value: r.geomancy.judge, detail: `${r.geomancy.figure1} + ${r.geomancy.figure2} → ${r.geomancy.judge}` });
  if (r.alchemy) rows.push({ symbol: "⚗", label: "Alchimie", value: `${r.alchemy.stage} — ${r.alchemy.operation}`, detail: r.alchemy.stageLatin ? `${r.alchemy.stageLatin} — ${r.alchemy.operationLatin ?? ""}` : undefined });
  if (r.chakras) rows.push({ symbol: "🟣", label: "Chakra", value: `${r.chakras.name}${r.chakras.nameFrench ? ` (${r.chakras.nameFrench})` : ""}`, detail: `${r.chakras.mantra} · ${r.chakras.frequency} Hz` });
  if (r.gematria) rows.push({ symbol: r.gematria.sacredWord, label: "Gématria", value: `= ${r.gematria.value}`, detail: r.gematria.letters.map(l => `${l.letter} (${l.numericalValue})`).join(" + ") });

  rows.push({ symbol: ELEMENT_SYMBOLS[r.elements.dominant] ?? "◇", label: "Éléments", value: r.elements.dominant });
  rows.push({ symbol: "φ", label: "Géom. Sacrée", value: `${Math.round(r.sacredGeometry.phiResonance * 100)}% résonance Phi`, detail: r.sacredGeometry.harmonicFrequency });

  return rows;
}

export const ConsultResultSection = ({
  response,
  quantumData,
  esotericReading,
}: ConsultResultSectionProps) => {
  const traditions = esotericReading ? buildTraditions(esotericReading) : [];
  const synthesis = esotericReading?.synthesis;
  const convergences = esotericReading?.correspondences?.convergences ?? [];
  const energyPct = synthesis ? Math.round(synthesis.energy * 100) : 0;

  const getPolaritySymbol = (polarity?: string) => {
    if (polarity === "yin") return "☯️";
    if (polarity === "yang") return "☀️";
    return "⚖️";
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* Oracle Response Card — Glassmorphic dark */}
      <Card className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(212,165,116,0.06),0_1px_3px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#D4A574]/[0.03] via-transparent to-[#7C3AED]/[0.03] hover:border-white/[0.08] hover:shadow-[0_8px_32px_rgba(212,165,116,0.06),0_1px_3px_rgba(0,0,0,0.3)]">
        <CardPanel className="px-10 py-8 md:px-14 md:py-10 text-center">
          <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#D4A574]/70">R&eacute;ponse de l&apos;Oracle</span>
          <p className="text-[17px] leading-relaxed text-[#E6E5E0] mt-3 font-heading italic">&ldquo;{response}&rdquo;</p>
        </CardPanel>
      </Card>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Tradition Cards */}
        {traditions.map((t) => (
          <TraditionCard key={t.label} {...t} />
        ))}

        {/* Synthèse Card — lg:col-span-2 */}
        {esotericReading && synthesis && (
          <Card className="lg:col-span-2 border-[#D4A574]/10 hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-[15px]">Synthèse Cosmique</CardTitle>
            </CardHeader>
            <CardPanel className="space-y-4">
              {/* Energy bar — CossUI Meter */}
              <Meter value={energyPct} min={0} max={100}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <MeterLabel className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#A49B8B]">
                    Énergie Cosmique
                  </MeterLabel>
                  <MeterValue className="text-lg font-mono font-semibold text-gradient" />
                </div>
                <MeterTrack className="h-2 rounded-full bg-[#111113]">
                  <MeterIndicator className="rounded-full bg-gradient-to-r from-[#D4A574] to-[#7C3AED]" />
                </MeterTrack>
              </Meter>
              {/* Polarity + Phase */}
              <div className="flex items-center gap-3">
                <span className="text-2xl select-none text-[#D4A574]">{getPolaritySymbol(synthesis.polarity)}</span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#A49B8B]">Tonalité cosmique</p>
                  <p className="text-[15px] text-[#E6E5E0] font-medium">{synthesis.cosmicTone}</p>
                  <p className="text-[12px] text-[#A49B8B]">{synthesis.polarity} · {synthesis.phase}</p>
                </div>
              </div>
              {/* Convergences */}
              {convergences.length > 0 && (
                <div className="space-y-3 mt-4">
                  <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#A49B8B]">Convergences</p>
                  <div className="flex flex-wrap gap-2">
                    {convergences.map((conv, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-white/[0.08] bg-[#111113] text-[#E6E5E0] gap-2 px-3 py-1.5 h-auto"
                      >
                        <span className="text-[#D4A574]">★</span>
                        {conv.archetype}
                        <span className="text-[#8A857E] font-mono text-[10px]">
                          {conv.traditions.length}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardPanel>
          </Card>
        )}

        {/* Signal Quantique Card — lg:col-span-2 */}
        <Card className="lg:col-span-2 hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200">
          <CardHeader>
            <CardTitle className="text-[15px]">Signal Quantique</CardTitle>
            <CardDescription className="font-mono text-[11px]">
              {quantumData.source}
            </CardDescription>
          </CardHeader>
          <CardPanel className="space-y-4">
            {/* Hex grid */}
            <div className="grid grid-cols-8 gap-1.5">
              {quantumData.numbers.map((n, i) => (
                <div key={i} className="bg-[#111113] rounded-lg px-2 py-1.5 text-center">
                  <div className="text-[13px] font-mono text-[#E6E5E0] font-medium">
                    {n.toString(16).toUpperCase().padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
            {/* Hex fingerprint */}
            <div className="p-4 bg-[#0A0A0A] rounded-2xl">
              <p className="text-[11px] font-mono text-[#8A857E] text-center break-all leading-relaxed tracking-wider">
                {quantumData.numbers.map(n => n.toString(16).toUpperCase().padStart(2, "0")).join(" ")}
              </p>
            </div>
            {/* Explanation */}
            <p className="text-[12px] text-[#8A857E] leading-relaxed">
              Chaque bit est un effondrement de superposition — véritablement aléatoire.
            </p>
          </CardPanel>
          <CardFooter className="justify-between">
            <Badge variant="secondary" className="font-mono text-[10px]">
              {new Date(quantumData.timestamp).toLocaleString("fr-FR")}
            </Badge>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
