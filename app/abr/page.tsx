import { SiteFrame } from "@/components/SiteFrame";
import { AbrReader } from "@/components/AbrReader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABR — ABC XIV",
};

export default async function AbrPage() {
  return (
    <SiteFrame current="/abr">
      <section className="page-hero">
        <p className="gold-text page-kicker">Publication</p>
        <h1>Aitchison Business Review</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">
          Pakistan&apos;s premier high-school business journal — student research, economic journalism,
          and editorial analysis.
        </p>
      </section>
      <section className="page-block">
        {/* Flipbook loader ported from abr.html — realistic page-turn via StPageFlip + PDF.js */}
        <AbrReader />
      </section>
    </SiteFrame>
  );
}
