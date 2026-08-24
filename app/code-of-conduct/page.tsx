import { SiteFrame } from "@/components/SiteFrame";
import { codeOfConductIntro, codeOfConductSections } from "@/lib/code-conduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct — ABC XIV",
};

export default async function CodeOfConductPage() {
  return (
    <SiteFrame current="/code-of-conduct">
      <section className="page-hero">
        <p className="gold-text page-kicker">Aitchison College Entrepreneurial Society</p>
        <h1>Code of Conduct</h1>
        <div className="gold-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="page-lede">{codeOfConductIntro}</p>
      </section>
      <section className="page-block conduct-layout">
        <aside className="conduct-toc">
          <p className="guide-kicker">Contents</p>
          <ul>
            {codeOfConductSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  {section.number} {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="conduct-rules">
          {codeOfConductSections.map((section) => (
            <article className="rule-section" id={section.id} key={section.id}>
              <p className="gold-text page-kicker">
                {section.number} / {section.title}
              </p>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.rules?.map((rule) => (
                <div key={rule.title} className="rule-block">
                  <h3>{rule.title}</h3>
                  <p>{rule.text}</p>
                </div>
              ))}
              {section.list ? (
                <ul className="rule-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.afterList?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
