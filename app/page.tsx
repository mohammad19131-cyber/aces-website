import { IndexSite } from "@/components/IndexSite";
import { Logo } from "@/components/Logo";

export default async function Home() {
  const logo = <Logo className="h-14 w-14 md:h-[4.15rem] md:w-[4.15rem]" />;
  const loaderLogo = <Logo className="h-28 w-28 md:h-36 md:w-36" />;

  return <IndexSite logo={logo} loaderLogo={loaderLogo} />;
}
