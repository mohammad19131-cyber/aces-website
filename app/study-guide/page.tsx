import { SiteFrame } from "@/components/SiteFrame";
import { StudyGuideGrid } from "@/components/StudyGuideGrid";
import { studyGuideData, studyGuideTypes } from "@/lib/study-guide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Guide — ABC XIV",
  description: "Official category formats and competition details for Aitchison Business Concept XIV.",
};

const tracks = studyGuideTypes.filter((item) => item.id !== "all");

export default async function StudyGuidePage() {
  return (
    <SiteFrame current="/study-guide">
      <section className="page-hero">
        <p className="gold-text page-kicker">ABC XIV</p>
        <h1>Category Study Guide</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">
          Official formats and competition details for Aitchison Business Concept XIV.
        </p>
        <p className="page-meta">12 categories</p>
      </section>

      <section className="page-block">
        <h2 className="section-heading">Revision index</h2>
        <div className="gold-rule mt-4 max-w-[8rem]" />
        <div className="track-grid mt-8">
          {tracks.map((track) => (
            <article className="info-card overlay-pad" key={track.id}>
              <h3>{track.label}</h3>
              <ul className="track-list">
                {studyGuideData
                  .filter((category) => category.type === track.id)
                  .map((category) => (
                    <li key={category.id}>
                      <a href={`#guide-${category.id}`}>{category.name}</a>
                    </li>
                  ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-block">
        <h2 className="section-heading">Subject guides</h2>
        <div className="gold-rule mt-4 max-w-[8rem]" />
        <div className="mt-8">
          <StudyGuideGrid />
        </div>
      </section>
    </SiteFrame>
  );
}
