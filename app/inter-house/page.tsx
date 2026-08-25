import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inter-House Championship — ABC XIV",
};

export default async function InterHousePage() {
  return (
    <SiteFrame current="/inter-house">
      <section className="page-hero">
        <p className="gold-text page-kicker">Internal Competition</p>
        <h1>Inter-House Championship</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">
          Delegates from all 17 Aitchison houses pitch original ventures in a structured intra-college
          tournament.
        </p>
      </section>
      <section className="page-block">
        <div className="info-card overlay-pad empty-panel">
          <h2>Championship details</h2>
          <p>Fixtures, house briefs, and results will appear here when the organising committee publishes them.</p>
        </div>
      </section>
    </SiteFrame>
  );
}
