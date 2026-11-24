"use client";

import { Reveal } from "@/components/portfolio/reveal";
import { SectionLabel } from "@/components/portfolio/section-label";

const PROJECTS = [
  {
    title: "Film corporate — Maison Lumi",
    category: "Montage vidéo",
    description:
      "Récit de marque 90 secondes, étalonnage cinéma et sound design pour une collection luxe.",
    image: "/originkit/hero-06/portraits-portrait-01.png",
    span: "ipad:col-span-2",
  },
  {
    title: "Campagne Reels — NovaPay",
    category: "Publicité",
    description:
      "Série de formats courts cinématographiques pensés pour la conversion mobile.",
    image: "/originkit/hero-06/portraits-portrait-06.png",
    span: "",
  },
  {
    title: "Série YouTube — Atelier Noir",
    category: "Contenu",
    description:
      "Identité visuelle, rythme d'épisode et motion design pour une chaîne premium.",
    image: "/originkit/hero-06/portraits-portrait-08.png",
    span: "",
  },
  {
    title: "Direction photo — Mariage Cotonou",
    category: "Photographie",
    description:
      "Portraits et reportage, lumière naturelle, édition Fine Art.",
    image: "/originkit/hero-06/portraits-portrait-03.png",
    span: "",
  },
  {
    title: "Agent WhatsApp — Clinic Pulse",
    category: "Agents IA",
    description:
      "Chatbot de qualification et prise de rendez-vous 24/7, connecté au calendrier.",
    image: "/originkit/hero-06/portraits-portrait-11.png",
    span: "",
  },
  {
    title: "Workflow contenu — Studio Lagos",
    category: "Automatisation",
    description:
      "Pipeline n8n : brief, scripts, publication Instagram et reporting automatique.",
    image: "/originkit/hero-06/portraits-portrait-12.png",
    span: "ipad:col-span-2",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      className="bg-[#f8f5ee] px-5 py-20 android-sm:px-8 ipad:px-12 ipad:py-28 desktop-sm:px-[130px]"
    >
      <div className="mx-auto w-full max-w-[1252px]">
        <Reveal className="flex flex-col gap-4 ipad:flex-row ipad:items-end ipad:justify-between">
          <div>
            <SectionLabel index="03" label="Projets sélectionnés" />
            <h2
              id="projets-title"
              className="max-w-[16ch] font-helvetica-neue text-[34px] font-medium leading-[1.1] tracking-[-1.3px] text-black ipad:text-[48px]"
            >
              Chaque projet est une histoire de transformation.
            </h2>
          </div>
          <p className="max-w-[36ch] font-sans text-[15px] leading-relaxed text-black/50">
            Une sélection d&apos;images, de films et de systèmes livrés pour des
            marques qui visent le haut de gamme.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 ipad:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className={project.span}>
              <article className="group overflow-hidden rounded-[28px] border border-black/8 bg-white/40">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f8f5ee]/90 px-3 py-1 font-redhat text-[11px] font-semibold uppercase tracking-[0.14em] text-black/70 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-helvetica-neue text-[22px] font-medium tracking-[-0.6px] text-black">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-sans text-[14px] leading-relaxed text-black/50">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
