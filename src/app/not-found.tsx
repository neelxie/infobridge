import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NodeField } from "@/components/ui/node-field";
import { primaryNav } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-primary text-white">
      <NodeField className="absolute inset-0 opacity-[0.25]" />
      <div className="container-content relative py-24 text-center">
        <p className="eyebrow !text-accent-light justify-center">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          This page has moved, or never existed.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          Double-check the address, or use one of the links below to find what you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </div>
        <nav aria-label="Suggested pages" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
