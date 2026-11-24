"use client";

import PixelCard from "@/components/originkit/ui/hero-06/pixel-card";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionLabel } from "@/components/portfolio/section-label";

const EXPERTISES = [
  {
    index: "01",
    title: "Montage Vidéo",
    body: "Films corporate, publicités, contenus YouTube, Reels et TikTok cinématographiques. Étalonnage, motion design, sound design.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
  {
    index: "02",
    title: "Photographie & Vidéographie",
    body: "Portraits, mode, produits, événements, mariages. Direction artistique soignée, du brief au livrable final.",
    tools: ["Lightroom", "Photoshop"],
  },
  {
    index: "03",
    title: "Agents IA & Automatisation",
    body: "Chatbots intelligents WhatsApp et Instagram, automatisation de prise de rendez-vous, création de contenu et workflows sur mesure.",
    tools: ["n8n", "Make", "Zapier", "OpenAI"],
  },
];

export const ExpertiseSection = () => {
  return (
    <section
      id="expertises"
      aria-labelledby="expertises-title"
      className="bg-[#f3efe6] px-5 py-20 android-sm:px-8 ipad:px-12 ipad:py-28 desktop-sm:px-[130px]"
    >
      <div className="mx-auto w-full max-w-[1252px]">
        <Reveal>
          <SectionLabel index="02" label="Expertises" />
          <h2
            id="expertises-title"
            className="max-w-[18ch] font-helvetica-neue text-[34px] font-medium leading-[1.1] tracking-[-1.3px] text-black ipad:text-[48px]"
          >
            Trois leviers. Un seul standard.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 ipad:grid-cols-3">
          {EXPERTISES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-[#f8f5ee] p-7 ipad:p-8">
                <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                  <PixelCard
                    colors={["#111111", "#3a3a3a", "#cfc8b8"]}
                    appearFrom="middle"
                    trigger="hover"
                    position="middle"
                    replay
                    gap={8}
                    pixelSize={4}
                    speed={80}
                    backgroundColor="transparent"
                    padding={0}
                    borderWidth={0}
                    borderColor="transparent"
                    radius={28}
                    showLabel={false}
                    style={{ minWidth: 0, minHeight: 0 }}
                  />
                </div>

                <div className="relative z-10 flex h-full flex-col pointer-events-none">
                  <span className="font-redhat text-[12px] font-semibold tracking-[0.2em] text-black/35">
                    {item.index}
                  </span>
                  <h3 className="mt-6 font-helvetica-neue text-[26px] font-medium tracking-[-0.8px] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 font-sans text-[15px] leading-relaxed text-black/55">
                    {item.body}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 font-redhat text-[12px] font-semibold tracking-[-0.2px] text-black/70"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
