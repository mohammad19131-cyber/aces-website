import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aitchison Incubation Programme — ABC XIV",
};

export default async function IncubationPage() {
  return (
    <SiteFrame current="/incubation">
      <section className="page-hero">
        <p className="gold-text page-kicker">Startup Incubator</p>
        <h1>Aitchison Incubation Programme</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">
          A dedicated platform for student entrepreneurs to develop ideas into viable ventures
          through structured incubation, mentorship, commercial guidance, and access to early-stage
          support.
        </p>
      </section>
      <section className="page-block">
        <p className="page-copy">
          A dedicated startup incubator and funding programme designed to transform student ideas into
          viable ventures — providing seed capital, mentorship from industry veterans, and structured
          guidance through every stage of commercial development.
        </p>
        <div className="info-grid mt-8">
          <article className="info-card overlay-pad">
            <h2>Purpose</h2>
            <p>
              Transform promising student ideas into structured, testable and commercially viable
              ventures.
            </p>
          </article>
          <article className="info-card overlay-pad">
            <h2>Development</h2>
            <p>
              Participants can work through idea development, pitching, mentorship and venture-building
              milestones.
            </p>
          </article>
          <article className="info-card overlay-pad">
            <h2>Support</h2>
            <p>
              The programme is designed around guidance, entrepreneurial learning and opportunities to
              develop a venture beyond the classroom.
            </p>
          </article>
        </div>
      </section>
      <section className="page-block">
        <h2 className="section-heading">Programme archive</h2>
        <div className="gold-rule mt-4 max-w-[8rem]" />
        <p className="empty-state">
          Programme photographs will appear here when they are published.
        </p>
      </section>
    </SiteFrame>
  );
}
