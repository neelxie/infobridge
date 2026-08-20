import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { InsightCard } from "@/components/ui/insight-card";
import { CtaSection } from "@/components/sections/cta-section";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research publications, policy briefs, technical reports and articles from our team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & research"
        title="Publications, briefs and thinking from our team"
        description="Because our team includes academics, researchers and technical specialists, this section carries our published work — for government, NGO and academic audiences in particular."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />
      <section className="section-pad">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
