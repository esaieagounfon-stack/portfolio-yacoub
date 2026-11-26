"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/originkit/ui/hero-06/button";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionLabel } from "@/components/portfolio/section-label";

const PROJECT_TYPES = [
  "Montage vidéo",
  "Photographie",
  "Agents IA & automatisation",
  "Projet mixte",
];

export const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Nouveau projet — ${type}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`,
    );
    window.location.href = `mailto:contact@adediranyacoub.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#f3efe6] px-5 py-20 android-sm:px-8 ipad:px-12 ipad:py-28 desktop-sm:px-[130px]"
    >
      <div className="mx-auto grid w-full max-w-[1252px] gap-12 desktop-sm:grid-cols-[0.9fr_1.1fr] desktop-sm:gap-20">
        <Reveal>
          <SectionLabel index="05" label="Contact" />
          <h2
            id="contact-title"
            className="max-w-[12ch] font-helvetica-neue text-[34px] font-medium leading-[1.1] tracking-[-1.3px] text-black ipad:text-[48px]"
          >
            Vous avez un projet ambitieux ?
          </h2>
          <p className="mt-5 max-w-[42ch] font-sans text-[16px] leading-relaxed text-black/55">
            Je suis disponible pour de nouveaux projets. Parlons de votre
            vision.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <p className="font-redhat text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                Email
              </p>
              <a
                href="mailto:contact@adediranyacoub.com"
                className="mt-1 inline-flex min-h-11 items-center font-helvetica-neue text-[18px] text-black underline-offset-4 hover:underline"
              >
                contact@adediranyacoub.com
              </a>
            </li>
            <li>
              <p className="font-redhat text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                WhatsApp
              </p>
              <a
                href="https://wa.me/2290156514346"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex min-h-11 items-center font-helvetica-neue text-[18px] text-black underline-offset-4 hover:underline"
              >
                +229 01 56 51 43 46
              </a>
            </li>
            <li>
              <p className="font-redhat text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                Instagram
              </p>
              <a
                href="https://instagram.com/adediranyacoub"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex min-h-11 items-center font-helvetica-neue text-[18px] text-black underline-offset-4 hover:underline"
              >
                @adediranyacoub
              </a>
            </li>
            <li>
              <p className="font-redhat text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40">
                Localisation
              </p>
              <p className="mt-1 font-helvetica-neue text-[18px] text-black">
                Abomey-Calavi — disponible en remote
              </p>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-black/10 bg-[#f8f5ee] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.05)] ipad:p-10"
          >
            <div className="grid gap-5 ipad:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Nom
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="min-h-12 rounded-2xl border border-black/10 bg-white/60 px-4 font-sans text-[15px] text-black outline-none transition focus-visible:border-black"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="min-h-12 rounded-2xl border border-black/10 bg-white/60 px-4 font-sans text-[15px] text-black outline-none transition focus-visible:border-black"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2">
              <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.16em] text-black/45">
                Type de projet
              </span>
              <select
                required
                name="type"
                defaultValue=""
                className="min-h-12 rounded-2xl border border-black/10 bg-white/60 px-4 font-sans text-[15px] text-black outline-none transition focus-visible:border-black"
              >
                <option value="" disabled>
                  Choisir
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 flex flex-col gap-2">
              <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.16em] text-black/45">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 font-sans text-[15px] text-black outline-none transition focus-visible:border-black"
              />
            </label>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="primary">
                Envoyer le brief
              </Button>
              {sent ? (
                <p className="font-sans text-[14px] text-black/50">
                  Votre client mail s&apos;ouvre pour finaliser l&apos;envoi.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
