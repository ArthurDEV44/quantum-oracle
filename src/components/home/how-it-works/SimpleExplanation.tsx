import { Card, CardPanel } from "@/components/ui/card";

const STEPS = [
  { num: "01", title: "Posez votre question", desc: "Formulez votre intention. Chaque mot oriente les flux quantiques vers une réponse unique." },
  { num: "02", title: "Génération quantique", desc: "Des octets de hasard pur sont extraits du bruit fondamental de l'univers via des sources certifiées." },
  { num: "03", title: "Lecture multi-traditions", desc: "L'IA interprète le signal à travers 6 traditions ésotériques millénaires pour révéler votre guidance." },
];

export function SimpleExplanation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {/* Connecting line — desktop only */}
      <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#D4A574]/20 via-[#7C3AED]/20 to-[#D4A574]/20" aria-hidden="true" />

      {STEPS.map((step) => (
        <Card key={step.num} className="hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200">
          <CardPanel className="text-center p-8">
            <span className="text-5xl font-normal text-gradient inline-block">
              {step.num}
            </span>
            <h3 className="text-[17px] font-medium text-[#E6E5E0] mt-4 tracking-tight">{step.title}</h3>
            <p className="text-[14px] text-[#A49B8B] leading-relaxed mt-2">{step.desc}</p>
          </CardPanel>
        </Card>
      ))}
    </div>
  );
}
