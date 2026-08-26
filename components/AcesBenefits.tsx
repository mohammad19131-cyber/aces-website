"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    id: "blazer",
    index: "01",
    kicker: "Blazer",
    title: "Co-Curricular Blazer Points",
    desc: "Members earn credits toward Aitchison’s Co-Curricular Blazer — 1.5 points for five national or international competition wins, 0.5 for the President, and 0.5 for the General Secretary.",
    marks: ["1.5 pts · five wins", "0.5 · President", "0.5 · General Secretary"],
  },
  {
    id: "university",
    index: "02",
    kicker: "Laurels",
    title: "University Laurels",
    desc: "ACES results carry weight in university applications, including Ivy League and other competitive institutions, supported by a record of alumni acceptances.",
    marks: ["Ivy League", "Competitive institutions", "Alumni acceptances"],
  },
  {
    id: "skill",
    index: "03",
    kicker: "Skill",
    title: "Executive Skill Mastery",
    desc: "Public speaking, negotiation, crisis management, financial modelling, and commercial strategy — practised under competition conditions.",
    marks: [
      "Public speaking",
      "Negotiation",
      "Crisis management",
      "Financial modelling",
      "Commercial strategy",
    ],
  },
  {
    id: "podium",
    index: "04",
    kicker: "Podium",
    title: "Podium Track Record",
    desc: "Consistent finishes at LUMS YLES, KGES, the Blue Ocean Challenge, and the International Business Olympiad.",
    marks: ["LUMS YLES", "KGES", "Blue Ocean Challenge", "International Business Olympiad"],
  },
] as const;

export function AcesBenefits() {
  const [activeId, setActiveId] = useState<(typeof benefits)[number]["id"]>("blazer");

  return (
    <div className="laurel-board">
      <Reveal>
        <h2 className="section-title text-center font-display text-[1.35rem] tracking-[0.24em] text-white md:text-[1.7rem]">
          SOCIETY BENEFITS &amp; LAURELS
        </h2>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
      </Reveal>

      <div className="laurel-grid">
        {benefits.map((item, index) => {
          const active = item.id === activeId;

          return (
            <Reveal key={item.id} delay={0.05 * index}>
              <button
                type="button"
                className={`laurel-card${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => setActiveId(item.id)}
              >
                <span className="laurel-card-top">
                  <span className="gold-text laurel-card-index">{item.index}</span>
                  <span className="gold-text laurel-card-kicker">{item.kicker}</span>
                </span>
                <span className="laurel-card-title">{item.title}</span>
                <p className="laurel-card-desc">{item.desc}</p>
                <ul className="laurel-marks">
                  {item.marks.map((mark) => (
                    <li key={mark}>{mark}</li>
                  ))}
                </ul>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
