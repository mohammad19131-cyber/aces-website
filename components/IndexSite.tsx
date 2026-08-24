"use client";

import { useEffect, type ReactNode } from "react";
import { closeMenu, initIndexSite, showTab, toggleMenu } from "@/lib/index-site";
import { site } from "@/lib/site";

const abcFaqs = [
  {
    q: "What is the registration deadline?",
    a: "The registration deadline for ABC XIV will be announced through our official Instagram page and communicated via email to all registered schools. We recommend registering early to secure your place and avoid missing any important updates or registration windows.",
  },
  {
    q: "How do I register for the event?",
    a: "Click the “Register for ABC XIV” button on this page and complete the registration form with your team and participant details. You will then be asked to select your preferred competition categories and complete the payment process. A confirmation email will be sent once your registration has been successfully completed.",
  },
  {
    q: "Can I participate individually, or do I need a team?",
    a: "Participation requirements vary by category. Some events, such as Chess and Muney, are designed for individual participants, while others, such as Build Your Own Idea and Corporate Espionage, require teams of two to four members. Please review the rules for your chosen category before registering.",
  },
  {
    q: "What is the event schedule?",
    a: "The detailed schedule will be shared with all registered participants approximately one week before the Olympiad. The event typically spans two days and includes the opening ceremony, competition rounds, networking opportunities, special sessions, and the closing awards ceremony.",
  },
  {
    q: "What is the competition format?",
    a: "Each category follows its own competition format, ranging from live pitching and case-study analysis to simulated trading and creative presentations. Preliminary rounds are generally held on Day 1, followed by finals and final showdowns on Day 2.",
  },
  {
    q: "What should I bring to the event?",
    a: "Participants should bring their school ID, a notepad, pens, and a laptop if it is required for their chosen category. Any presentation materials should be prepared in accordance with the guidelines provided by the organising committee. The dress code for the event is formal business attire.",
  },
  {
    q: "Will all participants receive certificates or prizes?",
    a: "All participants will receive a certificate of participation. Winners, runners-up, and second runners-up in each category will receive recognition through trophies, cash prizes, and merit certificates. Additional overall awards, including Best Delegation and other special distinctions, will also be presented during the closing ceremony.",
  },
  {
    q: "Who can I contact if I have any questions?",
    a: "If you have any questions, you can contact the ABC XIV organising team through the Suggestion tab on this website or by sending us a direct message through our official Instagram page. You may also contact the General Secretary via the email address provided in your registration confirmation.",
  },
  {
    q: "How many days is the event?",
    a: "ABC XIV is a two-day event. Day 1 includes registration, the opening ceremony, and preliminary rounds across the various categories. Day 2 features the finals, special sessions, and the grand closing and awards ceremony.",
  },
  {
    q: "How many categories can delegates participate in?",
    a: "Delegates may participate in as many categories as they wish, provided there are no scheduling conflicts. There is no minimum participation requirement, and delegates are encouraged to explore multiple categories to make the most of their ABC XIV experience.",
  },
  {
    q: "What benefits do I get from participating in the event?",
    a: "Participants gain valuable experience through high-level competition, opportunities to connect with students from across the country, and mentorship from industry professionals. Participants also receive certificates for their portfolios and may become eligible for opportunities such as the Spark Tank incubation programme and future ACES Executive Board positions.",
  },
  {
    q: "What are the criteria for Best Delegation, and what overall awards are available?",
    a: "Each competition category awards a winner, runner-up, and second runner-up. These placements contribute double points towards the Best Delegation standings. Enterprise carries no additional weighting towards the Best Delegation award. In addition to Best Delegation, the Olympiad will recognise a Best Delegation Runner-Up, Outstanding Best Delegation, and Best Team.",
  },
];

const acesFaqs = [
  {
    q: "How do I become a member of ACES?",
    a: "Membership is open to all Aitchison College students with an interest in business, entrepreneurship, and leadership. Students can get involved by attending ABC Summer Camps or by reaching out to a member of the Executive Council. Active participation in ACES events, initiatives, and competitions is the best way to become an engaged member and work towards earning blazer points.",
  },
  {
    q: "What competitions does ACES participate in?",
    a: "ACES participates in a wide range of leading national and international business competitions, including LUMS YLES, KGES, the Blue Ocean Challenge, and the International Business Olympiad. Members are supported through dedicated training, mentorship, and preparation sessions designed to help them perform at their best.",
  },
  {
    q: "What is the Co-Curricular Blazer and how do I earn points?",
    a: "The Co-Curricular Blazer is one of Aitchison College’s highest distinctions, recognising students who have demonstrated exceptional achievement and contribution beyond the classroom. ACES members can earn blazer points through competition achievements, Executive Board leadership, and meaningful contributions to the society. For example, securing five national or international competition wins can earn 1.5 points.",
  },
  {
    q: "How does Spark Tank support student startups?",
    a: "Spark Tank gives aspiring student entrepreneurs the opportunity to turn their ideas into viable ventures. Selected startups receive access to seed funding, industry mentorship, workspace, and a structured incubation programme. Through a series of pitch rounds and development milestones, participants receive both financial and strategic support as they refine and grow their ventures.",
  },
  {
    q: "Can I join ACES without prior business experience?",
    a: "Absolutely. ACES welcomes students at every level of experience and is designed to help members build their business knowledge from the ground up. Through training programmes, workshops, competitions, and peer mentorship, students can develop practical skills and confidence regardless of their previous experience.",
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
                Code of conduct
              </a>
            </li>
            <li>
              <a href="/waiver.pdf" className="nav-link">
                Liability waiver
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
              <p className="mt-8 max-w-[40rem] font-body text-[1.12rem] leading-[1.85] text-white/74 md:text-[1.22rem]">
                The Aitchison College Business Concept is the definitive platform for cultivating
                entrepreneurial leadership, strategic innovation, and financial discipline among the youth.
                We operate at the intersection of academic rigor and commercial execution, forging
                the next generation of institutional leaders.
              </p>
            </div>
          </section>

          <section className="timer-section px-5 pb-10 md:px-10">
            <div className="gold-rule mx-auto mb-8 max-w-[34rem]" />
            <div className="timer-label">Next Event Countdown</div>
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
                        Ali Hussein
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
              <h2 className="section-title font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
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
                href="https://forms.gle/hwTgDKNLNuLbWNw2A"
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
              <h2 className="section-title font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
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
              <h1 className="font-display text-[clamp(1.2rem,3vw,1.9rem)] tracking-[0.22em] text-white">
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
            <h2 className="section-title mb-5 text-center font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
              ACES HIGHLIGHTS
            </h2>
            <div className="gold-rule mx-auto mb-8 max-w-[8rem]" />
            <div className="highlights-carousel">
              <article className="highlight-slide active">
                <div className="highlight-image">
                  <img src="/yles.jpeg" alt="Aitchison Business Review" />
                </div>
                <div className="highlight-content">
                  <div className="highlight-label">Ntional win</div>
                  <div className="highlight-title">Best delegation at YLES</div>
                  <div className="highlight-desc">
                    Won pakistan premiere business competition after 19 years.
                  </div>
                </div>
              </article>
              <article className="highlight-slide">
                <div className="highlight-image">
                  <img src="/markhors den.jpeg" alt="Aitchison Incubation Programme" />
                </div>
                <div className="highlight-content">
                  <div className="highlight-label">Inter school win</div>
                  <div className="highlight-title">Best delegation at Markhors den</div>
                  <div className="highlight-desc" />
                </div>
              </article>
              <article className="highlight-slide">
                <div className="highlight-image">
                  <img src="/speaker session.jpeg" alt="Inter-House Championship" />
                </div>
                <div className="highlight-content">
                  <div className="highlight-label">speaker session</div>
                  <div className="highlight-title">guest speaker session with president Wapda.</div>
                  <div className="highlight-desc">
                    Held a guest speaker session with the preident of wapda which educated student about the
                    water scarcity problem that pakistan might face in the coming years
                  </div>
                </div>
              </article>
              <article className="highlight-slide">
                <div className="highlight-image">
                  <img src="/ja worlds.jpeg" alt="ACES Entrepreneurship" />
                </div>
                <div className="highlight-content">
                  <div className="highlight-label">Company of the year</div>
                  <div className="highlight-title">JA world wide best team</div>
                  <div className="highlight-desc" />
                </div>
              </article>
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
              <button className="highlight-dot active" data-slide="0" aria-label="Highlight 1" />
              <button className="highlight-dot" data-slide="1" aria-label="Highlight 2" />
              <button className="highlight-dot" data-slide="2" aria-label="Highlight 3" />
              <button className="highlight-dot" data-slide="3" aria-label="Highlight 4" />
            </div>
          </section>

          <div className="society-content px-5 py-12 md:px-10">
            <div className="advisor-card mx-auto max-w-[40rem] text-center">
              <div className="section-title gold-text mb-6 text-center font-display text-[0.72rem] tracking-[0.3em]">
                STAFF ADVISOR
              </div>
              <div className="advisor-frame">
                <img src="/XIII Vectors/staff.jpeg" alt="Staff Advisor" className="advisor-pfp" />
              </div>
              <div className="advisor-info mt-6">
                <h3 className="font-display text-[1.05rem] tracking-[0.14em] text-white">
                  Staff Advisor Directive
                </h3>
                <div className="advisor-role mt-2 font-body text-[0.8rem] tracking-[0.12em] text-silver/70">
                  Aitchison Entrepreneurial Society
                </div>
                <p className="advisor-message mt-6 font-body text-[1.05rem] leading-[1.85] text-white/74">
                  &ldquo;The Entrepreneurial Society exists to dismantle the boundary between theoretical
                  understanding and market execution. We demand rigor, reward initiative, and cultivate
                  the disciplined mindset required to navigate complex commercial landscapes. Our mandate
                  is clear: produce operators, not observers.&rdquo;
                </p>
              </div>
            </div>

            <p className="aces-intro-paragraph mx-auto mt-16 max-w-[44rem] font-body text-[1.05rem] leading-[1.85] text-white/74">
              The <strong>Aitchison Entrepreneurial Society (ACES)</strong> has established itself as one of
              Pakistan&apos;s most distinguished extracurricular institutions — pioneering youth entrepreneurship,
              strategic leadership, and commercial execution within Aitchison College and beyond. Its influence
              extends far past the college gates, inspiring student societies across the nation, forging an
              unbroken lineage of business operators, institutional leaders, and competitive minds who carry
              the ACES ethos into the highest echelons of global academia and industry.
            </p>

            <div className="section-title mt-12 text-center font-display text-[1.2rem] tracking-[0.28em] text-white">
              SOCIETY BENEFITS &amp; LAURELS
            </div>
            <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />

            <div className="benefits-list mx-auto mt-10 max-w-[44rem] text-left">
              <div className="benefit-item">
                <div className="silver-rule-left" />
                <div className="benefit-body py-5">
                  <div className="benefit-title">Co-Curricular Blazer Points</div>
                  <div className="benefit-desc">
                    Members earn formal credits toward Aitchison&apos;s prestigious Co-Curricular Blazer — 1.5
                    points for 5 national or international competition wins, with 1 point the president and 0.5
                    for General-Secretary
                  </div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="silver-rule-left" />
                <div className="benefit-body py-5">
                  <div className="benefit-title">University Laurels</div>
                  <div className="benefit-desc">
                    ACES accolades carry significant weight in Ivy-League and global university applications,
                    backed by a distinguished alumni history of acceptances at the world&apos;s most competitive
                    institutions.
                  </div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="silver-rule-left" />
                <div className="benefit-body py-5">
                  <div className="benefit-title">Executive Skill Mastery</div>
                  <div className="benefit-desc">
                    Develop the real-world competencies that define institutional leaders — public speaking,
                    high-stakes negotiation, crisis management, financial modeling, and commercial strategy.
                  </div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="silver-rule-left" />
                <div className="benefit-body py-5">
                  <div className="benefit-title">Podium Track Record</div>
                  <div className="benefit-desc">
                    Consistent top-tier finishes across Pakistan&apos;s most prestigious competitions — LUMS YLES,
                    KGES, Blue Ocean Challenge, and the International Business Olympiad.
                  </div>
                </div>
              </div>
              <div className="silver-rule-left" />
            </div>

            <div className="initiatives-list mx-auto mt-16 max-w-[44rem] text-left">
              <div className="initiative-panel">
                <div className="initiative-label">Publication</div>
                <div className="initiative-title">Aitchison Business Review</div>
                <div className="initiative-desc">
                  Pakistan&apos;s premier high-school business journal — a platform for student research, economic
                  journalism, and editorial analysis that shapes discourse beyond the classroom.
                </div>
                <a href="/abr" className="cta-link initiative-button mt-6 text-[0.68rem]">
                  EXPLORE PUBLICATION →
                </a>
              </div>
              <div className="initiative-panel">
                <div className="initiative-label">Startup Incubator</div>
                <div className="initiative-title">Aitchison Incubation Programme</div>
                <div className="initiative-desc">
                  A dedicated startup incubator and funding programme designed to transform student ideas into
                  viable ventures — providing seed capital, mentorship from industry veterans, and structured
                  guidance through every stage of commercial development.
                </div>
                <a href="/incubation" className="cta-link initiative-button mt-6 text-[0.68rem]">
                  EXPLORE PROGRAMME →
                </a>
              </div>
              <div className="initiative-panel">
                <div className="initiative-label">Internal Competition</div>
                <div className="initiative-title">Inter-House Championship</div>
                <div className="initiative-desc">
                  An intra-college tournament where delegates from all 17 Aitchison houses pitch original
                  business ventures, driving structured rivalry, innovation, and cross-house collaboration.
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
              <h2 className="section-title font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
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
                  For more queries visit our instagram page
                </a>
              </div>
            </div>
          </section>
        </div>

        <div id="response" className="page">
          <section className="relative px-5 pb-8 pt-[5.6rem] md:px-10 md:pt-[6.4rem]">
            <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
              <h1 className="font-display text-[1.45rem] tracking-[0.16em] text-white md:text-[1.9rem]">
                DIRECTIVE RESPONSE
              </h1>
              <p className="mt-6 font-body text-[1.05rem] leading-[1.85] text-white/74">
                Submit operational feedback and strategic recommendations for society improvement.
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
                Transmit Response
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
            <a className="help-option" href="https://forms.gle/hwTgDKNLNuLbWNw2A" target="_blank" rel="noreferrer">
              Registration
            </a>
          </div>
          <button className="help-button" id="helpButton" aria-label="Open help options" aria-expanded="false">
            ?
          </button>
        </div>
      </footer>

      <div className="toast" id="toast">
        Response transmitted successfully.
      </div>
    </>
  );
}
