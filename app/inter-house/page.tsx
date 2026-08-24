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
          An intra-college tournament where delegates from all 17 Aitchison houses pitch original
          business ventures, driving structured rivalry, innovation, and cross-house collaboration.
        </p>
      </section>
      <section className="page-block">
        <div className="info-grid">
          <article className="info-card overlay-pad">
            <h2>Format</h2>
            <p>
              Delegates from all 17 Aitchison houses pitch original business ventures in a structured
              intra-college tournament.
            </p>
          </article>
          <article className="info-card overlay-pad">
            <h2>Purpose</h2>
            <p>
              The championship is designed to drive structured rivalry, innovation, and cross-house
              collaboration.
            </p>
          </article>
        </div>
        <div className="info-card overlay-pad empty-panel mt-8">
          <h2>Championship details</h2>
          <p>
            Fixtures, house briefs, and results will appear here when the organising committee
            publishes them.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
