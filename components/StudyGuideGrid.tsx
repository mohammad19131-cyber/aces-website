"use client";

import { useMemo, useState } from "react";
import { studyGuideData, studyGuideTypes } from "@/lib/study-guide";

export function StudyGuideGrid() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  const items = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return studyGuideData.filter((category) => {
      const matchesType = type === "all" || category.type === type;
      const matchesQuery =
        needle.length === 0 ||
        category.name.toLowerCase().includes(needle) ||
        category.tagline.toLowerCase().includes(needle) ||
        category.overview.toLowerCase().includes(needle) ||
        category.type.toLowerCase().includes(needle);
      return matchesType && matchesQuery;
    });
  }, [query, type]);

  return (
    <>
      <div className="guide-toolbar">
        <input
          id="searchInput"
          className="guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search categories"
          aria-label="Search categories"
        />
        <div className="guide-filters">
          {studyGuideTypes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`filter-btn${type === item.id ? " active" : ""}`}
              onClick={() => setType(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="empty-state">No categories match your search query.</p>
      ) : (
        <div className="guide-grid" id="categoriesGrid">
          {items.map((category) => (
            <article className="guide-card" id={`guide-${category.id}`} key={category.id}>
              <div className="guide-banner">
                <img src={category.img} alt="" />
              </div>
              <div className="overlay-pad">
                <p className="guide-kicker">{category.tagline}</p>
                <h2>{category.name}</h2>
                <p>{category.overview}</p>
                <p className="guide-details">{category.details}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
