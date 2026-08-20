import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { TeamGrid } from "@/components/sections/team-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the multidisciplinary team behind InfoBridge — media professionals, public-sector consultants, software engineers, researchers and AI specialists.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Depth of expertise, across every discipline we work in."
        description="Our team spans media, public-sector consulting, software engineering, medical and agritech research, and applied AI — filter by category to find the right point of contact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <section className="section-pad">
        <div className="container-content">
          <TeamGrid />
        </div>
      </section>
      <CtaSection
        title="Want to work with a specific team?"
        description="Let us know your area of interest and we'll connect you with the right people."
      />
    </>
  );
}
