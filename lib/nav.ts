import type { MouseEvent } from "react";

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const offset = 84;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

export function onHashLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  ) {
    return;
  }
  if (!href.startsWith("#") || href === "#") {
    event.preventDefault();
    return;
  }
  event.preventDefault();
  scrollToId(href.slice(1));
}
