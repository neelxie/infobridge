import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { CtaSection } from "@/components/sections/cta-section";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Selected work across technology, public-sector advisory, research and communications.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects & case studies"
        description="A selection of engagements across our four capability areas. This section is populated only with verified project information as it becomes available for publication."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section className="section-pad">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
