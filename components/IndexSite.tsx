"use client";

import { useEffect, type ReactNode } from "react";
import { AcesBenefits } from "@/components/AcesBenefits";
import { Reveal } from "@/components/Reveal";
import { closeMenu, initIndexSite, showTab, toggleMenu } from "@/lib/index-site";
import { acesHighlights } from "@/lib/recognition";
import { registerHref, site } from "@/lib/site";

const abcFaqs = [
  {
    q: "What is the registration deadline?",
    a: "The deadline will be announced on Instagram and emailed to registered schools. Register early to hold your place.",
  },
  {
    q: "How do I register for the event?",
    a: "Open the Registration Form, enter your team details, select categories, and complete payment. A confirmation email follows a successful registration.",
  },
  {
    q: "Can I participate individually, or do I need a team?",
    a: "It depends on the category. MUNey is individual. Build Your Own Idea and Corporate Espionage require teams of two to four. Check the rules for your category before you register.",
  },
  {
    q: "What is the event schedule?",
    a: "The detailed schedule is shared with registered participants about a week before the Olympiad. The event runs over two days: opening ceremony, competition rounds, sessions, and closing awards.",
  },
  {
    q: "What is the competition format?",
    a: "Each category has its own format — from live pitching and case analysis to simulated trading and presentations. Preliminaries are generally on Day 1; finals on Day 2.",
  },
  {
    q: "What should I bring to the event?",
    a: "Bring your school ID, a notepad, pens, and a laptop if your category requires one. Prepare any presentation materials to the organising committee’s guidelines. Dress code: formal business attire.",
  },
  {
    q: "Will all participants receive certificates or prizes?",
    a: "Every participant receives a certificate of participation. Category winners, runners-up, and second runners-up receive trophies, cash prizes, and merit certificates. Overall awards, including Best Delegation and other distinctions, are presented at the closing ceremony.",
  },
  {
    q: "Who can I contact if I have any questions?",
    a: "Use the Suggestion tab, message the Instagram page, or email the General Secretary at the address in your registration confirmation.",
  },
  {
    q: "How many days is the event?",
    a: "ABC XIV runs over two days. Day 1 covers registration, the opening ceremony, and preliminary rounds. Day 2 covers finals, special sessions, and the closing awards.",
  },
  {
    q: "How many categories can delegates participate in?",
    a: "Delegates may enter as many categories as they wish, provided there are no scheduling conflicts. There is no minimum.",
  },
  {
    q: "What benefits do I get from participating in the event?",
    a: "High-level competition, contact with students from across the country, and mentorship from industry professionals. Participants receive certificates for their portfolios and may become eligible for Spark Tank incubation and future ACES Executive Board positions.",
  },
  {
    q: "What are the criteria for Best Delegation, and what overall awards are available?",
    a: "Each category awards a winner, runner-up, and second runner-up. These placements contribute double points towards Best Delegation. Enterprise carries no additional weighting. The Olympiad also recognises a Best Delegation Runner-Up, Outstanding Best Delegation, and Best Team.",
  },
];

const acesFaqs = [
  {
    q: "How do I become a member of ACES?",
    a: "Membership is open to all Aitchison College students interested in business, entrepreneurship, and leadership. Join through ABC Summer Camps or by speaking to a member of the Executive Council. Active participation in events and competitions is the surest path to blazer points.",
  },
  {
    q: "What competitions does ACES participate in?",
    a: "ACES competes nationally and internationally, including LUMS YLES, KGES, the Blue Ocean Challenge, and the International Business Olympiad. Members receive training, mentorship, and preparation sessions.",
  },
  {
    q: "What is the Co-Curricular Blazer and how do I earn points?",
    a: "The Co-Curricular Blazer is one of Aitchison College’s highest distinctions for achievement beyond the classroom. ACES members earn points through competition results, Executive Board leadership, and contribution to the society. Five national or international wins, for example, earn 1.5 points.",
  },
  {
    q: "How does Spark Tank support student startups?",
    a: "Spark Tank helps students turn ideas into ventures. Selected startups receive seed funding, industry mentorship, workspace, and a structured incubation programme, with pitch rounds and development milestones along the way.",
  },
  {
    q: "Can I join ACES without prior business experience?",
    a: "Yes. ACES is open to every level of experience. Training, workshops, competitions, and peer mentorship are there to build skill and confidence from the ground up.",
  },
];

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <div className="faq-item" key={item.q}>
          <button
            className="faq-question"
            type="button"
            onClick={(event) => event.currentTarget.parentElement?.classList.toggle("open")}
          >
            <span>{item.q}</span>
            <span className="faq-chevron" aria-hidden="true" />
          </button>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function IndexSite({ logo, loaderLogo }: { logo: ReactNode; loaderLogo: ReactNode }) {
  useEffect(() => initIndexSite(), []);

  return (
    <>
      <div className="loader-screen" id="loaderScreen">
        <div className="loader-logo">{loaderLogo}</div>
        <div className="loader-roman gold-text">XIV</div>
        <div className="loader-bar">
          <span />
        </div>
      </div>

      <div className="menu-backdrop" id="menuBackdrop" onClick={closeMenu} />

      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="absolute inset-x-0 bottom-0 gold-rule" />
        <nav className="mx-auto flex h-[4.35rem] w-full max-w-[1180px] items-center justify-between px-5 md:h-[4.85rem] md:px-8">
          <a
            href="#abc"
            className="site-brand"
            aria-label={site.shortName}
            onClick={(event) => {
              event.preventDefault();
              showTab("abc");
            }}
          >
            {logo}
            <span id="navBrandText" className="nav-brand-text">
              <strong>ABC</strong> XIV
            </span>
          </a>
          <button
            className="mobile-menu-btn"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className="nav-links" id="navLinks">
            <li>
              <a
                href="#society"
                className="nav-link"
                id="link-society"
                onClick={(event) => {
                  event.preventDefault();
                  showTab("society");
                }}
              >
                ACES
              </a>
            </li>
            <li>
              <a
                href="#abc"
                className="nav-link active"
                id="link-abc"
                onClick={(event) => {
                  event.preventDefault();
                  showTab("abc");
                }}
              >
                ABC
              </a>
            </li>
            <li>
              <a href="/our-team" className="nav-link">
                Our Team
              </a>
            </li>
            <li>
              <a href="/abr" className="nav-link">
                ABR
              </a>
            </li>
            <li>
              <a href="/study-guide" className="nav-link">
                Study Guide
              </a>
            </li>
            <li>
              <a href="/recognition" className="nav-link">
                Recognition
              </a>
            </li>
            <li>
              <a
                href="#response"
                className="nav-link"
                id="link-response"
                onClick={(event) => {
                  event.preventDefault();
                  showTab("response");
                }}
              >
                Suggestion
              </a>
            </li>
            <li>
              <a href="/code-of-conduct" className="nav-link">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="/waiver.pdf" className="nav-link" download="Waiver of Liability.pdf">
                Liability Waiver
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="abc" className="page active">
          <section className="relative px-5 pb-12 pt-[5.6rem] md:px-10 md:pb-16 md:pt-[6.4rem]">
            <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
              <h1 className="flex flex-col items-center">
                <span className="font-display text-[clamp(1.35rem,3.6vw,2.2rem)] tracking-[0.38em] text-white">
                  ABC
                </span>
                <span className="gold-text mt-1 font-display text-[clamp(5.6rem,24vw,16.5rem)] font-bold leading-[0.8] tracking-[0.045em]">
                  XIV
                </span>
              </h1>
              <p className="mt-6 max-w-[20rem] font-display text-[0.86rem] leading-relaxed tracking-[0.2em] text-white md:mt-7 md:max-w-none md:text-[1.12rem] md:tracking-[0.26em]">
                AITCHISON BUSINESS CONCEPT
              </p>
              <p className="mt-3 font-display text-[0.7rem] tracking-[0.32em] text-white/70 md:text-[0.78rem]">
                <span className="gold-text">XIV</span> EDITION
              </p>
              <div className="mt-6 flex w-[13.5rem] flex-col items-center md:mt-7 md:w-[16rem]">
                <div className="silver-rule mb-4" />
                <p className="gold-text font-display text-[0.82rem] tracking-[0.28em] md:text-[0.98rem] md:tracking-[0.32em]">
                  8–9 JANUARY 2027
                </p>
                <div className="silver-rule mt-4" />
              </div>
              <a
                href={registerHref}
                className="cta-link mt-8 text-[0.74rem] md:text-[0.8rem]"
                target="_blank"
                rel="noreferrer"
              >
                REGISTER NOW
              </a>
            </div>
          </section>

          <section className="timer-section px-5 pb-10 md:px-10">
            <div className="gold-rule mx-auto mb-8 max-w-[34rem]" />
            <div className="timer-label">Countdown to ABC XIV</div>
            <div className="timer-display" id="countdown">
              <div className="timer-unit">
                <div className="timer-value gold-text" id="days">
                  00
                </div>
                <div className="timer-name">Days</div>
              </div>
              <div className="timer-unit">
                <div className="timer-value gold-text" id="hours">
                  00
                </div>
                <div className="timer-name">Hours</div>
              </div>
              <div className="timer-unit">
                <div className="timer-value gold-text" id="minutes">
                  00
                </div>
                <div className="timer-name">Minutes</div>
              </div>
              <div className="timer-unit">
                <div className="timer-value gold-text" id="seconds">
                  00
                </div>
                <div className="timer-name">Seconds</div>
              </div>
            </div>
          </section>

          <section id="council" className="px-5 py-12 md:px-10 md:py-14">
            <div className="silver-rule mb-8 md:mb-10" />
            <div className="mx-auto w-full max-w-[1120px]">
              <div className="council-panel ec-tree px-5 py-11 sm:px-10 md:px-16 md:py-14">
                <h2 className="section-title text-center font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
                  EXECUTIVE COUNCIL
                </h2>
                <div className="gold-rule mx-auto mt-5 max-w-[12rem]" />

                <div className="ec-node mt-11 flex flex-col items-center md:mt-12">
                  <p className="gold-text mb-5 font-display text-[0.62rem] tracking-[0.34em] md:text-[0.7rem]">
                    PRESIDENT
                  </p>
                  <figure className="ec-card president flex w-[var(--portrait)] flex-col items-center">
                    <div className="portrait-frame">
                      <div className="portrait-inner">
                        <img
                          src="/council/president.png"
                          alt="President"
                          className="ec-img h-full w-full bg-navy object-cover object-[center_20%]"
                        />
                      </div>
                    </div>
                    <figcaption className="ec-name mt-3.5 text-center font-display text-[0.72rem] tracking-[0.08em] text-white md:text-[0.8rem]">
                      Muhammad Bin Salman
                    </figcaption>
                    <div className="ec-role sr-only">President</div>
                  </figure>
                </div>

                <div className="silver-rule mx-auto my-10 max-w-[22rem] md:my-12" />

                <div className="ec-node flex flex-col items-center">
                  <p className="gold-text mb-5 font-display text-[0.62rem] tracking-[0.34em] md:text-[0.7rem]">
                    GENERAL SECRETARY
                  </p>
                  <figure className="ec-card gensec flex w-[var(--portrait)] flex-col items-center">
                    <div className="portrait-frame">
                      <div className="portrait-inner">
                        <img
                          src="/council/general-secretary.png"
                          alt="General Secretary"
                          className="ec-img h-full w-full bg-navy object-cover object-[center_20%]"
                        />
                      </div>
                    </div>
                    <figcaption className="ec-name mt-3.5 text-center font-display text-[0.72rem] tracking-[0.08em] text-white md:text-[0.8rem]">
                      Eqaan Ali Syed
                    </figcaption>
                    <div className="ec-role sr-only">General Secretary</div>
                  </figure>
                </div>

                <div className="silver-rule mx-auto my-10 max-w-[22rem] md:my-12" />

                <div className="flex flex-col items-center">
                  <p className="gold-text mb-5 font-display text-[0.62rem] tracking-[0.34em] md:text-[0.7rem]">
                    EXECUTIVE MEMBERS
                  </p>
                  <div className="ec-row flex w-full max-w-[46rem] flex-col items-center gap-9 sm:flex-row sm:items-start sm:justify-center sm:gap-8">
                    <figure className="ec-card exec flex w-[var(--portrait)] flex-col items-center">
                      <div className="portrait-frame">
                        <div className="portrait-inner">
                          <img
                            src="/council/rai-behram.png"
                            alt="Executive"
                            className="ec-img h-full w-full bg-navy object-cover object-[center_20%]"
                          />
                        </div>
                      </div>
                      <figcaption className="ec-name mt-3.5 text-center font-display text-[0.72rem] tracking-[0.08em] text-white md:text-[0.8rem]">
                        Rai Behram
                      </figcaption>
                      <div className="ec-role sr-only">executive member</div>
                    </figure>
                    <figure className="ec-card exec flex w-[var(--portrait)] flex-col items-center">
                      <div className="portrait-frame">
                        <div className="portrait-inner">
                          <img
                            src="/council/ali-hussein.png"
                            alt="Executive"
                            className="ec-img h-full w-full bg-navy object-cover object-[center_20%]"
                          />
                        </div>
                      </div>
                      <figcaption className="ec-name mt-3.5 text-center font-display text-[0.72rem] tracking-[0.08em] text-white md:text-[0.8rem]">
                        Ali Hussain
                      </figcaption>
                      <div className="ec-role sr-only">executive member</div>
                    </figure>
                    <figure className="ec-card exec flex w-[var(--portrait)] flex-col items-center">
                      <div className="portrait-frame">
                        <div className="portrait-inner">
                          <img
                            src="/council/muahid-ahmad.png"
                            alt="Executive"
                            className="ec-img h-full w-full bg-navy object-cover object-[center_20%]"
                          />
                        </div>
                      </div>
                      <figcaption className="ec-name mt-3.5 text-center font-display text-[0.72rem] tracking-[0.08em] text-white md:text-[0.8rem]">
                        Muahid Ahmad
                      </figcaption>
                      <div className="ec-role sr-only">executive member</div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="categories" className="px-5 py-12 md:px-10 md:py-14">
            <div className="silver-rule mb-8 md:mb-10" />
            <div className="mx-auto w-full max-w-[44rem]">
              <h2 className="section-title font-display text-[1.35rem] tracking-[0.24em] text-white md:text-[1.7rem]">
                EVENTS CALENDAR
              </h2>
              <div className="gold-rule mt-5 max-w-[8rem]" />
              <div className="events-list mt-10" id="eventsList" />
            </div>
          </section>

          <section id="register" className="px-5 py-12 md:px-10 md:py-14">
            <div className="silver-rule mb-8 md:mb-10" />
            <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
              <h2 className="section-title font-display text-[1.45rem] tracking-[0.16em] text-white md:text-[1.9rem]">
                REGISTRATION
              </h2>
              <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
              <p className="mt-5 font-body text-[0.95rem] leading-[1.75] text-white/70">
                {site.eventDateLabel} · {site.host}
              </p>
              <a
                href={registerHref}
                className="cta-link mt-7 text-[0.74rem] md:text-[0.8rem]"
                target="_blank"
                rel="noreferrer"
              >
                REGISTRATION FORM →
              </a>
            </div>
          </section>

          <section className="faq-section px-5 py-12 md:px-10 md:py-14">
            <div className="silver-rule mb-8 md:mb-10" />
            <div className="mx-auto w-full max-w-[44rem]">
              <h2 className="section-title font-display text-[1.35rem] tracking-[0.24em] text-white md:text-[1.7rem]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="gold-rule mt-5 max-w-[8rem]" />
              <div className="mt-10">
                <FaqList items={abcFaqs} />
              </div>
            </div>
          </section>
        </div>

        <div id="society" className="page">
          <section className="relative px-5 pb-8 pt-[5.6rem] md:px-10 md:pb-10 md:pt-[6.4rem]">
            <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
              <h1 className="aces-hero-title">
                AITCHISON COLLEGE
                <br />
                ENTREPRENEURIAL SOCIETY
              </h1>
              <p className="mt-5 font-display text-[0.7rem] tracking-[0.32em] text-white/70 md:text-[0.78rem]">
                <span className="gold-text">XIV</span>
              </p>
              <div className="gold-rule mx-auto mt-6 max-w-[8rem]" />
            </div>
          </section>

          <section className="highlights-section px-5 md:px-10">
            <h2 className="section-title mb-5 text-center font-display text-[1.35rem] tracking-[0.24em] text-white md:text-[1.7rem]">
              ACES HIGHLIGHTS
            </h2>
            <div className="gold-rule mx-auto mb-8 max-w-[8rem]" />
            <div className="highlights-carousel">
              {acesHighlights.map((moment, index) => (
                <article
                  className={`highlight-slide${index === 0 ? " active" : ""}`}
                  key={moment.id}
                >
                  <a href={`/news/${moment.slug}`} className="highlight-link">
                    <div className="highlight-image">
                      <img src={moment.image} alt={moment.imageAlt} />
                    </div>
                    <div className="highlight-content">
                      <div className="highlight-label">{moment.kicker}</div>
                      <div className="highlight-title">{moment.headline}</div>
                    </div>
                  </a>
                </article>
              ))}
              <div className="highlight-nav">
                <button type="button" id="highlightPrev" aria-label="Previous highlight">
                  ←
                </button>
                <button type="button" id="highlightNext" aria-label="Next highlight">
                  →
                </button>
              </div>
            </div>
            <div className="highlight-dots">
              {acesHighlights.map((moment, index) => (
                <button
                  className={`highlight-dot${index === 0 ? " active" : ""}`}
                  data-slide={String(index)}
                  aria-label={`${moment.headline} highlight`}
                  key={moment.id}
                />
              ))}
            </div>
            <div className="mt-9 text-center">
              <a href="/recognition" className="cta-link text-[0.68rem]">
                RECOGNITION →
              </a>
            </div>
          </section>

          <div className="society-content px-5 py-12 md:px-10">
            <Reveal>
              <div className="advisor-card mx-auto max-w-[40rem] text-center">
              <p className="gold-text advisor-kicker">Staff Advisor</p>
              <div className="advisor-frame mt-6">
                <img
                  src="/XIII Vectors/staff-advisor.png"
                  alt="Miss Tosheeba Sarwar"
                  className="advisor-pfp"
                />
              </div>
              <div className="advisor-info mt-7">
                <h3 className="advisor-name">Miss Tosheeba Sarwar</h3>
                <p className="advisor-role">Staff Advisor · Aitchison Entrepreneurial Society</p>
                <div className="gold-rule mx-auto mt-6 max-w-[5.5rem]" />
                <blockquote className="advisor-message">
                  The Entrepreneurial Society exists to dismantle the boundary between theoretical
                  understanding and market execution. We demand rigor, reward initiative, and cultivate
                  the disciplined mindset required to navigate complex commercial landscapes. Our mandate
                  is clear: produce operators, not observers.
                </blockquote>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.08}>
            <p className="aces-intro-paragraph mx-auto mt-16 max-w-[42rem] font-body text-[1.05rem] leading-[1.8] text-white/74">
              The <strong>Aitchison Entrepreneurial Society (ACES)</strong> is among Pakistan’s most
              distinguished student societies for entrepreneurship, leadership, and commercial
              practice — at Aitchison and beyond.
            </p>
            </Reveal>

            <div className="mt-12">
              <AcesBenefits />
            </div>

            <div className="initiatives-list mx-auto mt-16 max-w-[44rem] text-left">
              <div className="initiative-panel">
                <div className="initiative-label">Publication</div>
                <div className="initiative-title">Aitchison Business Review</div>
                <div className="initiative-desc">
                  Pakistan’s premier high-school business journal — student research, economic
                  journalism, and editorial analysis.
                </div>
                <a href="/abr" className="cta-link initiative-button mt-6 text-[0.68rem]">
                  EXPLORE PUBLICATION →
                </a>
              </div>
              <div className="initiative-panel">
                <div className="initiative-label">Startup Incubator</div>
                <div className="initiative-title">Aitchison Incubation Programme</div>
                <div className="initiative-desc">
                  Seed capital, industry mentorship, and structured guidance to take a student idea
                  through commercial development.
                </div>
                <a href="/incubation" className="cta-link initiative-button mt-6 text-[0.68rem]">
                  EXPLORE PROGRAMME →
                </a>
              </div>
              <div className="initiative-panel">
                <div className="initiative-label">Internal Competition</div>
                <div className="initiative-title">Inter-House Championship</div>
                <div className="initiative-desc">
                  Delegates from all 17 Aitchison houses pitch original ventures in a structured
                  intra-college tournament.
                </div>
                <a href="/inter-house" className="cta-link initiative-button mt-6 text-[0.68rem]">
                  VIEW CHAMPIONSHIP →
                </a>
              </div>
            </div>
          </div>

          <section className="faq-section px-5 py-12 md:px-10 md:py-14">
            <div className="silver-rule mb-8 md:mb-10" />
            <div className="mx-auto w-full max-w-[44rem]">
              <h2 className="section-title font-display text-[1.35rem] tracking-[0.24em] text-white md:text-[1.7rem]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="gold-rule mt-5 max-w-[8rem]" />
              <div className="mt-10">
                <FaqList items={acesFaqs} />
              </div>
              <div className="mt-14 text-center">
                <a
                  href="https://www.instagram.com/abcxiv2027/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-[0.78rem] uppercase tracking-[0.22em] text-silver/70"
                >
                  Visit our Instagram
                </a>
              </div>
            </div>
          </section>
        </div>

        <div id="response" className="page">
          <section className="relative px-5 pb-8 pt-[5.6rem] md:px-10 md:pt-[6.4rem]">
            <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
              <h1 className="font-display text-[1.55rem] tracking-[0.16em] text-white md:text-[2.05rem]">
                DIRECTIVE RESPONSE
              </h1>
              <p className="mt-6 font-body text-[1.05rem] leading-[1.8] text-white/74">
                Feedback and recommendations for the society.
              </p>
              <div className="gold-rule mx-auto mt-6 max-w-[8rem]" />
            </div>
          </section>
          <div className="form-frame px-5 pb-20">
            <form id="responseForm">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Surname, Given Name" required />
              </div>
              <div className="form-group">
                <label>Class / Year</label>
                <input type="text" placeholder="e.g. H2, A1" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="identifier@aitchison.edu.pk" required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select required>
                  <option value="">Select Classification</option>
                  <option value="events">Events &amp; Operations</option>
                  <option value="management">Council &amp; Governance</option>
                  <option value="ideas">Strategic Initiatives</option>
                  <option value="other">Miscellaneous</option>
                </select>
              </div>
              <div className="form-group">
                <label>Directive</label>
                <textarea placeholder="State your recommendation or concern with precision..." required />
              </div>
              <button type="submit" className="submit-btn">
                Send Response
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="px-5 pb-10 pt-2 md:px-10">
        <div className="gold-rule mx-auto max-w-[1120px]" />
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-1.5 py-8 text-center">
          <p className="font-display text-[0.78rem] tracking-[0.22em] text-white">
            ABC<span className="gold-text">XIV</span>
          </p>
          <p className="font-body text-[0.8rem] text-silver/80">Aitchison Business Concept — XIV</p>
          <p className="font-body text-[0.8rem] text-silver/45">Aitchison College</p>
        </div>
        <div className="help-wrap" id="helpWrap">
          <div className="help-options">
            <a
              className="help-option"
              href="https://www.instagram.com/abcxiv2027/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="help-option"
              href="https://www.google.com/maps/search/?api=1&query=Aitchison+College+Lahore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
            <a className="help-option" href={registerHref} target="_blank" rel="noreferrer">
              Registration
            </a>
          </div>
          <button className="help-button" id="helpButton" aria-label="Open help options" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M4.5 5.75A3.25 3.25 0 0 1 7.75 2.5h8.5A3.25 3.25 0 0 1 19.5 5.75v6.5a3.25 3.25 0 0 1-3.25 3.25H12.4l-3.55 3.2a.75.75 0 0 1-1.25-.55v-2.65H7.75A3.25 3.25 0 0 1 4.5 12.25v-6.5Zm3.25-.75a1.75 1.75 0 0 0-1.75 1.75v6.5c0 .966.784 1.75 1.75 1.75h1.2a.75.75 0 0 1 .75.75v1.5l2.35-2.12a.75.75 0 0 1 .5-.18h4.95a1.75 1.75 0 0 0 1.75-1.75v-6.5a1.75 1.75 0 0 0-1.75-1.75h-8.5Z"
              />
            </svg>
          </button>
        </div>
      </footer>

      <div className="toast" id="toast">
        Response sent.
      </div>
    </>
  );
}
