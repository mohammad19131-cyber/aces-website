import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-2 md:px-10">
      <div className="gold-rule mx-auto max-w-[1120px]" />
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-1.5 py-8 text-center">
        <p className="font-display text-[0.78rem] tracking-[0.22em] text-white">
          {site.shortName.replace("XIV", "")}
          <span className="gold-text">XIV</span>
        </p>
        <p className="font-body text-[0.8rem] text-silver/80">{site.fullName}</p>
        <p className="font-body text-[0.8rem] text-silver/45">{site.host}</p>
      </div>
    </footer>
  );
}
