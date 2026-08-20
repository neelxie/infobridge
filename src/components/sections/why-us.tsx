import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Multidisciplinary by design",
    description:
      "Technologists, researchers, policy advisors and communicators work on the same engagement — not in a chain of separate handoffs.",
  },
  {
    title: "Evidence-based decision making",
    description:
      "Recommendations are grounded in data, field research and delivery experience, not templated frameworks.",
  },
  {
    title: "Fluent in public and private sector realities",
    description:
      "We understand procurement cycles, donor reporting, and political-economy constraints alongside commercial delivery pressure.",
  },
  {
    title: "Regional and local knowledge",
    description:
      "Work is grounded in the operating realities of the communities and institutions we serve, not adapted from unrelated contexts.",
  },
  {
    title: "Cross-sector collaboration",
    description:
      "Experience convening government, NGO, academic and private-sector stakeholders around a shared program of work.",
  },
  {
    title: "Professional, accountable delivery",
    description:
      "Clear scopes, documented handovers, and a single point of accountability across every discipline involved.",
  },
];

export function WhyUs() {
  return (
    <section className="section-pad bg-primary text-white">
      <div className="container-content">
        <SectionHeader
          eyebrow="Why work with us"
          title="What clients get from a multidisciplinary practice"
          className="[&_h2]:text-white [&_p]:text-white/65"
        />
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-light" aria-hidden="true" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
