"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export const chromeLinks = [
  { href: "/#society", label: "ACES" },
  { href: "/", label: "ABC" },
  { href: "/our-team", label: "Our Team" },
  { href: "/abr", label: "ABR" },
  { href: "/study-guide", label: "Study Guide" },
  { href: "/recognition", label: "Recognition" },
  { href: "/#response", label: "Suggestion" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/waiver.pdf", label: "Liability Waiver" },
] as const;

export function SiteChrome({
  logo,
  current,
  children,
}: {
  logo: ReactNode;
  current?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`menu-backdrop${open ? " show" : ""}`} onClick={() => setOpen(false)} />
      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="absolute inset-x-0 bottom-0 gold-rule" />
        <nav className="mx-auto flex h-[4.35rem] w-full max-w-[1180px] items-center justify-between px-5 md:h-[4.85rem] md:px-8">
          <Link href="/" className="site-brand" aria-label={site.shortName}>
            {logo}
            <span className="nav-brand-text">
              <strong>ABC</strong> XIV
            </span>
          </Link>
          <button
            className="mobile-menu-btn"
            type="button"
            aria-label="Toggle Navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${open ? " show" : ""}`} id="navLinks">
            {chromeLinks.map((link) => {
              const className = `nav-link${current === link.href ? " active" : ""}`;
              if (link.href.endsWith(".pdf")) {
                return (
                  <li key={link.href}>
                    <a href={link.href} className={className} onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={link.href}>
                  <Link href={link.href} className={className} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="inner-page">{children}</main>
      <footer className="px-5 pb-10 pt-2 md:px-10">
        <div className="gold-rule mx-auto max-w-[1120px]" />
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-1.5 py-8 text-center">
          <p className="font-display text-[0.78rem] tracking-[0.22em] text-white">
            ABC<span className="gold-text">XIV</span>
          </p>
          <p className="font-body text-[0.8rem] text-silver/80">Aitchison Business Concept — XIV</p>
          <p className="font-body text-[0.8rem] text-silver/45">Aitchison College</p>
        </div>
      </footer>
    </>
  );
}
