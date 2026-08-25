import { RecognitionBoard } from "@/components/RecognitionBoard";
import { SiteFrame } from "@/components/SiteFrame";
import {
  featuredContributors,
  recognitionIntro,
  topPerformers,
} from "@/lib/recognition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recognition — ABC XIV",
  description:
    "ABC XIV recognition — students who contribute to ACES, and those who stand out in competition.",
};

export default async function RecognitionPage() {
  return (
    <SiteFrame current="/recognition">
      <section className="page-hero recognition-hero">
        <p className="gold-text page-kicker">ACES</p>
        <h1>Recognition</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">{recognitionIntro}</p>
      </section>
      <section className="page-block">
        <RecognitionBoard contributors={featuredContributors} performers={topPerformers} />
      </section>
    </SiteFrame>
  );
}
