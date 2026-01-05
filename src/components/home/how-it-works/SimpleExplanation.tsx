/**
 * Simple/Intuitive Explanation View
 */

import { STEPS, KEY_POINTS, COLOR_CLASSES } from "./constants";

function Arrow() {
  return (
    <div className="text-slate-200 rotate-90 md:rotate-0 shrink-0">
      <svg className="w-8 h-8 md:w-10 md:h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  );
}

export function SimpleExplanation() {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Visual Flow Diagram */}
      <div className="bg-white border border-slate-100 rounded-4xl p-10 md:p-16 shadow-xl shadow-slate-200/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-3xl rounded-full -mr-32 -mt-32" />

        <h3 className="text-xl font-semibold text-slate-900 mb-12 text-center tracking-wide uppercase">
          Le Voyage d&apos;une Consultation
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {STEPS.map((step, index) => (
            <div key={step.title} className="contents">
              <div className="group flex flex-col items-center text-center flex-1 space-y-4">
                <div className={`w-20 h-20 rounded-4xl ${step.colorClass} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-3xl">{step.emoji}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-900 font-bold tracking-tight">{step.title}</p>
                  <p className="text-slate-500 text-xs">{step.description}</p>
                </div>
              </div>
              {index < STEPS.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 gap-8">
        {KEY_POINTS.map((item) => (
          <div
            key={item.title}
            className="group p-8 bg-white border border-slate-100 hover:border-indigo-100 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50"
          >
            <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${COLOR_CLASSES[item.color]}`}>
              {item.icon}
            </div>
            <h4 className="text-slate-900 font-bold mb-3 text-lg">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
