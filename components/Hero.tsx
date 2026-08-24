"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/components/Countdown";
import { site } from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 pb-12 pt-[5.6rem] md:px-10 md:pb-16 md:pt-[6.4rem]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
        <motion.h1
          className="flex flex-col items-center"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.06}
        >
          <span className="font-display text-[clamp(1.35rem,3.6vw,2.2rem)] tracking-[0.38em] text-white">
            ABC
          </span>
          <span className="gold-text mt-1 font-display text-[clamp(5.6rem,24vw,16.5rem)] font-bold leading-[0.8] tracking-[0.045em]">
            {site.edition}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[20rem] font-display text-[0.86rem] leading-relaxed tracking-[0.2em] text-white md:mt-7 md:max-w-none md:text-[1.12rem] md:tracking-[0.26em]"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.18}
        >
          {site.fullName.toUpperCase()}
        </motion.p>

        <motion.p
          className="mt-3 font-display text-[0.7rem] tracking-[0.32em] text-white/70 md:text-[0.78rem]"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.26}
        >
          <span className="gold-text">{site.edition}</span> EDITION
        </motion.p>

        <motion.div
          className="mt-6 flex w-[13.5rem] flex-col items-center md:mt-7 md:w-[16rem]"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.34}
        >
          <div className="silver-rule mb-4" />
          <p className="gold-text font-display text-[0.82rem] tracking-[0.28em] md:text-[0.98rem] md:tracking-[0.32em]">
            {site.eventDateLabel.toUpperCase()}
          </p>
          <div className="silver-rule mt-4" />
        </motion.div>

        <motion.div
          className="mt-10 w-full max-w-[34rem] md:mt-12"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.42}
        >
          <div className="gold-rule mb-8" />
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
