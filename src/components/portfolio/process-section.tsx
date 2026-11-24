"use client";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionLabel } from "@/components/portfolio/section-label";

const STEPS = [
  {
    index: "01",
    title: "Échange stratégique",
    body: "On clarifie votre objectif, votre audience et le résultat attendu. Brief net, direction claire.",
  },
  {
    index: "02",
    title: "Production",
    body: "Je crée avec exigence : image, son, rythme, ou architecture d'agent. Chaque détail compte.",
  },
  {
    index: "03",
    title: "Livraison & optimisation",
    body: "Vous recevez un résultat prêt à performer, puis on ajuste pour qu'il continue de travailler.",
  },
];

export const ProcessSection = () => {
  return (
    <section
      id="processus"
      aria-labelledby="processus-title"
      className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white android-sm:px-8 ipad:px-12 ipad:py-28 desktop-sm:px-[130px]"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] size-[480px] rounded-full bg-[#f8f5ee]/8 blur-3xl" />

      <div className="mx-auto w-full max-w-[1252px]">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-redhat text-[12px] font-semibold tracking-[0.18em] text-white/35">
              04
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
              Processus
            </span>
          </div>
          <h2
            id="processus-title"
            className="max-w-[16ch] font-helvetica-neue text-[34px] font-medium leading-[1.1] tracking-[-1.3px] ipad:text-[48px]"
          >
            Un cadre simple. Une exigence constante.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 ipad:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.1}>
              <li className="relative border-t border-white/10 py-8 ipad:border-t-0 ipad:border-l ipad:px-8 ipad:py-0 ipad:first:border-l-0 ipad:first:pl-0">
                <span className="font-helvetica-neue text-[56px] font-medium leading-none tracking-[-2px] text-white/12">
                  {step.index}
                </span>
                <h3 className="mt-6 font-helvetica-neue text-[24px] font-medium tracking-[-0.6px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[36ch] font-sans text-[15px] leading-relaxed text-white/55">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
