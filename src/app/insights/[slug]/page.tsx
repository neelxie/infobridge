import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { insights } from "@/content/site";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((x) => x.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((x) => x.slug === slug);
  if (!insight) notFound();

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={insight.date}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: insight.title },
        ]}
      />
      <section className="section-pad">
        <div className="container-content max-w-prose">
          <p className="leading-relaxed text-body">{insight.summary}</p>
          <div className="mt-8 rounded-lg border border-dashed border-border bg-surface p-8 text-sm text-muted">
            Full publication content, downloadable PDF, and citation details to be added by the company.
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
