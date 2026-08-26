"use client";

import { Reveal } from "@/components/Reveal";
import { directors, eventHeadCategories } from "@/lib/team";

function Stem({ className = "" }: { className?: string }) {
  return <div className={`team-stem ${className}`.trim()} aria-hidden />;
}

function VacantFrame({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <div className={`team-vacant team-vacant-${size}`} aria-hidden>
      <span className="team-vacant-inner" />
    </div>
  );
}

export function OurTeam() {
  return (
    <section id="council" className="px-5 py-12 md:px-10 md:py-14">
      <div className="silver-rule mb-8 md:mb-10" />
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="council-panel our-team-panel px-5 py-11 sm:px-10 md:px-16 md:py-16">
          <Reveal>
            <h2 className="our-team-title">OUR TEAM</h2>
            <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="team-level team-ec">
              <h3 className="team-level-title">EXECUTIVE COUNCIL</h3>
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
          </Reveal>

          <Stem className="team-stem-lg" />

          <Reveal delay={0.08}>
            <div className="team-level team-core">
              <h3 className="team-core-title">HEADS OF CORE TEAM</h3>
              <div className="gold-rule mx-auto mt-4 max-w-[7.5rem]" />
            </div>
          </Reveal>

          <div className="team-fork" aria-hidden>
            <span className="team-fork-stem" />
            <span className="team-fork-bar" />
            <span className="team-fork-drop team-fork-drop-left" />
            <span className="team-fork-drop team-fork-drop-right" />
          </div>

          <div className="team-branches">
            <Reveal delay={0.1}>
              <div className="team-branch">
                <h3 className="team-branch-title">SECRETARIAT</h3>
                <p className="team-branch-lede">
                  Responsible for the individual ABC categories.
                </p>

                <Stem className="team-stem-sm" />

                <h4 className="team-rung-title">EVENT HEADS</h4>
                <div className="team-eh-grid">
                  {eventHeadCategories.map((category) => (
                    <article className="team-seat" key={category.id}>
                      <div className="team-seat-mark">
                        <img src={category.image} alt={category.name} />
                      </div>
                      <p className="team-seat-role">Event Head</p>
                      <p className="team-seat-office">{category.name}</p>
                    </article>
                  ))}
                </div>

                <Stem className="team-stem-sm" />

                <h4 className="team-rung-title">ASSISTANT EVENT HEADS</h4>
                <div className="team-assistant-row">
                  <article className="team-seat team-seat-quiet">
                    <VacantFrame size="sm" />
                    <p className="team-seat-role">Assistant Event Head</p>
                  </article>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="team-branch">
                <h3 className="team-branch-title">DIRECTORATE</h3>
                <p className="team-branch-lede team-branch-lede-spacer" />

                <Stem className="team-stem-sm" />

                <h4 className="team-rung-title">DIRECTORS</h4>
                <div className="team-director-grid">
                  {directors.map((director) => (
                    <article className="team-seat team-seat-director" key={director.id}>
                      <VacantFrame size="md" />
                      <p className="team-seat-role">{director.role}</p>
                      <p className="team-seat-office">{director.office}</p>
                    </article>
                  ))}
                </div>

                <Stem className="team-stem-sm" />

                <h4 className="team-rung-title">ASSISTANT DIRECTOR</h4>
                <div className="team-assistant-row">
                  <article className="team-seat team-seat-quiet">
                    <VacantFrame size="sm" />
                    <p className="team-seat-role">Assistant Director</p>
                  </article>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
