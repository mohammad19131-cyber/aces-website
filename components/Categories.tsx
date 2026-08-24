import { Reveal } from "@/components/Reveal";
import {
  compulsoryCategories,
  optionalCategories,
  type Category,
} from "@/lib/site";

function CategoryList({
  title,
  items,
}: {
  title: string;
  items: Category[];
}) {
  return (
    <div>
      <h3 className="gold-text font-display text-[0.72rem] tracking-[0.3em] md:text-[0.8rem]">
        {title}
      </h3>
      <div className="mt-6">
        {items.map((category) => (
          <article key={category.number} className="category-row">
            <div className="silver-rule-left" />
            <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-8 md:py-7">
              <span className="gold-text font-display text-[1.35rem] tracking-[0.12em] md:text-[1.7rem]">
                {category.number}
              </span>
              <div>
                <h4 className="category-name font-display text-[1.02rem] tracking-[0.1em] text-white transition-colors duration-300 md:text-[1.18rem]">
                  {category.name.toUpperCase()}
                </h4>
                <p className="mt-2.5 max-w-[42rem] font-body text-[0.92rem] leading-[1.75] text-white/62">
                  {category.description}
                </p>
              </div>
            </div>
          </article>
        ))}
        <div className="silver-rule-left" />
      </div>
    </div>
  );
}

export function Categories() {
  return (
    <section id="categories" className="px-5 py-16 md:px-10 md:py-20">
      <div className="silver-rule mb-16 md:mb-20" />
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <h2 className="font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
            CATEGORIES
          </h2>
          <div className="gold-rule mt-5 max-w-[8rem]" />
        </Reveal>

        <div className="mx-auto mt-10 max-w-[44rem] space-y-14 md:mt-12">
          <Reveal>
            <CategoryList title="COMPULSORY CATEGORIES" items={compulsoryCategories} />
          </Reveal>
          <Reveal delay={0.08}>
            <CategoryList title="OPTIONAL CATEGORIES" items={optionalCategories} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
