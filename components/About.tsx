import { Reveal } from "@/components/Reveal";
import { aboutText } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-10 md:py-20">
      <div className="silver-rule mb-16 md:mb-20" />
      <div className="mx-auto w-full max-w-[40rem] text-center">
        <Reveal>
          <h2 className="gold-text font-display text-[1.35rem] tracking-[0.28em] md:text-[1.65rem]">
            ABOUT ABC
          </h2>
          <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 font-body text-[1.12rem] leading-[1.85] text-white/74 md:mt-9 md:text-[1.22rem]">
            {aboutText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
