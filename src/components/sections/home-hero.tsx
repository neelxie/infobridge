import { Button } from "@/components/ui/button";
import { NodeField } from "@/components/ui/node-field";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <NodeField className="absolute inset-x-0 bottom-0 h-[60%] w-full text-accent-light opacity-[0.35]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-content relative py-20 sm:py-28 lg:py-36">
        <p className="eyebrow !text-accent-light mb-6">
          Technology · Research · Public Sector · Communications
        </p>
        <h1 className="max-w-3xl text-[2.25rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
          Institutional problems rarely fit inside one discipline.
          <span className="text-accent-light"> Neither do we.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          InfoBridge is a multidisciplinary practice — technologists, researchers, public-sector
          advisors and communicators working as one team for government, NGO, academic and private-sector
          clients who need more than a single point of view.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg">
            Discuss a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/services" size="lg" variant="ghost" className="border border-white/20 hover:border-white/40">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
