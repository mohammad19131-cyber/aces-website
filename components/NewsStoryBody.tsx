import { Reveal } from "@/components/Reveal";
import type { AcesHighlight, NewsEditorial } from "@/lib/recognition";
import { Fragment } from "react";

function EditorialBlock({ block }: { block: NewsEditorial }) {
  if (block.type === "pair") {
    return (
      <Reveal className={`news-pair${block.shape === "frame" ? " news-pair-frame" : ""}`}>
        {block.images.map((image) => (
          <figure className="news-figure" key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </Reveal>
    );
  }

  return (
    <Reveal>
      <figure className="news-figure news-wide">
        <img src={block.image.src} alt={block.image.alt} />
      </figure>
    </Reveal>
  );
}

export function NewsStoryBody({ story }: { story: AcesHighlight }) {
  const editorial = story.editorial ?? [];

  return (
    <div className="news-body">
      {story.paragraphs.map((paragraph, index) => (
        <Fragment key={paragraph.slice(0, 48)}>
          <p>{paragraph}</p>
          {editorial
            .filter((block) => block.after === index)
            .map((block) => (
              <EditorialBlock
                block={block}
                key={`${block.type}-${block.after}`}
              />
            ))}
        </Fragment>
      ))}
    </div>
  );
}
