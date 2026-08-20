import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="section-pad">
      <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3">Who we are</p>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.25rem]">
            One practice, built from disciplines that are usually kept apart.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-body sm:text-lg">
            InfoBridge was formed around a simple observation: the institutions we work with —
            government agencies, NGOs, universities, and private-sector organizations — rarely face
            problems that respect the boundaries between technology, research, policy, and communications.
            A digital government program is also a change-management problem. A research finding is only
            useful if it reaches the people who can act on it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
            We built a team that reflects that reality: software engineers, applied researchers,
            public-sector advisors, AI specialists and communicators who work on the same problems
            together, rather than handing work between separate firms.
          </p>
          <Button href="/about" variant="text" className="mt-6">
            More about our approach
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
