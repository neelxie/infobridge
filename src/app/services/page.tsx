import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technology and software, public-sector advisory, applied research, and strategic communications — services structured around institutional problems.",
};

const categories = Array.from(new Set(services.map((s) => s.category)));

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services organized around problems, not departments."
        description="Every engagement can draw on one discipline or several. Below is the full range of what we offer — organized by category so it's easy to find the right starting point."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {categories.map((category, i) => {
        const items = services.filter((s) => s.category === category);
        return (
          <section key={category} className={`section-pad ${i % 2 === 1 ? "bg-surface border-y border-border" : ""}`}>
            <div className="container-content">
              <SectionHeader eyebrow={`0${i + 1}`} title={category} className="mb-10" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaSection
        title="Not sure which service fits your situation?"
        description="Describe the problem you're facing and we'll recommend the right combination of disciplines — no obligation."
      />
    </>
  );
}
