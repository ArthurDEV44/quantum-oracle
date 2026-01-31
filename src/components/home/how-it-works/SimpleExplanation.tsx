/**
 * Simple/Intuitive Explanation View
 */

import { STEPS, KEY_POINTS } from "./constants";

const STEP_ACCENTS = [
  "border-orange-200/60 text-orange-500",
  "border-violet-200/60 text-violet-500",
  "border-blue-200/60 text-blue-500",
  "border-emerald-200/60 text-emerald-500",
];

export function SimpleExplanation() {
  return (
    <div className="space-y-20">
      {/* Flow Diagram */}
      <div className="border border-slate-100 rounded-2xl p-8 md:p-14 bg-white/40 backdrop-blur-sm">
        <h3 className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-mono mb-12 text-center">
          Le Voyage d&apos;une Consultation
        </h3>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, hsla(28, 90%, 60%, 0.25), hsla(270, 70%, 60%, 0.25), hsla(220, 80%, 60%, 0.25), hsla(160, 60%, 50%, 0.25))",
            }}
            aria-hidden="true"
          />

          {/* Connecting line - mobile */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-6 w-px"
            style={{
              background:
                "linear-gradient(180deg, hsla(28, 90%, 60%, 0.25), hsla(270, 70%, 60%, 0.25), hsla(220, 80%, 60%, 0.25), hsla(160, 60%, 50%, 0.25))",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="flex md:flex-col items-center md:text-center gap-5 md:gap-0 md:px-4"
              >
                <div
                  className={`w-12 h-12 shrink-0 rounded-full border flex items-center justify-center text-sm font-mono relative bg-white ${STEP_ACCENTS[i]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:mt-4">
                  <p className="text-slate-800 text-sm font-medium tracking-tight">
                    {step.title}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 gap-5">
        {KEY_POINTS.map((item) => (
          <div
            key={item.title}
            className="p-7 border border-slate-100 rounded-2xl bg-white/40 backdrop-blur-sm"
          >
            <h4 className="text-slate-800 text-sm font-medium mb-2 tracking-tight">
              {item.title}
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
