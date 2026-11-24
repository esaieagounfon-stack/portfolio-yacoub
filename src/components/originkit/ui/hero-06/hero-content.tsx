/* eslint-disable */
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/originkit/ui/hero-06/button";

/** ease-out-cubic */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

type HeroContentProps = {
  onExplorePeople: () => void;
  onViewStories: () => void;
};

export const HeroContent = ({
  onExplorePeople,
  onViewStories,
}: HeroContentProps) => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: {
            type: "tween" as const,
            duration: 0.45,
            ease: EASE_OUT,
            delay,
          },
        };

  return (
    <div className="pointer-events-none relative z-20 flex w-full max-w-[440px] flex-col items-center gap-4 px-0 ipad:max-w-[520px] ipad:gap-6">
      <div className="flex w-full flex-col items-center gap-2 text-center ipad:gap-4">
        <motion.p
          {...reveal(0.22)}
          className="pointer-events-auto font-redhat text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45 ipad:text-[12px]"
        >
          Monteur vidéo · Photographe · Agents IA
        </motion.p>

        <motion.h1
          {...reveal(0.28)}
          className="pointer-events-auto w-full font-helvetica-neue text-[30px] desktop-sm:text-[40px] font-medium leading-tight tracking-[-1.2px] text-balance ipad:text-[38px] ipad:tracking-[-1.5px]"
        >
          <span className="text-black/40">Je transforme vos idées en </span>
          <span className="text-black">contenus premium et en systèmes intelligents.</span>
        </motion.h1>

        <motion.p
          {...reveal(0.36)}
          className="pointer-events-auto w-full max-w-[420px] font-sans text-[14px] leading-normal tracking-[-0.4px] text-black/45 text-pretty ipad:text-[15px]"
        >
          Monteur vidéo freelance et créateur d&apos;agents IA à Abomey-Calavi.
          J&apos;accompagne les marques et entrepreneurs qui veulent une image
          haut de gamme et une croissance automatisée.
        </motion.p>
      </div>

      <motion.div
        {...reveal(0.48)}
        className="pointer-events-auto flex flex-row flex-wrap items-center justify-center gap-4 ipad:gap-6"
      >
        <Button
          variant="primary"
          aria-label="Découvrir mon travail"
          onClick={onExplorePeople}
        >
          Découvrir mon travail
        </Button>
        <Button
          variant="secondary"
          aria-label="Démarrer un projet"
          onClick={onViewStories}
        >
          Démarrer un projet
        </Button>
      </motion.div>
    </div>
  );
};
