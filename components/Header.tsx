import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";

export async function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-x-0 bottom-0 gold-rule" />
      <nav className="mx-auto flex h-[4.35rem] w-full max-w-[1180px] items-center justify-between px-5 md:h-[4.85rem] md:px-8">
        <a href="#top" className="site-brand" aria-label={site.shortName}>
          <Logo className="h-14 w-14 md:h-[4.15rem] md:w-[4.15rem]" />
          <span className="sr-only">{site.shortName}</span>
        </a>
        <Navbar />
      </nav>
    </header>
  );
}
