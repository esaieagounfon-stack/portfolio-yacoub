"use client";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionLabel } from "@/components/portfolio/section-label";

const STATS = [
  { value: "Image", label: "Émotion & détail" },
  { value: "IA", label: "Systèmes qui scalent" },
  { value: "Remote", label: "Bénin · Lagos · Monde" },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#f8f5ee] px-5 py-20 android-sm:px-8 ipad:px-12 ipad:py-28 desktop-sm:px-[130px]"
    >
      <div className="pointer-events-none absolute -left-24 top-16 size-[320px] rounded-full bg-black/[0.03] blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1252px] items-center gap-12 ipad:gap-16 desktop-sm:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionLabel index="01" label="À propos" />
          <h2
            id="about-title"
            className="max-w-[16ch] font-helvetica-neue text-[34px] font-medium leading-[1.1] tracking-[-1.3px] text-black ipad:text-[48px] ipad:tracking-[-1.8px]"
          >
            L&apos;alliance de l&apos;image et de l&apos;intelligence.
          </h2>
          <p className="mt-6 max-w-[52ch] font-sans text-[16px] leading-relaxed tracking-[-0.3px] text-black/55 ipad:text-[17px]">
            Je combine deux expertises. L&apos;œil d&apos;un vidéaste et
            photographe passionné par l&apos;émotion et le détail, et la rigueur
            d&apos;un expert en IA qui automatise et optimise.
          </p>
          <p className="mt-4 max-w-[52ch] font-sans text-[16px] leading-relaxed tracking-[-0.3px] text-black/55 ipad:text-[17px]">
            Je ne livre pas juste une vidéo. Je livre un actif qui travaille
            pour votre business. Basé au Bénin, disponible à Lagos et en remote
            international.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.value}>
                <dt className="font-redhat text-[13px] font-semibold uppercase tracking-[0.16em] text-black/40">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-helvetica-neue text-[15px] tracking-[-0.4px] text-black">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <figure className="relative overflow-hidden rounded-[32px] border border-black/8 bg-black/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <img
              src="/originkit/hero-06/portraits-portrait-04.png"
              alt="Adediran Yacoub en situation de production"
              className="aspect-[4/5] w-full object-cover grayscale-[20%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-6 pb-6 pt-16">
              <p className="font-redhat text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
                En action
              </p>
              <p className="mt-1 font-helvetica-neue text-[18px] text-white">
                Adediran Yacoub
              </p>
            </figcaption>
          </figure>
          <div className="absolute -bottom-5 -left-4 hidden rounded-full border border-black/10 bg-[#f8f5ee] px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ipad:block">
            <p className="font-redhat text-[12px] font-semibold tracking-[0.08em] text-black/70">
              Abomey-Calavi · Disponible
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
