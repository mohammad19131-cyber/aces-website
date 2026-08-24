import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteChrome";
import type { ReactNode } from "react";

export async function SiteFrame({
  current,
  children,
}: {
  current?: string;
  children: ReactNode;
}) {
  return (
    <SiteChrome
      current={current}
      logo={<Logo className="h-14 w-14 md:h-[4.15rem] md:w-[4.15rem]" />}
    >
      {children}
    </SiteChrome>
  );
}
