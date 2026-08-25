"use client";

import { Reveal } from "@/components/Reveal";
import type { RecognitionPerson } from "@/lib/recognition";
import { recognitionSlotCount } from "@/lib/recognition";

function PersonCard({ person }: { person: RecognitionPerson }) {
  const filled = Boolean(person.name);

  return (
    <article className="recognition-card" aria-hidden={filled ? undefined : true}>
      <div className="recognition-card-photo">
        {person.image ? <img src={person.image} alt={person.imageAlt || person.name} /> : null}
      </div>
      <div className="recognition-card-copy">
        {filled ? (
          <>
            {person.role ? <p className="gold-text recognition-card-role">{person.role}</p> : null}
            <h3>{person.name}</h3>
            {person.context ? <p className="recognition-card-context">{person.context}</p> : null}
            {person.result ? <p className="recognition-card-result">{person.result}</p> : null}
            {person.year ? <p className="recognition-card-year">{person.year}</p> : null}
          </>
        ) : (
          <>
            <span className="recognition-slot recognition-slot-role" />
            <span className="recognition-slot recognition-slot-name" />
            <span className="recognition-slot recognition-slot-copy" />
          </>
        )}
      </div>
    </article>
  );
}

function PersonGrid({ people }: { people: RecognitionPerson[] }) {
  const items =
    people.length > 0
      ? people
      : Array.from({ length: recognitionSlotCount }, (_, index) => ({
          id: `slot-${index + 1}`,
          name: "",
          role: "",
          context: "",
        }));

  return (
    <div className="recognition-grid">
      {items.map((person, index) => (
        <Reveal key={person.id} delay={index * 0.05}>
          <PersonCard person={person} />
        </Reveal>
      ))}
    </div>
  );
}

export function RecognitionBoard({
  contributors,
  performers,
}: {
  contributors: RecognitionPerson[];
  performers: RecognitionPerson[];
}) {
  return (
    <div className="recognition-board">
      <section className="recognition-section">
        <Reveal>
          <p className="gold-text recognition-section-index">01</p>
          <h2 className="section-heading">Featured Contributors</h2>
          <div className="gold-rule mt-4 max-w-[8rem]" />
          <p className="recognition-section-lede">Students who help run the society.</p>
        </Reveal>
        <PersonGrid people={contributors} />
      </section>

      <div className="silver-rule recognition-section-rule" />

      <section className="recognition-section">
        <Reveal>
          <p className="gold-text recognition-section-index">02</p>
          <h2 className="section-heading">Top Performers</h2>
          <div className="gold-rule mt-4 max-w-[8rem]" />
          <p className="recognition-section-lede">
            Students recognised for outstanding results.
          </p>
        </Reveal>
        <PersonGrid people={performers} />
      </section>
    </div>
  );
}
