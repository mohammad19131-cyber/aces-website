import { SiteFrame } from "@/components/SiteFrame";
import { NewsStoryBody } from "@/components/NewsStoryBody";
import { acesHighlights, getAcesHighlight } from "@/lib/recognition";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return acesHighlights.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = getAcesHighlight(slug);
  if (!story) return { title: "News — ABC XIV" };
  return {
    title: `${story.headline} — ABC XIV`,
    description: story.paragraphs[0],
  };
}

export default async function NewsStoryPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const story = getAcesHighlight(slug);
  if (!story) notFound();

  return (
    <SiteFrame current="/#society">
      <article className="news-article">
        <Link href="/#society" className="cta-link news-back text-[0.68rem]">
          ← ACES HIGHLIGHTS
        </Link>
        <p className="gold-text page-kicker news-kicker">{story.kicker}</p>
        <h1 className="news-headline">{story.headline}</h1>
        <div className="gold-rule mt-5 max-w-[8rem]" />
        <figure className={`news-hero${story.editorial?.length ? " news-hero-wide" : ""}`}>
          <img src={story.image} alt={story.imageAlt} />
        </figure>
        <NewsStoryBody story={story} />
        <Link href="/#society" className="cta-link news-back-end text-[0.68rem]">
          ← ACES HIGHLIGHTS
        </Link>
      </article>
    </SiteFrame>
  );
}
