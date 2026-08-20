import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { caseStudies } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((x) => x.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.challenge };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((x) => x.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={study.sector}
        title={study.title}
        description={study.client}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: study.title },
        ]}
      />
      <section className="section-pad">
        <div className="container-content max-w-prose space-y-10">
          <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-border bg-surface font-mono text-xs uppercase tracking-wide text-muted">
            Project Visual
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-heading">The challenge</h2>
            <p className="mt-3 leading-relaxed text-body">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-heading">Our approach</h2>
            <p className="mt-3 leading-relaxed text-body">{study.approach}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-heading">Outcomes</h2>
            <p className="mt-3 leading-relaxed text-body">{study.outcomes}</p>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
