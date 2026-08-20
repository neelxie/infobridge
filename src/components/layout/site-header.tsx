"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // Closing the mobile drawer on navigation is a deliberate sync with the
    // router, not derived render state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/90 backdrop-blur transition-colors",
        scrolled && "border-border shadow-subtle"
      )}
    >
      <div className="container-content flex h-18 items-center justify-between">
        <Link href="/" aria-label={`${undefined}Home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-body hover:text-primary"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-[1px] h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="default">
            Discuss a Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-heading lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-18 z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-primary text-white transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <nav aria-label="Mobile" className="container-content flex flex-col gap-1 py-8">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-white/10 py-4 font-display text-xl",
                  active ? "text-accent-light" : "text-white"
                )}
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 opacity-60" aria-hidden="true" />
              </Link>
            );
          })}
          <Button href="/contact" size="lg" className="mt-8 w-full" variant="secondary">
            Discuss a Project
          </Button>
        </nav>
      </div>
    </header>
  );
}
