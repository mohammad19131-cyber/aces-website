import { readFile } from "node:fs/promises";
import path from "node:path";

export async function Logo({ className }: { className?: string }) {
  const svg = await readFile(path.join(process.cwd(), "public", "logo.svg"), "utf8");

  return (
    <span
      className={`site-logo ${className ?? ""}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
