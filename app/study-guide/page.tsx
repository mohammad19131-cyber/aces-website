import { SiteFrame } from "@/components/SiteFrame";
import { StudyGuideGrid } from "@/components/StudyGuideGrid";
import { studyGuideData, studyGuideTypes } from "@/lib/study-guide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Guide — ABC XIV",
  description:
    "Official Study Guide for Aitchison Business Concept XIV categories. Strategic frameworks, rules, case preparation, and master tactics.",
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
          Explore the official category formats and competition details for Aitchison Business
          Concept XIV.
        </p>
        <p className="page-meta">
          {studyGuideData.length} categories · Study resources · Revision reference
        </p>
      </section>

      <section className="page-block">
        <h2 className="section-heading">Study resources</h2>
        <div className="gold-rule mt-4 max-w-[8rem]" />
        <div className="info-grid mt-8">
          <article className="info-card overlay-pad">
            <h3>Subject guides</h3>
            <p>
              Each category card includes the official overview and competition details used across
              ABC XIV.
            </p>
          </article>
          <article className="info-card overlay-pad">
            <h3>Revision reference</h3>
            <p>
              Use the track index below to jump to Entrepreneurship, Finance, Strategy, or Creative
              categories.
            </p>
          </article>
          <article className="info-card overlay-pad">
            <h3>Search &amp; filter</h3>
            <p>
              Search by category name or filter by track to find the format you are preparing for.
            </p>
          </article>
        </div>
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
