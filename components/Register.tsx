"use client";

import type { MouseEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { onHashLinkClick } from "@/lib/nav";
import { registerHref, site } from "@/lib/site";

const isExternal = registerHref.startsWith("http");

export function Register() {
  return (
    <section id="register" className="px-5 py-16 md:px-10 md:py-20">
      <div className="silver-rule mb-16 md:mb-20" />
      <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
        <Reveal>
          <h2 className="font-display text-[1.45rem] tracking-[0.16em] text-white md:text-[1.9rem]">
            READY FOR <span className="gold-text">{site.edition}</span>?
          </h2>
          <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={registerHref}
            className="cta-link mt-8 text-[0.74rem] md:text-[0.8rem]"
            {...(isExternal
              ? { target: "_blank", rel: "noreferrer" }
              : {
                  onClick: (event: MouseEvent<HTMLAnchorElement>) =>
                    onHashLinkClick(event, registerHref),
                })}
          >
            REGISTER →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
