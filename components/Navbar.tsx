"use client";

import { useEffect, useState } from "react";
import { onHashLinkClick } from "@/lib/nav";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ul className="hidden items-center gap-9 md:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.24em]"
              {...(link.href.endsWith(".pdf")
                ? { download: "Waiver of Liability.pdf" }
                : { onClick: (event) => onHashLinkClick(event, link.href) })}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex w-[18px] flex-col gap-[5px]">
          <span
            className={`h-[1.5px] w-full bg-white transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-full bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-full bg-white transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-[4.35rem] bg-navy/96 md:hidden">
          <div className="silver-rule" />
          <ul className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.endsWith(".pdf")
                    ? { download: "Waiver of Liability.pdf" }
                    : {})}
                  onClick={(event) => {
                    setOpen(false);
                    if (!link.href.endsWith(".pdf")) {
                      onHashLinkClick(event, link.href);
                    }
                  }}
                  className="block py-3.5 font-body text-[0.78rem] font-medium uppercase tracking-[0.22em] text-white/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
