import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { capabilities, values } from "@/content/site";
import { ArrowRight, Target, Telescope } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our mission, approach and multidisciplinary model — and why we combine technology, research, policy and communications expertise under one practice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built as one practice, not a holding company of specialists."
        description="InfoBridge exists because institutional problems don't arrive pre-sorted into technology, research, policy or communications categories — and neither should the teams that solve them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Overview */}
      <section className="section-pad">
        <div className="container-content max-w-prose">
          <p className="text-lg leading-relaxed text-body">
            InfoBridge is a multidisciplinary consultancy serving government institutions, NGOs and
            development organizations, research and academic institutions, and private-sector clients who
            need technology, research, advisory or communications expertise applied together rather than
            in isolation.
          </p>
          <p className="mt-5 leading-relaxed text-body">
            [Company overview paragraph — background, founding context, and areas of specialization to be
            provided by the company.]
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-content grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="card-surface p-8">
            <Target className="h-6 w-6 text-accent-dark" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-heading">Mission</h2>
            <p className="mt-3 leading-relaxed text-body">
              [Mission statement to be provided by the company — what the organization exists to
              accomplish for the institutions it serves.]
            </p>
          </div>
          <div className="card-surface p-8">
            <Telescope className="h-6 w-6 text-accent-dark" aria-hidden="true" />
            <h2 className="mt-4 font-display text-xl font-semibold text-heading">Vision</h2>
            <p className="mt-3 leading-relaxed text-body">
              [Vision statement to be provided by the company — the long-term impact the organization
              wants to create across the sectors it works in.]
            </p>
          </div>
        </div>
      </section>

      {/* Multidisciplinary model */}
      <section className="section-pad">
        <div className="container-content">
          <SectionHeader
            eyebrow="Our model"
            title="Why we combine these four disciplines"
            description="Each capability area is credible on its own. Held together, they let us follow a problem from evidence to implementation to public understanding, without losing context at each handoff."
          />
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <div key={cap.id} className="bg-surface p-7">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-heading">{cap.label}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-primary text-white">
        <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow !text-accent-light mb-3">Our approach</p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              How we actually work with institutional clients
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="space-y-8">
              {[
                {
                  title: "Understand the operating environment first",
                  body: "Before proposing a solution, we map the institutional, political and technical constraints the work will need to survive — procurement rules, staffing, connectivity, governance.",
                },
                {
                  title: "Assemble the right disciplines, not a default team",
                  body: "Each engagement draws on the specific mix of technology, research, advisory and communications expertise it actually needs.",
                },
                {
                  title: "Build for handover from day one",
                  body: "Documentation, training and knowledge transfer are part of the plan from the start, not an afterthought at project close.",
                },
                {
                  title: "Stay accountable to outcomes, not deliverables",
                  body: "We track whether the work changed a decision, a system, or an outcome — not just whether a report was submitted on time.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm text-accent-light">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-content">
          <SectionHeader eyebrow="What guides the work" title="Our values" className="mb-12" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card-surface p-6">
                <h3 className="font-display text-base font-semibold text-heading">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership link */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-content flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">
            Meet the people behind the practice
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Our leadership and technical staff span media, public policy, software engineering, medical
            research, agritech and applied AI.
          </p>
          <Button href="/team" variant="outline">
            Meet the team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
