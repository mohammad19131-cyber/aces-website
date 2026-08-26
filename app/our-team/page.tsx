import { OurTeam } from "@/components/OurTeam";
import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — ABC XIV",
};

export default async function OurTeamPage() {
  return (
    <SiteFrame current="/our-team">
      <section className="page-hero">
        <p className="gold-text page-kicker">ABC XIV</p>
        <h1>Our Team</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">
          The organisational structure of Aitchison Business Concept XIV.
        </p>
      </section>
      <OurTeam />
    </SiteFrame>
  );
}
