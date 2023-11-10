import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/navbar/main-nav";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/footer/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 sticky top-0 backdrop-blur-md">
        <div className="flex h-15 items-center mx-2 justify-between md:justify-evenly py-5">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          {/* <MainNav items={marketingConfig.mainNav} /> */}
          <a href={siteConfig.links.github} target="_blank">
            <Icons.gitHub className="w-8 h-8" />
          </a>
        </div>
      </header>
      <main className="flex-1 app">{children}</main>
      <SiteFooter />
    </div>
  );
}
