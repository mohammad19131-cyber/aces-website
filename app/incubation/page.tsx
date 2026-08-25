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
          Seed capital, industry mentorship, and structured guidance for student ideas moving into
          commercial development.
        </p>
      </section>
      <section className="page-block">
        <p className="page-copy">
          A startup incubator and funding programme for Aitchison students — from first pitch through
          venture-building milestones.
        </p>
      </section>
      <section className="page-block">
        <h2 className="section-heading">Programme archive</h2>
        <div className="gold-rule mt-4 max-w-[8rem]" />
        <p className="empty-state">Programme photographs will appear here when they are published.</p>
      </section>
    </SiteFrame>
  );
}
